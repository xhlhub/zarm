(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{429:function(e,t,a){"use strict";a.r(t);a(222);var l=a(221),n=(a(260),a(277)),r=(a(215),a(214)),c=a(33),o=a.n(c),u=a(32),m=a.n(u),i=a(31),E=a.n(i),s=a(30),p=a.n(s),d=a(29),h=a.n(d),y=a(0),f=a.n(y),w=a(213),g=a(216),b=a(212),x=function(e){function t(e){m()(this,t);var a=p()(this,(t.__proto__||o()(t)).call(this,e));return a.state={focused:!1,number:""},a}return h()(t,e),E()(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return f.a.createElement(w.a,{className:"input-page"},f.a.createElement(g.a,{title:"文本框 Input"}),f.a.createElement("main",null,f.a.createElement(r.a,null,f.a.createElement(r.a.Header,{title:"普通"}),f.a.createElement(r.a.Body,null,f.a.createElement(l.a,{title:"单行文本"},f.a.createElement(n.a,{type:"text",placeholder:"请输入"})),f.a.createElement(l.a,{title:"多行文本"},f.a.createElement(n.a,{type:"textarea",rows:3,placeholder:"请输入"})))),f.a.createElement(r.a,null,f.a.createElement(r.a.Header,{title:"输入类型"}),f.a.createElement(r.a.Body,null,f.a.createElement(l.a,{title:"数字"},f.a.createElement(n.a,{ref:function(t){e.manualFocus=t},type:"number",placeholder:"type is number",value:this.state.number,focused:this.state.focused,onFocus:function(e){return console.log("onFocus: "+e)},onBlur:function(e){return console.log("onBlur: "+e)},onClear:function(t){e.setState({number:""}),console.log("清除了",t)}})),f.a.createElement(l.a,{title:"金额"},f.a.createElement(n.a,{type:"price",placeholder:"type is price"})),f.a.createElement(l.a,{title:"身份证"},f.a.createElement(n.a,{type:"idcard",placeholder:"type is idcard"})),f.a.createElement(l.a,null,f.a.createElement("button",{onClick:function(){return e.manualFocus.focus()}},"click to focus the first input")))),f.a.createElement(r.a,null,f.a.createElement(r.a.Header,{title:"高度自适应"}),f.a.createElement(r.a.Body,null,f.a.createElement(l.a,{title:"多行文本"},f.a.createElement(n.a,{autoHeight:!0,type:"textarea",rows:3,placeholder:"写点啥..."})))),f.a.createElement(r.a,null,f.a.createElement(r.a.Header,{title:"无标签栏"}),f.a.createElement(r.a.Body,null,f.a.createElement(l.a,null,f.a.createElement(n.a,{type:"text",placeholder:"标题"})),f.a.createElement(l.a,null,f.a.createElement(n.a,{autoHeight:!0,type:"textarea",rows:4,maxLength:200,placeholder:"摘要"})))),f.a.createElement(r.a,null,f.a.createElement(r.a.Header,{title:"显示输入字数"}),f.a.createElement(r.a.Body,null,f.a.createElement(l.a,null,f.a.createElement(n.a,{autoHeight:!0,showLength:!0,type:"textarea",rows:4,maxLength:200,placeholder:"摘要"}))))),f.a.createElement(b.a,null))}}]),t}(y.Component);t.default=x}}]);