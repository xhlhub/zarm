(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{217:function(n,e,t){"use strict";t.r(e);var o=t(33),i=t.n(o),a=t(34),r=t.n(a),s=t(35),c=t.n(s),l=t(36),u=t.n(l),m=function(n){function e(){var n,o,a,s;r()(this,e);for(var l=arguments.length,u=Array(l),m=0;m<l;m++)u[m]=arguments[m];return o=a=c()(this,(n=e.__proto__||i()(e)).call.apply(n,[this].concat(u))),a.document=function(){return{document:t(276),className:"actionsheet-page"}},s=o,c()(a,s)}return u()(e,n),e}(t(253).a);e.default=m},250:function(n,e,t){"use strict";var o=t(249),i=t.n(o),a=t(33),r=t.n(a),s=t(34),c=t.n(s),l=t(37),u=t.n(l),m=t(35),p=t.n(m),d=t(36),h=t.n(d),v=t(0),f=t.n(v),g=t(248),y=t.n(g),k=function(n){function e(){return c()(this,e),p()(this,(e.__proto__||r()(e)).apply(this,arguments))}return h()(e,n),u()(e,[{key:"componentDidMount",value:function(){if("index-page"===this.props.className){var n=window.sessionStorage[this.props.className];n&&(this.container.scrollTop=n)}}},{key:"componentWillUnmount",value:function(){if("index-page"===this.props.className){var n=this.container.scrollTop;window.sessionStorage[this.props.className]=n}}},{key:"render",value:function(){var n=this,e=this.props,t=e.className,o=e.children,a=y()(i()({"app-container":!0},t,!!t));return f.a.createElement("div",{ref:function(e){n.container=e},className:a},f.a.createElement("a",{className:"github",href:"https://github.com/ZhonganTechENG/zarm"},f.a.createElement("svg",{"aria-hidden":"true",version:"1.1",viewBox:"0 0 16 16"},f.a.createElement("path",{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}))),o)}}]),e}(v.Component);e.a=k},251:function(n,e,t){"use strict";var o=t(33),i=t.n(o),a=t(34),r=t.n(a),s=t(37),c=t.n(s),l=t(35),u=t.n(l),m=t(36),p=t.n(m),d=t(0),h=t.n(d),v=t(248),f=t.n(v),g=function(n){function e(){return r()(this,e),u()(this,(e.__proto__||i()(e)).apply(this,arguments))}return p()(e,n),c()(e,[{key:"render",value:function(){var n=this.props,e=n.prefixCls,t=n.className,o=n.titleRender,i=n.moreRender,a=n.children,r=f()(""+e,t);return h.a.createElement("div",{className:r},h.a.createElement("div",{className:e+"-header"},o&&h.a.createElement("div",{className:e+"-title"},o),i&&h.a.createElement("div",{className:e+"-more"},i)),h.a.createElement("div",{className:e+"-body"},a))}}]),e}(d.PureComponent);e.a=g,g.defaultProps={prefixCls:"za-panel"}},252:function(n,e,t){"use strict";var o=t(33),i=t.n(o),a=t(34),r=t.n(a),s=t(37),c=t.n(s),l=t(35),u=t.n(l),m=t(36),p=t.n(m),d=t(0),h=t.n(d),v=function(n){function e(){return r()(this,e),u()(this,(e.__proto__||i()(e)).apply(this,arguments))}return p()(e,n),c()(e,[{key:"render",value:function(){return h.a.createElement("footer",null,h.a.createElement("div",{className:"copyright"},h.a.createElement("div",{className:"copyright-cn"},"众安·体验设计中心"),h.a.createElement("div",{className:"copyright-en"},"Zhongan UX Densign")))}}]),e}(d.Component);e.a=v},253:function(n,e,t){"use strict";var o=t(256),i=t.n(o),a=t(259),r=t.n(a),s=t(260),c=t.n(s),l=t(33),u=t.n(l),m=t(34),p=t.n(m),d=t(37),h=t.n(d),v=t(35),f=t.n(v),g=t(36),y=t.n(g),k=t(0),C=t.n(k),E=t(38),N=t.n(E),b=t(261),_=t.n(b),S=t(251),w=t(27),x=t.n(w),M=t(262),A=(t(263),t(264),function(n){function e(n){p()(this,e);var t=f()(this,(e.__proto__||u()(e)).call(this,n));return t.containerId=""+parseInt(1e9*Math.random(),10).toString(36),t.document=t.props.children.match(/([^]*)\n?(```[^]+```)/),t.title=String(t.document[1]),t.source=t.document[2].match(/```(.*)\n?([^]+)```/),t}return y()(e,n),h()(e,[{key:"componentDidMount",value:function(){this.renderSource(this.source[2])}},{key:"componentWillUnmount",value:function(){this.containerElem&&N.a.unmountComponentAtNode(this.containerElem)}},{key:"renderSource",value:function(n){var e=this;Promise.all([t.e(36),t.e(34)]).then(t.bind(null,356)).then(function(n){return{args:["context","React","ReactDOM","zarm"],argv:[e,C.a,N.a,n]}}).then(function(t){var o=t.args,i=t.argv;n=n.replace(/import\s+\{\s+(.*)\s+\}\s+from\s+'zarm';/,"const { $1 } = zarm;").replace("mountNode","document.getElementById('"+e.containerId+"')");var a=Object(M.transform)(n,{presets:["es2015","react"]}).code;o.push(a),(new(Function.prototype.bind.apply(Function,[null].concat(x()(o))))).apply(void 0,x()(i)),e.source[2]=n}).catch(function(n){0})}},{key:"render",value:function(){var n=this;return"/panel"===this.props.location.pathname?C.a.createElement("div",{id:this.containerId,ref:function(e){n.containerElem=e}}):C.a.createElement(S.a,{titleRender:C.a.createElement("span",null,this.title)},C.a.createElement("div",{id:this.containerId,ref:function(e){n.containerElem=e}}))}}]),e}(C.a.Component)),B=t(250),T=t(252),z=function(n){function e(n){p()(this,e);var t=f()(this,(e.__proto__||u()(e)).call(this,n));return t.nodeList=[],t.components=new c.a,t.renderer=new _.a.Renderer,t}return y()(e,n),h()(e,[{key:"componentDidMount",value:function(){this.renderDOM()}},{key:"componentDidUpdate",value:function(){this.renderDOM()}},{key:"componentWillUnmount",value:function(){this.nodeList.forEach(function(n){N.a.unmountComponentAtNode(n)})}},{key:"renderDOM",value:function(){var n=!0,e=!1,t=void 0;try{for(var o,a=i()(this.components);!(n=(o=a.next()).done);n=!0){var s=o.value,c=r()(s,2),l=c[0],u=c[1],m=document.getElementById(l);this.nodeList.push(m),m instanceof HTMLElement&&N.a.render(u,m)}}catch(n){e=!0,t=n}finally{try{!n&&a.return&&a.return()}finally{if(e)throw t}}}},{key:"render",value:function(){var n=this,e=this.document(localStorage.getItem("LANGUAGE")||"zh-CN"),t=e.document,o=e.className;if("string"==typeof t){this.components.clear();var i=_()(t.replace(/:::\s?api\s?([^]+?):::/g,"").replace(/:::\s?demo\s?([^]+?):::/g,function(e,t,o){var i=o.toString(36);return n.components.set(i,C.a.createElement(A,n.props,t)),"<div id="+i+"></div>"}),{renderer:this.renderer});return C.a.createElement(B.a,{className:o},C.a.createElement("main",{dangerouslySetInnerHTML:{__html:i}}),C.a.createElement(T.a,null))}return C.a.createElement("span",null)}}]),e}(C.a.Component);e.a=z},276:function(n,e){n.exports="## 动作面板 ActionSheet\n\n:::demo 基本用法\n```jsx\nimport { ActionSheet, Cell, Button } from 'zarm';\n\nconst BUTTONS = [\n  {\n    text: '操作一',\n    onClick: () => console.log('点击操作一'),\n  },\n  {\n    text: '操作二',\n    onClick: () => console.log('点击操作二'),\n  },\n  {\n    theme: 'error',\n    text: '操作三',\n    onClick: () => console.log('点击操作三'),\n  },\n];\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      visible1: false,\n      visible2: false,\n      visible3: false,\n    };\n  }\n\n  toggle(key) {\n    this.setState({\n      [`${key}`]: !this.state[key],\n    });\n  }\n\n  render() {\n    return (\n      <div>\n        <Cell\n          description={\n            <Button size=\"sm\" onClick={() => this.toggle('visible1')}>开启</Button>\n          }\n        >\n          普通\n        </Cell>\n        <Cell\n          description={\n            <Button size=\"sm\" onClick={() => this.toggle('visible2')}>开启</Button>\n          }\n        >\n          带取消操作\n        </Cell>\n        <Cell\n          description={\n            <Button size=\"sm\" onClick={() => this.toggle('visible3')}>开启</Button>\n          }\n        >\n          圆角、留边\n        </Cell>\n\n        <ActionSheet\n          visible={this.state.visible1}\n          actions={BUTTONS}\n          onMaskClick={() => this.toggle('visible1')}\n        />\n        <ActionSheet\n          visible={this.state.visible2}\n          actions={BUTTONS}\n          onMaskClick={() => this.toggle('visible2')}\n          onCancel={() => this.toggle('visible2')}\n        />\n        <ActionSheet\n          spacing\n          shape=\"radius\"\n          visible={this.state.visible3}\n          actions={BUTTONS}\n          onMaskClick={() => this.toggle('visible3')}\n          onCancel={() => this.toggle('visible3')}\n        />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n:::\n\n\n:::api API\n\n| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |\n| :--- | :--- | :--- | :--- | :--- |\n| prefixCls | string | za-action-sheet | | 类名前缀 |\n| className | string | | | 追加类名 |\n| shape | string | | 'radius' | 形状 |\n| visible | boolean | false | | 是否显示 |\n| spacing | boolean | false | | 是否和外部有间距 |\n| actions | Action[] | [ ] | Action = { text: string, <br /> theme?: 'default' &#124; 'primary' &#124; 'info' &#124; 'success' &#124; 'warning' &#124; 'error', <br /> className?: string, <br /> onClick?: () => void} | 动作列表 |\n| onMaskClick | <code>() => void</code> | noop | | 点击遮罩层时触发的回调函数 |\n| onCancel | <code>() => void</code> | noop | | 显示取消菜单，点击时触发的回调函数 |\n| cancelText | string | '取消' |  | 取消菜单的文案 |\n\n:::\n"}}]);