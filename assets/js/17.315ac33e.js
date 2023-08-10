(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{435:function(s,a,e){"use strict";e.r(a);var n=e(2),t=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"slice-方法用于提取目标数组的一部分-返回一个新数组-原数组不变。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#slice-方法用于提取目标数组的一部分-返回一个新数组-原数组不变。"}},[s._v("#")]),s._v(" slice()方法用于提取目标数组的一部分，返回一个新数组，原数组不变。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('var a = [\'a\', \'b\', \'c\'];\n\na.slice(0) // ["a", "b", "c"]\na.slice(1) // ["b", "c"]\na.slice(1, 2) // ["b"]\na.slice(2, 6) // ["c"]\na.slice() // ["a", "b", "c"]\n// 没有参数时，等于返回一个原数组的拷贝。\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("它的第一个参数为起始位置（从0开始，会包括在返回的新数组之中），第二个参数为终止位置（但该位置的元素本身不包括在内）。如果省略第二个参数，则一直返回到原数组的最后一个成员。")]),s._v(" "),a("h3",{attrs:{id:"应用1-将类似数组的对象转为真正的数组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用1-将类似数组的对象转为真正的数组"}},[s._v("#")]),s._v(" 应用1 将类似数组的对象转为真正的数组")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Array.prototype.slice.call({ 0: 'a', 1: 'b', length: 2 })\n// ['a', 'b']\n\nArray.prototype.slice.call(document.querySelectorAll(\"div\"));\nArray.prototype.slice.call(arguments);\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("上面代码的参数都不是数组，但是通过call方法，在它们上面调用slice()方法，就可以把它们转为真正的数组。")])])}),[],!1,null,null,null);a.default=t.exports}}]);