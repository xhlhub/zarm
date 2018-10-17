(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{394:function(n,e,t){"use strict";t.r(e);var a=t(3),s=t.n(a),r=t(4),o=t.n(r),c=t(2),i=t.n(c),l=t(5),u=t.n(l),d=t(403),m=(t(715),function(n){function e(){var n,a,r,c;o()(this,e);for(var l=arguments.length,u=Array(l),d=0;d<l;d++)u[d]=arguments[d];return a=r=i()(this,(n=e.__proto__||s()(e)).call.apply(n,[this].concat(u))),r.document=function(){return{document:t(439),className:"pull-page"}},c=a,i()(r,c)}return u()(e,n),e}(d.a));e.default=m},403:function(n,e,t){"use strict";var a=t(3),s=t.n(a),r=t(4),o=t.n(r),c=t(6),i=t.n(c),l=t(2),u=t.n(l),d=t(5),m=t.n(d),h=t(0),S=t.n(h),g=t(404),T=t.n(g),E=t(405),f=t.n(E),p=(t(406),function(n){function e(){return o()(this,e),u()(this,(e.__proto__||s()(e)).apply(this,arguments))}return m()(e,n),i()(e,[{key:"render",value:function(){var n=this.document(localStorage.getItem("LANGUAGE")||"zh-CN"),e=n.document,t=n.className;if("string"==typeof e){var a=new T.a.Renderer;a.table=function(n,e){return'<div class="grid-container"><table class="grid"><thead>'+n+"</thead><tbody>"+e+"</tbody></table></div>"},a.code=function(n,e){return'<pre><code class="hljs '+e+'">'+(!(!e||!f.a.getLanguage(e))?f.a.highlight(e,n).value:n)+"</code></pre>"},T.a.setOptions({renderer:a});var s=T()(e,{renderer:a});return S.a.createElement("div",{className:t,dangerouslySetInnerHTML:{__html:s}})}return S.a.createElement("span",null)}}]),e}(S.a.Component));e.a=p},439:function(n,e){n.exports="## 上拉加载下拉刷新 Pull\n\n\n\n### 基本用法\n```jsx\nimport { Pull, Cell } from 'zarm';\n\nconst REFRESH_STATE = {\n  normal: 0,  // 普通\n  pull: 1,    // 下拉刷新（未满足刷新条件）\n  drop: 2,    // 释放立即刷新（满足刷新条件）\n  loading: 3, // 加载中\n  success: 4, // 加载成功\n  failure: 5, // 加载失败\n};\n\nconst LOAD_STATE = {\n  normal: 0,   // 普通\n  abort: 1,    // 中止\n  loading: 2,  // 加载中\n  success: 3,  // 加载成功\n  failure: 4,  // 加载失败\n  complete: 5, // 加载完成（无新数据）\n};\n\nfunction getRandomNum(min, max) {\n  const Range = max - min;\n  const Rand = Math.random();\n  return (min + Math.round(Rand * Range));\n}\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.mounted = true;\n    this.state = {\n      customRefreshing: REFRESH_STATE.normal,\n      customLoading: LOAD_STATE.normal,\n      dataSource: [],\n    };\n  }\n\n  componentDidMount() {\n    this.fetchData('customRefreshing');\n  }\n\n  componentWillUnmount() {\n    this.mounted = false;\n  }\n\n  // 模拟请求数据\n  fetchData(key) {\n    this.setState({ [`${key}`]: REFRESH_STATE.loading });\n    setTimeout(() => {\n      if (!this.mounted) return;\n\n      const dataSource = [];\n      const { length } = dataSource;\n\n      for (let i = length; i < length + 20; i++) {\n        dataSource.push(<Cell key={+i}>第 {i + 1} 行</Cell>);\n      }\n\n      this.setState({\n        dataSource,\n        [`${key}`]: REFRESH_STATE.success,\n      });\n    }, 2000);\n  }\n\n  // 模拟加载更多数据\n  loadData() {\n    this.setState({ customLoading: LOAD_STATE.loading });\n    setTimeout(() => {\n      if (!this.mounted) return;\n\n      const randomNum = getRandomNum(0, 5);\n      const { dataSource } = this.state;\n      let customLoading = LOAD_STATE.success;\n\n      // eslint-disable-next-line\n      console.log(`状态: ${randomNum === 0 ? '失败' : (randomNum === 1 ? '完成' : '成功')}`);\n\n      if (randomNum === 0) {\n        customLoading = LOAD_STATE.failure;\n      } else if (randomNum === 1) {\n        customLoading = LOAD_STATE.complete;\n      } else {\n        const newLength = 5;\n        const startIndex = dataSource.length;\n        for (let i = startIndex; i < startIndex + newLength; i++) {\n          dataSource.push(<Cell key={+i}>第 {i + 1} 行</Cell>);\n        }\n      }\n\n      this.setState({\n        dataSource,\n        customLoading,\n      });\n    }, 2000);\n  }\n\n  render() {\n    const { customRefreshing, customLoading, dataSource } = this.state;\n\n    const itemsRender = [];\n    for (let i = 0; i < 3; i++) {\n      itemsRender.push(<Cell key={+i}>第 {i + 1} 行</Cell>);\n    }\n\n    return (\n      <div>\n        <Pull\n          refresh={{\n            state: customRefreshing,\n            handler: () => this.fetchData('customRefreshing'),\n            // render: (refreshState, percent) => {\n            //   const cls = 'custom-control';\n            //   switch (refreshState) {\n            //     case REFRESH_STATE.pull:\n            //       return <div className={cls} style={{ transform: `scale(${percent / 100})` }}><img src={logo} alt=\"\" /></div>;\n\n            //     case REFRESH_STATE.drop:\n            //       return <div className={`${cls} rotate360`}><img src={logo} alt=\"\" /></div>;\n\n            //     case REFRESH_STATE.loading:\n            //       return <div className={cls}><ActivityIndicator className=\"rotate360\" /></div>;\n\n            //     case REFRESH_STATE.success:\n            //       return <div className={cls}>加载成功</div>;\n\n            //     case REFRESH_STATE.failure:\n            //       return <div className={cls}>加载失败</div>;\n            //   }\n            // },\n          }}\n          load={{\n            state: customLoading,\n            handler: () => this.loadData(),\n            // render: (loadState) => {\n            //   const cls = 'custom-control';\n            //   switch (loadState) {\n            //     case LOAD_STATE.loading:\n            //       return <div className={cls}><ActivityIndicator className=\"rotate360\" /></div>;\n\n            //     case LOAD_STATE.failure:\n            //       return <div className={cls}>加载失败</div>;\n\n            //     case LOAD_STATE.complete:\n            //       return <div className={cls}>我是有底线的</div>;\n            //   }\n            // },\n          }}\n        >\n          {dataSource}\n        </Pull>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### API\n\n| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |\n| :--- | :--- | :--- | :--- | :--- |\n| prefixCls | string | za-pull | | 类名前缀 |\n| className | string | | | 追加类名 |\n| refresh | Action | | | 下拉刷新的参数配置 |\n| load | Action |  | | 上拉加载的参数配置 |\n| animationDuration | number | 400 | | 动画执行时间，单位：毫秒 |\n| stayTime | number | 1000 | | 加载成功停留时间 |\n\n#### Action 类型定义\n| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |\n| :--- | :--- | :--- | :--- | :--- |\n| state | REFRESH_STATE &#124; LOAD_STATE | 0 | | 状态枚举 |\n| startDistance | number | 20 | | 下拉时的助跑距离 |\n| distance | number | 50 | | 触发距离阀值 |\n| render | <code>(refreshState: REFRESH_STATE &#124; LOAD_STATE, percent: number) => any</code> | | | 各状态渲染的回调函数 |\n| handler | <code>() => void</code> | | | 达到阀值后释放触发的回调函数 |\n"},715:function(n,e,t){}}]);