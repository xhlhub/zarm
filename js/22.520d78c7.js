(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{234:function(n,e,t){"use strict";t.r(e);var a=t(33),l=t.n(a),o=t(34),i=t.n(o),s=t(35),c=t.n(s),r=t(36),u=t.n(r),d=function(n){function e(){var n,a,o,s;i()(this,e);for(var r=arguments.length,u=Array(r),d=0;d<r;d++)u[d]=arguments[d];return a=o=c()(this,(n=e.__proto__||l()(e)).call.apply(n,[this].concat(u))),o.document=function(){return{document:t(316),className:"picker-page"}},s=a,c()(o,s)}return u()(e,n),e}(t(253).a);e.default=d},250:function(n,e,t){"use strict";var a=t(249),l=t.n(a),o=t(33),i=t.n(o),s=t(34),c=t.n(s),r=t(37),u=t.n(r),d=t(35),m=t.n(d),v=t(36),p=t.n(v),h=t(0),g=t.n(h),f=t(248),b=t.n(f),k=function(n){function e(){return c()(this,e),m()(this,(e.__proto__||i()(e)).apply(this,arguments))}return p()(e,n),u()(e,[{key:"componentDidMount",value:function(){if("index-page"===this.props.className){var n=window.sessionStorage[this.props.className];n&&(this.container.scrollTop=n)}}},{key:"componentWillUnmount",value:function(){if("index-page"===this.props.className){var n=this.container.scrollTop;window.sessionStorage[this.props.className]=n}}},{key:"render",value:function(){var n=this,e=this.props,t=e.className,a=e.children,o=b()(l()({"app-container":!0},t,!!t));return g.a.createElement("div",{ref:function(e){n.container=e},className:o},g.a.createElement("a",{className:"github",href:"https://github.com/ZhonganTechENG/zarm"},g.a.createElement("svg",{"aria-hidden":"true",version:"1.1",viewBox:"0 0 16 16"},g.a.createElement("path",{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}))),a)}}]),e}(h.Component);e.a=k},251:function(n,e,t){"use strict";var a=t(33),l=t.n(a),o=t(34),i=t.n(o),s=t(37),c=t.n(s),r=t(35),u=t.n(r),d=t(36),m=t.n(d),v=t(0),p=t.n(v),h=t(248),g=t.n(h),f=function(n){function e(){return i()(this,e),u()(this,(e.__proto__||l()(e)).apply(this,arguments))}return m()(e,n),c()(e,[{key:"render",value:function(){var n=this.props,e=n.prefixCls,t=n.className,a=n.titleRender,l=n.moreRender,o=n.children,i=g()(""+e,t);return p.a.createElement("div",{className:i},p.a.createElement("div",{className:e+"-header"},a&&p.a.createElement("div",{className:e+"-title"},a),l&&p.a.createElement("div",{className:e+"-more"},l)),p.a.createElement("div",{className:e+"-body"},o))}}]),e}(v.PureComponent);e.a=f,f.defaultProps={prefixCls:"za-panel"}},252:function(n,e,t){"use strict";var a=t(33),l=t.n(a),o=t(34),i=t.n(o),s=t(37),c=t.n(s),r=t(35),u=t.n(r),d=t(36),m=t.n(d),v=t(0),p=t.n(v),h=function(n){function e(){return i()(this,e),u()(this,(e.__proto__||l()(e)).apply(this,arguments))}return m()(e,n),c()(e,[{key:"render",value:function(){return p.a.createElement("footer",null,p.a.createElement("div",{className:"copyright"},p.a.createElement("div",{className:"copyright-cn"},"众安·体验设计中心"),p.a.createElement("div",{className:"copyright-en"},"Zhongan UX Densign")))}}]),e}(v.Component);e.a=h},253:function(n,e,t){"use strict";var a=t(256),l=t.n(a),o=t(259),i=t.n(o),s=t(260),c=t.n(s),r=t(33),u=t.n(r),d=t(34),m=t.n(d),v=t(37),p=t.n(v),h=t(35),g=t.n(h),f=t(36),b=t.n(f),k=t(0),S=t.n(k),C=t(38),y=t.n(C),A=t(261),D=t.n(A),E=t(251),_=t(27),N=t.n(_),T=t(262),O=(t(263),t(264),function(n){function e(n){m()(this,e);var t=g()(this,(e.__proto__||u()(e)).call(this,n));return t.containerId=""+parseInt(1e9*Math.random(),10).toString(36),t.document=t.props.children.match(/([^]*)\n?(```[^]+```)/),t.title=String(t.document[1]),t.source=t.document[2].match(/```(.*)\n?([^]+)```/),t}return b()(e,n),p()(e,[{key:"componentDidMount",value:function(){this.renderSource(this.source[2])}},{key:"componentWillUnmount",value:function(){this.containerElem&&y.a.unmountComponentAtNode(this.containerElem)}},{key:"renderSource",value:function(n){var e=this;Promise.all([t.e(36),t.e(34)]).then(t.bind(null,356)).then(function(n){return{args:["context","React","ReactDOM","zarm"],argv:[e,S.a,y.a,n]}}).then(function(t){var a=t.args,l=t.argv;n=n.replace(/import\s+\{\s+(.*)\s+\}\s+from\s+'zarm';/,"const { $1 } = zarm;").replace("mountNode","document.getElementById('"+e.containerId+"')");var o=Object(T.transform)(n,{presets:["es2015","react"]}).code;a.push(o),(new(Function.prototype.bind.apply(Function,[null].concat(N()(a))))).apply(void 0,N()(l)),e.source[2]=n}).catch(function(n){0})}},{key:"render",value:function(){var n=this;return"/panel"===this.props.location.pathname?S.a.createElement("div",{id:this.containerId,ref:function(e){n.containerElem=e}}):S.a.createElement(E.a,{titleRender:S.a.createElement("span",null,this.title)},S.a.createElement("div",{id:this.containerId,ref:function(e){n.containerElem=e}}))}}]),e}(S.a.Component)),w=t(250),M=t(252),x=function(n){function e(n){m()(this,e);var t=g()(this,(e.__proto__||u()(e)).call(this,n));return t.nodeList=[],t.components=new c.a,t.renderer=new D.a.Renderer,t}return b()(e,n),p()(e,[{key:"componentDidMount",value:function(){this.renderDOM()}},{key:"componentDidUpdate",value:function(){this.renderDOM()}},{key:"componentWillUnmount",value:function(){this.nodeList.forEach(function(n){y.a.unmountComponentAtNode(n)})}},{key:"renderDOM",value:function(){var n=!0,e=!1,t=void 0;try{for(var a,o=l()(this.components);!(n=(a=o.next()).done);n=!0){var s=a.value,c=i()(s,2),r=c[0],u=c[1],d=document.getElementById(r);this.nodeList.push(d),d instanceof HTMLElement&&y.a.render(u,d)}}catch(n){e=!0,t=n}finally{try{!n&&o.return&&o.return()}finally{if(e)throw t}}}},{key:"render",value:function(){var n=this,e=this.document(localStorage.getItem("LANGUAGE")||"zh-CN"),t=e.document,a=e.className;if("string"==typeof t){this.components.clear();var l=D()(t.replace(/:::\s?api\s?([^]+?):::/g,"").replace(/:::\s?demo\s?([^]+?):::/g,function(e,t,a){var l=a.toString(36);return n.components.set(l,S.a.createElement(O,n.props,t)),"<div id="+l+"></div>"}),{renderer:this.renderer});return S.a.createElement(w.a,{className:a},S.a.createElement("main",{dangerouslySetInnerHTML:{__html:l}}),S.a.createElement(M.a,null))}return S.a.createElement("span",null)}}]),e}(S.a.Component);e.a=x},316:function(n,e){n.exports="## 选择器 Picker & Select\n\n:::demo 基本用法\n```jsx\nimport { Cell, Button, Picker, Toast } from 'zarm';\n\nconst SINGLE_DATA = [\n  { value: '1', label: '选项一' },\n  { value: '2', label: '选项二' },\n];\n\n// 普通多列数据\nconst MULTI_DATA = [\n  [\n    { value: '1', label: '选项一' },\n    { value: '2', label: '选项二' },\n  ],\n  [\n    { value: '3', label: '选项A' },\n    { value: '4', label: '选项B' },\n  ],\n];\n\n// 级联数据\nconst CASCADE_DATA = [\n  {\n    value: '1',\n    label: '北京市',\n    children: [\n      { value: '11', label: '海淀区' },\n      { value: '12', label: '西城区' },\n    ],\n  },\n  {\n    value: '2',\n    label: '上海市',\n    children: [\n      { value: '21', label: '杨浦区' },\n      { value: '22', label: '静安区' },\n    ],\n  },\n];\n\nconst DIY_DATA = [\n  {\n    code: '1',\n    name: '北京市',\n    children: [\n      { code: '11', name: '海淀区' },\n      { code: '12', name: '西城区' },\n    ],\n  },\n  {\n    code: '2',\n    name: '上海市',\n    children: [\n      { code: '21', name: '黄埔区' },\n      { code: '22', name: '虹口区' },\n    ],\n  },\n];\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      single: {\n        visible: false,\n        value: [],\n        dataSource: SINGLE_DATA,\n      },\n      multi: {\n        visible: false,\n        value: [],\n        dataSource: MULTI_DATA,\n      },\n      cascade: {\n        visible: false,\n        value: [],\n        dataSource: CASCADE_DATA,\n      },\n      diy: {\n        visible: false,\n        value: [],\n        dataSource: DIY_DATA,\n      },\n    };\n  }\n\n  componentDidMount() {\n    // 异步加载数据源测试\n    setTimeout(() => {\n      const { cascade } = this.state;\n\n      cascade.dataSource = CASCADE_DATA;\n      cascade.value = ['1', '12'];\n      this.setState({ cascade });\n    }, 0);\n  }\n\n  toggle(key) {\n    const state = this.state[key];\n    state.visible = !state.visible;\n    this.setState({ [`${key}`]: state });\n  }\n\n  render() {\n    const {\n      single,\n      multi,\n      cascade,\n      diy,\n    } = this.state;\n\n    return (\n      <div>\n        <Cell\n          description={\n            <Button size=\"sm\" onClick={() => this.toggle('single')}>打开</Button>\n          }\n        >\n          单列\n        </Cell>\n\n        <Cell\n          description={\n            <Button size=\"sm\" onClick={() => this.toggle('multi')}>打开</Button>\n          }\n        >\n          多列\n        </Cell>\n\n        <Cell\n          description={\n            <Button size=\"sm\" onClick={() => this.toggle('cascade')}>打开</Button>\n          }\n        >\n          级联\n        </Cell>\n\n        <Cell\n          description={\n            <Button size=\"sm\" onClick={() => this.toggle('diy')}>打开</Button>\n          }\n        >\n          自定义\n        </Cell>\n\n        <Picker\n          visible={single.visible}\n          value={single.value}\n          dataSource={single.dataSource}\n          onOk={(selected) => {\n            console.log('Picker onOk: ', selected);\n            single.value = selected.map(item => item.value);\n            this.setState({ single });\n            Toast.show(JSON.stringify(selected));\n            this.toggle('single');\n          }}\n          onCancel={() => this.toggle('single')}\n        />\n\n        <Picker\n          visible={multi.visible}\n          value={multi.value}\n          dataSource={multi.dataSource}\n          onOk={(selected) => {\n            console.log('Picker onOk: ', selected);\n            multi.value = selected.map(item => item.value);\n            this.setState({ multi });\n            Toast.show(JSON.stringify(selected));\n            this.toggle('multi');\n          }}\n          onCancel={() => this.toggle('multi')}\n        />\n\n        <Picker\n          visible={cascade.visible}\n          value={cascade.value}\n          dataSource={cascade.dataSource}\n          onOk={(selected) => {\n            console.log('Picker onOk: ', selected);\n            cascade.value = selected.map(item => item.value);\n            this.setState({ cascade });\n            Toast.show(JSON.stringify(selected));\n            this.toggle('cascade');\n          }}\n          onCancel={() => this.toggle('cascade')}\n        />\n\n        <Picker\n          visible={diy.visible}\n          title=\"custom title\"\n          cancelText=\"Cancel\"\n          okText=\"Ok\"\n          dataSource={diy.dataSource}\n          value={diy.value}\n          valueMember=\"code\"\n          itemRender={data => data.name}\n          onOk={(selected) => {\n            console.log('Picker onOk: ', selected);\n            diy.value = selected.map(item => item.code);\n            this.setState({\n              diy,\n            });\n            Toast.show(JSON.stringify(selected));\n            this.toggle('diy');\n          }}\n          onCancel={() => this.toggle('diy')}\n        />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n:::\n\n\n:::demo 表单选择 Select\n```jsx\nimport { Select, Cell } from 'zarm';\n\n// 级联数据\nconst CASCADE_DATA = [\n  {\n    value: '1',\n    label: '北京市',\n    children: [\n      { value: '11', label: '海淀区' },\n      { value: '12', label: '西城区' },\n    ],\n  },\n  {\n    value: '2',\n    label: '上海市',\n    children: [\n      { value: '21', label: '杨浦区' },\n      { value: '22', label: '静安区' },\n    ],\n  },\n];\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n      this.state = {\n        visible: false,\n        value: [],\n        dataSource: [],\n      };\n  }\n\n  componentDidMount() {\n    // 异步加载数据源测试\n    setTimeout(() => {\n      this.setState({\n        dataSource: CASCADE_DATA,\n        value: ['1', '12'],\n      });\n    }, 0);\n  }\n\n  render() {\n    const { visible, value, dataSource } = this.state;\n    return (\n      <div>\n        <Cell title=\"城市\">\n          <Select\n            visible={visible}\n            placeholder=\"请选择省市区\"\n            value={value}\n            dataSource={dataSource}\n            onOk={(selected) => {\n              console.log('Select onOk: ', selected);\n              this.setState({\n                value: selected.map(item => item.value),\n              });\n            }}\n          />\n        </Cell>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n:::\n\n\n:::demo 平铺选择 PickerView\n```jsx\nimport { PickerView } from 'zarm';\n\n// 级联数据\nconst CASCADE_DATA = [\n  {\n    value: '1',\n    label: '北京市',\n    children: [\n      { value: '11', label: '海淀区' },\n      { value: '12', label: '西城区' },\n    ],\n  },\n  {\n    value: '2',\n    label: '上海市',\n    children: [\n      { value: '21', label: '杨浦区' },\n      { value: '22', label: '静安区' },\n    ],\n  },\n];\n\nclass Demo extends React.Component {\n    constructor(props) {\n    super(props);\n    this.state = {\n      value: [],\n    };\n  }\n\n  render() {\n    return (\n      <div>\n        <PickerView\n          value={this.state.value}\n          dataSource={CASCADE_DATA}\n          onChange={selected => console.log('PickerView onChange: ', selected)}\n        />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n:::\n\n\n:::api API\n\n| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |\n| :--- | :--- | :--- | :--- | :--- |\n| prefixCls | string | za-picker | | 类名前缀 |\n| className | string | | | 追加类名 |\n| dataSource | object[] | [ ] | | 数据源 |\n| value | string &#124; string[] &#124; number[] |  | | 值 |\n| defaultValue | string &#124; string[] &#124; number[] |  | | 初始值 |\n| valueMember | string | 'value' | | 值字段对应的key \n| itemRender | func | <code>(data?: object) => data.label</code> | | 单个选项的展示 |\n| disabled | boolean | false | | 是否禁用 |\n| cols | number | | | 级联选择器的级数 |\n| onChange | <code>(selected?: object) => void</code> | noop | \\(selected: object\\) | 值变化时触发的回调函数 |\n\n#### 仅 Picker & Select 支持的属性\n| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |\n| :--- | :--- | :--- | :--- | :--- |\n| visible | boolean | false | | 是否展示 |\n| title | string | '请选择' | | 选择器标题 |\n| okText | string | '确定' | | 确定栏文字 |\n| cancelText | string | '取消' | | 取消栏文字 |\n| onOk | <code>(selected?: object) => void</code> | noop | \\(selected: object\\) | 点击确定时触发的回调函数 |\n| onCancel | <code>() => void</code> | noop | | 点击取消时触发的回调函数 |\n| onMaskClick | <code>() => void</code> | noop | | 点击遮罩层时触发的回调函数 |\n\n#### 仅 Select 支持的属性\n| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |\n| :--- | :--- | :--- | :--- | :--- |\n| placeholder | string | '请选择' | | 输入提示信息 |\n| displayRender | <code>(selected?: object) => string</code> | noop | \\(selected: object\\) | 所选值的展示 |\n\n:::"}}]);