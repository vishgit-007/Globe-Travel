import{d as b,f as u,i as x}from"./chunk-ZVUDQ63G.js";import{a as p,c as m}from"./chunk-LOHYXAXQ.js";import"./chunk-MM5QLNJM.js";import"./chunk-H3GX5QFY.js";import{a as l,c as r}from"./chunk-SWKS5X2Q.js";import{b as a,d as E,e as d,g as t,h as f,k as S,l as y}from"./chunk-GZKKQAXT.js";import{e as c}from"./chunk-JHI3MBHO.js";var T="ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}",k=T,z=(()=>{let e=class{constructor(i){a(this,i),this.ionInfinite=y(this,"ionInfinite",7),this.thrPx=0,this.thrPc=0,this.didFire=!1,this.isBusy=!1,this.onScroll=()=>{let n=this.scrollEl;if(!n||!this.canStart())return 1;let s=this.el.offsetHeight;if(s===0)return 2;let o=n.scrollTop,v=n.scrollHeight,h=n.offsetHeight,g=this.thrPc!==0?h*this.thrPc:this.thrPx;return(this.position==="bottom"?v-s-o-g-h:o-s-g)<0&&!this.didFire?(this.isLoading=!0,this.didFire=!0,this.ionInfinite.emit(),3):4},this.isLoading=!1,this.threshold="15%",this.disabled=!1,this.position="bottom"}thresholdChanged(){let i=this.threshold;i.lastIndexOf("%")>-1?(this.thrPx=0,this.thrPc=parseFloat(i)/100):(this.thrPx=parseFloat(i),this.thrPc=0)}disabledChanged(){let i=this.disabled;i&&(this.isLoading=!1,this.isBusy=!1),this.enableScrollEvents(!i)}connectedCallback(){return c(this,null,function*(){let i=u(this.el);if(!i){x(this.el);return}this.scrollEl=yield b(i),this.thresholdChanged(),this.disabledChanged(),this.position==="top"&&d(()=>{this.scrollEl&&(this.scrollEl.scrollTop=this.scrollEl.scrollHeight-this.scrollEl.clientHeight)})})}disconnectedCallback(){this.enableScrollEvents(!1),this.scrollEl=void 0}complete(){return c(this,null,function*(){let i=this.scrollEl;if(!(!this.isLoading||!i))if(this.isLoading=!1,this.position==="top"){this.isBusy=!0;let n=i.scrollHeight-i.scrollTop;requestAnimationFrame(()=>{E(()=>{let o=i.scrollHeight-n;requestAnimationFrame(()=>{d(()=>{i.scrollTop=o,this.isBusy=!1,this.didFire=!1})})})})}else this.didFire=!1})}canStart(){return!this.disabled&&!this.isBusy&&!!this.scrollEl&&!this.isLoading}enableScrollEvents(i){this.scrollEl&&(i?this.scrollEl.addEventListener("scroll",this.onScroll):this.scrollEl.removeEventListener("scroll",this.onScroll))}render(){let i=r(this),n=this.disabled;return t(f,{key:"1444429a86950c449953cbf578436cc8cabf40ec",class:{[i]:!0,"infinite-scroll-loading":this.isLoading,"infinite-scroll-enabled":!n}})}get el(){return S(this)}static get watchers(){return{threshold:["thresholdChanged"],disabled:["disabledChanged"]}}};return e.style=k,e})(),I="ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px;margin-top:4px;margin-bottom:0}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-ios .infinite-loading-text{color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-small-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}",C=I,L="ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px;margin-top:4px;margin-bottom:0}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-md .infinite-loading-text{color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-small-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}.infinite-scroll-content-md .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}",H=L,D=(()=>{let e=class{constructor(i){a(this,i),this.customHTMLEnabled=l.get("innerHTMLTemplatesEnabled",m),this.loadingSpinner=void 0,this.loadingText=void 0}componentDidLoad(){if(this.loadingSpinner===void 0){let i=r(this);this.loadingSpinner=l.get("infiniteLoadingSpinner",l.get("spinner",i==="ios"?"lines":"crescent"))}}renderLoadingText(){let{customHTMLEnabled:i,loadingText:n}=this;return i?t("div",{class:"infinite-loading-text",innerHTML:p(n)}):t("div",{class:"infinite-loading-text"},this.loadingText)}render(){let i=r(this);return t(f,{key:"060278bf9cb0321e182352f9613be4ebbb028259",class:{[i]:!0,[`infinite-scroll-content-${i}`]:!0}},t("div",{key:"07d3cada920145f979ad315bd187fb878e0c3da3",class:"infinite-loading"},this.loadingSpinner&&t("div",{key:"6254f175d7543d09f3dd47cd0589a2809182cd8c",class:"infinite-loading-spinner"},t("ion-spinner",{key:"a6a816d1c65b60b786333b209b63492aa716a283",name:this.loadingSpinner})),this.loadingText!==void 0&&this.renderLoadingText()))}};return e.style={ios:C,md:H},e})();export{z as ion_infinite_scroll,D as ion_infinite_scroll_content};
