(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{361:function(n,e,t){"use strict";t.r(e);var o=t(4),a=t.n(o),r=t(5),i=t.n(r),s=t(2),c=t.n(s),m=t(6),u=t.n(m),l=t(397),d=(t(507),function(n){function e(){var n,o,r,s;i()(this,e);for(var m=arguments.length,u=Array(m),l=0;l<m;l++)u[l]=arguments[l];return o=r=c()(this,(n=e.__proto__||a()(e)).call.apply(n,[this].concat(u))),r.document=function(){return{document:t(417),className:"carousel-page"}},s=o,c()(r,s)}return u()(e,n),e}(l.a));e.default=d},397:function(n,e,t){"use strict";var o=t(391),a=t.n(o),r=t(392),i=t.n(r),s=t(393),c=t.n(s),m=t(4),u=t.n(m),l=t(5),d=t.n(l),h=t(7),p=t.n(h),g=t(2),v=t.n(g),f=t(6),b=t.n(f),C=t(0),z=t.n(C),y=t(55),E=t.n(y),w=t(394),M=t.n(w),x=t(395),D=t(1),I=t.n(D),N=t(399),k=t.n(N),S=(t(404),t(405),t(406),t(407),function(n){function e(){return d()(this,e),v()(this,(e.__proto__||u()(e)).apply(this,arguments))}return b()(e,n),p()(e,[{key:"componentDidMount",value:function(){var n=this,e=this.props,t=e.onChange,o=e.value;this.cm=k()(this.editor,{mode:"jsx",theme:"react",keyMap:"sublime",viewportMargin:1/0,lineNumbers:!1,dragDrop:!1}),this.cm.setValue(o),this.cm.on("changes",function(e){t&&(clearTimeout(n.timeout),n.timeout=setTimeout(function(){t(e.getValue())},300))})}},{key:"render",value:function(){var n=this;return z.a.createElement("div",{className:"editor",ref:function(e){n.editor=e}})}}]),e}(C.Component)),R=S;S.propTypes={onChange:I.a.func,value:I.a.string},S.defaultProps={onChange:function(){},value:""};t(396);var _=function(n){function e(n){d()(this,e);var t=v()(this,(e.__proto__||u()(e)).call(this,n));return t.toggleShowCode=function(){t.setState({isOpen:!t.state.isOpen})},t.containerId=""+parseInt(1e9*Math.random(),10).toString(36),t.document=t.props.children.match(/([^]*)\n?(```[^]+```)/),t.title=String(t.document[1]),t.source=t.document[2].match(/```(.*)\n?([^]+)```/),t.state={isOpen:!1},t}return b()(e,n),p()(e,[{key:"componentDidMount",value:function(){this.renderSource(this.source[2])}},{key:"componentWillUnmount",value:function(){this.containerElem&&E.a.unmountComponentAtNode(this.containerElem)}},{key:"renderSource",value:function(n){var e=this;Promise.all([t.e(6),t.e(7),t.e(72)]).then(t.bind(null,544)).then(function(n){return{args:["context","React","ReactDOM","zarm"],argv:[e,z.a,E.a,n]}}).then(function(t){var o=t.args;t.argv;n=n.replace(/import\s+\{\s+(.*)\s+\}\s+from\s+'zarm';/,"const { $1 } = zarm;").replace("mountNode","document.getElementById('"+e.containerId+"')");var a=Object(x.transform)(n,{presets:["es2015","react"]}).code;o.push(a),e.source[2]=n}).catch(function(n){0})}},{key:"render",value:function(){var n=this;return z.a.createElement("div",null,z.a.createElement("h3",null,this.title),z.a.createElement("div",{className:"demo"},z.a.createElement("div",{className:"demo-code"},z.a.createElement("div",{className:"demo-code-editor",ref:function(e){n.code=e},dangerouslySetInnerHTML:{__html:this.description}}),z.a.createElement(R,{value:this.source[2],onChange:function(e){return n.renderSource(e)}}))))}}]),e}(C.Component),T=function(n){function e(n){d()(this,e);var t=v()(this,(e.__proto__||u()(e)).call(this,n));return t.nodeList=[],t.components=new c.a,t.renderer=new M.a.Renderer,t}return b()(e,n),p()(e,[{key:"componentDidMount",value:function(){this.renderDOM()}},{key:"componentDidUpdate",value:function(){this.renderDOM()}},{key:"componentWillUnmount",value:function(){this.nodeList.forEach(function(n){E.a.unmountComponentAtNode(n)})}},{key:"renderDOM",value:function(){var n=!0,e=!1,t=void 0;try{for(var o,r=a()(this.components);!(n=(o=r.next()).done);n=!0){var s=o.value,c=i()(s,2),m=c[0],u=c[1],l=document.getElementById(m);this.nodeList.push(l),l instanceof HTMLElement&&E.a.render(u,l)}}catch(n){e=!0,t=n}finally{try{!n&&r.return&&r.return()}finally{if(e)throw t}}}},{key:"render",value:function(){var n=this,e=this.document(localStorage.getItem("LANGUAGE")||"zh-CN"),t=e.document,o=e.className;if("string"==typeof t){this.components.clear();var a=M()(t.replace(/:::\s?api\s?([^]+?):::/g,function(n,e){return e}).replace(/:::\s?demo\s?([^]+?):::/g,function(e,t,o){var a=o.toString(36);return n.components.set(a,z.a.createElement(_,n.props,t)),"<div id="+a+"></div>"}),{renderer:this.renderer});return z.a.createElement("div",{className:o,dangerouslySetInnerHTML:{__html:a}})}return z.a.createElement("span",null)}}]),e}(z.a.Component);e.a=T},417:function(n,e){n.exports="## 走马灯 Carousel\n\n:::demo 基本用法\n```jsx\nimport { Carousel } from 'zarm';\n\nconst ITEMS = [\n  'https://static.zhongan.com/website/health/zarm/images/banners/1.png',\n  'https://static.zhongan.com/website/health/zarm/images/banners/2.png',\n  'https://static.zhongan.com/website/health/zarm/images/banners/3.png',\n];\n\nfunction contentRender() {\n  return ITEMS.map((item, i) => {\n    return (\n      <div className=\"carousel-item-pic\" key={+i}>\n        <img src={item} alt=\"\" />\n      </div>\n    );\n  });\n}\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Carousel\n          onChange={(index) => {\n            console.log(`onChange: ${index}`);\n          }}\n        >\n          {contentRender()}\n        </Carousel>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n:::\n\n\n:::demo 纵向\n```jsx\nimport { Carousel } from 'zarm';\n\nconst ITEMS = [\n  'https://static.zhongan.com/website/health/zarm/images/banners/1.png',\n  'https://static.zhongan.com/website/health/zarm/images/banners/2.png',\n  'https://static.zhongan.com/website/health/zarm/images/banners/3.png',\n];\n\nfunction contentRender() {\n  return ITEMS.map((item, i) => {\n    return (\n      <div className=\"carousel-item-pic\" key={+i}>\n        <img src={item} alt=\"\" />\n      </div>\n    );\n  });\n}\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Carousel\n          direction=\"up\"\n          height=\"48vw\"\n        >\n          {contentRender()}\n        </Carousel>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n:::\n\n\n:::demo 循环轮播\n```jsx\nimport { Carousel, Button } from 'zarm';\n\nconst ITEMS = [\n  'https://static.zhongan.com/website/health/zarm/images/banners/1.png',\n  'https://static.zhongan.com/website/health/zarm/images/banners/2.png',\n  'https://static.zhongan.com/website/health/zarm/images/banners/3.png',\n];\n\nfunction contentRender() {\n  return ITEMS.map((item, i) => {\n    return (\n      <div className=\"carousel-item-pic\" key={+i}>\n        <img src={item} alt=\"\" />\n      </div>\n    );\n  });\n}\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Carousel\n          ref={(ele) => { this.carousel = ele; }}\n          loop\n          direction=\"left\"\n          onChange={(index) => {\n            console.log(`onChange: ${index}`);\n          }}\n        >\n          {contentRender()}\n        </Carousel>\n        <div className=\"controls\">\n          <Button\n            block\n            size=\"sm\"\n            onClick={() => {\n              this.carousel.onJumpTo(0);\n            }}\n          >\n            无动画切换指定页\n          </Button>\n\n          <Button\n            block\n            size=\"sm\"\n            onClick={() => {\n              this.carousel.onSlideTo(2);\n            }}\n          >\n            滑动到指定页\n          </Button>\n        </div>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n:::\n\n\n:::demo 自动循环轮播\n```jsx\nimport { Carousel } from 'zarm';\n\nconst ITEMS = [\n  'https://static.zhongan.com/website/health/zarm/images/banners/1.png',\n  'https://static.zhongan.com/website/health/zarm/images/banners/2.png',\n  'https://static.zhongan.com/website/health/zarm/images/banners/3.png',\n];\n\nfunction contentRender() {\n  return ITEMS.map((item, i) => {\n    return (\n      <div className=\"carousel-item-pic\" key={+i}>\n        <img src={item} alt=\"\" />\n      </div>\n    );\n  });\n}\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Carousel\n          autoPlay\n          loop\n          direction=\"left\"\n          onChangeEnd={(index) => {\n            console.log(`onChangeEnd: ${index}`);\n          }}\n        >\n          {contentRender()}\n        </Carousel>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n:::\n\n\n:::api API\n\n| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |\n| :--- | :--- | :--- | :--- | :--- |\n| prefixCls | string | za-carousel | | 类名前缀 |\n| className | string | | | 追加类名 |\n| direction | string | 'left' | 'left', 'right', 'up', 'down' | 滑动方向 |\n| height | number &#124; string | | | 高度 |\n| activeIndex | number | 0 | | 当前页面的索引 |\n| loop | boolean | false | | 是否循环 |\n| autoPlay | boolean | false | | 是否自动轮播 |\n| autoPlayIntervalTime | number | 3000 | | 自动轮播时间间隔，单位：毫秒 |\n| moveDistanceRatio | number | 0.5 | | 移动距离比例临界点 |\n| moveTimeSpan | number | 300 | | 移动时间跨度临界点，单位：毫秒 |\n| animationDuration | number | 300 | | 动画执行时间，单位：毫秒 |\n| showPagination | boolean | true | | 是否显示分页器 |\n| onChange | <code>(activeIndex: number) => void</code> | noop | \\(activeIndex: number\\) | 值变化时触发的回调函数 |\n| onChangeEnd | <code>(activeIndex: number) => void</code> | noop | \\(activeIndex: number\\) | 值变化动画结束后触发的回调函数 |\n\n:::"},507:function(n,e,t){}}]);