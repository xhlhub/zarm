(self.webpackChunksite=self.webpackChunksite||[]).push([[3867],{23867:function(n,e,o){"use strict";o.r(e),e.default="# BackToTop 返回顶部\n\n## 基本用法\n\n```jsx\nimport { useRef, useState } from 'react';\nimport { Cell, BackToTop, Message, Button } from 'zarm';\nimport { WarningCircle } from '@zarm-design/icons';\n\nconst Demo = () => {\n  const list = [];\n  for (let i = 0; i < 100; i++) list.push(<Cell key={+i}>第 {i + 1} 行</Cell>);\n\n  const containerRef = useRef();\n  const [useWindowScroll, setUseWindowScroll] = useState(true);\n\n  const scrollContainer = !useWindowScroll ? () => containerRef.current : null;\n\n  const containerStyle = !useWindowScroll\n    ? {\n        overflowY: 'auto',\n        maxHeight: 400,\n      }\n    : {};\n\n  return (\n    <>\n      <Message theme=\"warning\" icon={<WarningCircle />}>\n        当前使用的是 `{useWindowScroll ? 'window' : 'div'}` 作为滚动容器。\n        <Button theme=\"primary\" size=\"xs\" onClick={() => setUseWindowScroll(!useWindowScroll)}>\n          点击切换\n        </Button>\n      </Message>\n\n      <div ref={containerRef} style={containerStyle}>\n        {list}\n      </div>\n\n      <BackToTop scrollContainer={scrollContainer} onClick={() => console.log('click back to top')}>\n        <div\n          style={{\n            width: 60,\n            height: 60,\n            lineHeight: '60px',\n            textAlign: 'center',\n            backgroundColor: '#fff',\n            color: '#999',\n            fontSize: 20,\n            borderRadius: 30,\n            boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.2)',\n            cursor: 'pointer',\n          }}\n        >\n          Up\n        </div>\n      </BackToTop>\n    </>\n  );\n};\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n## API\n\n| 属性            | 类型                                               | 默认值 | 说明                   |\n| :-------------- | :------------------------------------------------- | :----- | :--------------------- |\n| speed           | number                                             | 100    | 每 10 毫秒滑动的距离   |\n| visibleDistance | number                                             | 400    | 离滚动条顶部的可视距离 |\n| scrollContainer | HTMLElement \\| (() => HTMLElement)                 | window | 设置滚动容器           |\n| onClick         | (event?: MouseEvent&lt;HTMLDivElement&gt;) => void | -      | 点击后触发的回调函数   |\n"}}]);