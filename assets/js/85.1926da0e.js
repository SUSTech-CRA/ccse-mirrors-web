(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{566:function(t,a,e){"use strict";e.r(a);var r=e(11),s=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"epel-mirror"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#epel-mirror"}},[t._v("#")]),t._v(" "),a("RouterLink",{attrs:{to:"/epel/"}},[t._v("EPEL")]),t._v(" Mirror")],1),t._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://fedoraproject.org/wiki/EPEL",target:"_blank",rel:"noopener noreferrer"}},[t._v("EPEL"),a("OutboundLink")],1),t._v(": Extra Packages for Enterprise Linux")]),t._v(" "),a("h2",{attrs:{id:"backup-existing-configuration-edit-configuration-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backup-existing-configuration-edit-configuration-file"}},[t._v("#")]),t._v(" Backup Existing Configuration & Edit Configuration File")]),t._v(" "),a("p",[t._v("Use the following command to replace the software repository: (from "),a("a",{attrs:{href:"https://mirrors.tuna.tsinghua.edu.cn/help/epel/",target:"_blank",rel:"noopener noreferrer"}},[t._v("TUNA"),a("OutboundLink")],1),t._v(")")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-e")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'s|^metalink=|#metalink=|g'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-e")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'s|^#baseurl=http://download.fedoraproject.org/pub|baseurl=https://mirrors.sustech.edu.cn|g'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-i.bak")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n         /etc/yum.repos.d/epel*.repo\n")])])]),a("h2",{attrs:{id:"refresh-cache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#refresh-cache"}},[t._v("#")]),t._v(" Refresh Cache")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum clean all "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" yum makecache\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);