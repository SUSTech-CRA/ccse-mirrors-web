(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{557:function(a,t,n){"use strict";n.r(t);var s=n(11),e=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"anaconda-mirror"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#anaconda-mirror"}},[a._v("#")]),a._v(" "),t("a",{attrs:{href:"/anaconda"}},[a._v("Anaconda")]),a._v(" Mirror")]),a._v(" "),t("h2",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[a._v("#")]),a._v(" Introduction")]),a._v(" "),t("blockquote",[t("p",[t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Anaconda_(Python_distribution)",target:"_blank",rel:"noopener noreferrer"}},[a._v("Anaconda"),t("OutboundLink")],1),a._v(" is a free and open-source distribution of the Python and R programming languages for scientific computing (data science, machine learning applications, large-scale data processing, predictive analytics, etc.), that aims to simplify package management and deployment.")])]),a._v(" "),t("h2",{attrs:{id:"configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[a._v("#")]),a._v(" Configuration")]),a._v(" "),t("p",[a._v("You can run the following commands in your terminal:")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("conda config "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--add")]),a._v(" channels https://mirrors.sustech.edu.cn/anaconda/pkgs/free/\nconda config "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--add")]),a._v(" channels https://mirrors.sustech.edu.cn/anaconda/pkgs/main/\nconda config "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--set")]),a._v(" show_channel_urls "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("yes")]),a._v("\n")])])]),t("p",[a._v("Then a configuration file named "),t("code",[a._v(".condarc")]),a._v(" will be created. And you can manually create the configuration file and edit it with your text editor:")]),a._v(" "),t("div",{staticClass:"language-toml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-toml"}},[t("code",[a._v("channels:\n  - defaults\nshow_channel_urls: "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v("\ndefault_channels:\n  - https://mirrors"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("sustech"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("edu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("cn/anaconda/pkgs/main\n  - https://mirrors"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("sustech"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("edu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("cn/anaconda/pkgs/free\n  - https://mirrors"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("sustech"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("edu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("cn/anaconda/pkgs/r\n  - https://mirrors"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("sustech"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("edu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("cn/anaconda/pkgs/pro\n  - https://mirrors"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("sustech"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("edu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("cn/anaconda/pkgs/msys2\ncustom_channels:\n  conda-forge: https://mirrors"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("sustech"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("edu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("cn/anaconda/cloud\n  msys2: https://mirrors"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("sustech"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("edu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("cn/anaconda/cloud\n  bioconda: https://mirrors"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("sustech"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("edu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("cn/anaconda/cloud\n  menpo: https://mirrors"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("sustech"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("edu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("cn/anaconda/cloud\n  pytorch: https://mirrors"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("sustech"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("edu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("cn/anaconda/cloud\n  simpleitk: https://mirrors"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("sustech"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("edu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("cn/anaconda/cloud\n  nvidia: https://mirrors"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("sustech"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("edu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("cn/anaconda-extra/cloud\n")])])]),t("p",[a._v("Path of the per-user configuration file:")]),a._v(" "),t("ul",[t("li",[a._v("Linux: "),t("code",[a._v("$HOME/.condarc")])]),a._v(" "),t("li",[a._v("macOS: "),t("code",[a._v("$HOME/.condarc")])]),a._v(" "),t("li",[a._v("Windows: "),t("code",[a._v("C:\\Users\\<YourUserName>\\.condarc")])])]),a._v(" "),t("h2",{attrs:{id:"using-anaconda-at-sustech-hpc-cluster"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-anaconda-at-sustech-hpc-cluster"}},[a._v("#")]),a._v(" Using Anaconda at SUSTech HPC Cluster")]),a._v(" "),t("p",[a._v("Please refer to this "),t("a",{attrs:{href:"https://hpc.sustech.edu.cn/ref/anaconda-install-by-user.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("link"),t("OutboundLink")],1),a._v(".")])])}),[],!1,null,null,null);t.default=e.exports}}]);