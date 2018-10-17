(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{376:function(n,t,e){"use strict";e.r(t);var o=e(3),r=e.n(o),a=e(4),u=e.n(a),s=e(2),i=e.n(s),d=e(5),m=e.n(d),c=e(403),l=(e(691),function(n){function t(){var n,o,a,s;u()(this,t);for(var d=arguments.length,m=Array(d),c=0;c<d;c++)m[c]=arguments[c];return o=a=i()(this,(n=t.__proto__||r()(t)).call.apply(n,[this].concat(m))),a.document=function(){return{document:e(421),className:"button-page"}},s=o,i()(a,s)}return m()(t,n),t}(c.a));t.default=l},403:function(n,t,e){"use strict";var o=e(3),r=e.n(o),a=e(4),u=e.n(a),s=e(6),i=e.n(s),d=e(2),m=e.n(d),c=e(5),l=e.n(c),p=e(0),B=e.n(p),h=e(404),f=e.n(h),g=e(405),y=e.n(g),v=(e(406),function(n){function t(){return u()(this,t),m()(this,(t.__proto__||r()(t)).apply(this,arguments))}return l()(t,n),i()(t,[{key:"render",value:function(){var n=this.document(localStorage.getItem("LANGUAGE")||"zh-CN"),t=n.document,e=n.className;if("string"==typeof t){var o=new f.a.Renderer;o.table=function(n,t){return'<div class="grid-container"><table class="grid"><thead>'+n+"</thead><tbody>"+t+"</tbody></table></div>"},o.code=function(n,t){return'<pre><code class="hljs '+t+'">'+(!(!t||!y.a.getLanguage(t))?y.a.highlight(t,n).value:n)+"</code></pre>"},f.a.setOptions({renderer:o});var r=f()(t,{renderer:o});return B.a.createElement("div",{className:e,dangerouslySetInnerHTML:{__html:r}})}return B.a.createElement("span",null)}}]),t}(B.a.Component));t.a=v},421:function(n,t){n.exports='## 按钮 Button\n\n\n\n### 基本用法\n```jsx\nimport { Button } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Button>default</Button>\n        <Button theme="primary">primary</Button>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### 块级按钮\n```jsx\nimport { Button } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Button block>default</Button>\n        <Button block disabled>default disabled</Button>\n        <Button block theme="primary">primary</Button>\n        <Button block disabled theme="primary">primary disabled</Button>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### 幽灵按钮\n```jsx\nimport { Button } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Button block ghost theme="primary">primary ghost</Button>\n        <Button block ghost disabled theme="primary">primary ghost disabled</Button>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### 按钮主题\n```jsx\nimport { Button } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Button theme="default">default</Button>\n        <Button theme="primary">primary</Button>\n        <Button theme="success">success</Button>\n        <Button theme="warning">warning</Button>\n        <Button theme="error">error</Button>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### 按钮尺寸\n```jsx\nimport { Button } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Button size="lg">lg</Button>\n        <Button>md</Button>\n        <Button size="sm">sm</Button>\n        <Button size="xs">xs</Button>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### 按钮形状\n```jsx\nimport { Button, Icon } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Button shape="rect" theme="primary">rect</Button>\n        <Button shape="radius" theme="primary">radius</Button>\n        <Button shape="round" theme="primary">round</Button>\n        <Button shape="circle" theme="primary">circle</Button>\n        <Button ghost shape="circle" icon={<Icon type="right" />} />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### 图标按钮\n```jsx\nimport { Button, Icon } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Button shape="radius" icon={<Icon type="right-round" theme="success" />}>正确</Button>\n        <Button shape="radius" icon={<Icon type="wrong-round" theme="error" />}>错误</Button>\n        <Button loading shape="radius">加载中</Button>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### API\n\n| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |\n| :--- | :--- | :--- | :--- | :--- |\n| theme | string | `default` | `default`, `primary`, `success`, `warning`, `error` | 主题 |\n| size | string | | `md`, `lg`, `sm`, `xs` | 大小 |\n| shape | string | \'rect\' | `rect`, `radius`, `round`, `circle` | 形状 |\n| block | boolean | false | | 是否块级元素 |\n| ghost | boolean | false | | 是否幽灵按钮 |\n| disabled | boolean | false | | 是否禁用 |\n| loading | boolean | false | | 是否加载中状态 |\n| icon | ReactNode | | | 图标 |\n| onClick | MouseEventHandler<HTMLAnchorElement> | | | 点击后触发的回调函数 |\n'},691:function(n,t,e){}}]);