import{ag as d,ae as C,b0 as ve,ar as g,af as i,b1 as pe,b2 as he,d as P,ah as xe,ai as V,aG as ye,q as N,am as Ce,E as u,b3 as ze,al as S,aL as _e,o as x,a as _,h as f,b4 as we,aR as Se,aS as T,aX as $e,b as a,w as l,u as o,e as I,a$ as $,F as R,aU as E,c as L,aQ as j}from"./index-dfe61df8.js";import{h,q as ke,k as Be,w as k,A as F,z,x as O}from"./FormItem-591fd066.js";import{a as Pe,N as Ne}from"./InputNumber-7ae896cf.js";import{N as H}from"./Icon-f831111f.js";const Te=d([C("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[ve({background:"var(--n-color-modal)"}),g("hoverable",[d("&:hover","box-shadow: var(--n-box-shadow);")]),g("content-segmented",[d(">",[i("content",{paddingTop:"var(--n-padding-bottom)"})])]),g("content-soft-segmented",[d(">",[i("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),g("footer-segmented",[d(">",[i("footer",{paddingTop:"var(--n-padding-bottom)"})])]),g("footer-soft-segmented",[d(">",[i("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),d(">",[C("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[i("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),i("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),i("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),i("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),i("content","flex: 1; min-width: 0;"),i("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[d("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),i("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),C("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[d("img",`
 display: block;
 width: 100%;
 `)]),g("bordered",`
 border: 1px solid var(--n-border-color);
 `,[d("&:target","border-color: var(--n-color-target);")]),g("action-segmented",[d(">",[i("action",[d("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),g("content-segmented, content-soft-segmented",[d(">",[i("content",{transition:"border-color 0.3s var(--n-bezier)"},[d("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),g("footer-segmented, footer-soft-segmented",[d(">",[i("footer",{transition:"border-color 0.3s var(--n-bezier)"},[d("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),g("embedded",`
 background-color: var(--n-color-embedded);
 `)]),pe(C("card",`
 background: var(--n-color-modal);
 `,[g("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),he(C("card",`
 background: var(--n-color-popover);
 `,[g("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),Ie={title:String,contentStyle:[Object,String],headerStyle:[Object,String],headerExtraStyle:[Object,String],footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"}},Re=Object.assign(Object.assign({},V.props),Ie),B=P({name:"Card",props:Re,setup(n){const m=()=>{const{onClose:e}=n;e&&ke(e)},{inlineThemeDisabled:c,mergedClsPrefixRef:t,mergedRtlRef:y}=xe(n),b=V("Card","-card",Te,ze,n,t),v=ye("Card",y,t),p=N(()=>{const{size:e}=n,{self:{color:r,colorModal:w,colorTarget:A,textColor:K,titleTextColor:D,titleFontWeight:U,borderColor:q,actionColor:W,borderRadius:G,lineHeight:Q,closeIconColor:X,closeIconColorHover:J,closeIconColorPressed:Y,closeColorHover:Z,closeColorPressed:ee,closeBorderRadius:oe,closeIconSize:te,closeSize:re,boxShadow:ne,colorPopover:ae,colorEmbedded:de,colorEmbeddedModal:le,colorEmbeddedPopover:se,[S("padding",e)]:ie,[S("fontSize",e)]:ce,[S("titleFontSize",e)]:be},common:{cubicBezierEaseInOut:ge}}=b.value,{top:ue,left:fe,bottom:me}=Be(ie);return{"--n-bezier":ge,"--n-border-radius":G,"--n-color":r,"--n-color-modal":w,"--n-color-popover":ae,"--n-color-embedded":de,"--n-color-embedded-modal":le,"--n-color-embedded-popover":se,"--n-color-target":A,"--n-text-color":K,"--n-line-height":Q,"--n-action-color":W,"--n-title-text-color":D,"--n-title-font-weight":U,"--n-close-icon-color":X,"--n-close-icon-color-hover":J,"--n-close-icon-color-pressed":Y,"--n-close-color-hover":Z,"--n-close-color-pressed":ee,"--n-border-color":q,"--n-box-shadow":ne,"--n-padding-top":ue,"--n-padding-bottom":me,"--n-padding-left":fe,"--n-font-size":ce,"--n-title-font-size":be,"--n-close-size":re,"--n-close-icon-size":te,"--n-close-border-radius":oe}}),s=c?Ce("card",N(()=>n.size[0]),p,n):void 0;return{rtlEnabled:v,mergedClsPrefix:t,mergedTheme:b,handleCloseClick:m,cssVars:c?void 0:p,themeClass:s?.themeClass,onRender:s?.onRender}},render(){const{segmented:n,bordered:m,hoverable:c,mergedClsPrefix:t,rtlEnabled:y,onRender:b,embedded:v,tag:p,$slots:s}=this;return b?.(),u(p,{class:[`${t}-card`,this.themeClass,v&&`${t}-card--embedded`,{[`${t}-card--rtl`]:y,[`${t}-card--content${typeof n!="boolean"&&n.content==="soft"?"-soft":""}-segmented`]:n===!0||n!==!1&&n.content,[`${t}-card--footer${typeof n!="boolean"&&n.footer==="soft"?"-soft":""}-segmented`]:n===!0||n!==!1&&n.footer,[`${t}-card--action-segmented`]:n===!0||n!==!1&&n.action,[`${t}-card--bordered`]:m,[`${t}-card--hoverable`]:c}],style:this.cssVars,role:this.role},h(s.cover,e=>e&&u("div",{class:`${t}-card-cover`,role:"none"},e)),h(s.header,e=>e||this.title||this.closable?u("div",{class:`${t}-card-header`,style:this.headerStyle},u("div",{class:`${t}-card-header__main`,role:"heading"},e||this.title),h(s["header-extra"],r=>r&&u("div",{class:`${t}-card-header__extra`,style:this.headerExtraStyle},r)),this.closable?u(_e,{clsPrefix:t,class:`${t}-card-header__close`,onClick:this.handleCloseClick,absolute:!0}):null):null),h(s.default,e=>e&&u("div",{class:`${t}-card__content`,style:this.contentStyle,role:"none"},e)),h(s.footer,e=>e&&[u("div",{class:`${t}-card__footer`,style:this.footerStyle,role:"none"},e)]),h(s.action,e=>e&&u("div",{class:`${t}-card__action`,role:"none"},e)))}}),Ee={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 320 512"},Le=f("path",{d:"M313.553 392.331L209.587 504.334c-9.485 10.214-25.676 10.229-35.174 0L70.438 392.331C56.232 377.031 67.062 352 88.025 352H152V80H68.024a11.996 11.996 0 0 1-8.485-3.515l-56-56C-4.021 12.926 1.333 0 12.024 0H208c13.255 0 24 10.745 24 24v328h63.966c20.878 0 31.851 24.969 17.587 40.331z",fill:"currentColor"},null,-1),je=[Le],M=P({name:"LevelDownAlt",render:function(m,c){return x(),_("svg",Ee,je)}}),Fe={class:"grid grid-cols-12 gap-6"},Oe={class:"col-span-12 flex justify-end"},He={class:"col-span-12 md:col-span-6"},Me={class:"flex gap-2"},Ve={class:"col-span-12 md:col-span-6"},Ae={class:"flex gap-2"},Ke={class:"pe-1"},Ge=P({__name:"Index",setup(n){const m=we(),c=Se(),{form:t,payments:y}=T(c),b=$e(),{form:v,categories:p}=T(b);return Promise.all([c.getPayments(),b.getCategories()]),(s,e)=>(x(),_("div",Fe,[f("div",Oe,[a(o(k),{class:"ms-auto",ghost:"",type:"error",onClick:e[0]||(e[0]=r=>o(m).logout())},{default:l(()=>[I(" Logout ")]),_:1})]),f("section",He,[a(o(B),null,{default:l(()=>[a(o(F),{inline:""},{default:l(()=>[a(o(z),{label:"Name"},{default:l(()=>[a(o(O),{value:o(t).name,"onUpdate:value":e[1]||(e[1]=r=>o(t).name=r),onKeydown:e[2]||(e[2]=$(r=>o(c).createPayment(),["enter"]))},null,8,["value"])]),_:1}),a(o(z),{label:"Balance"},{default:l(()=>[a(o(Pe),{value:o(t).balance,"onUpdate:value":e[3]||(e[3]=r=>o(t).balance=r),showButton:!1,precision:2,onKeydown:e[4]||(e[4]=$(r=>o(c).createPayment(),["enter"]))},null,8,["value"])]),_:1}),a(o(z),null,{default:l(()=>[a(o(k),{round:"",onClick:e[5]||(e[5]=r=>o(c).createPayment())},{default:l(()=>[a(o(H),null,{default:l(()=>[a(o(M))]),_:1})]),_:1})]),_:1})]),_:1}),f("div",Me,[(x(!0),_(R,null,E(o(y),r=>(x(),L(o(B),{key:r.paymentId,class:"w-fit bg-424242",title:r.name||"-",closable:"",onClose:w=>o(c).deletePayment(r.paymentId)},{default:l(()=>[I(j(r.balance),1)]),_:2},1032,["title","onClose"]))),128))])]),_:1})]),f("section",Ve,[a(o(B),null,{default:l(()=>[a(o(F),{inline:""},{default:l(()=>[a(o(z),{label:"Name"},{default:l(()=>[a(o(O),{value:o(v).name,"onUpdate:value":e[6]||(e[6]=r=>o(v).name=r),onKeydown:e[7]||(e[7]=$(r=>o(b).createCategory(),["enter"]))},null,8,["value"])]),_:1}),a(o(z),null,{default:l(()=>[a(o(k),{round:"",onClick:e[8]||(e[8]=r=>o(b).createCategory())},{default:l(()=>[a(o(H),null,{default:l(()=>[a(o(M))]),_:1})]),_:1})]),_:1})]),_:1}),f("div",Ae,[(x(!0),_(R,null,E(o(p),r=>(x(),L(o(Ne),{key:r.categoryId,class:"w-fit bg-424242",closable:"",size:"large",round:"",onClose:w=>o(b).deleteCategory(r.categoryId)},{default:l(()=>[f("span",Ke,j(r.name),1)]),_:2},1032,["onClose"]))),128))])]),_:1})])]))}});export{Ge as default};
