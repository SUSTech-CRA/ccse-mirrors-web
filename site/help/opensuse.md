---
sidebarShare: true
prev: false
next: false
---

# [openSUSE](/opensuse/) Mirror

## Introduction

> openSUSE, formerly SUSE Linux, is a Linux distribution sponsored by SUSE Software Solutions Germany GmbH and other companies.

## 禁用原有软件源

``` sh
sudo zypper mr -da
```

## openSUSE Leap 15.3 或更新版本使用方法：

``` sh
sudo zypper ar -fcg https://mirrors.sustech.edu.cn/opensuse/distribution/leap/$releasever/repo/oss sustech-oss
sudo zypper ar -fcg https://mirrors.sustech.edu.cn/opensuse/distribution/leap/$releasever/repo/non-oss sustech-non-oss
sudo zypper ar -fcg https://mirrors.sustech.edu.cn/opensuse/update/leap/$releasever/oss sustech-update-oss
sudo zypper ar -fcg https://mirrors.sustech.edu.cn/opensuse/update/leap/$releasever/non-oss sustech-update-non-oss
```

Leap 15.3 用户还需添加 sle 和 backports 源

``` sh
sudo zypper ar -fcg 'https://mirrors.sustech.edu.cn/opensuse/update/leap/$releasever/sle/' sustech-sle-update
sudo zypper ar -fcg 'https://mirrors.sustech.edu.cn/opensuse/update/leap/$releasever/backports/' sustech-backports-update
```

Leap 15.3 注：若在安装时没有启用在线软件源， sle 源和 backports 源将在系统首次更新后引入，请确保系统在更新后仅启用了六个所需软件源。可使用 zypper lr 检查软件源状态，并使用 zypper mr -d 禁用多余的软件源。

## openSUSE Tumbleweed 使用方法

``` sh
sudo zypper ar -fcg https://mirrors.sustech.edu.cn/opensuse/tumbleweed/repo/oss sustech-oss
sudo zypper ar -fcg https://mirrors.sustech.edu.cn/opensuse/tumbleweed/repo/non-oss sustech-non-oss
```

Tumbleweed 注： Tumbleweed 安装后默认会启用 oss, non-oss, update, 3 个官方软件源， 其中 oss 及 non-oss 源用于发布 Tumbleweed 的每日构建快照，快照中已包含系统所需的全部软件包及更新。 update 源仅用于推送临时安全补丁，如当日快照已发布但仍有临时安全补丁时，会首先推送至 update 源，并在次日合入下一版快照。 由于 update 源存在较强的时效性，上游镜像并未同步 update 源， TUNA 亦无法提供该源的镜像。 禁用 update 源并不会使系统缺失任何功能或安全更新，仅会导致极少数更新晚些推送，如有需求可以重新启用官方 update 源。

命令中最后一个参数为每一个源指定了一个 alias （别称），可以根据个人喜好更改。

## 手动刷新软件源

``` sh
sudo zypper ref
```

### 图形界面下配置方法

以 openSUSE Leap 15.3 为例：

1. 打开 YaST；
2. 点击 Software 分组中的 Software Repositories；
3. 在打开的窗口上方的列表中点击 Main Repository，点击 Edit；
4. 将 download.opensuse.org 替换为 mirrors.sustech.edu.cn/opensuse，点 OK；
5. 再用同样的方法编辑 Non-OSS Repository, Main Update Repository, Update Repository (Non-Oss) 和 Update repository with updates from SUSE Linux Enterprise 15。

## 注意事项

- 由于使用了 MirrorBrain 技术， 中央服务器 (download.opensuse.org) 会按照 IP 地理位置中转下载请求到附近的镜像服务器（但刷新软件源时仍从中央服务器获取 元数据），所以更改软件源通常只会加快刷新软件源的速度，而对下载速度影响不大。 参见 [openSUSE 中文论坛](https://forum.suse.org.cn/t/opensuse/1759) 。
- 我们不提供 source 和 debug 源。
- Tumbleweed 滚动发行版软件源的地址与上述例子稍有不同。

## 相关链接

- 官方主页 [https://www.opensuse.org/](https://www.opensuse.org/)
- 邮件列表 [https://en.opensuse.org/Communicate/Mailinglists](https://en.opensuse.org/Communicate/Mailinglists)
- 论坛 [https://forums.opensuse.org/](https://forums.opensuse.org/)
- 中文论坛 [https://forum.suse.org.cn/](https://forum.suse.org.cn/)
- Wiki [https://en.opensuse.org/](https://en.opensuse.org/)
- 中文 Wiki [https://zh.opensuse.org/](https://zh.opensuse.org/)
- 文档 [https://en.opensuse.org/Documentation](https://en.opensuse.org/Documentation)
- openSUSE Guide [https://lug.ustc.edu.cn/sites/opensuse-guide/](https://lug.ustc.edu.cn/sites/opensuse-guide/)

## 参考文档

[https://mirrors.ustc.edu.cn/help/opensuse.html](https://mirrors.ustc.edu.cn/help/opensuse.html)
[https://mirrors.tuna.tsinghua.edu.cn/help/opensuse/](https://mirrors.tuna.tsinghua.edu.cn/help/opensuse/)
