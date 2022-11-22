const ot=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}};ot();function I(){}const it=e=>e;function at(e,t){for(const n in t)e[n]=t[n];return e}function Xe(e){return e()}function Se(){return Object.create(null)}function A(e){e.forEach(Xe)}function be(e){return typeof e=="function"}function U(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function ct(e){return Object.keys(e).length===0}function ut(e,...t){if(e==null)return I;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function Z(e,t,n){e.$$.on_destroy.push(ut(t,n))}function ft(e,t,n,l){if(e){const s=Je(e,t,n,l);return e[0](s)}}function Je(e,t,n,l){return e[1]&&l?at(n.ctx.slice(),e[1](l(t))):n.ctx}function dt(e,t,n,l){if(e[2]&&l){const s=e[2](l(n));if(t.dirty===void 0)return s;if(typeof s=="object"){const r=[],o=Math.max(t.dirty.length,s.length);for(let i=0;i<o;i+=1)r[i]=t.dirty[i]|s[i];return r}return t.dirty|s}return t.dirty}function pt(e,t,n,l,s,r){if(s){const o=Je(t,n,l,r);e.p(o,s)}}function ht(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let l=0;l<n;l++)t[l]=-1;return t}return-1}function mt(e,t,n){return e.set(n),t}function he(e){return e&&be(e.destroy)?e.destroy:I}const Ye=typeof window!="undefined";let _t=Ye?()=>window.performance.now():()=>Date.now(),ye=Ye?e=>requestAnimationFrame(e):I;const W=new Set;function Ke(e){W.forEach(t=>{t.c(e)||(W.delete(t),t.f())}),W.size!==0&&ye(Ke)}function gt(e){let t;return W.size===0&&ye(Ke),{promise:new Promise(n=>{W.add(t={c:e,f:n})}),abort(){W.delete(t)}}}function f(e,t){e.appendChild(t)}function Ze(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function vt(e){const t=b("style");return bt(Ze(e),t),t.sheet}function bt(e,t){f(e.head||e,t)}function N(e,t,n){e.insertBefore(t,n||null)}function H(e){e.parentNode.removeChild(e)}function ee(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function b(e){return document.createElement(e)}function X(e){return document.createTextNode(e)}function T(){return X(" ")}function yt(){return X("")}function C(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function p(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function wt(e){return Array.from(e.childNodes)}function we(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function F(e,t){e.value=t==null?"":t}function He(e,t){for(let n=0;n<e.options.length;n+=1){const l=e.options[n];if(l.__value===t){l.selected=!0;return}}e.selectedIndex=-1}function kt(e){const t=e.querySelector(":checked")||e.options[0];return t&&t.__value}function P(e,t,n){e.classList[n?"add":"remove"](t)}function $t(e,t,{bubbles:n=!1,cancelable:l=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(e,n,l,t),s}const ae=new Map;let ce=0;function xt(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function Et(e,t){const n={stylesheet:vt(t),rules:{}};return ae.set(e,n),n}function Ne(e,t,n,l,s,r,o,i=0){const c=16.666/l;let a=`{
`;for(let d=0;d<=1;d+=c){const w=t+(n-t)*r(d);a+=d*100+`%{${o(w,1-w)}}
`}const y=a+`100% {${o(n,1-n)}}
}`,u=`__svelte_${xt(y)}_${i}`,m=Ze(e),{stylesheet:E,rules:v}=ae.get(m)||Et(m,e);v[u]||(v[u]=!0,E.insertRule(`@keyframes ${u} ${y}`,E.cssRules.length));const x=e.style.animation||"";return e.style.animation=`${x?`${x}, `:""}${u} ${l}ms linear ${s}ms 1 both`,ce+=1,u}function Lt(e,t){const n=(e.style.animation||"").split(", "),l=n.filter(t?r=>r.indexOf(t)<0:r=>r.indexOf("__svelte")===-1),s=n.length-l.length;s&&(e.style.animation=l.join(", "),ce-=s,ce||Tt())}function Tt(){ye(()=>{ce||(ae.forEach(e=>{const{stylesheet:t}=e;let n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.rules={}}),ae.clear())})}let te;function K(e){te=e}function ke(){if(!te)throw new Error("Function called outside component initialization");return te}function $e(e){ke().$$.on_mount.push(e)}function Ct(e){ke().$$.after_update.push(e)}function St(e){ke().$$.on_destroy.push(e)}const Y=[],me=[],re=[],Oe=[],Ht=Promise.resolve();let _e=!1;function Nt(){_e||(_e=!0,Ht.then(et))}function z(e){re.push(e)}const de=new Set;let se=0;function et(){const e=te;do{for(;se<Y.length;){const t=Y[se];se++,K(t),Ot(t.$$)}for(K(null),Y.length=0,se=0;me.length;)me.pop()();for(let t=0;t<re.length;t+=1){const n=re[t];de.has(n)||(de.add(n),n())}re.length=0}while(Y.length);for(;Oe.length;)Oe.pop()();_e=!1,de.clear(),K(e)}function Ot(e){if(e.fragment!==null){e.update(),A(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(z)}}let J;function Pt(){return J||(J=Promise.resolve(),J.then(()=>{J=null})),J}function pe(e,t,n){e.dispatchEvent($t(`${t?"intro":"outro"}${n}`))}const oe=new Set;let D;function xe(){D={r:0,c:[],p:D}}function Ee(){D.r||A(D.c),D=D.p}function O(e,t){e&&e.i&&(oe.delete(e),e.i(t))}function M(e,t,n,l){if(e&&e.o){if(oe.has(e))return;oe.add(e),D.c.push(()=>{oe.delete(e),l&&(n&&e.d(1),l())}),e.o(t)}else l&&l()}const Mt={duration:0};function Pe(e,t,n,l){let s=t(e,n),r=l?0:1,o=null,i=null,c=null;function a(){c&&Lt(e,c)}function y(m,E){const v=m.b-r;return E*=Math.abs(v),{a:r,b:m.b,d:v,duration:E,start:m.start,end:m.start+E,group:m.group}}function u(m){const{delay:E=0,duration:v=300,easing:x=it,tick:d=I,css:w}=s||Mt,$={start:_t()+E,b:m};m||($.group=D,D.r+=1),o||i?i=$:(w&&(a(),c=Ne(e,r,m,v,E,x,w)),m&&d(0,1),o=y($,v),z(()=>pe(e,m,"start")),gt(_=>{if(i&&_>i.start&&(o=y(i,v),i=null,pe(e,o.b,"start"),w&&(a(),c=Ne(e,r,o.b,o.duration,0,x,s.css))),o){if(_>=o.end)d(r=o.b,1-r),pe(e,o.b,"end"),i||(o.b?a():--o.group.r||A(o.group.c)),o=null;else if(_>=o.start){const g=_-o.start;r=o.a+o.d*x(g/o.duration),d(r,1-r)}}return!!(o||i)}))}return{run(m){be(s)?Pt().then(()=>{s=s(),u(m)}):u(m)},end(){a(),o=i=null}}}function B(e){e&&e.c()}function R(e,t,n,l){const{fragment:s,on_mount:r,on_destroy:o,after_update:i}=e.$$;s&&s.m(t,n),l||z(()=>{const c=r.map(Xe).filter(be);o?o.push(...c):A(c),e.$$.on_mount=[]}),i.forEach(z)}function G(e,t){const n=e.$$;n.fragment!==null&&(A(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function It(e,t){e.$$.dirty[0]===-1&&(Y.push(e),Nt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function q(e,t,n,l,s,r,o,i=[-1]){const c=te;K(e);const a=e.$$={fragment:null,ctx:null,props:r,update:I,not_equal:s,bound:Se(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:Se(),dirty:i,skip_bound:!1,root:t.target||c.$$.root};o&&o(a.root);let y=!1;if(a.ctx=n?n(e,t.props||{},(u,m,...E)=>{const v=E.length?E[0]:m;return a.ctx&&s(a.ctx[u],a.ctx[u]=v)&&(!a.skip_bound&&a.bound[u]&&a.bound[u](v),y&&It(e,u)),m}):[],a.update(),y=!0,A(a.before_update),a.fragment=l?l(a.ctx):!1,t.target){if(t.hydrate){const u=wt(t.target);a.fragment&&a.fragment.l(u),u.forEach(H)}else a.fragment&&a.fragment.c();t.intro&&O(e.$$.fragment),R(e,t.target,t.anchor,t.customElement),et()}K(c)}class Q{$destroy(){G(this,1),this.$destroy=I}$on(t,n){const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const s=l.indexOf(n);s!==-1&&l.splice(s,1)}}$set(t){this.$$set&&!ct(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function At(e){const t=e-1;return t*t*t+1}function Me(e,{delay:t=0,duration:n=400,easing:l=At,x:s=0,y:r=0,opacity:o=0}={}){const i=getComputedStyle(e),c=+i.opacity,a=i.transform==="none"?"":i.transform,y=c*(1-o);return{delay:t,duration:n,easing:l,css:(u,m)=>`
			transform: ${a} translate(${(1-u)*s}px, ${(1-u)*r}px);
			opacity: ${c-y*m}`}}async function tt(e,t={}){const n={method:"post",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify(t)},l=window.GetParentResourceName?window.GetParentResourceName():"nui-frame-app";return await(await fetch(`https://${l}/${e}`,n)).json()}function ge(e){let t,n;function l(o){n=e.getAttribute("title"),e.removeAttribute("title"),t=document.createElement("div"),t.textContent=n,t.style=`
			border: 1px solid #ddd;
			box-shadow: 1px 1px 1px #ddd;
			background: white;
			border-radius: 4px;
			padding: 4px;
			position: absolute;
			top: ${o.pageX+5}px;
			left: ${o.pageY+5}px;
			z-index: 1000;
		`,document.body.appendChild(t)}function s(o){t.style.left=`${o.pageX+5}px`,t.style.top=`${o.pageY+5}px`}function r(){document.body.removeChild(t),e.setAttribute("title",n)}return e.addEventListener("mouseover",l),e.addEventListener("mouseleave",r),e.addEventListener("mousemove",s),{destroy(){e.removeEventListener("mouseover",l),e.removeEventListener("mouseleave",r),e.removeEventListener("mousemove",s)}}}const j=[];function le(e,t=I){let n;const l=new Set;function s(i){if(U(e,i)&&(e=i,n)){const c=!j.length;for(const a of l)a[1](),j.push(a,e);if(c){for(let a=0;a<j.length;a+=2)j[a][0](j[a+1]);j.length=0}}}function r(i){s(i(e))}function o(i,c=I){const a=[i,c];return l.add(a),l.size===1&&(n=t(s)||I),i(e),()=>{l.delete(a),l.size===0&&(n(),n=null)}}return{set:s,update:r,subscribe:o}}const ie=le(!1);sessionStorage.setItem("luaOutput","");const ue=le(sessionStorage.getItem("luaOutput"));ue.subscribe(e=>sessionStorage.setItem("luaOutput",e));const fe=le(localStorage.getItem("debug")==="true");fe.subscribe(e=>localStorage.enabled=String(e));sessionStorage.setItem("execHistory","");const ne=le(sessionStorage.getItem("execHistory"));ne.subscribe(e=>sessionStorage.setItem("execHistory",e));const ve=le([]);function Dt(e){let t,n,l,s,r,o;return{c(){t=b("div"),n=b("p"),n.textContent="Console",l=T(),s=b("textarea"),p(n,"class","text mb-3 mt-5 text-start svelte-6bh615"),s.readOnly=!0,p(s,"class","w-full h-full p-5 overflow-y-scroll scrollbar-hide  svelte-6bh615"),p(s,"placeholder","Output will be here"),p(t,"class","w-[95%] h-[30%] rounded-[1rem] relative mx-5 self-end self-baseline bottom-0 svelte-6bh615")},m(i,c){N(i,t,c),f(t,n),f(t,l),f(t,s),e[3](s),F(s,e[1]),r||(o=C(s,"input",e[4]),r=!0)},p(i,[c]){c&2&&F(s,i[1])},i:I,o:I,d(i){i&&H(t),e[3](null),r=!1,o()}}}function Ft(e,t,n){let l,s;Z(e,ne,u=>n(5,l=u)),Z(e,ue,u=>n(6,s=u));let r,{showHistory:o=!1}=t,i="";Ct(()=>{r&&c(r)});const c=async u=>{u.scroll({top:u.scrollHeight,behavior:"auto"})};ue.subscribe(u=>{r&&(o||n(1,i=u),c(r))}),$e(()=>{r&&(o?n(1,i=l):n(1,i=s),c(r))}),ne.subscribe(u=>{r&&(o&&n(1,i=u),c(r))});function a(u){me[u?"unshift":"push"](()=>{r=u,n(0,r)})}function y(){i=this.value,n(1,i)}return e.$$set=u=>{"showHistory"in u&&n(2,o=u.showHistory)},[r,i,o,a,y]}class Le extends Q{constructor(t){super(),q(this,t,Ft,Dt,U,{showHistory:2})}}let nt=!1;fe.subscribe(e=>nt=e);function lt(){let e=new Date,t=e.getHours(),n=e.getMinutes(),l=e.getSeconds();return t+":"+n+":"+l}function Te(e,t){ue.update(n=>n+`[${lt()}][${t}]: ${e}
`)}function st(e,t){let n=`Raw Lua: ${e}`;nt&&Te(n,"DEBUG"),ne.update(l=>l+`[${lt()}][${t}]: ${e}
`),tt("ExecuteLua",{code:e,eventType:t})}function Rt(e,t){e.params.length==0&&Te(`${e.code} didn't have any parameters, therefore skipping.`,"INFO");let n="";if(t.length>0){for(let s=0;s<t.length;s++)t[s].value.length>0&&(n+=`${t[s].global?"_G":"local"} ${t[s].value}
`);Gt(t)}if(n=n+e.code,e.params.length>0){n=n+"(";for(let s=0;s<e.params.length;s++)n=n+e.params[s],s<e.params.length-1&&(n=n+", ");n=n+")"}let l="client";e.server&&(l="server"),st(n,l)}window.addEventListener("message",e=>{const t=e.data;t.action==="updateOutput"&&Te(t.data.output,t.data.eventType)});function Gt(e){ve.update(t=>{for(let n=0;n<e.length;n++)e[n].global&&(t.includes(e[n].value)||t.push(e[n].value));return t})}function Ut(e){let t,n,l,s,r,o,i,c,a,y,u,m,E,v,x,d,w,$,_,g;return w=new Le({}),{c(){t=b("div"),n=b("div"),l=b("textarea"),s=T(),r=b("span"),o=b("button"),o.innerHTML=`EXECUTE
            <span class="fas fa-play use-selection text-[2rem] svelte-1hyw87g"></span>`,i=T(),c=b("select"),a=b("option"),a.textContent="Client",y=b("option"),y.textContent="Server",u=T(),m=b("i"),E=T(),v=b("i"),x=b("i"),d=T(),B(w.$$.fragment),p(l,"class","w-full h-full p-5 word-wrap svelte-1hyw87g"),p(l,"placeholder","Enter Lua code here"),P(l,"not-word-wrap",!e[3]),p(n,"class","w-[95%] h-full rounded-[1rem] mx-5 svelte-1hyw87g"),p(o,"class","selection svelte-1hyw87g"),a.__value="client",a.value=a.__value,p(a,"class","svelte-1hyw87g"),y.__value="server",y.value=y.__value,p(y,"class","svelte-1hyw87g"),p(c,"class","selection svelte-1hyw87g"),e[1]===void 0&&z(()=>e[6].call(c)),p(m,"title","Toggle Hide On Execute"),p(m,"class","fa-solid fa-eye-slash selection grid place-items-center w-auto h-auto toggle-on svelte-1hyw87g"),P(m,"toggle-on",e[2]),p(x,"title","Toggle Word-Wrap"),p(x,"class","bi bi-text-wrap text-[2rem] svelte-1hyw87g"),p(v,"class","selection grid place-items-center w-auto h-auto toggle-on  svelte-1hyw87g"),P(v,"toggle-on",e[3]),p(r,"class","flex flex-row px-5 gap-5 mt-5  svelte-1hyw87g"),p(t,"class","w-[100%] h-full self-end relative text-center gap-0 flex flex-col overflow-y-scroll svelte-1hyw87g")},m(k,h){N(k,t,h),f(t,n),f(n,l),F(l,e[0]),f(t,s),f(t,r),f(r,o),f(r,i),f(r,c),f(c,a),f(c,y),He(c,e[1]),f(r,u),f(r,m),f(r,E),f(r,v),f(v,x),f(t,d),R(w,t,null),$=!0,_||(g=[C(l,"keydown",Vt),C(l,"input",e[5]),C(o,"click",e[4]),C(c,"change",e[6]),C(m,"click",e[7]),he(ge.call(null,m)),he(ge.call(null,x)),C(v,"click",e[8])],_=!0)},p(k,[h]){h&1&&F(l,k[0]),h&8&&P(l,"not-word-wrap",!k[3]),h&2&&He(c,k[1]),h&4&&P(m,"toggle-on",k[2]),h&8&&P(v,"toggle-on",k[3])},i(k){$||(O(w.$$.fragment,k),$=!0)},o(k){M(w.$$.fragment,k),$=!1},d(k){k&&H(t),G(w),_=!1,A(g)}}}function Vt(e){if(e.key==="Tab"){e.preventDefault();const t=e.target.selectionStart,n=e.target.selectionEnd;e.target.value=e.target.value.substring(0,t)+"	"+e.target.value.substring(n),e.target.selectionStart=e.target.selectionEnd=t+1}}function zt(e,t,n){let l,s,r=!1,o=!0;function i(){st(l,s),r&&tt("hideUI")}function c(){l=this.value,n(0,l)}function a(){s=kt(this),n(1,s)}return[l,s,r,o,i,c,a,()=>{n(2,r=!r)},()=>{n(3,o=!o)}]}class Bt extends Q{constructor(t){super(),q(this,t,zt,Ut,U,{})}}function Ie(e,t,n){const l=e.slice();return l[13]=t[n],l[14]=t,l[15]=n,l}function Ae(e,t,n){const l=e.slice();return l[16]=t[n],l[17]=t,l[18]=n,l}function De(e,t,n){const l=e.slice();return l[19]=t[n],l[20]=t,l[15]=n,l}function Fe(e){let t,n,l,s,r,o,i,c,a,y;function u(){return e[4](e[19],e[20],e[15])}function m(){e[5].call(s,e[20],e[15])}function E(){return e[6](e[15])}return{c(){t=b("span"),n=b("div"),n.innerHTML='<i class="fa-solid fa-earth-americas svelte-1ylk0ak"></i>',l=T(),s=b("textarea"),o=T(),i=b("div"),c=T(),p(n,"class","selection grid place-items-center w-auto h-auto  svelte-1ylk0ak"),P(n,"toggle-on",e[19].global),p(s,"rows","1"),p(s,"class","w-full h-full leading-6 text-[1.5rem] p-5 svelte-1ylk0ak"),p(s,"placeholder",r="Create variables ("+(e[19].global?"GLOBAL":"LOCAL")+")"),p(i,"class","selection grid place-items-center w-auto h-auto fa-solid fa-trash svelte-1ylk0ak"),p(t,"class","flex flex-row gap-1 relative svelte-1ylk0ak")},m(v,x){N(v,t,x),f(t,n),f(t,l),f(t,s),F(s,e[19].value),f(t,o),f(t,i),f(t,c),a||(y=[C(n,"click",u),C(s,"keydown",Wt),C(s,"input",m),C(i,"click",E)],a=!0)},p(v,x){e=v,x&1&&P(n,"toggle-on",e[19].global),x&1&&r!==(r="Create variables ("+(e[19].global?"GLOBAL":"LOCAL")+")")&&p(s,"placeholder",r),x&1&&F(s,e[19].value)},d(v){v&&H(t),a=!1,A(y)}}}function qt(e){let t,n=(e[13].name||e[13].code)+"",l;return{c(){t=b("p"),l=X(n),p(t,"class","code-text w-fit h-fit leading-6 text-[1.5rem] p-5 svelte-1ylk0ak")},m(s,r){N(s,t,r),f(t,l)},p(s,r){r&2&&n!==(n=(s[13].name||s[13].code)+"")&&we(l,n)},d(s){s&&H(t)}}}function Qt(e){let t,n=(e[13].name||e[13].code)+"",l,s,r,o;return{c(){t=b("p"),l=X(n),p(t,"class","code-text w-fit h-fit leading-6 text-[1.5rem] p-5 svelte-1ylk0ak"),p(t,"title",s=`(${e[13].expectedParams})`)},m(i,c){N(i,t,c),f(t,l),r||(o=he(ge.call(null,t)),r=!0)},p(i,c){c&2&&n!==(n=(i[13].name||i[13].code)+"")&&we(l,n),c&2&&s!==(s=`(${i[13].expectedParams})`)&&p(t,"title",s)},d(i){i&&H(t),r=!1,o()}}}function Re(e){let t,n,l;function s(){return e[9](e[18])}function r(){e[10].call(t,e[17],e[18])}return{c(){t=b("span"),p(t,"role","textbox"),p(t,"contenteditable","true"),p(t,"rows","1"),p(t,"class","param-item relative max-w-fit h-fit leading-6 text-[1.5rem] p-5 svelte-1ylk0ak"),e[16]===void 0&&z(r),P(t,"toggle-on",e[2]==e[18])},m(o,i){N(o,t,i),e[16]!==void 0&&(t.innerHTML=e[16]),n||(l=[C(t,"focusout",e[8]),C(t,"dblclick",s),C(t,"input",r)],n=!0)},p(o,i){e=o,i&2&&e[16]!==t.innerHTML&&(t.innerHTML=e[16]),i&4&&P(t,"toggle-on",e[2]==e[18])},d(o){o&&H(t),n=!1,A(l)}}}function Ge(e){let t,n,l;function s(){return e[12](e[13],e[14],e[15])}return{c(){t=b("div"),t.innerHTML='<i class="fa-solid fa-trash p-3 w-auto h-auto svelte-1ylk0ak"></i>',p(t,"class","button grid place-items-center svelte-1ylk0ak")},m(r,o){N(r,t,o),n||(l=C(t,"click",s),n=!0)},p(r,o){e=r},d(r){r&&H(t),n=!1,l()}}}function Ue(e){let t,n,l,s,r,o,i,c,a,y;function u(){return e[7](e[13])}function m(_,g){return _[13].expectedParams?Qt:qt}let E=m(e),v=E(e),x=e[13].params,d=[];for(let _=0;_<x.length;_+=1)d[_]=Re(Ae(e,x,_));function w(){return e[11](e[13],e[14],e[15])}let $=e[13].params.length>0&&Ge(e);return{c(){t=b("div"),n=b("button"),n.innerHTML='<span class="fas fa-play p-3 w-auto h-auto svelte-1ylk0ak"></span>',l=T(),v.c(),s=T();for(let _=0;_<d.length;_+=1)d[_].c();r=T(),o=b("div"),o.innerHTML='<i class="fa-solid fa-plus p-3 w-auto h-auto svelte-1ylk0ak"></i>',i=T(),$&&$.c(),c=T(),p(n,"class","button exec-button grid place-items-center svelte-1ylk0ak"),p(o,"class","button grid place-items-center svelte-1ylk0ak"),p(t,"class","flex flex-wrap w-full gap-1 h-fit relative overflow-visible  svelte-1ylk0ak")},m(_,g){N(_,t,g),f(t,n),f(t,l),v.m(t,null),f(t,s);for(let k=0;k<d.length;k+=1)d[k].m(t,null);f(t,r),f(t,o),f(t,i),$&&$.m(t,null),f(t,c),a||(y=[C(n,"click",u),C(o,"click",w)],a=!0)},p(_,g){if(e=_,E===(E=m(e))&&v?v.p(e,g):(v.d(1),v=E(e),v&&(v.c(),v.m(t,s))),g&6){x=e[13].params;let k;for(k=0;k<x.length;k+=1){const h=Ae(e,x,k);d[k]?d[k].p(h,g):(d[k]=Re(h),d[k].c(),d[k].m(t,r))}for(;k<d.length;k+=1)d[k].d(1);d.length=x.length}e[13].params.length>0?$?$.p(e,g):($=Ge(e),$.c(),$.m(t,c)):$&&($.d(1),$=null)},d(_){_&&H(t),v.d(),ee(d,_),$&&$.d(),a=!1,A(y)}}}function jt(e){let t,n,l,s,r,o,i,c,a,y,u,m,E,v,x,d=e[0],w=[];for(let g=0;g<d.length;g+=1)w[g]=Fe(De(e,d,g));let $=e[1],_=[];for(let g=0;g<$.length;g+=1)_[g]=Ue(Ie(e,$,g));return m=new Le({}),{c(){t=b("div"),n=b("div"),l=b("div");for(let g=0;g<w.length;g+=1)w[g].c();s=T(),r=b("button"),r.innerHTML='<i class="fa-solid fa-plus svelte-1ylk0ak"></i>',o=T(),i=b("div"),c=b("span"),c.textContent="FUNCTIONS",a=T(),y=b("div");for(let g=0;g<_.length;g+=1)_[g].c();u=T(),B(m.$$.fragment),p(l,"class","w-full max-h-[20rem] variables-container relative overflow-y-scroll flex flex-col gap-1  svelte-1ylk0ak"),p(r,"class","add-button relative w-[fit] svelte-1ylk0ak"),p(n,"class","w-[95%] h-[fit] variables-container relative rounded-[1rem] mx-5 flex flex-col gap-1  svelte-1ylk0ak"),p(c,"class","text my-5 svelte-1ylk0ak"),p(y,"class","w-full max-h-[20rem] relative overflow-y-visible flex flex-col gap-1  svelte-1ylk0ak"),p(i,"class","w-[95%] h-[fit] relative rounded-[1rem] mx-5 flex flex-col gap-1  svelte-1ylk0ak"),p(t,"class","w-[100%] h-full self-end relative text-center gap-0 flex flex-col overflow-y-scroll  svelte-1ylk0ak")},m(g,k){N(g,t,k),f(t,n),f(n,l);for(let h=0;h<w.length;h+=1)w[h].m(l,null);f(n,s),f(n,r),f(t,o),f(t,i),f(i,c),f(i,a),f(i,y);for(let h=0;h<_.length;h+=1)_[h].m(y,null);f(t,u),R(m,t,null),E=!0,v||(x=C(r,"click",e[3]),v=!0)},p(g,[k]){if(k&1){d=g[0];let h;for(h=0;h<d.length;h+=1){const L=De(g,d,h);w[h]?w[h].p(L,k):(w[h]=Fe(L),w[h].c(),w[h].m(l,null))}for(;h<w.length;h+=1)w[h].d(1);w.length=d.length}if(k&7){$=g[1];let h;for(h=0;h<$.length;h+=1){const L=Ie(g,$,h);_[h]?_[h].p(L,k):(_[h]=Ue(L),_[h].c(),_[h].m(y,null))}for(;h<_.length;h+=1)_[h].d(1);_.length=$.length}},i(g){E||(O(m.$$.fragment,g),E=!0)},o(g){M(m.$$.fragment,g),E=!1},d(g){g&&H(t),ee(w,g),ee(_,g),G(m),v=!1,x()}}}function Wt(e){if(e.key==="Tab"){e.preventDefault();const t=e.target.selectionStart,n=e.target.selectionEnd;e.target.value=e.target.value.substring(0,t)+"	"+e.target.value.substring(n),e.target.selectionStart=e.target.selectionEnd=t+1}}function Xt(e,t,n){let l=[{value:"",global:!1}],s=[{code:"TriggerEvent",name:"TriggerServerEvent",server:!0,params:[],expectedParams:["EventName","..."]},{code:"TriggerClientEvent",params:[],expectedParams:["EventName","..."]},{code:"PlayAnim",params:[],expectedParams:["dict","anim","flag","duration"]},{code:"ClearPedTasks",params:[],expectedParams:["ped"]},{code:"ClearPedTasksImmediately",params:[],expectedParams:["ped"]}],r;function o(){l.push({value:"",global:!1}),n(0,l=[...l])}const i=(d,w,$)=>{n(0,w[$].global=!d.global,l)};function c(d,w){d[w].value=this.value,n(0,l)}const a=d=>{l.length>1&&(l.splice(d,1),n(0,l=[...l]))},y=d=>Rt(d,l),u=()=>n(2,r=null),m=d=>{r==d?n(2,r=null):n(2,r=d)};function E(d,w){d[w]=this.innerHTML,n(1,s)}return[l,s,r,o,i,c,a,y,u,m,E,(d,w,$)=>{d.params.push(""),n(1,w[$].params=[...d.params],s)},(d,w,$)=>{d.params.length>0&&(d.params.splice(r,1),n(1,w[$].params=[...d.params],s))}]}class Jt extends Q{constructor(t){super(),q(this,t,Xt,jt,U,{})}}function Ve(e,t,n){const l=e.slice();return l[3]=t[n],l[4]=t,l[5]=n,l}function ze(e){let t,n,l,s,r=e[0],o=[];for(let i=0;i<r.length;i+=1)o[i]=Be(Ve(e,r,i));return{c(){t=b("div"),n=b("p"),n.textContent="Global Variables",l=T(),s=b("div");for(let i=0;i<o.length;i+=1)o[i].c();p(n,"class","text mb-3 mt-5 text-start  svelte-1uv7oi9"),p(s,"class","w-full max-h-[30rem] variables-container relative overflow-y-scroll flex flex-col gap-1  svelte-1uv7oi9"),p(t,"class","w-[95%] h-[fit] variables-container relative rounded-[1rem] mx-5 flex flex-col gap-1  svelte-1uv7oi9")},m(i,c){N(i,t,c),f(t,n),f(t,l),f(t,s);for(let a=0;a<o.length;a+=1)o[a].m(s,null)},p(i,c){if(c&1){r=i[0];let a;for(a=0;a<r.length;a+=1){const y=Ve(i,r,a);o[a]?o[a].p(y,c):(o[a]=Be(y),o[a].c(),o[a].m(s,null))}for(;a<o.length;a+=1)o[a].d(1);o.length=r.length}},d(i){i&&H(t),ee(o,i)}}}function Be(e){let t,n,l,s,r;function o(){e[2].call(n,e[4],e[5])}return{c(){t=b("span"),n=b("textarea"),l=T(),p(n,"rows","1"),n.readOnly=!0,p(n,"class","w-full h-full leading-6 text-[1.5rem] p-5 svelte-1uv7oi9"),p(t,"class","flex flex-row gap-1 relative svelte-1uv7oi9")},m(i,c){N(i,t,c),f(t,n),F(n,e[3]),f(t,l),s||(r=C(n,"input",o),s=!0)},p(i,c){e=i,c&1&&F(n,e[3])},d(i){i&&H(t),s=!1,r()}}}function qe(e){let t,n;return t=new Le({props:{showHistory:!0}}),{c(){B(t.$$.fragment)},m(l,s){R(t,l,s),n=!0},i(l){n||(O(t.$$.fragment,l),n=!0)},o(l){M(t.$$.fragment,l),n=!1},d(l){G(t,l)}}}function Yt(e){let t,n,l,s=e[0].length>0&&ze(e),r=e[1].length>0&&qe();return{c(){t=b("div"),s&&s.c(),n=T(),r&&r.c(),p(t,"class","w-[100%] h-full self-end relative text-center gap-0 flex flex-col overflow-y-scroll  svelte-1uv7oi9")},m(o,i){N(o,t,i),s&&s.m(t,null),f(t,n),r&&r.m(t,null),l=!0},p(o,[i]){o[0].length>0?s?s.p(o,i):(s=ze(o),s.c(),s.m(t,n)):s&&(s.d(1),s=null),o[1].length>0?r?i&2&&O(r,1):(r=qe(),r.c(),O(r,1),r.m(t,null)):r&&(xe(),M(r,1,1,()=>{r=null}),Ee())},i(o){l||(O(r),l=!0)},o(o){M(r),l=!1},d(o){o&&H(t),s&&s.d(),r&&r.d()}}}function Kt(e,t,n){let l,s;Z(e,ve,o=>n(0,l=o)),Z(e,ne,o=>n(1,s=o));function r(o,i){o[i]=this.value,ve.set(l)}return[l,s,r]}class Zt extends Q{constructor(t){super(),q(this,t,Kt,Yt,U,{})}}function Qe(e,t,n){const l=e.slice();return l[7]=t[n],l[9]=n,l}function je(e){let t,n=e[7].name+"",l,s,r;function o(){return e[6](e[9])}return{c(){t=b("li"),l=X(n),p(t,"class","list-item text-white text-2xl font-bold py-5 top-20 svelte-wadmfu")},m(i,c){N(i,t,c),f(t,l),s||(r=C(t,"click",o),s=!0)},p(i,c){e=i},d(i){i&&H(t),s=!1,r()}}}function en(e){let t,n,l,s,r,o=e[1].name+"",i,c,a,y,u,m,E,v,x,d,w,$;var _=e[1].component;function g(L){return{}}_&&(u=new _(g()));let k=e[3],h=[];for(let L=0;L<k.length;L+=1)h[L]=je(Qe(e,k,L));return{c(){t=b("div"),n=b("span"),l=b("span"),s=T(),r=b("h1"),i=X(o),c=T(),a=b("button"),a.innerHTML='<i class="fa-solid fa-bug p-3 w-auto h-auto"></i>',y=T(),u&&B(u.$$.fragment),m=T(),E=b("ol");for(let L=0;L<h.length;L+=1)h[L].c();p(l,"class","relative text-white text-[2.5rem] grid place-content-center sidebar-button fas fa-list z-10 svelte-wadmfu"),p(r,"class","text-white text-3xl font-bold absolute text-center w-full z-0"),p(a,"class","selection grid place-items-center w-auto h-auto absolute mx-5 right-0 svelte-wadmfu"),P(a,"toggle-on",e[2]),p(n,"class","relative h-[5rem] flex flex-row p-1 mb-3 items-center top-3"),p(E,"class",v="w-[15rem] sidebar h-full self-end absolute text-center gap-5 flex flex-col p-5 "+(e[0]?"show-side":"hide-side")+" svelte-wadmfu"),p(t,"class","main-container absolute w-[50rem] h-[98vh] my-auto right-0 flex flex-col overflow-x-hidden svelte-wadmfu")},m(L,V){N(L,t,V),f(t,n),f(n,l),f(n,s),f(n,r),f(r,i),f(n,c),f(n,a),f(t,y),u&&R(u,t,null),f(t,m),f(t,E);for(let S=0;S<h.length;S+=1)h[S].m(E,null);d=!0,w||($=[C(l,"click",e[4]),C(a,"click",e[5])],w=!0)},p(L,[V]){if((!d||V&2)&&o!==(o=L[1].name+"")&&we(i,o),V&4&&P(a,"toggle-on",L[2]),_!==(_=L[1].component)){if(u){xe();const S=u;M(S.$$.fragment,1,0,()=>{G(S,1)}),Ee()}_?(u=new _(g()),B(u.$$.fragment),O(u.$$.fragment,1),R(u,t,m)):u=null}if(V&10){k=L[3];let S;for(S=0;S<k.length;S+=1){const Ce=Qe(L,k,S);h[S]?h[S].p(Ce,V):(h[S]=je(Ce),h[S].c(),h[S].m(E,null))}for(;S<h.length;S+=1)h[S].d(1);h.length=k.length}(!d||V&1&&v!==(v="w-[15rem] sidebar h-full self-end absolute text-center gap-5 flex flex-col p-5 "+(L[0]?"show-side":"hide-side")+" svelte-wadmfu"))&&p(E,"class",v)},i(L){d||(u&&O(u.$$.fragment,L),z(()=>{x||(x=Pe(t,Me,{x:800,duration:500},!0)),x.run(1)}),d=!0)},o(L){u&&M(u.$$.fragment,L),x||(x=Pe(t,Me,{x:800,duration:500},!1)),x.run(0),d=!1},d(L){L&&H(t),u&&G(u),ee(h,L),L&&x&&x.end(),w=!1,A($)}}}function tn(e,t,n){let l;Z(e,fe,y=>n(2,l=y));let s=!1,r=[{name:"Lua Executor",component:Bt},{name:"Quick Functions",component:Jt},{name:"History",component:Zt}],o=r[0];return[s,o,l,r,()=>n(0,s=!s),()=>mt(fe,l=!l,l),y=>n(1,o=r[y])]}class nn extends Q{constructor(t){super(),q(this,t,tn,en,U,{})}}function rt(e,t){const n=l=>{const{action:s,data:r}=l.data;s===e&&t(r)};$e(()=>window.addEventListener("message",n)),St(()=>window.removeEventListener("message",n))}async function ln(e,t={}){const n={method:"post",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify(t)},l=window.GetParentResourceName?window.GetParentResourceName():"nui-frame-app";return await(await fetch(`https://${l}/${e}`,n)).json()}function We(e){let t,n;const l=e[2].default,s=ft(l,e,e[1],null);return{c(){t=b("main"),s&&s.c(),p(t,"class","svelte-1fnr7mh")},m(r,o){N(r,t,o),s&&s.m(t,null),n=!0},p(r,o){s&&s.p&&(!n||o&2)&&pt(s,l,r,r[1],n?dt(l,r[1],o,null):ht(r[1]),null)},i(r){n||(O(s,r),n=!0)},o(r){M(s,r),n=!1},d(r){r&&H(t),s&&s.d(r)}}}function sn(e){let t,n,l=e[0]&&We(e);return{c(){l&&l.c(),t=yt()},m(s,r){l&&l.m(s,r),N(s,t,r),n=!0},p(s,[r]){s[0]?l?(l.p(s,r),r&1&&O(l,1)):(l=We(s),l.c(),O(l,1),l.m(t.parentNode,t)):l&&(xe(),M(l,1,1,()=>{l=null}),Ee())},i(s){n||(O(l),n=!0)},o(s){M(l),n=!1},d(s){l&&l.d(s),s&&H(t)}}}function rn(e,t,n){let{$$slots:l={},$$scope:s}=t,r;return ie.subscribe(o=>{n(0,r=o)}),rt("setVisible",o=>{ie.set(o)}),$e(()=>{const o=i=>{r&&["Escape"].includes(i.code)&&(ln("hideUI"),ie.set(!1))};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)}),e.$$set=o=>{"$$scope"in o&&n(1,s=o.$$scope)},[r,s,l]}class on extends Q{constructor(t){super(),q(this,t,rn,sn,U,{})}}function an(e){let t,n;return t=new nn({}),{c(){B(t.$$.fragment)},m(l,s){R(t,l,s),n=!0},i(l){n||(O(t.$$.fragment,l),n=!0)},o(l){M(t.$$.fragment,l),n=!1},d(l){G(t,l)}}}function cn(e){let t,n;return t=new on({props:{$$slots:{default:[an]},$$scope:{ctx:e}}}),{c(){B(t.$$.fragment)},m(l,s){R(t,l,s),n=!0},p(l,[s]){const r={};s&1&&(r.$$scope={dirty:s,ctx:l}),t.$set(r)},i(l){n||(O(t.$$.fragment,l),n=!0)},o(l){M(t.$$.fragment,l),n=!1},d(l){G(t,l)}}}function un(e){return rt("DevMenu",t=>{ie.set(t.show)}),[]}class fn extends Q{constructor(t){super(),q(this,t,un,cn,U,{})}}new fn({target:document.getElementById("app")});
