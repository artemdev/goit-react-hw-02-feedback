(this.webpackJsonpmodule3=this.webpackJsonpmodule3||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n.n(a),s=n(9),i=n.n(s),o=(n(15),n(6)),d=n(8),b=n(2),u=n(3),l=n(5),j=n(4);n(16);function h(e){var t=e.onLeaveFeedback;return Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{name:"neutral",onClick:t,children:"Neutral"}),Object(c.jsx)("button",{name:"bad",onClick:t,children:"Bad"}),Object(c.jsx)("button",{name:"good",onClick:t,children:"Good!"})]})}function O(e){var t=e.title,n=void 0===t?"Empty title":t,a=e.children,r=e.className;return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:n}),Object(c.jsx)("section",{className:r,children:a})]})}var v=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsx)(O,{title:"Please leave a feedback",className:"feddback",children:Object(c.jsx)(h,{onLeaveFeedback:this.props.handleFeedback})})})}}]),n}(a.Component);var p=function(e){var t=e.message,n=void 0===t?"":t;return Object(c.jsx)("p",{children:n})},f=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(b.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).countTotalFeedback=function(){return e.props.state.good+e.props.state.bad+e.props.state.neutral},e.countPositiveFeedbackPercentage=function(){return Math.round(e.props.state.good/e.countTotalFeedback()*100)||0},e}return Object(u.a)(n,[{key:"render",value:function(){return this.countTotalFeedback()<=0?Object(c.jsx)(p,{message:"No feedback given"}):Object(c.jsxs)(O,{title:"Statistics",className:"statistics",children:[Object(c.jsxs)("div",{children:["Neutral ",this.props.state.neutral]}),Object(c.jsxs)("div",{children:["Bad ",this.props.state.bad]}),Object(c.jsxs)("div",{children:["Good! ",this.props.state.good]}),"Total:  ",this.countTotalFeedback(),Object(c.jsx)("br",{}),"Positive % : ",this.countPositiveFeedbackPercentage(),Object(c.jsx)("br",{})]})}}]),n}(a.Component),k=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(b.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.handleFeedback=function(t){var n=t.currentTarget.name;Object.keys(e.state).filter((function(e){return n===e})).length&&e.setState((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(o.a)({},n,e[n]+1))}))},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(v,{state:this.state,handleFeedback:this.handleFeedback,name:"name"}),Object(c.jsx)(f,{state:this.state})]})}}]),n}(a.Component),x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(k,{})}),document.getElementById("root")),x()}},[[17,1,2]]]);
//# sourceMappingURL=main.6afce4e7.chunk.js.map