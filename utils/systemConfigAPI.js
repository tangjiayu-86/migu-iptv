import { readFileSync, existsSync } from "node:fs"
import { writeJsonFileSync } from "./fileUtil.js"
import { dataPath } from "./paths.js"
import {
  reloadConfig, sanitizeSegment,
  userId, token, port, host, rateType, pass,
  enableHDR, enableH265, programInfoUpdateInterval, refreshToken, adminPath
} from "../config.js"

const SYSTEM_CONFIG_PATH = dataPath('system-config.json')

/**
 * 获取系统配置
 */
export function getSystemConfigAPI() {
  try {
    // 返回「实际生效」的配置：config.js 已把 system-config.json + 环境变量 + 默认值 解析合并。
    // 这样无论 id/token 等是用环境变量(muserId/mtoken…)还是配置文件设置的，
    // 管理页表单都能正确显示当前生效值（修复换电脑/无浏览器自动填充时表单显示为空的问题）。
    return {
      success: true,
      data: {
        userId,
        token,
        port: parseInt(port) || 1905,
        host,
        rateType: parseInt(rateType) || 3,
        pass,
        enableHDR,
        enableH265,
        programInfoUpdateInterval,
        refreshToken,
        adminPath
      }
    }
  } catch (error) {
    return {
      success: false,
      message: error.message
    }
  }
}

/**
 * 保存系统配置
 */
export function saveSystemConfigAPI(config) {
  try {
    // 读取已有配置，保留表单未提交的字段（如 refreshToken 等无 UI 的开关），
    // 避免每次保存把它们重置为默认值
    let existing = {}
    if (existsSync(SYSTEM_CONFIG_PATH)) {
      try {
        existing = JSON.parse(readFileSync(SYSTEM_CONFIG_PATH, 'utf-8'))
      } catch { existing = {} }
    }

    // 验证配置（白名单字段做类型校验，其余沿用已有值）
    const validated = {
      ...existing,
      userId: config.userId || "",
      token: config.token || "",
      port: parseInt(config.port) || 1905,
      host: config.host || "",
      rateType: parseInt(config.rateType) || 3,
      pass: config.pass || "",
      enableHDR: config.enableHDR !== false,
      enableH265: config.enableH265 !== false,
      programInfoUpdateInterval: config.programInfoUpdateInterval || "8"
    }
    if (config.refreshToken !== undefined) {
      validated.refreshToken = config.refreshToken !== false
    }
    if (config.adminPath !== undefined) {
      // 清洗为合法路径段（非法/保留字回退 admin），保证存储值与运行时一致
      validated.adminPath = sanitizeSegment(config.adminPath, 'admin')
    }

    // 原子写入，避免并发保存 / 写入中断损坏文件
    writeJsonFileSync(SYSTEM_CONFIG_PATH, validated)
    // 热更新配置：除端口和更新间隔外即时生效，无需重启
    reloadConfig()
    return {
      success: true,
      message: '配置保存成功（端口与更新间隔需重启生效，其余已即时生效）'
    }
  } catch (error) {
    return {
      success: false,
      message: error.message
    }
  }
}
