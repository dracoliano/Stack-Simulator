(this["webpackJsonpstack-simulator"]=this["webpackJsonpstack-simulator"]||[]).push([[0],{56:function(e,t,a){e.exports=a(67)},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),l=a.n(c),i=a(42),o=a(37),u=a(38),s=a(39),h=a(44),m=a(40),g=a(18),d=a(43),p=a(106),f=a(111),k=a(104),E=a(109),b=a(108),v=a(112),S=a(69),C=a(110);var y=function(e){return e.stacked?r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,Object.assign({onChange:e.onChange,type:"number",placeholder:"length",id:"outlined-secondary",label:"STACK LENGTH",variant:"outlined",color:"primary",margin:"normal",name:"length"},e))):""},j=function(e){return e.stacked?r.a.createElement(k.a,{style:{backgroundColor:"#536dfe"},onClick:e.onClick,variant:"contained"},"Set Length"):""},O=a(105),x=a(68),q=a(41),w=a.n(q),L=Object(O.a)((function(e){return{root:{flexGrow:1,marginTop:140},paper:{height:120,width:90,backgroundColor:"#536dfe",margin:"0 auto"},control:{padding:e.spacing(2)},typo:{lineHeight:3.5,color:"#fff"},key1:{textAlign:"left",backgroundColor:"#ffeb3b",fontStyle:"italic",borderBottomRightRadius:100,maxWidth:22},key2:{textAlign:"center",fontStyle:"italic",backgroundColor:"#ffeb3b",maxWidth:"auto"},arrow:{fontSize:40,marginTop:40}}}));function N(e){var t=L();return r.a.createElement(p.a,{container:!0,className:t.root,spacing:2},r.a.createElement(p.a,{item:!0,xs:12},r.a.createElement(p.a,{container:!0,spacing:2},e.arr.map((function(a,n){return r.a.createElement(r.a.Fragment,{key:n},r.a.createElement(p.a,{item:!0,xs:e.itemSize},r.a.createElement(x.a,{className:t.paper},r.a.createElement(S.a,{className:n<100?t.key1:t.key2},n),r.a.createElement(S.a,{className:t.typo,align:"center",variant:"h6",component:"h3"},a))),e.split?r.a.createElement(w.a,{className:t.arrow}):"")})))))}var z=a(113),T=a(107),F=function(e){return r.a.createElement(T.a,{control:r.a.createElement(z.a,{color:"primary",checked:e.checked,onChange:e.onChange}),label:"Change Stack Type"})},A=(a(66),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={data:[],length:0,value:"",sequenceStack:!0},a.setLength=function(){for(var e=a.state.length,t=[],n=0;n<e;n++)t.push(null);a.setState({data:t})},a.setStack=function(){var e=a.state,t=e.data,n=e.sequenceStack;t.forEach((function(e){return t.pop()})),a.setState({data:[],sequenceStack:!n})},a.handleChange=a.handleChange.bind(Object(g.a)(a)),a.pop=a.pop.bind(Object(g.a)(a)),a.push=a.push.bind(Object(g.a)(a)),a.setLength=a.setLength.bind(Object(g.a)(a)),a.setStack=a.setStack.bind(Object(g.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"push",value:function(){var e=this.state,t=e.data,a=e.value,n=e.sequenceStack,r=e.length,c=t.filter((function(e){return null!==e})).length;if(n&&c>=r&&alert("Full stack"),n){if(!a)return!1;for(var l=0;l<t.length;l++)if(null===t[l]&&a.replace(/ /g,"").match(/^\b/g)){t[l]=a;break}}else a.replace(/ /g,"").match(/^\b/g)&&t.push(a);this.setState({data:t,value:""})}},{key:"pop",value:function(){var e=this.state.data;e.pop(),this.setState({data:e})}},{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;if("value"===a&&n.length>5)return"";this.setState(Object(o.a)({},a,n))}},{key:"render",value:function(){var e=Object(i.a)(this.state.data).reverse(),t=this.state,a=t.sequenceStack,n=t.value,c=t.length;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{style:{backgroundColor:"#ff1744"}},r.a.createElement(v.a,null,r.a.createElement(E.a,{color:"success "},r.a.createElement(v.a,null,r.a.createElement(v.a,null,function(){var t=e.filter((function(e){return null!==e})).length;return a?"Size Stack: ".concat(t," of ").concat(e.length):"Size Stack: ".concat(e.length)}()),r.a.createElement(v.a,null,r.a.createElement(F,{checked:a,onChange:this.setStack}))),r.a.createElement(v.a,{p:2},r.a.createElement(f.a,{id:"outlined-secondary",label:"Value",variant:"outlined",color:"primary",margin:"normal",placeholder:"value",name:"value",value:n,type:"text",onChange:this.handleChange})),r.a.createElement(v.a,{p:2},r.a.createElement(y,{value:c,stacked:this.state.sequenceStack,onChange:this.handleChange})),r.a.createElement(v.a,{p:1},r.a.createElement(k.a,{variant:"contained",disabled:!(a&&e.length>=1)&&!!a,onClick:this.push},"PUSH")),r.a.createElement(v.a,{p:1},r.a.createElement(k.a,{variant:"contained",disabled:function(){var t=e.filter((function(e){return null!==e})).length;return!(a&&t>=1)&&!(!a&&e.length>=1)}(),onClick:this.pop},"POP")),r.a.createElement(v.a,{p:1},r.a.createElement(j,{stacked:this.state.sequenceStack,onClick:this.setLength})),r.a.createElement(v.a,null,r.a.createElement(S.a,{variant:"h5",align:"right"},this.state.sequenceStack?"Sequence Stack":"Chained Stack"))))),r.a.createElement(C.a,{fixed:!0},r.a.createElement(p.a,{container:!0,justify:"center"},r.a.createElement(p.a,{item:!0,xs:6},r.a.createElement(N,{itemSize:12,arr:e.filter((function(e){return null!==e}))})),r.a.createElement(p.a,{item:!0,xs:6},r.a.createElement(N,{arr:e,split:this.state.sequenceStack?"":">"})))))}}]),t}(n.Component));var H=function(){return r.a.createElement(A,null)};l.a.render(r.a.createElement(H,null),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.10a684ba.chunk.js.map