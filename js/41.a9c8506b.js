(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{373:function(n,e,t){"use strict";t.r(e);var i=t(3),s=t.n(i),o=t(4),l=t.n(o),a=t(2),r=t.n(a),c=t(5),u=t.n(c),d=function(n){function e(){var n,i,o,a;l()(this,e);for(var c=arguments.length,u=Array(c),d=0;d<c;d++)u[d]=arguments[d];return i=o=r()(this,(n=e.__proto__||s()(e)).call.apply(n,[this].concat(u))),o.document=function(){return{document:t(418),className:"actionsheet-page"}},a=i,r()(o,a)}return u()(e,n),e}(t(403).a);e.default=d},403:function(n,e,t){"use strict";var i=t(3),s=t.n(i),o=t(4),l=t.n(o),a=t(6),r=t.n(a),c=t(2),u=t.n(c),d=t(5),g=t.n(d),h=t(0),p=t.n(h),v=t(404),b=t.n(v),C=t(405),f=t.n(C),m=(t(406),function(n){function e(){return l()(this,e),u()(this,(e.__proto__||s()(e)).apply(this,arguments))}return g()(e,n),r()(e,[{key:"render",value:function(){var n=this.document(localStorage.getItem("LANGUAGE")||"zh-CN"),e=n.document,t=n.className;if("string"==typeof e){var i=new b.a.Renderer;i.table=function(n,e){return'<div class="grid-container"><table class="grid"><thead>'+n+"</thead><tbody>"+e+"</tbody></table></div>"},i.code=function(n,e){return'<pre><code class="hljs '+e+'">'+(!(!e||!f.a.getLanguage(e))?f.a.highlight(e,n).value:n)+"</code></pre>"},b.a.setOptions({renderer:i});var s=b()(e,{renderer:i});return p.a.createElement("div",{className:t,dangerouslySetInnerHTML:{__html:s}})}return p.a.createElement("span",null)}}]),e}(p.a.Component));e.a=m},418:function(n,e){n.exports="## 动作面板 ActionSheet\n\n### 基本用法\n\n```jsx\nimport { ActionSheet, Cell, Button } from 'zarm';\n\nconst BUTTONS = [\n  {\n    text: '操作一',\n    onClick: () => console.log('点击操作一'),\n  },\n  {\n    text: '操作二',\n    onClick: () => console.log('点击操作二'),\n  },\n  {\n    theme: 'error',\n    text: '操作三',\n    onClick: () => console.log('点击操作三'),\n  },\n];\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      visible1: false,\n      visible2: false,\n      visible3: false,\n    };\n  }\n\n  toggle(key) {\n    this.setState({\n      [`${key}`]: !this.state[key],\n    });\n  }\n\n  render() {\n    return (\n      <div>\n        <Cell\n          description={\n            <Button size=\"xs\" onClick={() => this.toggle('visible1')}>开启</Button>\n          }\n        >\n          普通\n        </Cell>\n        <Cell\n          description={\n            <Button size=\"xs\" onClick={() => this.toggle('visible2')}>开启</Button>\n          }\n        >\n          带取消操作\n        </Cell>\n        <Cell\n          description={\n            <Button size=\"xs\" onClick={() => this.toggle('visible3')}>开启</Button>\n          }\n        >\n          圆角、留边\n        </Cell>\n\n        <ActionSheet\n          visible={this.state.visible1}\n          actions={BUTTONS}\n          onMaskClick={() => this.toggle('visible1')}\n        />\n        <ActionSheet\n          visible={this.state.visible2}\n          actions={BUTTONS}\n          onMaskClick={() => this.toggle('visible2')}\n          onCancel={() => this.toggle('visible2')}\n        />\n        <ActionSheet\n          spacing\n          shape=\"radius\"\n          visible={this.state.visible3}\n          actions={BUTTONS}\n          onMaskClick={() => this.toggle('visible3')}\n          onCancel={() => this.toggle('visible3')}\n        />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n### API\n\n| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |\n| :--- | :--- | :--- | :--- | :--- |\n| prefixCls | string | za-action-sheet | | 类名前缀 |\n| className | string | | | 追加类名 |\n| shape | string | | 'radius' | 形状 |\n| visible | boolean | false | | 是否显示 |\n| spacing | boolean | false | | 是否和外部有间距 |\n| actions | Action[] | [ ] | Action = { text: string, <br /> theme?: 'default' &#124; 'primary' &#124; 'info' &#124; 'success' &#124; 'warning' &#124; 'error', <br /> className?: string, <br /> onClick?: () => void} | 动作列表 |\n| onMaskClick | <code>() => void</code> | noop | | 点击遮罩层时触发的回调函数 |\n| onCancel | <code>() => void</code> | noop | | 显示取消菜单，点击时触发的回调函数 |\n| cancelText | string | '取消' |  | 取消菜单的文案 |\n"}}]);