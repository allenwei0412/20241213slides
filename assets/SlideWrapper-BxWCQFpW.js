import{t as T,z as k,B as X,R as fe,U as yt,ax as pe,N as re,y as ve,n as ge,E as se,d as vt,o as Z,b as rt,g as xe,ay as me,az as ye,aA as G,K as we,e as it,f as Lt,h as U,v as _e,ab as Se,l as It,c as be,ap as Pe,i as Ee}from"./modules/vue-CtmafLwY.js";import{P as ie,a as $t,q as bt,Y as wt,Z as Nt,$ as Me,X as $e,a0 as Q,a1 as Ce,a2 as ke,a3 as qt,J as jt,y as zt,z as Rt,Q as De,a4 as Ae,_ as Ct,a5 as Le,a6 as Ie,a7 as Ne,a8 as qe,a9 as je,aa as ze,ab as Re}from"./index-BkLUPw8K.js";import{u as Te}from"./slidev/context-CJPMt1NT.js";import{g as Xe,a as Fe}from"./modules/file-saver-DpJRZIvx.js";function Ke(t){var e;return{info:T(((e=ie(t))==null?void 0:e.meta.slide)??null),update:async()=>{}}}const _t={};function ar(t){function e(n){return _t[n]??(_t[n]=Ke(n))}return{info:k({get(){return e(X(t)).info.value},set(n){e(X(t)).info.value=n}}),update:async(n,s)=>{const o=e(s??X(t)),l=await o.update(n);return l&&(o.info.value=l),l}}}var Oe=Object.defineProperty,Tt=Object.getOwnPropertySymbols,Be=Object.prototype.hasOwnProperty,Ge=Object.prototype.propertyIsEnumerable,Xt=(t,e,n)=>e in t?Oe(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Pt=(t,e)=>{for(var n in e||(e={}))Be.call(e,n)&&Xt(t,n,e[n]);if(Tt)for(var n of Tt(e))Ge.call(e,n)&&Xt(t,n,e[n]);return t},Ue=()=>({emit(t,...e){for(let n=this.events[t]||[],s=0,o=n.length;s<o;s++)n[s](...e)},events:{},on(t,e){var n;return((n=this.events)[t]||(n[t]=[])).push(e),()=>{var s;this.events[t]=(s=this.events[t])==null?void 0:s.filter(o=>e!==o)}}});function ft(t,e){return t-e}function Ve(t){return t<0?-1:1}function pt(t){return[Math.abs(t),Ve(t)]}function oe(){const t=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${t()+t()}-${t()}-${t()}-${t()}-${t()}${t()}${t()}`}var He=2,K=He;function ae(t,e){const n=document.createElementNS("http://www.w3.org/2000/svg","defs"),s=document.createElementNS("http://www.w3.org/2000/svg","marker"),o=document.createElementNS("http://www.w3.org/2000/svg","path");return o.setAttribute("fill",e),s.setAttribute("id",t),s.setAttribute("viewBox","0 -5 10 10"),s.setAttribute("refX","5"),s.setAttribute("refY","0"),s.setAttribute("markerWidth","4"),s.setAttribute("markerHeight","4"),s.setAttribute("orient","auto"),o.setAttribute("d","M0,-5L10,0L0,5"),s.appendChild(o),n.appendChild(s),n}function Ye(t,e){const n=t.x-e.x,s=t.y-e.y;return n*n+s*s}function Ze(t,e,n){let s=e.x,o=e.y,l=n.x-s,f=n.y-o;if(l!==0||f!==0){const i=((t.x-s)*l+(t.y-o)*f)/(l*l+f*f);i>1?(s=n.x,o=n.y):i>0&&(s+=l*i,o+=f*i)}return l=t.x-s,f=t.y-o,l*l+f*f}function Qe(t,e){let n=t[0];const s=[n];let o;for(let l=1,f=t.length;l<f;l++)o=t[l],Ye(o,n)>e&&(s.push(o),n=o);return n!==o&&o&&s.push(o),s}function Et(t,e,n,s,o){let l=s,f=0;for(let i=e+1;i<n;i++){const r=Ze(t[i],t[e],t[n]);r>l&&(f=i,l=r)}l>s&&(f-e>1&&Et(t,e,f,s,o),o.push(t[f]),n-f>1&&Et(t,f,n,s,o))}function Je(t,e){const n=t.length-1,s=[t[0]];return Et(t,0,n,e,s),s.push(t[n]),s}function Ft(t,e,n=!1){if(t.length<=2)return t;const s=e*e;return t=n?t:Qe(t,s),t=Je(t,s),t}var J=class{constructor(t){this.drauu=t,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(t){}onUnselected(){}onStart(t){}onMove(t){return!1}onEnd(t){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(t){var e,n,s;const o=this.drauu.el,l=(e=this.drauu.options.coordinateScale)!=null?e:1,f=(n=this.drauu.options.offset)!=null?n:{x:0,y:0};if(this.drauu.options.coordinateTransform===!1){const i=this.drauu.el.getBoundingClientRect();return{x:(t.pageX-i.left+f.x)*l,y:(t.pageY-i.top+f.y)*l,pressure:t.pressure}}else{const i=this.drauu.svgPoint;i.x=t.clientX+f.x,i.y=t.clientY+f.y;const r=i.matrixTransform((s=o.getScreenCTM())==null?void 0:s.inverse());return{x:r.x*l,y:r.y*l,pressure:t.pressure}}}createElement(t,e){var n;const s=document.createElementNS("http://www.w3.org/2000/svg",t),o=e?Pt(Pt({},this.brush),e):this.brush;return s.setAttribute("fill",(n=o.fill)!=null?n:"transparent"),s.setAttribute("stroke",o.color),s.setAttribute("stroke-width",o.size.toString()),s.setAttribute("stroke-linecap","round"),o.dasharray&&s.setAttribute("stroke-dasharray",o.dasharray),s}attr(t,e){this.el.setAttribute(t,typeof e=="string"?e:e.toFixed(K))}_setEvent(t){this.event=t,this.point=this.getMousePosition(t)}_eventDown(t){return this._setEvent(t),this.start=this.point,this.onStart(this.point)}_eventMove(t){return this._setEvent(t),this.onMove(this.point)}_eventUp(t){return this._setEvent(t),this.onEnd(this.point)}},We=class H extends J{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=oe();const n=ae(this.arrowId,this.brush.color);this.el.appendChild(n)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=Ft(this.points,1,!0),this.count=0),this.attr("d",H.toSvgData(this.points)),!0}onEnd(){const e=this.el;if(this.el=null,!e)return!1;if(e.setAttribute("d",H.toSvgData(Ft(this.points,1,!0))),!e.getTotalLength()){const{x:n,y:s}=this.points[0],o=this.brush.size/2;e.setAttribute("d",`M ${n-o} ${s} a ${o},${o} 0 1,0 ${o*2},0 a ${o},${o} 0 1,0 ${-o*2},0`),e.setAttribute("fill",this.brush.color),e.setAttribute("stroke-width","0")}return!0}static line(e,n){const s=n.x-e.x,o=n.y-e.y;return{length:Math.sqrt(s**2+o**2),angle:Math.atan2(o,s)}}static controlPoint(e,n,s,o){const l=n||e,f=s||e,i=.2,r=H.line(l,f),u=r.angle+(o?Math.PI:0),d=r.length*i,a=e.x+Math.cos(u)*d,c=e.y+Math.sin(u)*d;return{x:a,y:c}}static bezierCommand(e,n,s){const o=H.controlPoint(s[n-1],s[n-2],e),l=H.controlPoint(e,s[n-1],s[n+1],!0);return`C ${o.x.toFixed(K)},${o.y.toFixed(K)} ${l.x.toFixed(K)},${l.y.toFixed(K)} ${e.x.toFixed(K)},${e.y.toFixed(K)}`}static toSvgData(e){return e.reduce((n,s,o,l)=>o===0?`M ${s.x.toFixed(K)},${s.y.toFixed(K)}`:`${n} ${H.bezierCommand(s,o,l)}`,"")}},tn=class extends J{onStart(t){return this.el=this.createElement("ellipse"),this.attr("cx",t.x),this.attr("cy",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[e,n]=pt(t.x-this.start.x),[s,o]=pt(t.y-this.start.y);if(this.shiftPressed){const l=Math.min(e,s);e=l,s=l}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",e),this.attr("ry",s);else{const[l,f]=[this.start.x,this.start.x+e*n].sort(ft),[i,r]=[this.start.y,this.start.y+s*o].sort(ft);this.attr("cx",(l+f)/2),this.attr("cy",(i+r)/2),this.attr("rx",(f-l)/2),this.attr("ry",(r-i)/2)}return!0}onEnd(){const t=this.el;if(this.el=null,!t)return!1;try{if(!t.getTotalLength())return!1}catch{return!1}return!0}},en=class extends J{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[],this._erased=[]}onSelected(t){const e=(n,s)=>{if(n&&n.length)for(let o=0;o<n.length;o++){const l=n[o];if(l.getTotalLength){const f=l.getTotalLength();for(let i=0;i<this.pathSubFactor;i++){const r=l.getPointAtLength(f*i/this.pathSubFactor),u=l.getPointAtLength(f*(i+1)/this.pathSubFactor);this.pathFragments.push({x1:r.x,x2:u.x,y1:r.y,y2:u.y,segment:i,element:s||l})}}else l.children&&e(l.children,l)}};t&&e(t.children)}onUnselected(){this.pathFragments=[]}onStart(t){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=t.x,this.svgPointPrevious.y=t.y}onMove(t){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=t.x,this.svgPointCurrent.y=t.y;const e=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,e}onEnd(){this.svgPointPrevious=void 0,this.svgPointCurrent=void 0;const t=this._erased;return this._erased=[],{undo:()=>t.forEach(e=>this.drauu._restoreNode(e)),redo:()=>t.forEach(e=>this.drauu._removeNode(e))}}checkAndEraseElement(){if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const e=this.pathFragments[t];if(this.svgPointPrevious&&this.svgPointCurrent){const n={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(e,n)&&(this.drauu._removeNode(e.element),this._erased.push(e.element))}}return this._erased.length&&(this.pathFragments=this.pathFragments.filter(t=>!this._erased.includes(t.element))),this._erased.length>0}lineLineIntersect(t,e){const n=t.x1,s=t.x2,o=e.x1,l=e.x2,f=t.y1,i=t.y2,r=e.y1,u=e.y2,d=(n-s)*(r-u)-(f-i)*(o-l),a=(n*i-f*s)*(o-l)-(n-s)*(o*u-r*l),c=(n*i-f*s)*(r-u)-(f-i)*(o*u-r*l),h=(p,m,y)=>p>=m&&p<=y?!0:p>=y&&p<=m;if(d===0)return!1;{const p={x:a/d,y:c/d};return h(p.x,n,s)&&h(p.y,f,i)&&h(p.x,o,l)&&h(p.y,r,u)}}},nn=class extends J{onStart(t){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",t.x),this.attr("y1",t.y),this.attr("x2",t.x),this.attr("y2",t.y),this.brush.arrowEnd){const e=oe(),n=document.createElementNS("http://www.w3.org/2000/svg","g");return n.append(ae(e,this.brush.color)),n.append(this.el),this.attr("marker-end",`url(#${e})`),n}return this.el}onMove(t){if(!this.el)return!1;let{x:e,y:n}=t;if(this.shiftPressed){const s=t.x-this.start.x,o=t.y-this.start.y;if(o!==0){let l=s/o;l=Math.round(l),Math.abs(l)<=1?(e=this.start.x+o*l,n=this.start.y+o):(e=this.start.x+s,n=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-e),this.attr("y1",this.start.y*2-n),this.attr("x2",e),this.attr("y2",n)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",e),this.attr("y2",n)),!0}onEnd(){const t=this.el;if(this.el=null,!t)return!1;try{if(t.getTotalLength()<5)return!1}catch{return!1}return!0}},rn=class extends J{onStart(t){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",t.x),this.attr("y",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[e,n]=pt(t.x-this.start.x),[s,o]=pt(t.y-this.start.y);if(this.shiftPressed){const l=Math.min(e,s);e=l,s=l}if(this.altPressed)this.attr("x",this.start.x-e),this.attr("y",this.start.y-s),this.attr("width",e*2),this.attr("height",s*2);else{const[l,f]=[this.start.x,this.start.x+e*n].sort(ft),[i,r]=[this.start.y,this.start.y+s*o].sort(ft);this.attr("x",l),this.attr("y",i),this.attr("width",f-l),this.attr("height",r-i)}return!0}onEnd(){const t=this.el;if(this.el=null,!t)return!1;try{if(!t.getTotalLength())return!1}catch{return!1}return!0}};function Kt(t,e,n,s=o=>o){return t*s(.5-e*(.5-n))}function sn(t){return[-t[0],-t[1]]}function R(t,e){return[t[0]+e[0],t[1]+e[1]]}function j(t,e){return[t[0]-e[0],t[1]-e[1]]}function z(t,e){return[t[0]*e,t[1]*e]}function on(t,e){return[t[0]/e,t[1]/e]}function tt(t){return[t[1],-t[0]]}function Ot(t,e){return t[0]*e[0]+t[1]*e[1]}function an(t,e){return t[0]===e[0]&&t[1]===e[1]}function ln(t){return Math.hypot(t[0],t[1])}function un(t){return t[0]*t[0]+t[1]*t[1]}function Bt(t,e){return un(j(t,e))}function le(t){return on(t,ln(t))}function cn(t,e){return Math.hypot(t[1]-e[1],t[0]-e[0])}function et(t,e,n){let s=Math.sin(n),o=Math.cos(n),l=t[0]-e[0],f=t[1]-e[1],i=l*o-f*s,r=l*s+f*o;return[i+e[0],r+e[1]]}function Mt(t,e,n){return R(t,z(j(e,t),n))}function Gt(t,e,n){return R(t,z(e,n))}var{min:Y,PI:hn}=Math,Ut=.275,nt=hn+1e-4;function dn(t,e={}){let{size:n=16,smoothing:s=.5,thinning:o=.5,simulatePressure:l=!0,easing:f=S=>S,start:i={},end:r={},last:u=!1}=e,{cap:d=!0,easing:a=S=>S*(2-S)}=i,{cap:c=!0,easing:h=S=>--S*S*S+1}=r;if(t.length===0||n<=0)return[];let p=t[t.length-1].runningLength,m=i.taper===!1?0:i.taper===!0?Math.max(n,p):i.taper,y=r.taper===!1?0:r.taper===!0?Math.max(n,p):r.taper,_=Math.pow(n*s,2),w=[],g=[],v=t.slice(0,10).reduce((S,N)=>{let M=N.pressure;if(l){let $=Y(1,N.distance/n),gt=Y(1,1-$);M=Y(1,S+(gt-S)*($*Ut))}return(S+M)/2},t[0].pressure),x=Kt(n,o,t[t.length-1].pressure,f),P,b=t[0].vector,E=t[0].point,L=E,D=E,C=L,q=!1;for(let S=0;S<t.length;S++){let{pressure:N}=t[S],{point:M,vector:$,distance:gt,runningLength:W}=t[S];if(S<t.length-1&&p-W<3)continue;if(o){if(l){let B=Y(1,gt/n),mt=Y(1,1-B);N=Y(1,v+(mt-v)*(B*Ut))}x=Kt(n,o,N,f)}else x=n/2;P===void 0&&(P=x);let ce=W<m?a(W/m):1,he=p-W<y?h((p-W)/y):1;x=Math.max(.01,x*Math.min(ce,he));let kt=(S<t.length-1?t[S+1]:t[S]).vector,xt=S<t.length-1?Ot($,kt):1,de=Ot($,b)<0&&!q,Dt=xt!==null&&xt<0;if(de||Dt){let B=z(tt(b),x);for(let mt=1/13,st=0;st<=1;st+=mt)D=et(j(M,B),M,nt*st),w.push(D),C=et(R(M,B),M,nt*-st),g.push(C);E=D,L=C,Dt&&(q=!0);continue}if(q=!1,S===t.length-1){let B=z(tt($),x);w.push(j(M,B)),g.push(R(M,B));continue}let At=z(tt(Mt(kt,$,xt)),x);D=j(M,At),(S<=1||Bt(E,D)>_)&&(w.push(D),E=D),C=R(M,At),(S<=1||Bt(L,C)>_)&&(g.push(C),L=C),v=N,b=$}let A=t[0].point.slice(0,2),I=t.length>1?t[t.length-1].point.slice(0,2):R(t[0].point,[1,1]),O=[],F=[];if(t.length===1){if(!(m||y)||u){let S=Gt(A,le(tt(j(A,I))),-(P||x)),N=[];for(let M=1/13,$=M;$<=1;$+=M)N.push(et(S,A,nt*2*$));return N}}else{if(!(m||y&&t.length===1))if(d)for(let N=1/13,M=N;M<=1;M+=N){let $=et(g[0],A,nt*M);O.push($)}else{let N=j(w[0],g[0]),M=z(N,.5),$=z(N,.51);O.push(j(A,M),j(A,$),R(A,$),R(A,M))}let S=tt(sn(t[t.length-1].vector));if(y||m&&t.length===1)F.push(I);else if(c){let N=Gt(I,S,x);for(let M=1/29,$=M;$<1;$+=M)F.push(et(N,I,nt*3*$))}else F.push(R(I,z(S,x)),R(I,z(S,x*.99)),j(I,z(S,x*.99)),j(I,z(S,x)))}return w.concat(F,g.reverse(),O)}function fn(t,e={}){var n;let{streamline:s=.5,size:o=16,last:l=!1}=e;if(t.length===0)return[];let f=.15+(1-s)*.85,i=Array.isArray(t[0])?t:t.map(({x:h,y:p,pressure:m=.5})=>[h,p,m]);if(i.length===2){let h=i[1];i=i.slice(0,-1);for(let p=1;p<5;p++)i.push(Mt(i[0],h,p/4))}i.length===1&&(i=[...i,[...R(i[0],[1,1]),...i[0].slice(2)]]);let r=[{point:[i[0][0],i[0][1]],pressure:i[0][2]>=0?i[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],u=!1,d=0,a=r[0],c=i.length-1;for(let h=1;h<i.length;h++){let p=l&&h===c?i[h].slice(0,2):Mt(a.point,i[h],f);if(an(a.point,p))continue;let m=cn(p,a.point);if(d+=m,h<c&&!u){if(d<o)continue;u=!0}a={point:p,pressure:i[h][2]>=0?i[h][2]:.5,vector:le(j(a.point,p)),distance:m,runningLength:d},r.push(a)}return r[0].vector=((n=r[1])==null?void 0:n.vector)||[0,0],r}function pn(t,e={}){return dn(fn(t,e),e)}var vn=class ue extends J{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){return ue.getSvgData(e,this.brush)}static getSvgData(e,n){const s=pn(e,Pt({size:n.size,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5}},n.stylusOptions));if(!s.length)return"";const o=s.reduce((l,[f,i],r,u)=>{const[d,a]=u[(r+1)%u.length];return l.push(f,i,(f+d)/2,(i+a)/2),l},["M",...s[0],"Q"]);return o.push("Z"),o.map(l=>typeof l=="number"?l.toFixed(2):l).join(" ")}};function gn(t){return{draw:new We(t),stylus:new vn(t),line:new nn(t),rectangle:new rn(t),ellipse:new tn(t),eraseLine:new en(t)}}var xn=class{constructor(t={}){this.options=t,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=Ue(),this._originalPointerId=null,this._models=gn(this),this._opStack=[],this._opIndex=0,this._disposables=[],this._elements=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),t.el&&this.mount(t.el,t.eventTarget,t.window)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(t){this._models[this.mode].onUnselected(),this.options.brush.mode=t,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(t){this.options.brush=t}resolveSelector(t){return typeof t=="string"?document.querySelector(t):t||null}mount(t,e,n=window){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(t),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const s=this.resolveSelector(e)||this.el,o=this.eventStart.bind(this),l=this.eventMove.bind(this),f=this.eventEnd.bind(this),i=this.eventKeyboard.bind(this);s.addEventListener("pointerdown",o,{passive:!1}),n.addEventListener("pointermove",l,{passive:!1}),n.addEventListener("pointerup",f,{passive:!1}),n.addEventListener("pointercancel",f,{passive:!1}),n.addEventListener("keydown",i,!1),n.addEventListener("keyup",i,!1),this._disposables.push(()=>{s.removeEventListener("pointerdown",o),n.removeEventListener("pointermove",l),n.removeEventListener("pointerup",f),n.removeEventListener("pointercancel",f),n.removeEventListener("keydown",i,!1),n.removeEventListener("keyup",i,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(t=>t()),this._disposables.length=0,this._elements.length=0,this.el=null,this._emitter.emit("unmounted")}on(t,e){return this._emitter.on(t,e)}undo(){return!this.canUndo()||this.drawing?!1:(this._opStack[--this._opIndex].undo(),this._emitter.emit("changed"),!0)}redo(){return!this.canRedo()||this.drawing?!1:(this._opStack[this._opIndex++].redo(),this._emitter.emit("changed"),!0)}canRedo(){return this._opIndex<this._opStack.length}canUndo(){return this._opIndex>0}eventMove(t){!this.acceptsInput(t)||!this.drawing||this.model._eventMove(t)&&(t.stopPropagation(),t.preventDefault(),this._emitter.emit("changed"))}eventStart(t){this.acceptsInput(t)&&(t.stopPropagation(),t.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._originalPointerId=t.pointerId,this._emitter.emit("start"),this._currentNode=this.model._eventDown(t),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(t){if(!this.acceptsInput(t)||!this.drawing)return;const e=this.model._eventUp(t);if(!e)this.cancel();else if(e===!0){const n=this._currentNode;n&&(this._appendNode(n),this.commit({undo:()=>this._removeNode(n),redo:()=>this._restoreNode(n)}))}else this.commit(e);this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed"),this._originalPointerId=null}acceptsInput(t){return(!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(t.pointerType))&&!(this._originalPointerId&&this._originalPointerId!==t.pointerId)}eventKeyboard(t){this.shiftPressed===t.shiftKey&&this.altPressed===t.altKey||(this.shiftPressed=t.shiftKey,this.altPressed=t.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(t){this._opStack.length=this._opIndex,this._opStack.push(t),this._opIndex++;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._opStack.length=0,this._opIndex=0,this._elements=[],this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(t){this.clear(),this.el.innerHTML=t}_appendNode(t){const e=this._elements.at(-1);e?e.after(t):this.el.append(t);const n=this._elements.push(t)-1;t.dataset.drauu_index=n.toString()}_removeNode(t){t.remove(),this._elements[+t.dataset.drauu_index]=null}_restoreNode(t){const e=+t.dataset.drauu_index;this._elements[e]=t;for(let n=e-1;n>=0;n--){const s=this._elements[n];if(s){s.after(t);return}}this.el.prepend(t)}};function mn(t){return new xn(t)}const yn=fe(()=>{const{currentSlideNo:t,isPresenter:e}=$t(),n=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],s=yt("slidev-drawing-enabled",!1),o=yt("slidev-drawing-pinned",!1),l=pe(yt("slidev-drawing-brush",{color:n[0],size:4,mode:"stylus"})),f=T(!1),i=T(!1),r=T(!1),u=T(!1),d=T("stylus"),a=k(()=>bt.drawings.syncAll||e.value);let c=!1;const h=k({get(){return d.value},set(g){d.value=g,g==="arrow"?(m.mode="line",l.arrowEnd=!0):(m.mode=g,l.arrowEnd=!1)}}),p=re({brush:l,acceptsInputTypes:k(()=>s.value&&(!bt.drawings.presenterOnly||e.value)?void 0:["pen"]),coordinateTransform:!1}),m=ve(mn(p));function y(){m.clear(),a.value&&Nt(t.value,"")}function _(){var g;r.value=m.canRedo(),i.value=m.canUndo(),u.value=!!((g=m.el)!=null&&g.children.length)}function w(g){c=!0;const v=wt[g||t.value];v!=null?m.load(v):m.clear(),_(),c=!1}return m.on("changed",()=>{if(_(),!c){const g=m.dump(),v=t.value;(wt[v]||"")!==g&&a.value&&Nt(v,m.dump())}}),Me(g=>{c=!0,g[t.value]!=null&&m.load(g[t.value]||""),c=!1,_()}),ge(()=>{se(t,()=>{m.mounted&&w()},{immediate:!0})}),m.on("start",()=>f.value=!0),m.on("end",()=>f.value=!1),window.addEventListener("keydown",g=>{if(!s.value||$e.value)return;const v=!g.ctrlKey&&!g.altKey&&!g.shiftKey&&!g.metaKey;let x=!0;g.code==="KeyZ"&&(g.ctrlKey||g.metaKey)?g.shiftKey?m.redo():m.undo():g.code==="Escape"?s.value=!1:g.code==="KeyL"&&v?h.value="line":g.code==="KeyA"&&v?h.value="arrow":g.code==="KeyS"&&v?h.value="stylus":g.code==="KeyR"&&v?h.value="rectangle":g.code==="KeyE"&&v?h.value="ellipse":g.code==="KeyC"&&v?y():g.code.startsWith("Digit")&&v&&+g.code[5]<=n.length?l.color=n[+g.code[5]-1]:x=!1,x&&(g.preventDefault(),g.stopPropagation())},!1),{brush:l,brushColors:n,canClear:u,canRedo:r,canUndo:i,clear:y,drauu:m,drauuOptions:p,drawingEnabled:s,drawingMode:h,drawingPinned:o,drawingState:wt,isDrawing:f,loadCanvas:w}}),wn=["innerHTML"],lr=vt({__name:"DrawingPreview",props:{page:{}},setup(t){const{drawingState:e}=yn();return(n,s)=>X(e)[n.page]?(Z(),rt("svg",{key:0,class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:X(e)[n.page]},null,8,wn)):xe("",!0)}}),V=re({});let _n=[],Sn=[];Q(V,"$syncUp",!0);Q(V,"$syncDown",!0);Q(V,"$paused",!1);Q(V,"$onSet",t=>_n.push(t));Q(V,"$onPatch",t=>Sn.push(t));Ce();Q(V,"$patch",async()=>!1);const bn=ke(V,V,!0);class Pn{constructor(){this._capturePromises=new Map}getSnapshot(e){const n=bn.state[e];if(!n)return;const s=ie(e);if(s&&(n==null?void 0:n.revision)===(s==null?void 0:s.meta.slide.revision))return n.image}async captureSnapshot(e,n,s=1e3){}async _captureSnapshot(e,n,s){}}const Vt=new Pn,En=["id"],Mn=["id"],$n=["src"],Cn=vt({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},isMain:{type:Boolean,default:!1},no:{type:Number,required:!1},useSnapshot:{type:Boolean,default:!1}},setup(t){const e=t,{isPrintMode:n}=$t(),s=T(null),o=me(s),l=T(null),f=k(()=>e.width??o.width.value),i=k(()=>e.width?e.width/qt.value:o.height.value),r=k(()=>jt.value&&!n.value?+jt.value:Math.min(f.value/zt.value,i.value/Rt.value)),u=k(()=>({height:`${Rt.value}px`,width:`${zt.value}px`,transform:`translate(-50%, -50%) scale(${r.value})`,"--slidev-slide-scale":r.value})),d=k(()=>e.width?{width:`${e.width}px`,height:`${e.width/qt.value}px`}:{});e.isMain&&ye(k(()=>`:root { --slidev-slide-scale: ${r.value}; }`)),G(De,r),G(Ae,l);const a=k(()=>{if(!(!e.useSnapshot||e.no==null))return Vt.getSnapshot(e.no)});return we(()=>{s.value&&e.useSnapshot&&e.no!=null&&Vt.captureSnapshot(e.no,s.value)}),(c,h)=>a.value?(Z(),rt("img",{key:1,src:a.value,class:"w-full object-cover",style:U(d.value)},null,12,$n)):(Z(),rt("div",{key:0,id:t.isMain?"slide-container":void 0,ref_key:"container",ref:s,class:"slidev-slide-container",style:U(d.value)},[it("div",{id:t.isMain?"slide-content":void 0,ref_key:"slideElement",ref:l,class:"slidev-slide-content",style:U(u.value)},[Lt(c.$slots,"default",{},void 0,!0)],12,Mn),Lt(c.$slots,"controls",{},void 0,!0)],12,En))}}),ur=Ct(Cn,[["__scopeId","data-v-a1fda277"]]);var ot={exports:{}},kn=ot.exports,Ht;function Dn(){return Ht||(Ht=1,function(t){(function(e,n,s){function o(r){var u=this,d=i();u.next=function(){var a=2091639*u.s0+u.c*23283064365386963e-26;return u.s0=u.s1,u.s1=u.s2,u.s2=a-(u.c=a|0)},u.c=1,u.s0=d(" "),u.s1=d(" "),u.s2=d(" "),u.s0-=d(r),u.s0<0&&(u.s0+=1),u.s1-=d(r),u.s1<0&&(u.s1+=1),u.s2-=d(r),u.s2<0&&(u.s2+=1),d=null}function l(r,u){return u.c=r.c,u.s0=r.s0,u.s1=r.s1,u.s2=r.s2,u}function f(r,u){var d=new o(r),a=u&&u.state,c=d.next;return c.int32=function(){return d.next()*4294967296|0},c.double=function(){return c()+(c()*2097152|0)*11102230246251565e-32},c.quick=c,a&&(typeof a=="object"&&l(a,d),c.state=function(){return l(d,{})}),c}function i(){var r=4022871197,u=function(d){d=String(d);for(var a=0;a<d.length;a++){r+=d.charCodeAt(a);var c=.02519603282416938*r;r=c>>>0,c-=r,c*=r,r=c>>>0,c-=r,r+=c*4294967296}return(r>>>0)*23283064365386963e-26};return u}n&&n.exports?n.exports=f:this.alea=f})(kn,t)}(ot)),ot.exports}var at={exports:{}},An=at.exports,Yt;function Ln(){return Yt||(Yt=1,function(t){(function(e,n,s){function o(i){var r=this,u="";r.x=0,r.y=0,r.z=0,r.w=0,r.next=function(){var a=r.x^r.x<<11;return r.x=r.y,r.y=r.z,r.z=r.w,r.w^=r.w>>>19^a^a>>>8},i===(i|0)?r.x=i:u+=i;for(var d=0;d<u.length+64;d++)r.x^=u.charCodeAt(d)|0,r.next()}function l(i,r){return r.x=i.x,r.y=i.y,r.z=i.z,r.w=i.w,r}function f(i,r){var u=new o(i),d=r&&r.state,a=function(){return(u.next()>>>0)/4294967296};return a.double=function(){do var c=u.next()>>>11,h=(u.next()>>>0)/4294967296,p=(c+h)/(1<<21);while(p===0);return p},a.int32=u.next,a.quick=a,d&&(typeof d=="object"&&l(d,u),a.state=function(){return l(u,{})}),a}n&&n.exports?n.exports=f:this.xor128=f})(An,t)}(at)),at.exports}var lt={exports:{}},In=lt.exports,Zt;function Nn(){return Zt||(Zt=1,function(t){(function(e,n,s){function o(i){var r=this,u="";r.next=function(){var a=r.x^r.x>>>2;return r.x=r.y,r.y=r.z,r.z=r.w,r.w=r.v,(r.d=r.d+362437|0)+(r.v=r.v^r.v<<4^(a^a<<1))|0},r.x=0,r.y=0,r.z=0,r.w=0,r.v=0,i===(i|0)?r.x=i:u+=i;for(var d=0;d<u.length+64;d++)r.x^=u.charCodeAt(d)|0,d==u.length&&(r.d=r.x<<10^r.x>>>4),r.next()}function l(i,r){return r.x=i.x,r.y=i.y,r.z=i.z,r.w=i.w,r.v=i.v,r.d=i.d,r}function f(i,r){var u=new o(i),d=r&&r.state,a=function(){return(u.next()>>>0)/4294967296};return a.double=function(){do var c=u.next()>>>11,h=(u.next()>>>0)/4294967296,p=(c+h)/(1<<21);while(p===0);return p},a.int32=u.next,a.quick=a,d&&(typeof d=="object"&&l(d,u),a.state=function(){return l(u,{})}),a}n&&n.exports?n.exports=f:this.xorwow=f})(In,t)}(lt)),lt.exports}var ut={exports:{}},qn=ut.exports,Qt;function jn(){return Qt||(Qt=1,function(t){(function(e,n,s){function o(i){var r=this;r.next=function(){var d=r.x,a=r.i,c,h;return c=d[a],c^=c>>>7,h=c^c<<24,c=d[a+1&7],h^=c^c>>>10,c=d[a+3&7],h^=c^c>>>3,c=d[a+4&7],h^=c^c<<7,c=d[a+7&7],c=c^c<<13,h^=c^c<<9,d[a]=h,r.i=a+1&7,h};function u(d,a){var c,h=[];if(a===(a|0))h[0]=a;else for(a=""+a,c=0;c<a.length;++c)h[c&7]=h[c&7]<<15^a.charCodeAt(c)+h[c+1&7]<<13;for(;h.length<8;)h.push(0);for(c=0;c<8&&h[c]===0;++c);for(c==8?h[7]=-1:h[c],d.x=h,d.i=0,c=256;c>0;--c)d.next()}u(r,i)}function l(i,r){return r.x=i.x.slice(),r.i=i.i,r}function f(i,r){i==null&&(i=+new Date);var u=new o(i),d=r&&r.state,a=function(){return(u.next()>>>0)/4294967296};return a.double=function(){do var c=u.next()>>>11,h=(u.next()>>>0)/4294967296,p=(c+h)/(1<<21);while(p===0);return p},a.int32=u.next,a.quick=a,d&&(d.x&&l(d,u),a.state=function(){return l(u,{})}),a}n&&n.exports?n.exports=f:this.xorshift7=f})(qn,t)}(ut)),ut.exports}var ct={exports:{}},zn=ct.exports,Jt;function Rn(){return Jt||(Jt=1,function(t){(function(e,n,s){function o(i){var r=this;r.next=function(){var d=r.w,a=r.X,c=r.i,h,p;return r.w=d=d+1640531527|0,p=a[c+34&127],h=a[c=c+1&127],p^=p<<13,h^=h<<17,p^=p>>>15,h^=h>>>12,p=a[c]=p^h,r.i=c,p+(d^d>>>16)|0};function u(d,a){var c,h,p,m,y,_=[],w=128;for(a===(a|0)?(h=a,a=null):(a=a+"\0",h=0,w=Math.max(w,a.length)),p=0,m=-32;m<w;++m)a&&(h^=a.charCodeAt((m+32)%a.length)),m===0&&(y=h),h^=h<<10,h^=h>>>15,h^=h<<4,h^=h>>>13,m>=0&&(y=y+1640531527|0,c=_[m&127]^=h+y,p=c==0?p+1:0);for(p>=128&&(_[(a&&a.length||0)&127]=-1),p=127,m=4*128;m>0;--m)h=_[p+34&127],c=_[p=p+1&127],h^=h<<13,c^=c<<17,h^=h>>>15,c^=c>>>12,_[p]=h^c;d.w=y,d.X=_,d.i=p}u(r,i)}function l(i,r){return r.i=i.i,r.w=i.w,r.X=i.X.slice(),r}function f(i,r){i==null&&(i=+new Date);var u=new o(i),d=r&&r.state,a=function(){return(u.next()>>>0)/4294967296};return a.double=function(){do var c=u.next()>>>11,h=(u.next()>>>0)/4294967296,p=(c+h)/(1<<21);while(p===0);return p},a.int32=u.next,a.quick=a,d&&(d.X&&l(d,u),a.state=function(){return l(u,{})}),a}n&&n.exports?n.exports=f:this.xor4096=f})(zn,t)}(ct)),ct.exports}var ht={exports:{}},Tn=ht.exports,Wt;function Xn(){return Wt||(Wt=1,function(t){(function(e,n,s){function o(i){var r=this,u="";r.next=function(){var a=r.b,c=r.c,h=r.d,p=r.a;return a=a<<25^a>>>7^c,c=c-h|0,h=h<<24^h>>>8^p,p=p-a|0,r.b=a=a<<20^a>>>12^c,r.c=c=c-h|0,r.d=h<<16^c>>>16^p,r.a=p-a|0},r.a=0,r.b=0,r.c=-1640531527,r.d=1367130551,i===Math.floor(i)?(r.a=i/4294967296|0,r.b=i|0):u+=i;for(var d=0;d<u.length+20;d++)r.b^=u.charCodeAt(d)|0,r.next()}function l(i,r){return r.a=i.a,r.b=i.b,r.c=i.c,r.d=i.d,r}function f(i,r){var u=new o(i),d=r&&r.state,a=function(){return(u.next()>>>0)/4294967296};return a.double=function(){do var c=u.next()>>>11,h=(u.next()>>>0)/4294967296,p=(c+h)/(1<<21);while(p===0);return p},a.int32=u.next,a.quick=a,d&&(typeof d=="object"&&l(d,u),a.state=function(){return l(u,{})}),a}n&&n.exports?n.exports=f:this.tychei=f})(Tn,t)}(ht)),ht.exports}var dt={exports:{}};const Fn={},Kn=Object.freeze(Object.defineProperty({__proto__:null,default:Fn},Symbol.toStringTag,{value:"Module"})),On=Xe(Kn);var Bn=dt.exports,te;function Gn(){return te||(te=1,function(t){(function(e,n,s){var o=256,l=6,f=52,i="random",r=s.pow(o,l),u=s.pow(2,f),d=u*2,a=o-1,c;function h(v,x,P){var b=[];x=x==!0?{entropy:!0}:x||{};var E=_(y(x.entropy?[v,g(n)]:v??w(),3),b),L=new p(b),D=function(){for(var C=L.g(l),q=r,A=0;C<u;)C=(C+A)*o,q*=o,A=L.g(1);for(;C>=d;)C/=2,q/=2,A>>>=1;return(C+A)/q};return D.int32=function(){return L.g(4)|0},D.quick=function(){return L.g(4)/4294967296},D.double=D,_(g(L.S),n),(x.pass||P||function(C,q,A,I){return I&&(I.S&&m(I,L),C.state=function(){return m(L,{})}),A?(s[i]=C,q):C})(D,E,"global"in x?x.global:this==s,x.state)}function p(v){var x,P=v.length,b=this,E=0,L=b.i=b.j=0,D=b.S=[];for(P||(v=[P++]);E<o;)D[E]=E++;for(E=0;E<o;E++)D[E]=D[L=a&L+v[E%P]+(x=D[E])],D[L]=x;(b.g=function(C){for(var q,A=0,I=b.i,O=b.j,F=b.S;C--;)q=F[I=a&I+1],A=A*o+F[a&(F[I]=F[O=a&O+q])+(F[O]=q)];return b.i=I,b.j=O,A})(o)}function m(v,x){return x.i=v.i,x.j=v.j,x.S=v.S.slice(),x}function y(v,x){var P=[],b=typeof v,E;if(x&&b=="object")for(E in v)try{P.push(y(v[E],x-1))}catch{}return P.length?P:b=="string"?v:v+"\0"}function _(v,x){for(var P=v+"",b,E=0;E<P.length;)x[a&E]=a&(b^=x[a&E]*19)+P.charCodeAt(E++);return g(x)}function w(){try{var v;return c&&(v=c.randomBytes)?v=v(o):(v=new Uint8Array(o),(e.crypto||e.msCrypto).getRandomValues(v)),g(v)}catch{var x=e.navigator,P=x&&x.plugins;return[+new Date,e,P,e.screen,g(n)]}}function g(v){return String.fromCharCode.apply(0,v)}if(_(s.random(),n),t.exports){t.exports=h;try{c=On}catch{}}else s["seed"+i]=h})(typeof self<"u"?self:Bn,[],Math)}(dt)),dt.exports}var St,ee;function Un(){if(ee)return St;ee=1;var t=Dn(),e=Ln(),n=Nn(),s=jn(),o=Rn(),l=Xn(),f=Gn();return f.alea=t,f.xor128=e,f.xorwow=n,f.xorshift7=s,f.xor4096=o,f.tychei=l,St=f,St}var Vn=Un();const Hn=Fe(Vn),ne=.3,Yn=.3,Zn=.3,Qn=vt({__name:"global-bottom",setup(t){Te();const{currentSlideRoute:e}=$t(),n=k(()=>{var h,p;return((p=(h=e.value.meta)==null?void 0:h.slide)==null?void 0:p.frontmatter)||{}}),s=k(()=>n.value.glow||"full"),o=k(()=>+(n.value.glowOpacity??.4)),l=k(()=>+(n.value.glowHue||40)),f=k(()=>n.value.glowSeed==="false"||n.value.glowSeed===!1?Date.now().toString():n.value.glowSeed||"default");function i(h){let y=[-.2,1.2],_=[-.2,1.2];function w(v,x){return[Math.max(v[0],x[0]),Math.min(v[1],x[1])]}const g=h.split("-");for(const v of g)switch(v){case"topmost":_=w(_,[-.5,0]);break;case"top":_=w(_,[-.2,.6]);break;case"bottom":_=w(_,[.4,1.2]);break;case"left":y=w(y,[-.2,.6]);break;case"right":y=w(y,[.4,1.2]);break;case"xcenter":y=w(y,[.25,.75]);break;case"ycenter":_=w(_,[.25,.75]);break;case"center":y=w(y,[.25,.75]),_=w(_,[.25,.75]);break;case"full":y=w(y,[0,1]),_=w(_,[0,1]);break}return{x:y,y:_}}function r([h,p],[m,y]){return(m-h)**2+(y-p)**2}function u(h=16){function p(){const w=i(s.value),g=Hn(`${f.value}-${e.value.no}`);function v([P,b]){return g()*(b-P)+P}function x(P,b){return P=P*(1+b*2)-b,g()<Zn?P+(g()-.5)*Yn:P}return Array.from({length:h}).fill(0).map(()=>[x(v(w.x),ne),x(v(w.y),ne)])}const m=T(p()),y=k(()=>m.value.map(([w,g])=>`${w*100}% ${g*100}%`).join(", "));function _(){const w=new Set(p());m.value=m.value.map(g=>{let v=Number.POSITIVE_INFINITY,x;for(const P of w){const b=r(g,P);b<v&&(v=b,x=P)}return w.delete(x),x})}return se(e,()=>{_()}),y}const d=u(10),a=u(6),c=u(3);return(h,p)=>(Z(),rt("div",{class:"bg transform-gpu overflow-hidden pointer-events-none",style:U({filter:`blur(70px) hue-rotate(${l.value}deg)`}),"aria-hidden":"true"},[it("div",{class:"clip bg-gradient-to-r from-[#00DC82] to-white/10",style:U({"clip-path":`polygon(${X(d)})`,opacity:o.value})},null,4),it("div",{class:"clip bg-gradient-to-l from-[#2f96ad] to-white/10",style:U({"clip-path":`polygon(${X(a)})`,opacity:o.value})},null,4),it("div",{class:"clip bg-gradient-to-t from-lime to-white/10",style:U({"clip-path":`polygon(${X(c)})`,opacity:.2})},null,4)],4))}}),Jn=Ct(Qn,[["__scopeId","data-v-673a05c5"]]),cr={render:()=>[]},hr={render:()=>[_e(Jn)]},Wn={render:()=>[]},tr={render:()=>[]},er=["data-slidev-no","lang"],nr=vt({__name:"SlideWrapper",props:{clicksContext:{type:Object,required:!0},renderContext:{type:String,default:"slide"},route:{type:Object,required:!0}},setup(t){const e=t,n=k(()=>{var l,f;return((f=(l=e.route.meta)==null?void 0:l.slide)==null?void 0:f.frontmatter.zoom)??1});G(Le,e.route),G(Ie,e.route.meta.slide.frontmatter),G(Ne,T(e.route.no)),G(qe,T(e.renderContext)),G(je,Se(e,"clicksContext")),G(Re,n);const s=k(()=>n.value===1?void 0:{width:`${100/n.value}%`,height:`${100/n.value}%`,transformOrigin:"top left",transform:`scale(${n.value})`}),o=k(()=>({...s.value,"user-select":bt.selectable?void 0:"none"}));return(l,f)=>(Z(),rt("div",{"data-slidev-no":e.route.no,class:Ee(X(ze)(t.route,["slide","presenter"].includes(e.renderContext)?"":"disable-view-transition")),style:U(o.value),lang:e.route.meta.slide.frontmatter.lang},[It(X(tr)),(Z(),be(Pe(e.route.component))),It(X(Wn))],14,er))}}),dr=Ct(nr,[["__scopeId","data-v-08659221"]]);export{hr as G,dr as S,lr as _,ur as a,Ke as b,yn as c,cr as d,ar as u};