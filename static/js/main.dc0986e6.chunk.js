(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a.p+"static/media/humanlow.a68988dc.mp4"},31:function(e,t,a){e.exports=a(60)},36:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){},53:function(e,t,a){},56:function(e,t,a){},58:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(27),o=a.n(s),c=(a(36),a(6)),l=a(7),r=a(8),m=a(9),u=a(10),d=(a(38),a(61)),p=(a(40),a(14)),h=a.n(p),y={title:i.a.createElement(i.a.Fragment,null,"The ",i.a.createElement("strong",null,"Human"),"lapse project"),subtitle:"Timelapses of Humans."},v={WhatIsThis:{name:"Humanlapse?",description:"The timelapse is a famous photography technique used to create video based on a burst of pictures.\n        It is widely used in landscape photography, architecture and cityscape photography.\n        However, this technique is rarely used to shoot human subjects. The humanlapse project is about filling this gap by making timelapses of humans.\n        ",content:[{data:"https://vimeo.com/292003342/",credits:"Some credits for the video"}]},Low:{name:"Low",description:"Zoom in on a human subject, zoom out on a wide cityscape.",content:[{data:h.a,credits:"Some credits - taken in some city - model: name"}]},ZoomInZoomOut:{name:"Zoom in Zoom out",description:"Zoom in on a human subject, zoom out on a wide cityscape.",content:[{data:h.a,credits:"Some credits - taken in some city - model: name"},{data:h.a,credits:"Some credits - taken in some city - model: name"},{data:h.a,credits:"Some credits - taken in some city - model: name"}]},MovingPortraits:{name:"Moving portraits",description:"Moving portraits are the simplest form of humanlapse. They're also the most interesting in terms of facial expressions",content:[{data:h.a,credits:"Some credits - taken in some city - model: name"},{data:h.a,credits:"Some credits - taken in some city - model: name"},{data:h.a,credits:"Some credits - taken in some city - model: name"}]}},f=function(e){function t(){return Object(c.a)(this,t),Object(r.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"Home"},i.a.createElement("div",{className:"mainGrid"},i.a.createElement("div",{className:"message"},i.a.createElement("div",null,i.a.createElement("div",{className:"text big"},y.title),i.a.createElement("div",{className:"text small"},y.subtitle)),i.a.createElement(d.a,{to:"/humanlapse/index",className:"button"},"GET IN"))))}}]),t}(n.Component),g=a(28),b=a.n(g),E=(a(53),a(64)),k=function(e){function t(e){return Object(c.a)(this,t),Object(r.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{onClick:function(){return e.props.history.push(e.props.to)},key:this.props.name.id,className:this.props.className,style:this.props.style},this.props.name)}}]),t}(n.Component),j=Object(E.a)(k),N=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).state={gallery:void 0,galleryIndex:0},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this.props.match.params.key;v[e],this.setState(function(){return{gallery:v[e]}})}},{key:"previousContent",value:function(){this.setState(function(e){return{galleryIndex:Math.max(e.galleryIndex-1,0)}})}},{key:"nextContent",value:function(){this.setState(function(e){return{galleryIndex:Math.min(e.galleryIndex+1,e.gallery.content.length-1)}})}},{key:"navigationButtons",value:function(){var e=this;return 1<this.state.gallery.content.length?i.a.createElement("div",{className:"navigationButtons"},i.a.createElement("div",{className:"previousButton",onClick:function(){e.previousContent()}}),i.a.createElement("div",{className:"middleText"}," ",this.state.galleryIndex+1," / ",this.state.gallery.content.length),i.a.createElement("div",{className:"nextButton",onClick:function(){e.nextContent()}})):i.a.createElement(i.a.Fragment,null)}},{key:"render",value:function(){var e=this.state.gallery.content[this.state.galleryIndex],t=this.state.gallery.name,a=this.state.gallery.description,n=e.data;e.credits;return i.a.createElement("div",{className:"Humanlapse"},i.a.createElement("div",{className:"pageLayout"},i.a.createElement("div",{className:"pageLayoutDescription"},i.a.createElement("div",{className:"description"},i.a.createElement("p",null,a),this.navigationButtons())),i.a.createElement("div",{className:"pageLayoutHeader header"},i.a.createElement(j,{to:"/humanlapse/index",name:"",className:"exitButton"}),i.a.createElement("h1",null,t)),i.a.createElement("div",{className:"pageLayoutVisuals",id:"pageLayoutVisuals"},i.a.createElement("div",{className:"pageLayoutManualLayoutVideoPlayer"},i.a.createElement(b.a,{className:"Globals-noselect",url:n,loop:!0,width:"100%",height:"100%",playing:!0})))))}}]),t}(n.Component),O=(a(56),a(15)),x=(a(58),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).onMenuClick=a.onMenuClick.bind(Object(O.a)(Object(O.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"onMenuClick",value:function(e){"function"===typeof this.props.onMenuClick&&this.props.onMenuClick(e)}},{key:"menuItems",value:function(){for(var e=this,t=[],a=function(a){var n=e.props.collections[a];t.push(i.a.createElement("div",{className:"item",key:n,onClick:function(){return e.onMenuClick(n)}},i.a.createElement("div",null,n)))},n=0;n<this.props.collections.length;n++)a(n);return i.a.createElement("div",{className:"menuGrid"},t)}},{key:"render",value:function(){return i.a.createElement("div",{className:"Menu"},i.a.createElement("div",{className:"gridWrapper"},i.a.createElement("div",{className:"gridMiddleCentered"},this.menuItems())))}}]),t}(n.Component));x.defaultProps={collections:["configure","your","menu","items"]};var C=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).state={gallery:v},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"getKeyForName",value:function(e){for(var t=Object.keys(this.state.gallery),a=0;a<t.length;a++)if(this.state.gallery[t[a]].name===e)return t[a]}},{key:"buttonClickedForName",value:function(e){this.props.history.push("/humanlapse/gallery/"+this.getKeyForName(e))}},{key:"render",value:function(){var e=this,t=Object.keys(this.state.gallery).map(function(t){return e.state.gallery[t].name});return i.a.createElement("div",{className:"MenuPage"},i.a.createElement("div",{className:"message"},i.a.createElement("div",{className:"text big"},y.title),i.a.createElement("div",{className:"text small"},y.subtitle)),i.a.createElement(x,{collections:t,onMenuClick:function(t){e.buttonClickedForName(t)}}))}}]),t}(n.Component),w=a(63),M=a(62),I=function(e){function t(e){return Object(c.a)(this,t),Object(r.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(w.a,null,i.a.createElement("div",null,i.a.createElement(M.a,{exact:!0,path:"/humanlapse/",component:f}),i.a.createElement(M.a,{path:"/humanlapse/gallery/:key",component:N}),i.a.createElement(M.a,{path:"/humanlapse/index",component:C}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(I,null),document.getElementById("root"))}},[[31,2,1]]]);
//# sourceMappingURL=main.dc0986e6.chunk.js.map