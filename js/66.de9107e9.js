(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{398:function(n,e,t){"use strict";t.r(e);var r=t(3),a=t.n(r),o=t(4),i=t.n(o),l=t(2),s=t.n(l),p=t(5),u=t.n(p),c=function(n){function e(){var n,r,o,l;i()(this,e);for(var p=arguments.length,u=Array(p),c=0;c<p;c++)u[c]=arguments[c];return r=o=s()(this,(n=e.__proto__||a()(e)).call.apply(n,[this].concat(u))),o.document=function(){return{document:t(443),className:"stepper-page"}},l=r,s()(o,l)}return u()(e,n),e}(t(403).a);e.default=c},403:function(n,e,t){"use strict";var r=t(3),a=t.n(r),o=t(4),i=t.n(o),l=t(6),s=t.n(l),p=t(2),u=t.n(p),c=t(5),d=t.n(c),m=t(0),v=t.n(m),h=t(404),f=t.n(h),g=t(405),b=t.n(g),C=(t(406),function(n){function e(){return i()(this,e),u()(this,(e.__proto__||a()(e)).apply(this,arguments))}return d()(e,n),s()(e,[{key:"render",value:function(){var n=this.document(localStorage.getItem("LANGUAGE")||"zh-CN"),e=n.document,t=n.className;if("string"==typeof e){var r=new f.a.Renderer;r.table=function(n,e){return'<div class="grid-container"><table class="grid"><thead>'+n+"</thead><tbody>"+e+"</tbody></table></div>"},r.code=function(n,e){return'<pre><code class="hljs '+e+'">'+(!(!e||!b.a.getLanguage(e))?b.a.highlight(e,n).value:n)+"</code></pre>"},f.a.setOptions({renderer:r});var a=f()(e,{renderer:r});return v.a.createElement("div",{className:t,dangerouslySetInnerHTML:{__html:a}})}return v.a.createElement("span",null)}}]),e}(v.a.Component));e.a=C},443:function(n,e){n.exports='## 步进器 Stepper\n\n\n\n### 基本用法\n```jsx\nimport { Cell, Stepper } from \'zarm\';\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: 1,\n    };\n  }\n\n  render() {\n    return (\n      <div>\n        <Cell\n          title="普通"\n          description={\n            <Stepper\n              value={this.state.value}\n              onChange={(value) => {\n                console.log(value);\n              }}\n            />\n          }\n        />\n\n        <Cell\n          title="设置默认值"\n          description={\n            <Stepper defaultValue={2} />\n          }\n        />\n\n        <Cell\n          title="设置上下限"\n          description={\n            <Stepper min={-3} max={3} />\n          }\n        />\n\n        <Cell\n          title="设置步长"\n          description={\n            <Stepper step={0.5} />\n          }\n        />\n\n        <Cell\n          title="禁用状态"\n          description={\n            <Stepper disabled />\n          }\n        />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### 多形状\n```jsx\nimport { Cell, Stepper } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Cell\n          title="圆角"\n          description={\n            <Stepper shape="radius" />\n          }\n        />\n\n        <Cell\n          title="圆形"\n          description={\n            <Stepper shape="circle" />\n          }\n        />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### API\n\n| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |\n| :--- | :--- | :--- | :--- | :--- |\n| prefixCls | string | za-stepper | | 类名前缀 |\n| className | string | | | 追加类名 |\n| theme | string | `primary` | `default`, `primary`, `info`, `success`, `warning`, `error` | 主题 |\n| shape | string | | `radius`, `circle` | 形状 |\n| value | number | | | 值 |\n| defaultValue | number | | | 初始值 |\n| min | number | | | 最小值 |\n| max | number | | | 最大值 |\n| step | number | 1 | | 步长 |\n| disabled | boolean | false | | 是否禁用 |\n| onInputChange | <code>(value: number) => void</code> | noop | \\(value: number\\) | 输入值变化时触发的回调函数 |\n| onChange | <code>(value: number) => void</code> | noop | \\(value: number\\) | 值变化时触发的回调函数 |\n'}}]);