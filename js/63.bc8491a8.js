(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{395:function(n,e,a){"use strict";a.r(e);var o=a(3),i=a.n(o),d=a(4),r=a.n(d),t=a(2),l=a.n(t),u=a(5),s=a.n(u),R=a(403),c=(a(717),function(n){function e(){var n,o,d,t;r()(this,e);for(var u=arguments.length,s=Array(u),R=0;R<u;R++)s[R]=arguments[R];return o=d=l()(this,(n=e.__proto__||i()(e)).call.apply(n,[this].concat(s))),d.document=function(){return{document:a(440),className:"radio-page"}},t=o,l()(d,t)}return s()(e,n),e}(R.a));e.default=c},403:function(n,e,a){"use strict";var o=a(3),i=a.n(o),d=a(4),r=a.n(d),t=a(6),l=a.n(t),u=a(2),s=a.n(u),R=a(5),c=a.n(R),p=a(0),m=a.n(p),v=a(404),b=a.n(v),f=a(405),h=a.n(f),C=(a(406),function(n){function e(){return r()(this,e),s()(this,(e.__proto__||i()(e)).apply(this,arguments))}return c()(e,n),l()(e,[{key:"render",value:function(){var n=this.document(localStorage.getItem("LANGUAGE")||"zh-CN"),e=n.document,a=n.className;if("string"==typeof e){var o=new b.a.Renderer;o.table=function(n,e){return'<div class="grid-container"><table class="grid"><thead>'+n+"</thead><tbody>"+e+"</tbody></table></div>"},o.code=function(n,e){return'<pre><code class="hljs '+e+'">'+(!(!e||!h.a.getLanguage(e))?h.a.highlight(e,n).value:n)+"</code></pre>"},b.a.setOptions({renderer:o});var i=b()(e,{renderer:o});return m.a.createElement("div",{className:a,dangerouslySetInnerHTML:{__html:i}})}return m.a.createElement("span",null)}}]),e}(m.a.Component));e.a=C},440:function(n,e){n.exports='## 单选框 Radio\n\n\n\n### 基本用法\n```jsx\nimport { Radio, Cell } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Cell><Radio>普通</Radio></Cell>\n        <Cell><Radio defaultChecked>默认选中</Radio></Cell>\n        <Cell><Radio disabled>禁用</Radio></Cell>\n        <Cell><Radio defaultChecked disabled>选中且禁用</Radio></Cell>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### 按钮样式\n```jsx\nimport { Radio, Cell } from \'zarm\';\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      radio: \'0\',\n    };\n  }\n\n  render() {\n    return (\n      <div>\n        <Cell\n          description={\n            <Radio.Group\n              type="button"\n              value={this.state.radio}\n              onChange={value => console.log(`radio to ${value}`)}\n            >\n              <Radio value="0">选项一</Radio>\n              <Radio value="1">选项二</Radio>\n              <Radio value="2">选项三</Radio>\n            </Radio.Group>\n          }\n        >\n          普通\n        </Cell>\n\n        <Cell\n          description={\n            <Radio.Group type="button" defaultValue="1">\n              <Radio value="0">选项一</Radio>\n              <Radio value="1">选项二</Radio>\n              <Radio value="2">选项三</Radio>\n            </Radio.Group>\n          }\n        >\n          指定默认值\n        </Cell>\n\n        <Cell\n          description={\n            <Radio.Group type="button">\n              <Radio value="0">选项一</Radio>\n              <Radio value="1">选项二</Radio>\n              <Radio value="2" disabled>选项三</Radio>\n            </Radio.Group>\n          }\n        >\n          禁用指定项\n        </Cell>\n\n        <Cell\n          description={\n            <Radio.Group type="button" shape="radius">\n              <Radio value="0">选项一</Radio>\n              <Radio value="1">选项二</Radio>\n              <Radio value="2">选项三</Radio>\n            </Radio.Group>\n          }\n        >\n          圆角\n        </Cell>\n\n        <Cell\n          description={\n            <Radio.Group type="button" shape="round">\n              <Radio value="0">选项一</Radio>\n              <Radio value="1">选项二</Radio>\n              <Radio value="2">选项三</Radio>\n            </Radio.Group>\n          }\n        >\n          椭圆角\n        </Cell>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### 块级样式\n```jsx\nimport { Radio } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div className="block-box">\n        <Radio.Group block compact type="button" shape="radius">\n          <Radio value="0">选项一</Radio>\n          <Radio value="1">选项二</Radio>\n          <Radio value="2">选项三</Radio>\n        </Radio.Group>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### 列表样式\n```jsx\nimport { Radio } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Radio.Group type="cell">\n          <Radio value="0">选项一</Radio>\n          <Radio value="1">选项二</Radio>\n          <Radio value="2" disabled>选项三（禁止选择）</Radio>\n        </Radio.Group>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### 列表样式禁用状态\n```jsx\nimport { Radio } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Radio.Group disabled type="cell">\n          <Radio value="0">选项一</Radio>\n          <Radio value="1">选项二</Radio>\n          <Radio value="2">选项三</Radio>\n        </Radio.Group>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### API\n\n#### Radio\n| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |\n| :--- | :--- | :--- | :--- | :--- |\n| prefixCls | string | za-radio | | 类名前缀 |\n| className | string | | | 追加类名 |\n| theme | string | `primary` | `default`, `primary`, `info`, `success`, `warning`, `error` | 主题 |\n| shape | string | | `radius`, `round` | 圆角或者椭圆角 | \n| type | string | | `button`, `cell` | 显示类型 |\n| value | string &#124; number | | | 值 |\n| checked | boolean | | | 当前是否选中 |\n| defaultChecked | boolean | | | 初始是否选中 |\n| disabled | boolean | false | | 是否禁用 |\n| onChange | (checked: boolean) => void | | \\(checked: boolean\\) | 值变化时触发的回调函数 |\n\n#### Radio.Group\n| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |\n| :--- | :--- | :--- | :--- | :--- |\n| prefixCls | string | za-radio | | 类名前缀 |\n| className | string | | | 追加类名 |\n| theme | string | `primary` | `default`, `primary`, `info`, `success`, `warning`, `error` | 主题 |\n| type | string | | `button`, `cell` | 显示类型 |\n| shape | string | | `radius`, `round` | 形状 |\n| value | string &#124; number | | | 选中值 |\n| defaultValue | string &#124; number | | | 初始选中值 |\n| block | boolean | false | | 是否为块级元素 |\n| disabled | boolean | false | | 是否禁用 |\n| compact | boolean | false | | 是否启用紧凑模式 |\n| onChange | <code>(value: number &#124; string) => void</code> | noop | \\(value: string &#124; number\\) | 值变化时触发的回调函数 |\n'},717:function(n,e,a){}}]);