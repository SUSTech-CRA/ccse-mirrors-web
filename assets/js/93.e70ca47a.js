(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{575:function(e,s,t){"use strict";t.r(s);var r=t(11),a=Object(r.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"opensuse-mirror"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#opensuse-mirror"}},[e._v("#")]),e._v(" "),s("RouterLink",{attrs:{to:"/opensuse/"}},[e._v("Opensuse")]),e._v(" Mirror")],1),e._v(" "),s("h2",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),s("blockquote",[s("p",[e._v("openSUSE, formerly SUSE Linux, is a Linux distribution sponsored by SUSE Software Solutions Germany GmbH and other companies.")])]),e._v(" "),s("h2",{attrs:{id:"禁用原有软件源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#禁用原有软件源"}},[e._v("#")]),e._v(" 禁用原有软件源")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("zypper")]),e._v(" mr "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-da")]),e._v("\n")])])]),s("h2",{attrs:{id:"opensuse-leap-15-3-或更新版本使用方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#opensuse-leap-15-3-或更新版本使用方法"}},[e._v("#")]),e._v(" openSUSE Leap 15.3 或更新版本使用方法：")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("zypper")]),e._v(" ar "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-fcg")]),e._v(" https://mirrors.sustech.edu.cn/opensuse/distribution/leap/"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$releasever")]),e._v("/repo/oss sustech-oss\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("zypper")]),e._v(" ar "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-fcg")]),e._v(" https://mirrors.sustech.edu.cn/opensuse/distribution/leap/"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$releasever")]),e._v("/repo/non-oss sustech-non-oss\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("zypper")]),e._v(" ar "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-fcg")]),e._v(" https://mirrors.sustech.edu.cn/opensuse/update/leap/"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$releasever")]),e._v("/oss sustech-update-oss\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("zypper")]),e._v(" ar "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-fcg")]),e._v(" https://mirrors.sustech.edu.cn/opensuse/update/leap/"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$releasever")]),e._v("/non-oss sustech-update-non-oss\n")])])]),s("p",[e._v("Leap 15.3 用户还需添加 sle 和 backports 源")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("zypper")]),e._v(" ar "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-fcg")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'https://mirrors.sustech.edu.cn/opensuse/update/leap/$releasever/sle/'")]),e._v(" sustech-sle-update\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("zypper")]),e._v(" ar "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-fcg")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'https://mirrors.sustech.edu.cn/opensuse/update/leap/$releasever/backports/'")]),e._v(" sustech-backports-update\n")])])]),s("p",[e._v("Leap 15.3 注：若在安装时没有启用在线软件源， sle 源和 backports 源将在系统首次更新后引入，请确保系统在更新后仅启用了六个所需软件源。可使用 zypper lr 检查软件源状态，并使用 zypper mr -d 禁用多余的软件源。")]),e._v(" "),s("h2",{attrs:{id:"opensuse-tumbleweed-使用方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#opensuse-tumbleweed-使用方法"}},[e._v("#")]),e._v(" openSUSE Tumbleweed 使用方法")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("zypper")]),e._v(" ar "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-fcg")]),e._v(" https://mirrors.sustech.edu.cn/opensuse/tumbleweed/repo/oss sustech-oss\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("zypper")]),e._v(" ar "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-fcg")]),e._v(" https://mirrors.sustech.edu.cn/opensuse/tumbleweed/repo/non-oss sustech-non-oss\n")])])]),s("p",[e._v("Tumbleweed 注： Tumbleweed 安装后默认会启用 oss, non-oss, update, 3 个官方软件源， 其中 oss 及 non-oss 源用于发布 Tumbleweed 的每日构建快照，快照中已包含系统所需的全部软件包及更新。 update 源仅用于推送临时安全补丁，如当日快照已发布但仍有临时安全补丁时，会首先推送至 update 源，并在次日合入下一版快照。 由于 update 源存在较强的时效性，上游镜像并未同步 update 源， TUNA 亦无法提供该源的镜像。 禁用 update 源并不会使系统缺失任何功能或安全更新，仅会导致极少数更新晚些推送，如有需求可以重新启用官方 update 源。")]),e._v(" "),s("p",[e._v("命令中最后一个参数为每一个源指定了一个 alias （别称），可以根据个人喜好更改。")]),e._v(" "),s("h2",{attrs:{id:"手动刷新软件源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#手动刷新软件源"}},[e._v("#")]),e._v(" 手动刷新软件源")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("zypper")]),e._v(" ref\n")])])]),s("h3",{attrs:{id:"图形界面下配置方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图形界面下配置方法"}},[e._v("#")]),e._v(" 图形界面下配置方法")]),e._v(" "),s("p",[e._v("以 openSUSE Leap 15.3 为例：")]),e._v(" "),s("ol",[s("li",[e._v("打开 YaST；")]),e._v(" "),s("li",[e._v("点击 Software 分组中的 Software Repositories；")]),e._v(" "),s("li",[e._v("在打开的窗口上方的列表中点击 Main Repository，点击 Edit；")]),e._v(" "),s("li",[e._v("将 download.opensuse.org 替换为 mirrors.sustech.edu.cn/opensuse，点 OK；")]),e._v(" "),s("li",[e._v("再用同样的方法编辑 Non-OSS Repository, Main Update Repository, Update Repository (Non-Oss) 和 Update repository with updates from SUSE Linux Enterprise 15。")])]),e._v(" "),s("h2",{attrs:{id:"注意事项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[e._v("#")]),e._v(" 注意事项")]),e._v(" "),s("ul",[s("li",[e._v("由于使用了 MirrorBrain 技术， 中央服务器 (download.opensuse.org) 会按照 IP 地理位置中转下载请求到附近的镜像服务器（但刷新软件源时仍从中央服务器获取 元数据），所以更改软件源通常只会加快刷新软件源的速度，而对下载速度影响不大。 参见 "),s("a",{attrs:{href:"https://forum.suse.org.cn/t/opensuse/1759",target:"_blank",rel:"noopener noreferrer"}},[e._v("openSUSE 中文论坛"),s("OutboundLink")],1),e._v(" 。")]),e._v(" "),s("li",[e._v("我们不提供 source 和 debug 源。")]),e._v(" "),s("li",[e._v("Tumbleweed 滚动发行版软件源的地址与上述例子稍有不同。")])]),e._v(" "),s("h2",{attrs:{id:"相关链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相关链接"}},[e._v("#")]),e._v(" 相关链接")]),e._v(" "),s("ul",[s("li",[e._v("官方主页 "),s("a",{attrs:{href:"https://www.opensuse.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.opensuse.org/"),s("OutboundLink")],1)]),e._v(" "),s("li",[e._v("邮件列表 "),s("a",{attrs:{href:"https://en.opensuse.org/Communicate/Mailinglists",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://en.opensuse.org/Communicate/Mailinglists"),s("OutboundLink")],1)]),e._v(" "),s("li",[e._v("论坛 "),s("a",{attrs:{href:"https://forums.opensuse.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://forums.opensuse.org/"),s("OutboundLink")],1)]),e._v(" "),s("li",[e._v("中文论坛 "),s("a",{attrs:{href:"https://forum.suse.org.cn/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://forum.suse.org.cn/"),s("OutboundLink")],1)]),e._v(" "),s("li",[e._v("Wiki "),s("a",{attrs:{href:"https://en.opensuse.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://en.opensuse.org/"),s("OutboundLink")],1)]),e._v(" "),s("li",[e._v("中文 Wiki "),s("a",{attrs:{href:"https://zh.opensuse.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://zh.opensuse.org/"),s("OutboundLink")],1)]),e._v(" "),s("li",[e._v("文档 "),s("a",{attrs:{href:"https://en.opensuse.org/Documentation",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://en.opensuse.org/Documentation"),s("OutboundLink")],1)]),e._v(" "),s("li",[e._v("openSUSE Guide "),s("a",{attrs:{href:"https://lug.ustc.edu.cn/sites/opensuse-guide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://lug.ustc.edu.cn/sites/opensuse-guide/"),s("OutboundLink")],1)])]),e._v(" "),s("h2",{attrs:{id:"参考文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[e._v("#")]),e._v(" 参考文档")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://mirrors.ustc.edu.cn/help/opensuse.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://mirrors.ustc.edu.cn/help/opensuse.html"),s("OutboundLink")],1),e._v(" "),s("a",{attrs:{href:"https://mirrors.tuna.tsinghua.edu.cn/help/opensuse/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://mirrors.tuna.tsinghua.edu.cn/help/opensuse/"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=a.exports}}]);