(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{563:function(t,s,n){"use strict";n.r(s);var a=n(11),e=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"debian-mirror"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#debian-mirror"}},[t._v("#")]),t._v(" "),s("RouterLink",{attrs:{to:"/debian/"}},[t._v("Debian")]),t._v(" Mirror")],1),t._v(" "),s("h2",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Debian",target:"_blank",rel:"noopener noreferrer"}},[t._v("Debian"),s("OutboundLink")],1),t._v(", also known as Debian GNU/Linux, is a Linux distribution composed of free and open-source software.")])]),t._v(" "),s("h2",{attrs:{id:"backup-existing-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#backup-existing-configuration"}},[t._v("#")]),t._v(" Backup Existing Configuration")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" /etc/apt/sources.list /etc/apt/sources.list.bak\n")])])]),s("h2",{attrs:{id:"edit-configuration-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#edit-configuration-file"}},[t._v("#")]),t._v(" Edit Configuration File")]),t._v(" "),s("p",[t._v("Write the following settings to "),s("code",[t._v("/etc/apt/sources.list")]),t._v(' if you are using Debian 11 "bullseye".')]),t._v(" "),s("div",{staticClass:"language-toml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-toml"}},[s("code",[t._v("\ndeb https://mirrors"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sustech"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("edu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cn/debian/ bullseye main non-free contrib\ndeb-src https://mirrors"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sustech"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("edu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cn/debian/ bullseye main non-free contrib\n\ndeb https://mirrors"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sustech"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("edu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cn/debian/ bullseye-updates main contrib non-free\ndeb-src https://mirrors"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sustech"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("edu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cn/debian/ bullseye-updates main contrib non-free\n\ndeb https://mirrors"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sustech"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("edu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cn/debian-security/ bullseye-security main contrib non-free\ndeb-src https://mirrors"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sustech"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("edu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cn/debian-security/ bullseye-security main contrib non-free\n\n")])])]),s("p",[t._v('If you are using other version,  you can change the version "buster" in the following code to your version name.')]),t._v(" "),s("div",{staticClass:"language-toml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-toml"}},[s("code",[t._v("deb https://mirrors"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sustech"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("edu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cn/debian/ buster main contrib non-free\ndeb-src https://mirrors"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sustech"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("edu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cn/debian/ buster main contrib non-free\n\ndeb https://mirrors"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sustech"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("edu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cn/debian/ buster-updates main contrib non-free\ndeb-src https://mirrors"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sustech"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("edu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cn/debian/ buster-updates main contrib non-free\n\ndeb https://mirrors"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sustech"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("edu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cn/debian-security/ buster/updates main contrib non-free\ndeb-src https://mirrors"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sustech"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("edu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cn/debian-security/ buster/updates main contrib non-free\n")])])]),s("h2",{attrs:{id:"update-software-source"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#update-software-source"}},[t._v("#")]),t._v(" Update Software Source")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);