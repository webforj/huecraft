(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))o(c);new MutationObserver(c=>{for(const n of c)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(c){const n={};return c.integrity&&(n.integrity=c.integrity),c.referrerPolicy&&(n.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?n.credentials="include":c.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(c){if(c.ep)return;c.ep=!0;const n=a(c);fetch(c.href,n)}})();const Y={JewelTones:{Saturation:[72,48],Lightness:[44,36]},Pastels:{Saturation:[83,53],Lightness:[86,83]},EarthTones:{Saturation:[55,19],Lightness:[63,29]},FluorescentNeon:{Saturation:[100,74],Lightness:[56,50]},Brights:{Saturation:[73,55],Lightness:[74,51]},Greyscales:{Saturation:[15,0],Lightness:[100,0]},WarmTones:{Saturation:[54,40],Lightness:[69,31]},CoolGreensBlues:{Saturation:[39,30],Lightness:[69,31]},SoftNeutrals:{Saturation:[50,10],Lightness:[90,10]},DeepShades:{Saturation:[29,20],Lightness:[39,11]},VibrantTints:{Saturation:[54,40],Lightness:[69,51]},Monochromes:{Saturation:[20,0],Lightness:[100,0]},CoolTones:{Saturation:[39,30],Lightness:[69,31]},Metallics:{Saturation:[10,0],Lightness:[80,50]},PrimaryColors:{Saturation:[39,30],Lightness:[69,41]},SpringHues:{Saturation:[52,40],Lightness:[79,61]},SunsetHues:{Saturation:[39,30],Lightness:[64,46]},OceanicBlues:{Saturation:[29,20],Lightness:[64,41]},FrostyTones:{Saturation:[14,1],Lightness:[99,81]},AutumnShades:{Saturation:[18,10],Lightness:[59,30]},TropicalBrights:{Saturation:[74,55],Lightness:[68,51]},HerbalGreens:{Saturation:[29,20],Lightness:[68,41]},RoyalHues:{Saturation:[19,10],Lightness:[44,31]},VintagePastels:{Saturation:[52,40],Lightness:[84,71]},MidnightShades:{Saturation:[20,10],Lightness:[25,0]}},N=(r,e)=>j(r,e,!0),mt=(r,e)=>j(r,e),pt=(r,e)=>j(r,e),B=(r,e,a=[0,0,0],o=!0)=>{let c=o?r:100-r,n=o?100:0,l=o?r:-r;for(let u=c;o?u<n:u>n;u+=l)if(ft([e[0],e[1],u],a))return u;return o?0:100},ft=(r,e)=>{const a=z(r),o=z(e),c=F(a),n=F(o);return bt(c,n)>=4.5},z=r=>{const[e,a,o]=r.map((u,s)=>s===0?u/360:u/100);let c,n,l;if(a===0)c=n=l=o;else{const u=(h,m,d)=>(d<0&&(d+=1),d>1&&(d-=1),d<.16666666666666666?h+(m-h)*6*d:d<.5?m:d<.6666666666666666?h+(m-h)*(.6666666666666666-d)*6:h),s=o<.5?o*(1+a):o+a-o*a,t=2*o-s;c=u(t,s,e+1/3),n=u(t,s,e),l=u(t,s,e-1/3)}return[Math.round(c*255),Math.round(n*255),Math.round(l*255)]},V=r=>{let[e,a,o]=r.map(t=>t/255),c=Math.max(e,a,o),n=Math.min(e,a,o),l,u,s=(c+n)/2;if(c===n)l=u=0;else{let t=c-n;u=s>.5?t/(2-c-n):t/(c+n),c===e?l=(a-o)/t+(a<o?6:0):c===a?l=(o-e)/t+2:l=(e-a)/t+4,l*=60,l<0&&(l+=360)}return[Math.round(l),Math.round(u*100),Math.round(s*100)]},F=r=>{const[e,a,o]=r.map(c=>(c/=255,c<=.03928?c/12.92:Math.pow((c+.055)/1.055,2.4)));return .2126*e+.7152*a+.0722*o},bt=(r,e)=>{const a=Math.max(r,e),o=Math.min(r,e);return(a+.05)/(o+.05)},G=(r,e)=>{const a=Math.abs(r-e);return Math.min(a,360-a)},X=(r,e)=>Math.abs(r-e),j=(r,e,a=!1)=>{let o=r[0][0],c=Number.MAX_VALUE;return r.forEach(n=>{let l=n[0],u=Number.MAX_VALUE;for(let t=n[0];t<=n[1];t++){const h=a?G(e,t):X(e,t);h<u&&(u=h,l=t)}const s=a?G(e,l):X(e,l);s<c&&(c=s,o=l)}),o},Z=(r,e)=>{const[a,o,c]=r,n=o<=e.Saturation[0]&&o>=e.Saturation[1],l=c<=e.Lightness[0]&&c>=e.Lightness[1];return n&&l},Q=(r,e)=>{const[a,o,c]=r,n=Math.abs(o-(e.Saturation[0]+e.Saturation[1])/2),l=Math.abs(c-(e.Lightness[0]+e.Lightness[1])/2);return n+l},yt=r=>{let e=null,a=Number.MAX_VALUE;for(const o of Object.values(Y))if(Z(r,o)){const c=Q(r,o);c<a&&(a=c,e=o)}return e},vt=r=>{let e=null,a=Number.MAX_VALUE;for(const[o,c]of Object.entries(Y))if(Z(r,c)){const n=Q(r,c);n<a&&(a=n,e=o)}return e};class St{constructor(e=null){this.defaultSettings={infoDegree:180,tintBaseSaturation:10,tintScaleFactor:0,step:5,detectPrimaryColorCategory:!0,contrastSensitiveLightness:!1},this.settings={...this.defaultSettings,...e}}generate(e,a=null){this.updateSettings(a);const o=this.calculatePalette(e),c=this.calculateContrastThresholds(o),n=this.calculateLightness(o,c),l=this.calculateVariations(o,n),u=this.calculateTextContrastThresholds(o,l),s=this.calculateTextLightness(u);return{palette:o,contrastThresholds:c,lightness:n,variations:l,textContrastThresholds:u,textLightness:s,category:vt(e)||"Custom",export:(h="")=>this.export(h,o,c,n,s),exportAsObject:()=>this.exportAsObject(o,c,n,s)}}updateSettings(e){this.settings={...this.settings,...e}}calculatePalette(e){const a=this.settings,[o,c,n]=e,l=yt(e),u=a.detectPrimaryColorCategory&&l?mt([l.Saturation],c):c,s=a.detectPrimaryColorCategory&&l?pt([l.Lightness],n):n,h=[(o+ +a.infoDegree)%360,u,s],d=[N([[90,150]],o),u,s],b=[N([[0,15],[345,360]],o),u,s],p=[N([[15,60]],o),u,s],y=[o,a.tintBaseSaturation+Math.log(c+1)/Math.log(101)*a.tintScaleFactor,90];return{primary:e,info:h,success:d,danger:b,warning:p,default:y}}calculateContrastThresholds(e){const a=+this.settings.step,o={};for(const[c,n]of Object.entries(e))o[c]=B(a,n);return o}calculateLightness(e,a){const o=+this.settings.step,c={},n=85;if(this.settings.contrastSensitiveLightness)for(const[l,u]of Object.entries(a))if(l==="default")c[l]={base:90,dark:85,light:95,alt:95};else{const s=Math.abs(u-o),t=Math.abs(s-o),h=Math.abs(t-o);c[l]={base:Math.min(n,Math.max(o,t)),dark:Math.min(n,Math.max(o,h)),light:Math.min(n,Math.max(o,s)),alt:95}}else for(const[l,u]of Object.entries(e)){if(l==="default"){c[l]={base:90,dark:85,light:95,alt:95};continue}const s=u[2];let t=Math.round(s/o)*o;t=Math.min(n,Math.max(o,t)),t===n-o?t-=o:t===o&&(t+=o);let h=t,m=Math.min(n,t+o),d=Math.max(o,t-o);c[l]={light:m,base:h,dark:d,alt:95}}return c}calculateVariations(e,a){const o={};for(const[c,n]of Object.entries(e))o[c]={base:[n[0],n[1],a[c].base],light:[n[0],n[1],a[c].light],dark:[n[0],n[1],a[c].dark],alt:[n[0],n[1],95]};return o}calculateTextContrastThresholds(e,a){const o=Math.min(+this.settings.step,10),c={light:[e.primary[0],e.primary[1],96],dark:[e.primary[0],e.primary[1],12],"dark-pure":[0,0,15]},n=[a.default.light,a.default.base,a.default.dark],l={};for(const u of Object.keys(e)){l[u]={};for(const s of Object.keys(c)){let t=0;const h=B(o,e[u],c[s],s!=="light");if(t=s==="light"?h:Math.abs(100-o-h),u==="primary"){let m=[t];for(const d of n){const g=B(o,e[u],d,s!=="light");m.push(s==="light"?g:Math.abs(100-o-g))}t=Math.min(...m)}l[u][s]=t}}return l}calculateTextLightness(e){const a=Math.min(+this.settings.step,10),o={},c=85;for(const[n,l]of Object.entries(e)){o[n]={};for(const[u,s]of Object.entries(l)){let t,h,m;u==="light"?(m=s,t=Math.abs(m-a),h=Math.abs(t-a),o[n][u]={light:Math.min(c,Math.max(a,m)),base:Math.min(c,Math.max(a,t)),dark:Math.min(c,Math.max(a,h))}):(h=s,t=Math.abs(h-a),m=Math.abs(t-a),o[n][u]={light:Math.min(c,Math.max(a,h)),base:Math.min(c,Math.max(a,t)),dark:Math.min(c,Math.max(a,m))})}}return o}exportAsObject(e,a,o,c){const n={light:{},dark:{},"dark-pure":{}};for(const[l,u]of Object.entries(e))l==="default"?n.light[`--dwc-color-${l}-h`]="var(--dwc-color-primary-h)":n.light[`--dwc-color-${l}-h`]=`${u[0]}`,n.light[`--dwc-color-${l}-s`]=`${u[1]}%`,n.light[`--dwc-color-${l}-c`]=`${a[l]}`;for(const[l,u]of Object.entries(o))n.light[`--dwc-color-${l}-dark`]=`var(--dwc-color-${l}-${u.dark})`,n.light[`--dwc-color-on-${l}-text-dark`]=`var(--dwc-color-${l}-text-${u.dark})`,n.light[`--dwc-color-${l}`]=`var(--dwc-color-${l}-${u.base})`,n.light[`--dwc-color-on-${l}-text`]=`var(--dwc-color-${l}-text-${u.base})`,n.light[`--dwc-color-${l}-light`]=`var(--dwc-color-${l}-${u.light})`,n.light[`--dwc-color-on-${l}-text-light`]=`var(--dwc-color-${l}-text-${u.light})`;for(const[l,u]of Object.entries(c))for(const[s,t]of Object.entries(u))n[s][`--dwc-color-${l}-text-dark`]=`var(--dwc-color-${l}-${t.dark})`,n[s][`--dwc-color-${l}-text`]=`var(--dwc-color-${l}-${t.base})`,n[s][`--dwc-color-${l}-text-light`]=`var(--dwc-color-${l}-${t.light})`;return n.dark["--dwc-color-default-s"]=e.default[1]*.3+"%",n["dark-pure"]["--dwc-color-default-s"]="3%",n}export(e,a,o,c,n){const{light:l,dark:u,"dark-pure":s}=this.exportAsObject(a,o,c,n),t=e!=null&&e.trim()?`[data-app-theme~="${e}"]`:":root",h=e!=null&&e.trim()?`
html[data-app-theme="${e}-dark"],
html[data-app-theme~='dark'],
html[data-app-theme~='dark-pure']`:`
html[data-app-theme~='dark'],
html[data-app-theme~='dark-pure']`,m=e!=null&&e.trim()?`
html[data-app-theme="${e}-dark-pure"],
html[data-app-theme~='dark-pure']`:"html[data-app-theme~='dark-pure']";return(this.compileTheme(t,l)+`
`+this.compileTheme(h,u)+`

`+this.compileTheme(m,s)).trim()}compileTheme(e,a){const o=Object.entries(a).reduce((c,[n,l])=>c+`${n}: ${l};
`,"");return o?`${e} {
${this.indentString(o)}
}`:""}indentString(e){return e.trim().split(`
`).map(n=>"  "+n).join(`
`)}}const Ct=r=>{tt.value=r.toString()},Lt=()=>document.querySelector(".input--baseSaturation .input__editbox"),tt=Lt();tt.addEventListener("dwc-modified",r=>{const e=+r.target.value;$({tintBaseSaturation:e})});const W=r=>r.slice(0,1).toUpperCase()+r.slice(1),R=r=>{const e=document.createElement("textarea");e.value=r,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)},wt=()=>{const r=Math.floor(Math.random()*360),e=Math.floor(Math.random()*100),a=Math.floor(Math.random()*100);return[r,e,a]},xt=()=>-360+30*Math.floor(Math.random()*25),U=(r,e=3e3)=>{const a=document.createElement("dwc-toast");a.theme="gray",a.message=r,document.body.appendChild(a),a.opened=!0,a.duration=e},et='<dwc-icon name="check"></dwc-icon>&nbsp; &nbsp; Copied successfully to the clipboard',Mt='<dwc-icon name="check"></dwc-icon>&nbsp; &nbsp; Shareable link copied successfully to the clipboard',$t=()=>{const r=v.result,e=document.querySelector(".generated__swatchColors"),a=document.querySelector(".exportedTheme"),o=document.querySelector(".generated__paletteColorsTitle");e.innerHTML="",o.dataset.category=`${r.category}`,a.innerText=r.export().replace(/\n/g,""),Object.keys(r.palette).forEach(n=>{const l=document.createElement("div");l.className="layout layout--inline",["dark","base","light","alt"].forEach(u=>{const s=document.createElement("div");s.className=`generated__color generated__color--${n} generated__color--${n}-${u}`,s.style.backgroundColor=`var(--dwc-color-${n}${u=="base"?"":"-"+u})`,s.style.color=`var(--dwc-color-on-${n}-text${u=="base"?"":"-"+u})`,r.variations[n][u];const t=r.variations[n][u].map(Math.round);v.darkTheme&&(t[1]=parseInt(window.getComputedStyle(document.documentElement).getPropertyValue("--dwc-color-default-s")),t[2]=Math.abs(t[2]-100),n=="default"&&u!="alt"&&(t[2]+=10));const m=`hsl(${t[0]}, ${t[1]}%, ${t[2]}%)`;s.innerHTML=`
        ${W(n)} ${W(u)}
        <br />
        <small>${m}</small>`,s.addEventListener("click",()=>{R(m),U(et)}),l.appendChild(s)}),e.appendChild(l)})},rt=document.querySelector(".input--step .input__slider");rt.addEventListener("dwc-slide",r=>{$({step:r.detail.value})});const kt=r=>{rt.value=r};let v={primary:[0,0,0],infoDegree:180,detectPrimaryColorCategory:!0,contrastSensitiveLightness:!1,tintBaseSaturation:10,darkTheme:!1,shareUrl:"",step:5,result:null};function $(r){v={...v,...r};const e=new St().generate(v.primary,{infoDegree:v.infoDegree,detectPrimaryColorCategory:v.detectPrimaryColorCategory,contrastSensitiveLightness:v.contrastSensitiveLightness,tintBaseSaturation:v.tintBaseSaturation,step:v.step});v.result=e,Pt(e.palette.primary),Ot(v.infoDegree),Ct(v.tintBaseSaturation),Dt(v.detectPrimaryColorCategory),Rt(v.contrastSensitiveLightness),dt(v.darkTheme),kt(v.step),v.shareUrl=ot(),$t()}const ot=()=>{const r=new URL(window.location.href);return r.searchParams.set("p",v.primary.join(",")),r.searchParams.set("d",v.infoDegree.toString()),r.searchParams.set("b",v.tintBaseSaturation.toString()),r.searchParams.set("dc",v.detectPrimaryColorCategory?"1":"0"),r.searchParams.set("csl",v.contrastSensitiveLightness?"1":"0"),r.searchParams.set("t",v.darkTheme?"d":"l"),r.searchParams.set("s",v.step.toString()),r.toString()},_t=(r={})=>{const e=new URL(window.location.href),a=e.searchParams.get("p"),o=e.searchParams.get("d"),c=e.searchParams.get("b"),n=e.searchParams.get("dc"),l=e.searchParams.get("csl"),u=e.searchParams.get("t"),s=e.searchParams.get("s"),t={primary:a?a.split(",").map(h=>+h):r.primary,infoDegree:o?+o:r.infoDegree||180,tintBaseSaturation:c?+c:r.tintBaseSaturation||10,detectPrimaryColorCategory:n?n==="1":r.detectPrimaryColorCategory||!0,contrastSensitiveLightness:l?l==="1":r.contrastSensitiveLightness||!1,darkTheme:u?u==="d":r.darkTheme||!1,step:s?+s:r.step||5};return window.history.replaceState({},"",window.location.pathname),t},Tt=()=>document.querySelector(".input--colorCategory .input__radio"),nt=Tt();nt.addEventListener("dwc-changed",r=>{const e=r.target.checked;$({detectPrimaryColorCategory:e})});const Dt=r=>{nt.checked=r},Et=()=>document.querySelector(".input--primary .input__editbox"),st=()=>document.querySelector("dwc-color-chooser"),at=st();at.swatches=[{name:"Material Colors",colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#cddc39","#ffeb3b","#ffc107","#ff9800","#ff5722","#795548","#9e9e9e","#607d8b"]}];at.addEventListener("dwc-changed",r=>{const a=r.detail.toHsl();$({primary:[a.h,a.s*100,a.l*100].map(Math.round)})});const Pt=r=>{const e=Et(),a=st();e.value=a.value=`hsl(${r[0]}, ${r[1]}%, ${r[2]}%)`},Ot=r=>{it.value=r.toString()},It=()=>document.querySelector(".input--infoDegree .input__editbox"),it=It();it.addEventListener("dwc-modified",r=>{const e=r.target.value;$({infoDegree:e})});const At=document.querySelector(".exportDialog"),qt=document.querySelector(".header__export"),Nt=document.querySelector(".exportDialog__copyArea"),Bt=document.querySelector(".exportDialog__copyButton"),J=document.querySelector(".exportDialog__nameInput .input__editbox");let Ht="",H="";const ct=r=>{H=v.result.export(r),Nt.value=H};qt.addEventListener("click",()=>{ct(Ht),lt(!0)});Bt.addEventListener("click",()=>{R(H),lt(!1),U(et)});J.addEventListener("dwc-modified",()=>{let r=J.value.replace(/\s+/g,"-").replace(/[^a-zA-Z0-9-]/g,"");/^-+$/.test(r)&&(r=":root"),ct(r.toLowerCase())});const lt=r=>{At.opened=r},jt=()=>document.querySelector(".input--colorLightness .input__radio"),ut=jt();ut.addEventListener("dwc-changed",r=>{const e=r.target.checked;$({contrastSensitiveLightness:e})});const Rt=r=>{ut.checked=r},ht=()=>document.querySelector(".header__themeSwitcher"),Ut="moon-stars",zt="sun-high",Vt=ht();Vt.addEventListener("click",()=>{const r=v.darkTheme;dt(!r),$({darkTheme:!r})});const dt=r=>{document.documentElement.setAttribute("data-app-theme",r?"dark":"light"),ht().setAttribute("name",r?Ut:zt)},I=document.querySelector(".header__random");I.addEventListener("click",()=>{I.classList.add("header__random--rolling"),I.addEventListener("animationend",function(){I.classList.remove("header__random--rolling");const r=wt(),e=xt();$({primary:r,infoDegree:e})},{once:!0})});const Ft=document.querySelector(".header__share");Ft.addEventListener("click",()=>{R(ot()),U(Mt)});if(!T)var T={map:function(r,e){var a={};return e?r.map(function(o,c){return a.index=c,e.call(a,o)}):r.slice()},naturalOrder:function(r,e){return r<e?-1:r>e?1:0},sum:function(r,e){var a={};return r.reduce(e?function(o,c,n){return a.index=n,o+e.call(a,c)}:function(o,c){return o+c},0)},max:function(r,e){return Math.max.apply(null,e?T.map(r,e):r)}};var Gt=function(){var r=5,e=8-r,a=1e3;function o(s,t,h){return(s<<2*r)+(t<<r)+h}function c(s){var t=[],h=!1;function m(){t.sort(s),h=!0}return{push:function(d){t.push(d),h=!1},peek:function(d){return h||m(),d===void 0&&(d=t.length-1),t[d]},pop:function(){return h||m(),t.pop()},size:function(){return t.length},map:function(d){return t.map(d)},debug:function(){return h||m(),t}}}function n(s,t,h,m,d,g,b){var f=this;f.r1=s,f.r2=t,f.g1=h,f.g2=m,f.b1=d,f.b2=g,f.histo=b}function l(){this.vboxes=new c(function(s,t){return T.naturalOrder(s.vbox.count()*s.vbox.volume(),t.vbox.count()*t.vbox.volume())})}function u(s,t){if(t.count()){var h=t.r2-t.r1+1,m=t.g2-t.g1+1,d=T.max([h,m,t.b2-t.b1+1]);if(t.count()==1)return[t.copy()];var g,b,f,p,y=0,S=[],C=[];if(d==h)for(g=t.r1;g<=t.r2;g++){for(p=0,b=t.g1;b<=t.g2;b++)for(f=t.b1;f<=t.b2;f++)p+=s[o(g,b,f)]||0;S[g]=y+=p}else if(d==m)for(g=t.g1;g<=t.g2;g++){for(p=0,b=t.r1;b<=t.r2;b++)for(f=t.b1;f<=t.b2;f++)p+=s[o(b,g,f)]||0;S[g]=y+=p}else for(g=t.b1;g<=t.b2;g++){for(p=0,b=t.r1;b<=t.r2;b++)for(f=t.g1;f<=t.g2;f++)p+=s[o(b,f,g)]||0;S[g]=y+=p}return S.forEach(function(L,w){C[w]=y-L}),function(L){var w,k,x,E,M,D=L+"1",_=L+"2",q=0;for(g=t[D];g<=t[_];g++)if(S[g]>y/2){for(x=t.copy(),E=t.copy(),M=(w=g-t[D])<=(k=t[_]-g)?Math.min(t[_]-1,~~(g+k/2)):Math.max(t[D],~~(g-1-w/2));!S[M];)M++;for(q=C[M];!q&&S[M-1];)q=C[--M];return x[_]=M,E[D]=x[_]+1,[x,E]}}(d==h?"r":d==m?"g":"b")}}return n.prototype={volume:function(s){var t=this;return t._volume&&!s||(t._volume=(t.r2-t.r1+1)*(t.g2-t.g1+1)*(t.b2-t.b1+1)),t._volume},count:function(s){var t=this,h=t.histo;if(!t._count_set||s){var m,d,g,b=0;for(m=t.r1;m<=t.r2;m++)for(d=t.g1;d<=t.g2;d++)for(g=t.b1;g<=t.b2;g++)b+=h[o(m,d,g)]||0;t._count=b,t._count_set=!0}return t._count},copy:function(){var s=this;return new n(s.r1,s.r2,s.g1,s.g2,s.b1,s.b2,s.histo)},avg:function(s){var t=this,h=t.histo;if(!t._avg||s){var m,d,g,b,f=0,p=1<<8-r,y=0,S=0,C=0;for(d=t.r1;d<=t.r2;d++)for(g=t.g1;g<=t.g2;g++)for(b=t.b1;b<=t.b2;b++)f+=m=h[o(d,g,b)]||0,y+=m*(d+.5)*p,S+=m*(g+.5)*p,C+=m*(b+.5)*p;t._avg=f?[~~(y/f),~~(S/f),~~(C/f)]:[~~(p*(t.r1+t.r2+1)/2),~~(p*(t.g1+t.g2+1)/2),~~(p*(t.b1+t.b2+1)/2)]}return t._avg},contains:function(s){var t=this,h=s[0]>>e;return gval=s[1]>>e,bval=s[2]>>e,h>=t.r1&&h<=t.r2&&gval>=t.g1&&gval<=t.g2&&bval>=t.b1&&bval<=t.b2}},l.prototype={push:function(s){this.vboxes.push({vbox:s,color:s.avg()})},palette:function(){return this.vboxes.map(function(s){return s.color})},size:function(){return this.vboxes.size()},map:function(s){for(var t=this.vboxes,h=0;h<t.size();h++)if(t.peek(h).vbox.contains(s))return t.peek(h).color;return this.nearest(s)},nearest:function(s){for(var t,h,m,d=this.vboxes,g=0;g<d.size();g++)((h=Math.sqrt(Math.pow(s[0]-d.peek(g).color[0],2)+Math.pow(s[1]-d.peek(g).color[1],2)+Math.pow(s[2]-d.peek(g).color[2],2)))<t||t===void 0)&&(t=h,m=d.peek(g).color);return m},forcebw:function(){var s=this.vboxes;s.sort(function(d,g){return T.naturalOrder(T.sum(d.color),T.sum(g.color))});var t=s[0].color;t[0]<5&&t[1]<5&&t[2]<5&&(s[0].color=[0,0,0]);var h=s.length-1,m=s[h].color;m[0]>251&&m[1]>251&&m[2]>251&&(s[h].color=[255,255,255])}},{quantize:function(s,t){if(!s.length||t<2||t>256)return!1;var h=function(p){var y,S=new Array(1<<3*r);return p.forEach(function(C){y=o(C[0]>>e,C[1]>>e,C[2]>>e),S[y]=(S[y]||0)+1}),S}(s);h.forEach(function(){});var m=function(p,y){var S,C,L,w=1e6,k=0,x=1e6,E=0,M=1e6,D=0;return p.forEach(function(_){(S=_[0]>>e)<w?w=S:S>k&&(k=S),(C=_[1]>>e)<x?x=C:C>E&&(E=C),(L=_[2]>>e)<M?M=L:L>D&&(D=L)}),new n(w,k,x,E,M,D,y)}(s,h),d=new c(function(p,y){return T.naturalOrder(p.count(),y.count())});function g(p,y){for(var S,C=p.size(),L=0;L<a;){if(C>=y||L++>a)return;if((S=p.pop()).count()){var w=u(h,S),k=w[0],x=w[1];if(!k)return;p.push(k),x&&(p.push(x),C++)}else p.push(S),L++}}d.push(m),g(d,.75*t);for(var b=new c(function(p,y){return T.naturalOrder(p.count()*p.volume(),y.count()*y.volume())});d.size();)b.push(d.pop());g(b,t);for(var f=new l;b.size();)f.push(b.pop());return f}}}().quantize,gt=function(r){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.width=this.canvas.width=r.naturalWidth,this.height=this.canvas.height=r.naturalHeight,this.context.drawImage(r,0,0,this.width,this.height)};gt.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)};var P=function(){};P.prototype.getColor=function(r,e){return e===void 0&&(e=10),this.getPalette(r,5,e)[0]},P.prototype.getPalette=function(r,e,a){var o=function(u){var s=u.colorCount,t=u.quality;if(s!==void 0&&Number.isInteger(s)){if(s===1)throw new Error("colorCount should be between 2 and 20. To get one color, call getColor() instead of getPalette()");s=Math.max(s,2),s=Math.min(s,20)}else s=10;return(t===void 0||!Number.isInteger(t)||t<1)&&(t=10),{colorCount:s,quality:t}}({colorCount:e,quality:a}),c=new gt(r),n=function(u,s,t){for(var h,m,d,g,b,f=u,p=[],y=0;y<s;y+=t)m=f[0+(h=4*y)],d=f[h+1],g=f[h+2],((b=f[h+3])===void 0||b>=125)&&(m>250&&d>250&&g>250||p.push([m,d,g]));return p}(c.getImageData().data,c.width*c.height,o.quality),l=Gt(n,o.colorCount);return l?l.palette():null},P.prototype.getColorFromUrl=function(r,e,a){var o=this,c=document.createElement("img");c.addEventListener("load",function(){var n=o.getPalette(c,5,a);e(n[0],r)}),c.src=r},P.prototype.getImageData=function(r,e){var a=new XMLHttpRequest;a.open("GET",r,!0),a.responseType="arraybuffer",a.onload=function(){if(this.status==200){var o=new Uint8Array(this.response);i=o.length;for(var c=new Array(i),n=0;n<o.length;n++)c[n]=String.fromCharCode(o[n]);var l=c.join(""),u=window.btoa(l);e("data:image/png;base64,"+u)}},a.send()},P.prototype.getColorAsync=function(r,e,a){var o=this;this.getImageData(r,function(c){var n=document.createElement("img");n.addEventListener("load",function(){var l=o.getPalette(n,5,a);e(l[0],this)}),n.src=c})};const K=new P,Xt=r=>new Promise(e=>{r.complete?e():r.addEventListener("load",()=>{e()})}),Wt=(r,e)=>{let a=e[0]-r[0];return a<0&&(a+=360),a},A=document.querySelector(".drawer__logo img"),O=document.createElement("input");O.type="file";O.style.display="none";O.addEventListener("change",r=>{const e=r.target.files[0],a=new FileReader;a.onload=o=>{const c=o.target.result;A.setAttribute("src",c),Xt(A).then(()=>{const n=V(K.getColor(A)),l=K.getPalette(A,[3,9]).map(s=>V(s)).filter(s=>JSON.stringify(s)!==JSON.stringify(n)),u=Wt(n,l[0]);console.log("color",n),console.log("palette",l),console.log("degree",u),$({primary:n,infoDegree:u})})},a.readAsDataURL(e)});document.body.appendChild(O);const Jt=document.querySelector(".header__upload");Jt.addEventListener("click",()=>{O.click()});$(_t({primary:[231,48,48]}));
