(this.webpackJsonpmemegenerator2=this.webpackJsonpmemegenerator2||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(4),i=n.n(s),o=(n(14),n(15),n(0));var h=function(){return Object(o.jsx)("header",{children:Object(o.jsx)("p",{children:"Meme Generator"})})},l=n(5),r=n(6),m=n(7),j=n(2),d=n(9),u=n(8),b=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={topText:"",bottomText:"",randomImage:"http://i.imgflip.com/1bij.jpg",isLoaded:!1,allMemeImgs:[]},a.handleChange=a.handleChange.bind(Object(j.a)(a)),a.handleClick=a.handleClick.bind(Object(j.a)(a)),a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(t){var n=t.data.memes;e.setState({allMemeImgs:n})}))}},{key:"handleChange",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(l.a)({},n,a))}},{key:"handleClick",value:function(e){e.preventDefault();var t=this.state.allMemeImgs.length,n=Math.floor(Math.random()*t),a=this.state.allMemeImgs[n].url;this.setState({randomImage:a})}},{key:"render",value:function(){return Object(o.jsxs)("div",{children:[Object(o.jsxs)("form",{className:"meme-form",onSubmit:this.handleClick,children:[Object(o.jsx)("input",{type:"text",name:"topText",value:this.state.topText,placeholder:"topText",onChange:this.handleChange}),Object(o.jsx)("input",{type:"text",name:"bottomText",value:this.state.bottomText,placeholder:"bottomText",onChange:this.handleChange}),Object(o.jsx)("button",{onClick:this.handleClick,children:"Gen"})]}),Object(o.jsxs)("div",{className:"meme",children:[Object(o.jsx)("img",{src:this.state.randomImage,alt:""}),Object(o.jsx)("h2",{className:"top",children:this.state.topText}),Object(o.jsx)("h2",{className:"bottom",children:this.state.bottomText})]})]})}}]),n}(c.a.Component);var g=function(){return Object(o.jsxs)("main",{children:[Object(o.jsx)(h,{}),Object(o.jsx)(b,{})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root")),x()}},[[17,1,2]]]);
//# sourceMappingURL=main.2f1a5526.chunk.js.map