(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{429:function(s,n,e){"use strict";e.r(n);var l=e(2),a=Object(l.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("vue自带scoped关键字来解决样式混乱问题，但React似乎并没有提供像Vue中scoped样式或CSS模块化的内置方法。自己尝试着写的react项目也出现了样式作用域污染的问题，于是稍微去调查了一下解决方案。")]),s._v(" "),n("ol",[n("li",[s._v("我们在组件中创建Hello.js组件,就像下面这样")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("import React from 'react'\nimport hello from './hello.module.less'\n\n/*使用typescript开发react时候引入 *.module.less有所不同*/\n// const hello = require('./hello.module.less')\n\nconst Hello = () => {\n    return (\n        <div className={hello.parent}>\n            <div>第一层视图</div>\n            <div className={hello.son}>第二层视图</div>\n             {/*多个类名*/}\n            <div className={`${hello.basestyle} ${hello.three}`}>第三层视图</div>\n        </div>\n    )\n}\n\nexport default Hello\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("ol",{attrs:{start:"2"}},[n("li",[s._v("在同级目录创建 hello.module.less\n.parent {\nbackground-color: #ccc;\n.son {\ncolor: skyblue;\n}\n.three {\nmargin: 20px;\ncolor: red;\n}")])]),s._v(" "),n("p",[s._v("}\n.basestyle {\nfont-size: 100px;\n}")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('import "./comp1.scss";    // ← 该引入方式是全局引入\n\nimport styles from "./comp1.module.scss"    // ← 局部引用\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])])])}),[],!1,null,null,null);n.default=a.exports}}]);