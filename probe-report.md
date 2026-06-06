# IPTV.m3u 探活报告（dry-run · 未修改文件）

- 运行时间(UTC): 2026-06-06T01:50:41.715Z
- 运行环境: GitHub Actions runner（海外）
- 总频道: **115**
- ✅ 存活: **88**
- ❌ 失效: **20**
- ⏭️ 跳过(rtmp，无法 HTTP 探测，保留不删): **7**

> 对比基线：作者本机（国内）探活为 **97/115**。若此处「存活」明显偏低，说明 GitHub 海外 runner 探不通国内源，应改在国内运行探活。

## ❌ 失效明细
- `[ETIMEDOUT]` 河北4K — https://event.pull.hebtv.com:443/live/live101.m3u8
- `[timeout]` 南宁文旅 — https://hls.nntv.cn/nnlive/WLSH_24.m3u8
- `[timeout]` 南宁娱乐 — http://hls.nntv.cn/nnlive/YSYL_244.m3u8
- `[timeout]` 宁夏文旅 — https://hls.ningxiahuangheyun.com/live/nxwl1M.m3u8
- `[timeout]` 宁夏少儿 — https://hls.ningxiahuangheyun.com/live/nxse1M.m3u8
- `[timeout]` 云南都市 — https://hwapi.yntv.net/62hdvf/rjwt14.m3u8
- `[timeout]` 云南娱乐 — https://hwapi.yntv.net/62hdvf/q9vs1b.m3u8
- `[timeout]` 梨园频道 — https://dxtx.hntv.tv/live/lypd.m3u8?txSecret=10c771842a0be59e8b575d765173ec96&txTime=7B923E0A&wsSecret=1966aa8a0405e1541cff782f56c75447&wsTime=1770400669
- `[timeout]` 文物宝库 — https://dxtx.hntv.tv/live/wwbk.m3u8?txSecret=317b89626134fd6bea6e129455b5ff18&txTime=7C4C635C&wsSecret=87c5daf4f4c3a09fb4e4cce0843d4a1c&wsTime=1770400669
- `[timeout]` 武术频道 — https://dxtx.hntv.tv/live/wssj.m3u8?txSecret=c38b4d31ba4c45c6babb5c47132123e3&txTime=7ABB976A&wsSecret=dfcdc24ac8a49ebd886337dc5cdc1568&wsTime=1770400669
- `[timeout]` 河南曲艺 — https://dxtx.hntv.tv/live/jczy.m3u8?txSecret=e785008e49564e5e738439b4dd2ae68e&txTime=7C4C6207&wsSecret=3f9e1d6e5c78cea99a876ce40f13202b&wsTime=1770400669
- `[timeout]` 凤凰中文 — http://cdn6.163189.xyz/163189/fhzw
- `[timeout]` 凤凰资讯 — http://cdn6.163189.xyz/163189/fhzx
- `[timeout]` 凤凰香港 — http://cdn6.163189.xyz/163189/fhhk
- `[timeout]` Astro AOD — https://o11.163189.xyz/stream/live/aod/
- `[timeout]` Astro AEC — https://o11.163189.xyz/stream/live/aec/
- `[timeout]` 无线新闻 — http://cdn6.163189.xyz/163189/wxxw
- `[404]` ViuTVsix — https://cdn10.163189.xyz/stream/163189/viu6/
- `[404]` HBO精选 — http://23.237.104.106:8080/USA_HBO2/tracks-v1a1/mono.m3u8
- `[404]` HBO 2 — http://23.237.104.106:8080/USA_HBO2/index.m3u8

## ⏭️ 跳过 (rtmp)
- 华视 — rtmp://f13h.mine.nu/sat/tv111
- 台视 — rtmp://f13h.mine.nu/sat/tv071
- 中视 — rtmp://f13h.mine.nu/sat/tv091
- 纬来育乐 — rtmp://f13h.mine.nu/sat/tv701
- 纬来体育 — rtmp://f13h.mine.nu/sat/tv721
- 纬来日本 — rtmp://f13h.mine.nu/sat/tv771
- 东森超视 — rtmp://f13h.mine.nu/sat/tv331

