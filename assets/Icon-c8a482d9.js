import{ae as g,ar as l,ag as d,ai as h,d as v,ah as b,bc as y,q as c,am as C,i as _,E as m,L as $}from"./index-41e4f233.js";import{l as z}from"./FormItem-af2fd84c.js";const R=g("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[l("color-transition",{transition:"color .3s var(--n-bezier)"}),l("depth",{color:"var(--n-color)"},[d("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),d("svg",{height:"1em",width:"1em"})]),S=Object.assign(Object.assign({},h.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),w=v({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:S,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=b(e),s=h("Icon","-icon",R,y,e,o),r=c(()=>{const{depth:i}=e,{common:{cubicBezierEaseInOut:a},self:u}=s.value;if(i!==void 0){const{color:p,[`opacity${i}Depth`]:f}=u;return{"--n-bezier":a,"--n-color":p,"--n-opacity":f}}return{"--n-bezier":a,"--n-color":"","--n-opacity":""}}),n=t?C("icon",c(()=>`${e.depth||"d"}`),r,e):void 0;return{mergedClsPrefix:o,mergedStyle:c(()=>{const{size:i,color:a}=e;return{fontSize:z(i),color:a}}),cssVars:t?void 0:r,themeClass:n?.themeClass,onRender:n?.onRender}},render(){var e;const{$parent:o,depth:t,mergedClsPrefix:s,component:r,onRender:n,themeClass:i}=this;return!((e=o?.$options)===null||e===void 0)&&e._n_icon__&&_("icon","don't wrap `n-icon` inside `n-icon`"),n?.(),m("i",$(this.$attrs,{role:"img",class:[`${s}-icon`,i,{[`${s}-icon--depth`]:t,[`${s}-icon--color-transition`]:t!==void 0}],style:[this.cssVars,this.mergedStyle]}),r?m(r):this.$slots)}});export{w as N};
