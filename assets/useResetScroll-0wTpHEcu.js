import{r as l,j as e,b as w,a as _,c as p,u as $,N as v,L as g}from"./index-LGQWu6kt.js";function E({title:s,titleId:c,...a},t){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":c},a),s?l.createElement("title",{id:c},s):null,l.createElement("path",{fillRule:"evenodd",d:"M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z",clipRule:"evenodd"}))}const R=l.forwardRef(E),S=R;function L({children:s,onChange:c=t=>{},value:a}){const[t,n]=l.useState(!1),[r,u]=l.useState(0),h=()=>n(!t),j=o=>{u(o),n(!1),c(s[o].props.value)},m=({target:o})=>{const i=o.classList;i.contains("select_selected__content")||i.contains("select__items__item")||i.contains("select_selected")||i.contains("select_icon")||n(!1)};return l.useEffect(()=>(document.addEventListener("click",m,!1),()=>{document.removeEventListener("click",m)}),[]),l.useEffect(()=>{const o=s.findIndex(({props:i})=>i.value===a);o!==-1&&u(o)},[a]),e.jsxs("div",{className:"select",children:[e.jsxs("div",{className:"select_selected",onClick:h,children:[e.jsx("div",{className:"select_selected__content h6",children:s[r].props.children}),e.jsx(S,{className:"icon-24x24 icon select_icon"})]}),e.jsx("div",{className:`select__items ${t?"show":""}`,children:s.map(({props:o},i)=>e.jsx("div",{className:"select__items__item h6",onClick:()=>j(i),children:o.children},i))}),e.jsx("div",{className:"select__overlay"})]})}function k(){const{lang:s}=w(),[c,a]=l.useState(""),t={ro:{home:"/",about:"despre",clients:"clienti",contact:"contact",despre:"despre",clienti:"clienti"},en:{home:"/",about:"about",clients:"clients",contact:"contact",despre:"about",clienti:"clients"},de:{home:"/",about:"ueber-uns",clients:"kunden",contact:"kontakt"}};return l.useEffect(()=>{var r;const n=((r=localStorage.getItem("i18nextLng"))==null?void 0:r.split("-")[0])||"en";a(n)},[c]),l.useEffect(()=>{a(s)},[s]),[c,t]}function C(){const s={roabout:"despre",roclients:"clienti",rocontact:"contact","roueber-uns":"despre",rokunden:"clienti",rokontakt:"contact",endespre:"about",enclienti:"clients",encontact:"contact","enueber-uns":"about",enkunden:"clients",enkontakt:"contact",dedespre:"ueber-uns",declienti:"kunden",decontact:"kontakt",deabout:"ueber-uns",declients:"kunden"};return{getNextRoute:(a,t)=>(console.log(t),s[`${a}${t}`])}}function y({show:s=!1,onClose:c}){var o,i,N;const{t:a}=_(),t=({isActive:d})=>d?"active":"",[n,r]=k(),{pathname:u}=p(),h=$(),{getNextRoute:j}=C(),m=[{value:"ro",nativeName:"Romana",flag:"/media/ro_flag.svg"},{value:"de",nativeName:"Deutsch",flag:"/media/de_flag.svg"},{value:"en",nativeName:"English",flag:"/media/sp_flag.svg"}];return e.jsxs("nav",{id:"navbar",className:`${s?"show":""}`,children:[e.jsx("div",{className:"navbar__close",children:e.jsx("button",{onClick:c,children:e.jsx("span",{className:"material-icons",children:"close"})})}),e.jsxs("ul",{children:[e.jsx("li",{className:"nav_element",children:e.jsx(v,{to:`/${n}`,className:t,end:!0,children:a("nav.home")})}),e.jsx("li",{className:"nav_element",children:e.jsx(v,{to:`/${n}/${(o=r[n])==null?void 0:o.about}`,className:t,end:!0,children:a("nav.about")})}),e.jsx("li",{className:"nav_element",children:e.jsx(v,{to:`/${n}/${(i=r[n])==null?void 0:i.clients}`,className:t,end:!0,children:a("nav.clients")})}),e.jsx("li",{className:"nav_element",children:e.jsx(v,{to:`/${n}/${(N=r[n])==null?void 0:N.contact}`,className:t,end:!0,children:a("nav.contact")})})]}),e.jsx(L,{onChange:d=>{const x=u.split("/")[2];if(x===void 0)h(`/${d}`);else{const f=j(d,x);console.log(f),h(`/${d}/${f}`)}},value:n,children:m.map(({value:d,nativeName:x,flag:f},b)=>e.jsxs("option",{value:d,children:[e.jsx("img",{src:f,width:24,height:24,alt:"Flag"}),x]},b))})]})}function F(s){const[c,a]=l.useState([0,0]),t=()=>{a([window.scrollX,window.scrollY])};return l.useEffect(()=>{let n;return s?n=document.querySelector(s):n=window,n.addEventListener("scroll",t,!1),()=>n.removeEventListener("scroll",t)},[]),c}function D(){const[s,c]=l.useState(),[a,t]=F(),n=l.useRef();return l.useEffect(()=>{t>0&&t<500?n.current.style.top="-100px":n.current.style.top="0px"},[t]),e.jsxs("header",{id:"header",ref:n,className:`${t>300?"float":""}`,children:[e.jsx("button",{className:"menu",onClick:()=>c(!0),children:e.jsx("span",{className:"material-icons",children:"menu"})}),e.jsx("img",{src:"/media/logo.png",width:100,height:52,alt:"Logo"}),e.jsx(y,{show:s,onClose:()=>c(!1)})]})}function I({title:s,image:c,imageAlt:a=""}){return e.jsxs("div",{className:"big_card",children:[e.jsx("img",{src:c,alt:a}),e.jsx("div",{className:"big_card__title",children:e.jsx("h3",{className:"h3",children:s})})]})}function M(){var t,n,r;const{t:s}=_(),[c,a]=k();return e.jsx("footer",{className:"footer",children:e.jsxs("div",{className:"footer__content",children:[e.jsx("img",{src:"/media/logo.png",width:100,height:52,alt:"Logo"}),e.jsxs("div",{className:"footer__content__links",children:[e.jsx("h5",{className:"h5",children:s("footer.menu")}),e.jsxs("ul",{children:[e.jsx("li",{className:"links",children:e.jsx(g,{to:`/${c}`,children:s("nav.home")})}),e.jsx("li",{className:"links",children:e.jsx(g,{to:`/${c}/${(t=a[c])==null?void 0:t.about}`,children:s("nav.about")})}),e.jsx("li",{className:"links",children:e.jsx(g,{to:`/${c}/${(n=a[c])==null?void 0:n.clients}`,children:s("nav.clients")})}),e.jsx("li",{className:"links",children:e.jsx(g,{to:`/${c}/${(r=a[c])==null?void 0:r.contact}`,children:s("nav.contact")})})]})]}),e.jsxs("div",{className:"footer__content__links",children:[e.jsx("h5",{className:"h5",children:s("footer.contact")}),e.jsxs("ul",{children:[e.jsx("li",{className:"links",children:"+407123456789"}),e.jsx("li",{className:"links",children:"contact@server.com"})]})]})]})})}function P(){const{pathname:s}=p();return l.useEffect(()=>{window.scrollTo(0,0)},[s]),null}export{I as B,M as F,D as H,P as a,k as u};
