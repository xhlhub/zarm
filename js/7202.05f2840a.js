(self.webpackChunksite=self.webpackChunksite||[]).push([[7202],{17202:function(n,e,t){"use strict";t.r(e),e.default='# Cell 列表项\n\n## 基本用法\n\n```jsx\nimport { Cell } from \'zarm\';\n\nReactDOM.render(<Cell title="标题文字" />, mountNode);\n```\n\n## 带描述\n\n```jsx\nimport { Cell } from \'zarm\';\nimport { Plus } from \'@zarm-design/icons\';\n\nReactDOM.render(\n  <>\n    <Cell title="标题文字" description="描述文字" />\n    <Cell title="标题文字" description={<Plus theme="primary" />} />\n  </>,\n  mountNode,\n);\n```\n\n## 带图标、标题\n\n```jsx\nimport { Cell } from \'zarm\';\nimport { Volume } from \'@zarm-design/icons\';\n\nconst img = \'https://static.zhongan.com/website/health/zarm/images/icons/state.png\';\n\nReactDOM.render(\n  <>\n    <Cell title="标题文字" icon={<Volume theme="primary" />} />\n    <Cell title="标题文字" icon={<img alt="" src={img} style={{ width: 24, height: 24 }} />} />\n  </>,\n  mountNode,\n);\n```\n\n## 带跳转\n\n```jsx\nimport { Cell } from \'zarm\';\n\nReactDOM.render(\n  <>\n    <Cell title="标题文字" onClick={() => {}} />\n    <Cell title="标题文字" onClick={() => {}} />\n  </>,\n  mountNode,\n);\n```\n\n## 带描述、箭头、跳转\n\n```jsx\nimport { Cell } from \'zarm\';\n\nReactDOM.render(\n  <>\n    <Cell hasArrow title="标题文字" description="描述文字" onClick={() => {}} />\n    <Cell hasArrow title="标题文字" description="描述文字" onClick={() => {}} />\n  </>,\n  mountNode,\n);\n```\n\n## 带图标、描述、箭头、跳转\n\n```jsx\nimport { Cell, Icon } from \'zarm\';\nimport { Volume } from \'@zarm-design/icons\';\n\nconst img = \'https://static.zhongan.com/website/health/zarm/images/icons/state.png\';\n\nReactDOM.render(\n  <>\n    <Cell\n      hasArrow\n      title="标题文字"\n      description="描述文字"\n      icon={<Volume theme="primary" />}\n      onClick={() => {}}\n    />\n\n    <Cell\n      hasArrow\n      title="标题文字"\n      description="描述文字"\n      icon={<img alt="" src={img} style={{ width: 24, height: 24 }} />}\n      onClick={() => {}}\n    />\n\n    <Cell\n      hasArrow\n      title={\n        <div className="box">\n          <div className="box-title">标题文字</div>\n          <div className="box-description">描述文字</div>\n        </div>\n      }\n      description="附加提示"\n      icon={<img alt="" src={img} style={{ width: 48, height: 48 }} />}\n      onClick={() => {}}\n    />\n  </>,\n  mountNode,\n);\n```\n\n## 提示信息\n\n```jsx\nimport { Cell, Message, Input } from \'zarm\';\nimport { WarningCircle } from \'@zarm-design/icons\';\n\nReactDOM.render(\n  <Cell\n    title="标题"\n    help={\n      <Message theme="danger" icon={<WarningCircle size="sm" />}>\n        标题不能为空\n      </Message>\n    }\n  >\n    <Input type="text" placeholder="请输入标题" />\n  </Cell>,\n  mountNode,\n);\n```\n\n## API\n\n| 属性        | 类型       | 默认值 | 说明                                                  |\n| :---------- | :--------- | :----- | :---------------------------------------------------- |\n| hasArrow    | boolean    | false  | 是否显示箭头                                          |\n| icon        | ReactNode  | -      | 设置图标                                              |\n| title       | ReactNode  | -      | 设置标题区域内容                                      |\n| description | ReactNode  | -      | 设置描述区域内容                                      |\n| help        | ReactNode  | -      | 设置下方提示信息区域内容，通常配合 `Message` 组件使用 |\n| onClick     | () => void | -      | 点击后触发的回调函数                                  |\n'}}]);