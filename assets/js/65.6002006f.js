(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{670:function(t,a,s){"use strict";s.r(a);var n=s(2),r=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("create-react-app项目中跨域配置代理,2.0版本以上")]),t._v(" "),a("h3",{attrs:{id:"方法一-安装http-proxy-middleware-可以配置多个代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法一-安装http-proxy-middleware-可以配置多个代理"}},[t._v("#")]),t._v(" 方法一:安装http-proxy-middleware,可以配置多个代理")]),t._v(" "),a("p",[t._v("1.在src目录下新建setupProxy.js文件，配置如下")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("\nconst "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" createProxyMiddleware "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" require"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http-proxy-middleware'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmodule.exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" function"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  app.use"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api'")]),t._v(",\n    proxy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      target: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:5000'")]),t._v(", // 配置实际的域名或ip\n      changeOrigin: true,  //默认false，是否需要改变原始主机头为目标URL\n      pathRewrite: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^/api"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",  // 重写请求，比如我们源访问的是api，那么请求会被解析为/\n      secure: false,   //如果是https接口 需要配置这个参数为true\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  app.use"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/sys'")]),t._v(",\n    proxy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      target: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:5001'")]),t._v(", // 配置实际的域名或ip\n      changeOrigin: true,\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("2.关于http-proxy-middleware的引入配置")]),t._v(" "),a("h3",{attrs:{id:"_0-x-x版本的引用方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-x-x版本的引用方式"}},[t._v("#")]),t._v(" 0.x.x版本的引用方式")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("const proxy "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" require"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http-proxy-middleware'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"_1-0-0版本的引入方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-0-0版本的引入方式"}},[t._v("#")]),t._v(" 1.0.0版本的引入方式")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("const "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" createProxyMiddleware "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" require"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http-proxy-middleware'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"方法二-直接在package-json中配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法二-直接在package-json中配置"}},[t._v("#")]),t._v(" 方法二: 直接在package.json中配置")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"proxy"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:5001"')]),t._v(",\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);