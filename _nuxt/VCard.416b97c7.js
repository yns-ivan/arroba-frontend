import{aN as Y,L as g,N as x,aO as tt,a5 as nt,g as Ce,Y as ne,aP as R,c as v,R as M,aC as _e,aQ as ce,aR as at,aS as it,aT as st,z as l,ai as ke,Q as de,aU as rt,ak as we,a1 as h,ab as H,M as q,r as ae,O as K,aV as lt,ac as xe,aW as ot,aX as ut,Z as O,aY as ie,e as Ve,H as X,aq as Ie,a8 as ct,a4 as Te,aZ as dt,a_ as ve,aA as vt,au as Pe,aB as mt,a$ as ft,b0 as me,a6 as Le,at as gt,ad as G,ah as $e,ae as ht}from"./entry.420ae241.js";const Be=["top","bottom"],yt=["start","end","left","right"];function bt(e,n){let[t,a]=e.split(" ");return a||(a=Y(Be,t)?"start":Y(yt,t)?"top":"center"),{side:fe(t,n),align:fe(a,n)}}function fe(e,n){return e==="start"?n?"right":"left":e==="end"?n?"left":"right":e}function on(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function un(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function cn(e){return{side:e.align,align:e.side}}function dn(e){return Y(Be,e.side)?"y":"x"}const I=g({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component");function se(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",t=arguments.length>2?arguments[2]:void 0;return x()({name:t??tt(nt(e.replace(/__/g,"-"))),props:{tag:{type:String,default:n},...I()},setup(a,s){let{slots:i}=s;return()=>{var r;return Ce(a.tag,{class:[e,a.class],style:a.style},(r=i.default)==null?void 0:r.call(i))}}})}function L(e){const n=ne("useRender");n.render=e}const pt=g({border:[Boolean,Number,String]},"border");function St(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:R();return{borderClasses:v(()=>{const a=M(e)?e.value:e.border,s=[];if(a===!0||a==="")s.push(`${n}--border`);else if(typeof a=="string"||a===0)for(const i of String(a).split(" "))s.push(`border-${i}`);return s})}}const Ct=[null,"default","comfortable","compact"],re=g({density:{type:String,default:"default",validator:e=>Ct.includes(e)}},"density");function Ee(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:R();return{densityClasses:v(()=>`${n}--density-${e.density}`)}}const _t=g({elevation:{type:[Number,String],validator(e){const n=parseInt(e);return!isNaN(n)&&n>=0&&n<=24}}},"elevation");function kt(e){return{elevationClasses:v(()=>{const t=M(e)?e.value:e.elevation,a=[];return t==null||a.push(`elevation-${t}`),a})}}const le=g({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function oe(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:R();return{roundedClasses:v(()=>{const a=M(e)?e.value:e.rounded,s=[];if(a===!0||a==="")s.push(`${n}--rounded`);else if(typeof a=="string"||a===0)for(const i of String(a).split(" "))s.push(`rounded-${i}`);return s})}}const Q=g({tag:{type:String,default:"div"}},"tag");function ue(e){return _e(()=>{const n=[],t={};if(e.value.background)if(ce(e.value.background)){if(t.backgroundColor=e.value.background,!e.value.text&&at(e.value.background)){const a=it(e.value.background);if(a.a==null||a.a===1){const s=st(a);t.color=s,t.caretColor=s}}}else n.push(`bg-${e.value.background}`);return e.value.text&&(ce(e.value.text)?(t.color=e.value.text,t.caretColor=e.value.text):n.push(`text-${e.value.text}`)),{colorClasses:n,colorStyles:t}})}function Re(e,n){const t=v(()=>({text:M(e)?e.value:n?e[n]:null})),{colorClasses:a,colorStyles:s}=ue(t);return{textColorClasses:a,textColorStyles:s}}function ge(e,n){const t=v(()=>({background:M(e)?e.value:n?e[n]:null})),{colorClasses:a,colorStyles:s}=ue(t);return{backgroundColorClasses:a,backgroundColorStyles:s}}const wt=["elevated","flat","tonal","outlined","text","plain"];function ze(e,n){return l(ke,null,[e&&l("span",{key:"overlay",class:`${n}__overlay`},null),l("span",{key:"underlay",class:`${n}__underlay`},null)])}const Ae=g({color:String,variant:{type:String,default:"elevated",validator:e=>wt.includes(e)}},"variant");function Ne(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:R();const t=v(()=>{const{variant:i}=de(e);return`${n}--variant-${i}`}),{colorClasses:a,colorStyles:s}=ue(v(()=>{const{variant:i,color:r}=de(e);return{[["elevated","flat"].includes(i)?"background":"text"]:r}}));return{colorClasses:a,colorStyles:s,variantClasses:t}}const xt=g({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),J=x(!1)({name:"VDefaultsProvider",props:xt(),setup(e,n){let{slots:t}=n;const{defaults:a,disabled:s,reset:i,root:r,scoped:o}=rt(e);return we(a,{reset:i,root:r,scoped:o,disabled:s}),()=>{var u;return(u=t.default)==null?void 0:u.call(t)}}});const Vt=["x-small","small","default","large","x-large"],Oe=g({size:{type:[String,Number],default:"default"}},"size");function He(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:R();return _e(()=>{let t,a;return Y(Vt,e.size)?t=`${n}--size-${e.size}`:e.size&&(a={width:h(e.size),height:h(e.size)}),{sizeClasses:t,sizeStyles:a}})}const It=g({color:String,start:Boolean,end:Boolean,icon:H,...I(),...Oe(),...Q({tag:"i"}),...q()},"VIcon"),Tt=x()({name:"VIcon",props:It(),setup(e,n){let{attrs:t,slots:a}=n;const s=ae(),{themeClasses:i}=K(e),{iconData:r}=lt(v(()=>s.value||e.icon)),{sizeClasses:o}=He(e),{textColorClasses:u,textColorStyles:m}=Re(xe(e,"color"));return L(()=>{var f,y;const c=(f=a.default)==null?void 0:f.call(a);return c&&(s.value=(y=ot(c).filter(p=>p.type===ut&&p.children&&typeof p.children=="string")[0])==null?void 0:y.children),l(r.value.component,{tag:e.tag,icon:r.value.icon,class:["v-icon","notranslate",i.value,o.value,u.value,{"v-icon--clickable":!!t.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[o.value?void 0:{fontSize:h(e.size),height:h(e.size),width:h(e.size)},m.value,e.style],role:t.onClick?"button":void 0,"aria-hidden":!t.onClick},{default:()=>[c]})}),{}}});function Pt(e,n){const t=ae(),a=O(!1);if(ie){const s=new IntersectionObserver(i=>{e==null||e(i,s),a.value=!!i.find(r=>r.isIntersecting)},n);Ve(()=>{s.disconnect()}),X(t,(i,r)=>{r&&(s.unobserve(r),a.value=!1),i&&s.observe(i)},{flush:"post"})}return{intersectionRef:t,isIntersecting:a}}const De=g({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function We(e){return{dimensionStyles:v(()=>({height:h(e.height),maxHeight:h(e.maxHeight),maxWidth:h(e.maxWidth),minHeight:h(e.minHeight),minWidth:h(e.minWidth),width:h(e.width)}))}}const he={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},je=g({location:String},"location");function Me(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t=arguments.length>2?arguments[2]:void 0;const{isRtl:a}=Ie();return{locationStyles:v(()=>{if(!e.location)return{};const{side:i,align:r}=bt(e.location.split(" ").length>1?e.location:`${e.location} center`,a.value);function o(m){return t?t(m):0}const u={};return i!=="center"&&(n?u[he[i]]=`calc(100% - ${o(i)}px)`:u[i]=0),r!=="center"?n?u[he[r]]=`calc(100% - ${o(r)}px)`:u[r]=0:(i==="center"?u.top=u.left="50%":u[{top:"left",bottom:"left",left:"top",right:"top"}[i]]="50%",u.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[i]),u})}}const Lt=g({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...I(),...je({location:"top"}),...le(),...Q(),...q()},"VProgressLinear"),$t=x()({name:"VProgressLinear",props:Lt(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const a=ct(e,"modelValue"),{isRtl:s,rtlClasses:i}=Ie(),{themeClasses:r}=K(e),{locationStyles:o}=Me(e),{textColorClasses:u,textColorStyles:m}=Re(e,"color"),{backgroundColorClasses:c,backgroundColorStyles:f}=ge(v(()=>e.bgColor||e.color)),{backgroundColorClasses:y,backgroundColorStyles:p}=ge(e,"color"),{roundedClasses:z}=oe(e),{intersectionRef:T,isIntersecting:w}=Pt(),k=v(()=>parseInt(e.max,10)),S=v(()=>parseInt(e.height,10)),$=v(()=>parseFloat(e.bufferValue)/k.value*100),B=v(()=>parseFloat(a.value)/k.value*100),P=v(()=>s.value!==e.reverse),D=v(()=>e.indeterminate?"fade-transition":"slide-x-transition"),A=v(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function N(d){if(!T.value)return;const{left:b,right:_,width:V}=T.value.getBoundingClientRect(),E=P.value?V-d.clientX+(_-V):d.clientX-b;a.value=Math.round(E/V*k.value)}return L(()=>l(e.tag,{ref:T,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&w.value,"v-progress-linear--reverse":P.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},z.value,r.value,i.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?h(S.value):0,"--v-progress-linear-height":h(S.value),...o.value},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:B.value,onClick:e.clickable&&N},{default:()=>[e.stream&&l("div",{key:"stream",class:["v-progress-linear__stream",u.value],style:{...m.value,[P.value?"left":"right"]:h(-S.value),borderTop:`${h(S.value/2)} dotted`,opacity:A.value,top:`calc(50% - ${h(S.value/4)})`,width:h(100-$.value,"%"),"--v-progress-linear-stream-to":h(S.value*(P.value?1:-1))}},null),l("div",{class:["v-progress-linear__background",c.value],style:[f.value,{opacity:A.value,width:h(e.stream?$.value:100,"%")}]},null),l(Te,{name:D.value},{default:()=>[e.indeterminate?l("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(d=>l("div",{key:d,class:["v-progress-linear__indeterminate",d,y.value],style:p.value},null))]):l("div",{class:["v-progress-linear__determinate",y.value],style:[p.value,{width:h(B.value,"%")}]},null)]}),t.default&&l("div",{class:"v-progress-linear__content"},[t.default({value:B.value,buffer:$.value})])]})),{}}}),Bt=g({loading:[Boolean,String]},"loader");function Et(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:R();return{loaderClasses:v(()=>({[`${n}--loading`]:e.loading}))}}function Rt(e,n){var a;let{slots:t}=n;return l("div",{class:`${e.name}__loader`},[((a=t.default)==null?void 0:a.call(t,{color:e.color,isActive:e.active}))||l($t,{active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const zt=["static","relative","fixed","absolute","sticky"],At=g({position:{type:String,validator:e=>zt.includes(e)}},"position");function Nt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:R();return{positionClasses:v(()=>e.position?`${n}--${e.position}`:void 0)}}function vn(){var e,n;return(n=(e=ne("useRouter"))==null?void 0:e.proxy)==null?void 0:n.$router}function Ot(e,n){const t=dt("RouterLink"),a=v(()=>!!(e.href||e.to)),s=v(()=>(a==null?void 0:a.value)||ve(n,"click")||ve(e,"click"));if(typeof t=="string")return{isLink:a,isClickable:s,href:xe(e,"href")};const i=e.to?t.useLink(e):void 0;return{isLink:a,isClickable:s,route:i==null?void 0:i.route,navigate:i==null?void 0:i.navigate,isActive:i&&v(()=>{var r,o;return e.exact?(r=i.isExactActive)==null?void 0:r.value:(o=i.isActive)==null?void 0:o.value}),href:v(()=>e.to?i==null?void 0:i.route.value.href:e.href)}}const Ht=g({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let Z=!1;function mn(e,n){let t=!1,a,s;vt&&(Pe(()=>{window.addEventListener("popstate",i),a=e==null?void 0:e.beforeEach((r,o,u)=>{Z?t?n(u):u():setTimeout(()=>t?n(u):u()),Z=!0}),s=e==null?void 0:e.afterEach(()=>{Z=!1})}),mt(()=>{window.removeEventListener("popstate",i),a==null||a(),s==null||s()}));function i(r){var o;(o=r.state)!=null&&o.replaced||(t=!0,setTimeout(()=>t=!1))}}const ee=Symbol("rippleStop"),Dt=80;function ye(e,n){e.style.transform=n,e.style.webkitTransform=n}function te(e){return e.constructor.name==="TouchEvent"}function Fe(e){return e.constructor.name==="KeyboardEvent"}const Wt=function(e,n){var f;let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=0,s=0;if(!Fe(e)){const y=n.getBoundingClientRect(),p=te(e)?e.touches[e.touches.length-1]:e;a=p.clientX-y.left,s=p.clientY-y.top}let i=0,r=.3;(f=n._ripple)!=null&&f.circle?(r=.15,i=n.clientWidth/2,i=t.center?i:i+Math.sqrt((a-i)**2+(s-i)**2)/4):i=Math.sqrt(n.clientWidth**2+n.clientHeight**2)/2;const o=`${(n.clientWidth-i*2)/2}px`,u=`${(n.clientHeight-i*2)/2}px`,m=t.center?o:`${a-i}px`,c=t.center?u:`${s-i}px`;return{radius:i,scale:r,x:m,y:c,centerX:o,centerY:u}},U={show(e,n){var p;let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((p=n==null?void 0:n._ripple)!=null&&p.enabled))return;const a=document.createElement("span"),s=document.createElement("span");a.appendChild(s),a.className="v-ripple__container",t.class&&(a.className+=` ${t.class}`);const{radius:i,scale:r,x:o,y:u,centerX:m,centerY:c}=Wt(e,n,t),f=`${i*2}px`;s.className="v-ripple__animation",s.style.width=f,s.style.height=f,n.appendChild(a);const y=window.getComputedStyle(n);y&&y.position==="static"&&(n.style.position="relative",n.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),ye(s,`translate(${o}, ${u}) scale3d(${r},${r},${r})`),s.dataset.activated=String(performance.now()),setTimeout(()=>{s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),ye(s,`translate(${m}, ${c}) scale3d(1,1,1)`)},0)},hide(e){var i;if(!((i=e==null?void 0:e._ripple)!=null&&i.enabled))return;const n=e.getElementsByClassName("v-ripple__animation");if(n.length===0)return;const t=n[n.length-1];if(t.dataset.isHiding)return;t.dataset.isHiding="true";const a=performance.now()-Number(t.dataset.activated),s=Math.max(250-a,0);setTimeout(()=>{t.classList.remove("v-ripple__animation--in"),t.classList.add("v-ripple__animation--out"),setTimeout(()=>{var o;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((o=t.parentNode)==null?void 0:o.parentNode)===e&&e.removeChild(t.parentNode)},300)},s)}};function Xe(e){return typeof e>"u"||!!e}function W(e){const n={},t=e.currentTarget;if(!(!(t!=null&&t._ripple)||t._ripple.touched||e[ee])){if(e[ee]=!0,te(e))t._ripple.touched=!0,t._ripple.isTouch=!0;else if(t._ripple.isTouch)return;if(n.center=t._ripple.centered||Fe(e),t._ripple.class&&(n.class=t._ripple.class),te(e)){if(t._ripple.showTimerCommit)return;t._ripple.showTimerCommit=()=>{U.show(e,t,n)},t._ripple.showTimer=window.setTimeout(()=>{var a;(a=t==null?void 0:t._ripple)!=null&&a.showTimerCommit&&(t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null)},Dt)}else U.show(e,t,n)}}function be(e){e[ee]=!0}function C(e){const n=e.currentTarget;if(n!=null&&n._ripple){if(window.clearTimeout(n._ripple.showTimer),e.type==="touchend"&&n._ripple.showTimerCommit){n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null,n._ripple.showTimer=window.setTimeout(()=>{C(e)});return}window.setTimeout(()=>{n._ripple&&(n._ripple.touched=!1)}),U.hide(n)}}function Ye(e){const n=e.currentTarget;n!=null&&n._ripple&&(n._ripple.showTimerCommit&&(n._ripple.showTimerCommit=null),window.clearTimeout(n._ripple.showTimer))}let j=!1;function Ue(e){!j&&(e.keyCode===me.enter||e.keyCode===me.space)&&(j=!0,W(e))}function qe(e){j=!1,C(e)}function Ke(e){j&&(j=!1,C(e))}function Qe(e,n,t){const{value:a,modifiers:s}=n,i=Xe(a);if(i||U.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=i,e._ripple.centered=s.center,e._ripple.circle=s.circle,ft(a)&&a.class&&(e._ripple.class=a.class),i&&!t){if(s.stop){e.addEventListener("touchstart",be,{passive:!0}),e.addEventListener("mousedown",be);return}e.addEventListener("touchstart",W,{passive:!0}),e.addEventListener("touchend",C,{passive:!0}),e.addEventListener("touchmove",Ye,{passive:!0}),e.addEventListener("touchcancel",C),e.addEventListener("mousedown",W),e.addEventListener("mouseup",C),e.addEventListener("mouseleave",C),e.addEventListener("keydown",Ue),e.addEventListener("keyup",qe),e.addEventListener("blur",Ke),e.addEventListener("dragstart",C,{passive:!0})}else!i&&t&&Ze(e)}function Ze(e){e.removeEventListener("mousedown",W),e.removeEventListener("touchstart",W),e.removeEventListener("touchend",C),e.removeEventListener("touchmove",Ye),e.removeEventListener("touchcancel",C),e.removeEventListener("mouseup",C),e.removeEventListener("mouseleave",C),e.removeEventListener("keydown",Ue),e.removeEventListener("keyup",qe),e.removeEventListener("dragstart",C),e.removeEventListener("blur",Ke)}function jt(e,n){Qe(e,n,!1)}function Mt(e){delete e._ripple,Ze(e)}function Ft(e,n){if(n.value===n.oldValue)return;const t=Xe(n.oldValue);Qe(e,n,t)}const Xt={mounted:jt,unmounted:Mt,updated:Ft};const Yt=x()({name:"VCardActions",props:I(),setup(e,n){let{slots:t}=n;return we({VBtn:{slim:!0,variant:"text"}}),L(()=>{var a;return l("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),Ut=se("v-card-subtitle"),qt=se("v-card-title");function Kt(e){return{aspectStyles:v(()=>{const n=Number(e.aspectRatio);return n?{paddingBottom:String(1/n*100)+"%"}:void 0})}}const Ge=g({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...I(),...De()},"VResponsive"),pe=x()({name:"VResponsive",props:Ge(),setup(e,n){let{slots:t}=n;const{aspectStyles:a}=Kt(e),{dimensionStyles:s}=We(e);return L(()=>{var i;return l("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[s.value,e.style]},[l("div",{class:"v-responsive__sizer",style:a.value},null),(i=t.additional)==null?void 0:i.call(t),t.default&&l("div",{class:["v-responsive__content",e.contentClass]},[t.default()])])}),{}}}),Qt=g({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),F=(e,n)=>{let{slots:t}=n;const{transition:a,disabled:s,...i}=e,{component:r=Te,...o}=typeof a=="object"?a:{};return Ce(r,Le(typeof a=="string"?{name:s?"":a}:o,i,{disabled:s}),t)};function Zt(e,n){if(!ie)return;const t=n.modifiers||{},a=n.value,{handler:s,options:i}=typeof a=="object"?a:{handler:a,options:{}},r=new IntersectionObserver(function(){var f;let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],u=arguments.length>1?arguments[1]:void 0;const m=(f=e._observe)==null?void 0:f[n.instance.$.uid];if(!m)return;const c=o.some(y=>y.isIntersecting);s&&(!t.quiet||m.init)&&(!t.once||c||m.init)&&s(c,o,u),c&&t.once?Je(e,n):m.init=!0},i);e._observe=Object(e._observe),e._observe[n.instance.$.uid]={init:!1,observer:r},r.observe(e)}function Je(e,n){var a;const t=(a=e._observe)==null?void 0:a[n.instance.$.uid];t&&(t.observer.unobserve(e),delete e._observe[n.instance.$.uid])}const Gt={mounted:Zt,unmounted:Je},Jt=Gt,en=g({alt:String,cover:Boolean,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...Ge(),...I(),...Qt()},"VImg"),et=x()({name:"VImg",directives:{intersect:Jt},props:en(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,n){let{emit:t,slots:a}=n;const s=ne("VImg"),i=O(""),r=ae(),o=O(e.eager?"loading":"idle"),u=O(),m=O(),c=v(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),f=v(()=>c.value.aspect||u.value/m.value||0);X(()=>e.src,()=>{y(o.value!=="idle")}),X(f,(d,b)=>{!d&&b&&r.value&&k(r.value)}),gt(()=>y());function y(d){if(!(e.eager&&d)&&!(ie&&!d&&!e.eager)){if(o.value="loading",c.value.lazySrc){const b=new Image;b.src=c.value.lazySrc,k(b,null)}c.value.src&&Pe(()=>{var b;t("loadstart",((b=r.value)==null?void 0:b.currentSrc)||c.value.src),setTimeout(()=>{var _;if(!s.isUnmounted)if((_=r.value)!=null&&_.complete){if(r.value.naturalWidth||z(),o.value==="error")return;f.value||k(r.value,null),o.value==="loading"&&p()}else f.value||k(r.value),T()})})}}function p(){var d;s.isUnmounted||(T(),k(r.value),o.value="loaded",t("load",((d=r.value)==null?void 0:d.currentSrc)||c.value.src))}function z(){var d;s.isUnmounted||(o.value="error",t("error",((d=r.value)==null?void 0:d.currentSrc)||c.value.src))}function T(){const d=r.value;d&&(i.value=d.currentSrc||d.src)}let w=-1;Ve(()=>{clearTimeout(w)});function k(d){let b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const _=()=>{if(clearTimeout(w),s.isUnmounted)return;const{naturalHeight:V,naturalWidth:E}=d;V||E?(u.value=E,m.value=V):!d.complete&&o.value==="loading"&&b!=null?w=window.setTimeout(_,b):(d.currentSrc.endsWith(".svg")||d.currentSrc.startsWith("data:image/svg+xml"))&&(u.value=1,m.value=1)};_()}const S=v(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),$=()=>{var _;if(!c.value.src||o.value==="idle")return null;const d=l("img",{class:["v-img__img",S.value],style:{objectPosition:e.position},src:c.value.src,srcset:c.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:r,onLoad:p,onError:z},null),b=(_=a.sources)==null?void 0:_.call(a);return l(F,{transition:e.transition,appear:!0},{default:()=>[G(b?l("picture",{class:"v-img__picture"},[b,d]):d,[[ht,o.value==="loaded"]])]})},B=()=>l(F,{transition:e.transition},{default:()=>[c.value.lazySrc&&o.value!=="loaded"&&l("img",{class:["v-img__img","v-img__img--preload",S.value],style:{objectPosition:e.position},src:c.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),P=()=>a.placeholder?l(F,{transition:e.transition,appear:!0},{default:()=>[(o.value==="loading"||o.value==="error"&&!a.error)&&l("div",{class:"v-img__placeholder"},[a.placeholder()])]}):null,D=()=>a.error?l(F,{transition:e.transition,appear:!0},{default:()=>[o.value==="error"&&l("div",{class:"v-img__error"},[a.error()])]}):null,A=()=>e.gradient?l("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,N=O(!1);{const d=X(f,b=>{b&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{N.value=!0})}),d())})}return L(()=>{const d=pe.filterProps(e);return G(l(pe,Le({class:["v-img",{"v-img--booting":!N.value},e.class],style:[{width:h(e.width==="auto"?u.value:e.width)},e.style]},d,{aspectRatio:f.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>l(ke,null,[l($,null,null),l(B,null,null),l(A,null,null),l(P,null,null),l(D,null,null)]),default:a.default}),[[$e("intersect"),{handler:y,options:e.options},null,{once:!0}]])}),{currentSrc:i,image:r,state:o,naturalWidth:u,naturalHeight:m}}}),tn=g({start:Boolean,end:Boolean,icon:H,image:String,text:String,...I(),...re(),...le(),...Oe(),...Q(),...q(),...Ae({variant:"flat"})},"VAvatar"),Se=x()({name:"VAvatar",props:tn(),setup(e,n){let{slots:t}=n;const{themeClasses:a}=K(e),{colorClasses:s,colorStyles:i,variantClasses:r}=Ne(e),{densityClasses:o}=Ee(e),{roundedClasses:u}=oe(e),{sizeClasses:m,sizeStyles:c}=He(e);return L(()=>l(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},a.value,s.value,o.value,u.value,m.value,r.value,e.class],style:[i.value,c.value,e.style]},{default:()=>{var f;return[e.image?l(et,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?l(Tt,{key:"icon",icon:e.icon},null):((f=t.default)==null?void 0:f.call(t))??e.text,ze(!1,"v-avatar")]}})),{}}}),nn=g({appendAvatar:String,appendIcon:H,prependAvatar:String,prependIcon:H,subtitle:String,title:String,...I(),...re()},"VCardItem"),an=x()({name:"VCardItem",props:nn(),setup(e,n){let{slots:t}=n;return L(()=>{var m;const a=!!(e.prependAvatar||e.prependIcon),s=!!(a||t.prepend),i=!!(e.appendAvatar||e.appendIcon),r=!!(i||t.append),o=!!(e.title||t.title),u=!!(e.subtitle||t.subtitle);return l("div",{class:["v-card-item",e.class],style:e.style},[s&&l("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?l(J,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},t.prepend):a&&l(Se,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),l("div",{class:"v-card-item__content"},[o&&l(qt,{key:"title"},{default:()=>{var c;return[((c=t.title)==null?void 0:c.call(t))??e.title]}}),u&&l(Ut,{key:"subtitle"},{default:()=>{var c;return[((c=t.subtitle)==null?void 0:c.call(t))??e.subtitle]}}),(m=t.default)==null?void 0:m.call(t)]),r&&l("div",{key:"append",class:"v-card-item__append"},[t.append?l(J,{key:"append-defaults",disabled:!i,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},t.append):i&&l(Se,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),sn=se("v-card-text"),rn=g({appendAvatar:String,appendIcon:H,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:H,ripple:{type:[Boolean,Object],default:!0},subtitle:String,text:String,title:String,...pt(),...I(),...re(),...De(),..._t(),...Bt(),...je(),...At(),...le(),...Ht(),...Q(),...q(),...Ae({variant:"elevated"})},"VCard"),fn=x()({name:"VCard",directives:{Ripple:Xt},props:rn(),setup(e,n){let{attrs:t,slots:a}=n;const{themeClasses:s}=K(e),{borderClasses:i}=St(e),{colorClasses:r,colorStyles:o,variantClasses:u}=Ne(e),{densityClasses:m}=Ee(e),{dimensionStyles:c}=We(e),{elevationClasses:f}=kt(e),{loaderClasses:y}=Et(e),{locationStyles:p}=Me(e),{positionClasses:z}=Nt(e),{roundedClasses:T}=oe(e),w=Ot(e,t),k=v(()=>e.link!==!1&&w.isLink.value),S=v(()=>!e.disabled&&e.link!==!1&&(e.link||w.isClickable.value));return L(()=>{const $=k.value?"a":e.tag,B=!!(a.title||e.title),P=!!(a.subtitle||e.subtitle),D=B||P,A=!!(a.append||e.appendAvatar||e.appendIcon),N=!!(a.prepend||e.prependAvatar||e.prependIcon),d=!!(a.image||e.image),b=D||N||A,_=!!(a.text||e.text);return G(l($,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":S.value},s.value,i.value,r.value,m.value,f.value,y.value,z.value,T.value,u.value,e.class],style:[o.value,c.value,p.value,e.style],href:w.href.value,onClick:S.value&&w.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var V;return[d&&l("div",{key:"image",class:"v-card__image"},[a.image?l(J,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):l(et,{key:"image-img",cover:!0,src:e.image},null)]),l(Rt,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),b&&l(an,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),_&&l(sn,{key:"text"},{default:()=>{var E;return[((E=a.text)==null?void 0:E.call(a))??e.text]}}),(V=a.default)==null?void 0:V.call(a),a.actions&&l(Yt,null,{default:a.actions}),ze(S.value,"v-card")]}}),[[$e("ripple"),S.value&&e.ripple]])}),{}}});export{je as A,Qt as B,Me as C,bt as D,on as E,un as F,cn as G,dn as H,mn as I,et as J,Oe as K,He as L,F as M,Pt as N,Bt as O,At as P,Et as Q,Xt as R,Nt as S,Tt as V,Q as a,fn as b,J as c,se as d,pt as e,re as f,De as g,_t as h,le as i,Ht as j,Ae as k,Ot as l,I as m,St as n,Ne as o,Ee as p,We as q,kt as r,oe as s,ze as t,L as u,Se as v,Re as w,ge as x,vn as y,fe as z};
