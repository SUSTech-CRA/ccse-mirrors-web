---
sidebarShare: true
prev: false
next: false
---

# [OpenWRT](/openwrt/) (LEDE)  Mirrors

OpenWRT（曾用名 LEDE）是一款广泛应用于路由器的嵌入式操作系统。本站提供 OpenWRT 的包管理器 `opkg` 的镜像，以加快国内访问速度。

## 手工替换

登录到路由器，并编辑 `/etc/opkg/distfeeds.conf` 文件，将其中的 `downloads.openwrt.org` 替换为 `mirrors.sustech.edu.cn/openwrt` 即可。

## 自动替换

执行如下命令自动替换

``` sh
sed -i 's_downloads.openwrt.org_mirrors.sustech.edu.cn/openwrt_' /etc/opkg/distfeeds.conf
```
