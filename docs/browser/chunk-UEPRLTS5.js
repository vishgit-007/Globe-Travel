import{i as P}from"./chunk-52YUPHO7.js";import{a as r}from"./chunk-426OJ4HC.js";var j=540,U=s=>document.querySelector(`${s}.ion-cloned-element`),I=s=>s.shadowRoot||s,D=s=>{let l=s.tagName==="ION-TABS"?s:s.querySelector("ion-tabs"),c="ion-content ion-header:not(.header-collapse-condense-inactive) ion-title.title-large";if(l!=null){let n=l.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");return n!=null?n.querySelector(c):null}return s.querySelector(c)},k=(s,l)=>{let c=s.tagName==="ION-TABS"?s:s.querySelector("ion-tabs"),n=[];if(c!=null){let t=c.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");t!=null&&(n=t.querySelectorAll("ion-buttons"))}else n=s.querySelectorAll("ion-buttons");for(let t of n){let g=t.closest("ion-header"),e=g&&!g.classList.contains("header-collapse-condense-inactive"),C=t.querySelector("ion-back-button"),a=t.classList.contains("buttons-collapse"),p=t.slot==="start"||t.slot==="";if(C!==null&&p&&(a&&e&&l||!a))return C}return null},J=(s,l,c,n,t)=>{let g=k(n,c),e=D(t),C=D(n),a=k(t,c),p=g!==null&&e!==null&&!c,y=C!==null&&a!==null&&c;if(p){let S=e.getBoundingClientRect(),m=g.getBoundingClientRect(),d=I(g).querySelector(".button-text"),R=d?.getBoundingClientRect(),A=I(e).querySelector(".toolbar-title").getBoundingClientRect();z(s,l,c,e,S,A,m,d,R),G(s,l,c,g,m,d,R,e,A)}else if(y){let S=C.getBoundingClientRect(),m=a.getBoundingClientRect(),d=I(a).querySelector(".button-text"),R=d?.getBoundingClientRect(),A=I(C).querySelector(".toolbar-title").getBoundingClientRect();z(s,l,c,C,S,A,m,d,R),G(s,l,c,a,m,d,R,C,A)}return{forward:p,backward:y}},G=(s,l,c,n,t,g,e,C,a)=>{var p,y;let S=l?`calc(100% - ${t.right+4}px)`:`${t.left-4}px`,m=l?"right":"left",d=l?"left":"right",R=l?"right":"left",L=1,A=1,T=`scale(${A})`,X="scale(1)";if(g&&e){let Y=((p=g.textContent)===null||p===void 0?void 0:p.trim())===((y=C.textContent)===null||y===void 0?void 0:y.trim());L=a.width/e.width,A=(a.height-Z)/e.height,T=Y?`scale(${L}, ${A})`:`scale(${A})`}let x=I(n).querySelector("ion-icon").getBoundingClientRect(),W=l?`${x.width/2-(x.right-t.right)}px`:`${t.left-x.width/2}px`,o=l?`-${window.innerWidth-t.right}px`:`${t.left}px`,E=`${a.top}px`,$=`${t.top}px`,v=[{offset:0,transform:`translate3d(${W}, ${E}, 0)`},{offset:1,transform:`translate3d(${o}, ${$}, 0)`}],i=[{offset:0,transform:`translate3d(${o}, ${$}, 0)`},{offset:1,transform:`translate3d(${W}, ${E}, 0)`}],f=c?i:v,q=c?[{offset:0,opacity:1,transform:X},{offset:1,opacity:0,transform:T}]:[{offset:0,opacity:0,transform:T},{offset:1,opacity:1,transform:X}],w=c?[{offset:0,opacity:1,transform:"scale(1)"},{offset:.2,opacity:0,transform:"scale(0.6)"},{offset:1,opacity:0,transform:"scale(0.6)"}]:[{offset:0,opacity:0,transform:"scale(0.6)"},{offset:.6,opacity:0,transform:"scale(0.6)"},{offset:1,opacity:1,transform:"scale(1)"}],b=r(),F=r(),B=r(),u=U("ion-back-button"),M=I(u).querySelector(".button-text"),H=I(u).querySelector("ion-icon");u.text=n.text,u.mode=n.mode,u.icon=n.icon,u.color=n.color,u.disabled=n.disabled,u.style.setProperty("display","block"),u.style.setProperty("position","fixed"),F.addElement(H),b.addElement(M),B.addElement(u),B.beforeStyles({position:"absolute",top:"0px",[R]:"0px"}).beforeAddWrite(()=>{n.style.setProperty("display","none"),u.style.setProperty(m,S)}).afterAddWrite(()=>{n.style.setProperty("display",""),u.style.setProperty("display","none"),u.style.removeProperty(m)}).keyframes(f),b.beforeStyles({"transform-origin":`${m} top`}).keyframes(q),F.beforeStyles({"transform-origin":`${d} center`}).keyframes(w),s.addAnimation([b,F,B])},z=(s,l,c,n,t,g,e,C,a)=>{var p,y;let S=l?"right":"left",m=l?`calc(100% - ${t.right}px)`:`${t.left}px`,d="0px",R=`${t.top}px`,L=8,A=l?`-${window.innerWidth-e.right-L}px`:`${e.x+L}px`,T=.5,X="scale(1)",K=`scale(${T})`;if(C&&a){A=l?`-${window.innerWidth-a.right-L}px`:`${a.x-L}px`;let N=((p=C.textContent)===null||p===void 0?void 0:p.trim())===((y=n.textContent)===null||y===void 0?void 0:y.trim()),h=a.width/g.width;T=a.height/(g.height-Z),K=N?`scale(${h}, ${T})`:`scale(${T})`}let x=e.top+e.height/2,W=t.height*T/2,o=`${x-W}px`,E=[{offset:0,opacity:0,transform:`translate3d(${A}, ${o}, 0) ${K}`},{offset:.1,opacity:0},{offset:1,opacity:1,transform:`translate3d(${d}, ${R}, 0) ${X}`}],$=[{offset:0,opacity:.99,transform:`translate3d(${d}, ${R}, 0) ${X}`},{offset:.6,opacity:0},{offset:1,opacity:0,transform:`translate3d(${A}, ${o}, 0) ${K}`}],v=c?E:$,i=U("ion-title"),f=r();i.innerText=n.innerText,i.size=n.size,i.color=n.color,f.addElement(i),f.beforeStyles({"transform-origin":`${S} top`,height:`${t.height}px`,display:"",position:"relative",[S]:m}).beforeAddWrite(()=>{n.style.setProperty("opacity","0")}).afterAddWrite(()=>{n.style.setProperty("opacity",""),i.style.setProperty("display","none")}).keyframes(v),s.addAnimation(f)},st=(s,l)=>{var c;try{let n="cubic-bezier(0.32,0.72,0,1)",t="opacity",g="transform",e="0%",a=s.ownerDocument.dir==="rtl",p=a?"-99.5%":"99.5%",y=a?"33%":"-33%",S=l.enteringEl,m=l.leavingEl,d=l.direction==="back",R=S.querySelector(":scope > ion-content"),L=S.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),A=S.querySelectorAll(":scope > ion-header > ion-toolbar"),T=r(),X=r();if(T.addElement(S).duration(((c=l.duration)!==null&&c!==void 0?c:0)||j).easing(l.easing||n).fill("both").beforeRemoveClass("ion-page-invisible"),m&&s!==null&&s!==void 0){let o=r();o.addElement(s),T.addAnimation(o)}if(!R&&A.length===0&&L.length===0?X.addElement(S.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")):(X.addElement(R),X.addElement(L)),T.addAnimation(X),d?X.beforeClearStyles([t]).fromTo("transform",`translateX(${y})`,`translateX(${e})`).fromTo(t,.8,1):X.beforeClearStyles([t]).fromTo("transform",`translateX(${p})`,`translateX(${e})`),R){let o=I(R).querySelector(".transition-effect");if(o){let E=o.querySelector(".transition-cover"),$=o.querySelector(".transition-shadow"),v=r(),i=r(),f=r();v.addElement(o).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),i.addElement(E).beforeClearStyles([t]).fromTo(t,0,.1),f.addElement($).beforeClearStyles([t]).fromTo(t,.03,.7),v.addAnimation([i,f]),X.addAnimation([v])}}let K=S.querySelector("ion-header.header-collapse-condense"),{forward:x,backward:W}=J(T,a,d,S,m);if(A.forEach(o=>{let E=r();E.addElement(o),T.addAnimation(E);let $=r();$.addElement(o.querySelector("ion-title"));let v=r(),i=Array.from(o.querySelectorAll("ion-buttons,[menuToggle]")),f=o.closest("ion-header"),N=f?.classList.contains("header-collapse-condense-inactive"),h;d?h=i.filter(b=>{let F=b.classList.contains("buttons-collapse");return F&&!N||!F}):h=i.filter(b=>!b.classList.contains("buttons-collapse")),v.addElement(h);let q=r();q.addElement(o.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));let _=r();_.addElement(I(o).querySelector(".toolbar-background"));let O=r(),w=o.querySelector("ion-back-button");if(w&&O.addElement(w),E.addAnimation([$,v,q,_,O]),v.fromTo(t,.01,1),q.fromTo(t,.01,1),d)N||$.fromTo("transform",`translateX(${y})`,`translateX(${e})`).fromTo(t,.01,1),q.fromTo("transform",`translateX(${y})`,`translateX(${e})`),O.fromTo(t,.01,1);else if(K||$.fromTo("transform",`translateX(${p})`,`translateX(${e})`).fromTo(t,.01,1),q.fromTo("transform",`translateX(${p})`,`translateX(${e})`),_.beforeClearStyles([t,"transform"]),f?.translucent?_.fromTo("transform",a?"translateX(-100%)":"translateX(100%)","translateX(0px)"):_.fromTo(t,.01,"var(--opacity)"),x||O.fromTo(t,.01,1),w&&!x){let F=r();F.addElement(I(w).querySelector(".button-text")).fromTo("transform",a?"translateX(-100px)":"translateX(100px)","translateX(0px)"),E.addAnimation(F)}}),m){let o=r(),E=m.querySelector(":scope > ion-content"),$=m.querySelectorAll(":scope > ion-header > ion-toolbar"),v=m.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");if(!E&&$.length===0&&v.length===0?o.addElement(m.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")):(o.addElement(E),o.addElement(v)),T.addAnimation(o),d){o.beforeClearStyles([t]).fromTo("transform",`translateX(${e})`,a?"translateX(-100%)":"translateX(100%)");let i=P(m);T.afterAddWrite(()=>{T.getDirection()==="normal"&&i.style.setProperty("display","none")})}else o.fromTo("transform",`translateX(${e})`,`translateX(${y})`).fromTo(t,1,.8);if(E){let i=I(E).querySelector(".transition-effect");if(i){let f=i.querySelector(".transition-cover"),N=i.querySelector(".transition-shadow"),h=r(),q=r(),_=r();h.addElement(i).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),q.addElement(f).beforeClearStyles([t]).fromTo(t,.1,0),_.addElement(N).beforeClearStyles([t]).fromTo(t,.7,.03),h.addAnimation([q,_]),o.addAnimation([h])}}$.forEach(i=>{let f=r();f.addElement(i);let N=r();N.addElement(i.querySelector("ion-title"));let h=r(),q=i.querySelectorAll("ion-buttons,[menuToggle]"),_=i.closest("ion-header"),O=_?.classList.contains("header-collapse-condense-inactive"),w=Array.from(q).filter(H=>{let Y=H.classList.contains("buttons-collapse");return Y&&!O||!Y});h.addElement(w);let b=r(),F=i.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");F.length>0&&b.addElement(F);let B=r();B.addElement(I(i).querySelector(".toolbar-background"));let u=r(),M=i.querySelector("ion-back-button");if(M&&u.addElement(M),f.addAnimation([N,h,b,u,B]),T.addAnimation(f),u.fromTo(t,.99,0),h.fromTo(t,.99,0),b.fromTo(t,.99,0),d){if(O||N.fromTo("transform",`translateX(${e})`,a?"translateX(-100%)":"translateX(100%)").fromTo(t,.99,0),b.fromTo("transform",`translateX(${e})`,a?"translateX(-100%)":"translateX(100%)"),B.beforeClearStyles([t,"transform"]),_?.translucent?B.fromTo("transform","translateX(0px)",a?"translateX(-100%)":"translateX(100%)"):B.fromTo(t,"var(--opacity)",0),M&&!W){let Y=r();Y.addElement(I(M).querySelector(".button-text")).fromTo("transform",`translateX(${e})`,`translateX(${(a?-124:124)+"px"})`),f.addAnimation(Y)}}else O||N.fromTo("transform",`translateX(${e})`,`translateX(${y})`).fromTo(t,.99,0).afterClearStyles([g,t]),b.fromTo("transform",`translateX(${e})`,`translateX(${y})`).afterClearStyles([g,t]),u.afterClearStyles([t]),N.afterClearStyles([t]),h.afterClearStyles([t])})}return T}catch(n){throw n}},Z=10;export{I as a,st as b};
