(this.webpackJsonpmodule3=this.webpackJsonpmodule3||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),o=n.n(c),r=n(7),s=n.n(r),i=(n(13),n(14),n(2)),d=n(3),u=n(5),b=n(4),l=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("section",{className:"statistics",children:[Object(a.jsxs)("div",{children:["Neutral ",this.props.neutral]}),Object(a.jsxs)("div",{children:["Bad ",this.props.bad]}),Object(a.jsxs)("div",{children:["Good! ",this.props.good]}),"Total:  ",this.props.total,Object(a.jsx)("br",{}),"Positive % : ",this.props.positivePercentage,Object(a.jsx)("br",{})]})}}]),n}(c.Component);function j(t){var e=t.onLeaveFeedback;return Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{name:"neutral",onClick:e,children:"Neutral"}),Object(a.jsx)("button",{name:"bad",onClick:e,children:"Bad"}),Object(a.jsx)("button",{name:"good",onClick:e,children:"Good!"})]})}function h(t){var e=t.title,n=void 0===e?"Empty title":e,c=t.children;return Object(a.jsxs)("h4",{children:[n,c]})}var O=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.handleGood=function(e){return t.setState({good:t.state.good+1})},t.handleBad=function(e){return t.setState({bad:t.state.bad+1})},t.handleFeedback=function(e){"neutral"===e.currentTarget.name&&t.setState({neutral:t.state.neutral+1}),"bad"===e.currentTarget.name&&t.setState({bad:t.state.bad+1}),"good"===e.currentTarget.name&&t.setState({good:t.state.good+1})},t.countTotalFeedback=function(){return t.state.good+t.state.bad+t.state.neutral},t.countPositiveFeedbackPercentage=function(){return Math.round(t.state.good/t.countTotalFeedback()*100)||0},t}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(h,{title:"Please leave a feedback"}),Object(a.jsx)(j,{onLeaveFeedback:this.handleFeedback}),Object(a.jsx)(h,{title:"Statistics"}),Object(a.jsx)(l,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})]})}}]),n}(c.Component);var g=function(){return Object(a.jsx)(O,{name:"name"})},v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),a(t),c(t),o(t),r(t)}))};s.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root")),v()}},[[15,1,2]]]);
//# sourceMappingURL=main.521ea736.chunk.js.map