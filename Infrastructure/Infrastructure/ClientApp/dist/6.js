(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{129:function(e,t,r){"use strict";var n=r(2),o=r.n(n),a=r(0),c=r.n(a),i=r(5),u=r.n(i),p=r(14),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var l=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},h=function(e){function t(){var r,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),c=0;c<o;c++)a[c]=arguments[c];return r=n=f(this,e.call.apply(e,[this].concat(a))),n.handleClick=function(e){if(n.props.onClick&&n.props.onClick(e),!e.defaultPrevented&&0===e.button&&!n.props.target&&!l(e)){e.preventDefault();var t=n.context.router.history,r=n.props,o=r.replace,a=r.to;o?t.replace(a):t.push(a)}},f(n,r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),r=e.innerRef,n=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["replace","to","innerRef"]);u()(this.context.router,"You should not use <Link> outside a <Router>"),u()(void 0!==t,'You must specify the "to" property');var a=this.context.router.history,c="string"==typeof t?Object(p.b)(t,null,null,a.location):t,i=a.createHref(c);return o.a.createElement("a",s({},n,{onClick:this.handleClick,href:i,ref:r}))},t}(o.a.Component);h.propTypes={onClick:c.a.func,target:c.a.string,replace:c.a.bool,to:c.a.oneOfType([c.a.string,c.a.object]).isRequired,innerRef:c.a.oneOfType([c.a.string,c.a.func])},h.defaultProps={replace:!1},h.contextTypes={router:c.a.shape({history:c.a.shape({push:c.a.func.isRequired,replace:c.a.func.isRequired,createHref:c.a.func.isRequired}).isRequired}).isRequired},t.a=h},177:function(e,t){e.exports={des:"_1HcZoUv40Vy4at-Mckbg9q"}},412:function(e,t,r){"use strict";r.r(t);var n=r(36),o=r(2),a=r.n(o),c=r(129),i=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),u=r(177),p=function(e){function t(t){return e.call(this,t)||this}return i(t,e),t.prototype.render=function(){return a.a.createElement("div",{className:u.des},a.a.createElement("h1",null,"About Me"),a.a.createElement("p",null,"This is Bran, and I'm a front end developer."),a.a.createElement(c.a,{to:"/"},"return to home"))},t}(a.a.Component);r.d(t,"mapStateToProps",function(){return f}),r.d(t,"mapDispatchToProps",function(){return l}),r.d(t,"mergeProps",function(){return h});var s=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e};function f(){return{}}function l(e,t){return{}}function h(e,t,r){return s({},r,e,t)}t.default=Object(n.b)(f,l,h)(p)}}]);