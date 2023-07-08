(()=>{var xe=function(){if(typeof globalThis<"u")return globalThis;if(typeof global<"u")return global;if(typeof self<"u")return self;if(typeof window<"u")return window;try{return new Function("return this")()}catch{return{}}}();xe.trustedTypes===void 0&&(xe.trustedTypes={createPolicy:(o,t)=>t});var ul={configurable:!1,enumerable:!1,writable:!1};xe.FAST===void 0&&Reflect.defineProperty(xe,"FAST",Object.assign({value:Object.create(null)},ul));var Ro=xe.FAST;if(Ro.getById===void 0){let o=Object.create(null);Reflect.defineProperty(Ro,"getById",Object.assign({value(t,e){let i=o[t];return i===void 0&&(i=e?o[t]=e():null),i}},ul))}var re=Object.freeze([]);function dr(){let o=new WeakMap;return function(t){let e=o.get(t);if(e===void 0){let i=Reflect.getPrototypeOf(t);for(;e===void 0&&i!==null;)e=o.get(i),i=Reflect.getPrototypeOf(i);e=e===void 0?[]:e.slice(0),o.set(t,e)}return e}}var es=xe.FAST.getById(1,()=>{let o=[],t=[];function e(){if(t.length)throw t.shift()}function i(s){try{s.call()}catch(l){t.push(l),setTimeout(e,0)}}function r(){let l=0;for(;l<o.length;)if(i(o[l]),l++,l>1024){for(let d=0,u=o.length-l;d<u;d++)o[d]=o[d+l];o.length-=l,l=0}o.length=0}function n(s){o.length<1&&xe.requestAnimationFrame(r),o.push(s)}return Object.freeze({enqueue:n,process:r})}),pl=xe.trustedTypes.createPolicy("fast-html",{createHTML:o=>o}),os=pl,Si=`fast-${Math.random().toString(36).substring(2,8)}`,is=`${Si}{`,hr=`}${Si}`,F=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(o){if(os!==pl)throw new Error("The HTML policy can only be set once.");os=o},createHTML(o){return os.createHTML(o)},isMarker(o){return o&&o.nodeType===8&&o.data.startsWith(Si)},extractDirectiveIndexFromMarker(o){return parseInt(o.data.replace(`${Si}:`,""))},createInterpolationPlaceholder(o){return`${is}${o}${hr}`},createCustomAttributePlaceholder(o,t){return`${o}="${this.createInterpolationPlaceholder(t)}"`},createBlockPlaceholder(o){return`<!--${Si}:${o}-->`},queueUpdate:es.enqueue,processUpdates:es.process,nextUpdate(){return new Promise(es.enqueue)},setAttribute(o,t,e){e==null?o.removeAttribute(t):o.setAttribute(t,e)},setBooleanAttribute(o,t,e){e?o.setAttribute(t,""):o.removeAttribute(t)},removeChildNodes(o){for(let t=o.firstChild;t!==null;t=o.firstChild)o.removeChild(t)},createTemplateWalker(o){return document.createTreeWalker(o,133,null,!1)}});var io=class{constructor(t,e){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=t,this.sub1=e}has(t){return this.spillover===void 0?this.sub1===t||this.sub2===t:this.spillover.indexOf(t)!==-1}subscribe(t){let e=this.spillover;if(e===void 0){if(this.has(t))return;if(this.sub1===void 0){this.sub1=t;return}if(this.sub2===void 0){this.sub2=t;return}this.spillover=[this.sub1,this.sub2,t],this.sub1=void 0,this.sub2=void 0}else e.indexOf(t)===-1&&e.push(t)}unsubscribe(t){let e=this.spillover;if(e===void 0)this.sub1===t?this.sub1=void 0:this.sub2===t&&(this.sub2=void 0);else{let i=e.indexOf(t);i!==-1&&e.splice(i,1)}}notify(t){let e=this.spillover,i=this.source;if(e===void 0){let r=this.sub1,n=this.sub2;r!==void 0&&r.handleChange(i,t),n!==void 0&&n.handleChange(i,t)}else for(let r=0,n=e.length;r<n;++r)e[r].handleChange(i,t)}},Yo=class{constructor(t){this.subscribers={},this.sourceSubscribers=null,this.source=t}notify(t){var e;let i=this.subscribers[t];i!==void 0&&i.notify(t),(e=this.sourceSubscribers)===null||e===void 0||e.notify(t)}subscribe(t,e){var i;if(e){let r=this.subscribers[e];r===void 0&&(this.subscribers[e]=r=new io(this.source)),r.subscribe(t)}else this.sourceSubscribers=(i=this.sourceSubscribers)!==null&&i!==void 0?i:new io(this.source),this.sourceSubscribers.subscribe(t)}unsubscribe(t,e){var i;if(e){let r=this.subscribers[e];r!==void 0&&r.unsubscribe(t)}else(i=this.sourceSubscribers)===null||i===void 0||i.unsubscribe(t)}};var R=Ro.getById(2,()=>{let o=/(:|&&|\|\||if)/,t=new WeakMap,e=F.queueUpdate,i,r=u=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function n(u){let p=u.$fastController||t.get(u);return p===void 0&&(Array.isArray(u)?p=r(u):t.set(u,p=new Yo(u))),p}let s=dr();class l{constructor(p){this.name=p,this.field=`_${p}`,this.callback=`${p}Changed`}getValue(p){return i!==void 0&&i.watch(p,this.name),p[this.field]}setValue(p,g){let y=this.field,B=p[y];if(B!==g){p[y]=g;let j=p[this.callback];typeof j=="function"&&j.call(p,B,g),n(p).notify(this.name)}}}class d extends io{constructor(p,g,y=!1){super(p,g),this.binding=p,this.isVolatileBinding=y,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(p,g){this.needsRefresh&&this.last!==null&&this.disconnect();let y=i;i=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;let B=this.binding(p,g);return i=y,B}disconnect(){if(this.last!==null){let p=this.first;for(;p!==void 0;)p.notifier.unsubscribe(this,p.propertyName),p=p.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(p,g){let y=this.last,B=n(p),j=y===null?this.first:{};if(j.propertySource=p,j.propertyName=g,j.notifier=B,B.subscribe(this,g),y!==null){if(!this.needsRefresh){let Q;i=void 0,Q=y.propertySource[y.propertyName],i=this,p===Q&&(this.needsRefresh=!0)}y.next=j}this.last=j}handleChange(){this.needsQueue&&(this.needsQueue=!1,e(this))}call(){this.last!==null&&(this.needsQueue=!0,this.notify(this))}records(){let p=this.first;return{next:()=>{let g=p;return g===void 0?{value:void 0,done:!0}:(p=p.next,{value:g,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(u){r=u},getNotifier:n,track(u,p){i!==void 0&&i.watch(u,p)},trackVolatile(){i!==void 0&&(i.needsRefresh=!0)},notify(u,p){n(u).notify(p)},defineProperty(u,p){typeof p=="string"&&(p=new l(p)),s(u).push(p),Reflect.defineProperty(u,p.name,{enumerable:!0,get:function(){return p.getValue(this)},set:function(g){p.setValue(this,g)}})},getAccessors:s,binding(u,p,g=this.isVolatileBinding(u)){return new d(u,p,g)},isVolatileBinding(u){return o.test(u.toString())}})});function f(o,t){R.defineProperty(o,t)}function ml(o,t,e){return Object.assign({},e,{get:function(){return R.trackVolatile(),e.get.apply(this)}})}var fl=Ro.getById(3,()=>{let o=null;return{get(){return o},set(t){o=t}}}),ro=class{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return fl.get()}get isEven(){return this.index%2===0}get isOdd(){return this.index%2!==0}get isFirst(){return this.index===0}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(t){fl.set(t)}};R.defineProperty(ro.prototype,"index");R.defineProperty(ro.prototype,"length");var no=Object.seal(new ro);var so=class{constructor(){this.targetIndex=0}},Qo=class extends so{constructor(){super(...arguments),this.createPlaceholder=F.createInterpolationPlaceholder}},ao=class extends so{constructor(t,e,i){super(),this.name=t,this.behavior=e,this.options=i}createPlaceholder(t){return F.createCustomAttributePlaceholder(this.name,t)}createBehavior(t){return new this.behavior(t,this.options)}};function ip(o,t){this.source=o,this.context=t,this.bindingObserver===null&&(this.bindingObserver=R.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(o,t))}function rp(o,t){this.source=o,this.context=t,this.target.addEventListener(this.targetName,this)}function np(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function sp(){this.bindingObserver.disconnect(),this.source=null,this.context=null;let o=this.target.$fastView;o!==void 0&&o.isComposed&&(o.unbind(),o.needsBindOnly=!0)}function ap(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function lp(o){F.setAttribute(this.target,this.targetName,o)}function cp(o){F.setBooleanAttribute(this.target,this.targetName,o)}function dp(o){if(o==null&&(o=""),o.create){this.target.textContent="";let t=this.target.$fastView;t===void 0?t=o.create():this.target.$fastTemplate!==o&&(t.isComposed&&(t.remove(),t.unbind()),t=o.create()),t.isComposed?t.needsBindOnly&&(t.needsBindOnly=!1,t.bind(this.source,this.context)):(t.isComposed=!0,t.bind(this.source,this.context),t.insertBefore(this.target),this.target.$fastView=t,this.target.$fastTemplate=o)}else{let t=this.target.$fastView;t!==void 0&&t.isComposed&&(t.isComposed=!1,t.remove(),t.needsBindOnly?t.needsBindOnly=!1:t.unbind()),this.target.textContent=o}}function hp(o){this.target[this.targetName]=o}function up(o){let t=this.classVersions||Object.create(null),e=this.target,i=this.version||0;if(o!=null&&o.length){let r=o.split(/\s+/);for(let n=0,s=r.length;n<s;++n){let l=r[n];l!==""&&(t[l]=i,e.classList.add(l))}}if(this.classVersions=t,this.version=i+1,i!==0){i-=1;for(let r in t)t[r]===i&&e.classList.remove(r)}}var Io=class extends Qo{constructor(t){super(),this.binding=t,this.bind=ip,this.unbind=np,this.updateTarget=lp,this.isBindingVolatile=R.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(t){if(this.originalTargetName=t,t!==void 0)switch(t[0]){case":":if(this.cleanedTargetName=t.substr(1),this.updateTarget=hp,this.cleanedTargetName==="innerHTML"){let e=this.binding;this.binding=(i,r)=>F.createHTML(e(i,r))}break;case"?":this.cleanedTargetName=t.substr(1),this.updateTarget=cp;break;case"@":this.cleanedTargetName=t.substr(1),this.bind=rp,this.unbind=ap;break;default:this.cleanedTargetName=t,t==="class"&&(this.updateTarget=up);break}}targetAtContent(){this.updateTarget=dp,this.unbind=sp}createBehavior(t){return new rs(t,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}},rs=class{constructor(t,e,i,r,n,s,l){this.source=null,this.context=null,this.bindingObserver=null,this.target=t,this.binding=e,this.isBindingVolatile=i,this.bind=r,this.unbind=n,this.updateTarget=s,this.targetName=l}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(t){ro.setEvent(t);let e=this.binding(this.source,this.context);ro.setEvent(null),e!==!0&&t.preventDefault()}};var ns=null,ss=class o{addFactory(t){t.targetIndex=this.targetIndex,this.behaviorFactories.push(t)}captureContentBinding(t){t.targetAtContent(),this.addFactory(t)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){ns=this}static borrow(t){let e=ns||new o;return e.directives=t,e.reset(),ns=null,e}};function pp(o){if(o.length===1)return o[0];let t,e=o.length,i=o.map(s=>typeof s=="string"?()=>s:(t=s.targetName||t,s.binding)),r=(s,l)=>{let d="";for(let u=0;u<e;++u)d+=i[u](s,l);return d},n=new Io(r);return n.targetName=t,n}var fp=hr.length;function vl(o,t){let e=t.split(is);if(e.length===1)return null;let i=[];for(let r=0,n=e.length;r<n;++r){let s=e[r],l=s.indexOf(hr),d;if(l===-1)d=s;else{let u=parseInt(s.substring(0,l));i.push(o.directives[u]),d=s.substring(l+fp)}d!==""&&i.push(d)}return i}function gl(o,t,e=!1){let i=t.attributes;for(let r=0,n=i.length;r<n;++r){let s=i[r],l=s.value,d=vl(o,l),u=null;d===null?e&&(u=new Io(()=>l),u.targetName=s.name):u=pp(d),u!==null&&(t.removeAttributeNode(s),r--,n--,o.addFactory(u))}}function mp(o,t,e){let i=vl(o,t.textContent);if(i!==null){let r=t;for(let n=0,s=i.length;n<s;++n){let l=i[n],d=n===0?t:r.parentNode.insertBefore(document.createTextNode(""),r.nextSibling);typeof l=="string"?d.textContent=l:(d.textContent=" ",o.captureContentBinding(l)),r=d,o.targetIndex++,d!==t&&e.nextNode()}o.targetIndex--}}function bl(o,t){let e=o.content;document.adoptNode(e);let i=ss.borrow(t);gl(i,o,!0);let r=i.behaviorFactories;i.reset();let n=F.createTemplateWalker(e),s;for(;s=n.nextNode();)switch(i.targetIndex++,s.nodeType){case 1:gl(i,s);break;case 3:mp(i,s,n);break;case 8:F.isMarker(s)&&i.addFactory(t[F.extractDirectiveIndexFromMarker(s)])}let l=0;(F.isMarker(e.firstChild)||e.childNodes.length===1&&t.length)&&(e.insertBefore(document.createComment(""),e.firstChild),l=-1);let d=i.behaviorFactories;return i.release(),{fragment:e,viewBehaviorFactories:d,hostBehaviorFactories:r,targetOffset:l}}var as=document.createRange(),Zo=class{constructor(t,e){this.fragment=t,this.behaviors=e,this.source=null,this.context=null,this.firstChild=t.firstChild,this.lastChild=t.lastChild}appendTo(t){t.appendChild(this.fragment)}insertBefore(t){if(this.fragment.hasChildNodes())t.parentNode.insertBefore(this.fragment,t);else{let e=this.lastChild;if(t.previousSibling===e)return;let i=t.parentNode,r=this.firstChild,n;for(;r!==e;)n=r.nextSibling,i.insertBefore(r,t),r=n;i.insertBefore(e,t)}}remove(){let t=this.fragment,e=this.lastChild,i=this.firstChild,r;for(;i!==e;)r=i.nextSibling,t.appendChild(i),i=r;t.appendChild(e)}dispose(){let t=this.firstChild.parentNode,e=this.lastChild,i=this.firstChild,r;for(;i!==e;)r=i.nextSibling,t.removeChild(i),i=r;t.removeChild(e);let n=this.behaviors,s=this.source;for(let l=0,d=n.length;l<d;++l)n[l].unbind(s)}bind(t,e){let i=this.behaviors;if(this.source!==t)if(this.source!==null){let r=this.source;this.source=t,this.context=e;for(let n=0,s=i.length;n<s;++n){let l=i[n];l.unbind(r),l.bind(t,e)}}else{this.source=t,this.context=e;for(let r=0,n=i.length;r<n;++r)i[r].bind(t,e)}}unbind(){if(this.source===null)return;let t=this.behaviors,e=this.source;for(let i=0,r=t.length;i<r;++i)t[i].unbind(e);this.source=null}static disposeContiguousBatch(t){if(t.length!==0){as.setStartBefore(t[0].firstChild),as.setEndAfter(t[t.length-1].lastChild),as.deleteContents();for(let e=0,i=t.length;e<i;++e){let r=t[e],n=r.behaviors,s=r.source;for(let l=0,d=n.length;l<d;++l)n[l].unbind(s)}}}};var ur=class{constructor(t,e){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=t,this.directives=e}create(t){if(this.fragment===null){let u,p=this.html;if(typeof p=="string"){u=document.createElement("template"),u.innerHTML=F.createHTML(p);let y=u.content.firstElementChild;y!==null&&y.tagName==="TEMPLATE"&&(u=y)}else u=p;let g=bl(u,this.directives);this.fragment=g.fragment,this.viewBehaviorFactories=g.viewBehaviorFactories,this.hostBehaviorFactories=g.hostBehaviorFactories,this.targetOffset=g.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}let e=this.fragment.cloneNode(!0),i=this.viewBehaviorFactories,r=new Array(this.behaviorCount),n=F.createTemplateWalker(e),s=0,l=this.targetOffset,d=n.nextNode();for(let u=i.length;s<u;++s){let p=i[s],g=p.targetIndex;for(;d!==null;)if(l===g){r[s]=p.createBehavior(d);break}else d=n.nextNode(),l++}if(this.hasHostBehaviors){let u=this.hostBehaviorFactories;for(let p=0,g=u.length;p<g;++p,++s)r[s]=u[p].createBehavior(t)}return new Zo(e,r)}render(t,e,i){typeof e=="string"&&(e=document.getElementById(e)),i===void 0&&(i=e);let r=this.create(i);return r.bind(t,no),r.appendTo(e),r}},gp=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function v(o,...t){let e=[],i="";for(let r=0,n=o.length-1;r<n;++r){let s=o[r],l=t[r];if(i+=s,l instanceof ur){let d=l;l=()=>d}if(typeof l=="function"&&(l=new Io(l)),l instanceof Qo){let d=gp.exec(s);d!==null&&(l.targetName=d[2])}l instanceof so?(i+=l.createPlaceholder(e.length),e.push(l)):i+=l}return i+=o[o.length-1],new ur(i,e)}var pt=class{constructor(){this.targets=new WeakSet}addStylesTo(t){this.targets.add(t)}removeStylesFrom(t){this.targets.delete(t)}isAttachedTo(t){return this.targets.has(t)}withBehaviors(...t){return this.behaviors=this.behaviors===null?t:this.behaviors.concat(t),this}};pt.create=(()=>{if(F.supportsAdoptedStyleSheets){let o=new Map;return t=>new ls(t,o)}return o=>new cs(o)})();function ds(o){return o.map(t=>t instanceof pt?ds(t.styles):[t]).reduce((t,e)=>t.concat(e),[])}function xl(o){return o.map(t=>t instanceof pt?t.behaviors:null).reduce((t,e)=>e===null?t:(t===null&&(t=[]),t.concat(e)),null)}var yl=(o,t)=>{o.adoptedStyleSheets=[...o.adoptedStyleSheets,...t]},wl=(o,t)=>{o.adoptedStyleSheets=o.adoptedStyleSheets.filter(e=>t.indexOf(e)===-1)};if(F.supportsAdoptedStyleSheets)try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),yl=(o,t)=>{o.adoptedStyleSheets.push(...t)},wl=(o,t)=>{for(let e of t){let i=o.adoptedStyleSheets.indexOf(e);i!==-1&&o.adoptedStyleSheets.splice(i,1)}}}catch{}var ls=class extends pt{constructor(t,e){super(),this.styles=t,this.styleSheetCache=e,this._styleSheets=void 0,this.behaviors=xl(t)}get styleSheets(){if(this._styleSheets===void 0){let t=this.styles,e=this.styleSheetCache;this._styleSheets=ds(t).map(i=>{if(i instanceof CSSStyleSheet)return i;let r=e.get(i);return r===void 0&&(r=new CSSStyleSheet,r.replaceSync(i),e.set(i,r)),r})}return this._styleSheets}addStylesTo(t){yl(t,this.styleSheets),super.addStylesTo(t)}removeStylesFrom(t){wl(t,this.styleSheets),super.removeStylesFrom(t)}},vp=0;function bp(){return`fast-style-class-${++vp}`}var cs=class extends pt{constructor(t){super(),this.styles=t,this.behaviors=null,this.behaviors=xl(t),this.styleSheets=ds(t),this.styleClass=bp()}addStylesTo(t){let e=this.styleSheets,i=this.styleClass;t=this.normalizeTarget(t);for(let r=0;r<e.length;r++){let n=document.createElement("style");n.innerHTML=e[r],n.className=i,t.append(n)}super.addStylesTo(t)}removeStylesFrom(t){t=this.normalizeTarget(t);let e=t.querySelectorAll(`.${this.styleClass}`);for(let i=0,r=e.length;i<r;++i)t.removeChild(e[i]);super.removeStylesFrom(t)}isAttachedTo(t){return super.isAttachedTo(this.normalizeTarget(t))}normalizeTarget(t){return t===document?document.body:t}};var Fi=Object.freeze({locate:dr()}),Be={toView(o){return o?"true":"false"},fromView(o){return!(o==null||o==="false"||o===!1||o===0)}},S={toView(o){if(o==null)return null;let t=o*1;return isNaN(t)?null:t.toString()},fromView(o){if(o==null)return null;let t=o*1;return isNaN(t)?null:t}},pr=class o{constructor(t,e,i=e.toLowerCase(),r="reflect",n){this.guards=new Set,this.Owner=t,this.name=e,this.attribute=i,this.mode=r,this.converter=n,this.fieldName=`_${e}`,this.callbackName=`${e}Changed`,this.hasCallback=this.callbackName in t.prototype,r==="boolean"&&n===void 0&&(this.converter=Be)}setValue(t,e){let i=t[this.fieldName],r=this.converter;r!==void 0&&(e=r.fromView(e)),i!==e&&(t[this.fieldName]=e,this.tryReflectToAttribute(t),this.hasCallback&&t[this.callbackName](i,e),t.$fastController.notify(this.name))}getValue(t){return R.track(t,this.name),t[this.fieldName]}onAttributeChangedCallback(t,e){this.guards.has(t)||(this.guards.add(t),this.setValue(t,e),this.guards.delete(t))}tryReflectToAttribute(t){let e=this.mode,i=this.guards;i.has(t)||e==="fromView"||F.queueUpdate(()=>{i.add(t);let r=t[this.fieldName];switch(e){case"reflect":let n=this.converter;F.setAttribute(t,this.attribute,n!==void 0?n.toView(r):r);break;case"boolean":F.setBooleanAttribute(t,this.attribute,r);break}i.delete(t)})}static collect(t,...e){let i=[];e.push(Fi.locate(t));for(let r=0,n=e.length;r<n;++r){let s=e[r];if(s!==void 0)for(let l=0,d=s.length;l<d;++l){let u=s[l];typeof u=="string"?i.push(new o(t,u)):i.push(new o(t,u.property,u.attribute,u.mode,u.converter))}}return i}};function c(o,t){let e;function i(r,n){arguments.length>1&&(e.property=n),Fi.locate(r.constructor).push(e)}if(arguments.length>1){e={},i(o,t);return}return e=o===void 0?{}:o,i}var $l={mode:"open"},kl={},hs=Ro.getById(4,()=>{let o=new Map;return Object.freeze({register(t){return o.has(t.type)?!1:(o.set(t.type,t),!0)},getByType(t){return o.get(t)}})}),Fe=class{constructor(t,e=t.definition){typeof e=="string"&&(e={name:e}),this.type=t,this.name=e.name,this.template=e.template;let i=pr.collect(t,e.attributes),r=new Array(i.length),n={},s={};for(let l=0,d=i.length;l<d;++l){let u=i[l];r[l]=u.attribute,n[u.name]=u,s[u.attribute]=u}this.attributes=i,this.observedAttributes=r,this.propertyLookup=n,this.attributeLookup=s,this.shadowOptions=e.shadowOptions===void 0?$l:e.shadowOptions===null?void 0:Object.assign(Object.assign({},$l),e.shadowOptions),this.elementOptions=e.elementOptions===void 0?kl:Object.assign(Object.assign({},kl),e.elementOptions),this.styles=e.styles===void 0?void 0:Array.isArray(e.styles)?pt.create(e.styles):e.styles instanceof pt?e.styles:pt.create([e.styles])}get isDefined(){return!!hs.getByType(this.type)}define(t=customElements){let e=this.type;if(hs.register(this)){let i=this.attributes,r=e.prototype;for(let n=0,s=i.length;n<s;++n)R.defineProperty(r,i[n]);Reflect.defineProperty(e,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return t.get(this.name)||t.define(this.name,e,this.elementOptions),this}};Fe.forType=hs.getByType;var Cl=new WeakMap,xp={bubbles:!0,composed:!0,cancelable:!0};function us(o){return o.shadowRoot||Cl.get(o)||null}var fr=class o extends Yo{constructor(t,e){super(t),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=t,this.definition=e;let i=e.shadowOptions;if(i!==void 0){let n=t.attachShadow(i);i.mode==="closed"&&Cl.set(t,n)}let r=R.getAccessors(t);if(r.length>0){let n=this.boundObservables=Object.create(null);for(let s=0,l=r.length;s<l;++s){let d=r[s].name,u=t[d];u!==void 0&&(delete t[d],n[d]=u)}}}get isConnected(){return R.track(this,"isConnected"),this._isConnected}setIsConnected(t){this._isConnected=t,R.notify(this,"isConnected")}get template(){return this._template}set template(t){this._template!==t&&(this._template=t,this.needsInitialization||this.renderTemplate(t))}get styles(){return this._styles}set styles(t){this._styles!==t&&(this._styles!==null&&this.removeStyles(this._styles),this._styles=t,!this.needsInitialization&&t!==null&&this.addStyles(t))}addStyles(t){let e=us(this.element)||this.element.getRootNode();if(t instanceof HTMLStyleElement)e.append(t);else if(!t.isAttachedTo(e)){let i=t.behaviors;t.addStylesTo(e),i!==null&&this.addBehaviors(i)}}removeStyles(t){let e=us(this.element)||this.element.getRootNode();if(t instanceof HTMLStyleElement)e.removeChild(t);else if(t.isAttachedTo(e)){let i=t.behaviors;t.removeStylesFrom(e),i!==null&&this.removeBehaviors(i)}}addBehaviors(t){let e=this.behaviors||(this.behaviors=new Map),i=t.length,r=[];for(let n=0;n<i;++n){let s=t[n];e.has(s)?e.set(s,e.get(s)+1):(e.set(s,1),r.push(s))}if(this._isConnected){let n=this.element;for(let s=0;s<r.length;++s)r[s].bind(n,no)}}removeBehaviors(t,e=!1){let i=this.behaviors;if(i===null)return;let r=t.length,n=[];for(let s=0;s<r;++s){let l=t[s];if(i.has(l)){let d=i.get(l)-1;d===0||e?i.delete(l)&&n.push(l):i.set(l,d)}}if(this._isConnected){let s=this.element;for(let l=0;l<n.length;++l)n[l].unbind(s)}}onConnectedCallback(){if(this._isConnected)return;let t=this.element;this.needsInitialization?this.finishInitialization():this.view!==null&&this.view.bind(t,no);let e=this.behaviors;if(e!==null)for(let[i]of e)i.bind(t,no);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);let t=this.view;t!==null&&t.unbind();let e=this.behaviors;if(e!==null){let i=this.element;for(let[r]of e)r.unbind(i)}}onAttributeChangedCallback(t,e,i){let r=this.definition.attributeLookup[t];r!==void 0&&r.onAttributeChangedCallback(this.element,i)}emit(t,e,i){return this._isConnected?this.element.dispatchEvent(new CustomEvent(t,Object.assign(Object.assign({detail:e},xp),i))):!1}finishInitialization(){let t=this.element,e=this.boundObservables;if(e!==null){let r=Object.keys(e);for(let n=0,s=r.length;n<s;++n){let l=r[n];t[l]=e[l]}this.boundObservables=null}let i=this.definition;this._template===null&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():i.template&&(this._template=i.template||null)),this._template!==null&&this.renderTemplate(this._template),this._styles===null&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():i.styles&&(this._styles=i.styles||null)),this._styles!==null&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(t){let e=this.element,i=us(e)||e;this.view!==null?(this.view.dispose(),this.view=null):this.needsInitialization||F.removeChildNodes(i),t&&(this.view=t.render(e,i,e))}static forCustomElement(t){let e=t.$fastController;if(e!==void 0)return e;let i=Fe.forType(t.constructor);if(i===void 0)throw new Error("Missing FASTElement definition.");return t.$fastController=new o(t,i)}};function Sl(o){return class extends o{constructor(){super(),fr.forCustomElement(this)}$emit(t,e,i){return this.$fastController.emit(t,e,i)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(t,e,i){this.$fastController.onAttributeChangedCallback(t,e,i)}}}var lo=Object.assign(Sl(HTMLElement),{from(o){return Sl(o)},define(o,t){return new Fe(o,t).define().type}});var co=class{createCSS(){return""}createBehavior(){}};function Fl(o,t){let e=[],i="",r=[];for(let n=0,s=o.length-1;n<s;++n){i+=o[n];let l=t[n];if(l instanceof co){let d=l.createBehavior();l=l.createCSS(),d&&r.push(d)}l instanceof pt||l instanceof CSSStyleSheet?(i.trim()!==""&&(e.push(i),i=""),e.push(l)):i+=l}return i+=o[o.length-1],i.trim()!==""&&e.push(i),{styles:e,behaviors:r}}function m(o,...t){let{styles:e,behaviors:i}=Fl(o,t),r=pt.create(e);return i.length&&r.withBehaviors(...i),r}var ps=class extends co{constructor(t,e){super(),this.behaviors=e,this.css="";let i=t.reduce((r,n)=>(typeof n=="string"?this.css+=n:r.push(n),r),[]);i.length&&(this.styles=pt.create(i))}createBehavior(){return this}createCSS(){return this.css}bind(t){this.styles&&t.$fastController.addStyles(this.styles),this.behaviors.length&&t.$fastController.addBehaviors(this.behaviors)}unbind(t){this.styles&&t.$fastController.removeStyles(this.styles),this.behaviors.length&&t.$fastController.removeBehaviors(this.behaviors)}};function kt(o,...t){let{styles:e,behaviors:i}=Fl(o,t);return new ps(e,i)}function ne(o,t,e){return{index:o,removed:t,addedCount:e}}var Rl=0,Il=1,fs=2,ms=3;function yp(o,t,e,i,r,n){let s=n-r+1,l=e-t+1,d=new Array(s),u,p;for(let g=0;g<s;++g)d[g]=new Array(l),d[g][0]=g;for(let g=0;g<l;++g)d[0][g]=g;for(let g=1;g<s;++g)for(let y=1;y<l;++y)o[t+y-1]===i[r+g-1]?d[g][y]=d[g-1][y-1]:(u=d[g-1][y]+1,p=d[g][y-1]+1,d[g][y]=u<p?u:p);return d}function wp(o){let t=o.length-1,e=o[0].length-1,i=o[t][e],r=[];for(;t>0||e>0;){if(t===0){r.push(fs),e--;continue}if(e===0){r.push(ms),t--;continue}let n=o[t-1][e-1],s=o[t-1][e],l=o[t][e-1],d;s<l?d=s<n?s:n:d=l<n?l:n,d===n?(n===i?r.push(Rl):(r.push(Il),i=n),t--,e--):d===s?(r.push(ms),t--,i=s):(r.push(fs),e--,i=l)}return r.reverse(),r}function $p(o,t,e){for(let i=0;i<e;++i)if(o[i]!==t[i])return i;return e}function kp(o,t,e){let i=o.length,r=t.length,n=0;for(;n<e&&o[--i]===t[--r];)n++;return n}function Cp(o,t,e,i){return t<e||i<o?-1:t===e||i===o?0:o<e?t<i?t-e:i-e:i<t?i-o:t-o}function gs(o,t,e,i,r,n){let s=0,l=0,d=Math.min(e-t,n-r);if(t===0&&r===0&&(s=$p(o,i,d)),e===o.length&&n===i.length&&(l=kp(o,i,d-s)),t+=s,r+=s,e-=l,n-=l,e-t===0&&n-r===0)return re;if(t===e){let j=ne(t,[],0);for(;r<n;)j.removed.push(i[r++]);return[j]}else if(r===n)return[ne(t,[],e-t)];let u=wp(yp(o,t,e,i,r,n)),p=[],g,y=t,B=r;for(let j=0;j<u.length;++j)switch(u[j]){case Rl:g!==void 0&&(p.push(g),g=void 0),y++,B++;break;case Il:g===void 0&&(g=ne(y,[],0)),g.addedCount++,y++,g.removed.push(i[B]),B++;break;case fs:g===void 0&&(g=ne(y,[],0)),g.addedCount++,y++;break;case ms:g===void 0&&(g=ne(y,[],0)),g.removed.push(i[B]),B++;break}return g!==void 0&&p.push(g),p}var Tl=Array.prototype.push;function Sp(o,t,e,i){let r=ne(t,e,i),n=!1,s=0;for(let l=0;l<o.length;l++){let d=o[l];if(d.index+=s,n)continue;let u=Cp(r.index,r.index+r.removed.length,d.index,d.index+d.addedCount);if(u>=0){o.splice(l,1),l--,s-=d.addedCount-d.removed.length,r.addedCount+=d.addedCount-u;let p=r.removed.length+d.removed.length-u;if(!r.addedCount&&!p)n=!0;else{let g=d.removed;if(r.index<d.index){let y=r.removed.slice(0,d.index-r.index);Tl.apply(y,g),g=y}if(r.index+r.removed.length>d.index+d.addedCount){let y=r.removed.slice(d.index+d.addedCount-r.index);Tl.apply(g,y)}r.removed=g,d.index<r.index&&(r.index=d.index)}}else if(r.index<d.index){n=!0,o.splice(l,0,r),l++;let p=r.addedCount-r.removed.length;d.index+=p,s+=p}}n||o.push(r)}function Fp(o){let t=[];for(let e=0,i=o.length;e<i;e++){let r=o[e];Sp(t,r.index,r.removed,r.addedCount)}return t}function Dl(o,t){let e=[],i=Fp(t);for(let r=0,n=i.length;r<n;++r){let s=i[r];if(s.addedCount===1&&s.removed.length===1){s.removed[0]!==o[s.index]&&e.push(s);continue}e=e.concat(gs(o,s.index,s.index+s.addedCount,s.removed,0,s.removed.length))}return e}var Al=!1;function vs(o,t){let e=o.index,i=t.length;return e>i?e=i-o.addedCount:e<0&&(e=i+o.removed.length+e-o.addedCount),e<0&&(e=0),o.index=e,o}var bs=class extends io{constructor(t){super(t),this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this.call=this.flush,Reflect.defineProperty(t,"$fastController",{value:this,enumerable:!1})}subscribe(t){this.flush(),super.subscribe(t)}addSplice(t){this.splices===void 0?this.splices=[t]:this.splices.push(t),this.needsQueue&&(this.needsQueue=!1,F.queueUpdate(this))}reset(t){this.oldCollection=t,this.needsQueue&&(this.needsQueue=!1,F.queueUpdate(this))}flush(){let t=this.splices,e=this.oldCollection;if(t===void 0&&e===void 0)return;this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0;let i=e===void 0?Dl(this.source,t):gs(this.source,0,this.source.length,e,0,e.length);this.notify(i)}};function Ol(){if(Al)return;Al=!0,R.setArrayObserverFactory(d=>new bs(d));let o=Array.prototype;if(o.$fastPatch)return;Reflect.defineProperty(o,"$fastPatch",{value:1,enumerable:!1});let t=o.pop,e=o.push,i=o.reverse,r=o.shift,n=o.sort,s=o.splice,l=o.unshift;o.pop=function(){let d=this.length>0,u=t.apply(this,arguments),p=this.$fastController;return p!==void 0&&d&&p.addSplice(ne(this.length,[u],0)),u},o.push=function(){let d=e.apply(this,arguments),u=this.$fastController;return u!==void 0&&u.addSplice(vs(ne(this.length-arguments.length,[],arguments.length),this)),d},o.reverse=function(){let d,u=this.$fastController;u!==void 0&&(u.flush(),d=this.slice());let p=i.apply(this,arguments);return u!==void 0&&u.reset(d),p},o.shift=function(){let d=this.length>0,u=r.apply(this,arguments),p=this.$fastController;return p!==void 0&&d&&p.addSplice(ne(0,[u],0)),u},o.sort=function(){let d,u=this.$fastController;u!==void 0&&(u.flush(),d=this.slice());let p=n.apply(this,arguments);return u!==void 0&&u.reset(d),p},o.splice=function(){let d=s.apply(this,arguments),u=this.$fastController;return u!==void 0&&u.addSplice(vs(ne(+arguments[0],d,arguments.length>2?arguments.length-2:0),this)),d},o.unshift=function(){let d=l.apply(this,arguments),u=this.$fastController;return u!==void 0&&u.addSplice(vs(ne(0,[],arguments.length),this)),d}}var xs=class{constructor(t,e){this.target=t,this.propertyName=e}bind(t){t[this.propertyName]=this.target}unbind(){}};function V(o){return new ao("fast-ref",xs,o)}var ys=o=>typeof o=="function";var Tp=()=>null;function El(o){return o===void 0?Tp:ys(o)?o:()=>o}function U(o,t,e){let i=ys(o)?o:()=>o,r=El(t),n=El(e);return(s,l)=>i(s,l)?r(s,l):n(s,l)}var Ll=Object.freeze({positioning:!1,recycle:!0});function Rp(o,t,e,i){o.bind(t[e],i)}function Ip(o,t,e,i){let r=Object.create(i);r.index=e,r.length=t.length,o.bind(t[e],r)}var ws=class{constructor(t,e,i,r,n,s){this.location=t,this.itemsBinding=e,this.templateBinding=r,this.options=s,this.source=null,this.views=[],this.items=null,this.itemsObserver=null,this.originalContext=void 0,this.childContext=void 0,this.bindView=Rp,this.itemsBindingObserver=R.binding(e,this,i),this.templateBindingObserver=R.binding(r,this,n),s.positioning&&(this.bindView=Ip)}bind(t,e){this.source=t,this.originalContext=e,this.childContext=Object.create(e),this.childContext.parent=t,this.childContext.parentContext=this.originalContext,this.items=this.itemsBindingObserver.observe(t,this.originalContext),this.template=this.templateBindingObserver.observe(t,this.originalContext),this.observeItems(!0),this.refreshAllViews()}unbind(){this.source=null,this.items=null,this.itemsObserver!==null&&this.itemsObserver.unsubscribe(this),this.unbindAllViews(),this.itemsBindingObserver.disconnect(),this.templateBindingObserver.disconnect()}handleChange(t,e){t===this.itemsBinding?(this.items=this.itemsBindingObserver.observe(this.source,this.originalContext),this.observeItems(),this.refreshAllViews()):t===this.templateBinding?(this.template=this.templateBindingObserver.observe(this.source,this.originalContext),this.refreshAllViews(!0)):this.updateViews(e)}observeItems(t=!1){if(!this.items){this.items=re;return}let e=this.itemsObserver,i=this.itemsObserver=R.getNotifier(this.items),r=e!==i;r&&e!==null&&e.unsubscribe(this),(r||t)&&i.subscribe(this)}updateViews(t){let e=this.childContext,i=this.views,r=this.bindView,n=this.items,s=this.template,l=this.options.recycle,d=[],u=0,p=0;for(let g=0,y=t.length;g<y;++g){let B=t[g],j=B.removed,Q=0,ot=B.index,ie=ot+B.addedCount,Dt=i.splice(B.index,j.length),ve=p=d.length+Dt.length;for(;ot<ie;++ot){let oo=i[ot],To=oo?oo.firstChild:this.location,be;l&&p>0?(Q<=ve&&Dt.length>0?(be=Dt[Q],Q++):(be=d[u],u++),p--):be=s.create(),i.splice(ot,0,be),r(be,n,ot,e),be.insertBefore(To)}Dt[Q]&&d.push(...Dt.slice(Q))}for(let g=u,y=d.length;g<y;++g)d[g].dispose();if(this.options.positioning)for(let g=0,y=i.length;g<y;++g){let B=i[g].context;B.length=y,B.index=g}}refreshAllViews(t=!1){let e=this.items,i=this.childContext,r=this.template,n=this.location,s=this.bindView,l=e.length,d=this.views,u=d.length;if((l===0||t||!this.options.recycle)&&(Zo.disposeContiguousBatch(d),u=0),u===0){this.views=d=new Array(l);for(let p=0;p<l;++p){let g=r.create();s(g,e,p,i),d[p]=g,g.insertBefore(n)}}else{let p=0;for(;p<l;++p)if(p<u){let y=d[p];s(y,e,p,i)}else{let y=r.create();s(y,e,p,i),d.push(y),y.insertBefore(n)}let g=d.splice(p,u-p);for(p=0,l=g.length;p<l;++p)g[p].dispose()}}unbindAllViews(){let t=this.views;for(let e=0,i=t.length;e<i;++e)t[e].unbind()}},Do=class extends so{constructor(t,e,i){super(),this.itemsBinding=t,this.templateBinding=e,this.options=i,this.createPlaceholder=F.createBlockPlaceholder,Ol(),this.isItemsBindingVolatile=R.isVolatileBinding(t),this.isTemplateBindingVolatile=R.isVolatileBinding(e)}createBehavior(t){return new ws(t,this.itemsBinding,this.isItemsBindingVolatile,this.templateBinding,this.isTemplateBindingVolatile,this.options)}};function Ao(o,t,e=Ll){let i=typeof t=="function"?t:()=>t;return new Do(o,i,Object.assign(Object.assign({},Ll),e))}function Ct(o){return o?function(t,e,i){return t.nodeType===1&&t.matches(o)}:function(t,e,i){return t.nodeType===1}}var Jo=class{constructor(t,e){this.target=t,this.options=e,this.source=null}bind(t){let e=this.options.property;this.shouldUpdate=R.getAccessors(t).some(i=>i.name===e),this.source=t,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(re),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let t=this.getNodes();return this.options.filter!==void 0&&(t=t.filter(this.options.filter)),t}updateTarget(t){this.source[this.options.property]=t}};var $s=class extends Jo{constructor(t,e){super(t,e)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}};function z(o){return typeof o=="string"&&(o={property:o}),new ao("fast-slotted",$s,o)}var ks=class extends Jo{constructor(t,e){super(t,e),this.observer=null,e.childList=!0}observe(){this.observer===null&&(this.observer=new MutationObserver(this.handleEvent.bind(this))),this.observer.observe(this.target,this.options)}disconnect(){this.observer.disconnect()}getNodes(){return"subtree"in this.options?Array.from(this.target.querySelectorAll(this.options.selector)):Array.from(this.target.childNodes)}};function ho(o){return typeof o=="string"&&(o={property:o}),new ao("fast-children",ks,o)}var Z=class{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}},J=(o,t)=>v`
    <span
        part="end"
        ${V("endContainer")}
        class=${e=>t.end?"end":void 0}
    >
        <slot name="end" ${V("end")} @slotchange="${e=>e.handleEndContentChange()}">
            ${t.end||""}
        </slot>
    </span>
`,K=(o,t)=>v`
    <span
        part="start"
        ${V("startContainer")}
        class="${e=>t.start?"start":void 0}"
    >
        <slot
            name="start"
            ${V("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        >
            ${t.start||""}
        </slot>
    </span>
`,Vl=v`
    <span part="end" ${V("endContainer")}>
        <slot
            name="end"
            ${V("end")}
            @slotchange="${o=>o.handleEndContentChange()}"
        ></slot>
    </span>
`,Pl=v`
    <span part="start" ${V("startContainer")}>
        <slot
            name="start"
            ${V("start")}
            @slotchange="${o=>o.handleStartContentChange()}"
        ></slot>
    </span>
`;var Hl=(o,t)=>v`
    <template class="${e=>e.expanded?"expanded":""}">
        <div
            class="heading"
            part="heading"
            role="heading"
            aria-level="${e=>e.headinglevel}"
        >
            <button
                class="button"
                part="button"
                ${V("expandbutton")}
                aria-expanded="${e=>e.expanded}"
                aria-controls="${e=>e.id}-panel"
                id="${e=>e.id}"
                @click="${(e,i)=>e.clickHandler(i.event)}"
            >
                <span class="heading-content" part="heading-content">
                    <slot name="heading"></slot>
                </span>
            </button>
            ${K(o,t)}
            ${J(o,t)}
            <span class="icon" part="icon" aria-hidden="true">
                <slot name="expanded-icon" part="expanded-icon">
                    ${t.expandedIcon||""}
                </slot>
                <slot name="collapsed-icon" part="collapsed-icon">
                    ${t.collapsedIcon||""}
                </slot>
            <span>
        </div>
        <div
            class="region"
            part="region"
            id="${e=>e.id}-panel"
            role="region"
            aria-labelledby="${e=>e.id}"
        >
            <slot></slot>
        </div>
    </template>
`;function a(o,t,e,i){var r=arguments.length,n=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,i);else for(var l=o.length-1;l>=0;l--)(s=o[l])&&(n=(r<3?s(n):r>3?s(t,e,n):s(t,e))||n);return r>3&&n&&Object.defineProperty(t,e,n),n}var Cs=new Map;"metadata"in Reflect||(Reflect.metadata=function(o,t){return function(e){Reflect.defineMetadata(o,t,e)}},Reflect.defineMetadata=function(o,t,e){let i=Cs.get(e);i===void 0&&Cs.set(e,i=new Map),i.set(o,t)},Reflect.getOwnMetadata=function(o,t){let e=Cs.get(t);if(e!==void 0)return e.get(o)});var Rs=class{constructor(t,e){this.container=t,this.key=e}instance(t){return this.registerResolver(0,t)}singleton(t){return this.registerResolver(1,t)}transient(t){return this.registerResolver(2,t)}callback(t){return this.registerResolver(3,t)}cachedCallback(t){return this.registerResolver(3,Xl(t))}aliasTo(t){return this.registerResolver(5,t)}registerResolver(t,e){let{container:i,key:r}=this;return this.container=this.key=void 0,i.registerResolver(r,new zt(r,t,e))}};function Ti(o){let t=o.slice(),e=Object.keys(o),i=e.length,r;for(let n=0;n<i;++n)r=e[n],Yl(r)||(t[r]=o[r]);return t}var Dp=Object.freeze({none(o){throw Error(`${o.toString()} not registered, did you forget to add @singleton()?`)},singleton(o){return new zt(o,1,o)},transient(o){return new zt(o,2,o)}}),Ss=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:Dp.singleton})}),Bl=new Map;function Ml(o){return t=>Reflect.getOwnMetadata(o,t)}var zl=null,et=Object.freeze({createContainer(o){return new Ri(null,Object.assign({},Ss.default,o))},findResponsibleContainer(o){let t=o.$$container$$;return t&&t.responsibleForOwnerRequests?t:et.findParentContainer(o)},findParentContainer(o){let t=new CustomEvent(Wl,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return o.dispatchEvent(t),t.detail.container||et.getOrCreateDOMContainer()},getOrCreateDOMContainer(o,t){return o?o.$$container$$||new Ri(o,Object.assign({},Ss.default,t,{parentLocator:et.findParentContainer})):zl||(zl=new Ri(null,Object.assign({},Ss.default,t,{parentLocator:()=>null})))},getDesignParamtypes:Ml("design:paramtypes"),getAnnotationParamtypes:Ml("di:paramtypes"),getOrCreateAnnotationParamTypes(o){let t=this.getAnnotationParamtypes(o);return t===void 0&&Reflect.defineMetadata("di:paramtypes",t=[],o),t},getDependencies(o){let t=Bl.get(o);if(t===void 0){let e=o.inject;if(e===void 0){let i=et.getDesignParamtypes(o),r=et.getAnnotationParamtypes(o);if(i===void 0)if(r===void 0){let n=Object.getPrototypeOf(o);typeof n=="function"&&n!==Function.prototype?t=Ti(et.getDependencies(n)):t=[]}else t=Ti(r);else if(r===void 0)t=Ti(i);else{t=Ti(i);let n=r.length,s;for(let u=0;u<n;++u)s=r[u],s!==void 0&&(t[u]=s);let l=Object.keys(r);n=l.length;let d;for(let u=0;u<n;++u)d=l[u],Yl(d)||(t[d]=r[d])}}else t=Ti(e);Bl.set(o,t)}return t},defineProperty(o,t,e,i=!1){let r=`$di_${t}`;Reflect.defineProperty(o,t,{get:function(){let n=this[r];if(n===void 0&&(n=(this instanceof HTMLElement?et.findResponsibleContainer(this):et.getOrCreateDOMContainer()).get(e),this[r]=n,i&&this instanceof lo)){let l=this.$fastController,d=()=>{let p=et.findResponsibleContainer(this).get(e),g=this[r];p!==g&&(this[r]=n,l.notify(t))};l.subscribe({handleChange:d},"isConnected")}return n}})},createInterface(o,t){let e=typeof o=="function"?o:t,i=typeof o=="string"?o:o&&"friendlyName"in o&&o.friendlyName||Gl,r=typeof o=="string"?!1:o&&"respectConnection"in o&&o.respectConnection||!1,n=function(s,l,d){if(s==null||new.target!==void 0)throw new Error(`No registration for interface: '${n.friendlyName}'`);if(l)et.defineProperty(s,l,n,r);else{let u=et.getOrCreateAnnotationParamTypes(s);u[d]=n}};return n.$isInterface=!0,n.friendlyName=i??"(anonymous)",e!=null&&(n.register=function(s,l){return e(new Rs(s,l??n))}),n.toString=function(){return`InterfaceSymbol<${n.friendlyName}>`},n},inject(...o){return function(t,e,i){if(typeof i=="number"){let r=et.getOrCreateAnnotationParamTypes(t),n=o[0];n!==void 0&&(r[i]=n)}else if(e)et.defineProperty(t,e,o[0]);else{let r=i?et.getOrCreateAnnotationParamTypes(i.value):et.getOrCreateAnnotationParamTypes(t),n;for(let s=0;s<o.length;++s)n=o[s],n!==void 0&&(r[s]=n)}}},transient(o){return o.register=function(e){return Oo.transient(o,o).register(e)},o.registerInRequestor=!1,o},singleton(o,t=Op){return o.register=function(i){return Oo.singleton(o,o).register(i)},o.registerInRequestor=t.scoped,o}}),Ap=et.createInterface("Container");function br(o){return function(t){let e=function(i,r,n){et.inject(e)(i,r,n)};return e.$isResolver=!0,e.resolve=function(i,r){return o(t,i,r)},e}}var Av=et.inject;var Op={scoped:!1};function Ep(o){return function(t,e){e=!!e;let i=function(r,n,s){et.inject(i)(r,n,s)};return i.$isResolver=!0,i.resolve=function(r,n){return o(t,r,n,e)},i}}var Ov=Ep((o,t,e,i)=>e.getAll(o,i)),Ev=br((o,t,e)=>()=>e.get(o)),Lv=br((o,t,e)=>{if(e.has(o,!0))return e.get(o)});function Ds(o,t,e){et.inject(Ds)(o,t,e)}Ds.$isResolver=!0;Ds.resolve=()=>{};var Vv=br((o,t,e)=>{let i=ql(o,t),r=new zt(o,0,i);return e.registerResolver(o,r),i}),Pv=br((o,t,e)=>ql(o,t));function ql(o,t){return t.getFactory(o).construct(t)}var zt=class{constructor(t,e,i){this.key=t,this.strategy=e,this.state=i,this.resolving=!1}get $isResolver(){return!0}register(t){return t.registerResolver(this.key,this)}resolve(t,e){switch(this.strategy){case 0:return this.state;case 1:{if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=t.getFactory(this.state).construct(e),this.strategy=0,this.resolving=!1,this.state}case 2:{let i=t.getFactory(this.state);if(i===null)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return i.construct(e)}case 3:return this.state(t,e,this);case 4:return this.state[0].resolve(t,e);case 5:return e.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(t){var e,i,r;switch(this.strategy){case 1:case 2:return t.getFactory(this.state);case 5:return(r=(i=(e=t.getResolver(this.state))===null||e===void 0?void 0:e.getFactory)===null||i===void 0?void 0:i.call(e,t))!==null&&r!==void 0?r:null;default:return null}}};function Nl(o){return this.get(o)}function Lp(o,t){return t(o)}var Is=class{constructor(t,e){this.Type=t,this.dependencies=e,this.transformers=null}construct(t,e){let i;return e===void 0?i=new this.Type(...this.dependencies.map(Nl,t)):i=new this.Type(...this.dependencies.map(Nl,t),...e),this.transformers==null?i:this.transformers.reduce(Lp,i)}registerTransformer(t){(this.transformers||(this.transformers=[])).push(t)}},Vp={$isResolver:!0,resolve(o,t){return t}};function vr(o){return typeof o.register=="function"}function Pp(o){return vr(o)&&typeof o.registerInRequestor=="boolean"}function _l(o){return Pp(o)&&o.registerInRequestor}function Hp(o){return o.prototype!==void 0}var Bp=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),Wl="__DI_LOCATE_PARENT__",Fs=new Map,Ri=class o{constructor(t,e){this.owner=t,this.config=e,this._parent=void 0,this.registerDepth=0,this.context=null,t!==null&&(t.$$container$$=this),this.resolvers=new Map,this.resolvers.set(Ap,Vp),t instanceof Node&&t.addEventListener(Wl,i=>{i.composedPath()[0]!==this.owner&&(i.detail.container=this,i.stopImmediatePropagation())})}get parent(){return this._parent===void 0&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return this.parent===null?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(t,...e){return this.context=t,this.register(...e),this.context=null,this}register(...t){if(++this.registerDepth===100)throw new Error("Unable to autoregister dependency");let e,i,r,n,s,l=this.context;for(let d=0,u=t.length;d<u;++d)if(e=t[d],!!Ul(e))if(vr(e))e.register(this,l);else if(Hp(e))Oo.singleton(e,e).register(this);else for(i=Object.keys(e),n=0,s=i.length;n<s;++n)r=e[i[n]],Ul(r)&&(vr(r)?r.register(this,l):this.register(r));return--this.registerDepth,this}registerResolver(t,e){mr(t);let i=this.resolvers,r=i.get(t);return r==null?i.set(t,e):r instanceof zt&&r.strategy===4?r.state.push(e):i.set(t,new zt(t,4,[r,e])),e}registerTransformer(t,e){let i=this.getResolver(t);if(i==null)return!1;if(i.getFactory){let r=i.getFactory(this);return r==null?!1:(r.registerTransformer(e),!0)}return!1}getResolver(t,e=!0){if(mr(t),t.resolve!==void 0)return t;let i=this,r;for(;i!=null;)if(r=i.resolvers.get(t),r==null){if(i.parent==null){let n=_l(t)?this:i;return e?this.jitRegister(t,n):null}i=i.parent}else return r;return null}has(t,e=!1){return this.resolvers.has(t)?!0:e&&this.parent!=null?this.parent.has(t,!0):!1}get(t){if(mr(t),t.$isResolver)return t.resolve(this,this);let e=this,i;for(;e!=null;)if(i=e.resolvers.get(t),i==null){if(e.parent==null){let r=_l(t)?this:e;return i=this.jitRegister(t,r),i.resolve(e,this)}e=e.parent}else return i.resolve(e,this);throw new Error(`Unable to resolve key: ${t}`)}getAll(t,e=!1){mr(t);let i=this,r=i,n;if(e){let s=re;for(;r!=null;)n=r.resolvers.get(t),n!=null&&(s=s.concat(jl(n,r,i))),r=r.parent;return s}else for(;r!=null;)if(n=r.resolvers.get(t),n==null){if(r=r.parent,r==null)return re}else return jl(n,r,i);return re}getFactory(t){let e=Fs.get(t);if(e===void 0){if(Mp(t))throw new Error(`${t.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);Fs.set(t,e=new Is(t,et.getDependencies(t)))}return e}registerFactory(t,e){Fs.set(t,e)}createChild(t){return new o(null,Object.assign({},this.config,t,{parentLocator:()=>this}))}jitRegister(t,e){if(typeof t!="function")throw new Error(`Attempted to jitRegister something that is not a constructor: '${t}'. Did you forget to register this dependency?`);if(Bp.has(t.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${t.name}. Did you forget to add @inject(Key)`);if(vr(t)){let i=t.register(e);if(!(i instanceof Object)||i.resolve==null){let r=e.resolvers.get(t);if(r!=null)return r;throw new Error("A valid resolver was not returned from the static register method")}return i}else{if(t.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${t.friendlyName}`);{let i=this.config.defaultResolver(t,e);return e.resolvers.set(t,i),i}}}},Ts=new WeakMap;function Xl(o){return function(t,e,i){if(Ts.has(i))return Ts.get(i);let r=o(t,e,i);return Ts.set(i,r),r}}var Oo=Object.freeze({instance(o,t){return new zt(o,0,t)},singleton(o,t){return new zt(o,1,t)},transient(o,t){return new zt(o,2,t)},callback(o,t){return new zt(o,3,t)},cachedCallback(o,t){return new zt(o,3,Xl(t))},aliasTo(o,t){return new zt(t,5,o)}});function mr(o){if(o==null)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function jl(o,t,e){if(o instanceof zt&&o.strategy===4){let i=o.state,r=i.length,n=new Array(r);for(;r--;)n[r]=i[r].resolve(t,e);return n}return[o.resolve(t,e)]}var Gl="(anonymous)";function Ul(o){return typeof o=="object"&&o!==null||typeof o=="function"}var Mp=function(){let o=new WeakMap,t=!1,e="",i=0;return function(r){return t=o.get(r),t===void 0&&(e=r.toString(),i=e.length,t=i>=29&&i<=100&&e.charCodeAt(i-1)===125&&e.charCodeAt(i-2)<=32&&e.charCodeAt(i-3)===93&&e.charCodeAt(i-4)===101&&e.charCodeAt(i-5)===100&&e.charCodeAt(i-6)===111&&e.charCodeAt(i-7)===99&&e.charCodeAt(i-8)===32&&e.charCodeAt(i-9)===101&&e.charCodeAt(i-10)===118&&e.charCodeAt(i-11)===105&&e.charCodeAt(i-12)===116&&e.charCodeAt(i-13)===97&&e.charCodeAt(i-14)===110&&e.charCodeAt(i-15)===88,o.set(r,t)),t}}(),gr={};function Yl(o){switch(typeof o){case"number":return o>=0&&(o|0)===o;case"string":{let t=gr[o];if(t!==void 0)return t;let e=o.length;if(e===0)return gr[o]=!1;let i=0;for(let r=0;r<e;++r)if(i=o.charCodeAt(r),r===0&&i===48&&e>1||i<48||i>57)return gr[o]=!1;return gr[o]=!0}default:return!1}}function Ql(o){return`${o.toLowerCase()}:presentation`}var xr=new Map,wr=Object.freeze({define(o,t,e){let i=Ql(o);xr.get(i)===void 0?xr.set(i,t):xr.set(i,!1),e.register(Oo.instance(i,t))},forTag(o,t){let e=Ql(o),i=xr.get(e);return i===!1?et.findResponsibleContainer(t).get(e):i||null}}),yr=class{constructor(t,e){this.template=t||null,this.styles=e===void 0?null:Array.isArray(e)?pt.create(e):e instanceof pt?e:pt.create([e])}applyTo(t){let e=t.$fastController;e.template===null&&(e.template=this.template),e.styles===null&&(e.styles=this.styles)}};var w=class o extends lo{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return this._presentation===void 0&&(this._presentation=wr.forTag(this.tagName,this)),this._presentation}templateChanged(){this.template!==void 0&&(this.$fastController.template=this.template)}stylesChanged(){this.styles!==void 0&&(this.$fastController.styles=this.styles)}connectedCallback(){this.$presentation!==null&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(t){return(e={})=>new As(this===o?class extends o{}:this,t,e)}};a([f],w.prototype,"template",void 0);a([f],w.prototype,"styles",void 0);function Ii(o,t,e){return typeof o=="function"?o(t,e):o}var As=class{constructor(t,e,i){this.type=t,this.elementDefinition=e,this.overrideDefinition=i,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(t,e){let i=this.definition,r=this.overrideDefinition,s=`${i.prefix||e.elementPrefix}-${i.baseName}`;e.tryDefineElement({name:s,type:this.type,baseClass:this.elementDefinition.baseClass,callback:l=>{let d=new yr(Ii(i.template,l,i),Ii(i.styles,l,i));l.definePresentation(d);let u=Ii(i.shadowOptions,l,i);l.shadowRootMode&&(u?r.shadowOptions||(u.mode=l.shadowRootMode):u!==null&&(u={mode:l.shadowRootMode})),l.defineElement({elementOptions:Ii(i.elementOptions,l,i),shadowOptions:u,attributes:Ii(i.attributes,l,i)})}})}};function _(o,...t){let e=Fi.locate(o);t.forEach(i=>{Object.getOwnPropertyNames(i.prototype).forEach(n=>{n!=="constructor"&&Object.defineProperty(o.prototype,n,Object.getOwnPropertyDescriptor(i.prototype,n))}),Fi.locate(i).forEach(n=>e.push(n))})}var ye=class extends w{constructor(){super(...arguments),this.headinglevel=2,this.expanded=!1,this.clickHandler=t=>{this.expanded=!this.expanded,this.change()},this.change=()=>{this.$emit("change")}}};a([c({attribute:"heading-level",mode:"fromView",converter:S})],ye.prototype,"headinglevel",void 0);a([c({mode:"boolean"})],ye.prototype,"expanded",void 0);a([c],ye.prototype,"id",void 0);_(ye,Z);var Zl=(o,t)=>v`
    <template>
        <slot ${z({property:"accordionItems",filter:Ct()})}></slot>
        <slot name="item" part="item" ${z("accordionItems")}></slot>
    </template>
`;var tt={horizontal:"horizontal",vertical:"vertical"};function Jl(o,t){let e=o.length;for(;e--;)if(t(o[e],e,o))return e;return-1}function Kl(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Te(...o){return o.every(t=>t instanceof HTMLElement)}function tc(o,t){return!o||!t||!Te(o)?void 0:Array.from(o.querySelectorAll(t)).filter(i=>i.offsetParent!==null)}function zp(){let o=document.querySelector('meta[property="csp-nonce"]');return o?o.getAttribute("content"):null}var Eo;function ec(){if(typeof Eo=="boolean")return Eo;if(!Kl())return Eo=!1,Eo;let o=document.createElement("style"),t=zp();t!==null&&o.setAttribute("nonce",t),document.head.appendChild(o);try{o.sheet.insertRule("foo:focus-visible {color:inherit}",0),Eo=!0}catch{Eo=!1}finally{document.head.removeChild(o)}return Eo}var Os="focus",Es="focusin",Me="focusout";var ze="keydown";var Ls="resize";var Vs="scroll";var oc;(function(o){o[o.alt=18]="alt",o[o.arrowDown=40]="arrowDown",o[o.arrowLeft=37]="arrowLeft",o[o.arrowRight=39]="arrowRight",o[o.arrowUp=38]="arrowUp",o[o.back=8]="back",o[o.backSlash=220]="backSlash",o[o.break=19]="break",o[o.capsLock=20]="capsLock",o[o.closeBracket=221]="closeBracket",o[o.colon=186]="colon",o[o.colon2=59]="colon2",o[o.comma=188]="comma",o[o.ctrl=17]="ctrl",o[o.delete=46]="delete",o[o.end=35]="end",o[o.enter=13]="enter",o[o.equals=187]="equals",o[o.equals2=61]="equals2",o[o.equals3=107]="equals3",o[o.escape=27]="escape",o[o.forwardSlash=191]="forwardSlash",o[o.function1=112]="function1",o[o.function10=121]="function10",o[o.function11=122]="function11",o[o.function12=123]="function12",o[o.function2=113]="function2",o[o.function3=114]="function3",o[o.function4=115]="function4",o[o.function5=116]="function5",o[o.function6=117]="function6",o[o.function7=118]="function7",o[o.function8=119]="function8",o[o.function9=120]="function9",o[o.home=36]="home",o[o.insert=45]="insert",o[o.menu=93]="menu",o[o.minus=189]="minus",o[o.minus2=109]="minus2",o[o.numLock=144]="numLock",o[o.numPad0=96]="numPad0",o[o.numPad1=97]="numPad1",o[o.numPad2=98]="numPad2",o[o.numPad3=99]="numPad3",o[o.numPad4=100]="numPad4",o[o.numPad5=101]="numPad5",o[o.numPad6=102]="numPad6",o[o.numPad7=103]="numPad7",o[o.numPad8=104]="numPad8",o[o.numPad9=105]="numPad9",o[o.numPadDivide=111]="numPadDivide",o[o.numPadDot=110]="numPadDot",o[o.numPadMinus=109]="numPadMinus",o[o.numPadMultiply=106]="numPadMultiply",o[o.numPadPlus=107]="numPadPlus",o[o.openBracket=219]="openBracket",o[o.pageDown=34]="pageDown",o[o.pageUp=33]="pageUp",o[o.period=190]="period",o[o.print=44]="print",o[o.quote=222]="quote",o[o.scrollLock=145]="scrollLock",o[o.shift=16]="shift",o[o.space=32]="space",o[o.tab=9]="tab",o[o.tilde=192]="tilde",o[o.windowsLeft=91]="windowsLeft",o[o.windowsOpera=219]="windowsOpera",o[o.windowsRight=92]="windowsRight"})(oc||(oc={}));var ht="ArrowDown",qt="ArrowLeft",Wt="ArrowRight",ut="ArrowUp",St="Enter",se="Escape",gt="Home",vt="End",ic="F2",rc="PageDown",nc="PageUp",Xt=" ",uo="Tab";var po={ArrowDown:ht,ArrowLeft:qt,ArrowRight:Wt,ArrowUp:ut};var W;(function(o){o.ltr="ltr",o.rtl="rtl"})(W||(W={}));function $r(o,t,e){return e<o?t:e>t?o:e}function Ko(o,t,e){return Math.min(Math.max(e,o),t)}function Di(o,t,e=0){return[t,e]=[t,e].sort((i,r)=>i-r),t<=o&&o<e}var Np=0;function Ne(o=""){return`${o}${Np++}`}var h;(function(o){o.Canvas="Canvas",o.CanvasText="CanvasText",o.LinkText="LinkText",o.VisitedText="VisitedText",o.ActiveText="ActiveText",o.ButtonFace="ButtonFace",o.ButtonText="ButtonText",o.Field="Field",o.FieldText="FieldText",o.Highlight="Highlight",o.HighlightText="HighlightText",o.GrayText="GrayText"})(h||(h={}));var sc={single:"single",multi:"multi"},ti=class extends w{constructor(){super(...arguments),this.expandmode=sc.multi,this.activeItemIndex=0,this.change=()=>{this.$emit("change",this.activeid)},this.setItems=()=>{var t;this.accordionItems.length!==0&&(this.accordionIds=this.getItemIds(),this.accordionItems.forEach((e,i)=>{e instanceof ye&&(e.addEventListener("change",this.activeItemChange),this.isSingleExpandMode()&&(this.activeItemIndex!==i?e.expanded=!1:e.expanded=!0));let r=this.accordionIds[i];e.setAttribute("id",typeof r!="string"?`accordion-${i+1}`:r),this.activeid=this.accordionIds[this.activeItemIndex],e.addEventListener("keydown",this.handleItemKeyDown),e.addEventListener("focus",this.handleItemFocus)}),this.isSingleExpandMode()&&((t=this.findExpandedItem())!==null&&t!==void 0?t:this.accordionItems[0]).setAttribute("aria-disabled","true"))},this.removeItemListeners=t=>{t.forEach((e,i)=>{e.removeEventListener("change",this.activeItemChange),e.removeEventListener("keydown",this.handleItemKeyDown),e.removeEventListener("focus",this.handleItemFocus)})},this.activeItemChange=t=>{if(t.defaultPrevented||t.target!==t.currentTarget)return;t.preventDefault();let e=t.target;this.activeid=e.getAttribute("id"),this.isSingleExpandMode()&&(this.resetItems(),e.expanded=!0,e.setAttribute("aria-disabled","true"),this.accordionItems.forEach(i=>{!i.hasAttribute("disabled")&&i.id!==this.activeid&&i.removeAttribute("aria-disabled")})),this.activeItemIndex=Array.from(this.accordionItems).indexOf(e),this.change()},this.handleItemKeyDown=t=>{if(t.target===t.currentTarget)switch(this.accordionIds=this.getItemIds(),t.key){case ut:t.preventDefault(),this.adjust(-1);break;case ht:t.preventDefault(),this.adjust(1);break;case gt:this.activeItemIndex=0,this.focusItem();break;case vt:this.activeItemIndex=this.accordionItems.length-1,this.focusItem();break}},this.handleItemFocus=t=>{if(t.target===t.currentTarget){let e=t.target,i=this.activeItemIndex=Array.from(this.accordionItems).indexOf(e);this.activeItemIndex!==i&&i!==-1&&(this.activeItemIndex=i,this.activeid=this.accordionIds[this.activeItemIndex])}}}accordionItemsChanged(t,e){this.$fastController.isConnected&&(this.removeItemListeners(t),this.setItems())}findExpandedItem(){for(let t=0;t<this.accordionItems.length;t++)if(this.accordionItems[t].getAttribute("expanded")==="true")return this.accordionItems[t];return null}resetItems(){this.accordionItems.forEach((t,e)=>{t.expanded=!1})}getItemIds(){return this.accordionItems.map(t=>t.getAttribute("id"))}isSingleExpandMode(){return this.expandmode===sc.single}adjust(t){this.activeItemIndex=$r(0,this.accordionItems.length-1,this.activeItemIndex+t),this.focusItem()}focusItem(){let t=this.accordionItems[this.activeItemIndex];t instanceof ye&&t.expandbutton.focus()}};a([c({attribute:"expand-mode"})],ti.prototype,"expandmode",void 0);a([f],ti.prototype,"accordionItems",void 0);var kr=(o,t)=>v`
    <a
        class="control"
        part="control"
        download="${e=>e.download}"
        href="${e=>e.href}"
        hreflang="${e=>e.hreflang}"
        ping="${e=>e.ping}"
        referrerpolicy="${e=>e.referrerpolicy}"
        rel="${e=>e.rel}"
        target="${e=>e.target}"
        type="${e=>e.type}"
        aria-atomic="${e=>e.ariaAtomic}"
        aria-busy="${e=>e.ariaBusy}"
        aria-controls="${e=>e.ariaControls}"
        aria-current="${e=>e.ariaCurrent}"
        aria-describedby="${e=>e.ariaDescribedby}"
        aria-details="${e=>e.ariaDetails}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-errormessage="${e=>e.ariaErrormessage}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-flowto="${e=>e.ariaFlowto}"
        aria-haspopup="${e=>e.ariaHaspopup}"
        aria-hidden="${e=>e.ariaHidden}"
        aria-invalid="${e=>e.ariaInvalid}"
        aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-live="${e=>e.ariaLive}"
        aria-owns="${e=>e.ariaOwns}"
        aria-relevant="${e=>e.ariaRelevant}"
        aria-roledescription="${e=>e.ariaRoledescription}"
        ${V("control")}
    >
        ${K(o,t)}
        <span class="content" part="content">
            <slot ${z("defaultSlottedContent")}></slot>
        </span>
        ${J(o,t)}
    </a>
`;var X=class{};a([c({attribute:"aria-atomic"})],X.prototype,"ariaAtomic",void 0);a([c({attribute:"aria-busy"})],X.prototype,"ariaBusy",void 0);a([c({attribute:"aria-controls"})],X.prototype,"ariaControls",void 0);a([c({attribute:"aria-current"})],X.prototype,"ariaCurrent",void 0);a([c({attribute:"aria-describedby"})],X.prototype,"ariaDescribedby",void 0);a([c({attribute:"aria-details"})],X.prototype,"ariaDetails",void 0);a([c({attribute:"aria-disabled"})],X.prototype,"ariaDisabled",void 0);a([c({attribute:"aria-errormessage"})],X.prototype,"ariaErrormessage",void 0);a([c({attribute:"aria-flowto"})],X.prototype,"ariaFlowto",void 0);a([c({attribute:"aria-haspopup"})],X.prototype,"ariaHaspopup",void 0);a([c({attribute:"aria-hidden"})],X.prototype,"ariaHidden",void 0);a([c({attribute:"aria-invalid"})],X.prototype,"ariaInvalid",void 0);a([c({attribute:"aria-keyshortcuts"})],X.prototype,"ariaKeyshortcuts",void 0);a([c({attribute:"aria-label"})],X.prototype,"ariaLabel",void 0);a([c({attribute:"aria-labelledby"})],X.prototype,"ariaLabelledby",void 0);a([c({attribute:"aria-live"})],X.prototype,"ariaLive",void 0);a([c({attribute:"aria-owns"})],X.prototype,"ariaOwns",void 0);a([c({attribute:"aria-relevant"})],X.prototype,"ariaRelevant",void 0);a([c({attribute:"aria-roledescription"})],X.prototype,"ariaRoledescription",void 0);var At=class extends w{constructor(){super(...arguments),this.handleUnsupportedDelegatesFocus=()=>{var t;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(!((t=this.$fastController.definition.shadowOptions)===null||t===void 0)&&t.delegatesFocus)&&(this.focus=()=>{var e;(e=this.control)===null||e===void 0||e.focus()})}}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}};a([c],At.prototype,"download",void 0);a([c],At.prototype,"href",void 0);a([c],At.prototype,"hreflang",void 0);a([c],At.prototype,"ping",void 0);a([c],At.prototype,"referrerpolicy",void 0);a([c],At.prototype,"rel",void 0);a([c],At.prototype,"target",void 0);a([c],At.prototype,"type",void 0);a([f],At.prototype,"defaultSlottedContent",void 0);var Lo=class{};a([c({attribute:"aria-expanded"})],Lo.prototype,"ariaExpanded",void 0);_(Lo,X);_(At,Z,Lo);var ac=(o,t)=>v`
    <template class="${e=>e.initialLayoutComplete?"loaded":""}">
        ${U(e=>e.initialLayoutComplete,v`
                <slot></slot>
            `)}
    </template>
`;var te=o=>{let t=o.closest("[dir]");return t!==null&&t.dir==="rtl"?W.rtl:W.ltr};var Cr=class{constructor(){this.intersectionDetector=null,this.observedElements=new Map,this.requestPosition=(t,e)=>{var i;if(this.intersectionDetector!==null){if(this.observedElements.has(t)){(i=this.observedElements.get(t))===null||i===void 0||i.push(e);return}this.observedElements.set(t,[e]),this.intersectionDetector.observe(t)}},this.cancelRequestPosition=(t,e)=>{let i=this.observedElements.get(t);if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}},this.initializeIntersectionDetector=()=>{xe.IntersectionObserver&&(this.intersectionDetector=new IntersectionObserver(this.handleIntersection,{root:null,rootMargin:"0px",threshold:[0,1]}))},this.handleIntersection=t=>{if(this.intersectionDetector===null)return;let e=[],i=[];t.forEach(r=>{var n;(n=this.intersectionDetector)===null||n===void 0||n.unobserve(r.target);let s=this.observedElements.get(r.target);s!==void 0&&(s.forEach(l=>{let d=e.indexOf(l);d===-1&&(d=e.length,e.push(l),i.push([])),i[d].push(r)}),this.observedElements.delete(r.target))}),e.forEach((r,n)=>{r(i[n])})},this.initializeIntersectionDetector()}};var M=class o extends w{constructor(){super(...arguments),this.anchor="",this.viewport="",this.horizontalPositioningMode="uncontrolled",this.horizontalDefaultPosition="unset",this.horizontalViewportLock=!1,this.horizontalInset=!1,this.horizontalScaling="content",this.verticalPositioningMode="uncontrolled",this.verticalDefaultPosition="unset",this.verticalViewportLock=!1,this.verticalInset=!1,this.verticalScaling="content",this.fixedPlacement=!1,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.initialLayoutComplete=!1,this.resizeDetector=null,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.pendingPositioningUpdate=!1,this.pendingReset=!1,this.currentDirection=W.ltr,this.regionVisible=!1,this.forceUpdate=!1,this.updateThreshold=.5,this.update=()=>{this.pendingPositioningUpdate||this.requestPositionUpdates()},this.startObservers=()=>{this.stopObservers(),this.anchorElement!==null&&(this.requestPositionUpdates(),this.resizeDetector!==null&&(this.resizeDetector.observe(this.anchorElement),this.resizeDetector.observe(this)))},this.requestPositionUpdates=()=>{this.anchorElement===null||this.pendingPositioningUpdate||(o.intersectionService.requestPosition(this,this.handleIntersection),o.intersectionService.requestPosition(this.anchorElement,this.handleIntersection),this.viewportElement!==null&&o.intersectionService.requestPosition(this.viewportElement,this.handleIntersection),this.pendingPositioningUpdate=!0)},this.stopObservers=()=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,o.intersectionService.cancelRequestPosition(this,this.handleIntersection),this.anchorElement!==null&&o.intersectionService.cancelRequestPosition(this.anchorElement,this.handleIntersection),this.viewportElement!==null&&o.intersectionService.cancelRequestPosition(this.viewportElement,this.handleIntersection)),this.resizeDetector!==null&&this.resizeDetector.disconnect()},this.getViewport=()=>typeof this.viewport!="string"||this.viewport===""?document.documentElement:document.getElementById(this.viewport),this.getAnchor=()=>document.getElementById(this.anchor),this.handleIntersection=t=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,this.applyIntersectionEntries(t)&&this.updateLayout())},this.applyIntersectionEntries=t=>{let e=t.find(n=>n.target===this),i=t.find(n=>n.target===this.anchorElement),r=t.find(n=>n.target===this.viewportElement);return e===void 0||r===void 0||i===void 0?!1:!this.regionVisible||this.forceUpdate||this.regionRect===void 0||this.anchorRect===void 0||this.viewportRect===void 0||this.isRectDifferent(this.anchorRect,i.boundingClientRect)||this.isRectDifferent(this.viewportRect,r.boundingClientRect)||this.isRectDifferent(this.regionRect,e.boundingClientRect)?(this.regionRect=e.boundingClientRect,this.anchorRect=i.boundingClientRect,this.viewportElement===document.documentElement?this.viewportRect=new DOMRectReadOnly(r.boundingClientRect.x+document.documentElement.scrollLeft,r.boundingClientRect.y+document.documentElement.scrollTop,r.boundingClientRect.width,r.boundingClientRect.height):this.viewportRect=r.boundingClientRect,this.updateRegionOffset(),this.forceUpdate=!1,!0):!1},this.updateRegionOffset=()=>{this.anchorRect&&this.regionRect&&(this.baseHorizontalOffset=this.baseHorizontalOffset+(this.anchorRect.left-this.regionRect.left)+(this.translateX-this.baseHorizontalOffset),this.baseVerticalOffset=this.baseVerticalOffset+(this.anchorRect.top-this.regionRect.top)+(this.translateY-this.baseVerticalOffset))},this.isRectDifferent=(t,e)=>Math.abs(t.top-e.top)>this.updateThreshold||Math.abs(t.right-e.right)>this.updateThreshold||Math.abs(t.bottom-e.bottom)>this.updateThreshold||Math.abs(t.left-e.left)>this.updateThreshold,this.handleResize=t=>{this.update()},this.reset=()=>{this.pendingReset&&(this.pendingReset=!1,this.anchorElement===null&&(this.anchorElement=this.getAnchor()),this.viewportElement===null&&(this.viewportElement=this.getViewport()),this.currentDirection=te(this),this.startObservers())},this.updateLayout=()=>{let t,e;if(this.horizontalPositioningMode!=="uncontrolled"){let n=this.getPositioningOptions(this.horizontalInset);if(this.horizontalDefaultPosition==="center")e="center";else if(this.horizontalDefaultPosition!=="unset"){let y=this.horizontalDefaultPosition;if(y==="start"||y==="end"){let B=te(this);if(B!==this.currentDirection){this.currentDirection=B,this.initialize();return}this.currentDirection===W.ltr?y=y==="start"?"left":"right":y=y==="start"?"right":"left"}switch(y){case"left":e=this.horizontalInset?"insetStart":"start";break;case"right":e=this.horizontalInset?"insetEnd":"end";break}}let s=this.horizontalThreshold!==void 0?this.horizontalThreshold:this.regionRect!==void 0?this.regionRect.width:0,l=this.anchorRect!==void 0?this.anchorRect.left:0,d=this.anchorRect!==void 0?this.anchorRect.right:0,u=this.anchorRect!==void 0?this.anchorRect.width:0,p=this.viewportRect!==void 0?this.viewportRect.left:0,g=this.viewportRect!==void 0?this.viewportRect.right:0;(e===void 0||this.horizontalPositioningMode!=="locktodefault"&&this.getAvailableSpace(e,l,d,u,p,g)<s)&&(e=this.getAvailableSpace(n[0],l,d,u,p,g)>this.getAvailableSpace(n[1],l,d,u,p,g)?n[0]:n[1])}if(this.verticalPositioningMode!=="uncontrolled"){let n=this.getPositioningOptions(this.verticalInset);if(this.verticalDefaultPosition==="center")t="center";else if(this.verticalDefaultPosition!=="unset")switch(this.verticalDefaultPosition){case"top":t=this.verticalInset?"insetStart":"start";break;case"bottom":t=this.verticalInset?"insetEnd":"end";break}let s=this.verticalThreshold!==void 0?this.verticalThreshold:this.regionRect!==void 0?this.regionRect.height:0,l=this.anchorRect!==void 0?this.anchorRect.top:0,d=this.anchorRect!==void 0?this.anchorRect.bottom:0,u=this.anchorRect!==void 0?this.anchorRect.height:0,p=this.viewportRect!==void 0?this.viewportRect.top:0,g=this.viewportRect!==void 0?this.viewportRect.bottom:0;(t===void 0||this.verticalPositioningMode!=="locktodefault"&&this.getAvailableSpace(t,l,d,u,p,g)<s)&&(t=this.getAvailableSpace(n[0],l,d,u,p,g)>this.getAvailableSpace(n[1],l,d,u,p,g)?n[0]:n[1])}let i=this.getNextRegionDimension(e,t),r=this.horizontalPosition!==e||this.verticalPosition!==t;if(this.setHorizontalPosition(e,i),this.setVerticalPosition(t,i),this.updateRegionStyle(),!this.initialLayoutComplete){this.initialLayoutComplete=!0,this.requestPositionUpdates();return}this.regionVisible||(this.regionVisible=!0,this.style.removeProperty("pointer-events"),this.style.removeProperty("opacity"),this.classList.toggle("loaded",!0),this.$emit("loaded",this,{bubbles:!1})),this.updatePositionClasses(),r&&this.$emit("positionchange",this,{bubbles:!1})},this.updateRegionStyle=()=>{this.style.width=this.regionWidth,this.style.height=this.regionHeight,this.style.transform=`translate(${this.translateX}px, ${this.translateY}px)`},this.updatePositionClasses=()=>{this.classList.toggle("top",this.verticalPosition==="start"),this.classList.toggle("bottom",this.verticalPosition==="end"),this.classList.toggle("inset-top",this.verticalPosition==="insetStart"),this.classList.toggle("inset-bottom",this.verticalPosition==="insetEnd"),this.classList.toggle("vertical-center",this.verticalPosition==="center"),this.classList.toggle("left",this.horizontalPosition==="start"),this.classList.toggle("right",this.horizontalPosition==="end"),this.classList.toggle("inset-left",this.horizontalPosition==="insetStart"),this.classList.toggle("inset-right",this.horizontalPosition==="insetEnd"),this.classList.toggle("horizontal-center",this.horizontalPosition==="center")},this.setHorizontalPosition=(t,e)=>{if(t===void 0||this.regionRect===void 0||this.anchorRect===void 0||this.viewportRect===void 0)return;let i=0;switch(this.horizontalScaling){case"anchor":case"fill":i=this.horizontalViewportLock?this.viewportRect.width:e.width,this.regionWidth=`${i}px`;break;case"content":i=this.regionRect.width,this.regionWidth="unset";break}let r=0;switch(t){case"start":this.translateX=this.baseHorizontalOffset-i,this.horizontalViewportLock&&this.anchorRect.left>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.right));break;case"insetStart":this.translateX=this.baseHorizontalOffset-i+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.right));break;case"insetEnd":this.translateX=this.baseHorizontalOffset,this.horizontalViewportLock&&this.anchorRect.left<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.left));break;case"end":this.translateX=this.baseHorizontalOffset+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.left));break;case"center":if(r=(this.anchorRect.width-i)/2,this.translateX=this.baseHorizontalOffset+r,this.horizontalViewportLock){let n=this.anchorRect.left+r,s=this.anchorRect.right-r;n<this.viewportRect.left&&!(s>this.viewportRect.right)?this.translateX=this.translateX-(n-this.viewportRect.left):s>this.viewportRect.right&&!(n<this.viewportRect.left)&&(this.translateX=this.translateX-(s-this.viewportRect.right))}break}this.horizontalPosition=t},this.setVerticalPosition=(t,e)=>{if(t===void 0||this.regionRect===void 0||this.anchorRect===void 0||this.viewportRect===void 0)return;let i=0;switch(this.verticalScaling){case"anchor":case"fill":i=this.verticalViewportLock?this.viewportRect.height:e.height,this.regionHeight=`${i}px`;break;case"content":i=this.regionRect.height,this.regionHeight="unset";break}let r=0;switch(t){case"start":this.translateY=this.baseVerticalOffset-i,this.verticalViewportLock&&this.anchorRect.top>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.bottom));break;case"insetStart":this.translateY=this.baseVerticalOffset-i+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.bottom));break;case"insetEnd":this.translateY=this.baseVerticalOffset,this.verticalViewportLock&&this.anchorRect.top<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.top));break;case"end":this.translateY=this.baseVerticalOffset+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.top));break;case"center":if(r=(this.anchorRect.height-i)/2,this.translateY=this.baseVerticalOffset+r,this.verticalViewportLock){let n=this.anchorRect.top+r,s=this.anchorRect.bottom-r;n<this.viewportRect.top&&!(s>this.viewportRect.bottom)?this.translateY=this.translateY-(n-this.viewportRect.top):s>this.viewportRect.bottom&&!(n<this.viewportRect.top)&&(this.translateY=this.translateY-(s-this.viewportRect.bottom))}}this.verticalPosition=t},this.getPositioningOptions=t=>t?["insetStart","insetEnd"]:["start","end"],this.getAvailableSpace=(t,e,i,r,n,s)=>{let l=e-n,d=s-(e+r);switch(t){case"start":return l;case"insetStart":return l+r;case"insetEnd":return d+r;case"end":return d;case"center":return Math.min(l,d)*2+r}},this.getNextRegionDimension=(t,e)=>{let i={height:this.regionRect!==void 0?this.regionRect.height:0,width:this.regionRect!==void 0?this.regionRect.width:0};return t!==void 0&&this.horizontalScaling==="fill"?i.width=this.getAvailableSpace(t,this.anchorRect!==void 0?this.anchorRect.left:0,this.anchorRect!==void 0?this.anchorRect.right:0,this.anchorRect!==void 0?this.anchorRect.width:0,this.viewportRect!==void 0?this.viewportRect.left:0,this.viewportRect!==void 0?this.viewportRect.right:0):this.horizontalScaling==="anchor"&&(i.width=this.anchorRect!==void 0?this.anchorRect.width:0),e!==void 0&&this.verticalScaling==="fill"?i.height=this.getAvailableSpace(e,this.anchorRect!==void 0?this.anchorRect.top:0,this.anchorRect!==void 0?this.anchorRect.bottom:0,this.anchorRect!==void 0?this.anchorRect.height:0,this.viewportRect!==void 0?this.viewportRect.top:0,this.viewportRect!==void 0?this.viewportRect.bottom:0):this.verticalScaling==="anchor"&&(i.height=this.anchorRect!==void 0?this.anchorRect.height:0),i},this.startAutoUpdateEventListeners=()=>{window.addEventListener(Ls,this.update,{passive:!0}),window.addEventListener(Vs,this.update,{passive:!0,capture:!0}),this.resizeDetector!==null&&this.viewportElement!==null&&this.resizeDetector.observe(this.viewportElement)},this.stopAutoUpdateEventListeners=()=>{window.removeEventListener(Ls,this.update),window.removeEventListener(Vs,this.update),this.resizeDetector!==null&&this.viewportElement!==null&&this.resizeDetector.unobserve(this.viewportElement)}}anchorChanged(){this.initialLayoutComplete&&(this.anchorElement=this.getAnchor())}viewportChanged(){this.initialLayoutComplete&&(this.viewportElement=this.getViewport())}horizontalPositioningModeChanged(){this.requestReset()}horizontalDefaultPositionChanged(){this.updateForAttributeChange()}horizontalViewportLockChanged(){this.updateForAttributeChange()}horizontalInsetChanged(){this.updateForAttributeChange()}horizontalThresholdChanged(){this.updateForAttributeChange()}horizontalScalingChanged(){this.updateForAttributeChange()}verticalPositioningModeChanged(){this.requestReset()}verticalDefaultPositionChanged(){this.updateForAttributeChange()}verticalViewportLockChanged(){this.updateForAttributeChange()}verticalInsetChanged(){this.updateForAttributeChange()}verticalThresholdChanged(){this.updateForAttributeChange()}verticalScalingChanged(){this.updateForAttributeChange()}fixedPlacementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}autoUpdateModeChanged(t,e){this.$fastController.isConnected&&this.initialLayoutComplete&&(t==="auto"&&this.stopAutoUpdateEventListeners(),e==="auto"&&this.startAutoUpdateEventListeners())}anchorElementChanged(){this.requestReset()}viewportElementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}connectedCallback(){super.connectedCallback(),this.autoUpdateMode==="auto"&&this.startAutoUpdateEventListeners(),this.initialize()}disconnectedCallback(){super.disconnectedCallback(),this.autoUpdateMode==="auto"&&this.stopAutoUpdateEventListeners(),this.stopObservers(),this.disconnectResizeDetector()}adoptedCallback(){this.initialize()}disconnectResizeDetector(){this.resizeDetector!==null&&(this.resizeDetector.disconnect(),this.resizeDetector=null)}initializeResizeDetector(){this.disconnectResizeDetector(),this.resizeDetector=new window.ResizeObserver(this.handleResize)}updateForAttributeChange(){this.$fastController.isConnected&&this.initialLayoutComplete&&(this.forceUpdate=!0,this.update())}initialize(){this.initializeResizeDetector(),this.anchorElement===null&&(this.anchorElement=this.getAnchor()),this.requestReset()}requestReset(){this.$fastController.isConnected&&this.pendingReset===!1&&(this.setInitialState(),F.queueUpdate(()=>this.reset()),this.pendingReset=!0)}setInitialState(){this.initialLayoutComplete=!1,this.regionVisible=!1,this.translateX=0,this.translateY=0,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.viewportRect=void 0,this.regionRect=void 0,this.anchorRect=void 0,this.verticalPosition=void 0,this.horizontalPosition=void 0,this.style.opacity="0",this.style.pointerEvents="none",this.forceUpdate=!1,this.style.position=this.fixedPlacement?"fixed":"absolute",this.updatePositionClasses(),this.updateRegionStyle()}};M.intersectionService=new Cr;a([c],M.prototype,"anchor",void 0);a([c],M.prototype,"viewport",void 0);a([c({attribute:"horizontal-positioning-mode"})],M.prototype,"horizontalPositioningMode",void 0);a([c({attribute:"horizontal-default-position"})],M.prototype,"horizontalDefaultPosition",void 0);a([c({attribute:"horizontal-viewport-lock",mode:"boolean"})],M.prototype,"horizontalViewportLock",void 0);a([c({attribute:"horizontal-inset",mode:"boolean"})],M.prototype,"horizontalInset",void 0);a([c({attribute:"horizontal-threshold"})],M.prototype,"horizontalThreshold",void 0);a([c({attribute:"horizontal-scaling"})],M.prototype,"horizontalScaling",void 0);a([c({attribute:"vertical-positioning-mode"})],M.prototype,"verticalPositioningMode",void 0);a([c({attribute:"vertical-default-position"})],M.prototype,"verticalDefaultPosition",void 0);a([c({attribute:"vertical-viewport-lock",mode:"boolean"})],M.prototype,"verticalViewportLock",void 0);a([c({attribute:"vertical-inset",mode:"boolean"})],M.prototype,"verticalInset",void 0);a([c({attribute:"vertical-threshold"})],M.prototype,"verticalThreshold",void 0);a([c({attribute:"vertical-scaling"})],M.prototype,"verticalScaling",void 0);a([c({attribute:"fixed-placement",mode:"boolean"})],M.prototype,"fixedPlacement",void 0);a([c({attribute:"auto-update-mode"})],M.prototype,"autoUpdateMode",void 0);a([f],M.prototype,"anchorElement",void 0);a([f],M.prototype,"viewportElement",void 0);a([f],M.prototype,"initialLayoutComplete",void 0);var lc=(o,t)=>v`
    <template class="${e=>e.circular?"circular":""}">
        <div class="control" part="control" style="${e=>e.generateBadgeStyle()}">
            <slot></slot>
        </div>
    </template>
`;var fo=class extends w{constructor(){super(...arguments),this.generateBadgeStyle=()=>{if(!this.fill&&!this.color)return;let t=`background-color: var(--badge-fill-${this.fill});`,e=`color: var(--badge-color-${this.color});`;return this.fill&&!this.color?t:this.color&&!this.fill?e:`${e} ${t}`}}};a([c({attribute:"fill"})],fo.prototype,"fill",void 0);a([c({attribute:"color"})],fo.prototype,"color",void 0);a([c({mode:"boolean"})],fo.prototype,"circular",void 0);var cc=(o,t)=>v`
    <div role="listitem" class="listitem" part="listitem">
        ${U(e=>e.href&&e.href.length>0,v`
                ${kr(o,t)}
            `)}
        ${U(e=>!e.href,v`
                ${K(o,t)}
                <slot></slot>
                ${J(o,t)}
            `)}
        ${U(e=>e.separator,v`
                <span class="separator" part="separator" aria-hidden="true">
                    <slot name="separator">${t.separator||""}</slot>
                </span>
            `)}
    </div>
`;var _e=class extends At{constructor(){super(...arguments),this.separator=!0}};a([f],_e.prototype,"separator",void 0);_(_e,Z,Lo);var dc=(o,t)=>v`
    <template role="navigation">
        <div role="list" class="list" part="list">
            <slot
                ${z({property:"slottedBreadcrumbItems",filter:Ct()})}
            ></slot>
        </div>
    </template>
`;var Ai=class extends w{slottedBreadcrumbItemsChanged(){if(this.$fastController.isConnected){if(this.slottedBreadcrumbItems===void 0||this.slottedBreadcrumbItems.length===0)return;let t=this.slottedBreadcrumbItems[this.slottedBreadcrumbItems.length-1];this.slottedBreadcrumbItems.forEach(e=>{let i=e===t;this.setItemSeparator(e,i),this.setAriaCurrent(e,i)})}}setItemSeparator(t,e){t instanceof _e&&(t.separator=!e)}findChildWithHref(t){var e,i;return t.childElementCount>0?t.querySelector("a[href]"):!((e=t.shadowRoot)===null||e===void 0)&&e.childElementCount?(i=t.shadowRoot)===null||i===void 0?void 0:i.querySelector("a[href]"):null}setAriaCurrent(t,e){let i=this.findChildWithHref(t);i===null&&t.hasAttribute("href")&&t instanceof _e?e?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current"):i!==null&&(e?i.setAttribute("aria-current","page"):i.removeAttribute("aria-current"))}};a([f],Ai.prototype,"slottedBreadcrumbItems",void 0);var hc=(o,t)=>v`
    <button
        class="control"
        part="control"
        ?autofocus="${e=>e.autofocus}"
        ?disabled="${e=>e.disabled}"
        form="${e=>e.formId}"
        formaction="${e=>e.formaction}"
        formenctype="${e=>e.formenctype}"
        formmethod="${e=>e.formmethod}"
        formnovalidate="${e=>e.formnovalidate}"
        formtarget="${e=>e.formtarget}"
        name="${e=>e.name}"
        type="${e=>e.type}"
        value="${e=>e.value}"
        aria-atomic="${e=>e.ariaAtomic}"
        aria-busy="${e=>e.ariaBusy}"
        aria-controls="${e=>e.ariaControls}"
        aria-current="${e=>e.ariaCurrent}"
        aria-describedby="${e=>e.ariaDescribedby}"
        aria-details="${e=>e.ariaDetails}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-errormessage="${e=>e.ariaErrormessage}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-flowto="${e=>e.ariaFlowto}"
        aria-haspopup="${e=>e.ariaHaspopup}"
        aria-hidden="${e=>e.ariaHidden}"
        aria-invalid="${e=>e.ariaInvalid}"
        aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-live="${e=>e.ariaLive}"
        aria-owns="${e=>e.ariaOwns}"
        aria-pressed="${e=>e.ariaPressed}"
        aria-relevant="${e=>e.ariaRelevant}"
        aria-roledescription="${e=>e.ariaRoledescription}"
        ${V("control")}
    >
        ${K(o,t)}
        <span class="content" part="content">
            <slot ${z("defaultSlottedContent")}></slot>
        </span>
        ${J(o,t)}
    </button>
`;var uc="form-associated-proxy",pc="ElementInternals",fc=pc in window&&"setFormValue"in window[pc].prototype,mc=new WeakMap;function Ot(o){let t=class extends o{constructor(...e){super(...e),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return fc}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){let e=this.proxy.labels,i=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),r=e?i.concat(Array.from(e)):i;return Object.freeze(r)}else return re}valueChanged(e,i){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(e,i){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(e,i){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),F.queueUpdate(()=>this.classList.toggle("disabled",this.disabled))}nameChanged(e,i){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(e,i){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),F.queueUpdate(()=>this.classList.toggle("required",this.required)),this.validate()}get elementInternals(){if(!fc)return null;let e=mc.get(this);return e||(e=this.attachInternals(),mc.set(this,e)),e}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){this.proxyEventsToBlock.forEach(e=>this.proxy.removeEventListener(e,this.stopPropagation)),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(e,i,r){this.elementInternals?this.elementInternals.setValidity(e,i,r):typeof i=="string"&&this.proxy.setCustomValidity(i)}formDisabledCallback(e){this.disabled=e}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var e;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach(i=>this.proxy.addEventListener(i,this.stopPropagation)),this.proxy.disabled=this.disabled,this.proxy.required=this.required,typeof this.name=="string"&&(this.proxy.name=this.name),typeof this.value=="string"&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",uc),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",uc)),(e=this.shadowRoot)===null||e===void 0||e.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var e;this.removeChild(this.proxy),(e=this.shadowRoot)===null||e===void 0||e.removeChild(this.proxySlot)}validate(e){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,e)}setFormValue(e,i){this.elementInternals&&this.elementInternals.setFormValue(e,i||e)}_keypressHandler(e){switch(e.key){case St:if(this.form instanceof HTMLFormElement){let i=this.form.querySelector("[type=submit]");i?.click()}break}}stopPropagation(e){e.stopPropagation()}};return c({mode:"boolean"})(t.prototype,"disabled"),c({mode:"fromView",attribute:"value"})(t.prototype,"initialValue"),c({attribute:"current-value"})(t.prototype,"currentValue"),c(t.prototype,"name"),c({mode:"boolean"})(t.prototype,"required"),f(t.prototype,"value"),t}function ei(o){class t extends Ot(o){}class e extends t{constructor(...r){super(r),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(r,n){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),r!==void 0&&this.$emit("change"),this.validate()}currentCheckedChanged(r,n){this.checked=this.currentChecked}updateForm(){let r=this.checked?this.value:null;this.setFormValue(r,r)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return c({attribute:"checked",mode:"boolean"})(e.prototype,"checkedAttribute"),c({attribute:"current-checked",converter:Be})(e.prototype,"currentChecked"),f(e.prototype,"defaultChecked"),f(e.prototype,"checked"),e}var Ps=class extends w{},Sr=class extends Ot(Ps){constructor(){super(...arguments),this.proxy=document.createElement("input")}};var Et=class extends Sr{constructor(){super(...arguments),this.handleClick=t=>{var e;this.disabled&&((e=this.defaultSlottedContent)===null||e===void 0?void 0:e.length)<=1&&t.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;let t=this.proxy.isConnected;t||this.attachProxy(),typeof this.form.requestSubmit=="function"?this.form.requestSubmit(this.proxy):this.proxy.click(),t||this.detachProxy()},this.handleFormReset=()=>{var t;(t=this.form)===null||t===void 0||t.reset()},this.handleUnsupportedDelegatesFocus=()=>{var t;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(!((t=this.$fastController.definition.shadowOptions)===null||t===void 0)&&t.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(t,e){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),e==="submit"&&this.addEventListener("click",this.handleSubmission),t==="submit"&&this.removeEventListener("click",this.handleSubmission),e==="reset"&&this.addEventListener("click",this.handleFormReset),t==="reset"&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){var t;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();let e=Array.from((t=this.control)===null||t===void 0?void 0:t.children);e&&e.forEach(i=>{i.addEventListener("click",this.handleClick)})}disconnectedCallback(){var t;super.disconnectedCallback();let e=Array.from((t=this.control)===null||t===void 0?void 0:t.children);e&&e.forEach(i=>{i.removeEventListener("click",this.handleClick)})}};a([c({mode:"boolean"})],Et.prototype,"autofocus",void 0);a([c({attribute:"form"})],Et.prototype,"formId",void 0);a([c],Et.prototype,"formaction",void 0);a([c],Et.prototype,"formenctype",void 0);a([c],Et.prototype,"formmethod",void 0);a([c({mode:"boolean"})],Et.prototype,"formnovalidate",void 0);a([c],Et.prototype,"formtarget",void 0);a([c],Et.prototype,"type",void 0);a([f],Et.prototype,"defaultSlottedContent",void 0);var oi=class{};a([c({attribute:"aria-expanded"})],oi.prototype,"ariaExpanded",void 0);a([c({attribute:"aria-pressed"})],oi.prototype,"ariaPressed",void 0);_(oi,X);_(Et,Z,oi);var Fr=class{constructor(t){if(this.dayFormat="numeric",this.weekdayFormat="long",this.monthFormat="long",this.yearFormat="numeric",this.date=new Date,t)for(let e in t){let i=t[e];e==="date"?this.date=this.getDateObject(i):this[e]=i}}getDateObject(t){if(typeof t=="string"){let e=t.split(/[/-]/);return e.length<3?new Date:new Date(parseInt(e[2],10),parseInt(e[0],10)-1,parseInt(e[1],10))}else if("day"in t&&"month"in t&&"year"in t){let{day:e,month:i,year:r}=t;return new Date(r,i-1,e)}return t}getDate(t=this.date,e={weekday:this.weekdayFormat,month:this.monthFormat,day:this.dayFormat,year:this.yearFormat},i=this.locale){let r=this.getDateObject(t);if(!r.getTime())return"";let n=Object.assign({timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone},e);return new Intl.DateTimeFormat(i,n).format(r)}getDay(t=this.date.getDate(),e=this.dayFormat,i=this.locale){return this.getDate({month:1,day:t,year:2020},{day:e},i)}getMonth(t=this.date.getMonth()+1,e=this.monthFormat,i=this.locale){return this.getDate({month:t,day:2,year:2020},{month:e},i)}getYear(t=this.date.getFullYear(),e=this.yearFormat,i=this.locale){return this.getDate({month:2,day:2,year:t},{year:e},i)}getWeekday(t=0,e=this.weekdayFormat,i=this.locale){let r=`1-${t+1}-2017`;return this.getDate(r,{weekday:e},i)}getWeekdays(t=this.weekdayFormat,e=this.locale){return Array(7).fill(null).map((i,r)=>this.getWeekday(r,t,e))}};var Nt=class extends w{constructor(){super(...arguments),this.dateFormatter=new Fr,this.readonly=!1,this.locale="en-US",this.month=new Date().getMonth()+1,this.year=new Date().getFullYear(),this.dayFormat="numeric",this.weekdayFormat="short",this.monthFormat="long",this.yearFormat="numeric",this.minWeeks=0,this.disabledDates="",this.selectedDates="",this.oneDayInMs=864e5}localeChanged(){this.dateFormatter.locale=this.locale}dayFormatChanged(){this.dateFormatter.dayFormat=this.dayFormat}weekdayFormatChanged(){this.dateFormatter.weekdayFormat=this.weekdayFormat}monthFormatChanged(){this.dateFormatter.monthFormat=this.monthFormat}yearFormatChanged(){this.dateFormatter.yearFormat=this.yearFormat}getMonthInfo(t=this.month,e=this.year){let i=d=>new Date(d.getFullYear(),d.getMonth(),1).getDay(),r=d=>{let u=new Date(d.getFullYear(),d.getMonth()+1,1);return new Date(u.getTime()-this.oneDayInMs).getDate()},n=new Date(e,t-1),s=new Date(e,t),l=new Date(e,t-2);return{length:r(n),month:t,start:i(n),year:e,previous:{length:r(l),month:l.getMonth()+1,start:i(l),year:l.getFullYear()},next:{length:r(s),month:s.getMonth()+1,start:i(s),year:s.getFullYear()}}}getDays(t=this.getMonthInfo(),e=this.minWeeks){e=e>10?10:e;let{start:i,length:r,previous:n,next:s}=t,l=[],d=1-i;for(;d<r+1||l.length<e||l[l.length-1].length%7!==0;){let{month:u,year:p}=d<1?n:d>r?s:t,g=d<1?n.length+d:d>r?d-r:d,y=`${u}-${g}-${p}`,B=this.dateInString(y,this.disabledDates),j=this.dateInString(y,this.selectedDates),Q={day:g,month:u,year:p,disabled:B,selected:j},ot=l[l.length-1];l.length===0||ot.length%7===0?l.push([Q]):ot.push(Q),d++}return l}dateInString(t,e){let i=e.split(",").map(r=>r.trim());return t=typeof t=="string"?t:`${t.getMonth()+1}-${t.getDate()}-${t.getFullYear()}`,i.some(r=>r===t)}getDayClassNames(t,e){let{day:i,month:r,year:n,disabled:s,selected:l}=t,d=e===`${r}-${i}-${n}`,u=this.month!==r;return["day",d&&"today",u&&"inactive",s&&"disabled",l&&"selected"].filter(Boolean).join(" ")}getWeekdayText(){let t=this.dateFormatter.getWeekdays().map(e=>({text:e}));if(this.weekdayFormat!=="long"){let e=this.dateFormatter.getWeekdays("long");t.forEach((i,r)=>{i.abbr=e[r]})}return t}handleDateSelect(t,e){t.preventDefault,this.$emit("dateselected",e)}handleKeydown(t,e){return t.key===St&&this.handleDateSelect(t,e),!0}};a([c({mode:"boolean"})],Nt.prototype,"readonly",void 0);a([c],Nt.prototype,"locale",void 0);a([c({converter:S})],Nt.prototype,"month",void 0);a([c({converter:S})],Nt.prototype,"year",void 0);a([c({attribute:"day-format",mode:"fromView"})],Nt.prototype,"dayFormat",void 0);a([c({attribute:"weekday-format",mode:"fromView"})],Nt.prototype,"weekdayFormat",void 0);a([c({attribute:"month-format",mode:"fromView"})],Nt.prototype,"monthFormat",void 0);a([c({attribute:"year-format",mode:"fromView"})],Nt.prototype,"yearFormat",void 0);a([c({attribute:"min-weeks",converter:S})],Nt.prototype,"minWeeks",void 0);a([c({attribute:"disabled-dates"})],Nt.prototype,"disabledDates",void 0);a([c({attribute:"selected-dates"})],Nt.prototype,"selectedDates",void 0);var Oi={none:"none",default:"default",sticky:"sticky"},je={default:"default",columnHeader:"columnheader",rowHeader:"rowheader"},Vo={default:"default",header:"header",stickyHeader:"sticky-header"};var ft=class extends w{constructor(){super(...arguments),this.rowType=Vo.default,this.rowData=null,this.columnDefinitions=null,this.isActiveRow=!1,this.cellsRepeatBehavior=null,this.cellsPlaceholder=null,this.focusColumnIndex=0,this.refocusOnLoad=!1,this.updateRowStyle=()=>{this.style.gridTemplateColumns=this.gridTemplateColumns}}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowStyle()}rowTypeChanged(){this.$fastController.isConnected&&this.updateItemTemplate()}rowDataChanged(){if(this.rowData!==null&&this.isActiveRow){this.refocusOnLoad=!0;return}}cellItemTemplateChanged(){this.updateItemTemplate()}headerCellItemTemplateChanged(){this.updateItemTemplate()}connectedCallback(){super.connectedCallback(),this.cellsRepeatBehavior===null&&(this.cellsPlaceholder=document.createComment(""),this.appendChild(this.cellsPlaceholder),this.updateItemTemplate(),this.cellsRepeatBehavior=new Do(t=>t.columnDefinitions,t=>t.activeCellItemTemplate,{positioning:!0}).createBehavior(this.cellsPlaceholder),this.$fastController.addBehaviors([this.cellsRepeatBehavior])),this.addEventListener("cell-focused",this.handleCellFocus),this.addEventListener(Me,this.handleFocusout),this.addEventListener(ze,this.handleKeydown),this.updateRowStyle(),this.refocusOnLoad&&(this.refocusOnLoad=!1,this.cellElements.length>this.focusColumnIndex&&this.cellElements[this.focusColumnIndex].focus())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("cell-focused",this.handleCellFocus),this.removeEventListener(Me,this.handleFocusout),this.removeEventListener(ze,this.handleKeydown)}handleFocusout(t){this.contains(t.target)||(this.isActiveRow=!1,this.focusColumnIndex=0)}handleCellFocus(t){this.isActiveRow=!0,this.focusColumnIndex=this.cellElements.indexOf(t.target),this.$emit("row-focused",this)}handleKeydown(t){if(t.defaultPrevented)return;let e=0;switch(t.key){case qt:e=Math.max(0,this.focusColumnIndex-1),this.cellElements[e].focus(),t.preventDefault();break;case Wt:e=Math.min(this.cellElements.length-1,this.focusColumnIndex+1),this.cellElements[e].focus(),t.preventDefault();break;case gt:t.ctrlKey||(this.cellElements[0].focus(),t.preventDefault());break;case vt:t.ctrlKey||(this.cellElements[this.cellElements.length-1].focus(),t.preventDefault());break}}updateItemTemplate(){this.activeCellItemTemplate=this.rowType===Vo.default&&this.cellItemTemplate!==void 0?this.cellItemTemplate:this.rowType===Vo.default&&this.cellItemTemplate===void 0?this.defaultCellItemTemplate:this.headerCellItemTemplate!==void 0?this.headerCellItemTemplate:this.defaultHeaderCellItemTemplate}};a([c({attribute:"grid-template-columns"})],ft.prototype,"gridTemplateColumns",void 0);a([c({attribute:"row-type"})],ft.prototype,"rowType",void 0);a([f],ft.prototype,"rowData",void 0);a([f],ft.prototype,"columnDefinitions",void 0);a([f],ft.prototype,"cellItemTemplate",void 0);a([f],ft.prototype,"headerCellItemTemplate",void 0);a([f],ft.prototype,"rowIndex",void 0);a([f],ft.prototype,"isActiveRow",void 0);a([f],ft.prototype,"activeCellItemTemplate",void 0);a([f],ft.prototype,"defaultCellItemTemplate",void 0);a([f],ft.prototype,"defaultHeaderCellItemTemplate",void 0);a([f],ft.prototype,"cellElements",void 0);function _p(o){let t=o.tagFor(ft);return v`
    <${t}
        :rowData="${e=>e}"
        :cellItemTemplate="${(e,i)=>i.parent.cellItemTemplate}"
        :headerCellItemTemplate="${(e,i)=>i.parent.headerCellItemTemplate}"
    ></${t}>
`}var gc=(o,t)=>{let e=_p(o),i=o.tagFor(ft);return v`
        <template
            role="grid"
            tabindex="0"
            :rowElementTag="${()=>i}"
            :defaultRowItemTemplate="${e}"
            ${ho({property:"rowElements",filter:Ct("[role=row]")})}
        >
            <slot></slot>
        </template>
    `};var bt=class o extends w{constructor(){super(),this.noTabbing=!1,this.generateHeader=Oi.default,this.rowsData=[],this.columnDefinitions=null,this.focusRowIndex=0,this.focusColumnIndex=0,this.rowsPlaceholder=null,this.generatedHeader=null,this.isUpdatingFocus=!1,this.pendingFocusUpdate=!1,this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!0,this.generatedGridTemplateColumns="",this.focusOnCell=(t,e,i)=>{if(this.rowElements.length===0){this.focusRowIndex=0,this.focusColumnIndex=0;return}let r=Math.max(0,Math.min(this.rowElements.length-1,t)),s=this.rowElements[r].querySelectorAll('[role="cell"], [role="gridcell"], [role="columnheader"], [role="rowheader"]'),l=Math.max(0,Math.min(s.length-1,e)),d=s[l];i&&this.scrollHeight!==this.clientHeight&&(r<this.focusRowIndex&&this.scrollTop>0||r>this.focusRowIndex&&this.scrollTop<this.scrollHeight-this.clientHeight)&&d.scrollIntoView({block:"center",inline:"center"}),d.focus()},this.onChildListChange=(t,e)=>{t&&t.length&&(t.forEach(i=>{i.addedNodes.forEach(r=>{r.nodeType===1&&r.getAttribute("role")==="row"&&(r.columnDefinitions=this.columnDefinitions)})}),this.queueRowIndexUpdate())},this.queueRowIndexUpdate=()=>{this.rowindexUpdateQueued||(this.rowindexUpdateQueued=!0,F.queueUpdate(this.updateRowIndexes))},this.updateRowIndexes=()=>{let t=this.gridTemplateColumns;if(t===void 0){if(this.generatedGridTemplateColumns===""&&this.rowElements.length>0){let e=this.rowElements[0];this.generatedGridTemplateColumns=new Array(e.cellElements.length).fill("1fr").join(" ")}t=this.generatedGridTemplateColumns}this.rowElements.forEach((e,i)=>{let r=e;r.rowIndex=i,r.gridTemplateColumns=t,this.columnDefinitionsStale&&(r.columnDefinitions=this.columnDefinitions)}),this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!1}}static generateTemplateColumns(t){let e="";return t.forEach(i=>{e=`${e}${e===""?"":" "}1fr`}),e}noTabbingChanged(){this.$fastController.isConnected&&(this.noTabbing?this.setAttribute("tabIndex","-1"):this.setAttribute("tabIndex",this.contains(document.activeElement)||this===document.activeElement?"-1":"0"))}generateHeaderChanged(){this.$fastController.isConnected&&this.toggleGeneratedHeader()}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowIndexes()}rowsDataChanged(){this.columnDefinitions===null&&this.rowsData.length>0&&(this.columnDefinitions=o.generateColumns(this.rowsData[0])),this.$fastController.isConnected&&this.toggleGeneratedHeader()}columnDefinitionsChanged(){if(this.columnDefinitions===null){this.generatedGridTemplateColumns="";return}this.generatedGridTemplateColumns=o.generateTemplateColumns(this.columnDefinitions),this.$fastController.isConnected&&(this.columnDefinitionsStale=!0,this.queueRowIndexUpdate())}headerCellItemTemplateChanged(){this.$fastController.isConnected&&this.generatedHeader!==null&&(this.generatedHeader.headerCellItemTemplate=this.headerCellItemTemplate)}focusRowIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}focusColumnIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}connectedCallback(){super.connectedCallback(),this.rowItemTemplate===void 0&&(this.rowItemTemplate=this.defaultRowItemTemplate),this.rowsPlaceholder=document.createComment(""),this.appendChild(this.rowsPlaceholder),this.toggleGeneratedHeader(),this.rowsRepeatBehavior=new Do(t=>t.rowsData,t=>t.rowItemTemplate,{positioning:!0}).createBehavior(this.rowsPlaceholder),this.$fastController.addBehaviors([this.rowsRepeatBehavior]),this.addEventListener("row-focused",this.handleRowFocus),this.addEventListener(Os,this.handleFocus),this.addEventListener(ze,this.handleKeydown),this.addEventListener(Me,this.handleFocusOut),this.observer=new MutationObserver(this.onChildListChange),this.observer.observe(this,{childList:!0}),this.noTabbing&&this.setAttribute("tabindex","-1"),F.queueUpdate(this.queueRowIndexUpdate)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("row-focused",this.handleRowFocus),this.removeEventListener(Os,this.handleFocus),this.removeEventListener(ze,this.handleKeydown),this.removeEventListener(Me,this.handleFocusOut),this.observer.disconnect(),this.rowsPlaceholder=null,this.generatedHeader=null}handleRowFocus(t){this.isUpdatingFocus=!0;let e=t.target;this.focusRowIndex=this.rowElements.indexOf(e),this.focusColumnIndex=e.focusColumnIndex,this.setAttribute("tabIndex","-1"),this.isUpdatingFocus=!1}handleFocus(t){this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}handleFocusOut(t){(t.relatedTarget===null||!this.contains(t.relatedTarget))&&this.setAttribute("tabIndex",this.noTabbing?"-1":"0")}handleKeydown(t){if(t.defaultPrevented)return;let e,i=this.rowElements.length-1,r=this.offsetHeight+this.scrollTop,n=this.rowElements[i];switch(t.key){case ut:t.preventDefault(),this.focusOnCell(this.focusRowIndex-1,this.focusColumnIndex,!0);break;case ht:t.preventDefault(),this.focusOnCell(this.focusRowIndex+1,this.focusColumnIndex,!0);break;case nc:if(t.preventDefault(),this.rowElements.length===0){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex===0){this.focusOnCell(0,this.focusColumnIndex,!1);return}for(e=this.focusRowIndex-1,e;e>=0;e--){let s=this.rowElements[e];if(s.offsetTop<this.scrollTop){this.scrollTop=s.offsetTop+s.clientHeight-this.clientHeight;break}}this.focusOnCell(e,this.focusColumnIndex,!1);break;case rc:if(t.preventDefault(),this.rowElements.length===0){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex>=i||n.offsetTop+n.offsetHeight<=r){this.focusOnCell(i,this.focusColumnIndex,!1);return}for(e=this.focusRowIndex+1,e;e<=i;e++){let s=this.rowElements[e];if(s.offsetTop+s.offsetHeight>r){let l=0;this.generateHeader===Oi.sticky&&this.generatedHeader!==null&&(l=this.generatedHeader.clientHeight),this.scrollTop=s.offsetTop-l;break}}this.focusOnCell(e,this.focusColumnIndex,!1);break;case gt:t.ctrlKey&&(t.preventDefault(),this.focusOnCell(0,0,!0));break;case vt:t.ctrlKey&&this.columnDefinitions!==null&&(t.preventDefault(),this.focusOnCell(this.rowElements.length-1,this.columnDefinitions.length-1,!0));break}}queueFocusUpdate(){this.isUpdatingFocus&&(this.contains(document.activeElement)||this===document.activeElement)||this.pendingFocusUpdate===!1&&(this.pendingFocusUpdate=!0,F.queueUpdate(()=>this.updateFocus()))}updateFocus(){this.pendingFocusUpdate=!1,this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}toggleGeneratedHeader(){if(this.generatedHeader!==null&&(this.removeChild(this.generatedHeader),this.generatedHeader=null),this.generateHeader!==Oi.none&&this.rowsData.length>0){let t=document.createElement(this.rowElementTag);this.generatedHeader=t,this.generatedHeader.columnDefinitions=this.columnDefinitions,this.generatedHeader.gridTemplateColumns=this.gridTemplateColumns,this.generatedHeader.rowType=this.generateHeader===Oi.sticky?Vo.stickyHeader:Vo.header,(this.firstChild!==null||this.rowsPlaceholder!==null)&&this.insertBefore(t,this.firstChild!==null?this.firstChild:this.rowsPlaceholder);return}}};bt.generateColumns=o=>Object.getOwnPropertyNames(o).map((t,e)=>({columnDataKey:t,gridColumn:`${e}`}));a([c({attribute:"no-tabbing",mode:"boolean"})],bt.prototype,"noTabbing",void 0);a([c({attribute:"generate-header"})],bt.prototype,"generateHeader",void 0);a([c({attribute:"grid-template-columns"})],bt.prototype,"gridTemplateColumns",void 0);a([f],bt.prototype,"rowsData",void 0);a([f],bt.prototype,"columnDefinitions",void 0);a([f],bt.prototype,"rowItemTemplate",void 0);a([f],bt.prototype,"cellItemTemplate",void 0);a([f],bt.prototype,"headerCellItemTemplate",void 0);a([f],bt.prototype,"focusRowIndex",void 0);a([f],bt.prototype,"focusColumnIndex",void 0);a([f],bt.prototype,"defaultRowItemTemplate",void 0);a([f],bt.prototype,"rowElementTag",void 0);a([f],bt.prototype,"rowElements",void 0);var jp=v`
    <template>
        ${o=>o.rowData===null||o.columnDefinition===null||o.columnDefinition.columnDataKey===null?null:o.rowData[o.columnDefinition.columnDataKey]}
    </template>
`,Gp=v`
    <template>
        ${o=>o.columnDefinition===null?null:o.columnDefinition.title===void 0?o.columnDefinition.columnDataKey:o.columnDefinition.title}
    </template>
`,Yt=class extends w{constructor(){super(...arguments),this.cellType=je.default,this.rowData=null,this.columnDefinition=null,this.isActiveCell=!1,this.customCellView=null,this.updateCellStyle=()=>{this.style.gridColumn=this.gridColumn}}cellTypeChanged(){this.$fastController.isConnected&&this.updateCellView()}gridColumnChanged(){this.$fastController.isConnected&&this.updateCellStyle()}columnDefinitionChanged(t,e){this.$fastController.isConnected&&this.updateCellView()}connectedCallback(){var t;super.connectedCallback(),this.addEventListener(Es,this.handleFocusin),this.addEventListener(Me,this.handleFocusout),this.addEventListener(ze,this.handleKeydown),this.style.gridColumn=`${((t=this.columnDefinition)===null||t===void 0?void 0:t.gridColumn)===void 0?0:this.columnDefinition.gridColumn}`,this.updateCellView(),this.updateCellStyle()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(Es,this.handleFocusin),this.removeEventListener(Me,this.handleFocusout),this.removeEventListener(ze,this.handleKeydown),this.disconnectCellView()}handleFocusin(t){if(!this.isActiveCell){switch(this.isActiveCell=!0,this.cellType){case je.columnHeader:if(this.columnDefinition!==null&&this.columnDefinition.headerCellInternalFocusQueue!==!0&&typeof this.columnDefinition.headerCellFocusTargetCallback=="function"){let e=this.columnDefinition.headerCellFocusTargetCallback(this);e!==null&&e.focus()}break;default:if(this.columnDefinition!==null&&this.columnDefinition.cellInternalFocusQueue!==!0&&typeof this.columnDefinition.cellFocusTargetCallback=="function"){let e=this.columnDefinition.cellFocusTargetCallback(this);e!==null&&e.focus()}break}this.$emit("cell-focused",this)}}handleFocusout(t){this!==document.activeElement&&!this.contains(document.activeElement)&&(this.isActiveCell=!1)}handleKeydown(t){if(!(t.defaultPrevented||this.columnDefinition===null||this.cellType===je.default&&this.columnDefinition.cellInternalFocusQueue!==!0||this.cellType===je.columnHeader&&this.columnDefinition.headerCellInternalFocusQueue!==!0))switch(t.key){case St:case ic:if(this.contains(document.activeElement)&&document.activeElement!==this)return;switch(this.cellType){case je.columnHeader:if(this.columnDefinition.headerCellFocusTargetCallback!==void 0){let e=this.columnDefinition.headerCellFocusTargetCallback(this);e!==null&&e.focus(),t.preventDefault()}break;default:if(this.columnDefinition.cellFocusTargetCallback!==void 0){let e=this.columnDefinition.cellFocusTargetCallback(this);e!==null&&e.focus(),t.preventDefault()}break}break;case se:this.contains(document.activeElement)&&document.activeElement!==this&&(this.focus(),t.preventDefault());break}}updateCellView(){if(this.disconnectCellView(),this.columnDefinition!==null)switch(this.cellType){case je.columnHeader:this.columnDefinition.headerCellTemplate!==void 0?this.customCellView=this.columnDefinition.headerCellTemplate.render(this,this):this.customCellView=Gp.render(this,this);break;case void 0:case je.rowHeader:case je.default:this.columnDefinition.cellTemplate!==void 0?this.customCellView=this.columnDefinition.cellTemplate.render(this,this):this.customCellView=jp.render(this,this);break}}disconnectCellView(){this.customCellView!==null&&(this.customCellView.dispose(),this.customCellView=null)}};a([c({attribute:"cell-type"})],Yt.prototype,"cellType",void 0);a([c({attribute:"grid-column"})],Yt.prototype,"gridColumn",void 0);a([f],Yt.prototype,"rowData",void 0);a([f],Yt.prototype,"columnDefinition",void 0);function Up(o){let t=o.tagFor(Yt);return v`
    <${t}
        cell-type="${e=>e.isRowHeader?"rowheader":void 0}"
        grid-column="${(e,i)=>i.index+1}"
        :rowData="${(e,i)=>i.parent.rowData}"
        :columnDefinition="${e=>e}"
    ></${t}>
`}function qp(o){let t=o.tagFor(Yt);return v`
    <${t}
        cell-type="columnheader"
        grid-column="${(e,i)=>i.index+1}"
        :columnDefinition="${e=>e}"
    ></${t}>
`}var vc=(o,t)=>{let e=Up(o),i=qp(o);return v`
        <template
            role="row"
            class="${r=>r.rowType!=="default"?r.rowType:""}"
            :defaultCellItemTemplate="${e}"
            :defaultHeaderCellItemTemplate="${i}"
            ${ho({property:"cellElements",filter:Ct('[role="cell"],[role="gridcell"],[role="columnheader"],[role="rowheader"]')})}
        >
            <slot ${z("slottedCellElements")}></slot>
        </template>
    `};var bc=(o,t)=>v`
        <template
            tabindex="-1"
            role="${e=>!e.cellType||e.cellType==="default"?"gridcell":e.cellType}"
            class="
            ${e=>e.cellType==="columnheader"?"column-header":e.cellType==="rowheader"?"row-header":""}
            "
        >
            <slot></slot>
        </template>
    `;var xc=v`
    <div
        class="title"
        part="title"
        aria-label="${o=>o.dateFormatter.getDate(`${o.month}-2-${o.year}`,{month:"long",year:"numeric"})}"
    >
        <span part="month">
            ${o=>o.dateFormatter.getMonth(o.month)}
        </span>
        <span part="year">${o=>o.dateFormatter.getYear(o.year)}</span>
    </div>
`,Wp=o=>{let t=o.tagFor(Yt);return v`
        <${t}
            class="week-day"
            part="week-day"
            tabindex="-1"
            grid-column="${(e,i)=>i.index+1}"
            abbr="${e=>e.abbr}"
        >
            ${e=>e.text}
        </${t}>
    `},Xp=(o,t)=>{let e=o.tagFor(Yt);return v`
        <${e}
            class="${(i,r)=>r.parentContext.parent.getDayClassNames(i,t)}"
            part="day"
            tabindex="-1"
            role="gridcell"
            grid-column="${(i,r)=>r.index+1}"
            @click="${(i,r)=>r.parentContext.parent.handleDateSelect(r.event,i)}"
            @keydown="${(i,r)=>r.parentContext.parent.handleKeydown(r.event,i)}"
            aria-label="${(i,r)=>r.parentContext.parent.dateFormatter.getDate(`${i.month}-${i.day}-${i.year}`,{month:"long",day:"numeric"})}"
        >
            <div
                class="date"
                part="${i=>t===`${i.month}-${i.day}-${i.year}`?"today":"date"}"
            >
                ${(i,r)=>r.parentContext.parent.dateFormatter.getDay(i.day)}
            </div>
            <slot name="${i=>i.month}-${i=>i.day}-${i=>i.year}"></slot>
        </${e}>
    `},Yp=(o,t)=>{let e=o.tagFor(ft);return v`
        <${e}
            class="week"
            part="week"
            role="row"
            role-type="default"
            grid-template-columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr"
        >
        ${Ao(i=>i,Xp(o,t),{positioning:!0})}
        </${e}>
    `},Qp=(o,t)=>{let e=o.tagFor(bt),i=o.tagFor(ft);return v`
    <${e} class="days interact" part="days" generate-header="none">
        <${i}
            class="week-days"
            part="week-days"
            role="row"
            row-type="header"
            grid-template-columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr"
        >
            ${Ao(r=>r.getWeekdayText(),Wp(o),{positioning:!0})}
        </${i}>
        ${Ao(r=>r.getDays(),Yp(o,t))}
    </${e}>
`},Zp=o=>v`
        <div class="days" part="days">
            <div class="week-days" part="week-days">
                ${Ao(t=>t.getWeekdayText(),v`
                        <div class="week-day" part="week-day" abbr="${t=>t.abbr}">
                            ${t=>t.text}
                        </div>
                    `)}
            </div>
            ${Ao(t=>t.getDays(),v`
                    <div class="week">
                        ${Ao(t=>t,v`
                                <div
                                    class="${(t,e)=>e.parentContext.parent.getDayClassNames(t,o)}"
                                    part="day"
                                    aria-label="${(t,e)=>e.parentContext.parent.dateFormatter.getDate(`${t.month}-${t.day}-${t.year}`,{month:"long",day:"numeric"})}"
                                >
                                    <div
                                        class="date"
                                        part="${t=>o===`${t.month}-${t.day}-${t.year}`?"today":"date"}"
                                    >
                                        ${(t,e)=>e.parentContext.parent.dateFormatter.getDay(t.day)}
                                    </div>
                                    <slot
                                        name="${t=>t.month}-${t=>t.day}-${t=>t.year}"
                                    ></slot>
                                </div>
                            `)}
                    </div>
                `)}
        </div>
    `,yc=(o,t)=>{var e;let i=new Date,r=`${i.getMonth()+1}-${i.getDate()}-${i.getFullYear()}`;return v`
        <template>
            ${Pl}
            ${t.title instanceof Function?t.title(o,t):(e=t.title)!==null&&e!==void 0?e:""}
            <slot></slot>
            ${U(n=>n.readonly,Zp(r),Qp(o,r))}
            ${Vl}
        </template>
    `};var wc=(o,t)=>v`
    <slot></slot>
`;var Ei=class extends w{};var $c=(o,t)=>v`
    <template
        role="checkbox"
        aria-checked="${e=>e.checked}"
        aria-required="${e=>e.required}"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        tabindex="${e=>e.disabled?null:0}"
        @keypress="${(e,i)=>e.keypressHandler(i.event)}"
        @click="${(e,i)=>e.clickHandler(i.event)}"
        class="${e=>e.readOnly?"readonly":""} ${e=>e.checked?"checked":""} ${e=>e.indeterminate?"indeterminate":""}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${t.checkedIndicator||""}
            </slot>
            <slot name="indeterminate-indicator">
                ${t.indeterminateIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${z("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;var Hs=class extends w{},Tr=class extends ei(Hs){constructor(){super(...arguments),this.proxy=document.createElement("input")}};var Po=class extends Tr{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=t=>{if(!this.readOnly)switch(t.key){case Xt:this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked;break}},this.clickHandler=t=>{!this.disabled&&!this.readOnly&&(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}};a([c({attribute:"readonly",mode:"boolean"})],Po.prototype,"readOnly",void 0);a([f],Po.prototype,"defaultSlottedNodes",void 0);a([f],Po.prototype,"indeterminate",void 0);function Bs(o){return Te(o)&&(o.getAttribute("role")==="option"||o instanceof HTMLOptionElement)}var Qt=class extends w{constructor(t,e,i,r){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,t&&(this.textContent=t),e&&(this.initialValue=e),i&&(this.defaultSelected=i),r&&(this.selected=r),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(t,e){if(typeof e=="boolean"){this.ariaChecked=e?"true":"false";return}this.ariaChecked=null}contentChanged(t,e){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(t,e){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(t,e){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var t;return(t=this.value)!==null&&t!==void 0?t:this.text}get text(){var t,e;return(e=(t=this.textContent)===null||t===void 0?void 0:t.replace(/\s+/g," ").trim())!==null&&e!==void 0?e:""}set value(t){let e=`${t??""}`;this._value=e,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=e),R.notify(this,"value")}get value(){var t;return R.track(this,"value"),(t=this._value)!==null&&t!==void 0?t:this.text}get form(){return this.proxy?this.proxy.form:null}};a([f],Qt.prototype,"checked",void 0);a([f],Qt.prototype,"content",void 0);a([f],Qt.prototype,"defaultSelected",void 0);a([c({mode:"boolean"})],Qt.prototype,"disabled",void 0);a([c({attribute:"selected",mode:"boolean"})],Qt.prototype,"selectedAttribute",void 0);a([f],Qt.prototype,"selected",void 0);a([c({attribute:"value",mode:"fromView"})],Qt.prototype,"initialValue",void 0);var mo=class{};a([f],mo.prototype,"ariaChecked",void 0);a([f],mo.prototype,"ariaPosInSet",void 0);a([f],mo.prototype,"ariaSelected",void 0);a([f],mo.prototype,"ariaSetSize",void 0);_(mo,X);_(Qt,Z,mo);var mt=class o extends w{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var t;return(t=this.selectedOptions[0])!==null&&t!==void 0?t:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every(t=>t.disabled)}get length(){var t,e;return(e=(t=this.options)===null||t===void 0?void 0:t.length)!==null&&e!==void 0?e:0}get options(){return R.track(this,"options"),this._options}set options(t){this._options=t,R.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(t){this.typeaheadExpired=t}clickHandler(t){let e=t.target.closest("option,[role=option]");if(e&&!e.disabled)return this.selectedIndex=this.options.indexOf(e),!0}focusAndScrollOptionIntoView(t=this.firstSelectedOption){this.contains(document.activeElement)&&t!==null&&(t.focus(),requestAnimationFrame(()=>{t.scrollIntoView({block:"nearest"})}))}focusinHandler(t){!this.shouldSkipFocus&&t.target===t.currentTarget&&(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){let t=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),e=new RegExp(`^${t}`,"gi");return this.options.filter(i=>i.text.trim().match(e))}getSelectableIndex(t=this.selectedIndex,e){let i=t>e?-1:t<e?1:0,r=t+i,n=null;switch(i){case-1:{n=this.options.reduceRight((s,l,d)=>!s&&!l.disabled&&d<r?l:s,n);break}case 1:{n=this.options.reduce((s,l,d)=>!s&&!l.disabled&&d>r?l:s,n);break}}return this.options.indexOf(n)}handleChange(t,e){switch(e){case"selected":{o.slottedOptionFilter(t)&&(this.selectedIndex=this.options.indexOf(t)),this.setSelectedOptions();break}}}handleTypeAhead(t){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout(()=>this.typeaheadExpired=!0,o.TYPE_AHEAD_TIMEOUT_MS),!(t.length>1)&&(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${t}`)}keydownHandler(t){if(this.disabled)return!0;this.shouldSkipFocus=!1;let e=t.key;switch(e){case gt:{t.shiftKey||(t.preventDefault(),this.selectFirstOption());break}case ht:{t.shiftKey||(t.preventDefault(),this.selectNextOption());break}case ut:{t.shiftKey||(t.preventDefault(),this.selectPreviousOption());break}case vt:{t.preventDefault(),this.selectLastOption();break}case uo:return this.focusAndScrollOptionIntoView(),!0;case St:case se:return!0;case Xt:if(this.typeaheadExpired)return!0;default:return e.length===1&&this.handleTypeAhead(`${e}`),!0}}mousedownHandler(t){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(t,e){this.ariaMultiSelectable=e?"true":null}selectedIndexChanged(t,e){var i;if(!this.hasSelectableOptions){this.selectedIndex=-1;return}if(!((i=this.options[this.selectedIndex])===null||i===void 0)&&i.disabled&&typeof t=="number"){let r=this.getSelectableIndex(t,e),n=r>-1?r:t;this.selectedIndex=n,e===n&&this.selectedIndexChanged(e,n);return}this.setSelectedOptions()}selectedOptionsChanged(t,e){var i;let r=e.filter(o.slottedOptionFilter);(i=this.options)===null||i===void 0||i.forEach(n=>{let s=R.getNotifier(n);s.unsubscribe(this,"selected"),n.selected=r.includes(n),s.subscribe(this,"selected")})}selectFirstOption(){var t,e;this.disabled||(this.selectedIndex=(e=(t=this.options)===null||t===void 0?void 0:t.findIndex(i=>!i.disabled))!==null&&e!==void 0?e:-1)}selectLastOption(){this.disabled||(this.selectedIndex=Jl(this.options,t=>!t.disabled))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var t,e;this.selectedIndex=(e=(t=this.options)===null||t===void 0?void 0:t.findIndex(i=>i.defaultSelected))!==null&&e!==void 0?e:-1}setSelectedOptions(){var t,e,i;!((t=this.options)===null||t===void 0)&&t.length&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=(i=(e=this.firstSelectedOption)===null||e===void 0?void 0:e.id)!==null&&i!==void 0?i:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(t,e){this.options=e.reduce((r,n)=>(Bs(n)&&r.push(n),r),[]);let i=`${this.options.length}`;this.options.forEach((r,n)=>{r.id||(r.id=Ne("option-")),r.ariaPosInSet=`${n+1}`,r.ariaSetSize=i}),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(t,e){if(this.$fastController.isConnected){let i=this.getTypeaheadMatches();if(i.length){let r=this.options.indexOf(i[0]);r>-1&&(this.selectedIndex=r)}this.typeaheadExpired=!1}}};mt.slottedOptionFilter=o=>Bs(o)&&!o.hidden;mt.TYPE_AHEAD_TIMEOUT_MS=1e3;a([c({mode:"boolean"})],mt.prototype,"disabled",void 0);a([f],mt.prototype,"selectedIndex",void 0);a([f],mt.prototype,"selectedOptions",void 0);a([f],mt.prototype,"slottedOptions",void 0);a([f],mt.prototype,"typeaheadBuffer",void 0);var ae=class{};a([f],ae.prototype,"ariaActiveDescendant",void 0);a([f],ae.prototype,"ariaDisabled",void 0);a([f],ae.prototype,"ariaExpanded",void 0);a([f],ae.prototype,"ariaMultiSelectable",void 0);_(ae,X);_(mt,ae);var go={above:"above",below:"below"};var Ms=class extends mt{},Rr=class extends Ot(Ms){constructor(){super(...arguments),this.proxy=document.createElement("input")}};var Li={inline:"inline",list:"list",both:"both",none:"none"};var le=class extends Rr{constructor(){super(...arguments),this._value="",this.filteredOptions=[],this.filter="",this.forcedPosition=!1,this.listboxId=Ne("listbox-"),this.maxHeight=0,this.open=!1}formResetCallback(){super.formResetCallback(),this.setDefaultSelectedOption(),this.updateValue()}validate(){super.validate(this.control)}get isAutocompleteInline(){return this.autocomplete===Li.inline||this.isAutocompleteBoth}get isAutocompleteList(){return this.autocomplete===Li.list||this.isAutocompleteBoth}get isAutocompleteBoth(){return this.autocomplete===Li.both}openChanged(){if(this.open){this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),F.queueUpdate(()=>this.focus());return}this.ariaControls="",this.ariaExpanded="false"}get options(){return R.track(this,"options"),this.filteredOptions.length?this.filteredOptions:this._options}set options(t){this._options=t,R.notify(this,"options")}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}positionChanged(t,e){this.positionAttribute=e,this.setPositioning()}get value(){return R.track(this,"value"),this._value}set value(t){var e,i,r;let n=`${this._value}`;if(this.$fastController.isConnected&&this.options){let s=this.options.findIndex(u=>u.text.toLowerCase()===t.toLowerCase()),l=(e=this.options[this.selectedIndex])===null||e===void 0?void 0:e.text,d=(i=this.options[s])===null||i===void 0?void 0:i.text;this.selectedIndex=l!==d?s:this.selectedIndex,t=((r=this.firstSelectedOption)===null||r===void 0?void 0:r.text)||t}n!==t&&(this._value=t,super.valueChanged(n,t),R.notify(this,"value"))}clickHandler(t){if(!this.disabled){if(this.open){let e=t.target.closest("option,[role=option]");if(!e||e.disabled)return;this.selectedOptions=[e],this.control.value=e.text,this.clearSelectionRange(),this.updateValue(!0)}return this.open=!this.open,this.open&&this.control.focus(),!0}}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.value&&(this.initialValue=this.value)}disabledChanged(t,e){super.disabledChanged&&super.disabledChanged(t,e),this.ariaDisabled=this.disabled?"true":"false"}filterOptions(){(!this.autocomplete||this.autocomplete===Li.none)&&(this.filter="");let t=this.filter.toLowerCase();this.filteredOptions=this._options.filter(e=>e.text.toLowerCase().startsWith(this.filter.toLowerCase())),this.isAutocompleteList&&(!this.filteredOptions.length&&!t&&(this.filteredOptions=this._options),this._options.forEach(e=>{e.hidden=!this.filteredOptions.includes(e)}))}focusAndScrollOptionIntoView(){this.contains(document.activeElement)&&(this.control.focus(),this.firstSelectedOption&&requestAnimationFrame(()=>{var t;(t=this.firstSelectedOption)===null||t===void 0||t.scrollIntoView({block:"nearest"})}))}focusoutHandler(t){if(this.syncValue(),!this.open)return!0;let e=t.relatedTarget;if(this.isSameNode(e)){this.focus();return}(!this.options||!this.options.includes(e))&&(this.open=!1)}inputHandler(t){if(this.filter=this.control.value,this.filterOptions(),this.isAutocompleteInline||(this.selectedIndex=this.options.map(e=>e.text).indexOf(this.control.value)),t.inputType.includes("deleteContent")||!this.filter.length)return!0;this.isAutocompleteList&&!this.open&&(this.open=!0),this.isAutocompleteInline&&(this.filteredOptions.length?(this.selectedOptions=[this.filteredOptions[0]],this.selectedIndex=this.options.indexOf(this.firstSelectedOption),this.setInlineSelection()):this.selectedIndex=-1)}keydownHandler(t){let e=t.key;if(t.ctrlKey||t.shiftKey)return!0;switch(e){case"Enter":{this.syncValue(),this.isAutocompleteInline&&(this.filter=this.value),this.open=!1,this.clearSelectionRange();break}case"Escape":{if(this.isAutocompleteInline||(this.selectedIndex=-1),this.open){this.open=!1;break}this.value="",this.control.value="",this.filter="",this.filterOptions();break}case"Tab":{if(this.setInputToSelection(),!this.open)return!0;t.preventDefault(),this.open=!1;break}case"ArrowUp":case"ArrowDown":{if(this.filterOptions(),!this.open){this.open=!0;break}this.filteredOptions.length>0&&super.keydownHandler(t),this.isAutocompleteInline&&this.setInlineSelection();break}default:return!0}}keyupHandler(t){switch(t.key){case"ArrowLeft":case"ArrowRight":case"Backspace":case"Delete":case"Home":case"End":{this.filter=this.control.value,this.selectedIndex=-1,this.filterOptions();break}}}selectedIndexChanged(t,e){if(this.$fastController.isConnected){if(e=Ko(-1,this.options.length-1,e),e!==this.selectedIndex){this.selectedIndex=e;return}super.selectedIndexChanged(t,e)}}selectPreviousOption(){!this.disabled&&this.selectedIndex>=0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){if(this.$fastController.isConnected&&this.options){let t=this.options.findIndex(e=>e.getAttribute("selected")!==null||e.selected);this.selectedIndex=t,!this.dirtyValue&&this.firstSelectedOption&&(this.value=this.firstSelectedOption.text),this.setSelectedOptions()}}setInputToSelection(){this.firstSelectedOption&&(this.control.value=this.firstSelectedOption.text,this.control.focus())}setInlineSelection(){this.firstSelectedOption&&(this.setInputToSelection(),this.control.setSelectionRange(this.filter.length,this.control.value.length,"backward"))}syncValue(){var t;let e=this.selectedIndex>-1?(t=this.firstSelectedOption)===null||t===void 0?void 0:t.text:this.control.value;this.updateValue(this.value!==e)}setPositioning(){let t=this.getBoundingClientRect(),i=window.innerHeight-t.bottom;this.position=this.forcedPosition?this.positionAttribute:t.top>i?go.above:go.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===go.above?~~t.top:~~i}selectedOptionsChanged(t,e){this.$fastController.isConnected&&this._options.forEach(i=>{i.selected=e.includes(i)})}slottedOptionsChanged(t,e){super.slottedOptionsChanged(t,e),this.updateValue()}updateValue(t){var e;this.$fastController.isConnected&&(this.value=((e=this.firstSelectedOption)===null||e===void 0?void 0:e.text)||this.control.value,this.control.value=this.value),t&&this.$emit("change")}clearSelectionRange(){let t=this.control.value.length;this.control.setSelectionRange(t,t)}};a([c({attribute:"autocomplete",mode:"fromView"})],le.prototype,"autocomplete",void 0);a([f],le.prototype,"maxHeight",void 0);a([c({attribute:"open",mode:"boolean"})],le.prototype,"open",void 0);a([c],le.prototype,"placeholder",void 0);a([c({attribute:"position"})],le.prototype,"positionAttribute",void 0);a([f],le.prototype,"position",void 0);var ii=class{};a([f],ii.prototype,"ariaAutoComplete",void 0);a([f],ii.prototype,"ariaControls",void 0);_(ii,ae);_(le,Z,ii);var kc=(o,t)=>v`
    <template
        aria-disabled="${e=>e.ariaDisabled}"
        autocomplete="${e=>e.autocomplete}"
        class="${e=>e.open?"open":""} ${e=>e.disabled?"disabled":""} ${e=>e.position}"
        ?open="${e=>e.open}"
        tabindex="${e=>e.disabled?null:"0"}"
        @click="${(e,i)=>e.clickHandler(i.event)}"
        @focusout="${(e,i)=>e.focusoutHandler(i.event)}"
        @keydown="${(e,i)=>e.keydownHandler(i.event)}"
    >
        <div class="control" part="control">
            ${K(o,t)}
            <slot name="control">
                <input
                    aria-activedescendant="${e=>e.open?e.ariaActiveDescendant:null}"
                    aria-autocomplete="${e=>e.ariaAutoComplete}"
                    aria-controls="${e=>e.ariaControls}"
                    aria-disabled="${e=>e.ariaDisabled}"
                    aria-expanded="${e=>e.ariaExpanded}"
                    aria-haspopup="listbox"
                    class="selected-value"
                    part="selected-value"
                    placeholder="${e=>e.placeholder}"
                    role="combobox"
                    type="text"
                    ?disabled="${e=>e.disabled}"
                    :value="${e=>e.value}"
                    @input="${(e,i)=>e.inputHandler(i.event)}"
                    @keyup="${(e,i)=>e.keyupHandler(i.event)}"
                    ${V("control")}
                />
                <div class="indicator" part="indicator" aria-hidden="true">
                    <slot name="indicator">
                        ${t.indicator||""}
                    </slot>
                </div>
            </slot>
            ${J(o,t)}
        </div>
        <div
            class="listbox"
            id="${e=>e.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${e=>e.disabled}"
            ?hidden="${e=>!e.open}"
            ${V("listbox")}
        >
            <slot
                ${z({filter:mt.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`;function Ho(o){let t=o.parentElement;if(t)return t;{let e=o.getRootNode();if(e.host instanceof HTMLElement)return e.host}return null}function Cc(o,t){let e=t;for(;e!==null;){if(e===o)return!0;e=Ho(e)}return!1}var Re=document.createElement("div");function Jp(o){return o instanceof lo}var Vi=class{setProperty(t,e){F.queueUpdate(()=>this.target.setProperty(t,e))}removeProperty(t){F.queueUpdate(()=>this.target.removeProperty(t))}},Ns=class extends Vi{constructor(t){super();let e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":host{}")].style,t.$fastController.addStyles(pt.create([e]))}},_s=class extends Vi{constructor(){super();let t=new CSSStyleSheet;this.target=t.cssRules[t.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,t]}},js=class extends Vi{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);let{sheet:t}=this.style;if(t){let e=t.insertRule(":root{}",t.cssRules.length);this.target=t.cssRules[e].style}}},Ir=class{constructor(t){this.store=new Map,this.target=null;let e=t.$fastController;this.style=document.createElement("style"),e.addStyles(this.style),R.getNotifier(e).subscribe(this,"isConnected"),this.handleChange(e,"isConnected")}targetChanged(){if(this.target!==null)for(let[t,e]of this.store.entries())this.target.setProperty(t,e)}setProperty(t,e){this.store.set(t,e),F.queueUpdate(()=>{this.target!==null&&this.target.setProperty(t,e)})}removeProperty(t){this.store.delete(t),F.queueUpdate(()=>{this.target!==null&&this.target.removeProperty(t)})}handleChange(t,e){let{sheet:i}=this.style;if(i){let r=i.insertRule(":host{}",i.cssRules.length);this.target=i.cssRules[r].style}else this.target=null}};a([f],Ir.prototype,"target",void 0);var Gs=class{constructor(t){this.target=t.style}setProperty(t,e){F.queueUpdate(()=>this.target.setProperty(t,e))}removeProperty(t){F.queueUpdate(()=>this.target.removeProperty(t))}},vo=class o{setProperty(t,e){o.properties[t]=e;for(let i of o.roots.values())Bo.getOrCreate(o.normalizeRoot(i)).setProperty(t,e)}removeProperty(t){delete o.properties[t];for(let e of o.roots.values())Bo.getOrCreate(o.normalizeRoot(e)).removeProperty(t)}static registerRoot(t){let{roots:e}=o;if(!e.has(t)){e.add(t);let i=Bo.getOrCreate(this.normalizeRoot(t));for(let r in o.properties)i.setProperty(r,o.properties[r])}}static unregisterRoot(t){let{roots:e}=o;if(e.has(t)){e.delete(t);let i=Bo.getOrCreate(o.normalizeRoot(t));for(let r in o.properties)i.removeProperty(r)}}static normalizeRoot(t){return t===Re?document:t}};vo.roots=new Set;vo.properties={};var zs=new WeakMap,Kp=F.supportsAdoptedStyleSheets?Ns:Ir,Bo=Object.freeze({getOrCreate(o){if(zs.has(o))return zs.get(o);let t;return o===Re?t=new vo:o instanceof Document?t=F.supportsAdoptedStyleSheets?new _s:new js:Jp(o)?t=new Kp(o):t=new Gs(o),zs.set(o,t),t}});var we=class o extends co{constructor(t){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=t.name,t.cssCustomPropertyName!==null&&(this.cssCustomProperty=`--${t.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=o.uniqueId(),o.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(t){return new o({name:typeof t=="string"?t:t.name,cssCustomPropertyName:typeof t=="string"?t:t.cssCustomPropertyName===void 0?t.name:t.cssCustomPropertyName})}static isCSSDesignToken(t){return typeof t.cssCustomProperty=="string"}static isDerivedDesignTokenValue(t){return typeof t=="function"}static getTokenById(t){return o.tokensById.get(t)}getOrCreateSubscriberSet(t=this){return this.subscribers.get(t)||this.subscribers.set(t,new Set)&&this.subscribers.get(t)}createCSS(){return this.cssVar||""}getValueFor(t){let e=_t.getOrCreate(t).get(this);if(e!==void 0)return e;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${t} or an ancestor of ${t}.`)}setValueFor(t,e){return this._appliedTo.add(t),e instanceof o&&(e=this.alias(e)),_t.getOrCreate(t).set(this,e),this}deleteValueFor(t){return this._appliedTo.delete(t),_t.existsFor(t)&&_t.getOrCreate(t).delete(this),this}withDefault(t){return this.setValueFor(Re,t),this}subscribe(t,e){let i=this.getOrCreateSubscriberSet(e);e&&!_t.existsFor(e)&&_t.getOrCreate(e),i.has(t)||i.add(t)}unsubscribe(t,e){let i=this.subscribers.get(e||this);i&&i.has(t)&&i.delete(t)}notify(t){let e=Object.freeze({token:this,target:t});this.subscribers.has(this)&&this.subscribers.get(this).forEach(i=>i.handleChange(e)),this.subscribers.has(t)&&this.subscribers.get(t).forEach(i=>i.handleChange(e))}alias(t){return e=>t.getValueFor(e)}};we.uniqueId=(()=>{let o=0;return()=>(o++,o.toString(16))})();we.tokensById=new Map;var Us=class{startReflection(t,e){t.subscribe(this,e),this.handleChange({token:t,target:e})}stopReflection(t,e){t.unsubscribe(this,e),this.remove(t,e)}handleChange(t){let{token:e,target:i}=t;this.add(e,i)}add(t,e){Bo.getOrCreate(e).setProperty(t.cssCustomProperty,this.resolveCSSValue(_t.getOrCreate(e).get(t)))}remove(t,e){Bo.getOrCreate(e).removeProperty(t.cssCustomProperty)}resolveCSSValue(t){return t&&typeof t.createCSS=="function"?t.createCSS():t}},qs=class{constructor(t,e,i){this.source=t,this.token=e,this.node=i,this.dependencies=new Set,this.observer=R.binding(t,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,no))}},Ws=class{constructor(){this.values=new Map}set(t,e){this.values.get(t)!==e&&(this.values.set(t,e),R.getNotifier(this).notify(t.id))}get(t){return R.track(this,t.id),this.values.get(t)}delete(t){this.values.delete(t)}all(){return this.values.entries()}},Pi=new WeakMap,Hi=new WeakMap,_t=class o{constructor(t){this.target=t,this.store=new Ws,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(e,i)=>{let r=we.getTokenById(i);if(r&&(r.notify(this.target),we.isCSSDesignToken(r))){let n=this.parent,s=this.isReflecting(r);if(n){let l=n.get(r),d=e.get(r);l!==d&&!s?this.reflectToCSS(r):l===d&&s&&this.stopReflectToCSS(r)}else s||this.reflectToCSS(r)}}},Pi.set(t,this),R.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),t instanceof lo?t.$fastController.addBehaviors([this]):t.isConnected&&this.bind()}static getOrCreate(t){return Pi.get(t)||new o(t)}static existsFor(t){return Pi.has(t)}static findParent(t){if(Re!==t.target){let e=Ho(t.target);for(;e!==null;){if(Pi.has(e))return Pi.get(e);e=Ho(e)}return o.getOrCreate(Re)}return null}static findClosestAssignedNode(t,e){let i=e;do{if(i.has(t))return i;i=i.parent?i.parent:i.target!==Re?o.getOrCreate(Re):null}while(i!==null);return null}get parent(){return Hi.get(this)||null}has(t){return this.assignedValues.has(t)}get(t){let e=this.store.get(t);if(e!==void 0)return e;let i=this.getRaw(t);if(i!==void 0)return this.hydrate(t,i),this.get(t)}getRaw(t){var e;return this.assignedValues.has(t)?this.assignedValues.get(t):(e=o.findClosestAssignedNode(t,this))===null||e===void 0?void 0:e.getRaw(t)}set(t,e){we.isDerivedDesignTokenValue(this.assignedValues.get(t))&&this.tearDownBindingObserver(t),this.assignedValues.set(t,e),we.isDerivedDesignTokenValue(e)?this.setupBindingObserver(t,e):this.store.set(t,e)}delete(t){this.assignedValues.delete(t),this.tearDownBindingObserver(t);let e=this.getRaw(t);e?this.hydrate(t,e):this.store.delete(t)}bind(){let t=o.findParent(this);t&&t.appendChild(this);for(let e of this.assignedValues.keys())e.notify(this.target)}unbind(){this.parent&&Hi.get(this).removeChild(this)}appendChild(t){t.parent&&Hi.get(t).removeChild(t);let e=this.children.filter(i=>t.contains(i));Hi.set(t,this),this.children.push(t),e.forEach(i=>t.appendChild(i)),R.getNotifier(this.store).subscribe(t);for(let[i,r]of this.store.all())t.hydrate(i,this.bindingObservers.has(i)?this.getRaw(i):r)}removeChild(t){let e=this.children.indexOf(t);return e!==-1&&this.children.splice(e,1),R.getNotifier(this.store).unsubscribe(t),t.parent===this?Hi.delete(t):!1}contains(t){return Cc(this.target,t.target)}reflectToCSS(t){this.isReflecting(t)||(this.reflecting.add(t),o.cssCustomPropertyReflector.startReflection(t,this.target))}stopReflectToCSS(t){this.isReflecting(t)&&(this.reflecting.delete(t),o.cssCustomPropertyReflector.stopReflection(t,this.target))}isReflecting(t){return this.reflecting.has(t)}handleChange(t,e){let i=we.getTokenById(e);i&&this.hydrate(i,this.getRaw(i))}hydrate(t,e){if(!this.has(t)){let i=this.bindingObservers.get(t);we.isDerivedDesignTokenValue(e)?i?i.source!==e&&(this.tearDownBindingObserver(t),this.setupBindingObserver(t,e)):this.setupBindingObserver(t,e):(i&&this.tearDownBindingObserver(t),this.store.set(t,e))}}setupBindingObserver(t,e){let i=new qs(e,t,this);return this.bindingObservers.set(t,i),i}tearDownBindingObserver(t){return this.bindingObservers.has(t)?(this.bindingObservers.get(t).disconnect(),this.bindingObservers.delete(t),!0):!1}};_t.cssCustomPropertyReflector=new Us;a([f],_t.prototype,"children",void 0);function tf(o){return we.from(o)}var q=Object.freeze({create:tf,notifyConnection(o){return!o.isConnected||!_t.existsFor(o)?!1:(_t.getOrCreate(o).bind(),!0)},notifyDisconnection(o){return o.isConnected||!_t.existsFor(o)?!1:(_t.getOrCreate(o).unbind(),!0)},registerRoot(o=Re){vo.registerRoot(o)},unregisterRoot(o=Re){vo.unregisterRoot(o)}});var Xs=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),Ys=new Map,Dr=new Map,ri=null,Bi=et.createInterface(o=>o.cachedCallback(t=>(ri===null&&(ri=new Ar(null,t)),ri))),Zs=Object.freeze({tagFor(o){return Dr.get(o)},responsibleFor(o){let t=o.$$designSystem$$;return t||et.findResponsibleContainer(o).get(Bi)},getOrCreate(o){if(!o)return ri===null&&(ri=et.getOrCreateDOMContainer().get(Bi)),ri;let t=o.$$designSystem$$;if(t)return t;let e=et.getOrCreateDOMContainer(o);if(e.has(Bi,!1))return e.get(Bi);{let i=new Ar(o,e);return e.register(Oo.instance(Bi,i)),i}}});function ef(o,t,e){return typeof o=="string"?{name:o,type:t,callback:e}:o}var Ar=class{constructor(t,e){this.owner=t,this.container=e,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>Xs.definitionCallbackOnly,t!==null&&(t.$$designSystem$$=this)}withPrefix(t){return this.prefix=t,this}withShadowRootMode(t){return this.shadowRootMode=t,this}withElementDisambiguation(t){return this.disambiguate=t,this}withDesignTokenRoot(t){return this.designTokenRoot=t,this}register(...t){let e=this.container,i=[],r=this.disambiguate,n=this.shadowRootMode,s={elementPrefix:this.prefix,tryDefineElement(l,d,u){let p=ef(l,d,u),{name:g,callback:y,baseClass:B}=p,{type:j}=p,Q=g,ot=Ys.get(Q),ie=!0;for(;ot;){let Dt=r(Q,j,ot);switch(Dt){case Xs.ignoreDuplicate:return;case Xs.definitionCallbackOnly:ie=!1,ot=void 0;break;default:Q=Dt,ot=Ys.get(Q);break}}ie&&((Dr.has(j)||j===w)&&(j=class extends j{}),Ys.set(Q,j),Dr.set(j,Q),B&&Dr.set(B,Q)),i.push(new Qs(e,Q,j,n,y,ie))}};this.designTokensInitialized||(this.designTokensInitialized=!0,this.designTokenRoot!==null&&q.registerRoot(this.designTokenRoot)),e.registerWithContext(s,...t);for(let l of i)l.callback(l),l.willDefine&&l.definition!==null&&l.definition.define();return this}},Qs=class{constructor(t,e,i,r,n,s){this.container=t,this.name=e,this.type=i,this.shadowRootMode=r,this.callback=n,this.willDefine=s,this.definition=null}definePresentation(t){wr.define(this.name,t,this.container)}defineElement(t){this.definition=new Fe(this.type,Object.assign(Object.assign({},t),{name:this.name}))}tagFor(t){return Zs.tagFor(t)}};var Sc=(o,t)=>v`
    <div class="positioning-region" part="positioning-region">
        ${U(e=>e.modal,v`
                <div
                    class="overlay"
                    part="overlay"
                    role="presentation"
                    @click="${e=>e.dismiss()}"
                ></div>
            `)}
        <div
            role="dialog"
            tabindex="-1"
            class="control"
            part="control"
            aria-modal="${e=>e.modal}"
            aria-describedby="${e=>e.ariaDescribedby}"
            aria-labelledby="${e=>e.ariaLabelledby}"
            aria-label="${e=>e.ariaLabel}"
            ${V("dialog")}
        >
            <slot></slot>
        </div>
    </div>
`;var Tc=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],of=Tc.join(","),Rc=typeof Element>"u",Mi=Rc?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Js=!Rc&&Element.prototype.getRootNode?function(o){return o.getRootNode()}:function(o){return o.ownerDocument};var rf=function(t,e){return t.tabIndex<0&&(e||/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||t.isContentEditable)&&isNaN(parseInt(t.getAttribute("tabindex"),10))?0:t.tabIndex};var Ic=function(t){return t.tagName==="INPUT"},nf=function(t){return Ic(t)&&t.type==="hidden"},sf=function(t){var e=t.tagName==="DETAILS"&&Array.prototype.slice.apply(t.children).some(function(i){return i.tagName==="SUMMARY"});return e},af=function(t,e){for(var i=0;i<t.length;i++)if(t[i].checked&&t[i].form===e)return t[i]},lf=function(t){if(!t.name)return!0;var e=t.form||Js(t),i=function(l){return e.querySelectorAll('input[type="radio"][name="'+l+'"]')},r;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")r=i(window.CSS.escape(t.name));else try{r=i(t.name)}catch(s){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",s.message),!1}var n=af(r,t.form);return!n||n===t},cf=function(t){return Ic(t)&&t.type==="radio"},df=function(t){return cf(t)&&!lf(t)},Fc=function(t){var e=t.getBoundingClientRect(),i=e.width,r=e.height;return i===0&&r===0},hf=function(t,e){var i=e.displayCheck,r=e.getShadowRoot;if(getComputedStyle(t).visibility==="hidden")return!0;var n=Mi.call(t,"details>summary:first-of-type"),s=n?t.parentElement:t;if(Mi.call(s,"details:not([open]) *"))return!0;var l=Js(t).host,d=l?.ownerDocument.contains(l)||t.ownerDocument.contains(t);if(!i||i==="full"){if(typeof r=="function"){for(var u=t;t;){var p=t.parentElement,g=Js(t);if(p&&!p.shadowRoot&&r(p)===!0)return Fc(t);t.assignedSlot?t=t.assignedSlot:!p&&g!==t.ownerDocument?t=g.host:t=p}t=u}if(d)return!t.getClientRects().length}else if(i==="non-zero-area")return Fc(t);return!1},uf=function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var e=t.parentElement;e;){if(e.tagName==="FIELDSET"&&e.disabled){for(var i=0;i<e.children.length;i++){var r=e.children.item(i);if(r.tagName==="LEGEND")return Mi.call(e,"fieldset[disabled] *")?!0:!r.contains(t)}return!0}e=e.parentElement}return!1},Dc=function(t,e){return!(e.disabled||nf(e)||hf(e,t)||sf(e)||uf(e))},pf=function(t,e){return!(df(e)||rf(e)<0||!Dc(t,e))};var Ks=function(t,e){if(e=e||{},!t)throw new Error("No node provided");return Mi.call(t,of)===!1?!1:pf(e,t)},ff=Tc.concat("iframe").join(","),ta=function(t,e){if(e=e||{},!t)throw new Error("No node provided");return Mi.call(t,ff)===!1?!1:Dc(e,t)};var Ie=class o extends w{constructor(){super(...arguments),this.modal=!0,this.hidden=!1,this.trapFocus=!0,this.trapFocusChanged=()=>{this.$fastController.isConnected&&this.updateTrapFocus()},this.isTrappingFocus=!1,this.handleDocumentKeydown=t=>{if(!t.defaultPrevented&&!this.hidden)switch(t.key){case se:this.dismiss(),t.preventDefault();break;case uo:this.handleTabKeyDown(t);break}},this.handleDocumentFocus=t=>{!t.defaultPrevented&&this.shouldForceFocus(t.target)&&(this.focusFirstElement(),t.preventDefault())},this.handleTabKeyDown=t=>{if(!this.trapFocus||this.hidden)return;let e=this.getTabQueueBounds();if(e.length!==0){if(e.length===1){e[0].focus(),t.preventDefault();return}t.shiftKey&&t.target===e[0]?(e[e.length-1].focus(),t.preventDefault()):!t.shiftKey&&t.target===e[e.length-1]&&(e[0].focus(),t.preventDefault())}},this.getTabQueueBounds=()=>{let t=[];return o.reduceTabbableItems(t,this)},this.focusFirstElement=()=>{let t=this.getTabQueueBounds();t.length>0?t[0].focus():this.dialog instanceof HTMLElement&&this.dialog.focus()},this.shouldForceFocus=t=>this.isTrappingFocus&&!this.contains(t),this.shouldTrapFocus=()=>this.trapFocus&&!this.hidden,this.updateTrapFocus=t=>{let e=t===void 0?this.shouldTrapFocus():t;e&&!this.isTrappingFocus?(this.isTrappingFocus=!0,document.addEventListener("focusin",this.handleDocumentFocus),F.queueUpdate(()=>{this.shouldForceFocus(document.activeElement)&&this.focusFirstElement()})):!e&&this.isTrappingFocus&&(this.isTrappingFocus=!1,document.removeEventListener("focusin",this.handleDocumentFocus))}}dismiss(){this.$emit("dismiss"),this.$emit("cancel")}show(){this.hidden=!1}hide(){this.hidden=!0,this.$emit("close")}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this.handleDocumentKeydown),this.notifier=R.getNotifier(this),this.notifier.subscribe(this,"hidden"),this.updateTrapFocus()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeydown),this.updateTrapFocus(!1),this.notifier.unsubscribe(this,"hidden")}handleChange(t,e){switch(e){case"hidden":this.updateTrapFocus();break;default:break}}static reduceTabbableItems(t,e){return e.getAttribute("tabindex")==="-1"?t:Ks(e)||o.isFocusableFastElement(e)&&o.hasTabbableShadow(e)?(t.push(e),t):e.childElementCount?t.concat(Array.from(e.children).reduce(o.reduceTabbableItems,[])):t}static isFocusableFastElement(t){var e,i;return!!(!((i=(e=t.$fastController)===null||e===void 0?void 0:e.definition.shadowOptions)===null||i===void 0)&&i.delegatesFocus)}static hasTabbableShadow(t){var e,i;return Array.from((i=(e=t.shadowRoot)===null||e===void 0?void 0:e.querySelectorAll("*"))!==null&&i!==void 0?i:[]).some(r=>Ks(r))}};a([c({mode:"boolean"})],Ie.prototype,"modal",void 0);a([c({mode:"boolean"})],Ie.prototype,"hidden",void 0);a([c({attribute:"trap-focus",mode:"boolean"})],Ie.prototype,"trapFocus",void 0);a([c({attribute:"aria-describedby"})],Ie.prototype,"ariaDescribedby",void 0);a([c({attribute:"aria-labelledby"})],Ie.prototype,"ariaLabelledby",void 0);a([c({attribute:"aria-label"})],Ie.prototype,"ariaLabel",void 0);var Ac=(o,t)=>v`
    <template role="${e=>e.role}" aria-orientation="${e=>e.orientation}"></template>
`;var Oc={separator:"separator",presentation:"presentation"};var bo=class extends w{constructor(){super(...arguments),this.role=Oc.separator,this.orientation=tt.horizontal}};a([c],bo.prototype,"role",void 0);a([c],bo.prototype,"orientation",void 0);var zi={next:"next",previous:"previous"};var Ec=(o,t)=>v`
    <template
        role="button"
        aria-disabled="${e=>e.disabled?!0:void 0}"
        tabindex="${e=>e.hiddenFromAT?-1:0}"
        class="${e=>e.direction} ${e=>e.disabled?"disabled":""}"
        @keyup="${(e,i)=>e.keyupHandler(i.event)}"
    >
        ${U(e=>e.direction===zi.next,v`
                <span part="next" class="next">
                    <slot name="next">
                        ${t.next||""}
                    </slot>
                </span>
            `)}
        ${U(e=>e.direction===zi.previous,v`
                <span part="previous" class="previous">
                    <slot name="previous">
                        ${t.previous||""}
                    </slot>
                </span>
            `)}
    </template>
`;var Mo=class extends w{constructor(){super(...arguments),this.hiddenFromAT=!0,this.direction=zi.next}keyupHandler(t){if(!this.hiddenFromAT){let e=t.key;(e==="Enter"||e==="Space")&&this.$emit("click",t),e==="Escape"&&this.blur()}}};a([c({mode:"boolean"})],Mo.prototype,"disabled",void 0);a([c({attribute:"aria-hidden",converter:Be})],Mo.prototype,"hiddenFromAT",void 0);a([c],Mo.prototype,"direction",void 0);var Lc=(o,t)=>v`
    <template
        aria-checked="${e=>e.ariaChecked}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-posinset="${e=>e.ariaPosInSet}"
        aria-selected="${e=>e.ariaSelected}"
        aria-setsize="${e=>e.ariaSetSize}"
        class="${e=>[e.checked&&"checked",e.selected&&"selected",e.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${K(o,t)}
        <span class="content" part="content">
            <slot ${z("content")}></slot>
        </span>
        ${J(o,t)}
    </template>
`;var Ge=class extends mt{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var t;return(t=this.options)===null||t===void 0?void 0:t.filter(e=>e.checked)}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(t,e){var i,r;this.ariaActiveDescendant=(r=(i=this.options[e])===null||i===void 0?void 0:i.id)!==null&&r!==void 0?r:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;let t=this.activeOption;t&&(t.checked=!0)}checkFirstOption(t=!1){t?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach((e,i)=>{e.checked=Di(i,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(t=!1){t?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((e,i)=>{e.checked=Di(i,this.rangeStartIndex,this.options.length)})):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(t=!1){t?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((e,i)=>{e.checked=Di(i,this.rangeStartIndex,this.activeIndex+1)})):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(t=!1){t?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.checkedOptions.length===1&&(this.rangeStartIndex+=1),this.options.forEach((e,i)=>{e.checked=Di(i,this.activeIndex,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(t){var e;if(!this.multiple)return super.clickHandler(t);let i=(e=t.target)===null||e===void 0?void 0:e.closest("[role=option]");if(!(!i||i.disabled))return this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(i),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(t){if(!this.multiple)return super.focusinHandler(t);!this.shouldSkipFocus&&t.target===t.currentTarget&&(this.uncheckAllOptions(),this.activeIndex===-1&&(this.activeIndex=this.firstSelectedOptionIndex!==-1?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(t){this.multiple&&this.uncheckAllOptions()}keydownHandler(t){if(!this.multiple)return super.keydownHandler(t);if(this.disabled)return!0;let{key:e,shiftKey:i}=t;switch(this.shouldSkipFocus=!1,e){case gt:{this.checkFirstOption(i);return}case ht:{this.checkNextOption(i);return}case ut:{this.checkPreviousOption(i);return}case vt:{this.checkLastOption(i);return}case uo:return this.focusAndScrollOptionIntoView(),!0;case se:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case Xt:if(t.preventDefault(),this.typeAheadExpired){this.toggleSelectedForAllCheckedOptions();return}default:return e.length===1&&this.handleTypeAhead(`${e}`),!0}}mousedownHandler(t){if(t.offsetX>=0&&t.offsetX<=this.scrollWidth)return super.mousedownHandler(t)}multipleChanged(t,e){var i;this.ariaMultiSelectable=e?"true":null,(i=this.options)===null||i===void 0||i.forEach(r=>{r.checked=e?!1:void 0}),this.setSelectedOptions()}setSelectedOptions(){if(!this.multiple){super.setSelectedOptions();return}this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter(t=>t.selected),this.focusAndScrollOptionIntoView())}sizeChanged(t,e){var i;let r=Math.max(0,parseInt((i=e?.toFixed())!==null&&i!==void 0?i:"",10));r!==e&&F.queueUpdate(()=>{this.size=r})}toggleSelectedForAllCheckedOptions(){let t=this.checkedOptions.filter(i=>!i.disabled),e=!t.every(i=>i.selected);t.forEach(i=>i.selected=e),this.selectedIndex=this.options.indexOf(t[t.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(t,e){if(!this.multiple){super.typeaheadBufferChanged(t,e);return}if(this.$fastController.isConnected){let i=this.getTypeaheadMatches(),r=this.options.indexOf(i[0]);r>-1&&(this.activeIndex=r,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}uncheckAllOptions(t=!1){this.options.forEach(e=>e.checked=this.multiple?!1:void 0),t||(this.rangeStartIndex=-1)}};a([f],Ge.prototype,"activeIndex",void 0);a([c({mode:"boolean"})],Ge.prototype,"multiple",void 0);a([c({converter:S})],Ge.prototype,"size",void 0);var Vc=(o,t)=>v`
    <template
        aria-activedescendant="${e=>e.ariaActiveDescendant}"
        aria-multiselectable="${e=>e.ariaMultiSelectable}"
        class="listbox"
        role="listbox"
        tabindex="${e=>e.disabled?null:"0"}"
        @click="${(e,i)=>e.clickHandler(i.event)}"
        @focusin="${(e,i)=>e.focusinHandler(i.event)}"
        @keydown="${(e,i)=>e.keydownHandler(i.event)}"
        @mousedown="${(e,i)=>e.mousedownHandler(i.event)}"
    >
        <slot
            ${z({filter:Ge.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
        ></slot>
    </template>
`;var Ft={menuitem:"menuitem",menuitemcheckbox:"menuitemcheckbox",menuitemradio:"menuitemradio"},ea={[Ft.menuitem]:"menuitem",[Ft.menuitemcheckbox]:"menuitemcheckbox",[Ft.menuitemradio]:"menuitemradio"};var Tt=class extends w{constructor(){super(...arguments),this.role=Ft.menuitem,this.hasSubmenu=!1,this.currentDirection=W.ltr,this.focusSubmenuOnLoad=!1,this.handleMenuItemKeyDown=t=>{if(t.defaultPrevented)return!1;switch(t.key){case St:case Xt:return this.invoke(),!1;case Wt:return this.expandAndFocus(),!1;case qt:if(this.expanded)return this.expanded=!1,this.focus(),!1}return!0},this.handleMenuItemClick=t=>(t.defaultPrevented||this.disabled||this.invoke(),!1),this.submenuLoaded=()=>{this.focusSubmenuOnLoad&&(this.focusSubmenuOnLoad=!1,this.hasSubmenu&&(this.submenu.focus(),this.setAttribute("tabindex","-1")))},this.handleMouseOver=t=>(this.disabled||!this.hasSubmenu||this.expanded||(this.expanded=!0),!1),this.handleMouseOut=t=>(!this.expanded||this.contains(document.activeElement)||(this.expanded=!1),!1),this.expandAndFocus=()=>{this.hasSubmenu&&(this.focusSubmenuOnLoad=!0,this.expanded=!0)},this.invoke=()=>{if(!this.disabled)switch(this.role){case Ft.menuitemcheckbox:this.checked=!this.checked;break;case Ft.menuitem:this.updateSubmenu(),this.hasSubmenu?this.expandAndFocus():this.$emit("change");break;case Ft.menuitemradio:this.checked||(this.checked=!0);break}},this.updateSubmenu=()=>{this.submenu=this.domChildren().find(t=>t.getAttribute("role")==="menu"),this.hasSubmenu=this.submenu!==void 0}}expandedChanged(t){if(this.$fastController.isConnected){if(this.submenu===void 0)return;this.expanded===!1?this.submenu.collapseExpandedItem():this.currentDirection=te(this),this.$emit("expanded-change",this,{bubbles:!1})}}checkedChanged(t,e){this.$fastController.isConnected&&this.$emit("change")}connectedCallback(){super.connectedCallback(),F.queueUpdate(()=>{this.updateSubmenu()}),this.startColumnCount||(this.startColumnCount=1),this.observer=new MutationObserver(this.updateSubmenu)}disconnectedCallback(){super.disconnectedCallback(),this.submenu=void 0,this.observer!==void 0&&(this.observer.disconnect(),this.observer=void 0)}domChildren(){return Array.from(this.children).filter(t=>!t.hasAttribute("hidden"))}};a([c({mode:"boolean"})],Tt.prototype,"disabled",void 0);a([c({mode:"boolean"})],Tt.prototype,"expanded",void 0);a([f],Tt.prototype,"startColumnCount",void 0);a([c],Tt.prototype,"role",void 0);a([c({mode:"boolean"})],Tt.prototype,"checked",void 0);a([f],Tt.prototype,"submenuRegion",void 0);a([f],Tt.prototype,"hasSubmenu",void 0);a([f],Tt.prototype,"currentDirection",void 0);a([f],Tt.prototype,"submenu",void 0);_(Tt,Z);var Pc=(o,t)=>v`
    <template
        role="${e=>e.role}"
        aria-haspopup="${e=>e.hasSubmenu?"menu":void 0}"
        aria-checked="${e=>e.role!==Ft.menuitem?e.checked:void 0}"
        aria-disabled="${e=>e.disabled}"
        aria-expanded="${e=>e.expanded}"
        @keydown="${(e,i)=>e.handleMenuItemKeyDown(i.event)}"
        @click="${(e,i)=>e.handleMenuItemClick(i.event)}"
        @mouseover="${(e,i)=>e.handleMouseOver(i.event)}"
        @mouseout="${(e,i)=>e.handleMouseOut(i.event)}"
        class="${e=>e.disabled?"disabled":""} ${e=>e.expanded?"expanded":""} ${e=>`indent-${e.startColumnCount}`}"
    >
            ${U(e=>e.role===Ft.menuitemcheckbox,v`
                    <div part="input-container" class="input-container">
                        <span part="checkbox" class="checkbox">
                            <slot name="checkbox-indicator">
                                ${t.checkboxIndicator||""}
                            </slot>
                        </span>
                    </div>
                `)}
            ${U(e=>e.role===Ft.menuitemradio,v`
                    <div part="input-container" class="input-container">
                        <span part="radio" class="radio">
                            <slot name="radio-indicator">
                                ${t.radioIndicator||""}
                            </slot>
                        </span>
                    </div>
                `)}
        </div>
        ${K(o,t)}
        <span class="content" part="content">
            <slot></slot>
        </span>
        ${J(o,t)}
        ${U(e=>e.hasSubmenu,v`
                <div
                    part="expand-collapse-glyph-container"
                    class="expand-collapse-glyph-container"
                >
                    <span part="expand-collapse" class="expand-collapse">
                        <slot name="expand-collapse-indicator">
                            ${t.expandCollapseGlyph||""}
                        </slot>
                    </span>
                </div>
            `)}
        ${U(e=>e.expanded,v`
                <${o.tagFor(M)}
                    :anchorElement="${e=>e}"
                    vertical-positioning-mode="dynamic"
                    vertical-default-position="bottom"
                    vertical-inset="true"
                    horizontal-positioning-mode="dynamic"
                    horizontal-default-position="end"
                    class="submenu-region"
                    dir="${e=>e.currentDirection}"
                    @loaded="${e=>e.submenuLoaded()}"
                    ${V("submenuRegion")}
                    part="submenu-region"
                >
                    <slot name="submenu"></slot>
                </${o.tagFor(M)}>
            `)}
    </template>
`;var Hc=(o,t)=>v`
    <template
        slot="${e=>e.slot?e.slot:e.isNestedMenu()?"submenu":void 0}"
        role="menu"
        @keydown="${(e,i)=>e.handleMenuKeyDown(i.event)}"
        @focusout="${(e,i)=>e.handleFocusOut(i.event)}"
    >
        <slot ${z("items")}></slot>
    </template>
`;var zo=class o extends w{constructor(){super(...arguments),this.expandedItem=null,this.focusIndex=-1,this.isNestedMenu=()=>this.parentElement!==null&&Te(this.parentElement)&&this.parentElement.getAttribute("role")==="menuitem",this.handleFocusOut=t=>{if(!this.contains(t.relatedTarget)&&this.menuItems!==void 0){this.collapseExpandedItem();let e=this.menuItems.findIndex(this.isFocusableElement);this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.menuItems[e].setAttribute("tabindex","0"),this.focusIndex=e}},this.handleItemFocus=t=>{let e=t.target;this.menuItems!==void 0&&e!==this.menuItems[this.focusIndex]&&(this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=this.menuItems.indexOf(e),e.setAttribute("tabindex","0"))},this.handleExpandedChanged=t=>{if(t.defaultPrevented||t.target===null||this.menuItems===void 0||this.menuItems.indexOf(t.target)<0)return;t.preventDefault();let e=t.target;if(this.expandedItem!==null&&e===this.expandedItem&&e.expanded===!1){this.expandedItem=null;return}e.expanded&&(this.expandedItem!==null&&this.expandedItem!==e&&(this.expandedItem.expanded=!1),this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.expandedItem=e,this.focusIndex=this.menuItems.indexOf(e),e.setAttribute("tabindex","0"))},this.removeItemListeners=()=>{this.menuItems!==void 0&&this.menuItems.forEach(t=>{t.removeEventListener("expanded-change",this.handleExpandedChanged),t.removeEventListener("focus",this.handleItemFocus)})},this.setItems=()=>{let t=this.domChildren();this.removeItemListeners(),this.menuItems=t;let e=this.menuItems.filter(this.isMenuItemElement);e.length&&(this.focusIndex=0);function i(n){let s=n.getAttribute("role"),l=n.querySelector("[slot=start]");return s!==Ft.menuitem&&l===null||s===Ft.menuitem&&l!==null?1:s!==Ft.menuitem&&l!==null?2:0}let r=e.reduce((n,s)=>{let l=i(s);return n>l?n:l},0);e.forEach((n,s)=>{n.setAttribute("tabindex",s===0?"0":"-1"),n.addEventListener("expanded-change",this.handleExpandedChanged),n.addEventListener("focus",this.handleItemFocus),n instanceof Tt&&(n.startColumnCount=r)})},this.changeHandler=t=>{if(this.menuItems===void 0)return;let e=t.target,i=this.menuItems.indexOf(e);if(i!==-1&&e.role==="menuitemradio"&&e.checked===!0){for(let n=i-1;n>=0;--n){let s=this.menuItems[n],l=s.getAttribute("role");if(l===Ft.menuitemradio&&(s.checked=!1),l==="separator")break}let r=this.menuItems.length-1;for(let n=i+1;n<=r;++n){let s=this.menuItems[n],l=s.getAttribute("role");if(l===Ft.menuitemradio&&(s.checked=!1),l==="separator")break}}},this.isMenuItemElement=t=>Te(t)&&o.focusableElementRoles.hasOwnProperty(t.getAttribute("role")),this.isFocusableElement=t=>this.isMenuItemElement(t)}itemsChanged(t,e){this.$fastController.isConnected&&this.menuItems!==void 0&&this.setItems()}connectedCallback(){super.connectedCallback(),F.queueUpdate(()=>{this.setItems()}),this.addEventListener("change",this.changeHandler)}disconnectedCallback(){super.disconnectedCallback(),this.removeItemListeners(),this.menuItems=void 0,this.removeEventListener("change",this.changeHandler)}focus(){this.setFocus(0,1)}collapseExpandedItem(){this.expandedItem!==null&&(this.expandedItem.expanded=!1,this.expandedItem=null)}handleMenuKeyDown(t){if(!(t.defaultPrevented||this.menuItems===void 0))switch(t.key){case ht:this.setFocus(this.focusIndex+1,1);return;case ut:this.setFocus(this.focusIndex-1,-1);return;case vt:this.setFocus(this.menuItems.length-1,-1);return;case gt:this.setFocus(0,1);return;default:return!0}}domChildren(){return Array.from(this.children).filter(t=>!t.hasAttribute("hidden"))}setFocus(t,e){if(this.menuItems!==void 0)for(;t>=0&&t<this.menuItems.length;){let i=this.menuItems[t];if(this.isFocusableElement(i)){this.focusIndex>-1&&this.menuItems.length>=this.focusIndex-1&&this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=t,i.setAttribute("tabindex","0"),i.focus();break}t+=e}}};zo.focusableElementRoles=ea;a([f],zo.prototype,"items",void 0);var Bc=(o,t)=>v`
    <template class="${e=>e.readOnly?"readonly":""}">
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${z("defaultSlottedNodes")}></slot>
        </label>
        <div class="root" part="root">
            ${K(o,t)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${e=>e.handleTextInput()}"
                @change="${e=>e.handleChange()}"
                @keydown="${(e,i)=>e.handleKeyDown(i.event)}"
                @blur="${(e,i)=>e.handleBlur()}"
                ?autofocus="${e=>e.autofocus}"
                ?disabled="${e=>e.disabled}"
                list="${e=>e.list}"
                maxlength="${e=>e.maxlength}"
                minlength="${e=>e.minlength}"
                placeholder="${e=>e.placeholder}"
                ?readonly="${e=>e.readOnly}"
                ?required="${e=>e.required}"
                size="${e=>e.size}"
                type="text"
                inputmode="numeric"
                min="${e=>e.min}"
                max="${e=>e.max}"
                step="${e=>e.step}"
                aria-atomic="${e=>e.ariaAtomic}"
                aria-busy="${e=>e.ariaBusy}"
                aria-controls="${e=>e.ariaControls}"
                aria-current="${e=>e.ariaCurrent}"
                aria-describedby="${e=>e.ariaDescribedby}"
                aria-details="${e=>e.ariaDetails}"
                aria-disabled="${e=>e.ariaDisabled}"
                aria-errormessage="${e=>e.ariaErrormessage}"
                aria-flowto="${e=>e.ariaFlowto}"
                aria-haspopup="${e=>e.ariaHaspopup}"
                aria-hidden="${e=>e.ariaHidden}"
                aria-invalid="${e=>e.ariaInvalid}"
                aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
                aria-label="${e=>e.ariaLabel}"
                aria-labelledby="${e=>e.ariaLabelledby}"
                aria-live="${e=>e.ariaLive}"
                aria-owns="${e=>e.ariaOwns}"
                aria-relevant="${e=>e.ariaRelevant}"
                aria-roledescription="${e=>e.ariaRoledescription}"
                ${V("control")}
            />
            ${U(e=>!e.hideStep&&!e.readOnly&&!e.disabled,v`
                    <div class="controls" part="controls">
                        <div class="step-up" part="step-up" @click="${e=>e.stepUp()}">
                            <slot name="step-up-glyph">
                                ${t.stepUpGlyph||""}
                            </slot>
                        </div>
                        <div
                            class="step-down"
                            part="step-down"
                            @click="${e=>e.stepDown()}"
                        >
                            <slot name="step-down-glyph">
                                ${t.stepDownGlyph||""}
                            </slot>
                        </div>
                    </div>
                `)}
            ${J(o,t)}
        </div>
    </template>
`;var oa=class extends w{},Or=class extends Ot(oa){constructor(){super(...arguments),this.proxy=document.createElement("input")}};var Mc={email:"email",password:"password",tel:"tel",text:"text",url:"url"};var Lt=class extends Or{constructor(){super(...arguments),this.type=Mc.text}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&F.queueUpdate(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}};a([c({attribute:"readonly",mode:"boolean"})],Lt.prototype,"readOnly",void 0);a([c({mode:"boolean"})],Lt.prototype,"autofocus",void 0);a([c],Lt.prototype,"placeholder",void 0);a([c],Lt.prototype,"type",void 0);a([c],Lt.prototype,"list",void 0);a([c({converter:S})],Lt.prototype,"maxlength",void 0);a([c({converter:S})],Lt.prototype,"minlength",void 0);a([c],Lt.prototype,"pattern",void 0);a([c({converter:S})],Lt.prototype,"size",void 0);a([c({mode:"boolean"})],Lt.prototype,"spellcheck",void 0);a([f],Lt.prototype,"defaultSlottedNodes",void 0);var xo=class{};_(xo,X);_(Lt,Z,xo);var ia=class extends w{},Er=class extends Ot(ia){constructor(){super(...arguments),this.proxy=document.createElement("input")}};var Rt=class extends Er{constructor(){super(...arguments),this.hideStep=!1,this.step=1,this.isUserInput=!1}maxChanged(t,e){var i;this.max=Math.max(e,(i=this.min)!==null&&i!==void 0?i:e);let r=Math.min(this.min,this.max);this.min!==void 0&&this.min!==r&&(this.min=r),this.value=this.getValidValue(this.value)}minChanged(t,e){var i;this.min=Math.min(e,(i=this.max)!==null&&i!==void 0?i:e);let r=Math.max(this.min,this.max);this.max!==void 0&&this.max!==r&&(this.max=r),this.value=this.getValidValue(this.value)}get valueAsNumber(){return parseFloat(super.value)}set valueAsNumber(t){this.value=t.toString()}valueChanged(t,e){this.value=this.getValidValue(e),e===this.value&&(this.control&&!this.isUserInput&&(this.control.value=this.value),super.valueChanged(t,this.value),t!==void 0&&!this.isUserInput&&(this.$emit("input"),this.$emit("change")),this.isUserInput=!1)}validate(){super.validate(this.control)}getValidValue(t){var e,i;let r=parseFloat(parseFloat(t).toPrecision(12));return isNaN(r)?r="":(r=Math.min(r,(e=this.max)!==null&&e!==void 0?e:r),r=Math.max(r,(i=this.min)!==null&&i!==void 0?i:r).toString()),r}stepUp(){let t=parseFloat(this.value),e=isNaN(t)?this.min>0?this.min:this.max<0?this.max:this.min?0:this.step:t+this.step;this.value=e.toString()}stepDown(){let t=parseFloat(this.value),e=isNaN(t)?this.min>0?this.min:this.max<0?this.max:this.min?0:0-this.step:t-this.step;this.value=e.toString()}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type","number"),this.validate(),this.control.value=this.value,this.autofocus&&F.queueUpdate(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.control.value=this.control.value.replace(/[^0-9\-+e.]/g,""),this.isUserInput=!0,this.value=this.control.value}handleChange(){this.$emit("change")}handleKeyDown(t){switch(t.key){case ut:return this.stepUp(),!1;case ht:return this.stepDown(),!1}return!0}handleBlur(){this.control.value=this.value}};a([c({attribute:"readonly",mode:"boolean"})],Rt.prototype,"readOnly",void 0);a([c({mode:"boolean"})],Rt.prototype,"autofocus",void 0);a([c({attribute:"hide-step",mode:"boolean"})],Rt.prototype,"hideStep",void 0);a([c],Rt.prototype,"placeholder",void 0);a([c],Rt.prototype,"list",void 0);a([c({converter:S})],Rt.prototype,"maxlength",void 0);a([c({converter:S})],Rt.prototype,"minlength",void 0);a([c({converter:S})],Rt.prototype,"size",void 0);a([c({converter:S})],Rt.prototype,"step",void 0);a([c({converter:S})],Rt.prototype,"max",void 0);a([c({converter:S})],Rt.prototype,"min",void 0);a([f],Rt.prototype,"defaultSlottedNodes",void 0);_(Rt,Z,xo);var zc=44,Nc=(o,t)=>v`
    <template
        role="progressbar"
        aria-valuenow="${e=>e.value}"
        aria-valuemin="${e=>e.min}"
        aria-valuemax="${e=>e.max}"
        class="${e=>e.paused?"paused":""}"
    >
        ${U(e=>typeof e.value=="number",v`
                <svg
                    class="progress"
                    part="progress"
                    viewBox="0 0 16 16"
                    slot="determinate"
                >
                    <circle
                        class="background"
                        part="background"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                    <circle
                        class="determinate"
                        part="determinate"
                        style="stroke-dasharray: ${e=>zc*e.percentComplete/100}px ${zc}px"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                </svg>
            `,v`
                <slot name="indeterminate" slot="indeterminate">
                    ${t.indeterminateIndicator||""}
                </slot>
            `)}
    </template>
`;var $e=class extends w{constructor(){super(...arguments),this.percentComplete=0}valueChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}maxChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}connectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){let t=typeof this.min=="number"?this.min:0,e=typeof this.max=="number"?this.max:100,i=typeof this.value=="number"?this.value:0,r=e-t;this.percentComplete=r===0?0:Math.fround((i-t)/r*100)}};a([c({converter:S})],$e.prototype,"value",void 0);a([c({converter:S})],$e.prototype,"min",void 0);a([c({converter:S})],$e.prototype,"max",void 0);a([c({mode:"boolean"})],$e.prototype,"paused",void 0);a([f],$e.prototype,"percentComplete",void 0);var _c=(o,t)=>v`
    <template
        role="progressbar"
        aria-valuenow="${e=>e.value}"
        aria-valuemin="${e=>e.min}"
        aria-valuemax="${e=>e.max}"
        class="${e=>e.paused?"paused":""}"
    >
        ${U(e=>typeof e.value=="number",v`
                <div class="progress" part="progress" slot="determinate">
                    <div
                        class="determinate"
                        part="determinate"
                        style="width: ${e=>e.percentComplete}%"
                    ></div>
                </div>
            `,v`
                <div class="progress" part="progress" slot="indeterminate">
                    <slot class="indeterminate" name="indeterminate">
                        ${t.indeterminateIndicator1||""}
                        ${t.indeterminateIndicator2||""}
                    </slot>
                </div>
            `)}
    </template>
`;var jc=(o,t)=>v`
    <template
        role="radiogroup"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        @click="${(e,i)=>e.clickHandler(i.event)}"
        @keydown="${(e,i)=>e.keydownHandler(i.event)}"
        @focusout="${(e,i)=>e.focusOutHandler(i.event)}"
    >
        <slot name="label"></slot>
        <div
            class="positioning-region ${e=>e.orientation===tt.horizontal?"horizontal":"vertical"}"
            part="positioning-region"
        >
            <slot
                ${z({property:"slottedRadioButtons",filter:Ct("[role=radio]")})}
            ></slot>
        </div>
    </template>
`;var ke=class extends w{constructor(){super(...arguments),this.orientation=tt.horizontal,this.radioChangeHandler=t=>{let e=t.target;e.checked&&(this.slottedRadioButtons.forEach(i=>{i!==e&&(i.checked=!1,this.isInsideFoundationToolbar||i.setAttribute("tabindex","-1"))}),this.selectedRadio=e,this.value=e.value,e.setAttribute("tabindex","0"),this.focusedRadio=e),t.stopPropagation()},this.moveToRadioByIndex=(t,e)=>{let i=t[e];this.isInsideToolbar||(i.setAttribute("tabindex","0"),i.readOnly?this.slottedRadioButtons.forEach(r=>{r!==i&&r.setAttribute("tabindex","-1")}):(i.checked=!0,this.selectedRadio=i)),this.focusedRadio=i,i.focus()},this.moveRightOffGroup=()=>{var t;(t=this.nextElementSibling)===null||t===void 0||t.focus()},this.moveLeftOffGroup=()=>{var t;(t=this.previousElementSibling)===null||t===void 0||t.focus()},this.focusOutHandler=t=>{let e=this.slottedRadioButtons,i=t.target,r=i!==null?e.indexOf(i):0,n=this.focusedRadio?e.indexOf(this.focusedRadio):-1;return(n===0&&r===n||n===e.length-1&&n===r)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),e.forEach(s=>{s!==this.selectedRadio&&s.setAttribute("tabindex","-1")}))):(this.focusedRadio=e[0],this.focusedRadio.setAttribute("tabindex","0"),e.forEach(s=>{s!==this.focusedRadio&&s.setAttribute("tabindex","-1")}))),!0},this.clickHandler=t=>{let e=t.target;if(e){let i=this.slottedRadioButtons;e.checked||i.indexOf(e)===0?(e.setAttribute("tabindex","0"),this.selectedRadio=e):(e.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=e}t.preventDefault()},this.shouldMoveOffGroupToTheRight=(t,e,i)=>t===e.length&&this.isInsideToolbar&&i===Wt,this.shouldMoveOffGroupToTheLeft=(t,e)=>(this.focusedRadio?t.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&e===qt,this.checkFocusedRadio=()=>{this.focusedRadio!==null&&!this.focusedRadio.readOnly&&!this.focusedRadio.checked&&(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=t=>{let e=this.slottedRadioButtons,i=0;if(i=this.focusedRadio?e.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(i,e,t.key)){this.moveRightOffGroup();return}else i===e.length&&(i=0);for(;i<e.length&&e.length>1;)if(e[i].disabled){if(this.focusedRadio&&i===e.indexOf(this.focusedRadio))break;if(i+1>=e.length){if(this.isInsideToolbar)break;i=0}else i+=1}else{this.moveToRadioByIndex(e,i);break}},this.moveLeft=t=>{let e=this.slottedRadioButtons,i=0;if(i=this.focusedRadio?e.indexOf(this.focusedRadio)-1:0,i=i<0?e.length-1:i,this.shouldMoveOffGroupToTheLeft(e,t.key)){this.moveLeftOffGroup();return}for(;i>=0&&e.length>1;)if(e[i].disabled){if(this.focusedRadio&&i===e.indexOf(this.focusedRadio))break;i-1<0?i=e.length-1:i-=1}else{this.moveToRadioByIndex(e,i);break}},this.keydownHandler=t=>{let e=t.key;if(e in po&&this.isInsideFoundationToolbar)return!0;switch(e){case St:{this.checkFocusedRadio();break}case Wt:case ht:{this.direction===W.ltr?this.moveRight(t):this.moveLeft(t);break}case qt:case ut:{this.direction===W.ltr?this.moveLeft(t):this.moveRight(t);break}default:return!0}}}readOnlyChanged(){this.slottedRadioButtons!==void 0&&this.slottedRadioButtons.forEach(t=>{this.readOnly?t.readOnly=!0:t.readOnly=!1})}disabledChanged(){this.slottedRadioButtons!==void 0&&this.slottedRadioButtons.forEach(t=>{this.disabled?t.disabled=!0:t.disabled=!1})}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(t=>{t.setAttribute("name",this.name)})}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(t=>{t.value===this.value&&(t.checked=!0,this.selectedRadio=t)}),this.$emit("change")}slottedRadioButtonsChanged(t,e){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var t;return(t=this.parentToolbar)!==null&&t!==void 0?t:!1}get isInsideFoundationToolbar(){var t;return!!(!((t=this.parentToolbar)===null||t===void 0)&&t.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=te(this),this.setupRadioButtons()}disconnectedCallback(){this.slottedRadioButtons.forEach(t=>{t.removeEventListener("change",this.radioChangeHandler)})}setupRadioButtons(){let t=this.slottedRadioButtons.filter(r=>r.hasAttribute("checked")),e=t?t.length:0;if(e>1){let r=t[e-1];r.checked=!0}let i=!1;if(this.slottedRadioButtons.forEach(r=>{this.name!==void 0&&r.setAttribute("name",this.name),this.disabled&&(r.disabled=!0),this.readOnly&&(r.readOnly=!0),this.value&&this.value===r.value?(this.selectedRadio=r,this.focusedRadio=r,r.checked=!0,r.setAttribute("tabindex","0"),i=!0):(this.isInsideFoundationToolbar||r.setAttribute("tabindex","-1"),r.checked=!1),r.addEventListener("change",this.radioChangeHandler)}),this.value===void 0&&this.slottedRadioButtons.length>0){let r=this.slottedRadioButtons.filter(s=>s.hasAttribute("checked")),n=r!==null?r.length:0;if(n>0&&!i){let s=r[n-1];s.checked=!0,this.focusedRadio=s,s.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}};a([c({attribute:"readonly",mode:"boolean"})],ke.prototype,"readOnly",void 0);a([c({attribute:"disabled",mode:"boolean"})],ke.prototype,"disabled",void 0);a([c],ke.prototype,"name",void 0);a([c],ke.prototype,"value",void 0);a([c],ke.prototype,"orientation",void 0);a([f],ke.prototype,"childItems",void 0);a([f],ke.prototype,"slottedRadioButtons",void 0);var Gc=(o,t)=>v`
    <template
        role="radio"
        class="${e=>e.checked?"checked":""} ${e=>e.readOnly?"readonly":""}"
        aria-checked="${e=>e.checked}"
        aria-required="${e=>e.required}"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        @keypress="${(e,i)=>e.keypressHandler(i.event)}"
        @click="${(e,i)=>e.clickHandler(i.event)}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${t.checkedIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${z("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;var ra=class extends w{},Lr=class extends ei(ra){constructor(){super(...arguments),this.proxy=document.createElement("input")}};var No=class extends Lr{constructor(){super(),this.initialValue="on",this.keypressHandler=t=>{switch(t.key){case Xt:!this.checked&&!this.readOnly&&(this.checked=!0);return}return!0},this.proxy.setAttribute("type","radio")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}defaultCheckedChanged(){var t;this.$fastController.isConnected&&!this.dirtyChecked&&(this.isInsideRadioGroup()||(this.checked=(t=this.defaultChecked)!==null&&t!==void 0?t:!1,this.dirtyChecked=!1))}connectedCallback(){var t,e;super.connectedCallback(),this.validate(),((t=this.parentElement)===null||t===void 0?void 0:t.getAttribute("role"))!=="radiogroup"&&this.getAttribute("tabindex")===null&&(this.disabled||this.setAttribute("tabindex","0")),this.checkedAttribute&&(this.dirtyChecked||this.isInsideRadioGroup()||(this.checked=(e=this.defaultChecked)!==null&&e!==void 0?e:!1,this.dirtyChecked=!1))}isInsideRadioGroup(){return this.closest("[role=radiogroup]")!==null}clickHandler(t){!this.disabled&&!this.readOnly&&!this.checked&&(this.checked=!0)}};a([c({attribute:"readonly",mode:"boolean"})],No.prototype,"readOnly",void 0);a([f],No.prototype,"name",void 0);a([f],No.prototype,"defaultSlottedNodes",void 0);var ce=class extends w{constructor(){super(...arguments),this.framesPerSecond=60,this.updatingItems=!1,this.speed=600,this.easing="ease-in-out",this.flippersHiddenFromAT=!1,this.scrolling=!1,this.resizeDetector=null}get frameTime(){return 1e3/this.framesPerSecond}scrollingChanged(t,e){if(this.scrollContainer){let i=this.scrolling==!0?"scrollstart":"scrollend";this.$emit(i,this.scrollContainer.scrollLeft)}}get isRtl(){return this.scrollItems.length>1&&this.scrollItems[0].offsetLeft>this.scrollItems[1].offsetLeft}connectedCallback(){super.connectedCallback(),this.initializeResizeDetector()}disconnectedCallback(){this.disconnectResizeDetector(),super.disconnectedCallback()}scrollItemsChanged(t,e){e&&!this.updatingItems&&F.queueUpdate(()=>this.setStops())}disconnectResizeDetector(){this.resizeDetector&&(this.resizeDetector.disconnect(),this.resizeDetector=null)}initializeResizeDetector(){this.disconnectResizeDetector(),this.resizeDetector=new window.ResizeObserver(this.resized.bind(this)),this.resizeDetector.observe(this)}updateScrollStops(){this.updatingItems=!0;let t=this.scrollItems.reduce((e,i)=>i instanceof HTMLSlotElement?e.concat(i.assignedElements()):(e.push(i),e),[]);this.scrollItems=t,this.updatingItems=!1}setStops(){this.updateScrollStops();let{scrollContainer:t}=this,{scrollLeft:e}=t,{width:i,left:r}=t.getBoundingClientRect();this.width=i;let n=0,s=this.scrollItems.map((l,d)=>{let{left:u,width:p}=l.getBoundingClientRect(),g=Math.round(u+e-r),y=Math.round(g+p);return this.isRtl?-y:(n=y,d===0?0:g)}).concat(n);s=this.fixScrollMisalign(s),s.sort((l,d)=>Math.abs(l)-Math.abs(d)),this.scrollStops=s,this.setFlippers()}validateStops(t=!0){let e=()=>!!this.scrollStops.find(i=>i>0);return!e()&&t&&this.setStops(),e()}fixScrollMisalign(t){if(this.isRtl&&t.some(e=>e>0)){t.sort((i,r)=>r-i);let e=t[0];t=t.map(i=>i-e)}return t}setFlippers(){var t,e;let i=this.scrollContainer.scrollLeft;if((t=this.previousFlipperContainer)===null||t===void 0||t.classList.toggle("disabled",i===0),this.scrollStops){let r=Math.abs(this.scrollStops[this.scrollStops.length-1]);(e=this.nextFlipperContainer)===null||e===void 0||e.classList.toggle("disabled",this.validateStops(!1)&&Math.abs(i)+this.width>=r)}}scrollInView(t,e=0,i){var r;if(typeof t!="number"&&t&&(t=this.scrollItems.findIndex(n=>n===t||n.contains(t))),t!==void 0){i=i??e;let{scrollContainer:n,scrollStops:s,scrollItems:l}=this,{scrollLeft:d}=this.scrollContainer,{width:u}=n.getBoundingClientRect(),p=s[t],{width:g}=l[t].getBoundingClientRect(),y=p+g,B=d+e>p;if(B||d+u-i<y){let Q=(r=[...s].sort((ot,ie)=>B?ie-ot:ot-ie).find(ot=>B?ot+e<p:ot+u-(i??0)>y))!==null&&r!==void 0?r:0;this.scrollToPosition(Q)}}}keyupHandler(t){switch(t.key){case"ArrowLeft":this.scrollToPrevious();break;case"ArrowRight":this.scrollToNext();break}}scrollToPrevious(){this.validateStops();let t=this.scrollContainer.scrollLeft,e=this.scrollStops.findIndex((n,s)=>n>=t&&(this.isRtl||s===this.scrollStops.length-1||this.scrollStops[s+1]>t)),i=Math.abs(this.scrollStops[e+1]),r=this.scrollStops.findIndex(n=>Math.abs(n)+this.width>i);(r>=e||r===-1)&&(r=e>0?e-1:0),this.scrollToPosition(this.scrollStops[r],t)}scrollToNext(){this.validateStops();let t=this.scrollContainer.scrollLeft,e=this.scrollStops.findIndex(n=>Math.abs(n)>=Math.abs(t)),i=this.scrollStops.findIndex(n=>Math.abs(t)+this.width<=Math.abs(n)),r=e;i>e+2?r=i-2:e<this.scrollStops.length-2&&(r=e+1),this.scrollToPosition(this.scrollStops[r],t)}scrollToPosition(t,e=this.scrollContainer.scrollLeft){var i;if(this.scrolling)return;this.scrolling=!0;let r=(i=this.duration)!==null&&i!==void 0?i:`${Math.abs(t-e)/this.speed}s`;this.content.style.setProperty("transition-duration",r);let n=parseFloat(getComputedStyle(this.content).getPropertyValue("transition-duration")),s=u=>{u&&u.target!==u.currentTarget||(this.content.style.setProperty("transition-duration","0s"),this.content.style.removeProperty("transform"),this.scrollContainer.style.setProperty("scroll-behavior","auto"),this.scrollContainer.scrollLeft=t,this.setFlippers(),this.content.removeEventListener("transitionend",s),this.scrolling=!1)};if(n===0){s();return}this.content.addEventListener("transitionend",s);let l=this.scrollContainer.scrollWidth-this.scrollContainer.clientWidth,d=this.scrollContainer.scrollLeft-Math.min(t,l);this.isRtl&&(d=this.scrollContainer.scrollLeft+Math.min(Math.abs(t),l)),this.content.style.setProperty("transition-property","transform"),this.content.style.setProperty("transition-timing-function",this.easing),this.content.style.setProperty("transform",`translateX(${d}px)`)}resized(){this.resizeTimeout&&(this.resizeTimeout=clearTimeout(this.resizeTimeout)),this.resizeTimeout=setTimeout(()=>{this.width=this.scrollContainer.offsetWidth,this.setFlippers()},this.frameTime)}scrolled(){this.scrollTimeout&&(this.scrollTimeout=clearTimeout(this.scrollTimeout)),this.scrollTimeout=setTimeout(()=>{this.setFlippers()},this.frameTime)}};a([c({converter:S})],ce.prototype,"speed",void 0);a([c],ce.prototype,"duration",void 0);a([c],ce.prototype,"easing",void 0);a([c({attribute:"flippers-hidden-from-at",converter:Be})],ce.prototype,"flippersHiddenFromAT",void 0);a([f],ce.prototype,"scrolling",void 0);a([f],ce.prototype,"scrollItems",void 0);a([c({attribute:"view"})],ce.prototype,"view",void 0);var Uc=(o,t)=>{var e,i;return v`
    <template
        class="horizontal-scroll"
        @keyup="${(r,n)=>r.keyupHandler(n.event)}"
    >
        ${K(o,t)}
        <div class="scroll-area" part="scroll-area">
            <div
                class="scroll-view"
                part="scroll-view"
                @scroll="${r=>r.scrolled()}"
                ${V("scrollContainer")}
            >
                <div class="content-container" part="content-container" ${V("content")}>
                    <slot
                        ${z({property:"scrollItems",filter:Ct()})}
                    ></slot>
                </div>
            </div>
            ${U(r=>r.view!=="mobile",v`
                    <div
                        class="scroll scroll-prev"
                        part="scroll-prev"
                        ${V("previousFlipperContainer")}
                    >
                        <div class="scroll-action" part="scroll-action-previous">
                            <slot name="previous-flipper">
                                ${t.previousFlipper instanceof Function?t.previousFlipper(o,t):(e=t.previousFlipper)!==null&&e!==void 0?e:""}
                            </slot>
                        </div>
                    </div>
                    <div
                        class="scroll scroll-next"
                        part="scroll-next"
                        ${V("nextFlipperContainer")}
                    >
                        <div class="scroll-action" part="scroll-action-next">
                            <slot name="next-flipper">
                                ${t.nextFlipper instanceof Function?t.nextFlipper(o,t):(i=t.nextFlipper)!==null&&i!==void 0?i:""}
                            </slot>
                        </div>
                    </div>
                `)}
        </div>
        ${J(o,t)}
    </template>
`};function Vr(o,t,e){return o.nodeType!==Node.TEXT_NODE?!0:typeof o.nodeValue=="string"&&!!o.nodeValue.trim().length}var na=class extends w{},Pr=class extends Ot(na){constructor(){super(...arguments),this.proxy=document.createElement("input")}};var Vt=class extends Pr{readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.validate(),this.autofocus&&F.queueUpdate(()=>{this.focus()})}validate(){super.validate(this.control)}handleTextInput(){this.value=this.control.value}handleClearInput(){this.value="",this.control.focus(),this.handleChange()}handleChange(){this.$emit("change")}};a([c({attribute:"readonly",mode:"boolean"})],Vt.prototype,"readOnly",void 0);a([c({mode:"boolean"})],Vt.prototype,"autofocus",void 0);a([c],Vt.prototype,"placeholder",void 0);a([c],Vt.prototype,"list",void 0);a([c({converter:S})],Vt.prototype,"maxlength",void 0);a([c({converter:S})],Vt.prototype,"minlength",void 0);a([c],Vt.prototype,"pattern",void 0);a([c({converter:S})],Vt.prototype,"size",void 0);a([c({mode:"boolean"})],Vt.prototype,"spellcheck",void 0);a([f],Vt.prototype,"defaultSlottedNodes",void 0);var Hr=class{};_(Hr,X);_(Vt,Z,Hr);var sa=class extends Ge{},Br=class extends Ot(sa){constructor(){super(...arguments),this.proxy=document.createElement("select")}};var de=class extends Br{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=Ne("listbox-"),this.maxHeight=0}openChanged(t,e){if(this.collapsible){if(this.open){this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,F.queueUpdate(()=>this.focus());return}this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||typeof this.size=="number")}get value(){return R.track(this,"value"),this._value}set value(t){var e,i,r,n,s,l,d;let u=`${this._value}`;if(!((e=this._options)===null||e===void 0)&&e.length){let p=this._options.findIndex(B=>B.value===t),g=(r=(i=this._options[this.selectedIndex])===null||i===void 0?void 0:i.value)!==null&&r!==void 0?r:null,y=(s=(n=this._options[p])===null||n===void 0?void 0:n.value)!==null&&s!==void 0?s:null;(p===-1||g!==y)&&(t="",this.selectedIndex=p),t=(d=(l=this.firstSelectedOption)===null||l===void 0?void 0:l.value)!==null&&d!==void 0?d:t}u!==t&&(this._value=t,super.valueChanged(u,t),R.notify(this,"value"),this.updateDisplayValue())}updateValue(t){var e,i;this.$fastController.isConnected&&(this.value=(i=(e=this.firstSelectedOption)===null||e===void 0?void 0:e.value)!==null&&i!==void 0?i:""),t&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(t,e){super.selectedIndexChanged(t,e),this.updateValue()}positionChanged(t,e){this.positionAttribute=e,this.setPositioning()}setPositioning(){let t=this.getBoundingClientRect(),i=window.innerHeight-t.bottom;this.position=this.forcedPosition?this.positionAttribute:t.top>i?go.above:go.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===go.above?~~t.top:~~i}get displayValue(){var t,e;return R.track(this,"displayValue"),(e=(t=this.firstSelectedOption)===null||t===void 0?void 0:t.text)!==null&&e!==void 0?e:""}disabledChanged(t,e){super.disabledChanged&&super.disabledChanged(t,e),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),this.selectedIndex===-1&&(this.selectedIndex=0)}clickHandler(t){if(!this.disabled){if(this.open){let e=t.target.closest("option,[role=option]");if(e&&e.disabled)return}return super.clickHandler(t),this.open=this.collapsible&&!this.open,!this.open&&this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0),!0}}focusoutHandler(t){var e;if(super.focusoutHandler(t),!this.open)return!0;let i=t.relatedTarget;if(this.isSameNode(i)){this.focus();return}!((e=this.options)===null||e===void 0)&&e.includes(i)||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(t,e){super.handleChange(t,e),e==="value"&&this.updateValue()}slottedOptionsChanged(t,e){this.options.forEach(i=>{R.getNotifier(i).unsubscribe(this,"value")}),super.slottedOptionsChanged(t,e),this.options.forEach(i=>{R.getNotifier(i).subscribe(this,"value")}),this.setProxyOptions(),this.updateValue()}mousedownHandler(t){var e;return t.offsetX>=0&&t.offsetX<=((e=this.listbox)===null||e===void 0?void 0:e.scrollWidth)?super.mousedownHandler(t):this.collapsible}multipleChanged(t,e){super.multipleChanged(t,e),this.proxy&&(this.proxy.multiple=e)}selectedOptionsChanged(t,e){var i;super.selectedOptionsChanged(t,e),(i=this.options)===null||i===void 0||i.forEach((r,n)=>{var s;let l=(s=this.proxy)===null||s===void 0?void 0:s.options.item(n);l&&(l.selected=r.selected)})}setDefaultSelectedOption(){var t;let e=(t=this.options)!==null&&t!==void 0?t:Array.from(this.children).filter(mt.slottedOptionFilter),i=e?.findIndex(r=>r.hasAttribute("selected")||r.selected||r.value===this.value);if(i!==-1){this.selectedIndex=i;return}this.selectedIndex=0}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach(t=>{let e=t.proxy||(t instanceof HTMLOptionElement?t.cloneNode():null);e&&this.proxy.options.add(e)}))}keydownHandler(t){super.keydownHandler(t);let e=t.key||t.key.charCodeAt(0);switch(e){case Xt:{t.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break}case gt:case vt:{t.preventDefault();break}case St:{t.preventDefault(),this.open=!this.open;break}case se:{this.collapsible&&this.open&&(t.preventDefault(),this.open=!1);break}case uo:return this.collapsible&&this.open&&(t.preventDefault(),this.open=!1),!0}return!this.open&&this.indexWhenOpened!==this.selectedIndex&&(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(e===ht||e===ut)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(t,e){super.sizeChanged(t,e),this.proxy&&(this.proxy.size=e)}updateDisplayValue(){this.collapsible&&R.notify(this,"displayValue")}};a([c({attribute:"open",mode:"boolean"})],de.prototype,"open",void 0);a([ml],de.prototype,"collapsible",null);a([f],de.prototype,"control",void 0);a([c({attribute:"position"})],de.prototype,"positionAttribute",void 0);a([f],de.prototype,"position",void 0);a([f],de.prototype,"maxHeight",void 0);var Ni=class{};a([f],Ni.prototype,"ariaControls",void 0);_(Ni,ae);_(de,Z,Ni);var qc=(o,t)=>v`
    <template
        class="${e=>[e.collapsible&&"collapsible",e.collapsible&&e.open&&"open",e.disabled&&"disabled",e.collapsible&&e.position].filter(Boolean).join(" ")}"
        aria-activedescendant="${e=>e.ariaActiveDescendant}"
        aria-controls="${e=>e.ariaControls}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-haspopup="${e=>e.collapsible?"listbox":null}"
        aria-multiselectable="${e=>e.ariaMultiSelectable}"
        ?open="${e=>e.open}"
        role="combobox"
        tabindex="${e=>e.disabled?null:"0"}"
        @click="${(e,i)=>e.clickHandler(i.event)}"
        @focusin="${(e,i)=>e.focusinHandler(i.event)}"
        @focusout="${(e,i)=>e.focusoutHandler(i.event)}"
        @keydown="${(e,i)=>e.keydownHandler(i.event)}"
        @mousedown="${(e,i)=>e.mousedownHandler(i.event)}"
    >
        ${U(e=>e.collapsible,v`
                <div
                    class="control"
                    part="control"
                    ?disabled="${e=>e.disabled}"
                    ${V("control")}
                >
                    ${K(o,t)}
                    <slot name="button-container">
                        <div class="selected-value" part="selected-value">
                            <slot name="selected-value">${e=>e.displayValue}</slot>
                        </div>
                        <div aria-hidden="true" class="indicator" part="indicator">
                            <slot name="indicator">
                                ${t.indicator||""}
                            </slot>
                        </div>
                    </slot>
                    ${J(o,t)}
                </div>
            `)}
        <div
            class="listbox"
            id="${e=>e.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${e=>e.disabled}"
            ?hidden="${e=>e.collapsible?!e.open:!1}"
            ${V("listbox")}
        >
            <slot
                ${z({filter:mt.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`;var Wc=(o,t)=>v`
    <template
        class="${e=>e.shape==="circle"?"circle":"rect"}"
        pattern="${e=>e.pattern}"
        ?shimmer="${e=>e.shimmer}"
    >
        ${U(e=>e.shimmer===!0,v`
                <span class="shimmer"></span>
            `)}
        <object type="image/svg+xml" data="${e=>e.pattern}" role="presentation">
            <img class="pattern" src="${e=>e.pattern}" />
        </object>
        <slot></slot>
    </template>
`;var yo=class extends w{constructor(){super(...arguments),this.shape="rect"}};a([c],yo.prototype,"fill",void 0);a([c],yo.prototype,"shape",void 0);a([c],yo.prototype,"pattern",void 0);a([c({mode:"boolean"})],yo.prototype,"shimmer",void 0);var Xc=(o,t)=>v`
    <template
        aria-disabled="${e=>e.disabled}"
        class="${e=>e.sliderOrientation||tt.horizontal}
            ${e=>e.disabled?"disabled":""}"
    >
        <div ${V("root")} part="root" class="root" style="${e=>e.positionStyle}">
            <div class="container">
                ${U(e=>!e.hideMark,v`
                        <div class="mark"></div>
                    `)}
                <div class="label">
                    <slot></slot>
                </div>
            </div>
        </div>
    </template>
`;function _i(o,t,e,i){let r=Ko(0,1,(o-t)/(e-t));return i===W.rtl&&(r=1-r),r}var Mr={min:0,max:0,direction:W.ltr,orientation:tt.horizontal,disabled:!1},he=class extends w{constructor(){super(...arguments),this.hideMark=!1,this.sliderDirection=W.ltr,this.getSliderConfiguration=()=>{if(!this.isSliderConfig(this.parentNode))this.sliderDirection=Mr.direction||W.ltr,this.sliderOrientation=Mr.orientation||tt.horizontal,this.sliderMaxPosition=Mr.max,this.sliderMinPosition=Mr.min;else{let t=this.parentNode,{min:e,max:i,direction:r,orientation:n,disabled:s}=t;s!==void 0&&(this.disabled=s),this.sliderDirection=r||W.ltr,this.sliderOrientation=n||tt.horizontal,this.sliderMaxPosition=i,this.sliderMinPosition=e}},this.positionAsStyle=()=>{let t=this.sliderDirection?this.sliderDirection:W.ltr,e=_i(Number(this.position),Number(this.sliderMinPosition),Number(this.sliderMaxPosition)),i=Math.round((1-e)*100),r=Math.round(e*100);return Number.isNaN(r)&&Number.isNaN(i)&&(i=50,r=50),this.sliderOrientation===tt.horizontal?t===W.rtl?`right: ${r}%; left: ${i}%;`:`left: ${r}%; right: ${i}%;`:`top: ${r}%; bottom: ${i}%;`}}positionChanged(){this.positionStyle=this.positionAsStyle()}sliderOrientationChanged(){}connectedCallback(){super.connectedCallback(),this.getSliderConfiguration(),this.positionStyle=this.positionAsStyle(),this.notifier=R.getNotifier(this.parentNode),this.notifier.subscribe(this,"orientation"),this.notifier.subscribe(this,"direction"),this.notifier.subscribe(this,"max"),this.notifier.subscribe(this,"min")}disconnectedCallback(){super.disconnectedCallback(),this.notifier.unsubscribe(this,"orientation"),this.notifier.unsubscribe(this,"direction"),this.notifier.unsubscribe(this,"max"),this.notifier.unsubscribe(this,"min")}handleChange(t,e){switch(e){case"direction":this.sliderDirection=t.direction;break;case"orientation":this.sliderOrientation=t.orientation;break;case"max":this.sliderMaxPosition=t.max;break;case"min":this.sliderMinPosition=t.min;break;default:break}this.positionStyle=this.positionAsStyle()}isSliderConfig(t){return t.max!==void 0&&t.min!==void 0}};a([f],he.prototype,"positionStyle",void 0);a([c],he.prototype,"position",void 0);a([c({attribute:"hide-mark",mode:"boolean"})],he.prototype,"hideMark",void 0);a([c({attribute:"disabled",mode:"boolean"})],he.prototype,"disabled",void 0);a([f],he.prototype,"sliderOrientation",void 0);a([f],he.prototype,"sliderMinPosition",void 0);a([f],he.prototype,"sliderMaxPosition",void 0);a([f],he.prototype,"sliderDirection",void 0);var Yc=(o,t)=>v`
    <template
        role="slider"
        class="${e=>e.readOnly?"readonly":""}
        ${e=>e.orientation||tt.horizontal}"
        tabindex="${e=>e.disabled?null:0}"
        aria-valuetext="${e=>e.valueTextFormatter(e.value)}"
        aria-valuenow="${e=>e.value}"
        aria-valuemin="${e=>e.min}"
        aria-valuemax="${e=>e.max}"
        aria-disabled="${e=>e.disabled?!0:void 0}"
        aria-readonly="${e=>e.readOnly?!0:void 0}"
        aria-orientation="${e=>e.orientation}"
        class="${e=>e.orientation}"
    >
        <div part="positioning-region" class="positioning-region">
            <div ${V("track")} part="track-container" class="track">
                <slot name="track"></slot>
                <div part="track-start" class="track-start" style="${e=>e.position}">
                    <slot name="track-start"></slot>
                </div>
            </div>
            <slot></slot>
            <div
                ${V("thumb")}
                part="thumb-container"
                class="thumb-container"
                style="${e=>e.position}"
            >
                <slot name="thumb">${t.thumb||""}</slot>
            </div>
        </div>
    </template>
`;var aa=class extends w{},zr=class extends Ot(aa){constructor(){super(...arguments),this.proxy=document.createElement("input")}};var mf={singleValue:"single-value"},yt=class extends zr{constructor(){super(...arguments),this.direction=W.ltr,this.isDragging=!1,this.trackWidth=0,this.trackMinWidth=0,this.trackHeight=0,this.trackLeft=0,this.trackMinHeight=0,this.valueTextFormatter=()=>null,this.min=0,this.max=10,this.step=1,this.orientation=tt.horizontal,this.mode=mf.singleValue,this.keypressHandler=t=>{if(!this.readOnly){if(t.key===gt)t.preventDefault(),this.value=`${this.min}`;else if(t.key===vt)t.preventDefault(),this.value=`${this.max}`;else if(!t.shiftKey)switch(t.key){case Wt:case ut:t.preventDefault(),this.increment();break;case qt:case ht:t.preventDefault(),this.decrement();break}}},this.setupTrackConstraints=()=>{let t=this.track.getBoundingClientRect();this.trackWidth=this.track.clientWidth,this.trackMinWidth=this.track.clientLeft,this.trackHeight=t.bottom,this.trackMinHeight=t.top,this.trackLeft=this.getBoundingClientRect().left,this.trackWidth===0&&(this.trackWidth=1)},this.setupListeners=(t=!1)=>{let e=`${t?"remove":"add"}EventListener`;this[e]("keydown",this.keypressHandler),this[e]("mousedown",this.handleMouseDown),this.thumb[e]("mousedown",this.handleThumbMouseDown,{passive:!0}),this.thumb[e]("touchstart",this.handleThumbMouseDown,{passive:!0}),t&&(this.handleMouseDown(null),this.handleThumbMouseDown(null))},this.initialValue="",this.handleThumbMouseDown=t=>{if(t){if(this.readOnly||this.disabled||t.defaultPrevented)return;t.target.focus()}let e=`${t!==null?"add":"remove"}EventListener`;window[e]("mouseup",this.handleWindowMouseUp),window[e]("mousemove",this.handleMouseMove,{passive:!0}),window[e]("touchmove",this.handleMouseMove,{passive:!0}),window[e]("touchend",this.handleWindowMouseUp),this.isDragging=t!==null},this.handleMouseMove=t=>{if(this.readOnly||this.disabled||t.defaultPrevented)return;let e=window.TouchEvent&&t instanceof TouchEvent?t.touches[0]:t,i=this.orientation===tt.horizontal?e.pageX-document.documentElement.scrollLeft-this.trackLeft:e.pageY-document.documentElement.scrollTop;this.value=`${this.calculateNewValue(i)}`},this.calculateNewValue=t=>{let e=_i(t,this.orientation===tt.horizontal?this.trackMinWidth:this.trackMinHeight,this.orientation===tt.horizontal?this.trackWidth:this.trackHeight,this.direction),i=(this.max-this.min)*e+this.min;return this.convertToConstrainedValue(i)},this.handleWindowMouseUp=t=>{this.stopDragging()},this.stopDragging=()=>{this.isDragging=!1,this.handleMouseDown(null),this.handleThumbMouseDown(null)},this.handleMouseDown=t=>{let e=`${t!==null?"add":"remove"}EventListener`;if((t===null||!this.disabled&&!this.readOnly)&&(window[e]("mouseup",this.handleWindowMouseUp),window.document[e]("mouseleave",this.handleWindowMouseUp),window[e]("mousemove",this.handleMouseMove),t)){t.preventDefault(),this.setupTrackConstraints(),t.target.focus();let i=this.orientation===tt.horizontal?t.pageX-document.documentElement.scrollLeft-this.trackLeft:t.pageY-document.documentElement.scrollTop;this.value=`${this.calculateNewValue(i)}`}},this.convertToConstrainedValue=t=>{isNaN(t)&&(t=this.min);let e=t-this.min,i=Math.round(e/this.step),r=e-i*(this.stepMultiplier*this.step)/this.stepMultiplier;return e=r>=Number(this.step)/2?e-r+Number(this.step):e-r,e+this.min}}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}get valueAsNumber(){return parseFloat(super.value)}set valueAsNumber(t){this.value=t.toString()}valueChanged(t,e){super.valueChanged(t,e),this.$fastController.isConnected&&this.setThumbPositionForOrientation(this.direction),this.$emit("change")}minChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.min=`${this.min}`),this.validate()}maxChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.max=`${this.max}`),this.validate()}stepChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.step=`${this.step}`),this.updateStepMultiplier(),this.validate()}orientationChanged(){this.$fastController.isConnected&&this.setThumbPositionForOrientation(this.direction)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type","range"),this.direction=te(this),this.updateStepMultiplier(),this.setupTrackConstraints(),this.setupListeners(),this.setupDefaultValue(),this.setThumbPositionForOrientation(this.direction)}disconnectedCallback(){this.setupListeners(!0)}increment(){let t=this.direction!==W.rtl&&this.orientation!==tt.vertical?Number(this.value)+Number(this.step):Number(this.value)-Number(this.step),e=this.convertToConstrainedValue(t),i=e<Number(this.max)?`${e}`:`${this.max}`;this.value=i}decrement(){let t=this.direction!==W.rtl&&this.orientation!==tt.vertical?Number(this.value)-Number(this.step):Number(this.value)+Number(this.step),e=this.convertToConstrainedValue(t),i=e>Number(this.min)?`${e}`:`${this.min}`;this.value=i}setThumbPositionForOrientation(t){let i=(1-_i(Number(this.value),Number(this.min),Number(this.max),t))*100;this.orientation===tt.horizontal?this.position=this.isDragging?`right: ${i}%; transition: none;`:`right: ${i}%; transition: all 0.2s ease;`:this.position=this.isDragging?`bottom: ${i}%; transition: none;`:`bottom: ${i}%; transition: all 0.2s ease;`}updateStepMultiplier(){let t=this.step+"",e=this.step%1?t.length-t.indexOf(".")-1:0;this.stepMultiplier=Math.pow(10,e)}get midpoint(){return`${this.convertToConstrainedValue((this.max+this.min)/2)}`}setupDefaultValue(){if(typeof this.value=="string")if(this.value.length===0)this.initialValue=this.midpoint;else{let t=parseFloat(this.value);!Number.isNaN(t)&&(t<this.min||t>this.max)&&(this.value=this.midpoint)}}};a([c({attribute:"readonly",mode:"boolean"})],yt.prototype,"readOnly",void 0);a([f],yt.prototype,"direction",void 0);a([f],yt.prototype,"isDragging",void 0);a([f],yt.prototype,"position",void 0);a([f],yt.prototype,"trackWidth",void 0);a([f],yt.prototype,"trackMinWidth",void 0);a([f],yt.prototype,"trackHeight",void 0);a([f],yt.prototype,"trackLeft",void 0);a([f],yt.prototype,"trackMinHeight",void 0);a([f],yt.prototype,"valueTextFormatter",void 0);a([c({converter:S})],yt.prototype,"min",void 0);a([c({converter:S})],yt.prototype,"max",void 0);a([c({converter:S})],yt.prototype,"step",void 0);a([c],yt.prototype,"orientation",void 0);a([c],yt.prototype,"mode",void 0);var Qc=(o,t)=>v`
    <template
        role="switch"
        aria-checked="${e=>e.checked}"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        tabindex="${e=>e.disabled?null:0}"
        @keypress="${(e,i)=>e.keypressHandler(i.event)}"
        @click="${(e,i)=>e.clickHandler(i.event)}"
        class="${e=>e.checked?"checked":""}"
    >
        <label
            part="label"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${z("defaultSlottedNodes")}></slot>
        </label>
        <div part="switch" class="switch">
            <slot name="switch">${t.switch||""}</slot>
        </div>
        <span class="status-message" part="status-message">
            <span class="checked-message" part="checked-message">
                <slot name="checked-message"></slot>
            </span>
            <span class="unchecked-message" part="unchecked-message">
                <slot name="unchecked-message"></slot>
            </span>
        </span>
    </template>
`;var la=class extends w{},Nr=class extends ei(la){constructor(){super(...arguments),this.proxy=document.createElement("input")}};var ni=class extends Nr{constructor(){super(),this.initialValue="on",this.keypressHandler=t=>{if(!this.readOnly)switch(t.key){case St:case Xt:this.checked=!this.checked;break}},this.clickHandler=t=>{!this.disabled&&!this.readOnly&&(this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly),this.readOnly?this.classList.add("readonly"):this.classList.remove("readonly")}checkedChanged(t,e){super.checkedChanged(t,e),this.checked?this.classList.add("checked"):this.classList.remove("checked")}};a([c({attribute:"readonly",mode:"boolean"})],ni.prototype,"readOnly",void 0);a([f],ni.prototype,"defaultSlottedNodes",void 0);var Zc=(o,t)=>v`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`;var _r=class extends w{};var Jc=(o,t)=>v`
    <template slot="tab" role="tab" aria-disabled="${e=>e.disabled}">
        <slot></slot>
    </template>
`;var ji=class extends w{};a([c({mode:"boolean"})],ji.prototype,"disabled",void 0);var Kc=(o,t)=>v`
    <template class="${e=>e.orientation}">
        ${K(o,t)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${z("tabs")}></slot>

            ${U(e=>e.showActiveIndicator,v`
                    <div
                        ${V("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${J(o,t)}
        <div class="tabpanel" part="tabpanel">
            <slot name="tabpanel" ${z("tabpanels")}></slot>
        </div>
    </template>
`;var td={vertical:"vertical",horizontal:"horizontal"},ue=class extends w{constructor(){super(...arguments),this.orientation=td.horizontal,this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=t=>t.getAttribute("aria-disabled")==="true",this.isFocusableElement=t=>!this.isDisabledElement(t),this.setTabs=()=>{let t="gridColumn",e="gridRow",i=this.isHorizontal()?t:e;this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach((r,n)=>{if(r.slot==="tab"){let s=this.activeTabIndex===n&&this.isFocusableElement(r);this.activeindicator&&this.isFocusableElement(r)&&(this.showActiveIndicator=!0);let l=this.tabIds[n],d=this.tabpanelIds[n];r.setAttribute("id",l),r.setAttribute("aria-selected",s?"true":"false"),r.setAttribute("aria-controls",d),r.addEventListener("click",this.handleTabClick),r.addEventListener("keydown",this.handleTabKeyDown),r.setAttribute("tabindex",s?"0":"-1"),s&&(this.activetab=r)}r.style[t]="",r.style[e]="",r.style[i]=`${n+1}`,this.isHorizontal()?r.classList.remove("vertical"):r.classList.add("vertical")})},this.setTabPanels=()=>{this.tabpanels.forEach((t,e)=>{let i=this.tabIds[e],r=this.tabpanelIds[e];t.setAttribute("id",r),t.setAttribute("aria-labelledby",i),this.activeTabIndex!==e?t.setAttribute("hidden",""):t.removeAttribute("hidden")})},this.handleTabClick=t=>{let e=t.currentTarget;e.nodeType===1&&this.isFocusableElement(e)&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(e),this.setComponent())},this.handleTabKeyDown=t=>{if(this.isHorizontal())switch(t.key){case qt:t.preventDefault(),this.adjustBackward(t);break;case Wt:t.preventDefault(),this.adjustForward(t);break}else switch(t.key){case ut:t.preventDefault(),this.adjustBackward(t);break;case ht:t.preventDefault(),this.adjustForward(t);break}switch(t.key){case gt:t.preventDefault(),this.adjust(-this.activeTabIndex);break;case vt:t.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1);break}},this.adjustForward=t=>{let e=this.tabs,i=0;for(i=this.activetab?e.indexOf(this.activetab)+1:1,i===e.length&&(i=0);i<e.length&&e.length>1;)if(this.isFocusableElement(e[i])){this.moveToTabByIndex(e,i);break}else{if(this.activetab&&i===e.indexOf(this.activetab))break;i+1>=e.length?i=0:i+=1}},this.adjustBackward=t=>{let e=this.tabs,i=0;for(i=this.activetab?e.indexOf(this.activetab)-1:0,i=i<0?e.length-1:i;i>=0&&e.length>1;)if(this.isFocusableElement(e[i])){this.moveToTabByIndex(e,i);break}else i-1<0?i=e.length-1:i-=1},this.moveToTabByIndex=(t,e)=>{let i=t[e];this.activetab=i,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=e,i.focus(),this.setComponent()}}orientationChanged(){this.$fastController.isConnected&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}activeidChanged(t,e){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex(i=>i.id===t),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return this.activeid!==void 0?this.tabIds.indexOf(this.activeid)===-1?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map(t=>{var e;return(e=t.getAttribute("id"))!==null&&e!==void 0?e:`tab-${Ne()}`})}getTabPanelIds(){return this.tabpanels.map(t=>{var e;return(e=t.getAttribute("id"))!==null&&e!==void 0?e:`panel-${Ne()}`})}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return this.orientation===td.horizontal}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;let t=this.isHorizontal()?"gridColumn":"gridRow",e=this.isHorizontal()?"translateX":"translateY",i=this.isHorizontal()?"offsetLeft":"offsetTop",r=this.activeIndicatorRef[i];this.activeIndicatorRef.style[t]=`${this.activeTabIndex+1}`;let n=this.activeIndicatorRef[i];this.activeIndicatorRef.style[t]=`${this.prevActiveTabIndex+1}`;let s=n-r;this.activeIndicatorRef.style.transform=`${e}(${s}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",()=>{this.ticking=!1,this.activeIndicatorRef.style[t]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${e}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")})}adjust(t){this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=$r(0,this.tabs.length-1,this.activeTabIndex+t),this.setComponent()}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}};a([c],ue.prototype,"orientation",void 0);a([c],ue.prototype,"activeid",void 0);a([f],ue.prototype,"tabs",void 0);a([f],ue.prototype,"tabpanels",void 0);a([c({mode:"boolean"})],ue.prototype,"activeindicator",void 0);a([f],ue.prototype,"activeIndicatorRef",void 0);a([f],ue.prototype,"showActiveIndicator",void 0);_(ue,Z);var ca=class extends w{},jr=class extends Ot(ca){constructor(){super(...arguments),this.proxy=document.createElement("textarea")}};var Gr={none:"none",both:"both",horizontal:"horizontal",vertical:"vertical"};var wt=class extends jr{constructor(){super(...arguments),this.resize=Gr.none,this.cols=20,this.handleTextInput=()=>{this.value=this.control.value}}readOnlyChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.readOnly=this.readOnly)}autofocusChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.autofocus=this.autofocus)}listChanged(){this.proxy instanceof HTMLTextAreaElement&&this.proxy.setAttribute("list",this.list)}maxlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.maxLength=this.maxlength)}minlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.minLength=this.minlength)}spellcheckChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.spellcheck=this.spellcheck)}select(){this.control.select(),this.$emit("select")}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}};a([c({mode:"boolean"})],wt.prototype,"readOnly",void 0);a([c],wt.prototype,"resize",void 0);a([c({mode:"boolean"})],wt.prototype,"autofocus",void 0);a([c({attribute:"form"})],wt.prototype,"formId",void 0);a([c],wt.prototype,"list",void 0);a([c({converter:S})],wt.prototype,"maxlength",void 0);a([c({converter:S})],wt.prototype,"minlength",void 0);a([c],wt.prototype,"name",void 0);a([c],wt.prototype,"placeholder",void 0);a([c({converter:S,mode:"fromView"})],wt.prototype,"cols",void 0);a([c({converter:S,mode:"fromView"})],wt.prototype,"rows",void 0);a([c({mode:"boolean"})],wt.prototype,"spellcheck",void 0);a([f],wt.prototype,"defaultSlottedNodes",void 0);_(wt,xo);var ed=(o,t)=>v`
    <template
        class="
            ${e=>e.readOnly?"readonly":""}
            ${e=>e.resize!==Gr.none?`resize-${e.resize}`:""}"
    >
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${z("defaultSlottedNodes")}></slot>
        </label>
        <textarea
            part="control"
            class="control"
            id="control"
            ?autofocus="${e=>e.autofocus}"
            cols="${e=>e.cols}"
            ?disabled="${e=>e.disabled}"
            form="${e=>e.form}"
            list="${e=>e.list}"
            maxlength="${e=>e.maxlength}"
            minlength="${e=>e.minlength}"
            name="${e=>e.name}"
            placeholder="${e=>e.placeholder}"
            ?readonly="${e=>e.readOnly}"
            ?required="${e=>e.required}"
            rows="${e=>e.rows}"
            ?spellcheck="${e=>e.spellcheck}"
            :value="${e=>e.value}"
            aria-atomic="${e=>e.ariaAtomic}"
            aria-busy="${e=>e.ariaBusy}"
            aria-controls="${e=>e.ariaControls}"
            aria-current="${e=>e.ariaCurrent}"
            aria-describedby="${e=>e.ariaDescribedby}"
            aria-details="${e=>e.ariaDetails}"
            aria-disabled="${e=>e.ariaDisabled}"
            aria-errormessage="${e=>e.ariaErrormessage}"
            aria-flowto="${e=>e.ariaFlowto}"
            aria-haspopup="${e=>e.ariaHaspopup}"
            aria-hidden="${e=>e.ariaHidden}"
            aria-invalid="${e=>e.ariaInvalid}"
            aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
            aria-label="${e=>e.ariaLabel}"
            aria-labelledby="${e=>e.ariaLabelledby}"
            aria-live="${e=>e.ariaLive}"
            aria-owns="${e=>e.ariaOwns}"
            aria-relevant="${e=>e.ariaRelevant}"
            aria-roledescription="${e=>e.ariaRoledescription}"
            @input="${(e,i)=>e.handleTextInput()}"
            @change="${e=>e.handleChange()}"
            ${V("control")}
        ></textarea>
    </template>
`;var od=(o,t)=>v`
    <template
        class="
            ${e=>e.readOnly?"readonly":""}
        "
    >
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${z({property:"defaultSlottedNodes",filter:Vr})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${K(o,t)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${e=>e.handleTextInput()}"
                @change="${e=>e.handleChange()}"
                ?autofocus="${e=>e.autofocus}"
                ?disabled="${e=>e.disabled}"
                list="${e=>e.list}"
                maxlength="${e=>e.maxlength}"
                minlength="${e=>e.minlength}"
                pattern="${e=>e.pattern}"
                placeholder="${e=>e.placeholder}"
                ?readonly="${e=>e.readOnly}"
                ?required="${e=>e.required}"
                size="${e=>e.size}"
                ?spellcheck="${e=>e.spellcheck}"
                :value="${e=>e.value}"
                type="${e=>e.type}"
                aria-atomic="${e=>e.ariaAtomic}"
                aria-busy="${e=>e.ariaBusy}"
                aria-controls="${e=>e.ariaControls}"
                aria-current="${e=>e.ariaCurrent}"
                aria-describedby="${e=>e.ariaDescribedby}"
                aria-details="${e=>e.ariaDetails}"
                aria-disabled="${e=>e.ariaDisabled}"
                aria-errormessage="${e=>e.ariaErrormessage}"
                aria-flowto="${e=>e.ariaFlowto}"
                aria-haspopup="${e=>e.ariaHaspopup}"
                aria-hidden="${e=>e.ariaHidden}"
                aria-invalid="${e=>e.ariaInvalid}"
                aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
                aria-label="${e=>e.ariaLabel}"
                aria-labelledby="${e=>e.ariaLabelledby}"
                aria-live="${e=>e.ariaLive}"
                aria-owns="${e=>e.ariaOwns}"
                aria-relevant="${e=>e.ariaRelevant}"
                aria-roledescription="${e=>e.ariaRoledescription}"
                ${V("control")}
            />
            ${J(o,t)}
        </div>
    </template>
`;var id=(o,t)=>v`
    <template
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-orientation="${e=>e.orientation}"
        orientation="${e=>e.orientation}"
        role="toolbar"
        @click="${(e,i)=>e.clickHandler(i.event)}"
        @focusin="${(e,i)=>e.focusinHandler(i.event)}"
        @keydown="${(e,i)=>e.keydownHandler(i.event)}"
        ${ho({property:"childItems",attributeFilter:["disabled","hidden"],filter:Ct(),subtree:!0})}
    >
        <slot name="label"></slot>
        <div class="positioning-region" part="positioning-region">
            ${K(o,t)}
            <slot
                ${z({filter:Ct(),property:"slottedItems"})}
            ></slot>
            ${J(o,t)}
        </div>
    </template>
`;var rd=Object.freeze({[po.ArrowUp]:{[tt.vertical]:-1},[po.ArrowDown]:{[tt.vertical]:1},[po.ArrowLeft]:{[tt.horizontal]:{[W.ltr]:-1,[W.rtl]:1}},[po.ArrowRight]:{[tt.horizontal]:{[W.ltr]:1,[W.rtl]:-1}}}),Ce=class o extends w{constructor(){super(...arguments),this._activeIndex=0,this.direction=W.ltr,this.orientation=tt.horizontal}get activeIndex(){return R.track(this,"activeIndex"),this._activeIndex}set activeIndex(t){this.$fastController.isConnected&&(this._activeIndex=Ko(0,this.focusableElements.length-1,t),R.notify(this,"activeIndex"))}slottedItemsChanged(){this.$fastController.isConnected&&this.reduceFocusableElements()}clickHandler(t){var e;let i=(e=this.focusableElements)===null||e===void 0?void 0:e.indexOf(t.target);return i>-1&&this.activeIndex!==i&&this.setFocusedElement(i),!0}childItemsChanged(t,e){this.$fastController.isConnected&&this.reduceFocusableElements()}connectedCallback(){super.connectedCallback(),this.direction=te(this)}focusinHandler(t){let e=t.relatedTarget;!e||this.contains(e)||this.setFocusedElement()}getDirectionalIncrementer(t){var e,i,r,n,s;return(s=(r=(i=(e=rd[t])===null||e===void 0?void 0:e[this.orientation])===null||i===void 0?void 0:i[this.direction])!==null&&r!==void 0?r:(n=rd[t])===null||n===void 0?void 0:n[this.orientation])!==null&&s!==void 0?s:0}keydownHandler(t){let e=t.key;if(!(e in po)||t.defaultPrevented||t.shiftKey)return!0;let i=this.getDirectionalIncrementer(e);if(!i)return!t.target.closest("[role=radiogroup]");let r=this.activeIndex+i;return this.focusableElements[r]&&t.preventDefault(),this.setFocusedElement(r),!0}get allSlottedItems(){return[...this.start.assignedElements(),...this.slottedItems,...this.end.assignedElements()]}reduceFocusableElements(){var t;let e=(t=this.focusableElements)===null||t===void 0?void 0:t[this.activeIndex];this.focusableElements=this.allSlottedItems.reduce(o.reduceFocusableItems,[]);let i=this.focusableElements.indexOf(e);this.activeIndex=Math.max(0,i),this.setFocusableElements()}setFocusedElement(t=this.activeIndex){var e;this.activeIndex=t,this.setFocusableElements(),(e=this.focusableElements[this.activeIndex])===null||e===void 0||e.focus()}static reduceFocusableItems(t,e){var i,r,n,s;let l=e.getAttribute("role")==="radio",d=(r=(i=e.$fastController)===null||i===void 0?void 0:i.definition.shadowOptions)===null||r===void 0?void 0:r.delegatesFocus,u=Array.from((s=(n=e.shadowRoot)===null||n===void 0?void 0:n.querySelectorAll("*"))!==null&&s!==void 0?s:[]).some(p=>ta(p));return!e.hasAttribute("disabled")&&!e.hasAttribute("hidden")&&(ta(e)||l||d||u)?(t.push(e),t):e.childElementCount?t.concat(Array.from(e.children).reduce(o.reduceFocusableItems,[])):t}setFocusableElements(){this.$fastController.isConnected&&this.focusableElements.length>0&&this.focusableElements.forEach((t,e)=>{t.tabIndex=this.activeIndex===e?0:-1})}};a([f],Ce.prototype,"direction",void 0);a([c],Ce.prototype,"orientation",void 0);a([f],Ce.prototype,"slottedItems",void 0);a([f],Ce.prototype,"slottedLabel",void 0);a([f],Ce.prototype,"childItems",void 0);var si=class{};a([c({attribute:"aria-labelledby"})],si.prototype,"ariaLabelledby",void 0);a([c({attribute:"aria-label"})],si.prototype,"ariaLabel",void 0);_(si,X);_(Ce,Z,si);var nd=(o,t)=>v`
        ${U(e=>e.tooltipVisible,v`
            <${o.tagFor(M)}
                fixed-placement="true"
                auto-update-mode="${e=>e.autoUpdateMode}"
                vertical-positioning-mode="${e=>e.verticalPositioningMode}"
                vertical-default-position="${e=>e.verticalDefaultPosition}"
                vertical-inset="${e=>e.verticalInset}"
                vertical-scaling="${e=>e.verticalScaling}"
                horizontal-positioning-mode="${e=>e.horizontalPositioningMode}"
                horizontal-default-position="${e=>e.horizontalDefaultPosition}"
                horizontal-scaling="${e=>e.horizontalScaling}"
                horizontal-inset="${e=>e.horizontalInset}"
                vertical-viewport-lock="${e=>e.horizontalViewportLock}"
                horizontal-viewport-lock="${e=>e.verticalViewportLock}"
                dir="${e=>e.currentDirection}"
                ${V("region")}
            >
                <div class="tooltip" part="tooltip" role="tooltip">
                    <slot></slot>
                </div>
            </${o.tagFor(M)}>
        `)}
    `;var jt={top:"top",right:"right",bottom:"bottom",left:"left",start:"start",end:"end",topLeft:"top-left",topRight:"top-right",bottomLeft:"bottom-left",bottomRight:"bottom-right",topStart:"top-start",topEnd:"top-end",bottomStart:"bottom-start",bottomEnd:"bottom-end"};var st=class extends w{constructor(){super(...arguments),this.anchor="",this.delay=300,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.verticalPositioningMode="dynamic",this.horizontalPositioningMode="dynamic",this.horizontalInset="false",this.verticalInset="false",this.horizontalScaling="content",this.verticalScaling="content",this.verticalDefaultPosition=void 0,this.horizontalDefaultPosition=void 0,this.tooltipVisible=!1,this.currentDirection=W.ltr,this.showDelayTimer=null,this.hideDelayTimer=null,this.isAnchorHoveredFocused=!1,this.isRegionHovered=!1,this.handlePositionChange=t=>{this.classList.toggle("top",this.region.verticalPosition==="start"),this.classList.toggle("bottom",this.region.verticalPosition==="end"),this.classList.toggle("inset-top",this.region.verticalPosition==="insetStart"),this.classList.toggle("inset-bottom",this.region.verticalPosition==="insetEnd"),this.classList.toggle("center-vertical",this.region.verticalPosition==="center"),this.classList.toggle("left",this.region.horizontalPosition==="start"),this.classList.toggle("right",this.region.horizontalPosition==="end"),this.classList.toggle("inset-left",this.region.horizontalPosition==="insetStart"),this.classList.toggle("inset-right",this.region.horizontalPosition==="insetEnd"),this.classList.toggle("center-horizontal",this.region.horizontalPosition==="center")},this.handleRegionMouseOver=t=>{this.isRegionHovered=!0},this.handleRegionMouseOut=t=>{this.isRegionHovered=!1,this.startHideDelayTimer()},this.handleAnchorMouseOver=t=>{if(this.tooltipVisible){this.isAnchorHoveredFocused=!0;return}this.startShowDelayTimer()},this.handleAnchorMouseOut=t=>{this.isAnchorHoveredFocused=!1,this.clearShowDelayTimer(),this.startHideDelayTimer()},this.handleAnchorFocusIn=t=>{this.startShowDelayTimer()},this.handleAnchorFocusOut=t=>{this.isAnchorHoveredFocused=!1,this.clearShowDelayTimer(),this.startHideDelayTimer()},this.startHideDelayTimer=()=>{this.clearHideDelayTimer(),this.tooltipVisible&&(this.hideDelayTimer=window.setTimeout(()=>{this.updateTooltipVisibility()},60))},this.clearHideDelayTimer=()=>{this.hideDelayTimer!==null&&(clearTimeout(this.hideDelayTimer),this.hideDelayTimer=null)},this.startShowDelayTimer=()=>{if(!this.isAnchorHoveredFocused){if(this.delay>1){this.showDelayTimer===null&&(this.showDelayTimer=window.setTimeout(()=>{this.startHover()},this.delay));return}this.startHover()}},this.startHover=()=>{this.isAnchorHoveredFocused=!0,this.updateTooltipVisibility()},this.clearShowDelayTimer=()=>{this.showDelayTimer!==null&&(clearTimeout(this.showDelayTimer),this.showDelayTimer=null)},this.getAnchor=()=>{let t=this.getRootNode();return t instanceof ShadowRoot?t.getElementById(this.anchor):document.getElementById(this.anchor)},this.handleDocumentKeydown=t=>{if(!t.defaultPrevented&&this.tooltipVisible)switch(t.key){case se:this.isAnchorHoveredFocused=!1,this.updateTooltipVisibility(),this.$emit("dismiss");break}},this.updateTooltipVisibility=()=>{if(this.visible===!1)this.hideTooltip();else if(this.visible===!0){this.showTooltip();return}else{if(this.isAnchorHoveredFocused||this.isRegionHovered){this.showTooltip();return}this.hideTooltip()}},this.showTooltip=()=>{this.tooltipVisible||(this.currentDirection=te(this),this.tooltipVisible=!0,document.addEventListener("keydown",this.handleDocumentKeydown),F.queueUpdate(this.setRegionProps))},this.hideTooltip=()=>{this.tooltipVisible&&(this.clearHideDelayTimer(),this.region!==null&&this.region!==void 0&&(this.region.removeEventListener("positionchange",this.handlePositionChange),this.region.viewportElement=null,this.region.anchorElement=null,this.region.removeEventListener("mouseover",this.handleRegionMouseOver),this.region.removeEventListener("mouseout",this.handleRegionMouseOut)),document.removeEventListener("keydown",this.handleDocumentKeydown),this.tooltipVisible=!1)},this.setRegionProps=()=>{this.tooltipVisible&&(this.region.viewportElement=this.viewportElement,this.region.anchorElement=this.anchorElement,this.region.addEventListener("positionchange",this.handlePositionChange),this.region.addEventListener("mouseover",this.handleRegionMouseOver,{passive:!0}),this.region.addEventListener("mouseout",this.handleRegionMouseOut,{passive:!0}))}}visibleChanged(){this.$fastController.isConnected&&(this.updateTooltipVisibility(),this.updateLayout())}anchorChanged(){this.$fastController.isConnected&&(this.anchorElement=this.getAnchor())}positionChanged(){this.$fastController.isConnected&&this.updateLayout()}anchorElementChanged(t){if(this.$fastController.isConnected){if(t!=null&&(t.removeEventListener("mouseover",this.handleAnchorMouseOver),t.removeEventListener("mouseout",this.handleAnchorMouseOut),t.removeEventListener("focusin",this.handleAnchorFocusIn),t.removeEventListener("focusout",this.handleAnchorFocusOut)),this.anchorElement!==null&&this.anchorElement!==void 0){this.anchorElement.addEventListener("mouseover",this.handleAnchorMouseOver,{passive:!0}),this.anchorElement.addEventListener("mouseout",this.handleAnchorMouseOut,{passive:!0}),this.anchorElement.addEventListener("focusin",this.handleAnchorFocusIn,{passive:!0}),this.anchorElement.addEventListener("focusout",this.handleAnchorFocusOut,{passive:!0});let e=this.anchorElement.id;this.anchorElement.parentElement!==null&&this.anchorElement.parentElement.querySelectorAll(":hover").forEach(i=>{i.id===e&&this.startShowDelayTimer()})}this.region!==null&&this.region!==void 0&&this.tooltipVisible&&(this.region.anchorElement=this.anchorElement),this.updateLayout()}}viewportElementChanged(){this.region!==null&&this.region!==void 0&&(this.region.viewportElement=this.viewportElement),this.updateLayout()}connectedCallback(){super.connectedCallback(),this.anchorElement=this.getAnchor(),this.updateTooltipVisibility()}disconnectedCallback(){this.hideTooltip(),this.clearShowDelayTimer(),this.clearHideDelayTimer(),super.disconnectedCallback()}updateLayout(){switch(this.verticalPositioningMode="locktodefault",this.horizontalPositioningMode="locktodefault",this.position){case jt.top:case jt.bottom:this.verticalDefaultPosition=this.position,this.horizontalDefaultPosition="center";break;case jt.right:case jt.left:case jt.start:case jt.end:this.verticalDefaultPosition="center",this.horizontalDefaultPosition=this.position;break;case jt.topLeft:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="left";break;case jt.topRight:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="right";break;case jt.bottomLeft:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="left";break;case jt.bottomRight:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="right";break;case jt.topStart:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="start";break;case jt.topEnd:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="end";break;case jt.bottomStart:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="start";break;case jt.bottomEnd:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="end";break;default:this.verticalPositioningMode="dynamic",this.horizontalPositioningMode="dynamic",this.verticalDefaultPosition=void 0,this.horizontalDefaultPosition="center";break}}};a([c({mode:"boolean"})],st.prototype,"visible",void 0);a([c],st.prototype,"anchor",void 0);a([c],st.prototype,"delay",void 0);a([c],st.prototype,"position",void 0);a([c({attribute:"auto-update-mode"})],st.prototype,"autoUpdateMode",void 0);a([c({attribute:"horizontal-viewport-lock"})],st.prototype,"horizontalViewportLock",void 0);a([c({attribute:"vertical-viewport-lock"})],st.prototype,"verticalViewportLock",void 0);a([f],st.prototype,"anchorElement",void 0);a([f],st.prototype,"viewportElement",void 0);a([f],st.prototype,"verticalPositioningMode",void 0);a([f],st.prototype,"horizontalPositioningMode",void 0);a([f],st.prototype,"horizontalInset",void 0);a([f],st.prototype,"verticalInset",void 0);a([f],st.prototype,"horizontalScaling",void 0);a([f],st.prototype,"verticalScaling",void 0);a([f],st.prototype,"verticalDefaultPosition",void 0);a([f],st.prototype,"horizontalDefaultPosition",void 0);a([f],st.prototype,"tooltipVisible",void 0);a([f],st.prototype,"currentDirection",void 0);var sd=(o,t)=>v`
    <template
        role="treeitem"
        slot="${e=>e.isNestedItem()?"item":void 0}"
        tabindex="-1"
        class="${e=>e.expanded?"expanded":""} ${e=>e.selected?"selected":""} ${e=>e.nested?"nested":""}
            ${e=>e.disabled?"disabled":""}"
        aria-expanded="${e=>e.childItems&&e.childItemLength()>0?e.expanded:void 0}"
        aria-selected="${e=>e.selected}"
        aria-disabled="${e=>e.disabled}"
        @focusin="${(e,i)=>e.handleFocus(i.event)}"
        @focusout="${(e,i)=>e.handleBlur(i.event)}"
        ${ho({property:"childItems",filter:Ct()})}
    >
        <div class="positioning-region" part="positioning-region">
            <div class="content-region" part="content-region">
                ${U(e=>e.childItems&&e.childItemLength()>0,v`
                        <div
                            aria-hidden="true"
                            class="expand-collapse-button"
                            part="expand-collapse-button"
                            @click="${(e,i)=>e.handleExpandCollapseButtonClick(i.event)}"
                            ${V("expandCollapseButton")}
                        >
                            <slot name="expand-collapse-glyph">
                                ${t.expandCollapseGlyph||""}
                            </slot>
                        </div>
                    `)}
                ${K(o,t)}
                <slot></slot>
                ${J(o,t)}
            </div>
        </div>
        ${U(e=>e.childItems&&e.childItemLength()>0&&(e.expanded||e.renderCollapsedChildren),v`
                <div role="group" class="items" part="items">
                    <slot name="item" ${z("items")}></slot>
                </div>
            `)}
    </template>
`;function Ue(o){return Te(o)&&o.getAttribute("role")==="treeitem"}var at=class extends w{constructor(){super(...arguments),this.expanded=!1,this.focusable=!1,this.isNestedItem=()=>Ue(this.parentElement),this.handleExpandCollapseButtonClick=t=>{!this.disabled&&!t.defaultPrevented&&(this.expanded=!this.expanded)},this.handleFocus=t=>{this.setAttribute("tabindex","0")},this.handleBlur=t=>{this.setAttribute("tabindex","-1")}}expandedChanged(){this.$fastController.isConnected&&this.$emit("expanded-change",this)}selectedChanged(){this.$fastController.isConnected&&this.$emit("selected-change",this)}itemsChanged(t,e){this.$fastController.isConnected&&this.items.forEach(i=>{Ue(i)&&(i.nested=!0)})}static focusItem(t){t.focusable=!0,t.focus()}childItemLength(){let t=this.childItems.filter(e=>Ue(e));return t?t.length:0}};a([c({mode:"boolean"})],at.prototype,"expanded",void 0);a([c({mode:"boolean"})],at.prototype,"selected",void 0);a([c({mode:"boolean"})],at.prototype,"disabled",void 0);a([f],at.prototype,"focusable",void 0);a([f],at.prototype,"childItems",void 0);a([f],at.prototype,"items",void 0);a([f],at.prototype,"nested",void 0);a([f],at.prototype,"renderCollapsedChildren",void 0);_(at,Z);var ad=(o,t)=>v`
    <template
        role="tree"
        ${V("treeView")}
        @keydown="${(e,i)=>e.handleKeyDown(i.event)}"
        @focusin="${(e,i)=>e.handleFocus(i.event)}"
        @focusout="${(e,i)=>e.handleBlur(i.event)}"
        @click="${(e,i)=>e.handleClick(i.event)}"
        @selected-change="${(e,i)=>e.handleSelectedChange(i.event)}"
    >
        <slot ${z("slottedTreeItems")}></slot>
    </template>
`;var _o=class extends w{constructor(){super(...arguments),this.currentFocused=null,this.handleFocus=t=>{if(!(this.slottedTreeItems.length<1)){if(t.target===this){this.currentFocused===null&&(this.currentFocused=this.getValidFocusableItem()),this.currentFocused!==null&&at.focusItem(this.currentFocused);return}this.contains(t.target)&&(this.setAttribute("tabindex","-1"),this.currentFocused=t.target)}},this.handleBlur=t=>{t.target instanceof HTMLElement&&(t.relatedTarget===null||!this.contains(t.relatedTarget))&&this.setAttribute("tabindex","0")},this.handleKeyDown=t=>{if(t.defaultPrevented)return;if(this.slottedTreeItems.length<1)return!0;let e=this.getVisibleNodes();switch(t.key){case gt:e.length&&at.focusItem(e[0]);return;case vt:e.length&&at.focusItem(e[e.length-1]);return;case qt:if(t.target&&this.isFocusableElement(t.target)){let i=t.target;i instanceof at&&i.childItemLength()>0&&i.expanded?i.expanded=!1:i instanceof at&&i.parentElement instanceof at&&at.focusItem(i.parentElement)}return!1;case Wt:if(t.target&&this.isFocusableElement(t.target)){let i=t.target;i instanceof at&&i.childItemLength()>0&&!i.expanded?i.expanded=!0:i instanceof at&&i.childItemLength()>0&&this.focusNextNode(1,t.target)}return;case ht:t.target&&this.isFocusableElement(t.target)&&this.focusNextNode(1,t.target);return;case ut:t.target&&this.isFocusableElement(t.target)&&this.focusNextNode(-1,t.target);return;case St:this.handleClick(t);return}return!0},this.handleSelectedChange=t=>{if(t.defaultPrevented)return;if(!(t.target instanceof Element)||!Ue(t.target))return!0;let e=t.target;e.selected?(this.currentSelected&&this.currentSelected!==e&&(this.currentSelected.selected=!1),this.currentSelected=e):!e.selected&&this.currentSelected===e&&(this.currentSelected=null)},this.setItems=()=>{let t=this.treeView.querySelector("[aria-selected='true']");this.currentSelected=t,(this.currentFocused===null||!this.contains(this.currentFocused))&&(this.currentFocused=this.getValidFocusableItem()),this.nested=this.checkForNestedItems(),this.getVisibleNodes().forEach(i=>{Ue(i)&&(i.nested=this.nested)})},this.isFocusableElement=t=>Ue(t),this.isSelectedElement=t=>t.selected}slottedTreeItemsChanged(){this.$fastController.isConnected&&this.setItems()}connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),F.queueUpdate(()=>{this.setItems()})}handleClick(t){if(t.defaultPrevented)return;if(!(t.target instanceof Element)||!Ue(t.target))return!0;let e=t.target;e.disabled||(e.selected=!e.selected)}focusNextNode(t,e){let i=this.getVisibleNodes();if(!i)return;let r=i[i.indexOf(e)+t];Te(r)&&at.focusItem(r)}getValidFocusableItem(){let t=this.getVisibleNodes(),e=t.findIndex(this.isSelectedElement);return e===-1&&(e=t.findIndex(this.isFocusableElement)),e!==-1?t[e]:null}checkForNestedItems(){return this.slottedTreeItems.some(t=>Ue(t)&&t.querySelector("[role='treeitem']"))}getVisibleNodes(){return tc(this,"[role='treeitem']")||[]}};a([c({attribute:"render-collapsed-nodes"})],_o.prototype,"renderCollapsedNodes",void 0);a([f],_o.prototype,"currentSelected",void 0);a([f],_o.prototype,"slottedTreeItems",void 0);var da=class{constructor(t){this.listenerCache=new WeakMap,this.query=t}bind(t){let{query:e}=this,i=this.constructListener(t);i.bind(e)(),e.addListener(i),this.listenerCache.set(t,i)}unbind(t){let e=this.listenerCache.get(t);e&&(this.query.removeListener(e),this.listenerCache.delete(t))}},Gi=class o extends da{constructor(t,e){super(t),this.styles=e}static with(t){return e=>new o(t,e)}constructListener(t){let e=!1,i=this.styles;return function(){let{matches:n}=this;n&&!e?(t.$fastController.addStyles(i),e=n):!n&&e&&(t.$fastController.removeStyles(i),e=n)}}unbind(t){super.unbind(t),t.$fastController.removeStyles(this.styles)}},I=Gi.with(window.matchMedia("(forced-colors)")),CS=Gi.with(window.matchMedia("(prefers-color-scheme: dark)")),SS=Gi.with(window.matchMedia("(prefers-color-scheme: light)"));var Ur=class{constructor(t,e,i){this.propertyName=t,this.value=e,this.styles=i}bind(t){R.getNotifier(t).subscribe(this,this.propertyName),this.handleChange(t,this.propertyName)}unbind(t){R.getNotifier(t).unsubscribe(this,this.propertyName),t.$fastController.removeStyles(this.styles)}handleChange(t,e){t[e]===this.value?t.$fastController.addStyles(this.styles):t.$fastController.removeStyles(this.styles)}};var lt="not-allowed";var gf=":host([hidden]){display:none}";function T(o){return`${gf}:host{display:${o}}`}var O=ec()?"focus-visible":"focus";function qe(o,t,e){return isNaN(o)||o<=t?t:o>=e?e:o}function qr(o,t,e){return isNaN(o)||o<=t?0:o>=e?1:o/(e-t)}function wo(o,t,e){return isNaN(o)?t:t+o*(e-t)}function ld(o){let t=Math.round(qe(o,0,255)).toString(16);return t.length===1?"0"+t:t}function Ui(o,t,e){return isNaN(o)||o<=0?t:o>=1?e:t+o*(e-t)}var A1=Math.PI*2;function xt(o,t){let e=Math.pow(10,t);return Math.round(o*e)/e}var ai=class o{constructor(t,e,i){this.h=t,this.s=e,this.l=i}static fromObject(t){return t&&!isNaN(t.h)&&!isNaN(t.s)&&!isNaN(t.l)?new o(t.h,t.s,t.l):null}equalValue(t){return this.h===t.h&&this.s===t.s&&this.l===t.l}roundToPrecision(t){return new o(xt(this.h,t),xt(this.s,t),xt(this.l,t))}toObject(){return{h:this.h,s:this.s,l:this.l}}};var $t=class o{constructor(t,e,i){this.l=t,this.a=e,this.b=i}static fromObject(t){return t&&!isNaN(t.l)&&!isNaN(t.a)&&!isNaN(t.b)?new o(t.l,t.a,t.b):null}equalValue(t){return this.l===t.l&&this.a===t.a&&this.b===t.b}roundToPrecision(t){return new o(xt(this.l,t),xt(this.a,t),xt(this.b,t))}toObject(){return{l:this.l,a:this.a,b:this.b}}};$t.epsilon=216/24389;$t.kappa=24389/27;var it=class o{constructor(t,e,i,r){this.r=t,this.g=e,this.b=i,this.a=typeof r=="number"&&!isNaN(r)?r:1}static fromObject(t){return t&&!isNaN(t.r)&&!isNaN(t.g)&&!isNaN(t.b)?new o(t.r,t.g,t.b,t.a):null}equalValue(t){return this.r===t.r&&this.g===t.g&&this.b===t.b&&this.a===t.a}toStringHexRGB(){return"#"+[this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringHexRGBA(){return this.toStringHexRGB()+this.formatHexValue(this.a)}toStringHexARGB(){return"#"+[this.a,this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringWebRGB(){return`rgb(${Math.round(wo(this.r,0,255))},${Math.round(wo(this.g,0,255))},${Math.round(wo(this.b,0,255))})`}toStringWebRGBA(){return`rgba(${Math.round(wo(this.r,0,255))},${Math.round(wo(this.g,0,255))},${Math.round(wo(this.b,0,255))},${qe(this.a,0,1)})`}roundToPrecision(t){return new o(xt(this.r,t),xt(this.g,t),xt(this.b,t),xt(this.a,t))}clamp(){return new o(qe(this.r,0,1),qe(this.g,0,1),qe(this.b,0,1),qe(this.a,0,1))}toObject(){return{r:this.r,g:this.g,b:this.b,a:this.a}}formatHexValue(t){return ld(wo(t,0,255))}};var ee=class o{constructor(t,e,i){this.x=t,this.y=e,this.z=i}static fromObject(t){return t&&!isNaN(t.x)&&!isNaN(t.y)&&!isNaN(t.z)?new o(t.x,t.y,t.z):null}equalValue(t){return this.x===t.x&&this.y===t.y&&this.z===t.z}roundToPrecision(t){return new o(xt(this.x,t),xt(this.y,t),xt(this.z,t))}toObject(){return{x:this.x,y:this.y,z:this.z}}};ee.whitePoint=new ee(.95047,1,1.08883);function vf(o){return o.r*.2126+o.g*.7152+o.b*.0722}function Wr(o){function t(e){return e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)}return vf(new it(t(o.r),t(o.g),t(o.b),1))}function ha(o,t,e){return e-t===0?0:(o-t)/(e-t)}function ua(o,t,e){let i=ha(o.r,t.r,e.r),r=ha(o.g,t.g,e.g),n=ha(o.b,t.b,e.b);return(i+r+n)/3}function cd(o,t,e=null){let i=0,r=e;return r!==null?i=ua(o,t,r):(r=new it(0,0,0,1),i=ua(o,t,r),i<=0&&(r=new it(1,1,1,1),i=ua(o,t,r))),i=Math.round(i*1e3)/1e3,new it(r.r,r.g,r.b,i)}function pa(o){let t=Math.max(o.r,o.g,o.b),e=Math.min(o.r,o.g,o.b),i=t-e,r=0;i!==0&&(t===o.r?r=60*((o.g-o.b)/i%6):t===o.g?r=60*((o.b-o.r)/i+2):r=60*((o.r-o.g)/i+4)),r<0&&(r+=360);let n=(t+e)/2,s=0;return i!==0&&(s=i/(1-Math.abs(2*n-1))),new ai(r,s,n)}function dd(o,t=1){let e=(1-Math.abs(2*o.l-1))*o.s,i=e*(1-Math.abs(o.h/60%2-1)),r=o.l-e/2,n=0,s=0,l=0;return o.h<60?(n=e,s=i,l=0):o.h<120?(n=i,s=e,l=0):o.h<180?(n=0,s=e,l=i):o.h<240?(n=0,s=i,l=e):o.h<300?(n=i,s=0,l=e):o.h<360&&(n=e,s=0,l=i),new it(n+r,s+r,l+r,t)}function bf(o){let t=(o.l+16)/116,e=t+o.a/500,i=t-o.b/200,r=Math.pow(e,3),n=Math.pow(t,3),s=Math.pow(i,3),l=0;r>$t.epsilon?l=r:l=(116*e-16)/$t.kappa;let d=0;o.l>$t.epsilon*$t.kappa?d=n:d=o.l/$t.kappa;let u=0;return s>$t.epsilon?u=s:u=(116*i-16)/$t.kappa,l=ee.whitePoint.x*l,d=ee.whitePoint.y*d,u=ee.whitePoint.z*u,new ee(l,d,u)}function xf(o){function t(d){return d>$t.epsilon?Math.pow(d,1/3):($t.kappa*d+16)/116}let e=t(o.x/ee.whitePoint.x),i=t(o.y/ee.whitePoint.y),r=t(o.z/ee.whitePoint.z),n=116*i-16,s=500*(e-i),l=200*(i-r);return new $t(n,s,l)}function yf(o){function t(d){return d<=.04045?d/12.92:Math.pow((d+.055)/1.055,2.4)}let e=t(o.r),i=t(o.g),r=t(o.b),n=e*.4124564+i*.3575761+r*.1804375,s=e*.2126729+i*.7151522+r*.072175,l=e*.0193339+i*.119192+r*.9503041;return new ee(n,s,l)}function wf(o,t=1){function e(s){return s<=.0031308?s*12.92:1.055*Math.pow(s,1/2.4)-.055}let i=e(o.x*3.2404542-o.y*1.5371385-o.z*.4985314),r=e(o.x*-.969266+o.y*1.8760108+o.z*.041556),n=e(o.x*.0556434-o.y*.2040259+o.z*1.0572252);return new it(i,r,n,t)}function hd(o){return xf(yf(o))}function Xr(o,t=1){return wf(bf(o),t)}var ud;(function(o){o[o.Burn=0]="Burn",o[o.Color=1]="Color",o[o.Darken=2]="Darken",o[o.Dodge=3]="Dodge",o[o.Lighten=4]="Lighten",o[o.Multiply=5]="Multiply",o[o.Overlay=6]="Overlay",o[o.Screen=7]="Screen"})(ud||(ud={}));function pd(o,t){if(t.a>=1)return t;if(t.a<=0)return new it(o.r,o.g,o.b,1);let e=t.a*t.r+(1-t.a)*o.r,i=t.a*t.g+(1-t.a)*o.g,r=t.a*t.b+(1-t.a)*o.b;return new it(e,i,r,1)}function qi(o,t,e){return isNaN(o)||o<=0?t:o>=1?e:new it(Ui(o,t.r,e.r),Ui(o,t.g,e.g),Ui(o,t.b,e.b),Ui(o,t.a,e.a))}var fd;(function(o){o[o.RGB=0]="RGB",o[o.HSL=1]="HSL",o[o.HSV=2]="HSV",o[o.XYZ=3]="XYZ",o[o.LAB=4]="LAB",o[o.LCH=5]="LCH"})(fd||(fd={}));var $f=/^#((?:[0-9a-f]{6}|[0-9a-f]{3}))$/i;function Se(o){let t=$f.exec(o);if(t===null)return null;let e=t[1];if(e.length===3){let r=e.charAt(0),n=e.charAt(1),s=e.charAt(2);e=r.concat(r,n,n,s,s)}let i=parseInt(e,16);return isNaN(i)?null:new it(qr((i&16711680)>>>16,0,255),qr((i&65280)>>>8,0,255),qr(i&255,0,255),1)}function jo(o,t){let e=o.relativeLuminance>t.relativeLuminance?o:t,i=o.relativeLuminance>t.relativeLuminance?t:o;return(e.relativeLuminance+.05)/(i.relativeLuminance+.05)}var It=Object.freeze({create(o,t,e){return new Yr(o,t,e)},from(o){return new Yr(o.r,o.g,o.b)}});function md(o){let t={r:0,g:0,b:0,toColorString:()=>"",contrast:()=>0,relativeLuminance:0};for(let e in t)if(typeof t[e]!=typeof o[e])return!1;return!0}var Yr=class o extends it{constructor(t,e,i){super(t,e,i,1),this.toColorString=this.toStringHexRGB,this.contrast=jo.bind(null,this),this.createCSS=this.toColorString,this.relativeLuminance=Wr(this)}static fromObject(t){return new o(t.r,t.g,t.b)}};function Qr(o,t,e=0,i=o.length-1){if(i===e)return o[e];let r=Math.floor((i-e)/2)+e;return t(o[r])?Qr(o,t,e,r):Qr(o,t,r+1,i)}var kf=(-.1+Math.sqrt(.21))/2;function We(o){return o.relativeLuminance<=kf}function Zt(o){return We(o)?-1:1}var gd={stepContrast:1.03,stepContrastRamp:.03,preserveSource:!1};function Cf(o,t,e){return typeof o=="number"?Go.from(It.create(o,t,e)):Go.from(o)}function Sf(o,t){return md(o)?Zr.from(o,t):Zr.from(It.create(o.r,o.g,o.b),t)}var Go=Object.freeze({create:Cf,from:Sf}),Zr=class o{constructor(t,e){this.closestIndexCache=new Map,this.source=t,this.swatches=e,this.reversedSwatches=Object.freeze([...this.swatches].reverse()),this.lastIndex=this.swatches.length-1}colorContrast(t,e,i,r){i===void 0&&(i=this.closestIndexOf(t));let n=this.swatches,s=this.lastIndex,l=i;r===void 0&&(r=Zt(t));let d=u=>jo(t,u)>=e;return r===-1&&(n=this.reversedSwatches,l=s-l),Qr(n,d,l,s)}get(t){return this.swatches[t]||this.swatches[qe(t,0,this.lastIndex)]}closestIndexOf(t){if(this.closestIndexCache.has(t.relativeLuminance))return this.closestIndexCache.get(t.relativeLuminance);let e=this.swatches.indexOf(t);if(e!==-1)return this.closestIndexCache.set(t.relativeLuminance,e),e;let i=this.swatches.reduce((r,n)=>Math.abs(n.relativeLuminance-t.relativeLuminance)<Math.abs(r.relativeLuminance-t.relativeLuminance)?n:r);return e=this.swatches.indexOf(i),this.closestIndexCache.set(t.relativeLuminance,e),e}static saturationBump(t,e){let r=pa(t).s,n=pa(e);if(n.s<r){let s=new ai(n.h,r,n.l);return dd(s)}return e}static ramp(t){let e=t/100;return e>.5?(e-.5)/.5:2*e}static createHighResolutionPalette(t){let e=[],i=hd(it.fromObject(t).roundToPrecision(4)),r=Xr(new $t(0,i.a,i.b)).clamp().roundToPrecision(4),n=Xr(new $t(50,i.a,i.b)).clamp().roundToPrecision(4),s=Xr(new $t(100,i.a,i.b)).clamp().roundToPrecision(4),l=new it(0,0,0),d=new it(1,1,1),u=s.equalValue(d)?0:14,p=r.equalValue(l)?0:14;for(let g=100+u;g>=0-p;g-=.5){let y;if(g<0){let B=g/p+1;y=qi(B,l,r)}else if(g<=50)y=qi(o.ramp(g),r,n);else if(g<=100)y=qi(o.ramp(g),n,s);else{let B=(g-100)/u;y=qi(B,s,d)}y=o.saturationBump(n,y).roundToPrecision(4),e.push(It.from(y))}return new o(t,e)}static adjustEnd(t,e,i,r){let n=r===-1?e.swatches:e.reversedSwatches,s=u=>{let p=e.closestIndexOf(u);return r===1?e.lastIndex-p:p};r===1&&i.reverse();let l=t(i[i.length-2]);if(xt(jo(i[i.length-1],i[i.length-2]),2)<l){i.pop();let u=e.colorContrast(n[e.lastIndex],l,void 0,r),p=s(u),g=s(i[i.length-2]),y=p-g,B=1;for(let j=i.length-y-1;j<i.length;j++){let Q=s(i[j]),ot=j===i.length-1?e.lastIndex:Q+B;i[j]=n[ot],B++}}r===1&&i.reverse()}static createColorPaletteByContrast(t,e){let i=o.createHighResolutionPalette(t),r=l=>{let d=e.stepContrast+e.stepContrast*(1-l.relativeLuminance)*e.stepContrastRamp;return xt(d,2)},n=[],s=e.preserveSource?t:i.swatches[0];n.push(s);do{let l=r(s);s=i.colorContrast(s,l,void 0,1),n.push(s)}while(s.relativeLuminance>0);if(e.preserveSource){s=t;do{let l=r(s);s=i.colorContrast(s,l,void 0,-1),n.unshift(s)}while(s.relativeLuminance<1)}return this.adjustEnd(r,i,n,-1),e.preserveSource&&this.adjustEnd(r,i,n,1),n}static from(t,e){let i=e===void 0?gd:Object.assign(Object.assign({},gd),e);return new o(t,Object.freeze(o.createColorPaletteByContrast(t,i)))}};var li=It.create(1,1,1),Wi=It.create(0,0,0),vd=It.create(.5,.5,.5),fa=Se("#0078D4"),bd=It.create(fa.r,fa.g,fa.b);function ma(o,t,e,i,r){let n=p=>p.contrast(li)>=r?li:Wi,s=n(o),l=n(t),d=s.relativeLuminance===l.relativeLuminance?s:n(e),u=n(i);return{rest:s,hover:l,active:d,focus:u}}var ci=class o{constructor(t,e,i,r){this.toColorString=()=>this.cssGradient,this.contrast=jo.bind(null,this),this.createCSS=this.toColorString,this.color=new it(t,e,i),this.cssGradient=r,this.relativeLuminance=Wr(this.color),this.r=t,this.g=e,this.b=i}static fromObject(t,e){return new o(t.r,t.g,t.b,e)}};var Ff=new it(0,0,0),Tf=new it(1,1,1);function ga(o,t,e,i,r,n,s,l,d=10,u=!1){let p=o.closestIndexOf(t);l===void 0&&(l=Zt(t));function g(ve){if(u){let oo=o.closestIndexOf(t),To=o.get(oo),be=ve.relativeLuminance<t.relativeLuminance?Ff:Tf,cr=cd(Se(ve.toColorString()),Se(To.toColorString()),be).roundToPrecision(2),ts=pd(Se(t.toColorString()),cr);return It.from(ts)}else return ve}let y=p+l*e,B=y+l*(i-e),j=y+l*(r-e),Q=y+l*(n-e),ot=l===-1?0:100-d,ie=l===-1?d:100;function Dt(ve,oo){let To=o.get(ve);if(oo){let be=o.get(ve+l*s),cr=l===-1?be:To,ts=l===-1?To:be,op=`linear-gradient(${g(cr).toColorString()} ${ot}%, ${g(ts).toColorString()} ${ie}%)`;return ci.fromObject(cr,op)}else return g(To)}return{rest:Dt(y,!0),hover:Dt(B,!0),active:Dt(j,!1),focus:Dt(Q,!0)}}function xd(o,t,e,i,r,n,s,l){let d=o.closestIndexOf(t),u=Zt(t),p=d+u*e,g=p+u*(i-e),y=p+u*(r-e),B=p+u*(n-e),j=`calc(100% - ${l})`;function Q(ot,ie){let Dt=o.get(ot);if(ie){let ve=o.get(ot+u*s),oo=`linear-gradient(${Dt.toColorString()} ${j}, ${ve.toColorString()} ${j}, ${ve.toColorString()})`;return ci.fromObject(Dt,oo)}else return Dt}return{rest:Q(p,!0),hover:Q(g,!0),active:Q(y,!1),focus:Q(B,!0)}}function yd(o,t,e){return o.colorContrast(t,e)}function Uo(o,t,e,i,r,n,s,l){l==null&&(l=Zt(t));let d=o.closestIndexOf(o.colorContrast(t,e));return{rest:o.get(d+l*i),hover:o.get(d+l*r),active:o.get(d+l*n),focus:o.get(d+l*s)}}function wd(o,t,e,i,r,n,s,l=void 0,d,u,p,g,y,B=void 0){return We(t)?Uo(o,t,d,u,p,g,y,B):Uo(o,t,e,i,r,n,s,l)}function $d(o,t,e){return o.get(o.closestIndexOf(t)+Zt(t)*e)}function Xe(o,t,e,i,r,n,s){let l=o.closestIndexOf(t);return s==null&&(s=Zt(t)),{rest:o.get(l+s*e),hover:o.get(l+s*i),active:o.get(l+s*r),focus:o.get(l+s*n)}}function Jr(o,t,e,i,r,n,s=void 0,l,d,u,p,g=void 0){return We(t)?Xe(o,t,l,d,u,p,g):Xe(o,t,e,i,r,n,s)}function kd(o,t){return We(t)?li:Wi}function Cd(o,t,e){return We(t)?Wi:li}function Sd(o){return It.create(o,o,o)}var Kr;(function(o){o[o.LightMode=.98]="LightMode",o[o.DarkMode=.15]="DarkMode"})(Kr||(Kr={}));function Ye(o,t){return o.closestIndexOf(Sd(t))}function Fd(o,t){return o.get(Ye(o,t))}function Td(o,t,e){return o.get(Ye(o,t)+e)}function va(o,t,e){return o.get(Ye(o,t)+e*-1)}function Rd(o,t,e){return o.get(Ye(o,t)+e*-1*2)}function Id(o,t,e){return o.get(Ye(o,t)+e*-1*3)}var Dd={Thin:100,ExtraLight:200,Light:300,Normal:400,Medium:500,SemiBold:600,Bold:700,ExtraBold:800,Black:900};var{create:b}=q;function k(o){return q.create({name:o,cssCustomPropertyName:null})}var di=b("direction").withDefault(W.ltr),nt=b("disabled-opacity").withDefault(.3),$o=b("base-height-multiplier").withDefault(8),Vd=b("base-horizontal-spacing-multiplier").withDefault(3),Pt=b("density").withDefault(0),x=b("design-unit").withDefault(4),P=b("control-corner-radius").withDefault(4),Gt=b("layer-corner-radius").withDefault(8),C=b("stroke-width").withDefault(1),ct=b("focus-stroke-width").withDefault(2),Ht=b("body-font").withDefault('"Segoe UI Variable", "Segoe UI", sans-serif'),Rf=b("font-weight").withDefault(Dd.Normal);function Ze(o){return t=>{let e=o.getValueFor(t),i=Rf.getValueFor(t);if(e.endsWith("px")){let r=Number.parseFloat(e.replace("px",""));if(r<=12)return`"wght" ${i}, "opsz" 8`;if(r>24)return`"wght" ${i}, "opsz" 36`}return`"wght" ${i}, "opsz" 10.5`}}var Xi=b("type-ramp-base-font-size").withDefault("14px"),ln=b("type-ramp-base-line-height").withDefault("20px"),Pd=b("type-ramp-base-font-variations").withDefault(Ze(Xi)),Yi=b("type-ramp-minus-1-font-size").withDefault("12px"),hi=b("type-ramp-minus-1-line-height").withDefault("16px"),Hd=b("type-ramp-minus-1-font-variations").withDefault(Ze(Yi)),Qi=b("type-ramp-minus-2-font-size").withDefault("10px"),cn=b("type-ramp-minus-2-line-height").withDefault("14px"),Bd=b("type-ramp-minus-2-font-variations").withDefault(Ze(Qi)),Zi=b("type-ramp-plus-1-font-size").withDefault("16px"),dn=b("type-ramp-plus-1-line-height").withDefault("22px"),Md=b("type-ramp-plus-1-font-variations").withDefault(Ze(Zi)),Ji=b("type-ramp-plus-2-font-size").withDefault("20px"),hn=b("type-ramp-plus-2-line-height").withDefault("26px"),zd=b("type-ramp-plus-2-font-variations").withDefault(Ze(Ji)),Ki=b("type-ramp-plus-3-font-size").withDefault("24px"),un=b("type-ramp-plus-3-line-height").withDefault("32px"),Nd=b("type-ramp-plus-3-font-variations").withDefault(Ze(Ki)),tr=b("type-ramp-plus-4-font-size").withDefault("28px"),pn=b("type-ramp-plus-4-line-height").withDefault("36px"),_d=b("type-ramp-plus-4-font-variations").withDefault(Ze(tr)),er=b("type-ramp-plus-5-font-size").withDefault("32px"),fn=b("type-ramp-plus-5-line-height").withDefault("40px"),jd=b("type-ramp-plus-5-font-variations").withDefault(Ze(er)),or=b("type-ramp-plus-6-font-size").withDefault("40px"),mn=b("type-ramp-plus-6-line-height").withDefault("52px"),Gd=b("type-ramp-plus-6-font-variations").withDefault(Ze(or)),ko=b("base-layer-luminance").withDefault(Kr.LightMode),on=k("accent-fill-rest-delta").withDefault(0),rn=k("accent-fill-hover-delta").withDefault(-2),nn=k("accent-fill-active-delta").withDefault(-5),sn=k("accent-fill-focus-delta").withDefault(0),ba=k("accent-foreground-rest-delta").withDefault(0),xa=k("accent-foreground-hover-delta").withDefault(3),ya=k("accent-foreground-active-delta").withDefault(-8),wa=k("accent-foreground-focus-delta").withDefault(0),$a=k("neutral-fill-rest-delta").withDefault(-1),ka=k("neutral-fill-hover-delta").withDefault(1),Ca=k("neutral-fill-active-delta").withDefault(0),Sa=k("neutral-fill-focus-delta").withDefault(0),Fa=k("neutral-fill-input-rest-delta").withDefault(-1),Ta=k("neutral-fill-input-hover-delta").withDefault(1),Ra=k("neutral-fill-input-active-delta").withDefault(0),Ia=k("neutral-fill-input-focus-delta").withDefault(-2),tn=k("neutral-fill-input-alt-rest-delta").withDefault(2),Ad=k("neutral-fill-input-alt-hover-delta").withDefault(4),Od=k("neutral-fill-input-alt-active-delta").withDefault(6),Ed=k("neutral-fill-input-alt-focus-delta").withDefault(2),Qe=k("neutral-fill-layer-rest-delta").withDefault(-2),If=k("neutral-fill-layer-hover-delta").withDefault(-3),Df=k("neutral-fill-layer-active-delta").withDefault(-3),en=k("neutral-fill-layer-alt-rest-delta").withDefault(-1),Af=k("neutral-fill-secondary-rest-delta").withDefault(3),Of=k("neutral-fill-secondary-hover-delta").withDefault(2),Ef=k("neutral-fill-secondary-active-delta").withDefault(1),Lf=k("neutral-fill-secondary-focus-delta").withDefault(3),Da=k("neutral-fill-stealth-rest-delta").withDefault(0),Aa=k("neutral-fill-stealth-hover-delta").withDefault(3),Oa=k("neutral-fill-stealth-active-delta").withDefault(2),Ea=k("neutral-fill-stealth-focus-delta").withDefault(0),Vf=k("neutral-fill-strong-rest-delta").withDefault(0),La=k("neutral-fill-strong-hover-delta").withDefault(8),Va=k("neutral-fill-strong-active-delta").withDefault(-5),Pa=k("neutral-fill-strong-focus-delta").withDefault(0),Ha=k("neutral-stroke-rest-delta").withDefault(8),Ba=k("neutral-stroke-hover-delta").withDefault(12),Ma=k("neutral-stroke-active-delta").withDefault(6),za=k("neutral-stroke-focus-delta").withDefault(8),Ud=k("neutral-stroke-control-rest-delta").withDefault(3),qd=k("neutral-stroke-control-hover-delta").withDefault(5),Wd=k("neutral-stroke-control-active-delta").withDefault(5),Xd=k("neutral-stroke-control-focus-delta").withDefault(5),Na=k("neutral-stroke-divider-rest-delta").withDefault(4),Ld=k("neutral-stroke-layer-rest-delta").withDefault(3),Pf=k("neutral-stroke-layer-hover-delta").withDefault(3),Hf=k("neutral-stroke-layer-active-delta").withDefault(3),Bf=k("neutral-stroke-strong-hover-delta").withDefault(0),Mf=k("neutral-stroke-strong-active-delta").withDefault(0),zf=k("neutral-stroke-strong-focus-delta").withDefault(0),_a=b("neutral-base-color").withDefault(vd),rt=k("neutral-palette").withDefault(o=>Go.from(_a.getValueFor(o))),ja=b("accent-base-color").withDefault(bd),Ga=k("accent-palette").withDefault(o=>Go.from(ja.getValueFor(o))),Nf=k("neutral-layer-card-container-recipe").withDefault({evaluate:o=>va(rt.getValueFor(o),ko.getValueFor(o),Qe.getValueFor(o))}),$T=b("neutral-layer-card-container").withDefault(o=>Nf.getValueFor(o).evaluate(o)),_f=k("neutral-layer-floating-recipe").withDefault({evaluate:o=>Td(rt.getValueFor(o),ko.getValueFor(o),Qe.getValueFor(o))}),De=b("neutral-layer-floating").withDefault(o=>_f.getValueFor(o).evaluate(o)),jf=k("neutral-layer-1-recipe").withDefault({evaluate:o=>Fd(rt.getValueFor(o),ko.getValueFor(o))}),Gf=b("neutral-layer-1").withDefault(o=>jf.getValueFor(o).evaluate(o)),Uf=k("neutral-layer-2-recipe").withDefault({evaluate:o=>va(rt.getValueFor(o),ko.getValueFor(o),Qe.getValueFor(o))}),kT=b("neutral-layer-2").withDefault(o=>Uf.getValueFor(o).evaluate(o)),qf=k("neutral-layer-3-recipe").withDefault({evaluate:o=>Rd(rt.getValueFor(o),ko.getValueFor(o),Qe.getValueFor(o))}),CT=b("neutral-layer-3").withDefault(o=>qf.getValueFor(o).evaluate(o)),Wf=k("neutral-layer-4-recipe").withDefault({evaluate:o=>Id(rt.getValueFor(o),ko.getValueFor(o),Qe.getValueFor(o))}),ST=b("neutral-layer-4").withDefault(o=>Wf.getValueFor(o).evaluate(o)),L=b("fill-color").withDefault(o=>Gf.getValueFor(o)),an;(function(o){o[o.normal=4.5]="normal",o[o.large=3]="large"})(an||(an={}));var gn=k("accent-fill-recipe").withDefault({evaluate:(o,t)=>wd(Ga.getValueFor(o),t||L.getValueFor(o),5,on.getValueFor(o),rn.getValueFor(o),nn.getValueFor(o),sn.getValueFor(o),void 0,8,on.getValueFor(o),rn.getValueFor(o),nn.getValueFor(o),sn.getValueFor(o),void 0)}),G=b("accent-fill-rest").withDefault(o=>gn.getValueFor(o).evaluate(o).rest),Bt=b("accent-fill-hover").withDefault(o=>gn.getValueFor(o).evaluate(o).hover),Mt=b("accent-fill-active").withDefault(o=>gn.getValueFor(o).evaluate(o).active),vn=b("accent-fill-focus").withDefault(o=>gn.getValueFor(o).evaluate(o).focus),bn=k("foreground-on-accent-recipe").withDefault({evaluate:o=>ma(G.getValueFor(o),Bt.getValueFor(o),Mt.getValueFor(o),vn.getValueFor(o),an.normal)}),oe=b("foreground-on-accent-rest").withDefault(o=>bn.getValueFor(o).evaluate(o).rest),xn=b("foreground-on-accent-hover").withDefault(o=>bn.getValueFor(o).evaluate(o).hover),yn=b("foreground-on-accent-active").withDefault(o=>bn.getValueFor(o).evaluate(o).active),FT=b("foreground-on-accent-focus").withDefault(o=>bn.getValueFor(o).evaluate(o).focus),wn=k("accent-foreground-recipe").withDefault({evaluate:(o,t)=>Uo(Ga.getValueFor(o),t||L.getValueFor(o),9.5,ba.getValueFor(o),xa.getValueFor(o),ya.getValueFor(o),wa.getValueFor(o))}),Ua=b("accent-foreground-rest").withDefault(o=>wn.getValueFor(o).evaluate(o).rest),qa=b("accent-foreground-hover").withDefault(o=>wn.getValueFor(o).evaluate(o).hover),Wa=b("accent-foreground-active").withDefault(o=>wn.getValueFor(o).evaluate(o).active),TT=b("accent-foreground-focus").withDefault(o=>wn.getValueFor(o).evaluate(o).focus),$n=k("accent-stroke-control-recipe").withDefault({evaluate:(o,t)=>ga(rt.getValueFor(o),t||L.getValueFor(o),-3,-3,-3,-3,10,1,void 0,!0)}),Yd=b("accent-stroke-control-rest").withDefault(o=>$n.getValueFor(o).evaluate(o,G.getValueFor(o)).rest),Qd=b("accent-stroke-control-hover").withDefault(o=>$n.getValueFor(o).evaluate(o,Bt.getValueFor(o)).hover),Zd=b("accent-stroke-control-active").withDefault(o=>$n.getValueFor(o).evaluate(o,Mt.getValueFor(o)).active),RT=b("accent-stroke-control-focus").withDefault(o=>$n.getValueFor(o).evaluate(o,vn.getValueFor(o)).focus),kn=k("neutral-fill-recipe").withDefault({evaluate:(o,t)=>Jr(rt.getValueFor(o),t||L.getValueFor(o),$a.getValueFor(o),ka.getValueFor(o),Ca.getValueFor(o),Sa.getValueFor(o),void 0,2,3,1,2,void 0)}),Ut=b("neutral-fill-rest").withDefault(o=>kn.getValueFor(o).evaluate(o).rest),Xa=b("neutral-fill-hover").withDefault(o=>kn.getValueFor(o).evaluate(o).hover),Ya=b("neutral-fill-active").withDefault(o=>kn.getValueFor(o).evaluate(o).active),IT=b("neutral-fill-focus").withDefault(o=>kn.getValueFor(o).evaluate(o).focus),Ae=k("neutral-fill-input-recipe").withDefault({evaluate:(o,t)=>Jr(rt.getValueFor(o),t||L.getValueFor(o),Fa.getValueFor(o),Ta.getValueFor(o),Ra.getValueFor(o),Ia.getValueFor(o),void 0,2,3,1,0,void 0)}),ir=b("neutral-fill-input-rest").withDefault(o=>Ae.getValueFor(o).evaluate(o).rest),Qa=b("neutral-fill-input-hover").withDefault(o=>Ae.getValueFor(o).evaluate(o).hover),DT=b("neutral-fill-input-active").withDefault(o=>Ae.getValueFor(o).evaluate(o).active),Za=b("neutral-fill-input-focus").withDefault(o=>Ae.getValueFor(o).evaluate(o).focus),Cn=k("neutral-fill-input-alt-recipe").withDefault({evaluate:(o,t)=>Jr(rt.getValueFor(o),t||L.getValueFor(o),tn.getValueFor(o),Ad.getValueFor(o),Od.getValueFor(o),Ed.getValueFor(o),1,tn.getValueFor(o),tn.getValueFor(o)-Ad.getValueFor(o),tn.getValueFor(o)-Od.getValueFor(o),Ed.getValueFor(o),1)}),ui=b("neutral-fill-input-alt-rest").withDefault(o=>Cn.getValueFor(o).evaluate(o).rest),pi=b("neutral-fill-input-alt-hover").withDefault(o=>Cn.getValueFor(o).evaluate(o).hover),fi=b("neutral-fill-input-alt-active").withDefault(o=>Cn.getValueFor(o).evaluate(o).active),mi=b("neutral-fill-input-alt-focus").withDefault(o=>Cn.getValueFor(o).evaluate(o).focus),Je=k("neutral-fill-layer-recipe").withDefault({evaluate:(o,t)=>Xe(rt.getValueFor(o),t||L.getValueFor(o),Qe.getValueFor(o),If.getValueFor(o),Df.getValueFor(o),Qe.getValueFor(o),1)}),Jd=b("neutral-fill-layer-rest").withDefault(o=>Je.getValueFor(o).evaluate(o).rest),AT=b("neutral-fill-layer-hover").withDefault(o=>Je.getValueFor(o).evaluate(o).hover),OT=b("neutral-fill-layer-active").withDefault(o=>Je.getValueFor(o).evaluate(o).active),Xf=k("neutral-fill-layer-alt-recipe").withDefault({evaluate:(o,t)=>Xe(rt.getValueFor(o),t||L.getValueFor(o),en.getValueFor(o),en.getValueFor(o),en.getValueFor(o),en.getValueFor(o))}),Kd=b("neutral-fill-layer-alt-rest").withDefault(o=>Xf.getValueFor(o).evaluate(o).rest),Ke=k("neutral-fill-secondary-recipe").withDefault({evaluate:(o,t)=>Xe(rt.getValueFor(o),t||L.getValueFor(o),Af.getValueFor(o),Of.getValueFor(o),Ef.getValueFor(o),Lf.getValueFor(o))}),pe=b("neutral-fill-secondary-rest").withDefault(o=>Ke.getValueFor(o).evaluate(o).rest),gi=b("neutral-fill-secondary-hover").withDefault(o=>Ke.getValueFor(o).evaluate(o).hover),th=b("neutral-fill-secondary-active").withDefault(o=>Ke.getValueFor(o).evaluate(o).active),eh=b("neutral-fill-secondary-focus").withDefault(o=>Ke.getValueFor(o).evaluate(o).focus),Jt=k("neutral-fill-stealth-recipe").withDefault({evaluate:(o,t)=>Xe(rt.getValueFor(o),t||L.getValueFor(o),Da.getValueFor(o),Aa.getValueFor(o),Oa.getValueFor(o),Ea.getValueFor(o))}),to=b("neutral-fill-stealth-rest").withDefault(o=>Jt.getValueFor(o).evaluate(o).rest),Oe=b("neutral-fill-stealth-hover").withDefault(o=>Jt.getValueFor(o).evaluate(o).hover),Ee=b("neutral-fill-stealth-active").withDefault(o=>Jt.getValueFor(o).evaluate(o).active),oh=b("neutral-fill-stealth-focus").withDefault(o=>Jt.getValueFor(o).evaluate(o).focus),Sn=k("neutral-fill-strong-recipe").withDefault({evaluate:(o,t)=>Uo(rt.getValueFor(o),t||L.getValueFor(o),4.5,Vf.getValueFor(o),La.getValueFor(o),Va.getValueFor(o),Pa.getValueFor(o))}),Fn=b("neutral-fill-strong-rest").withDefault(o=>Sn.getValueFor(o).evaluate(o).rest),ih=b("neutral-fill-strong-hover").withDefault(o=>Sn.getValueFor(o).evaluate(o).hover),rh=b("neutral-fill-strong-active").withDefault(o=>Sn.getValueFor(o).evaluate(o).active),ET=b("neutral-fill-strong-focus").withDefault(o=>Sn.getValueFor(o).evaluate(o).focus),Tn=k("neutral-foreground-recipe").withDefault({evaluate:(o,t)=>Uo(rt.getValueFor(o),t||L.getValueFor(o),16,0,-19,-30,0)}),H=b("neutral-foreground-rest").withDefault(o=>Tn.getValueFor(o).evaluate(o).rest),nh=b("neutral-foreground-hover").withDefault(o=>Tn.getValueFor(o).evaluate(o).hover),sh=b("neutral-foreground-active").withDefault(o=>Tn.getValueFor(o).evaluate(o).active),LT=b("neutral-foreground-focus").withDefault(o=>Tn.getValueFor(o).evaluate(o).focus),vi=k("neutral-foreground-hint-recipe").withDefault({evaluate:(o,t)=>yd(rt.getValueFor(o),t||L.getValueFor(o),4.5)}),Le=b("neutral-foreground-hint").withDefault(o=>vi.getValueFor(o).evaluate(o)),Rn=k("neutral-stroke-recipe").withDefault({evaluate:(o,t)=>Xe(rt.getValueFor(o),t||L.getValueFor(o),Ha.getValueFor(o),Ba.getValueFor(o),Ma.getValueFor(o),za.getValueFor(o))}),Co=b("neutral-stroke-rest").withDefault(o=>Rn.getValueFor(o).evaluate(o).rest),ah=b("neutral-stroke-hover").withDefault(o=>Rn.getValueFor(o).evaluate(o).hover),lh=b("neutral-stroke-active").withDefault(o=>Rn.getValueFor(o).evaluate(o).active),VT=b("neutral-stroke-focus").withDefault(o=>Rn.getValueFor(o).evaluate(o).focus),In=k("neutral-stroke-control-recipe").withDefault({evaluate:(o,t)=>ga(rt.getValueFor(o),t||L.getValueFor(o),Ud.getValueFor(o),qd.getValueFor(o),Wd.getValueFor(o),Xd.getValueFor(o),5)}),bi=b("neutral-stroke-control-rest").withDefault(o=>In.getValueFor(o).evaluate(o).rest),Dn=b("neutral-stroke-control-hover").withDefault(o=>In.getValueFor(o).evaluate(o).hover),An=b("neutral-stroke-control-active").withDefault(o=>In.getValueFor(o).evaluate(o).active),PT=b("neutral-stroke-control-focus").withDefault(o=>In.getValueFor(o).evaluate(o).focus),Yf=k("neutral-stroke-divider-recipe").withDefault({evaluate:(o,t)=>$d(rt.getValueFor(o),t||L.getValueFor(o),Na.getValueFor(o))}),xi=b("neutral-stroke-divider-rest").withDefault(o=>Yf.getValueFor(o).evaluate(o)),On=k("neutral-stroke-input-recipe").withDefault({evaluate:(o,t)=>xd(rt.getValueFor(o),t||L.getValueFor(o),Ud.getValueFor(o),qd.getValueFor(o),Wd.getValueFor(o),Xd.getValueFor(o),20,C.getValueFor(o)+"px")}),Ja=b("neutral-stroke-input-rest").withDefault(o=>On.getValueFor(o).evaluate(o).rest),ch=b("neutral-stroke-input-hover").withDefault(o=>On.getValueFor(o).evaluate(o).hover),HT=b("neutral-stroke-input-active").withDefault(o=>On.getValueFor(o).evaluate(o).active),BT=b("neutral-stroke-input-focus").withDefault(o=>On.getValueFor(o).evaluate(o).focus),Ka=k("neutral-stroke-layer-recipe").withDefault({evaluate:(o,t)=>Xe(rt.getValueFor(o),t||L.getValueFor(o),Ld.getValueFor(o),Pf.getValueFor(o),Hf.getValueFor(o),Ld.getValueFor(o))}),eo=b("neutral-stroke-layer-rest").withDefault(o=>Ka.getValueFor(o).evaluate(o).rest),MT=b("neutral-stroke-layer-hover").withDefault(o=>Ka.getValueFor(o).evaluate(o).hover),zT=b("neutral-stroke-layer-active").withDefault(o=>Ka.getValueFor(o).evaluate(o).active),En=k("neutral-stroke-strong-recipe").withDefault({evaluate:(o,t)=>Uo(rt.getValueFor(o),t||L.getValueFor(o),5.5,0,Bf.getValueFor(o),Mf.getValueFor(o),zf.getValueFor(o))}),fe=b("neutral-stroke-strong-rest").withDefault(o=>En.getValueFor(o).evaluate(o).rest),yi=b("neutral-stroke-strong-hover").withDefault(o=>En.getValueFor(o).evaluate(o).hover),wi=b("neutral-stroke-strong-active").withDefault(o=>En.getValueFor(o).evaluate(o).active),NT=b("neutral-stroke-strong-focus").withDefault(o=>En.getValueFor(o).evaluate(o).focus),Qf=k("focus-stroke-outer-recipe").withDefault({evaluate:o=>kd(rt.getValueFor(o),L.getValueFor(o))}),$i=b("focus-stroke-outer").withDefault(o=>Qf.getValueFor(o).evaluate(o)),Zf=k("focus-stroke-inner-recipe").withDefault({evaluate:o=>Cd(Ga.getValueFor(o),L.getValueFor(o),$i.getValueFor(o))}),dh=b("focus-stroke-inner").withDefault(o=>Zf.getValueFor(o).evaluate(o)),Ln=k("foreground-on-accent-large-recipe").withDefault({evaluate:o=>ma(G.getValueFor(o),Bt.getValueFor(o),Mt.getValueFor(o),vn.getValueFor(o),an.large)}),_T=b("foreground-on-accent-rest-large").withDefault(o=>Ln.getValueFor(o).evaluate(o).rest),jT=b("foreground-on-accent-hover-large").withDefault(o=>Ln.getValueFor(o).evaluate(o,Bt.getValueFor(o)).hover),GT=b("foreground-on-accent-active-large").withDefault(o=>Ln.getValueFor(o).evaluate(o,Mt.getValueFor(o)).active),UT=b("foreground-on-accent-focus-large").withDefault(o=>Ln.getValueFor(o).evaluate(o,vn.getValueFor(o)).focus),Jf=b("neutral-fill-inverse-rest-delta").withDefault(0),Kf=b("neutral-fill-inverse-hover-delta").withDefault(-3),tm=b("neutral-fill-inverse-active-delta").withDefault(7),em=b("neutral-fill-inverse-focus-delta").withDefault(0);function om(o,t,e,i,r,n){let s=Zt(t),l=o.closestIndexOf(o.colorContrast(t,14)),d=l+s*Math.abs(e-i),u=s===1?e<i:s*e>s*i,p,g;return u?(p=l,g=d):(p=d,g=l),{rest:o.get(p),hover:o.get(g),active:o.get(p+s*r),focus:o.get(p+s*n)}}var Vn=k("neutral-fill-inverse-recipe").withDefault({evaluate:(o,t)=>om(rt.getValueFor(o),t||L.getValueFor(o),Jf.getValueFor(o),Kf.getValueFor(o),tm.getValueFor(o),em.getValueFor(o))}),qT=b("neutral-fill-inverse-rest").withDefault(o=>Vn.getValueFor(o).evaluate(o).rest),WT=b("neutral-fill-inverse-hover").withDefault(o=>Vn.getValueFor(o).evaluate(o).hover),XT=b("neutral-fill-inverse-active").withDefault(o=>Vn.getValueFor(o).evaluate(o).active),YT=b("neutral-fill-inverse-focus").withDefault(o=>Vn.getValueFor(o).evaluate(o).focus);var N=kt`
  font-family: ${Ht};
  font-size: ${Xi};
  line-height: ${ln};
  font-weight: initial;
  font-variation-settings: ${Pd};
`,Pn=kt`
  font-family: ${Ht};
  font-size: ${Yi};
  line-height: ${hi};
  font-weight: initial;
  font-variation-settings: ${Hd};
`,KT=kt`
  font-family: ${Ht};
  font-size: ${Qi};
  line-height: ${cn};
  font-weight: initial;
  font-variation-settings: ${Bd};
`,tR=kt`
  font-family: ${Ht};
  font-size: ${Zi};
  line-height: ${dn};
  font-weight: initial;
  font-variation-settings: ${Md};
`,eR=kt`
  font-family: ${Ht};
  font-size: ${Ji};
  line-height: ${hn};
  font-weight: initial;
  font-variation-settings: ${zd};
`,oR=kt`
  font-family: ${Ht};
  font-size: ${Ki};
  line-height: ${un};
  font-weight: initial;
  font-variation-settings: ${Nd};
`,iR=kt`
  font-family: ${Ht};
  font-size: ${tr};
  line-height: ${pn};
  font-weight: initial;
  font-variation-settings: ${_d};
`,rR=kt`
  font-family: ${Ht};
  font-size: ${er};
  line-height: ${fn};
  font-weight: initial;
  font-variation-settings: ${jd};
`,nR=kt`
  font-family: ${Ht};
  font-size: ${or};
  line-height: ${mn};
  font-weight: initial;
  font-variation-settings: ${Gd};
`;var hh=(o,t)=>m`
    ${T("flex")} :host {
      box-sizing: border-box;
      flex-direction: column;
      ${N}
      color: ${H};
      gap: calc(${x} * 1px);
    }
  `;var dt=kt`
  outline: calc(${ct} * 1px) solid ${$i};
  outline-offset: calc(${ct} * -1px);
`,Ve=kt`
  outline: calc(${ct} * 1px) solid ${$i};
  outline-offset: calc(${C} * 1px);
`;var E=kt`(${$o} + ${Pt}) * ${x}`;var im=q.create("neutral-fill-stealth-rest-on-neutral-fill-layer-rest").withDefault(o=>{let t=Je.getValueFor(o);return Jt.getValueFor(o).evaluate(o,t.evaluate(o).rest).rest}),rm=q.create("neutral-fill-stealth-hover-on-neutral-fill-layer-rest").withDefault(o=>{let t=Je.getValueFor(o);return Jt.getValueFor(o).evaluate(o,t.evaluate(o).rest).hover}),nm=q.create("neutral-fill-stealth-active-on-neutral-fill-layer-rest").withDefault(o=>{let t=Je.getValueFor(o);return Jt.getValueFor(o).evaluate(o,t.evaluate(o).rest).active}),uh=(o,t)=>m`
    ${T("flex")} :host {
      box-sizing: border-box;
      ${N};
      flex-direction: column;
      background: ${Jd};
      color: ${H};
      border: calc(${C} * 1px) solid ${eo};
      border-radius: calc(${Gt} * 1px);
    }

    .region {
      display: none;
      padding: calc(${x} * 2 * 1px);
      background: ${Kd};
    }

    .heading {
      display: grid;
      position: relative;
      grid-template-columns: auto 1fr auto auto;
      align-items: center;
    }

    .button {
      appearance: none;
      border: none;
      background: none;
      grid-column: 2;
      grid-row: 1;
      outline: none;
      margin: calc(${x} * 3 * 1px) 0;
      padding: 0 calc(${x} * 2 * 1px);
      text-align: left;
      color: inherit;
      cursor: pointer;
      font: inherit;
    }

    .button::before {
      content: '';
      position: absolute;
      top: calc(${C} * -1px);
      left: calc(${C} * -1px);
      right: calc(${C} * -1px);
      bottom: calc(${C} * -1px);
      cursor: pointer;
    }

    .button:${O}::before {
      ${dt}
      border-radius: calc(${Gt} * 1px);
    }

    :host(.expanded) .button:${O}::before {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    :host(.expanded) .region {
      display: block;
      border-top: calc(${C} * 1px) solid ${eo};
      border-bottom-left-radius: calc((${Gt} - ${C}) * 1px);
      border-bottom-right-radius: calc((${Gt} - ${C}) * 1px);
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      grid-column: 4;
      pointer-events: none;
      background: ${im};
      border-radius: calc(${P} * 1px);
      fill: currentcolor;
      width: calc(${E} * 1px);
      height: calc(${E} * 1px);
      margin: calc(${x} * 2 * 1px);
    }

    .heading:hover .icon {
      background: ${rm};
    }

    .heading:active .icon {
      background: ${nm};
    }

    slot[name='collapsed-icon'] {
      display: flex;
    }

    :host(.expanded) slot[name='collapsed-icon'] {
      display: none;
    }

    slot[name='expanded-icon'] {
      display: none;
    }

    :host(.expanded) slot[name='expanded-icon'] {
      display: flex;
    }

    .start {
      display: flex;
      align-items: center;
      padding-inline-start: calc(${x} * 2 * 1px);
      justify-content: center;
      grid-column: 1;
    }

    .end {
      display: flex;
      align-items: center;
      justify-content: center;
      grid-column: 3;
    }

    .icon,
    .start,
    .end {
      position: relative;
    }
  `.withBehaviors(I(m`
        .button:${O}::before {
          outline-color: ${h.Highlight};
        }
        .icon {
          fill: ${h.ButtonText};
        }
      `));var ph=ye.compose({baseName:"accordion-item",template:Hl,styles:uh,collapsedIcon:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>
    </svg>
  `,expandedIcon:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 7.35c.2.2.5.2.7 0L6 4.21l3.15 3.14a.5.5 0 10.7-.7l-3.5-3.5a.5.5 0 00-.7 0l-3.5 3.5a.5.5 0 000 .7z"/>
    </svg>
  `});var fh=ti.compose({baseName:"accordion",template:Zl,styles:hh});function $(o,t,e,i){var r=arguments.length,n=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,i);else for(var l=o.length-1;l>=0;l--)(s=o[l])&&(n=(r<3?s(n):r>3?s(t,e,n):s(t,e))||n);return r>3&&n&&Object.defineProperty(t,e,n),n}var Kt=class{constructor(t,e){this.cache=new WeakMap,this.ltr=t,this.rtl=e}bind(t){this.attach(t)}unbind(t){let e=this.cache.get(t);e&&di.unsubscribe(e)}attach(t){let e=this.cache.get(t)||new tl(this.ltr,this.rtl,t),i=di.getValueFor(t);di.subscribe(e),e.attach(i),this.cache.set(t,e)}},tl=class{constructor(t,e,i){this.ltr=t,this.rtl=e,this.source=i,this.attached=null}handleChange({target:t,token:e}){this.attach(e.getValueFor(this.source))}attach(t){this.attached!==this[t]&&(this.attached!==null&&this.source.$fastController.removeStyles(this.attached),this.attached=this[t],this.attached!==null&&this.source.$fastController.addStyles(this.attached))}};var sm="0 0 2px rgba(0, 0, 0, 0.14)",am="0 calc(var(--elevation) * 0.5px) calc((var(--elevation) * 1px)) rgba(0, 0, 0, 0.2)",HR=`box-shadow: ${sm}, ${am};`,qo=q.create({name:"elevation-shadow",cssCustomPropertyName:null}).withDefault({evaluate:(o,t,e)=>{let i=.12,r=.14;t>16&&(i=.2,r=.24);let n=`0 0 2px rgba(0, 0, 0, ${i})`,s=`0 calc(${t} * 0.5px) calc((${t} * 1px)) rgba(0, 0, 0, ${r})`;return`${n}, ${s}`}}),lm=q.create("elevation-shadow-card-rest-size").withDefault(4),cm=q.create("elevation-shadow-card-hover-size").withDefault(8),dm=q.create("elevation-shadow-card-active-size").withDefault(0),hm=q.create("elevation-shadow-card-focus-size").withDefault(8),mh=q.create("elevation-shadow-card-rest").withDefault(o=>qo.getValueFor(o).evaluate(o,lm.getValueFor(o))),BR=q.create("elevation-shadow-card-hover").withDefault(o=>qo.getValueFor(o).evaluate(o,cm.getValueFor(o))),MR=q.create("elevation-shadow-card-active").withDefault(o=>qo.getValueFor(o).evaluate(o,dm.getValueFor(o))),zR=q.create("elevation-shadow-card-focus").withDefault(o=>qo.getValueFor(o).evaluate(o,hm.getValueFor(o))),um=q.create("elevation-shadow-tooltip-size").withDefault(16),gh=q.create("elevation-shadow-tooltip").withDefault(o=>qo.getValueFor(o).evaluate(o,um.getValueFor(o))),pm=q.create("elevation-shadow-flyout-size").withDefault(32),Hn=q.create("elevation-shadow-flyout").withDefault(o=>qo.getValueFor(o).evaluate(o,pm.getValueFor(o))),fm=q.create("elevation-shadow-dialog-size").withDefault(128),vh=q.create("elevation-shadow-dialog").withDefault(o=>qo.getValueFor(o).evaluate(o,fm.getValueFor(o)));var Bn=(o,t,e,i="[disabled]")=>m`
    ${T("inline-flex")}
    
    :host {
      position: relative;
      box-sizing: border-box;
      ${N}
      height: calc(${E} * 1px);
      min-width: calc(${E} * 1px);
      color: ${H};
      border-radius: calc(${P} * 1px);
      fill: currentcolor;
    }

    .control {
      border: calc(${C} * 1px) solid transparent;
      flex-grow: 1;
      box-sizing: border-box;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 0 calc((10 + (${x} * 2 * ${Pt})) * 1px);
      white-space: nowrap;
      outline: none;
      text-decoration: none;
      color: inherit;
      border-radius: inherit;
      fill: inherit;
      font-family: inherit;
    }

    .control,
    .end,
    .start {
      font: inherit;
    }

    .control.icon-only {
      padding: 0;
      line-height: 0;
    }

    .control:${O} {
      ${dt}
    }

    .control::-moz-focus-inner {
      border: 0;
    }

    .content {
      pointer-events: none;
    }

    .start,
    .end {
      display: flex;
      pointer-events: none;
    }

    .start {
      margin-inline-end: 11px;
    }

    .end {
      margin-inline-start: 11px;
    }
  `,ki=(o,t,e,i="[disabled]")=>m`
    .control {
      background: padding-box linear-gradient(${Ut}, ${Ut}),
        border-box ${bi};
    }

    :host(${e}:hover) .control {
      background: padding-box linear-gradient(${Xa}, ${Xa}),
        border-box ${Dn};
    }

    :host(${e}:active) .control {
      background: padding-box linear-gradient(${Ya}, ${Ya}),
        border-box ${An};
    }

    :host(${i}) .control {
      background: padding-box linear-gradient(${Ut}, ${Ut}),
        border-box ${Co};
    }
  `.withBehaviors(I(m`
        .control {
          background: ${h.ButtonFace};
          border-color: ${h.ButtonText};
          color: ${h.ButtonText};
        }

        :host(${e}:hover) .control,
        :host(${e}:active) .control {
          forced-color-adjust: none;
          background: ${h.HighlightText};
          border-color: ${h.Highlight};
          color: ${h.Highlight};
        }

        :host(${i}) .control {
          background: transparent;
          border-color: ${h.GrayText};
          color: ${h.GrayText};
        }

        .control:${O} {
          outline-color: ${h.CanvasText};
        }

        :host([href]) .control {
          background: transparent;
          border-color: ${h.LinkText};
          color: ${h.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: transparent;
          border-color: ${h.CanvasText};
          color: ${h.CanvasText};
        }
    `)),Mn=(o,t,e,i="[disabled]")=>m`
    .control {
      background: padding-box linear-gradient(${G}, ${G}),
        border-box ${Yd};
      color: ${oe};
    }

    :host(${e}:hover) .control {
      background: padding-box linear-gradient(${Bt}, ${Bt}),
        border-box ${Qd};
      color: ${xn};
    }

    :host(${e}:active) .control {
      background: padding-box linear-gradient(${Mt}, ${Mt}),
        border-box ${Zd};
      color: ${yn};
    }

    :host(${i}) .control {
      background: ${G};
    }

    .control:${O} {
      box-shadow: 0 0 0 calc(${ct} * 1px) ${dh} inset !important;
    }
  `.withBehaviors(I(m`
        .control {
          forced-color-adjust: none;
          background: ${h.Highlight};
          color: ${h.HighlightText};
        }

        :host(${e}:hover) .control,
        :host(${e}:active) .control {
          background: ${h.HighlightText};
          border-color: ${h.Highlight};
          color: ${h.Highlight};
        }

        :host(${i}) .control {
          background: transparent;
          border-color: ${h.GrayText};
          color: ${h.GrayText};
        }

        .control:${O} {
          outline-color: ${h.CanvasText};
          box-shadow: 0 0 0 calc(${ct} * 1px) ${h.HighlightText} inset !important;
        }

        :host([href]) .control {
          background: ${h.LinkText};
          color: ${h.HighlightText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: ${h.ButtonFace};
          border-color: ${h.LinkText};
          color: ${h.LinkText};
        }
      `)),bh=(o,t,e,i="[disabled]")=>m`
    :host {
      height: auto;
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
      min-width: 0;
    }

    .control {
      display: inline;
      padding: 0;
      border: none;
      box-shadow: none;
      line-height: 1;
    }

    :host(${e}) .control {
      color: ${Ua};
      text-decoration: underline 1px;
    }

    :host(${e}:hover) .control {
      color: ${qa};
      text-decoration: none;
    }

    :host(${e}:active) .control {
      color: ${Wa};
      text-decoration: none;
    }

    .control:${O} {
      ${Ve}
    }
  `.withBehaviors(I(m`
        :host(${e}) .control {
          color: ${h.LinkText};
        }

        :host(${e}:hover) .control,
        :host(${e}:active) .control {
          color: ${h.CanvasText};
        }

        .control:${O} {
          outline-color: ${h.CanvasText};
        }
      `)),zn=(o,t,e,i="[disabled]")=>m`
    :host {
      color: ${Ua};
    }

    .control {
      background: ${to};
    }

    :host(${e}:hover) .control {
      background: ${Oe};
      color: ${qa};
    }

    :host(${e}:active) .control {
      background: ${Ee};
      color: ${Wa};
    }

    :host(${i}) .control {
      background: ${to};
    }
  `.withBehaviors(I(m`
        :host {
          color: ${h.ButtonText};
        }

        .control {
          forced-color-adjust: none;
          background: transparent;
        }

        :host(${e}:hover) .control,
        :host(${e}:active) .control {
          background: transparent;
          border-color: ${h.ButtonText};
          color: ${h.ButtonText};
        }

        :host(${i}) .control {
          background: transparent;
          color: ${h.GrayText};
        }

        .control:${O} {
          outline-color: ${h.CanvasText};
        }

        :host([href]) .control {
          color: ${h.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          border-color: ${h.LinkText};
          color: ${h.LinkText};
        }
      `)),Nn=(o,t,e,i="[disabled]")=>m`
    .control {
      background: transparent !important;
      border-color: ${Co};
    }

    :host(${e}:hover) .control {
      border-color: ${ah};
    }

    :host(${e}:active) .control {
      border-color: ${lh};
    }

    :host(${i}) .control {
      background: transparent !important;
      border-color: ${Co};
    }
  `.withBehaviors(I(m`
        .control {
          border-color: ${h.ButtonText};
          color: ${h.ButtonText};
        }

        :host(${e}:hover) .control,
        :host(${e}:active) .control {
          background: ${h.HighlightText};
          border-color: ${h.Highlight};
          color: ${h.Highlight};
        }

        :host(${i}) .control {
          border-color: ${h.GrayText};
          color: ${h.GrayText};
        }

        .control:${O} {
          outline-color: ${h.CanvasText};
        }

        :host([href]) .control {
          border-color: ${h.LinkText};
          color: ${h.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          border-color: ${h.CanvasText};
          color: ${h.CanvasText};
        }
      `)),Ci=(o,t,e,i="[disabled]")=>m`
    .control {
      background: ${to};
    }

    :host(${e}:hover) .control {
      background: ${Oe};
    }

    :host(${e}:active) .control {
      background: ${Ee};
    }

    :host(${i}) .control {
      background: ${to};
    }
  `.withBehaviors(I(m`
        .control {
          forced-color-adjust: none;
          background: transparent;
          color: ${h.ButtonText};
        }

        :host(${e}:hover) .control,
        :host(${e}:active) .control {
          background: transparent;
          border-color: ${h.ButtonText};
          color: ${h.ButtonText};
        }

        :host(${i}) .control {
          background: transparent;
          color: ${h.GrayText};
        }
        
        .control:${O} {
          outline-color: ${h.CanvasText};
        }

        :host([href]) .control {
          color: ${h.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: transparent;
          border-color: ${h.LinkText};
          color: ${h.LinkText};
        }
      `));var mm=q.create("input-placeholder-rest").withDefault(o=>{let t=Ae.getValueFor(o);return vi.getValueFor(o).evaluate(o,t.evaluate(o).rest)}),gm=q.create("input-placeholder-hover").withDefault(o=>{let t=Ae.getValueFor(o);return vi.getValueFor(o).evaluate(o,t.evaluate(o).hover)}),vm=q.create("input-filled-placeholder-rest").withDefault(o=>{let t=Ke.getValueFor(o);return vi.getValueFor(o).evaluate(o,t.evaluate(o).rest)}),bm=q.create("input-filled-placeholder-hover").withDefault(o=>{let t=Ke.getValueFor(o);return vi.getValueFor(o).evaluate(o,t.evaluate(o).hover)}),So=(o,t,e)=>m`
  :host {
    ${N}
    color: ${H};
    fill: currentcolor;
    user-select: none;
    position: relative;
  }

  ${e} {
    box-sizing: border-box;
    position: relative;
    color: inherit;
    border: calc(${C} * 1px) solid transparent;
    border-radius: calc(${P} * 1px);
    height: calc(${E} * 1px);
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  .control {
    width: 100%;
    outline: none;
  }

  .label {
    display: block;
    color: ${H};
    cursor: pointer;
    ${N}
    margin-bottom: 4px;
  }

  .label__hidden {
    display: none;
    visibility: hidden;
  }

  :host([disabled]) ${e},
  :host([readonly]) ${e},
  :host([disabled]) .label,
  :host([readonly]) .label,
  :host([disabled]) .control,
  :host([readonly]) .control {
    cursor: ${lt};
  }

  :host([disabled]) {
    opacity: ${nt};
  }
`,Pe=(o,t,e)=>m`
  @media (forced-colors: none) {
    :host(:not([disabled]):active)::after {
      left: 50%;
      width: 40%;
      transform: translateX(-50%);
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    :host(:not([disabled]):focus-within)::after {
      left: 0;
      width: 100%;
      transform: none;
    }

    :host(:not([disabled]):active)::after,
    :host(:not([disabled]):focus-within:not(:active))::after {
      content: '';
      position: absolute;
      height: calc(${ct} * 1px);
      bottom: 0;
      border-bottom: calc(${ct} * 1px) solid ${G};
      border-bottom-left-radius: calc(${P} * 1px);
      border-bottom-right-radius: calc(${P} * 1px);
      z-index: 2;
      transition: all 300ms cubic-bezier(0.1, 0.9, 0.2, 1);
    }
  }
`,He=(o,t,e,i=":not([disabled]):not(:focus-within)")=>m`
  ${e} {
    background: padding-box linear-gradient(${ir}, ${ir}),
      border-box ${Ja};
  }

  :host(${i}:hover) ${e} {
    background: padding-box linear-gradient(${Qa}, ${Qa}),
      border-box ${ch};
  }

  :host(:not([disabled]):focus-within) ${e} {
    background: padding-box linear-gradient(${Za}, ${Za}),
      border-box ${Ja};
  }
  
  :host([disabled]) ${e} {
    background: padding-box linear-gradient(${ir}, ${ir}),
      border-box ${Co};
  }

  .control::placeholder {
    color: ${mm};
  }

  :host(${i}:hover) .control::placeholder {
    color: ${gm};
  }
`,me=(o,t,e,i=":not([disabled]):not(:focus-within)")=>m`
  ${e} {
    background: ${pe};
  }

  :host(${i}:hover) ${e} {
    background: ${gi};
  }

  :host(:not([disabled]):focus-within) ${e} {
    background: ${eh};
  }

  :host([disabled]) ${e} {
    background: ${pe};
  }

  .control::placeholder {
    color: ${vm};
  }

  :host(${i}:hover) .control::placeholder {
    color: ${bm};
  }
`,ge=(o,t,e,i=":not([disabled]):not(:focus-within)")=>m`
  :host {
    color: ${h.ButtonText};
  }

  ${e} {
    background: ${h.ButtonFace};
    border-color: ${h.ButtonText};
  }

  :host(${i}:hover) ${e},
  :host(:not([disabled]):focus-within) ${e} {
    border-color: ${h.Highlight};
  }

  :host([disabled]) ${e} {
    opacity: 1;
    background: ${h.ButtonFace};
    border-color: ${h.GrayText};
  }

  .control::placeholder,
  :host(${i}:hover) .control::placeholder {
    color: ${h.CanvasText};
  }

  :host(:not([disabled]):focus) ${e} {
    ${dt}
    outline-color: ${h.Highlight};
  }

  :host([disabled]) {
    opacity: 1;
    color: ${h.GrayText};
  }

  :host([disabled]) ::placeholder,
  :host([disabled]) ::-webkit-input-placeholder {
    color: ${h.GrayText};
  }
`;function Y(o,t){return new Ur("appearance",o,t)}var Wo="[href]",xh=(o,t)=>Bn(o,t,Wo).withBehaviors(Y("neutral",ki(o,t,Wo)),Y("accent",Mn(o,t,Wo)),Y("hypertext",bh(o,t,Wo)),Y("lightweight",zn(o,t,Wo)),Y("outline",Nn(o,t,Wo)),Y("stealth",Ci(o,t,Wo)));var _n=class extends At{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){var t,e;let i=this.defaultSlottedContent.filter(r=>r.nodeType===Node.ELEMENT_NODE);i.length===1&&i[0]instanceof SVGElement?(t=this.control)===null||t===void 0||t.classList.add("icon-only"):(e=this.control)===null||e===void 0||e.classList.remove("icon-only")}};$([c],_n.prototype,"appearance",void 0);var yh=_n.compose({baseName:"anchor",baseClass:At,template:kr,styles:xh,shadowOptions:{delegatesFocus:!0}});var wh=(o,t)=>m`
  :host {
    contain: layout;
    display: block;
  }
`;var $h=M.compose({baseName:"anchored-region",template:ac,styles:wh});var kh=(o,t)=>m`
    ${T("inline-block")} :host {
      box-sizing: border-box;
      ${Pn};
    }

    .control {
      border-radius: calc(${P} * 1px);
      padding: calc(((${x} * 0.5) - ${C}) * 1px) calc((${x} - ${C}) * 1px);
      border: calc(${C} * 1px) solid transparent;
    }

    :host(.lightweight) .control {
      background: transparent;
      color: ${H};
      font-weight: 600;
    }

    :host(.accent) .control {
      background: ${G};
      color: ${oe};
    }

    :host(.neutral) .control {
      background: ${pe};
      color: ${H};
    }

    :host([circular]) .control {
      border-radius: 100px;
      min-width: calc(${hi} - calc(${x} * 1px));
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `;var jn=class extends fo{constructor(){super(...arguments),this.appearance="lightweight"}appearanceChanged(t,e){t!==e&&F.queueUpdate(()=>{this.classList.add(e),this.classList.remove(t)})}};$([c({mode:"fromView"})],jn.prototype,"appearance",void 0);var Ch=jn.compose({baseName:"badge",baseClass:fo,template:lc,styles:kh});var Sh=(o,t)=>m`
  ${T("inline-block")} :host {
    box-sizing: border-box;
    ${N};
  }

  .list {
    display: flex;
  }
`;var Fh=Ai.compose({baseName:"breadcrumb",template:dc,styles:Sh});var Th=(o,t)=>m`
    ${T("inline-flex")} :host {
      background: transparent;
      color: ${H};
      fill: currentcolor;
      box-sizing: border-box;
      ${N};
      min-width: calc(${E} * 1px);
      border-radius: calc(${P} * 1px);
    }

    .listitem {
      display: flex;
      align-items: center;
      border-radius: inherit;
    }

    .control {
      position: relative;
      align-items: center;
      box-sizing: border-box;
      color: inherit;
      fill: inherit;
      cursor: pointer;
      display: flex;
      outline: none;
      text-decoration: none;
      white-space: nowrap;
      border-radius: inherit;
    }

    .control:hover {
      color: ${nh};
    }

    .control:active {
      color: ${sh};
    }

    .control:${O} {
      ${Ve}
    }

    :host(:not([href])),
    :host([aria-current]) .control {
      color: ${H};
      fill: currentcolor;
      cursor: default;
    }

    .start {
      display: flex;
      margin-inline-end: 6px;
    }

    .end {
      display: flex;
      margin-inline-start: 6px;
    }

    .separator {
      display: flex;
    }
  `.withBehaviors(I(m`
        :host(:not([href])),
        .start,
        .end,
        .separator {
          background: ${h.ButtonFace};
          color: ${h.ButtonText};
          fill: currentcolor;
        }
        .separator {
          fill: ${h.ButtonText};
        }
        :host([href]) {
          forced-color-adjust: none;
          background: ${h.ButtonFace};
          color: ${h.LinkText};
        }
        :host([href]) .control:hover {
          background: ${h.LinkText};
          color: ${h.HighlightText};
          fill: currentcolor;
        }
        .control:${O} {
          outline-color: ${h.LinkText};
        }
      `));var Rh=_e.compose({baseName:"breadcrumb-item",template:cc,styles:Th,shadowOptions:{delegatesFocus:!0},separator:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.65 2.15a.5.5 0 000 .7L7.79 6 4.65 9.15a.5.5 0 10.7.7l3.5-3.5a.5.5 0 000-.7l-3.5-3.5a.5.5 0 00-.7 0z"/>
    </svg>
  `});var Xo=":not([disabled])",Fo="[disabled]",Ih=(o,t)=>m`
    :host(${Xo}) .control {
      cursor: pointer;
    }

    :host(${Fo}) .control {
      cursor: ${lt};
    }

    @media (forced-colors: none) {
      :host(${Fo}) .control {
        opacity: ${nt};
      }
    }

    ${Bn(o,t,Xo,Fo)}
  `.withBehaviors(Y("neutral",ki(o,t,Xo,Fo)),Y("accent",Mn(o,t,Xo,Fo)),Y("lightweight",zn(o,t,Xo,Fo)),Y("outline",Nn(o,t,Xo,Fo)),Y("stealth",Ci(o,t,Xo,Fo)));var Gn=class extends Et{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){let t=this.defaultSlottedContent.filter(e=>e.nodeType===Node.ELEMENT_NODE);t.length===1&&t[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}};$([c],Gn.prototype,"appearance",void 0);var Dh=Gn.compose({baseName:"button",baseClass:Et,template:hc,styles:Ih,shadowOptions:{delegatesFocus:!0}});var xm=m`
.day.disabled::before {
  transform: translate(-50%, 0) rotate(45deg);
}
`,ym=m`
.day.disabled::before {
  transform: translate(50%, 0) rotate(-45deg);
}
`,Ah=(o,t)=>m`
${T("inline-block")} :host {
  --calendar-cell-size: calc((${$o} + 2 + ${Pt}) * ${x} * 1px);
  --calendar-gap: 2px;
  ${N}
  color: ${H};
}

.title {
  padding: calc(${x} * 2px);
  font-weight: 600;
}

.days {
  text-align: center;
}

.week-days,
.week {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: var(--calendar-gap);
  border: 0;
  padding: 0;
}

.day,
.week-day {
  border: 0;
  width: var(--calendar-cell-size);
  height: var(--calendar-cell-size);
  line-height: var(--calendar-cell-size);
  padding: 0;
  box-sizing: initial;
}

.week-day {
  font-weight: 600;
}

.day {
  border: calc(${C} * 1px) solid transparent;
  border-radius: calc(${P} * 1px);
}

.interact .day {
  cursor: pointer;
}

.date {
  height: 100%;
}

.inactive .date,
.inactive.disabled::before {
  color: ${Le};
}

.disabled::before {
  content: '';
  display: inline-block;
  width: calc(var(--calendar-cell-size) * .8);
  height: calc(${C} * 1px);
  background: currentColor;
  position: absolute;
  margin-top: calc(var(--calendar-cell-size) / 2);
  transform-origin: center;
  z-index: 1;
}

.selected {
  color: ${G};
  border: 1px solid ${G};
  background: ${L};
}

.selected + .selected {
  border-start-start-radius: 0;
  border-end-start-radius: 0;
  border-inline-start-width: 0;
  padding-inline-start: calc(var(--calendar-gap) + (${C} + ${P}) * 1px);
  margin-inline-start: calc((${P} * -1px) - var(--calendar-gap));
}

.today.disabled::before {
  color: ${oe};
}

.today .date {
  color: ${oe};
  background: ${G};
  border-radius: 50%;
  position: relative;
}
`.withBehaviors(I(m`
          .day.selected {
              color: ${h.Highlight};
          }

          .today .date {
              background: ${h.Highlight};
              color: ${h.HighlightText};
          }
      `),new Kt(xm,ym));var Un=class extends Nt{constructor(){super(...arguments),this.readonly=!0}};$([c({converter:Be})],Un.prototype,"readonly",void 0);var Oh=Un.compose({baseName:"calendar",template:yc,styles:Ah,title:xc});var Eh=(o,t)=>m`
    ${T("block")} :host {
      display: block;
      contain: content;
      height: var(--card-height, 100%);
      width: var(--card-width, 100%);
      box-sizing: border-box;
      background: ${L};
      color: ${H};
      border: calc(${C} * 1px) solid ${eo};
      border-radius: calc(${Gt} * 1px);
      box-shadow: ${mh};
    }

    :host {
      content-visibility: auto;
    }
  `.withBehaviors(I(m`
        :host {
          background: ${h.Canvas};
          color: ${h.CanvasText};
        }
      `));var rr=class extends Ei{cardFillColorChanged(t,e){if(e){let i=Se(e);i!==null&&(this.neutralPaletteSource=e,L.setValueFor(this,It.create(i.r,i.g,i.b)))}}neutralPaletteSourceChanged(t,e){if(e){let i=Se(e),r=It.create(i.r,i.g,i.b);rt.setValueFor(this,Go.create(r))}}handleChange(t,e){this.cardFillColor||L.setValueFor(this,i=>Je.getValueFor(i).evaluate(i,L.getValueFor(t)).rest)}connectedCallback(){super.connectedCallback();let t=Ho(this);if(t){let e=R.getNotifier(t);e.subscribe(this,"fillColor"),e.subscribe(this,"neutralPalette"),this.handleChange(t,"fillColor")}}};$([c({attribute:"card-fill-color",mode:"fromView"})],rr.prototype,"cardFillColor",void 0);$([c({attribute:"neutral-palette-source",mode:"fromView"})],rr.prototype,"neutralPaletteSource",void 0);var Lh=rr.compose({baseName:"card",baseClass:Ei,template:wc,styles:Eh});var Vh=(o,t)=>m`
    ${T("inline-flex")} :host {
      align-items: center;
      outline: none;
      ${""} user-select: none;
    }

    .control {
      position: relative;
      width: calc((${E} / 2 + ${x}) * 1px);
      height: calc((${E} / 2 + ${x}) * 1px);
      box-sizing: border-box;
      border-radius: calc(${P} * 1px);
      border: calc(${C} * 1px) solid ${fe};
      background: ${ui};
      cursor: pointer;
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      ${N}
      color: ${H};
      ${""} padding-inline-start: calc(${x} * 2px + 2px);
      margin-inline-end: calc(${x} * 2px + 2px);
      cursor: pointer;
    }

    slot[name='checked-indicator'],
    slot[name='indeterminate-indicator'] {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      fill: ${H};
      opacity: 0;
      pointer-events: none;
    }

    slot[name='indeterminate-indicator'] {
      position: absolute;
      top: 0;
    }

    :host(.checked) slot[name='checked-indicator'],
    :host(.checked) slot[name='indeterminate-indicator'] {
      fill: ${oe};
    }

    :host(:not(.disabled):hover) .control {
      background: ${pi};
      border-color: ${yi};
    }

    :host(:not(.disabled):active) .control {
      background: ${fi};
      border-color: ${wi};
    }

    :host(:${O}) .control {
      background: ${mi};
      ${Ve}
    }

    :host(.checked) .control {
      background: ${G};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .control {
      background: ${Bt};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .control {
      background: ${Mt};
      border-color: transparent;
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.readonly) .control,
    :host(.disabled) .control {
      cursor: ${lt};
    }

    :host(.checked:not(.indeterminate)) slot[name='checked-indicator'],
    :host(.indeterminate) slot[name='indeterminate-indicator'] {
      opacity: 1;
    }

    :host(.disabled) {
      opacity: ${nt};
    }
  `.withBehaviors(I(m`
        .control {
          border-color: ${h.FieldText};
          background: ${h.Field};
        }
        :host(:not(.disabled):hover) .control,
        :host(:not(.disabled):active) .control {
          border-color: ${h.Highlight};
          background: ${h.Field};
        }
        slot[name='checked-indicator'],
        slot[name='indeterminate-indicator'] {
          fill: ${h.FieldText};
        }
        :host(:${O}) .control {
          forced-color-adjust: none;
          outline-color: ${h.FieldText};
          background: ${h.Field};
          border-color: ${h.Highlight};
        }
        :host(.checked) .control {
          background: ${h.Highlight};
          border-color: ${h.Highlight};
        }
        :host(.checked:not(.disabled):hover) .control,
        :host(.checked:not(.disabled):active) .control {
          background: ${h.HighlightText};
          border-color: ${h.Highlight};
        }
        :host(.checked) slot[name='checked-indicator'],
        :host(.checked) slot[name='indeterminate-indicator'] {
          fill: ${h.HighlightText};
        }
        :host(.checked:hover ) .control slot[name='checked-indicator'],
        :host(.checked:hover ) .control slot[name='indeterminate-indicator'] {
          fill: ${h.Highlight};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) .control {
          border-color: ${h.GrayText};
          background: ${h.Field};
        }
        :host(.disabled) slot[name='checked-indicator'],
        :host(.checked.disabled:hover) .control slot[name='checked-indicator'],
        :host(.disabled) slot[name='indeterminate-indicator'],
        :host(.checked.disabled:hover) .control slot[name='indeterminate-indicator'] {
          fill: ${h.GrayText};
        }
      `));var Ph=Po.compose({baseName:"checkbox",template:$c,styles:Vh,checkedIndicator:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.86 3.66a.5.5 0 01-.02.7l-7.93 7.48a.6.6 0 01-.84-.02L2.4 9.1a.5.5 0 01.72-.7l2.4 2.44 7.65-7.2a.5.5 0 01.7.02z"/>
    </svg>
  `,indeterminateIndicator:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 8c0-.28.22-.5.5-.5h9a.5.5 0 010 1h-9A.5.5 0 013 8z"/>
    </svg>
  `});var Hh=".control",qn=":not([disabled]):not([open])",Bh="[disabled]",el=(o,t)=>m`
    ${T("inline-flex")}
    
    :host {
      border-radius: calc(${P} * 1px);
      box-sizing: border-box;
      color: ${H};
      fill: currentcolor;
      font-family: ${Ht};
      position: relative;
      user-select: none;
      min-width: 250px;
      vertical-align: top;
    }

    .listbox {
      box-shadow: ${Hn};
      background: ${L};
      border-radius: calc(${Gt} * 1px);
      box-sizing: border-box;
      display: inline-flex;
      flex-direction: column;
      left: 0;
      max-height: calc(var(--max-height) - (${E} * 1px));
      padding: calc((${x} - ${C} ) * 1px);
      overflow-y: auto;
      position: absolute;
      width: 100%;
      z-index: 1;
      margin: 1px 0;
      border: calc(${C} * 1px) solid transparent;
    }

    .listbox[hidden] {
      display: none;
    }

    .control {
      border: calc(${C} * 1px) solid transparent;
      border-radius: calc(${P} * 1px);
      height: calc(${E} * 1px);
      align-items: center;
      box-sizing: border-box;
      cursor: pointer;
      display: flex;
      ${N}
      min-height: 100%;
      padding: 0 calc(${x} * 2.25px);
      width: 100%;
    }

    :host(:${O}) {
      ${dt}
    }

    :host([disabled]) .control {
      cursor: ${lt};
      opacity: ${nt};
      user-select: none;
    }

    :host([open][position='above']) .listbox {
      bottom: calc((${E} + ${x} * 2) * 1px);
    }

    :host([open][position='below']) .listbox {
      top: calc((${E} + ${x} * 2) * 1px);
    }

    .selected-value {
      font-family: inherit;
      flex: 1 1 auto;
      text-align: start;
    }

    .indicator {
      flex: 0 0 auto;
      margin-inline-start: 1em;
    }

    slot[name='listbox'] {
      display: none;
      width: 100%;
    }

    :host([open]) slot[name='listbox'] {
      display: flex;
      position: absolute;
    }

    .start {
      margin-inline-end: 11px;
    }

    .end {
      margin-inline-start: 11px;
    }

    .start,
    .end,
    .indicator,
    ::slotted(svg) {
      display: flex;
    }

    ::slotted([role='option']) {
      flex: 0 0 auto;
    }
  `,wm=(o,t)=>m`
    :host([open]) .listbox {
      background: ${h.ButtonFace};
      border-color: ${h.CanvasText};
    }
  `,Mh=(o,t)=>el(o,t).withBehaviors(Y("outline",ki(o,t,qn,Bh)),Y("filled",me(o,t,Hh,qn).withBehaviors(I(ge(o,t,Hh,qn)))),Y("stealth",Ci(o,t,qn,Bh)),I(wm(o,t)));var Wn=".control",ol=":not([disabled]):not([open])",zh=(o,t)=>m`
    ${el(o,t)}

    ${Pe(o,t,Wn)}

    :host(:empty) .listbox {
      display: none;
    }

    :host([disabled]) *,
    :host([disabled]) {
      cursor: ${lt};
      user-select: none;
    }

    :host(:active) .selected-value {
      user-select: none;
    }

    .selected-value {
      -webkit-appearance: none;
      background: transparent;
      border: none;
      color: inherit;
      ${N}
      height: calc(100% - ${C} * 1px));
      margin: auto 0;
      width: 100%;
      outline: none;
    }
  `.withBehaviors(Y("outline",He(o,t,Wn,ol)),Y("filled",me(o,t,Wn,ol)),I(ge(o,t,Wn,ol)));var Xn=class extends le{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline"),this.listbox&&L.setValueFor(this.listbox,De)}};$([c({mode:"fromView"})],Xn.prototype,"appearance",void 0);var Nh=Xn.compose({baseName:"combobox",baseClass:le,shadowOptions:{delegatesFocus:!0},template:kc,styles:zh,indicator:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>
    </svg>
  `});var _h=(o,t)=>m`
  :host {
    display: flex;
    position: relative;
    flex-direction: column;
  }
`;var jh=(o,t)=>m`
    :host {
      display: grid;
      padding: 1px 0;
      box-sizing: border-box;
      width: 100%;
      border-bottom: calc(${C} * 1px) solid ${xi};
    }

    :host(.header) {
    }

    :host(.sticky-header) {
      background: ${L};
      position: sticky;
      top: 0;
    }
  `.withBehaviors(I(m`
        :host {
        }
      `));var Gh=(o,t)=>m`
    :host {
      padding: calc((${x} + ${ct} - ${C}) * 1px) calc(((${x} * 3) + ${ct} - ${C}) * 1px);
      color: ${H};
      box-sizing: border-box;
      ${N}
      border: transparent calc(${C} * 1px) solid;
      overflow: hidden;
      white-space: nowrap;
      border-radius: calc(${P} * 1px);
    }

    :host(.column-header) {
      font-weight: 600;
    }

    :host(:${O}) {
      ${dt}
    }
  `.withBehaviors(I(m`
        :host {
          forced-color-adjust: none;
          background: ${h.Field};
          color: ${h.FieldText};
        }

        :host(:${O}) {
          outline-color: ${h.FieldText};
        }
      `));var Uh=Yt.compose({baseName:"data-grid-cell",template:bc,styles:Gh});var qh=ft.compose({baseName:"data-grid-row",template:vc,styles:jh});var Wh=bt.compose({baseName:"data-grid",template:gc,styles:_h});var il={toView(o){var t;return o==null?null:(t=o)===null||t===void 0?void 0:t.toColorString()},fromView(o){if(o==null)return null;let t=Se(o);return t?It.create(t.r,t.g,t.b):null}},Xh=m`
  :host {
    background-color: ${L};
    color: ${H};
  }
`.withBehaviors(I(m`
      :host {
        background-color: ${h.Canvas};
        box-shadow: 0 0 0 1px ${h.CanvasText};
        color: ${h.CanvasText};
      }
    `));function A(o){return(t,e)=>{t[e+"Changed"]=function(i,r){r!=null?o.setValueFor(this,r):o.deleteValueFor(this)}}}var D=class extends w{constructor(){super(),this.noPaint=!1;let t={handleChange:this.noPaintChanged.bind(this)};R.getNotifier(this).subscribe(t,"fillColor"),R.getNotifier(this).subscribe(t,"baseLayerLuminance")}connectedCallback(){super.connectedCallback(),this.noPaintChanged()}noPaintChanged(){!this.noPaint&&(this.fillColor!==void 0||this.baseLayerLuminance)?this.$fastController.addStyles(Xh):this.$fastController.removeStyles(Xh)}};$([c({attribute:"no-paint",mode:"boolean"})],D.prototype,"noPaint",void 0);$([c({attribute:"fill-color",converter:il,mode:"fromView"}),A(L)],D.prototype,"fillColor",void 0);$([c({attribute:"accent-base-color",converter:il,mode:"fromView"}),A(ja)],D.prototype,"accentBaseColor",void 0);$([c({attribute:"neutral-base-color",converter:il,mode:"fromView"}),A(_a)],D.prototype,"neutralBaseColor",void 0);$([c({converter:S}),A(Pt)],D.prototype,"density",void 0);$([c({attribute:"design-unit",converter:S}),A(x)],D.prototype,"designUnit",void 0);$([c({attribute:"direction"}),A(di)],D.prototype,"direction",void 0);$([c({attribute:"base-height-multiplier",converter:S}),A($o)],D.prototype,"baseHeightMultiplier",void 0);$([c({attribute:"base-horizontal-spacing-multiplier",converter:S}),A(Vd)],D.prototype,"baseHorizontalSpacingMultiplier",void 0);$([c({attribute:"control-corner-radius",converter:S}),A(P)],D.prototype,"controlCornerRadius",void 0);$([c({attribute:"layer-corner-radius",converter:S}),A(Gt)],D.prototype,"layerCornerRadius",void 0);$([c({attribute:"stroke-width",converter:S}),A(C)],D.prototype,"strokeWidth",void 0);$([c({attribute:"focus-stroke-width",converter:S}),A(ct)],D.prototype,"focusStrokeWidth",void 0);$([c({attribute:"disabled-opacity",converter:S}),A(nt)],D.prototype,"disabledOpacity",void 0);$([c({attribute:"type-ramp-minus-2-font-size"}),A(Qi)],D.prototype,"typeRampMinus2FontSize",void 0);$([c({attribute:"type-ramp-minus-2-line-height"}),A(cn)],D.prototype,"typeRampMinus2LineHeight",void 0);$([c({attribute:"type-ramp-minus-1-font-size"}),A(Yi)],D.prototype,"typeRampMinus1FontSize",void 0);$([c({attribute:"type-ramp-minus-1-line-height"}),A(hi)],D.prototype,"typeRampMinus1LineHeight",void 0);$([c({attribute:"type-ramp-base-font-size"}),A(Xi)],D.prototype,"typeRampBaseFontSize",void 0);$([c({attribute:"type-ramp-base-line-height"}),A(ln)],D.prototype,"typeRampBaseLineHeight",void 0);$([c({attribute:"type-ramp-plus-1-font-size"}),A(Zi)],D.prototype,"typeRampPlus1FontSize",void 0);$([c({attribute:"type-ramp-plus-1-line-height"}),A(dn)],D.prototype,"typeRampPlus1LineHeight",void 0);$([c({attribute:"type-ramp-plus-2-font-size"}),A(Ji)],D.prototype,"typeRampPlus2FontSize",void 0);$([c({attribute:"type-ramp-plus-2-line-height"}),A(hn)],D.prototype,"typeRampPlus2LineHeight",void 0);$([c({attribute:"type-ramp-plus-3-font-size"}),A(Ki)],D.prototype,"typeRampPlus3FontSize",void 0);$([c({attribute:"type-ramp-plus-3-line-height"}),A(un)],D.prototype,"typeRampPlus3LineHeight",void 0);$([c({attribute:"type-ramp-plus-4-font-size"}),A(tr)],D.prototype,"typeRampPlus4FontSize",void 0);$([c({attribute:"type-ramp-plus-4-line-height"}),A(pn)],D.prototype,"typeRampPlus4LineHeight",void 0);$([c({attribute:"type-ramp-plus-5-font-size"}),A(er)],D.prototype,"typeRampPlus5FontSize",void 0);$([c({attribute:"type-ramp-plus-5-line-height"}),A(fn)],D.prototype,"typeRampPlus5LineHeight",void 0);$([c({attribute:"type-ramp-plus-6-font-size"}),A(or)],D.prototype,"typeRampPlus6FontSize",void 0);$([c({attribute:"type-ramp-plus-6-line-height"}),A(mn)],D.prototype,"typeRampPlus6LineHeight",void 0);$([c({attribute:"accent-fill-rest-delta",converter:S}),A(on)],D.prototype,"accentFillRestDelta",void 0);$([c({attribute:"accent-fill-hover-delta",converter:S}),A(rn)],D.prototype,"accentFillHoverDelta",void 0);$([c({attribute:"accent-fill-active-delta",converter:S}),A(nn)],D.prototype,"accentFillActiveDelta",void 0);$([c({attribute:"accent-fill-focus-delta",converter:S}),A(sn)],D.prototype,"accentFillFocusDelta",void 0);$([c({attribute:"accent-foreground-rest-delta",converter:S}),A(ba)],D.prototype,"accentForegroundRestDelta",void 0);$([c({attribute:"accent-foreground-hover-delta",converter:S}),A(xa)],D.prototype,"accentForegroundHoverDelta",void 0);$([c({attribute:"accent-foreground-active-delta",converter:S}),A(ya)],D.prototype,"accentForegroundActiveDelta",void 0);$([c({attribute:"accent-foreground-focus-delta",converter:S}),A(wa)],D.prototype,"accentForegroundFocusDelta",void 0);$([c({attribute:"neutral-fill-rest-delta",converter:S}),A($a)],D.prototype,"neutralFillRestDelta",void 0);$([c({attribute:"neutral-fill-hover-delta",converter:S}),A(ka)],D.prototype,"neutralFillHoverDelta",void 0);$([c({attribute:"neutral-fill-active-delta",converter:S}),A(Ca)],D.prototype,"neutralFillActiveDelta",void 0);$([c({attribute:"neutral-fill-focus-delta",converter:S}),A(Sa)],D.prototype,"neutralFillFocusDelta",void 0);$([c({attribute:"neutral-fill-input-rest-delta",converter:S}),A(Fa)],D.prototype,"neutralFillInputRestDelta",void 0);$([c({attribute:"neutral-fill-input-hover-delta",converter:S}),A(Ta)],D.prototype,"neutralFillInputHoverDelta",void 0);$([c({attribute:"neutral-fill-input-active-delta",converter:S}),A(Ra)],D.prototype,"neutralFillInputActiveDelta",void 0);$([c({attribute:"neutral-fill-input-focus-delta",converter:S}),A(Ia)],D.prototype,"neutralFillInputFocusDelta",void 0);$([c({attribute:"neutral-fill-layer-rest-delta",converter:S}),A(Qe)],D.prototype,"neutralFillLayerRestDelta",void 0);$([c({attribute:"neutral-fill-stealth-rest-delta",converter:S}),A(Da)],D.prototype,"neutralFillStealthRestDelta",void 0);$([c({attribute:"neutral-fill-stealth-hover-delta",converter:S}),A(Aa)],D.prototype,"neutralFillStealthHoverDelta",void 0);$([c({attribute:"neutral-fill-stealth-active-delta",converter:S}),A(Oa)],D.prototype,"neutralFillStealthActiveDelta",void 0);$([c({attribute:"neutral-fill-stealth-focus-delta",converter:S}),A(Ea)],D.prototype,"neutralFillStealthFocusDelta",void 0);$([c({attribute:"neutral-fill-strong-hover-delta",converter:S}),A(La)],D.prototype,"neutralFillStrongHoverDelta",void 0);$([c({attribute:"neutral-fill-strong-active-delta",converter:S}),A(Va)],D.prototype,"neutralFillStrongActiveDelta",void 0);$([c({attribute:"neutral-fill-strong-focus-delta",converter:S}),A(Pa)],D.prototype,"neutralFillStrongFocusDelta",void 0);$([c({attribute:"base-layer-luminance",converter:S}),A(ko)],D.prototype,"baseLayerLuminance",void 0);$([c({attribute:"neutral-stroke-divider-rest-delta",converter:S}),A(Na)],D.prototype,"neutralStrokeDividerRestDelta",void 0);$([c({attribute:"neutral-stroke-rest-delta",converter:S}),A(Ha)],D.prototype,"neutralStrokeRestDelta",void 0);$([c({attribute:"neutral-stroke-hover-delta",converter:S}),A(Ba)],D.prototype,"neutralStrokeHoverDelta",void 0);$([c({attribute:"neutral-stroke-active-delta",converter:S}),A(Ma)],D.prototype,"neutralStrokeActiveDelta",void 0);$([c({attribute:"neutral-stroke-focus-delta",converter:S}),A(za)],D.prototype,"neutralStrokeFocusDelta",void 0);var Yh=D.compose({baseName:"design-system-provider",template:v` <slot></slot> `,styles:m`
    ${T("block")}
  `});var Qh=(o,t)=>m`
  :host([hidden]) {
    display: none;
  }

  :host {
    --dialog-height: 480px;
    --dialog-width: 640px;
    display: block;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    touch-action: none;
  }

  .positioning-region {
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: auto;
  }

  .control {
    box-shadow: ${vh};
    margin-top: auto;
    margin-bottom: auto;
    border-radius: calc(${Gt} * 1px);
    width: var(--dialog-width);
    height: var(--dialog-height);
    background: ${L};
    z-index: 1;
    border: calc(${C} * 1px) solid transparent;
  }
`;var Zh=Ie.compose({baseName:"dialog",template:Sc,styles:Qh});var Jh=(o,t)=>m`
    ${T("block")} :host {
      box-sizing: content-box;
      height: 0;
      border: none;
      border-top: calc(${C} * 1px) solid ${xi};
    }
  `;var Kh=bo.compose({baseName:"divider",template:Ac,styles:Jh});var tu=(o,t)=>m`
    ${T("inline-flex")} :host {
      height: calc((${E} + ${x}) * 1px);
      justify-content: center;
      align-items: center;
      fill: currentcolor;
      color: ${Fn};
      background: padding-box linear-gradient(${Ut}, ${Ut}),
        border-box ${bi};
      box-sizing: border-box;
      border: calc(${C} * 1px) solid transparent;
      border-radius: calc(${P} * 1px);
      padding: 0;
    }

    :host(.disabled) {
      opacity: ${nt};
      cursor: ${lt};
      pointer-events: none;
    }

    .next,
    .previous {
      display: flex;
    }

    :host(:not(.disabled):hover) {
      cursor: pointer;
    }

    :host(:not(.disabled):hover) {
      color: ${ih};
    }

    :host(:not(.disabled):active) {
      color: ${rh};
    }

    :host(:${O}) {
      ${dt}
    }

    :host::-moz-focus-inner {
      border: 0;
    }
  `.withBehaviors(I(m`
        :host {
          background: ${h.ButtonFace};
          border-color: ${h.ButtonText};
        }
        :host .next,
        :host .previous {
          color: ${h.ButtonText};
          fill: currentcolor;
        }
        :host(:not(.disabled):hover) {
          background: ${h.Highlight};
        }
        :host(:not(.disabled):hover) .next,
        :host(:not(.disabled):hover) .previous {
          color: ${h.HighlightText};
          fill: currentcolor;
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled),
        :host(.disabled) .next,
        :host(.disabled) .previous {
          border-color: ${h.GrayText};
          color: ${h.GrayText};
          fill: currentcolor;
        }
        :host(:${O}) {
          forced-color-adjust: none;
          outline-color: ${h.Highlight};
        }
      `));var eu=Mo.compose({baseName:"flipper",template:Ec,styles:tu,next:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.57 11.84A1 1 0 016 11.02V4.98a1 1 0 011.57-.82l3.79 2.62c.85.59.85 1.85 0 2.44l-3.79 2.62z"/>
    </svg>
  `,previous:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.43 11.84a1 1 0 001.57-.82V4.98a1 1 0 00-1.57-.82L5.64 6.78c-.85.59-.85 1.85 0 2.44l3.79 2.62z"/>
    </svg>
  `});var $m=m`
  .scroll-prev {
    right: auto;
    left: 0;
  }

  .scroll.scroll-next::before,
  .scroll-next .scroll-action {
    left: auto;
    right: 0;
  }

  .scroll.scroll-next::before {
    background: linear-gradient(to right, transparent, var(--scroll-fade-next));
  }

  .scroll-next .scroll-action {
    transform: translate(50%, -50%);
  }
`,km=m`
  .scroll.scroll-next {
    right: auto;
    left: 0;
  }

  .scroll.scroll-next::before {
    background: linear-gradient(to right, var(--scroll-fade-next), transparent);
    left: auto;
    right: 0;
  }

  .scroll.scroll-prev::before {
    background: linear-gradient(to right, transparent, var(--scroll-fade-previous));
  }

  .scroll-prev .scroll-action {
    left: auto;
    right: 0;
    transform: translate(50%, -50%);
  }
`,ou=m`
  .scroll-area {
    position: relative;
  }

  div.scroll-view {
    overflow-x: hidden;
  }

  .scroll {
    bottom: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    user-select: none;
    width: 100px;
  }

  .scroll.disabled {
    display: none;
  }

  .scroll::before,
  .scroll-action {
    left: 0;
    position: absolute;
  }

  .scroll::before {
    background: linear-gradient(to right, var(--scroll-fade-previous), transparent);
    content: '';
    display: block;
    height: 100%;
    width: 100%;
  }

  .scroll-action {
    pointer-events: auto;
    right: auto;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  ::slotted(fluent-flipper) {
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }

  .scroll-area:hover ::slotted(fluent-flipper) {
    opacity: 1;
  }
`.withBehaviors(new Kt($m,km)),iu=(o,t)=>m`
  ${T("block")} :host {
    --scroll-align: center;
    --scroll-item-spacing: 4px;
    contain: layout;
    position: relative;
  }

  .scroll-view {
    overflow-x: auto;
    scrollbar-width: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  .content-container {
    align-items: var(--scroll-align);
    display: inline-flex;
    flex-wrap: nowrap;
    position: relative;
  }

  .content-container ::slotted(*) {
    margin-right: var(--scroll-item-spacing);
  }

  .content-container ::slotted(*:last-child) {
    margin-right: 0;
  }
`;var rl=class extends ce{connectedCallback(){super.connectedCallback(),this.view!=="mobile"&&this.$fastController.addStyles(ou)}},ru=rl.compose({baseName:"horizontal-scroll",baseClass:ce,template:Uc,styles:iu,nextFlipper:v`
    <fluent-flipper @click="${o=>o.scrollToNext()}" aria-hidden="${o=>o.flippersHiddenFromAT}"></fluent-flipper>
  `,previousFlipper:v`
    <fluent-flipper
      @click="${o=>o.scrollToPrevious()}"
      direction="previous"
      aria-hidden="${o=>o.flippersHiddenFromAT}"
    ></fluent-flipper>
  `});var nu=(o,t)=>m`
    ${T("inline-flex")} :host {
      border: calc(${C} * 1px) solid ${Co};
      border-radius: calc(${P} * 1px);
      box-sizing: border-box;
      flex-direction: column;
      padding: calc(${x} * 1px) 0;
    }

    ::slotted(${o.tagFor(Qt)}) {
      margin: 0 calc(${x} * 1px);
    }

    :host(:focus-within:not([disabled])) {
      ${dt}
    }
  `;var nl=class extends mt{},su=nl.compose({baseName:"listbox",template:Vc,styles:nu});var au=(o,t)=>m`
    ${T("inline-flex")} :host {
      position: relative;
      ${N}
      background: ${to};
      border-radius: calc(${P} * 1px);
      border: calc(${C} * 1px) solid transparent;
      box-sizing: border-box;
      color: ${H};
      cursor: pointer;
      fill: currentcolor;
      height: calc(${E} * 1px);
      overflow: hidden;
      align-items: center;
      padding: 0 calc(((${x} * 3) - ${C} - 1) * 1px);
      user-select: none;
      white-space: nowrap;
    }

    :host::before {
      content: '';
      display: block;
      position: absolute;
      left: calc((${ct} - ${C}) * 1px);
      top: calc((${E} / 4) - ${ct} * 1px);
      width: 3px;
      height: calc((${E} / 2) * 1px);
      background: transparent;
      border-radius: calc(${P} * 1px);
    }

    :host(:not([disabled]):hover) {
      background: ${Oe};
    }

    :host(:not([disabled]):active) {
      background: ${Ee};
    }

    :host(:not([disabled]):active)::before {
      background: ${G};
      height: calc(((${E} / 2) - 6) * 1px);
    }

    :host([aria-selected='true'])::before {
      background: ${G};
    }

    :host(:${O}) {
      ${dt}
      background: ${oh};
    }

    :host([aria-selected='true']) {
      background: ${pe};
    }

    :host(:not([disabled])[aria-selected='true']:hover) {
      background: ${gi};
    }

    :host(:not([disabled])[aria-selected='true']:active) {
      background: ${th};
    }

    :host(:not([disabled]):not([aria-selected='true']):hover) {
      background: ${Oe};
    }

    :host(:not([disabled]):not([aria-selected='true']):active) {
      background: ${Ee};
    }

    :host([disabled]) {
      cursor: ${lt};
      opacity: ${nt};
    }

    .content {
      grid-column-start: 2;
      justify-self: start;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .start,
    .end,
    ::slotted(svg) {
      display: flex;
    }

    ::slotted([slot='end']) {
      margin-inline-start: 1ch;
    }

    ::slotted([slot='start']) {
      margin-inline-end: 1ch;
    }
  `.withBehaviors(new Kt(null,m`
      :host::before {
        right: calc((${ct} - ${C}) * 1px);
      }
    `),I(m`
        :host {
          background: ${h.ButtonFace};
          border-color: ${h.ButtonFace};
          color: ${h.ButtonText};
        }
        :host(:not([disabled]):not([aria-selected="true"]):hover),
        :host(:not([disabled])[aria-selected="true"]:hover),
        :host([aria-selected="true"]) {
          forced-color-adjust: none;
          background: ${h.Highlight};
          color: ${h.HighlightText};
        }
        :host(:not([disabled]):active)::before,
        :host([aria-selected='true'])::before {
          background: ${h.HighlightText};
        }
        :host([disabled]),
        :host([disabled]:not([aria-selected='true']):hover) {
          background: ${h.Canvas};
          color: ${h.GrayText};
          fill: currentcolor;
          opacity: 1;
        }
        :host(:${O}) {
          outline-color: ${h.CanvasText};
        }
      `));var lu=Qt.compose({baseName:"option",template:Lc,styles:au});var cu=(o,t)=>m`
    ${T("block")} :host {
      background: ${De};
      border: calc(${C} * 1px) solid transparent;
      border-radius: calc(${Gt} * 1px);
      box-shadow: ${Hn};
      padding: calc((${x} - ${C}) * 1px) 0;
      max-width: 368px;
      min-width: 64px;
    }

    :host([slot='submenu']) {
      width: max-content;
      margin: 0 calc(${x} * 2px);
    }

    ::slotted(${o.tagFor(Tt)}) {
      margin: 0 calc(${x} * 1px);
    }

    ::slotted(${o.tagFor(bo)}) {
      margin: calc(${x} * 1px) 0;
    }

    ::slotted(hr) {
      box-sizing: content-box;
      height: 0;
      margin: calc(${x} * 1px) 0;
      border: none;
      border-top: calc(${C} * 1px) solid ${xi};
    }
  `.withBehaviors(I(m`
        :host([slot='submenu']) {
          background: ${h.Canvas};
          border-color: ${h.CanvasText};
        }
      `));var sl=class extends zo{connectedCallback(){super.connectedCallback(),L.setValueFor(this,De)}},du=sl.compose({baseName:"menu",baseClass:zo,template:Hc,styles:cu});var hu=(o,t)=>m`
    ${T("grid")} :host {
      contain: layout;
      overflow: visible;
      ${N}
      box-sizing: border-box;
      height: calc(${E} * 1px);
      grid-template-columns: minmax(32px, auto) 1fr minmax(32px, auto);
      grid-template-rows: auto;
      justify-items: center;
      align-items: center;
      padding: 0;
      white-space: nowrap;
      color: ${H};
      fill: currentcolor;
      cursor: pointer;
      border-radius: calc(${P} * 1px);
      border: calc(${C} * 1px) solid transparent;
      position: relative;
    }

    :host(.indent-0) {
      grid-template-columns: auto 1fr minmax(32px, auto);
    }

    :host(.indent-0) .content {
      grid-column: 1;
      grid-row: 1;
      margin-inline-start: 10px;
    }

    :host(.indent-0) .expand-collapse-glyph-container {
      grid-column: 5;
      grid-row: 1;
    }

    :host(.indent-2) {
      grid-template-columns: minmax(32px, auto) minmax(32px, auto) 1fr minmax(32px, auto) minmax(32px, auto);
    }

    :host(.indent-2) .content {
      grid-column: 3;
      grid-row: 1;
      margin-inline-start: 10px;
    }

    :host(.indent-2) .expand-collapse-glyph-container {
      grid-column: 5;
      grid-row: 1;
    }

    :host(.indent-2) .start {
      grid-column: 2;
    }

    :host(.indent-2) .end {
      grid-column: 4;
    }

    :host(:${O}) {
      ${dt}
    }

    :host(:not([disabled]):hover) {
      background: ${Oe};
    }

    :host(:not([disabled]):active),
    :host(.expanded) {
      background: ${Ee};
      color: ${H};
      z-index: 2;
    }

    :host([disabled]) {
      cursor: ${lt};
      opacity: ${nt};
    }

    .content {
      grid-column-start: 2;
      justify-self: start;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .start,
    .end {
      display: flex;
      justify-content: center;
    }

    :host(.indent-0[aria-haspopup='menu']) {
      display: grid;
      grid-template-columns: minmax(32px, auto) auto 1fr minmax(32px, auto) minmax(32px, auto);
      align-items: center;
      min-height: 32px;
    }

    :host(.indent-1[aria-haspopup='menu']),
    :host(.indent-1[role='menuitemcheckbox']),
    :host(.indent-1[role='menuitemradio']) {
      display: grid;
      grid-template-columns: minmax(32px, auto) auto 1fr minmax(32px, auto) minmax(32px, auto);
      align-items: center;
      min-height: 32px;
    }

    :host(.indent-2:not([aria-haspopup='menu'])) .end {
      grid-column: 5;
    }

    :host .input-container,
    :host .expand-collapse-glyph-container {
      display: none;
    }

    :host([aria-haspopup='menu']) .expand-collapse-glyph-container,
    :host([role='menuitemcheckbox']) .input-container,
    :host([role='menuitemradio']) .input-container {
      display: grid;
    }

    :host([aria-haspopup='menu']) .content,
    :host([role='menuitemcheckbox']) .content,
    :host([role='menuitemradio']) .content {
      grid-column-start: 3;
    }

    :host([aria-haspopup='menu'].indent-0) .content {
      grid-column-start: 1;
    }

    :host([aria-haspopup='menu']) .end,
    :host([role='menuitemcheckbox']) .end,
    :host([role='menuitemradio']) .end {
      grid-column-start: 4;
    }

    :host .expand-collapse,
    :host .checkbox,
    :host .radio {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      box-sizing: border-box;
    }

    :host .checkbox-indicator,
    :host .radio-indicator,
    slot[name='checkbox-indicator'],
    slot[name='radio-indicator'] {
      display: none;
    }

    ::slotted([slot='end']:not(svg)) {
      margin-inline-end: 10px;
      color: ${Le};
    }

    :host([aria-checked='true']) .checkbox-indicator,
    :host([aria-checked='true']) slot[name='checkbox-indicator'],
    :host([aria-checked='true']) .radio-indicator,
    :host([aria-checked='true']) slot[name='radio-indicator'] {
      display: flex;
    }
  `.withBehaviors(I(m`
        :host,
        ::slotted([slot='end']:not(svg)) {
          forced-color-adjust: none;
          color: ${h.ButtonText};
          fill: currentcolor;
        }
        :host(:not([disabled]):hover) {
          background: ${h.Highlight};
          color: ${h.HighlightText};
          fill: currentcolor;
        }
        :host(:hover) .start,
        :host(:hover) .end,
        :host(:hover)::slotted(svg),
        :host(:active) .start,
        :host(:active) .end,
        :host(:active)::slotted(svg),
        :host(:hover) ::slotted([slot='end']:not(svg)),
        :host(:${O}) ::slotted([slot='end']:not(svg)) {
          color: ${h.HighlightText};
          fill: currentcolor;
        }
        :host(.expanded) {
          background: ${h.Highlight};
          color: ${h.HighlightText};
        }
        :host(:${O}) {
          background: ${h.Highlight};
          outline-color: ${h.ButtonText};
          color: ${h.HighlightText};
          fill: currentcolor;
        }
        :host([disabled]),
        :host([disabled]:hover),
        :host([disabled]:hover) .start,
        :host([disabled]:hover) .end,
        :host([disabled]:hover)::slotted(svg),
        :host([disabled]:${O}) {
          background: ${h.ButtonFace};
          color: ${h.GrayText};
          fill: currentcolor;
          opacity: 1;
        }
        :host([disabled]:${O}) {
          outline-color: ${h.GrayText};
        }
        :host .expanded-toggle,
        :host .checkbox,
        :host .radio {
          border-color: ${h.ButtonText};
          background: ${h.HighlightText};
        }
        :host([checked]) .checkbox,
        :host([checked]) .radio {
          background: ${h.HighlightText};
          border-color: ${h.HighlightText};
        }
        :host(:hover) .expanded-toggle,
            :host(:hover) .checkbox,
            :host(:hover) .radio,
            :host(:${O}) .expanded-toggle,
            :host(:${O}) .checkbox,
            :host(:${O}) .radio,
            :host([checked]:hover) .checkbox,
            :host([checked]:hover) .radio,
            :host([checked]:${O}) .checkbox,
            :host([checked]:${O}) .radio {
          border-color: ${h.HighlightText};
        }
        :host([aria-checked='true']) {
          background: ${h.Highlight};
          color: ${h.HighlightText};
        }
        :host([aria-checked='true']) .checkbox-indicator,
        :host([aria-checked='true']) ::slotted([slot='checkbox-indicator']),
        :host([aria-checked='true']) ::slotted([slot='radio-indicator']) {
          fill: ${h.Highlight};
        }
        :host([aria-checked='true']) .radio-indicator {
          background: ${h.Highlight};
        }
      `),new Kt(m`
        .expand-collapse-glyph-container {
          transform: rotate(0deg);
        }
      `,m`
        .expand-collapse-glyph-container {
          transform: rotate(180deg);
        }
      `));var uu=Tt.compose({baseName:"menu-item",template:Pc,styles:hu,checkboxIndicator:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.86 3.66a.5.5 0 01-.02.7l-7.93 7.48a.6.6 0 01-.84-.02L2.4 9.1a.5.5 0 01.72-.7l2.4 2.44 7.65-7.2a.5.5 0 01.7.02z"/>
    </svg>
  `,expandCollapseGlyph:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.65 3.15a.5.5 0 000 .7L9.79 8l-4.14 4.15a.5.5 0 00.7.7l4.5-4.5a.5.5 0 000-.7l-4.5-4.5a.5.5 0 00-.7 0z"/>
    </svg>
  `,radioIndicator:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="2"/>
    </svg>
  `});var nr=".root",pu=(o,t)=>m`
    ${T("inline-block")}

    ${So(o,t,nr)}

    ${Pe(o,t,nr)}

    .root {
      display: flex;
      flex-direction: row;
    }

    .control {
      -webkit-appearance: none;
      color: inherit;
      background: transparent;
      border: 0;
      height: calc(100% - 4px);
      margin-top: auto;
      margin-bottom: auto;
      padding: 0 calc(${x} * 2px + 1px);
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
    }

    .start,
    .end {
      margin: auto;
      fill: currentcolor;
    }

    .start {
      display: flex;
      margin-inline-start: 11px;
    }

    .end {
      display: flex;
      margin-inline-end: 11px;
    }

    .controls {
      opacity: 0;
      position: relative;
      top: -1px;
      z-index: 3;
    }

    :host(:hover:not([disabled])) .controls,
    :host(:focus-within:not([disabled])) .controls {
      opacity: 1;
    }

    .step-up,
    .step-down {
      display: flex;
      padding: 0 8px;
      cursor: pointer;
    }

    .step-up {
      padding-top: 3px;
    }
  `.withBehaviors(Y("outline",He(o,t,nr)),Y("filled",me(o,t,nr)),I(ge(o,t,nr)));var Yn=class extends Rt{connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}};$([c],Yn.prototype,"appearance",void 0);var fu=Yn.compose({baseName:"number-field",baseClass:Rt,styles:pu,template:Bc,shadowOptions:{delegatesFocus:!0},stepDownGlyph:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>
    </svg>
  `,stepUpGlyph:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 7.35c.2.2.5.2.7 0L6 4.21l3.15 3.14a.5.5 0 10.7-.7l-3.5-3.5a.5.5 0 00-.7 0l-3.5 3.5a.5.5 0 000 .7z"/>
    </svg>
`});var mu=(o,t)=>m`
    ${T("flex")} :host {
      align-items: center;
      height: calc((${C} * 3) * 1px);
    }

    .progress {
      background-color: ${fe};
      border-radius: calc(${x} * 1px);
      width: 100%;
      height: calc(${C} * 1px);
      display: flex;
      align-items: center;
      position: relative;
    }

    .determinate {
      background-color: ${G};
      border-radius: calc(${x} * 1px);
      height: calc((${C} * 3) * 1px);
      transition: all 0.2s ease-in-out;
      display: flex;
    }

    .indeterminate {
      height: calc((${C} * 3) * 1px);
      border-radius: calc(${x} * 1px);
      display: flex;
      width: 100%;
      position: relative;
      overflow: hidden;
    }

    .indeterminate-indicator-1 {
      position: absolute;
      opacity: 0;
      height: 100%;
      background-color: ${G};
      border-radius: calc(${x} * 1px);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
      width: 40%;
      animation: indeterminate-1 2s infinite;
    }

    .indeterminate-indicator-2 {
      position: absolute;
      opacity: 0;
      height: 100%;
      background-color: ${G};
      border-radius: calc(${x} * 1px);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
      width: 60%;
      animation: indeterminate-2 2s infinite;
    }

    :host(.paused) .indeterminate-indicator-1,
    :host(.paused) .indeterminate-indicator-2 {
      animation: none;
      background-color: ${Le};
      width: 100%;
      opacity: 1;
    }

    :host(.paused) .determinate {
      background-color: ${Le};
    }

    @keyframes indeterminate-1 {
      0% {
        opacity: 1;
        transform: translateX(-100%);
      }
      70% {
        opacity: 1;
        transform: translateX(300%);
      }
      70.01% {
        opacity: 0;
      }
      100% {
        opacity: 0;
        transform: translateX(300%);
      }
    }

    @keyframes indeterminate-2 {
      0% {
        opacity: 0;
        transform: translateX(-150%);
      }
      29.99% {
        opacity: 0;
      }
      30% {
        opacity: 1;
        transform: translateX(-150%);
      }
      100% {
        transform: translateX(166.66%);
        opacity: 1;
      }
    }
  `.withBehaviors(I(m`
        .indeterminate-indicator-1,
        .indeterminate-indicator-2,
        .determinate,
        .progress {
          background-color: ${h.ButtonText};
        }
        :host(.paused) .indeterminate-indicator-1,
        :host(.paused) .indeterminate-indicator-2,
        :host(.paused) .determinate {
          background-color: ${h.GrayText};
        }
      `));var al=class extends $e{},gu=al.compose({baseName:"progress",template:_c,styles:mu,indeterminateIndicator1:`
    <span class="indeterminate-indicator-1" part="indeterminate-indicator-1"></span>
  `,indeterminateIndicator2:`
    <span class="indeterminate-indicator-2" part="indeterminate-indicator-2"></span>
  `});var vu=(o,t)=>m`
    ${T("flex")} :host {
      align-items: center;
      height: calc(${E} * 1px);
      width: calc(${E} * 1px);
    }

    .progress {
      height: 100%;
      width: 100%;
    }

    .background {
      fill: none;
      stroke-width: 2px;
    }

    .determinate {
      stroke: ${G};
      fill: none;
      stroke-width: 2px;
      stroke-linecap: round;
      transform-origin: 50% 50%;
      transform: rotate(-90deg);
      transition: all 0.2s ease-in-out;
    }

    .indeterminate-indicator-1 {
      stroke: ${G};
      fill: none;
      stroke-width: 2px;
      stroke-linecap: round;
      transform-origin: 50% 50%;
      transform: rotate(-90deg);
      transition: all 0.2s ease-in-out;
      animation: spin-infinite 2s linear infinite;
    }

    :host(.paused) .indeterminate-indicator-1 {
      animation: none;
      stroke: ${Le};
    }

    :host(.paused) .determinate {
      stroke: ${Le};
    }

    @keyframes spin-infinite {
      0% {
        stroke-dasharray: 0.01px 43.97px;
        transform: rotate(0deg);
      }
      50% {
        stroke-dasharray: 21.99px 21.99px;
        transform: rotate(450deg);
      }
      100% {
        stroke-dasharray: 0.01px 43.97px;
        transform: rotate(1080deg);
      }
    }
  `.withBehaviors(I(m`
        .background {
          stroke: ${h.Field};
        }
        .determinate,
        .indeterminate-indicator-1 {
          stroke: ${h.ButtonText};
        }
        :host(.paused) .determinate,
        :host(.paused) .indeterminate-indicator-1 {
          stroke: ${h.GrayText};
        }
      `));var ll=class extends $e{},bu=ll.compose({baseName:"progress-ring",template:Nc,styles:vu,indeterminateIndicator:`
    <svg class="progress" part="progress" viewBox="0 0 16 16">
        <circle
            class="background"
            part="background"
            cx="8px"
            cy="8px"
            r="7px"
        ></circle>
        <circle
            class="indeterminate-indicator-1"
            part="indeterminate-indicator-1"
            cx="8px"
            cy="8px"
            r="7px"
        ></circle>
    </svg>
  `});var xu=(o,t)=>m`
    ${T("inline-flex")} :host {
      --input-size: calc((${E} / 2) + ${x});
      align-items: center;
      outline: none;
      ${""} user-select: none;
      position: relative;
      flex-direction: row;
      transition: all 0.2s ease-in-out;
    }

    .control {
      position: relative;
      width: calc(var(--input-size) * 1px);
      height: calc(var(--input-size) * 1px);
      box-sizing: border-box;
      border-radius: 50%;
      border: calc(${C} * 1px) solid ${fe};
      background: ${ui};
      cursor: pointer;
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      ${N}
      color: ${H};
      ${""} padding-inline-start: calc(${x} * 2px + 2px);
      margin-inline-end: calc(${x} * 2px + 2px);
      cursor: pointer;
    }

    .control,
    slot[name='checked-indicator'] {
      flex-shrink: 0;
    }

    slot[name='checked-indicator'] {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      fill: ${oe};
      opacity: 0;
      pointer-events: none;
    }

    :host(:not(.disabled):hover) .control {
      background: ${pi};
      border-color: ${yi};
    }

    :host(:not(.disabled):active) .control {
      background: ${fi};
      border-color: ${wi};
    }

    :host(:not(.disabled):active) slot[name='checked-indicator'] {
      opacity: 1;
    }

    :host(:${O}) .control {
      ${Ve}
      background: ${mi};
    }

    :host(.checked) .control {
      background: ${G};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .control {
      background: ${Bt};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .control {
      background: ${Mt};
      border-color: transparent;
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.readonly) .control,
    :host(.disabled) .control {
      cursor: ${lt};
    }

    :host(.checked) slot[name='checked-indicator'] {
      opacity: 1;
    }

    :host(.disabled) {
      opacity: ${nt};
    }
  `.withBehaviors(I(m`
        .control {
          background: ${h.Field};
          border-color: ${h.FieldText};
        }
        :host(:not(.disabled):hover) .control,
        :host(:not(.disabled):active) .control {
          border-color: ${h.Highlight};
        }
        :host(:${O}) .control {
          forced-color-adjust: none;
          background: ${h.Field};
          outline-color: ${h.FieldText};
        }
        :host(.checked:not(.disabled):hover) .control,
        :host(.checked:not(.disabled):active) .control {
          border-color: ${h.Highlight};
          background: ${h.Highlight};
        }
        :host(.checked) slot[name='checked-indicator'] {
          fill: ${h.Highlight};
        }
        :host(.checked:hover) .control slot[name='checked-indicator'] {
          fill: ${h.HighlightText};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) .label {
          color: ${h.GrayText};
        }
        :host(.disabled) .control,
        :host(.checked.disabled) .control {
          background: ${h.Field};
          border-color: ${h.GrayText};
        }
        :host(.disabled) slot[name='checked-indicator'],
        :host(.checked.disabled) slot[name='checked-indicator'] {
          fill: ${h.GrayText};
        }
      `));var yu=No.compose({baseName:"radio",template:Gc,styles:xu,checkedIndicator:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="4"/>
    </svg>
  `});var wu=(o,t)=>m`
  ${T("flex")} :host {
    align-items: flex-start;
    flex-direction: column;
  }

  .positioning-region {
    display: flex;
    flex-wrap: wrap;
  }

  :host([orientation='vertical']) .positioning-region {
    flex-direction: column;
  }

  :host([orientation='horizontal']) .positioning-region {
    flex-direction: row;
  }
`;var $u=ke.compose({baseName:"radio-group",template:jc,styles:wu});var ku=(o,t)=>v`
  <template
    class="
            ${e=>e.readOnly?"readonly":""}
        "
  >
    <label
      part="label"
      for="control"
      class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
    >
      <slot ${z({property:"defaultSlottedNodes",filter:Vr})}></slot>
    </label>
    <div class="root" part="root" ${V("root")}>
      ${K(o,t)}
      <div class="input-wrapper" part="input-wrapper">
        <input
          class="control"
          part="control"
          id="control"
          @input="${e=>e.handleTextInput()}"
          @change="${e=>e.handleChange()}"
          ?autofocus="${e=>e.autofocus}"
          ?disabled="${e=>e.disabled}"
          list="${e=>e.list}"
          maxlength="${e=>e.maxlength}"
          minlength="${e=>e.minlength}"
          pattern="${e=>e.pattern}"
          placeholder="${e=>e.placeholder}"
          ?readonly="${e=>e.readOnly}"
          ?required="${e=>e.required}"
          size="${e=>e.size}"
          ?spellcheck="${e=>e.spellcheck}"
          :value="${e=>e.value}"
          type="search"
          aria-atomic="${e=>e.ariaAtomic}"
          aria-busy="${e=>e.ariaBusy}"
          aria-controls="${e=>e.ariaControls}"
          aria-current="${e=>e.ariaCurrent}"
          aria-describedby="${e=>e.ariaDescribedby}"
          aria-details="${e=>e.ariaDetails}"
          aria-disabled="${e=>e.ariaDisabled}"
          aria-errormessage="${e=>e.ariaErrormessage}"
          aria-flowto="${e=>e.ariaFlowto}"
          aria-haspopup="${e=>e.ariaHaspopup}"
          aria-hidden="${e=>e.ariaHidden}"
          aria-invalid="${e=>e.ariaInvalid}"
          aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
          aria-label="${e=>e.ariaLabel}"
          aria-labelledby="${e=>e.ariaLabelledby}"
          aria-live="${e=>e.ariaLive}"
          aria-owns="${e=>e.ariaOwns}"
          aria-relevant="${e=>e.ariaRelevant}"
          aria-roledescription="${e=>e.ariaRoledescription}"
          ${V("control")}
        />
        <slot name="clear-button">
          <button
            class="clear-button ${e=>e.value?"":"clear-button__hidden"}"
            part="clear-button"
            tabindex="-1"
            @click=${e=>e.handleClearInput()}
          >
            <slot name="clear-glyph">
              <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m2.09 2.22.06-.07a.5.5 0 0 1 .63-.06l.07.06L6 5.29l3.15-3.14a.5.5 0 1 1 .7.7L6.71 6l3.14 3.15c.18.17.2.44.06.63l-.06.07a.5.5 0 0 1-.63.06l-.07-.06L6 6.71 2.85 9.85a.5.5 0 0 1-.7-.7L5.29 6 2.15 2.85a.5.5 0 0 1-.06-.63l.06-.07-.06.07Z"
                />
              </svg>
            </slot>
          </button>
        </slot>
      </div>
      ${J(o,t)}
    </div>
  </template>
`;var sr=".root",Cm=q.create("clear-button-hover").withDefault(o=>{let t=Jt.getValueFor(o),e=Ae.getValueFor(o);return t.evaluate(o,e.evaluate(o).focus).hover}),Sm=q.create("clear-button-active").withDefault(o=>{let t=Jt.getValueFor(o),e=Ae.getValueFor(o);return t.evaluate(o,e.evaluate(o).focus).active}),Cu=(o,t)=>m`
    ${T("inline-block")}

    ${So(o,t,sr)}

    ${Pe(o,t,sr)}

    .root {
      display: flex;
      flex-direction: row;
    }
    .control {
      -webkit-appearance: none;
      color: inherit;
      background: transparent;
      border: 0;
      height: calc(100% - 4px);
      margin-top: auto;
      margin-bottom: auto;
      padding: 0 calc(${x} * 2px + 1px);
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
    }
    .clear-button {
      display: inline-flex;
      align-items: center;
      margin: 1px;
      height: calc(100% - 2px);
      opacity: 0;
      background: transparent;
      color: ${H};
      fill: currentcolor;
      border: none;
      border-radius: calc(${P} * 1px);
      min-width: calc(${E} * 1px);
      ${N}
      outline: none;
      padding: 0 calc((10 + (${x} * 2 * ${Pt})) * 1px);
    }
    .clear-button:hover {
      background: ${Cm};
    }
    .clear-button:active {
      background: ${Sm};
    }
    :host(:hover:not([disabled], [readOnly])) .clear-button,
    :host(:active:not([disabled], [readOnly])) .clear-button,
    :host(:focus-within:not([disabled], [readOnly])) .clear-button {
        opacity: 1;
    }
    :host(:hover:not([disabled], [readOnly])) .clear-button__hidden,
    :host(:active:not([disabled], [readOnly])) .clear-button__hidden,
    :host(:focus-within:not([disabled], [readOnly])) .clear-button__hidden {
        opacity: 0;
    }
    .control::-webkit-search-cancel-button {
      -webkit-appearance: none;
    }
    .input-wrapper {
      display: flex;
      position: relative;
      width: 100%;
    }
    .start,
    .end {
      display: flex;
      margin: 1px;
      align-items: center;
    }
    .start {
      display: flex;
      margin-inline-start: 11px;
    }
    ::slotted([slot="end"]) {
      height: 100%
    }
    .clear-button__hidden {
      opacity: 0;
    }
    .end {
        margin-inline-end: 11px;
    }
    ::slotted(${o.tagFor(Et)}) {
      margin-inline-end: 1px;
    }
  `.withBehaviors(Y("outline",He(o,t,sr)),Y("filled",me(o,t,sr)),I(ge(o,t,sr)));var Qn=class extends Vt{constructor(){super(...arguments),this.appearance="outline"}};$([c],Qn.prototype,"appearance",void 0);var Su=Qn.compose({baseName:"search",baseClass:Vt,template:ku,styles:Cu,start:'<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg%22%3E"><path d="M8.5 3a5.5 5.5 0 0 1 4.23 9.02l4.12 4.13a.5.5 0 0 1-.63.76l-.07-.06-4.13-4.12A5.5 5.5 0 1 1 8.5 3Zm0 1a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z"/></svg>',shadowOptions:{delegatesFocus:!0}});var Zn=class extends de{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline"),this.listbox&&L.setValueFor(this.listbox,De)}};$([c({mode:"fromView"})],Zn.prototype,"appearance",void 0);var Fu=Zn.compose({baseName:"select",baseClass:de,template:qc,styles:Mh,indicator:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>
    </svg>
  `});var Tu=(o,t)=>m`
    ${T("block")} :host {
      --skeleton-fill-default: ${pe};
      overflow: hidden;
      width: 100%;
      position: relative;
      background-color: var(--skeleton-fill, var(--skeleton-fill-default));
      --skeleton-animation-gradient-default: linear-gradient(
        270deg,
        var(--skeleton-fill, var(--skeleton-fill-default)) 0%,
        ${gi} 51%,
        var(--skeleton-fill, var(--skeleton-fill-default)) 100%
      );
      --skeleton-animation-timing-default: ease-in-out;
    }

    :host(.rect) {
      border-radius: calc(${P} * 1px);
    }

    :host(.circle) {
      border-radius: 100%;
      overflow: hidden;
    }

    object {
      position: absolute;
      width: 100%;
      height: auto;
      z-index: 2;
    }

    object img {
      width: 100%;
      height: auto;
    }

    ${T("block")} span.shimmer {
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: var(--skeleton-animation-gradient, var(--skeleton-animation-gradient-default));
      background-size: 0px 0px / 90% 100%;
      background-repeat: no-repeat;
      background-color: var(--skeleton-animation-fill, ${pe});
      animation: shimmer 2s infinite;
      animation-timing-function: var(--skeleton-animation-timing, var(--skeleton-timing-default));
      animation-direction: normal;
      z-index: 1;
    }

    ::slotted(svg) {
      z-index: 2;
    }

    ::slotted(.pattern) {
      width: 100%;
      height: 100%;
    }

    @keyframes shimmer {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(100%);
      }
    }
  `.withBehaviors(I(m`
        :host{
          background-color: ${h.CanvasText};
        }
      `));var Ru=yo.compose({baseName:"skeleton",template:Wc,styles:Tu});var Iu=(o,t)=>m`
    ${T("inline-grid")} :host {
      --thumb-size: calc((${E} / 2) + ${x} + (${C} * 2));
      --thumb-translate: calc(var(--thumb-size) * -0.5 + var(--track-width) / 2);
      --track-overhang: calc((${x} / 2) * -1);
      --track-width: ${x};
      align-items: center;
      width: 100%;
      user-select: none;
      box-sizing: border-box;
      border-radius: calc(${P} * 1px);
      outline: none;
      cursor: pointer;
    }
    :host(.horizontal) .positioning-region {
      position: relative;
      margin: 0 8px;
      display: grid;
      grid-template-rows: calc(var(--thumb-size) * 1px) 1fr;
    }
    :host(.vertical) .positioning-region {
      position: relative;
      margin: 0 8px;
      display: grid;
      height: 100%;
      grid-template-columns: calc(var(--thumb-size) * 1px) 1fr;
    }
    :host(:${O}) .thumb-cursor {
      box-shadow: 0 0 0 2px ${L}, 0 0 0 4px ${$i};
    }
    .thumb-container {
      position: absolute;
      height: calc(var(--thumb-size) * 1px);
      width: calc(var(--thumb-size) * 1px);
      transition: all 0.2s ease;
    }
    .thumb-cursor {
      display: flex;
      position: relative;
      border: none;
      width: calc(var(--thumb-size) * 1px);
      height: calc(var(--thumb-size) * 1px);
      background: padding-box linear-gradient(${Ut}, ${Ut}),
        border-box ${bi};
      border: calc(${C} * 1px) solid transparent;
      border-radius: 50%;
      box-sizing: border-box;
    }
    .thumb-cursor::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 100%;
      margin: 4px;
      background: ${G};
    }
    :host(:not(.disabled)) .thumb-cursor:hover::after {
      background: ${Bt};
      margin: 3px;
    }
    :host(:not(.disabled)) .thumb-cursor:active::after {
      background: ${Mt};
      margin: 5px;
    }
    :host(:not(.disabled)) .thumb-cursor:hover {
      background: padding-box linear-gradient(${Ut}, ${Ut}),
        border-box ${Dn};
    }
    :host(:not(.disabled)) .thumb-cursor:active {
      background: padding-box linear-gradient(${Ut}, ${Ut}),
        border-box ${An};
    }
    .track-start {
      background: ${G};
      position: absolute;
      height: 100%;
      left: 0;
      border-radius: calc(${P} * 1px);
    }
    :host(.horizontal) .thumb-container {
      transform: translateX(calc(var(--thumb-size) * 0.5px)) translateY(calc(var(--thumb-translate) * 1px));
    }
    :host(.vertical) .thumb-container {
      transform: translateX(calc(var(--thumb-translate) * 1px)) translateY(calc(var(--thumb-size) * 0.5px));
    }
    :host(.horizontal) {
      min-width: calc(var(--thumb-size) * 1px);
    }
    :host(.horizontal) .track {
      right: calc(var(--track-overhang) * 1px);
      left: calc(var(--track-overhang) * 1px);
      align-self: start;
      height: calc(var(--track-width) * 1px);
    }
    :host(.vertical) .track {
      top: calc(var(--track-overhang) * 1px);
      bottom: calc(var(--track-overhang) * 1px);
      width: calc(var(--track-width) * 1px);
      height: 100%;
    }
    .track {
      background: ${Fn};
      border: 1px solid ${fe};
      border-radius: 2px;
      box-sizing: border-box;
      position: absolute;
    }
    :host(.vertical) {
      height: 100%;
      min-height: calc(${x} * 60px);
      min-width: calc(${x} * 20px);
    }
    :host(.vertical) .track-start {
      height: auto;
      width: 100%;
      top: 0;
    }
    :host(.disabled),
    :host(.readonly) {
      cursor: ${lt};
    }
    :host(.disabled) {
      opacity: ${nt};
    }
  `.withBehaviors(I(m`
        .thumb-cursor {
          forced-color-adjust: none;
          border-color: ${h.FieldText};
          background: ${h.FieldText};
        }
        :host(:not(.disabled)) .thumb-cursor:hover,
        :host(:not(.disabled)) .thumb-cursor:active {
          background: ${h.Highlight};
        }
        .track {
          forced-color-adjust: none;
          background: ${h.FieldText};
        }
        .thumb-cursor::after,
        :host(:not(.disabled)) .thumb-cursor:hover::after,
        :host(:not(.disabled)) .thumb-cursor:active::after {
          background: ${h.Field};
        }
        :host(:${O}) .thumb-cursor {
          background: ${h.Highlight};
          border-color: ${h.Highlight};
          box-shadow: 0 0 0 1px ${h.Field}, 0 0 0 3px ${h.FieldText};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) .track,
        :host(.disabled) .thumb-cursor {
          forced-color-adjust: none;
          background: ${h.GrayText};
        }
      `));var Du=yt.compose({baseName:"slider",template:Yc,styles:Iu,thumb:`
    <div class="thumb-cursor"></div>
  `});var Au=(o,t)=>m`
    ${T("block")} :host {
      ${Pn}
    }
    .root {
      position: absolute;
      display: grid;
    }
    :host(.horizontal) {
      align-self: start;
      grid-row: 2;
      margin-top: -4px;
    }
    :host(.vertical) {
      justify-self: start;
      grid-column: 2;
      margin-left: 2px;
    }
    .container {
      display: grid;
      justify-self: center;
    }
    :host(.horizontal) .container {
      grid-template-rows: auto auto;
      grid-template-columns: 0;
    }
    :host(.vertical) .container {
      grid-template-columns: auto auto;
      grid-template-rows: 0;
      min-width: calc(var(--thumb-size) * 1px);
      height: calc(var(--thumb-size) * 1px);
    }
    .label {
      justify-self: center;
      align-self: center;
      white-space: nowrap;
      max-width: 30px;
      margin: 2px 0;
    }
    .mark {
      width: calc(${C} * 1px);
      height: calc(${x} * 1px);
      background: ${fe};
      justify-self: center;
    }
    :host(.vertical) .mark {
      transform: rotate(90deg);
      align-self: center;
    }
    :host(.vertical) .label {
      margin-left: calc((${x} / 2) * 2px);
      align-self: center;
    }
    :host(.disabled) {
      opacity: ${nt};
    }
  `.withBehaviors(I(m`
        .mark {
          forced-color-adjust: none;
          background: ${h.FieldText};
        }
        :host(.disabled) {
          forced-color-adjust: none;
          opacity: 1;
        }
        :host(.disabled) .label {
          color: ${h.GrayText};
        }
        :host(.disabled) .mark {
          background: ${h.GrayText};
        }
      `));var Ou=he.compose({baseName:"slider-label",template:Xc,styles:Au});var Eu=(o,t)=>m`
    :host([hidden]) {
      display: none;
    }

    ${T("inline-flex")} :host {
      align-items: center;
      outline: none;
      font-family: ${Ht};
      ${""} user-select: none;
    }

    :host(.disabled) {
      opacity: ${nt};
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.disabled) .switch,
    :host(.readonly) .switch,
    :host(.disabled) .status-message,
    :host(.readonly) .status-message {
      cursor: ${lt};
    }

    .switch {
      position: relative;
      box-sizing: border-box;
      width: calc(((${E} / 2) + ${x}) * 2px);
      height: calc(((${E} / 2) + ${x}) * 1px);
      background: ${ui};
      border-radius: calc(${E} * 1px);
      border: calc(${C} * 1px) solid ${fe};
      cursor: pointer;
    }

    :host(:not(.disabled):hover) .switch {
      background: ${pi};
      border-color: ${yi};
    }

    :host(:not(.disabled):active) .switch {
      background: ${fi};
      border-color: ${wi};
    }

    :host(:${O}) .switch {
      ${Ve}
      background: ${mi};
    }

    :host(.checked) .switch {
      background: ${G};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .switch {
      background: ${Bt};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .switch {
      background: ${Mt};
      border-color: transparent;
    }

    slot[name='switch'] {
      position: absolute;
      display: flex;
      border: 1px solid transparent; /* Spacing included in the transform reference box */
      fill: ${H};
      transition: all 0.2s ease-in-out;
    }

    .status-message {
      color: ${H};
      cursor: pointer;
      ${N}
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      color: ${H};
      ${N}
      margin-inline-end: calc(${x} * 2px + 2px);
      cursor: pointer;
    }

    ::slotted([slot="checked-message"]),
    ::slotted([slot="unchecked-message"]) {
        margin-inline-start: calc(${x} * 2px + 2px);
    }

    :host(.checked) .switch {
      background: ${G};
    }

    :host(.checked) .switch slot[name='switch'] {
      fill: ${oe};
      filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.15));
    }

    :host(.checked:not(.disabled)) .switch:hover {
      background: ${Bt};
    }

    :host(.checked:not(.disabled)) .switch:hover slot[name='switch'] {
      fill: ${xn};
    }

    :host(.checked:not(.disabled)) .switch:active {
      background: ${Mt};
    }

    :host(.checked:not(.disabled)) .switch:active slot[name='switch'] {
      fill: ${yn};
    }

    .unchecked-message {
      display: block;
    }

    .checked-message {
      display: none;
    }

    :host(.checked) .unchecked-message {
      display: none;
    }

    :host(.checked) .checked-message {
      display: block;
    }
  `.withBehaviors(new Kt(m`
        slot[name='switch'] {
          left: 0;
        }

        :host(.checked) slot[name='switch'] {
          left: 100%;
          transform: translateX(-100%);
        }
      `,m`
        slot[name='switch'] {
          right: 0;
        }

        :host(.checked) slot[name='switch'] {
          right: 100%;
          transform: translateX(100%);
        }
      `),I(m`
        :host(:not(.disabled)) .switch slot[name='switch'] {
          forced-color-adjust: none;
          fill: ${h.FieldText};
        }
        .switch {
          background: ${h.Field};
          border-color: ${h.FieldText};
        }
        :host(.checked) .switch {
          background: ${h.Highlight};
          border-color: ${h.Highlight};
        }
        :host(:not(.disabled):hover) .switch ,
        :host(:not(.disabled):active) .switch,
        :host(.checked:not(.disabled):hover) .switch {
          background: ${h.HighlightText};
          border-color: ${h.Highlight};
        }
        :host(.checked:not(.disabled)) .switch slot[name="switch"] {
          fill: ${h.HighlightText};
        }
        :host(.checked:not(.disabled):hover) .switch slot[name='switch'] {
          fill: ${h.Highlight};
        }
        :host(:${O}) .switch {
          forced-color-adjust: none;
          background: ${h.Field}; 
          border-color: ${h.Highlight};
          outline-color: ${h.FieldText};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) slot[name='switch'] {
          forced-color-adjust: none;
          fill: ${h.GrayText};
        }
        :host(.disabled) .switch {
          background: ${h.Field};
          border-color: ${h.GrayText};
        }
        .status-message,
        .label {
          color: ${h.FieldText};
        }
      `));var Lu=ni.compose({baseName:"switch",template:Qc,styles:Eu,switch:`
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="12" height="12" rx="6"/>
    </svg>
  `});var Vu=(o,t)=>m`
      ${T("grid")} :host {
        box-sizing: border-box;
        ${N}
        color: ${H};
        grid-template-columns: auto 1fr auto;
        grid-template-rows: auto 1fr;
      }

      .tablist {
        display: grid;
        grid-template-rows: calc(${E} * 1px); auto;
        grid-template-columns: auto;
        position: relative;
        width: max-content;
        align-self: end;
      }

      .start,
      .end {
        align-self: center;
      }

      .activeIndicator {
        grid-row: 2;
        grid-column: 1;
        width: 20px;
        height: 3px;
        border-radius: calc(${P} * 1px);
        justify-self: center;
        background: ${G};
      }

      .activeIndicatorTransition {
        transition: transform 0.2s ease-in-out;
      }

      .tabpanel {
        grid-row: 2;
        grid-column-start: 1;
        grid-column-end: 4;
        position: relative;
      }

      :host(.vertical) {
        grid-template-rows: auto 1fr auto;
        grid-template-columns: auto 1fr;
      }

      :host(.vertical) .tablist {
        grid-row-start: 2;
        grid-row-end: 2;
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: auto 1fr;
        position: relative;
        width: max-content;
        justify-self: end;
        align-self: flex-start;
        width: 100%;
      }

      :host(.vertical) .tabpanel {
        grid-column: 2;
        grid-row-start: 1;
        grid-row-end: 4;
      }

      :host(.vertical) .end {
        grid-row: 3;
      }

      :host(.vertical) .activeIndicator {
        grid-column: 1;
        grid-row: 1;
        width: 3px;
        height: 20px;
        margin-inline-start: calc(${ct} * 1px);
        border-radius: calc(${P} * 1px);
        align-self: center;
        background: ${G};
      }

      :host(.vertical) .activeIndicatorTransition {
        transition: transform 0.2s linear;
      }
    `.withBehaviors(I(m`
        .activeIndicator,
        :host(.vertical) .activeIndicator {
          background: ${h.Highlight};
        }
      `));var Pu=(o,t)=>m`
      ${T("inline-flex")} :host {
        box-sizing: border-box;
        ${N}
        height: calc((${E} + (${x} * 2)) * 1px);
        padding: 0 calc((6 + (${x} * 2 * ${Pt})) * 1px);
        color: ${H};
        border-radius: calc(${P} * 1px);
        border: calc(${C} * 1px) solid transparent;
        align-items: center;
        justify-content: center;
        grid-row: 1 / 3;
        cursor: pointer;
      }

      :host([aria-selected='true']) {
        z-index: 2;
      }

      :host(:hover),
      :host(:active) {
        color: ${H};
      }

      :host(:${O}) {
        ${dt}
      }

      :host(.vertical) {
        justify-content: start;
        grid-column: 1 / 3;
      }

      :host(.vertical[aria-selected='true']) {
        z-index: 2;
      }

      :host(.vertical:hover),
      :host(.vertical:active) {
        color: ${H};
      }

      :host(.vertical:hover[aria-selected='true']) {
      }
    `.withBehaviors(I(m`
          :host {
            forced-color-adjust: none;
            border-color: transparent;
            color: ${h.ButtonText};
            fill: currentcolor;
          }
          :host(:hover),
          :host(.vertical:hover),
          :host([aria-selected='true']:hover) {
            background: transparent;
            color: ${h.Highlight};
            fill: currentcolor;
          }
          :host([aria-selected='true']) {
            background: transparent;
            color: ${h.Highlight};
            fill: currentcolor;
          }
          :host(:${O}) {
            background: transparent;
            outline-color: ${h.ButtonText};
          }
        `));var Hu=ji.compose({baseName:"tab",template:Jc,styles:Pu});var Bu=(o,t)=>m`
  ${T("block")} :host {
    box-sizing: border-box;
    ${N}
    padding: 0 calc((6 + (${x} * 2 * ${Pt})) * 1px);
  }
`;var Mu=_r.compose({baseName:"tab-panel",template:Zc,styles:Bu});var zu=ue.compose({baseName:"tabs",template:Kc,styles:Vu});var ar=".control",Nu=(o,t)=>m`
    ${T("inline-flex")}

    ${So(o,t,ar)}

    ${Pe(o,t,ar)}

    :host {
      flex-direction: column;
      vertical-align: bottom;
    }

    .control {
      height: calc((${E} * 2) * 1px);
      padding: calc(${x} * 1.5px) calc(${x} * 2px + 1px);
    }

    :host .control {
      resize: none;
    }

    :host(.resize-both) .control {
      resize: both;
    }

    :host(.resize-horizontal) .control {
      resize: horizontal;
    }

    :host(.resize-vertical) .control {
      resize: vertical;
    }
  `.withBehaviors(Y("outline",He(o,t,ar)),Y("filled",me(o,t,ar)),I(ge(o,t,ar)));var Jn=class extends wt{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}};$([c],Jn.prototype,"appearance",void 0);var _u=Jn.compose({baseName:"text-area",baseClass:wt,template:ed,styles:Nu,shadowOptions:{delegatesFocus:!0}});var lr=".root",ju=(o,t)=>m`
    ${T("inline-block")}

    ${So(o,t,lr)}

    ${Pe(o,t,lr)}

    .root {
      display: flex;
      flex-direction: row;
    }

    .control {
      -webkit-appearance: none;
      color: inherit;
      background: transparent;
      border: 0;
      height: calc(100% - 4px);
      margin-top: auto;
      margin-bottom: auto;
      padding: 0 calc(${x} * 2px + 1px);
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
    }

    .start,
    .end {
      display: flex;
      margin: auto;
    }

    .start {
      display: flex;
      margin-inline-start: 11px;
    }

    .end {
      display: flex;
      margin-inline-end: 11px;
    }
  `.withBehaviors(Y("outline",He(o,t,lr)),Y("filled",me(o,t,lr)),I(ge(o,t,lr)));var Kn=class extends Lt{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}};$([c],Kn.prototype,"appearance",void 0);var Gu=Kn.compose({baseName:"text-field",baseClass:Lt,template:od,styles:ju,shadowOptions:{delegatesFocus:!0}});var Uu=(o,t)=>m`
    ${T("inline-flex")} :host {
      --toolbar-item-gap: calc(${x} * 1px);
      background: ${L};
      fill: currentcolor;
      padding: var(--toolbar-item-gap);
      box-sizing: border-box;
      align-items: center;
    }

    :host(${O}) {
      ${dt}
    }

    .positioning-region {
      align-items: center;
      display: inline-flex;
      flex-flow: row wrap;
      justify-content: flex-start;
      flex-grow: 1;
    }

    :host([orientation='vertical']) .positioning-region {
      flex-direction: column;
      align-items: start;
    }

    ::slotted(:not([slot])) {
      flex: 0 0 auto;
      margin: 0 var(--toolbar-item-gap);
    }

    :host([orientation='vertical']) ::slotted(:not([slot])) {
      margin: var(--toolbar-item-gap) 0;
    }

    :host([orientation='vertical']) {
      display: inline-flex;
      flex-direction: column;
    }

    .start,
    .end {
      display: flex;
      align-items: center;
    }

    .end {
      margin-inline-start: auto;
    }

    .start__hidden,
    .end__hidden {
      display: none;
    }

    ::slotted(svg) {
      ${""}
      width: 16px;
      height: 16px;
    }
  `.withBehaviors(I(m`
        :host(:${O}) {
          outline-color: ${h.Highlight};
          color: ${h.ButtonText};
          forced-color-adjust: none;
        }
      `));var cl=class extends Ce{},qu=cl.compose({baseName:"toolbar",baseClass:Ce,template:id,styles:Uu});var Wu=(o,t)=>m`
    :host {
      position: relative;
      contain: layout;
      overflow: visible;
      height: 0;
      width: 0;
      z-index: 10000;
    }

    .tooltip {
      box-sizing: border-box;
      border-radius: calc(${P} * 1px);
      border: calc(${C} * 1px) solid ${eo};
      background: ${L};
      color: ${H};
      padding: 4px 12px;
      height: fit-content;
      width: fit-content;
      ${N}
      white-space: nowrap;
      box-shadow: ${gh};
    }

    ${o.tagFor(M)} {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: visible;
      flex-direction: row;
    }

    ${o.tagFor(M)}.right,
    ${o.tagFor(M)}.left {
      flex-direction: column;
    }

    ${o.tagFor(M)}.top .tooltip::after,
    ${o.tagFor(M)}.bottom .tooltip::after,
    ${o.tagFor(M)}.left .tooltip::after,
    ${o.tagFor(M)}.right .tooltip::after {
      content: '';
      width: 12px;
      height: 12px;
      background: ${L};
      border-top: calc(${C} * 1px) solid ${eo};
      border-left: calc(${C} * 1px) solid ${eo};
      position: absolute;
    }

    ${o.tagFor(M)}.top .tooltip::after {
      transform: translateX(-50%) rotate(225deg);
      bottom: 5px;
      left: 50%;
    }

    ${o.tagFor(M)}.top .tooltip {
      margin-bottom: 12px;
    }

    ${o.tagFor(M)}.bottom .tooltip::after {
      transform: translateX(-50%) rotate(45deg);
      top: 5px;
      left: 50%;
    }

    ${o.tagFor(M)}.bottom .tooltip {
      margin-top: 12px;
    }

    ${o.tagFor(M)}.left .tooltip::after {
      transform: translateY(-50%) rotate(135deg);
      top: 50%;
      right: 5px;
    }

    ${o.tagFor(M)}.left .tooltip {
      margin-right: 12px;
    }

    ${o.tagFor(M)}.right .tooltip::after {
      transform: translateY(-50%) rotate(-45deg);
      top: 50%;
      left: 5px;
    }

    ${o.tagFor(M)}.right .tooltip {
      margin-left: 12px;
    }
  `.withBehaviors(I(m`
        :host([disabled]) {
          opacity: 1;
        }
        ${o.tagFor(M)}.top .tooltip::after,
        ${o.tagFor(M)}.bottom .tooltip::after,
        ${o.tagFor(M)}.left .tooltip::after,
        ${o.tagFor(M)}.right .tooltip::after {
          content: '';
          width: unset;
          height: unset;
        }
      `));var dl=class extends st{connectedCallback(){super.connectedCallback(),L.setValueFor(this,De)}},Xu=dl.compose({baseName:"tooltip",baseClass:st,template:nd,styles:Wu});var Yu=(o,t)=>m`
  :host([hidden]) {
    display: none;
  }

  ${T("flex")} :host {
    flex-direction: column;
    align-items: stretch;
    min-width: fit-content;
    font-size: 0;
  }
`;var Qu=_o.compose({baseName:"tree-view",template:ad,styles:Yu});var Fm=m`
  .expand-collapse-button svg {
    transform: rotate(0deg);
  }
  :host(.nested) .expand-collapse-button {
    left: var(--expand-collapse-button-nested-width, calc(${E} * -1px));
  }
  :host([selected])::after {
    left: calc(${ct} * 1px);
  }
  :host([expanded]) > .positioning-region .expand-collapse-button svg {
    transform: rotate(90deg);
  }
`,Tm=m`
  .expand-collapse-button svg {
    transform: rotate(180deg);
  }
  :host(.nested) .expand-collapse-button {
    right: var(--expand-collapse-button-nested-width, calc(${E} * -1px));
  }
  :host([selected])::after {
    right: calc(${ct} * 1px);
  }
  :host([expanded]) > .positioning-region .expand-collapse-button svg {
    transform: rotate(90deg);
  }
`,Zu=kt`((${$o} / 2) * ${x}) + ((${x} * ${Pt}) / 2)`,Rm=q.create("tree-item-expand-collapse-hover").withDefault(o=>{let t=Jt.getValueFor(o);return t.evaluate(o,t.evaluate(o).hover).hover}),Im=q.create("tree-item-expand-collapse-selected-hover").withDefault(o=>{let t=Ke.getValueFor(o);return Jt.getValueFor(o).evaluate(o,t.evaluate(o).rest).hover}),Ju=(o,t)=>m`
    ${T("block")} :host {
      contain: content;
      position: relative;
      outline: none;
      color: ${H};
      fill: currentcolor;
      cursor: pointer;
      font-family: ${Ht};
      --expand-collapse-button-size: calc(${E} * 1px);
      --tree-item-nested-width: 0;
    }

    .positioning-region {
      display: flex;
      position: relative;
      box-sizing: border-box;
      background: ${to};
      border: calc(${C} * 1px) solid transparent;
      border-radius: calc(${P} * 1px);
      height: calc((${E} + 1) * 1px);
    }

    :host(:${O}) .positioning-region {
      ${dt}
    }

    .positioning-region::before {
      content: '';
      display: block;
      width: var(--tree-item-nested-width);
      flex-shrink: 0;
    }

    :host(:not([disabled])) .positioning-region:hover {
      background: ${Oe};
    }

    :host(:not([disabled])) .positioning-region:active {
      background: ${Ee};
    }

    .content-region {
      display: inline-flex;
      align-items: center;
      white-space: nowrap;
      width: 100%;
      height: calc(${E} * 1px);
      margin-inline-start: calc(${x} * 2px + 8px);
      ${N}
    }

    .items {
      display: none;
      ${""} font-size: calc(1em + (${x} + 16) * 1px);
    }

    .expand-collapse-button {
      background: none;
      border: none;
      border-radius: calc(${P} * 1px);
      ${""} width: calc((${Zu} + (${x} * 2)) * 1px);
      height: calc((${Zu} + (${x} * 2)) * 1px);
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      margin: 0 6px;
    }

    .expand-collapse-button svg {
      transition: transform 0.1s linear;
      pointer-events: none;
    }

    .start,
    .end {
      display: flex;
    }

    .start {
      ${""} margin-inline-end: calc(${x} * 2px + 2px);
    }

    .end {
      ${""} margin-inline-start: calc(${x} * 2px + 2px);
    }

    :host(.expanded) > .items {
      display: block;
    }

    :host([disabled]) {
      opacity: ${nt};
      cursor: ${lt};
    }

    :host(.nested) .content-region {
      position: relative;
      margin-inline-start: var(--expand-collapse-button-size);
    }

    :host(.nested) .expand-collapse-button {
      position: absolute;
    }

    :host(.nested) .expand-collapse-button:hover {
      background: ${Rm};
    }

    :host(:not([disabled])[selected]) .positioning-region {
      background: ${pe};
    }

    :host(:not([disabled])[selected]) .expand-collapse-button:hover {
      background: ${Im};
    }

    :host([selected])::after {
      content: '';
      display: block;
      position: absolute;
      top: calc((${E} / 4) * 1px);
      width: 3px;
      height: calc((${E} / 2) * 1px);
      ${""} background: ${G};
      border-radius: calc(${P} * 1px);
    }

    ::slotted(fluent-tree-item) {
      --tree-item-nested-width: 1em;
      --expand-collapse-button-nested-width: calc(${E} * -1px);
    }
  `.withBehaviors(new Kt(Fm,Tm),I(m`
        :host {
          color: ${h.ButtonText};
        }
        .positioning-region {
          border-color: ${h.ButtonFace};
          background: ${h.ButtonFace};
        }
        :host(:not([disabled])) .positioning-region:hover,
        :host(:not([disabled])) .positioning-region:active,
        :host(:not([disabled])[selected]) .positioning-region {
          background: ${h.Highlight};
        }
        :host .positioning-region:hover .content-region,
        :host([selected]) .positioning-region .content-region {
          forced-color-adjust: none;
          color: ${h.HighlightText};
        }
        :host([disabled][selected]) .positioning-region .content-region {
          color: ${h.GrayText};
        }
        :host([selected])::after {
          background: ${h.HighlightText};
        }
        :host(:${O}) .positioning-region {
          forced-color-adjust: none;
          outline-color: ${h.ButtonFace};
        }
        :host([disabled]),
        :host([disabled]) .content-region,
        :host([disabled]) .positioning-region:hover .content-region {
          opacity: 1;
          color: ${h.GrayText};
        }
        :host(.nested) .expand-collapse-button:hover,
        :host(:not([disabled])[selected]) .expand-collapse-button:hover {
          background: ${h.ButtonFace};
          fill: ${h.ButtonText};
        }
      `));var Ku=at.compose({baseName:"tree-item",template:sd,styles:Ju,expandCollapseGlyph:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.65 2.15a.5.5 0 000 .7L7.79 6 4.65 9.15a.5.5 0 10.7.7l3.5-3.5a.5.5 0 000-.7l-3.5-3.5a.5.5 0 00-.7 0z"/>
    </svg>
  `});var tp={fluentAccordion:fh,fluentAccordionItem:ph,fluentAnchor:yh,fluentAnchoredRegion:$h,fluentBadge:Ch,fluentBreadcrumb:Fh,fluentBreadcrumbItem:Rh,fluentButton:Dh,fluentCalendar:Oh,fluentCard:Lh,fluentCheckbox:Ph,fluentCombobox:Nh,fluentDataGrid:Wh,fluentDataGridCell:Uh,fluentDataGridRow:qh,fluentDesignSystemProvider:Yh,fluentDialog:Zh,fluentDivider:Kh,fluentFlipper:eu,fluentHorizontalScroll:ru,fluentListbox:su,fluentOption:lu,fluentMenu:du,fluentMenuItem:uu,fluentNumberField:fu,fluentProgress:gu,fluentProgressRing:bu,fluentRadio:yu,fluentRadioGroup:$u,fluentSearch:Su,fluentSelect:Fu,fluentSkeleton:Ru,fluentSlider:Du,fluentSliderLabel:Ou,fluentSwitch:Lu,fluentTabs:zu,fluentTab:Hu,fluentTabPanel:Mu,fluentTextArea:_u,fluentTextField:Gu,fluentToolbar:qu,fluentTooltip:Xu,fluentTreeView:Qu,fluentTreeItem:Ku,register(o,...t){if(o)for(let e in this)e!=="register"&&this[e]().register(o,...t)}};function ep(o){return Zs.getOrCreate(o).withPrefix("fluent")}ep().register(tp);var hl="AES-GCM";async function Dm(){let o=document.querySelector("#key").value,t=document.querySelector("#text"),e=t.value,i=new TextEncoder().encode(e),r=document.querySelector("#switch").checked,n=await window.crypto.subtle.importKey("raw",new TextEncoder().encode(o),hl,!0,["encrypt","decrypt"]);if(r){let u=Uint8Array.from(atob(e),B=>B.codePointAt(0)),p=u.slice(0,12),g=u.slice(12),y=await window.crypto.subtle.decrypt({name:hl,iv:p},n,g);t.value=new TextDecoder().decode(y);return}let s=window.crypto.getRandomValues(new Uint8Array(12)),l=await window.crypto.subtle.encrypt({name:hl,iv:s},n,i),d=new Uint8Array(s.byteLength+l.byteLength);d.set(s),d.set(new Uint8Array(l),s.length),t.value=btoa(Array.from(d,u=>String.fromCodePoint(u)).join(""))}function Am(){document.querySelector("#button").addEventListener("click",Dm)}window.onload=Am;})();
/*! Bundled license information:

tslib/tslib.es6.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

tabbable/dist/index.esm.js:
  (*!
  * tabbable 5.3.3
  * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
  *)
*/
