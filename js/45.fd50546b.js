(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{377:function(n,e,t){"use strict";t.r(e);var a=t(3),o=t.n(a),r=t(4),s=t.n(r),i=t(2),c=t.n(i),m=t(5),l=t.n(m),u=t(403),d=(t(693),function(n){function e(){var n,a,r,i;s()(this,e);for(var m=arguments.length,l=Array(m),u=0;u<m;u++)l[u]=arguments[u];return a=r=c()(this,(n=e.__proto__||o()(e)).call.apply(n,[this].concat(l))),r.document=function(){return{document:t(422),className:"carousel-page"}},i=a,c()(r,i)}return l()(e,n),e}(u.a));e.default=d},403:function(n,e,t){"use strict";var a=t(3),o=t.n(a),r=t(4),s=t.n(r),i=t(6),c=t.n(i),m=t(2),l=t.n(m),u=t(5),d=t.n(u),h=t(0),g=t.n(h),p=t(404),b=t.n(p),v=t(405),f=t.n(v),z=(t(406),function(n){function e(){return s()(this,e),l()(this,(e.__proto__||o()(e)).apply(this,arguments))}return d()(e,n),c()(e,[{key:"render",value:function(){var n=this.document(localStorage.getItem("LANGUAGE")||"zh-CN"),e=n.document,t=n.className;if("string"==typeof e){var a=new b.a.Renderer;a.table=function(n,e){return'<div class="grid-container"><table class="grid"><thead>'+n+"</thead><tbody>"+e+"</tbody></table></div>"},a.code=function(n,e){return'<pre><code class="hljs '+e+'">'+(!(!e||!f.a.getLanguage(e))?f.a.highlight(e,n).value:n)+"</code></pre>"},b.a.setOptions({renderer:a});var o=b()(e,{renderer:a});return g.a.createElement("div",{className:t,dangerouslySetInnerHTML:{__html:o}})}return g.a.createElement("span",null)}}]),e}(g.a.Component));e.a=z},422:function(n,e){n.exports="## 走马灯 Carousel\n\n\n\n### 基本用法\n```jsx\nimport { Carousel } from 'zarm';\n\nconst ITEMS = [\n  'https://static.zhongan.com/website/health/zarm/images/banners/1.png',\n  'https://static.zhongan.com/website/health/zarm/images/banners/2.png',\n  'https://static.zhongan.com/website/health/zarm/images/banners/3.png',\n];\n\nfunction contentRender() {\n  return ITEMS.map((item, i) => {\n    return (\n      <div className=\"carousel-item-pic\" key={+i}>\n        <img src={item} alt=\"\" draggable={false} />\n      </div>\n    );\n  });\n}\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Carousel\n          onChange={(index) => {\n            console.log(`onChange: ${index}`);\n          }}\n        >\n          {contentRender()}\n        </Carousel>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### 纵向\n```jsx\nimport { Carousel } from 'zarm';\n\nconst ITEMS = [\n  'https://static.zhongan.com/website/health/zarm/images/banners/1.png',\n  'https://static.zhongan.com/website/health/zarm/images/banners/2.png',\n  'https://static.zhongan.com/website/health/zarm/images/banners/3.png',\n];\n\nfunction contentRender() {\n  return ITEMS.map((item, i) => {\n    return (\n      <div className=\"carousel-item-pic\" key={+i}>\n        <img src={item} alt=\"\" draggable={false} />\n      </div>\n    );\n  });\n}\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Carousel\n          direction=\"up\"\n          height=\"48vw\"\n        >\n          {contentRender()}\n        </Carousel>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### 循环轮播\n```jsx\nimport { Carousel, Button } from 'zarm';\n\nconst ITEMS = [\n  'https://static.zhongan.com/website/health/zarm/images/banners/1.png',\n  'https://static.zhongan.com/website/health/zarm/images/banners/2.png',\n  'https://static.zhongan.com/website/health/zarm/images/banners/3.png',\n];\n\nfunction contentRender() {\n  return ITEMS.map((item, i) => {\n    return (\n      <div className=\"carousel-item-pic\" key={+i}>\n        <img src={item} alt=\"\" draggable={false} />\n      </div>\n    );\n  });\n}\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Carousel\n          ref={(ele) => { this.carousel = ele; }}\n          loop\n          direction=\"left\"\n          onChange={(index) => {\n            console.log(`onChange: ${index}`);\n          }}\n        >\n          {contentRender()}\n        </Carousel>\n        <div className=\"controls\">\n          <Button\n            block\n            size=\"sm\"\n            onClick={() => {\n              this.carousel.onJumpTo(0);\n            }}\n          >\n            无动画切换指定页\n          </Button>\n\n          <Button\n            block\n            size=\"sm\"\n            onClick={() => {\n              this.carousel.onSlideTo(2);\n            }}\n          >\n            滑动到指定页\n          </Button>\n        </div>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### 自动循环轮播\n```jsx\nimport { Carousel } from 'zarm';\n\nconst ITEMS = [\n  'https://static.zhongan.com/website/health/zarm/images/banners/1.png',\n  'https://static.zhongan.com/website/health/zarm/images/banners/2.png',\n  'https://static.zhongan.com/website/health/zarm/images/banners/3.png',\n];\n\nfunction contentRender() {\n  return ITEMS.map((item, i) => {\n    return (\n      <div className=\"carousel-item-pic\" key={+i}>\n        <img src={item} alt=\"\" draggable={false} />\n      </div>\n    );\n  });\n}\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Carousel\n          autoPlay\n          loop\n          direction=\"left\"\n          onChangeEnd={(index) => {\n            console.log(`onChangeEnd: ${index}`);\n          }}\n        >\n          {contentRender()}\n        </Carousel>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### API\n\n| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |\n| :--- | :--- | :--- | :--- | :--- |\n| prefixCls | string | za-carousel | | 类名前缀 |\n| className | string | | | 追加类名 |\n| direction | string | 'left' | 'left', 'right', 'up', 'down' | 滑动方向 |\n| height | number &#124; string | | | 高度 |\n| activeIndex | number | 0 | | 当前页面的索引 |\n| loop | boolean | false | | 是否循环 |\n| autoPlay | boolean | false | | 是否自动轮播 |\n| autoPlayIntervalTime | number | 3000 | | 自动轮播时间间隔，单位：毫秒 |\n| moveDistanceRatio | number | 0.5 | | 移动距离比例临界点 |\n| moveTimeSpan | number | 300 | | 移动时间跨度临界点，单位：毫秒 |\n| animationDuration | number | 300 | | 动画执行时间，单位：毫秒 |\n| showPagination | boolean | true | | 是否显示分页器 |\n| onChange | <code>(activeIndex: number) => void</code> | noop | \\(activeIndex: number\\) | 值变化时触发的回调函数 |\n| onChangeEnd | <code>(activeIndex: number) => void</code> | noop | \\(activeIndex: number\\) | 值变化动画结束后触发的回调函数 |\n"},693:function(n,e,t){}}]);