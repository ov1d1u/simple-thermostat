!function(){const t={DEBUG:!1};try{if(process)return process.env=Object.assign({},process.env),void Object.assign(process.env,t)}catch(t){}globalThis.process={env:t}}();var t="simple-thermostat";const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),s=new WeakMap;let o=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&s.set(e,t))}return t}toString(){return this.cssText}};const r=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,n))(e)})(t):t,{is:a,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:h,getPrototypeOf:u}=Object,p=globalThis,f=p.trustedTypes,v=f?f.emptyScript:"",g=p.reactiveElementPolyfillSupport,m=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?v:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},b=(t,e)=>!a(t,e),_={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;let $=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=_){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,e);void 0!==n&&l(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){const{get:n,set:s}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:n,set(e){const o=n?.call(this);s?.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??_}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const t=this.properties,e=[...d(t),...h(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,n)=>{if(i)t.adoptedStyleSheets=n.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of n){const n=document.createElement("style"),s=e.litNonce;void 0!==s&&n.setAttribute("nonce",s),n.textContent=i.cssText,t.appendChild(n)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(void 0!==n&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(e,i.type);this._$Em=t,null==s?this.removeAttribute(n):this.setAttribute(n,s),this._$Em=null}}_$AK(t,e){const i=this.constructor,n=i._$Eh.get(t);if(void 0!==n&&this._$Em!==n){const t=i.getPropertyOptions(n),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=n;const o=s.fromAttribute(e,t.type);this[n]=o??this._$Ej?.get(n)??o,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const n=this.constructor,s=this[t];if(i??=n.getPropertyOptions(t),!((i.hasChanged??b)(s,e)||i.useDefault&&i.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:n,wrapped:s},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==s||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===n&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,n=this[e];!0!==t||this._$AL.has(e)||void 0===n||this.C(e,void 0,i,n)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[m("elementProperties")]=new Map,$[m("finalized")]=new Map,g?.({ReactiveElement:$}),(p.reactiveElementVersions??=[]).push("2.1.1");const w=globalThis,x=t=>t,A=w.trustedTypes,E=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,O="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,j="?"+S,C=`<${j}>`,P=document,k=()=>P.createComment(""),T=t=>null===t||"object"!=typeof t&&"function"!=typeof t,z=Array.isArray,N="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,H=/>/g,I=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),M=/'/g,V=/"/g,F=/^(?:script|style|textarea|title)$/i,D=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),L=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),W=new WeakMap,q=P.createTreeWalker(P,129);function J(t,e){if(!z(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const Y=(t,e)=>{const i=t.length-1,n=[];let s,o=2===e?"<svg>":3===e?"<math>":"",r=R;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,d=0;for(;d<i.length&&(r.lastIndex=d,l=r.exec(i),null!==l);)d=r.lastIndex,r===R?"!--"===l[1]?r=U:void 0!==l[1]?r=H:void 0!==l[2]?(F.test(l[2])&&(s=RegExp("</"+l[2],"g")),r=I):void 0!==l[3]&&(r=I):r===I?">"===l[0]?(r=s??R,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?I:'"'===l[3]?V:M):r===V||r===M?r=I:r===U||r===H?r=R:(r=I,s=void 0);const h=r===I&&t[e+1].startsWith("/>")?" ":"";o+=r===R?i+C:c>=0?(n.push(a),i.slice(0,c)+O+i.slice(c)+S+h):i+S+(-2===c?e:h)}return[J(t,o+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),n]};class G{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,o=0;const r=t.length-1,a=this.parts,[l,c]=Y(t,e);if(this.el=G.createElement(l,i),q.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(n=q.nextNode())&&a.length<r;){if(1===n.nodeType){if(n.hasAttributes())for(const t of n.getAttributeNames())if(t.endsWith(O)){const e=c[o++],i=n.getAttribute(t).split(S),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:s,name:r[2],strings:i,ctor:"."===r[1]?tt:"?"===r[1]?et:"@"===r[1]?it:X}),n.removeAttribute(t)}else t.startsWith(S)&&(a.push({type:6,index:s}),n.removeAttribute(t));if(F.test(n.tagName)){const t=n.textContent.split(S),e=t.length-1;if(e>0){n.textContent=A?A.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],k()),q.nextNode(),a.push({type:2,index:++s});n.append(t[e],k())}}}else if(8===n.nodeType)if(n.data===j)a.push({type:2,index:s});else{let t=-1;for(;-1!==(t=n.data.indexOf(S,t+1));)a.push({type:7,index:s}),t+=S.length-1}s++}}static createElement(t,e){const i=P.createElement("template");return i.innerHTML=t,i}}function K(t,e,i=t,n){if(e===L)return e;let s=void 0!==n?i._$Co?.[n]:i._$Cl;const o=T(e)?void 0:e._$litDirective$;return s?.constructor!==o&&(s?._$AO?.(!1),void 0===o?s=void 0:(s=new o(t),s._$AT(t,i,n)),void 0!==n?(i._$Co??=[])[n]=s:i._$Cl=s),void 0!==s&&(e=K(t,s._$AS(t,e.values),s,n)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,n=(t?.creationScope??P).importNode(e,!0);q.currentNode=n;let s=q.nextNode(),o=0,r=0,a=i[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new Q(s,s.nextSibling,this,t):1===a.type?e=new a.ctor(s,a.name,a.strings,this,t):6===a.type&&(e=new nt(s,this,t)),this._$AV.push(e),a=i[++r]}o!==a?.index&&(s=q.nextNode(),o++)}return q.currentNode=P,n}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,n){this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),T(t)?t===B||null==t||""===t?(this._$AH!==B&&this._$AR(),this._$AH=B):t!==this._$AH&&t!==L&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>z(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==B&&T(this._$AH)?this._$AA.nextSibling.data=t:this.T(P.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=G.createElement(J(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(e);else{const t=new Z(n,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new G(t)),e}k(t){z(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new Q(this.O(k()),this.O(k()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=x(t).nextSibling;x(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,s){this.type=1,this._$AH=B,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=B}_$AI(t,e=this,i,n){const s=this.strings;let o=!1;if(void 0===s)t=K(this,t,e,0),o=!T(t)||t!==this._$AH&&t!==L,o&&(this._$AH=t);else{const n=t;let r,a;for(t=s[0],r=0;r<s.length-1;r++)a=K(this,n[i+r],e,r),a===L&&(a=this._$AH[r]),o||=!T(a)||a!==this._$AH[r],a===B?t=B:t!==B&&(t+=(a??"")+s[r+1]),this._$AH[r]=a}o&&!n&&this.j(t)}j(t){t===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===B?void 0:t}}class et extends X{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==B)}}class it extends X{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){if((t=K(this,t,e,0)??B)===L)return;const i=this._$AH,n=t===B&&i!==B||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==B&&(i===B||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const st=w.litHtmlPolyfillSupport;st?.(G,Q),(w.litHtmlVersions??=[]).push("3.3.2");const ot=globalThis;let rt=class extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const n=i?.renderBefore??e;let s=n._$litPart$;if(void 0===s){const t=i?.renderBefore??null;n._$litPart$=s=new Q(e.insertBefore(k(),t),t,void 0,i??{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return L}};rt._$litElement$=!0,rt.finalized=!0,ot.litElementHydrateSupport?.({LitElement:rt});const at=ot.litElementPolyfillSupport;at?.({LitElement:rt}),(ot.litElementVersions??=[]).push("4.2.2");var lt=((t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1],t[0]);return new o(i,t,n)})`:host {
  --st-default-spacing: 4px;
}
ha-card {
  -webkit-font-smoothing: var(--paper-font-body1_-_-webkit-font-smoothing);
  font-size: var(--paper-font-body1_-_font-size);
  font-weight: var(--paper-font-body1_-_font-weight);
  line-height: var(--paper-font-body1_-_line-height);

  padding-bottom: calc(var(--st-spacing, var(--st-default-spacing)) * 2);

  --auto-color: green;
  --heat_cool-color: springgreen;
  --cool-color: #2b9af9;
  --heat-color: #ff8100;
  --manual-color: #44739e;
  --off-color: #8a8a8a;
  --fan_only-color: #8a8a8a;
  --dry-color: #efbd07;
}

ha-card.no-header {
  padding: calc(var(--st-spacing, var(--st-default-spacing)) * 4) 0;
}

.body {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(min-content, auto);
  align-items: center;
  justify-items: center;
  place-items: center;
  padding: 0 calc(var(--st-spacing, var(--st-default-spacing)) * 4);
  padding-bottom: calc(var(--st-spacing, var(--st-default-spacing)) * 2);
}

.toggle-label {
  color: var(--st-toggle-label-color, var(--primary-text-color));
  margin-right: calc(var(--st-spacing, var(--st-default-spacing)) * 2);
  font-size: 16px;
  font-size: var(
    --st-font-size-toggle-label,
    var(--paper-font-subhead_-_font-size, 16px)
  );
}

.faults {
  display: flex;
  flex-direction: row;
  margin-left: calc(var(--st-spacing, var(--st-default-spacing)) * 2);
}
.fault-icon {
  padding: 2px;
  cursor: pointer;
  color: var(--st-fault-inactive-color, var(--secondary-background-color));
}
.fault-icon.active {
    color: var(--st-fault-active-color, var(--accent-color));
  }
.fault-icon.hide {
    display: none;
  }

.sensors {
  display: grid;
  grid-gap: var(--st-spacing, var(--st-default-spacing));
  font-size: 16px;
  font-size: var(
    --st-font-size-sensors,
    var(--paper-font-subhead_-_font-size, 16px)
  );
}
.sensors.as-list {
  grid-auto-flow: column;
  grid-template-columns: min-content;
}

.sensors.as-table.without-labels {
    grid: auto-flow / 100%;
    align-items: start;
    justify-items: start;
    place-items: start;
  }

.sensors.as-table.with-labels {
    grid: auto-flow / auto auto;
    align-items: start;
    justify-items: start;
    place-items: start;
  }

.sensor-value {
  display: flex;
  align-items: center;
  padding-bottom: 4px;
}
.sensor-heading {
  font-weight: 300;
  padding-right: 8px;
  padding-bottom: 4px;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.sensors:empty {
  display: none;
}
header {
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: calc(var(--st-spacing, var(--st-default-spacing)) * 6)
    calc(var(--st-spacing, var(--st-default-spacing)) * 4)
    calc(var(--st-spacing, var(--st-default-spacing)) * 4);
}
.header__icon {
  margin-right: calc(var(--st-spacing, var(--st-default-spacing)) * 2);
  color: #44739e;
  color: var(--paper-item-icon-color, #44739e);
}
.header__title {
  font-size: 24px;
  font-size: var(--st-font-size-title, var(--ha-card-header-font-size, 24px));
  line-height: 24px;
  line-height: var(--st-font-size-title, var(--ha-card-header-font-size, 24px));
  -webkit-font-smoothing: var(--paper-font-headline_-_-webkit-font-smoothing);
  font-weight: normal;
  margin: 0;
  align-self: left;
}
.current-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  flex-wrap: wrap;
}
.current-wrapper.row {
    flex-direction: row-reverse;
  }
.current--value {
  display: flex;
  align-items: center;
  margin: 0;
  font-weight: 400;
  line-height: var(--st-font-size-l, var(--paper-font-display1_-_font-size));
  font-size: var(--st-font-size-l, var(--paper-font-display1_-_font-size));
}
@media (min-width: 768px) {
.current--value {
    font-size: var(--st-font-size-xl, var(--paper-font-display2_-_font-size));
    line-height: var(--st-font-size-xl, var(--paper-font-display2_-_font-size));
}
  }
.current--value.updating {
    color: var(--error-color);
  }
.current--unit {
  font-size: var(--st-font-size-m, var(--paper-font-title_-_font-size));
}
.thermostat-trigger {
  padding: 0px;
}
.clickable {
  cursor: pointer;
}
.modes {
  display: grid;
  grid-template-columns: auto;
  grid-auto-flow: column;
  grid-gap: 2px;
  margin-top: calc(var(--st-spacing, var(--st-default-spacing)) * 2);
  padding: var(--st-spacing, var(--st-default-spacing));
}
.modes.heading {
    grid-template-columns: min-content;
  }
.mode-title {
  padding: 0 16px;
  align-self: center;
  justify-self: center;
  place-self: center;
  font-size: 16px;
  font-size: var(
    --st-font-size-sensors,
    var(--paper-font-subhead_-_font-size, 16px)
  );
  font-weight: 300;
  white-space: nowrap;
}
.mode-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  min-height: 24px;
  padding: var(--st-spacing, var(--st-default-spacing)) 0;
  background: var(--st-mode-background, var(--secondary-background-color));
  color: var(--secondary-text-color);
  cursor: pointer;
  border-radius: var(--st-spacing, var(--st-default-spacing));
}
.mode-item:hover {
    color: var(--st-mode-active-color, var(--primary-text-color));
  }
.mode-item.active,.mode-item.active:hover {
    background: var(--st-mode-active-background, var(--primary-color));
    color: var(--st-mode-active-color, var(--text-primary-color));
  }
.mode-item.active.off {
    background: var(--st-mode-active-background, var(--off-color));
  }
.mode-item.active.heat {
    background: var(--st-mode-active-background, var(--heat-color));
  }
.mode-item.active.cool {
    background: var(--st-mode-active-background, var(--cool-color));
  }
.mode-item.active.heat_cool {
    background: var(--st-mode-active-background, var(--heat_cool-color));
  }
.mode-item.active.auto {
    background: var(--st-mode-active-background, var(--auto-color));
  }
.mode-item.active.dry {
    background: var(--st-mode-active-background, var(--dry-color));
  }
.mode-item.active.fan_only {
    background: var(--st-mode-active-background, var(--fan_only-color));
  }
.mode-icon {
  --iron-icon-width: 24px;
  --iron-icon-height: 24px;
  display: block;
}
ha-switch {
  padding: 16px 6px;
}
.side-by-side {
  display: flex;
  align-items: center;
}
.side-by-side > * {
  flex: 1;
  padding-right: 4px;
}
`;function ct(t,e,i,n={}){n=n||{},i=null==i?{}:i;const s=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return s.detail=i,t.dispatchEvent(s),s}!function(t,e){void 0===e&&(e={});var i=e.insertAt;if(t&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css","top"===i&&n.firstChild?n.insertBefore(s,n.firstChild):n.appendChild(s),s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t))}}(lt);const dt=[0,1],ht=[.5,1],ut=["column","row"],pt=["climate"],ft={header:{},layout:{mode:{}}};function vt(t,e){var i={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(i[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(t);s<n.length;s++)e.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(t,n[s])&&(i[n[s]]=t[n[s]])}return i}function gt(t,e,i,n){var s,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,i,r):s(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r}"function"==typeof SuppressedError&&SuppressedError;const mt={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:b},yt=(t=mt,e,i)=>{const{kind:n,metadata:s}=i;let o=globalThis.litPropertyMetadata.get(s);if(void 0===o&&globalThis.litPropertyMetadata.set(s,o=new Map),"setter"===n&&((t=Object.create(t)).wrapped=!0),o.set(i.name,t),"accessor"===n){const{name:n}=i;return{set(i){const s=e.get.call(this);e.set.call(this,i),this.requestUpdate(n,s,t)},init(e){return void 0!==e&&this.C(n,void 0,t,e),e}}}if("setter"===n){const{name:n}=i;return function(i){const s=this[n];e.call(this,i),this.requestUpdate(n,s,t)}}throw Error("Unsupported decorator location: "+n)};function bt(t){return(e,i)=>"object"==typeof i?yt(t,e,i):((t,e,i)=>{const n=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),n?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}const _t=(t,e,i,n)=>{if("length"===i||"prototype"===i)return;if("arguments"===i||"caller"===i)return;const s=Object.getOwnPropertyDescriptor(t,i),o=Object.getOwnPropertyDescriptor(e,i);!$t(s,o)&&n||Object.defineProperty(t,i,o)},$t=function(t,e){return void 0===t||t.configurable||t.writable===e.writable&&t.enumerable===e.enumerable&&t.configurable===e.configurable&&(t.writable||t.value===e.value)},wt=(t,e)=>`/* Wrapped ${t}*/\n${e}`,xt=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),At=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name");function Et(t,e,{ignoreNonConfigurable:i=!1}={}){const{name:n}=t;for(const n of Reflect.ownKeys(e))_t(t,e,n,i);return((t,e)=>{const i=Object.getPrototypeOf(e);i!==Object.getPrototypeOf(t)&&Object.setPrototypeOf(t,i)})(t,e),((t,e,i)=>{const n=""===i?"":`with ${i.trim()}() `,s=wt.bind(null,n,e.toString());Object.defineProperty(s,"name",At);const{writable:o,enumerable:r,configurable:a}=xt;Object.defineProperty(t,"toString",{value:s,writable:o,enumerable:r,configurable:a})})(t,e,n),t}const Ot=(t,e={})=>{if("function"!=typeof t)throw new TypeError(`Expected the first argument to be a function, got \`${typeof t}\``);const{wait:i=0,maxWait:n=Number.POSITIVE_INFINITY,before:s=!1,after:o=!0}=e;if(i<0||n<0)throw new RangeError("`wait` and `maxWait` must not be negative.");if(!s&&!o)throw new Error("Both `before` and `after` are false, function wouldn't be called.");let r,a,l;const c=function(...e){const c=this,d=()=>{a=void 0,r&&(clearTimeout(r),r=void 0),o&&(l=t.apply(c,e))},h=s&&!r;return clearTimeout(r),r=setTimeout(()=>{r=void 0,a&&(clearTimeout(a),a=void 0),o&&(l=t.apply(c,e))},i),n>0&&n!==Number.POSITIVE_INFINITY&&!a&&(a=setTimeout(d,n)),h&&(l=t.apply(c,e)),l};return Et(c,t),c.cancel=()=>{r&&(clearTimeout(r),r=void 0),a&&(clearTimeout(a),a=void 0)},c};function St(t,{decimals:e=1,fallback:i="N/A"}={}){return null===t||""===t||["boolean","undefined"].includes(typeof t)?i:Number(t).toFixed(e)}function jt({header:t,toggleEntityChanged:e,entity:i,openEntityPopover:n}){var s,o;if(!1===t)return B;const r=i.attributes.hvac_action||i.state;let a=t.icon;"object"==typeof t.icon&&(a=null!==(s=null==a?void 0:a[r])&&void 0!==s&&s);const l=null!==(o=null==t?void 0:t.name)&&void 0!==o&&o;return D`
    <header>
      <div
        style="display: flex;"
        class="clickable"
        @click=${()=>n()}
      >
        ${function(t){return t?D` <ha-icon class="header__icon" .icon=${t}></ha-icon> `:B}(a)} ${function(t){return t?D`<h2 class="header__title">${t}</h2>`:B}(l)}
      </div>
      ${function(t,e){if(0===t.length)return B;const i=t.map(({icon:t,hide_inactive:i,state:n})=>D` <ha-icon
      class="fault-icon ${"on"===n.state?"active":i?" hide":""}"
      icon="${t||n.attributes.icon}"
      @click="${()=>e(n.entity_id)}"
    ></ha-icon>`);return D` <div class="faults">${i}</div>`}(t.faults,n)}
      ${function(t,e,i){var n;return t?D`
    <div style="margin-left: auto;">
      <span
        class="clickable toggle-label"
        @click=${()=>e(t.entity.entity_id)}
        >${t.label}
      </span>
      <ha-switch
        .checked=${"on"===(null===(n=t.entity)||void 0===n?void 0:n.state)}
        @change=${i}
      ></ha-switch>
    </div>
  `:B}(t.toggle,n,e)}
    </header>
  `}var Ct,Pt={exports:{}};function kt(){return Ct||(Ct=1,function(t){function e(t){var i,n,s=new Error(t);return i=s,n=e.prototype,Object.setPrototypeOf?Object.setPrototypeOf(i,n):i.__proto__=n,s}function i(t,i,n){var s=i.slice(0,n).split(/\n/),o=s.length,r=s[o-1].length+1;throw e(t+=" at line "+o+" col "+r+":\n\n  "+i.split(/\n/)[o-1]+"\n  "+Array(r).join(" ")+"^")}e.prototype=Object.create(Error.prototype,{name:{value:"Squirrelly Error",enumerable:!1}});var n=new Function("return this")().Promise,s=!1;try{s=new Function("return (async function(){}).constructor")()}catch(t){if(!(t instanceof SyntaxError))throw t}function o(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function r(t,e,i){for(var n in e)o(e,n)&&(null==e[n]||"object"!=typeof e[n]||"storage"!==n&&"prefixes"!==n||i?t[n]=e[n]:t[n]=r({},e[n]));return t}var a=/^async +/,l=/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})*}|(?!\${)[^\\`])*`/g,c=/'(?:\\[\s\w"'\\`]|[^\n\r'\\])*?'/g,d=/"(?:\\[\s\w"'\\`]|[^\n\r"\\])*?"/g,h=/[.*+\-?^${}()|[\]\\]/g;function u(t){return h.test(t)?t.replace(h,"\\$&"):t}function p(t,n){n.rmWhitespace&&(t=t.replace(/[\r\n]+/g,"\n").replace(/^\s+|\s+$/gm,"")),l.lastIndex=0,c.lastIndex=0,d.lastIndex=0;var s=n.prefixes,o=[s.h,s.b,s.i,s.r,s.c,s.e].reduce(function(t,e){return t&&e?t+"|"+u(e):e?u(e):t},""),r=new RegExp("([|()]|=>)|('|\"|`|\\/\\*)|\\s*((\\/)?(-|_)?"+u(n.tags[1])+")","g"),h=new RegExp("([^]*?)"+u(n.tags[0])+"(-|_)?\\s*("+o+")?\\s*","g"),p=0,f=!1;function v(e,s){var o,u={f:[]},v=0,g="c";function m(e){var s=t.slice(p,e),o=s.trim();if("f"===g)"safe"===o?u.raw=!0:n.async&&a.test(o)?(o=o.replace(a,""),u.f.push([o,"",!0])):u.f.push([o,""]);else if("fp"===g)u.f[u.f.length-1][1]+=o;else if("err"===g){if(o){var r=s.search(/\S/);i("invalid syntax",t,p+r)}}else u[g]=o;p=e+1}for("h"===s||"b"===s||"c"===s?g="n":"r"===s&&(u.raw=!0,s="i"),r.lastIndex=p;null!==(o=r.exec(t));){var y=o[1],b=o[2],_=o[3],$=o[4],w=o[5],x=o.index;if(y)"("===y?(0===v&&("n"===g?(m(x),g="p"):"f"===g&&(m(x),g="fp")),v++):")"===y?0===--v&&"c"!==g&&(m(x),g="err"):0===v&&"|"===y?(m(x),g="f"):"=>"===y&&(m(x),p+=1,g="res");else if(b)if("/*"===b){var A=t.indexOf("*/",r.lastIndex);-1===A&&i("unclosed comment",t,o.index),r.lastIndex=A+2}else"'"===b?(c.lastIndex=o.index,c.exec(t)?r.lastIndex=c.lastIndex:i("unclosed string",t,o.index)):'"'===b?(d.lastIndex=o.index,d.exec(t)?r.lastIndex=d.lastIndex:i("unclosed string",t,o.index)):"`"===b&&(l.lastIndex=o.index,l.exec(t)?r.lastIndex=l.lastIndex:i("unclosed string",t,o.index));else if(_)return m(x),p=x+o[0].length,h.lastIndex=p,f=w,$&&"h"===s&&(s="s"),u.t=s,u}return i("unclosed tag",t,e),u}var g=function o(r,l){r.b=[],r.d=[];var c,d=!1,u=[];function g(t,e){t&&(t=function(t,e,i,n){var s,o;return"string"==typeof e.autoTrim?s=o=e.autoTrim:Array.isArray(e.autoTrim)&&(s=e.autoTrim[1],o=e.autoTrim[0]),(i||!1===i)&&(s=i),(n||!1===n)&&(o=n),"slurp"===s&&"slurp"===o?t.trim():("_"===s||"slurp"===s?t=String.prototype.trimLeft?t.trimLeft():t.replace(/^[\s\uFEFF\xA0]+/,""):"-"!==s&&"nl"!==s||(t=t.replace(/^(?:\n|\r|\r\n)/,"")),"_"===o||"slurp"===o?t=String.prototype.trimRight?t.trimRight():t.replace(/[\s\uFEFF\xA0]+$/,""):"-"!==o&&"nl"!==o||(t=t.replace(/(?:\n|\r|\r\n)$/,"")),t)}(t,n,f,e))&&(t=t.replace(/\\|'/g,"\\$&").replace(/\r\n|\n|\r/g,"\\n"),u.push(t))}for(;null!==(c=h.exec(t));){var m,y=c[1],b=c[2],_=c[3]||"";for(var $ in s)if(s[$]===_){m=$;break}g(y,b),p=c.index+c[0].length,m||i("unrecognized tag type: "+_,t,p);var w=v(c.index,m),x=w.t;if("h"===x){var A=w.n||"";n.async&&a.test(A)&&(w.a=!0,w.n=A.replace(a,"")),w=o(w),u.push(w)}else if("c"===x){if(r.n===w.n)return d?(d.d=u,r.b.push(d)):r.d=u,r;i("Helper start and end don't match",t,c.index+c[0].length)}else if("b"===x){d?(d.d=u,r.b.push(d)):r.d=u;var E=w.n||"";n.async&&a.test(E)&&(w.a=!0,w.n=E.replace(a,"")),d=w,u=[]}else if("s"===x){var O=w.n||"";n.async&&a.test(O)&&(w.a=!0,w.n=O.replace(a,"")),u.push(w)}else u.push(w)}if(!l)throw e('unclosed helper "'+r.n+'"');return g(t.slice(p,t.length),!1),r.d=u,r}({f:[]},!0);if(n.plugins)for(var m=0;m<n.plugins.length;m++){var y=n.plugins[m];y.processAST&&(g.d=y.processAST(g.d,n))}return g.d}function f(t,e){var i=p(t,e),n="var tR='';"+(e.useWith?"with("+e.varName+"||{}){":"")+b(i,e)+"if(cb){cb(null,tR)} return tR"+(e.useWith?"}":"");if(e.plugins)for(var s=0;s<e.plugins.length;s++){var o=e.plugins[s];o.processFnString&&(n=o.processFnString(n,e))}return n}function v(t,e){for(var i=0;i<e.length;i++){var n=e[i][0],s=e[i][1];t=(e[i][2]?"await ":"")+"c.l('F','"+n+"')("+t,s&&(t+=","+s),t+=")"}return t}function g(t,e,i,n,s,o){var r="{exec:"+(s?"async ":"")+y(i,e,t)+",params:["+n+"]";return o&&(r+=",name:'"+o+"'"),s&&(r+=",async:true"),r+"}"}function m(t,e){for(var i="[",n=0;n<t.length;n++){var s=t[n];i+=g(e,s.res||"",s.d,s.p||"",s.a,s.n),n<t.length&&(i+=",")}return i+"]"}function y(t,e,i){return"function("+e+"){var tR='';"+b(t,i)+"return tR}"}function b(t,e){for(var i=0,n=t.length,s="";i<n;i++){var o=t[i];if("string"==typeof o)s+="tR+='"+o+"';";else{var r=o.t,a=o.c||"",l=o.f,c=o.n||"",d=o.p||"",h=o.res||"",u=o.b,p=!!o.a;if("i"===r){e.defaultFilter&&(a="c.l('F','"+e.defaultFilter+"')("+a+")");var f=v(a,l);!o.raw&&e.autoEscape&&(f="c.l('F','e')("+f+")"),s+="tR+="+f+";"}else if("h"===r)if(e.storage.nativeHelpers.get(c))s+=e.storage.nativeHelpers.get(c)(o,e);else{var y=(p?"await ":"")+"c.l('H','"+c+"')("+g(e,h,o.d,d,p);y+=u?","+m(u,e):",[]",s+="tR+="+v(y+=",c)",l)+";"}else"s"===r?s+="tR+="+v((p?"await ":"")+"c.l('H','"+c+"')({params:["+d+"]},[],c)",l)+";":"e"===r&&(s+=a+"\n")}}return s}var _=function(){function t(t){this.cache=t}return t.prototype.define=function(t,e){this.cache[t]=e},t.prototype.get=function(t){return this.cache[t]},t.prototype.remove=function(t){delete this.cache[t]},t.prototype.reset=function(){this.cache={}},t.prototype.load=function(t){r(this.cache,t,!0)},t}();function $(t,i,n,s){if(i&&i.length>0)throw e((s?"Native":"")+"Helper '"+t+"' doesn't accept blocks");if(n&&n.length>0)throw e((s?"Native":"")+"Helper '"+t+"' doesn't accept filters")}var w={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function x(t){return w[t]}var A=new _({}),E=new _({each:function(t,e){var i="",n=t.params[0];if($("each",e,!1),t.async)return new Promise(function(e){!function t(e,i,n,s,o){n(e[i],i).then(function(r){s+=r,i===e.length-1?o(s):t(e,i+1,n,s,o)})}(n,0,t.exec,i,e)});for(var s=0;s<n.length;s++)i+=t.exec(n[s],s);return i},foreach:function(t,e){var i=t.params[0];if($("foreach",e,!1),t.async)return new Promise(function(e){!function t(e,i,n,s,o,r){s(i[n],e[i[n]]).then(function(a){o+=a,n===i.length-1?r(o):t(e,i,n+1,s,o,r)})}(i,Object.keys(i),0,t.exec,"",e)});var n="";for(var s in i)o(i,s)&&(n+=t.exec(s,i[s]));return n},include:function(t,i,n){$("include",i,!1);var s=n.storage.templates.get(t.params[0]);if(!s)throw e('Could not fetch template "'+t.params[0]+'"');return s(t.params[1],n)},extends:function(t,i,n){var s=t.params[1]||{};s.content=t.exec();for(var o=0;o<i.length;o++){var r=i[o];s[r.name]=r.exec()}var a=n.storage.templates.get(t.params[0]);if(!a)throw e('Could not fetch template "'+t.params[0]+'"');return a(s,n)},useScope:function(t,e){return $("useScope",e,!1),t.exec(t.params[0])}}),O=new _({if:function(t,e){$("if",!1,t.f,!0);var i="if("+t.p+"){"+b(t.d,e)+"}";if(t.b)for(var n=0;n<t.b.length;n++){var s=t.b[n];"else"===s.n?i+="else{"+b(s.d,e)+"}":"elif"===s.n&&(i+="else if("+s.p+"){"+b(s.d,e)+"}")}return i},try:function(t,i){if($("try",!1,t.f,!0),!t.b||1!==t.b.length||"catch"!==t.b[0].n)throw e("native helper 'try' only accepts 1 block, 'catch'");var n="try{"+b(t.d,i)+"}",s=t.b[0];return n+"catch"+(s.res?"("+s.res+")":"")+"{"+b(s.d,i)+"}"},block:function(t,e){return $("block",t.b,t.f,!0),"if(!"+e.varName+"["+t.p+"]){tR+=("+y(t.d,"",e)+")()}else{tR+="+e.varName+"["+t.p+"]}"}}),S=new _({e:function(t){var e=String(t);return/[&<>"']/.test(e)?e.replace(/[&<>"']/g,x):e}}),j={varName:"it",autoTrim:[!1,"nl"],autoEscape:!0,defaultFilter:!1,tags:["{{","}}"],l:function(t,i){if("H"===t){var n=this.storage.helpers.get(i);if(n)return n;throw e("Can't find helper '"+i+"'")}if("F"===t){var s=this.storage.filters.get(i);if(s)return s;throw e("Can't find filter '"+i+"'")}},async:!1,storage:{helpers:E,nativeHelpers:O,filters:S,templates:A},prefixes:{h:"@",b:"#",i:"",r:"*",c:"/",e:"!"},cache:!1,plugins:[],useWith:!1};function C(t,e){var i={};return r(i,j),e&&r(i,e),t&&r(i,t),i.l.bind(i),i}function P(t,i){var n=C(i||{}),o=Function;if(n.async){if(!s)throw e("This environment doesn't support async/await");o=s}try{return new o(n.varName,"c","cb",f(t,n))}catch(i){throw i instanceof SyntaxError?e("Bad template syntax\n\n"+i.message+"\n"+Array(i.message.length+1).join("=")+"\n"+f(t,n)):i}}function k(t,e){var i;return e.cache&&e.name&&e.storage.templates.get(e.name)?e.storage.templates.get(e.name):(i="function"==typeof t?t:P(t,e),e.cache&&e.name&&e.storage.templates.define(e.name,i),i)}j.l.bind(j),t.compile=P,t.compileScope=b,t.compileScopeIntoFunction=y,t.compileToString=f,t.defaultConfig=j,t.filters=S,t.getConfig=C,t.helpers=E,t.nativeHelpers=O,t.parse=p,t.render=function(t,i,s,o){var r=C(s||{});if(!r.async)return k(t,r)(i,r);if(!o){if("function"==typeof n)return new n(function(e,n){try{e(k(t,r)(i,r))}catch(t){n(t)}});throw e("Please provide a callback function, this env doesn't support Promises")}try{k(t,r)(i,r,o)}catch(t){return o(t)}},t.templates=A,Object.defineProperty(t,"__esModule",{value:!0})}(Pt.exports)),Pt.exports}var Tt=kt();const zt=2;class Nt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}class Rt extends Nt{constructor(t){if(super(t),this.it=B,t.type!==zt)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===B||null==t)return this._t=void 0,this.it=t;if(t===L)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}Rt.directiveName="unsafeHTML",Rt.resultType=1;const Ut=(t=>(...e)=>({_$litDirective$:t,values:e}))(Rt),Ht=t=>`<ha-icon icon="${t}"></ha-icon>`;function It(t,e){var i,n;const{type:s,labels:o}=null!==(n=null===(i=null==t?void 0:t.layout)||void 0===i?void 0:i.sensors)&&void 0!==n?n:{type:"table",labels:!0};return D` <div class="sensors ${[o?"with-labels":"without-labels","list"===s?"as-list":"as-table"].join(" ")}">${e}</div> `}function Mt({hide:t=!1,hass:e,state:i,details:n,localize:s,openEntityPopover:o}){var r,a;if(t||void 0===i)return;const{type:l,heading:c,icon:d,unit:h,decimals:u}=n;let p;if(process.env.DEBUG&&console.log("ST: infoItem",{state:i,details:n}),"relativetime"===l)p=D`
      <div class="sensor-value">
        <ha-relative-time .datetime=${i} .hass=${e}></ha-relative-time>
      </div>
    `;else if("object"==typeof i){const[t]=i.entity_id.split("."),e=["component",t,"state",null!==(a=null===(r=i.attributes)||void 0===r?void 0:r.device_class)&&void 0!==a?a:"_",""].join(".");let n=s(i.state,e);"number"==typeof u&&(n=St(n,{decimals:u})),p=D`
      <div
        class="sensor-value clickable"
        @click="${()=>o(i.entity_id)}"
      >
        ${n} ${h||i.attributes.unit_of_measurement}
      </div>
    `}else{let t="number"==typeof u?St(i,{decimals:u}):i;p=D` <div class="sensor-value">${t}${h}</div> `}if(!1===c)return p;const f=d?D` <ha-icon icon="${d}"></ha-icon> `:D` ${c}: `;return D`
    <div class="sensor-heading">${f}</div>
    ${p}
  `}var Vt;function Ft({state:t,mode:e,modeOptions:i,localize:n,setMode:s}){var o;const{type:r,hide_when_off:a,mode:l="none",list:c,name:d}=e;if(0===c.length||a&&t===Vt.OFF)return null;let h=`state_attributes.climate.${r}_mode.`;"hvac"===r&&(h="component.climate.state._.");const u=d||n(`ui.card.climate.${"hvac"==r?"operation":`${r}_mode`}`),p=null===(o=null==i?void 0:i.headings)||void 0===o||o;return D`
    <div class="modes ${p?"heading":""}">
      ${p?D` <div class="mode-title">${u}</div> `:""}
      ${c.map(({value:t,icon:e,name:o})=>D`
          <div
            class="mode-item ${t===l?"active "+l:""}"
            @click=${()=>s(r,t)}
          >
            ${(t=>t?!1===(null==i?void 0:i.icons)?null:D` <ha-icon class="mode-icon" .icon=${t}></ha-icon> `:null)(e)} ${(t=>!1===t||!1===(null==i?void 0:i.names)?null:n(t,h))(o)}
          </div>
        `)}
    </div>
  `}Tt.defaultConfig.autoEscape=!1,Tt.filters.define("icon",Ht),Tt.filters.define("join",(t,e=", ")=>t.join(e)),Tt.filters.define("css",(t,e)=>`<span style="${Object.entries(e).reduce((t,[e,i])=>`${t}${e}:${i};`,"")}">${t}</span>`),Tt.filters.define("debug",t=>{try{return JSON.stringify(t)}catch(e){return`Not able to read valid JSON object from: ${t}`}}),function(t){t.OFF="off",t.HEAT="heat",t.COOL="cool",t.HEAT_COOL="heat_cool",t.AUTO="auto",t.DRY="dry",t.FAN_ONLY="fan_only"}(Vt||(Vt={}));const Dt={auto:"mdi:radiator",cooling:"mdi:snowflake",fan:"mdi:fan",heating:"mdi:radiator",idle:"mdi:radiator-disabled",off:"mdi:radiator-off"},Lt={auto:"hass:autorenew",cool:"hass:snowflake",dry:"hass:water-percent",fan_only:"hass:fan",heat_cool:"hass:autorenew",heat:"hass:fire",off:"hass:power"};function Bt(t,e){var i;const n=e.states[t.entity];let s="";return s=!0===(null==t?void 0:t.name)?n.attributes.name:null!==(i=null==t?void 0:t.name)&&void 0!==i?i:"",{entity:n,label:s}}function Wt(t,e){return Array.isArray(t)?t.map(t=>{var{entity:i}=t,n=vt(t,["entity"]);return Object.assign(Object.assign({},n),{state:e.states[i],entity:i})}):[]}var qt;!function(t){t.HVAC="hvac",t.FAN="fan",t.PRESET="preset",t.SWING="swing"}(qt||(qt={}));const Jt=Object.values(qt),Yt=[qt.HVAC,qt.PRESET],Gt="hass:chevron-up",Kt="hass:chevron-down",Zt="mdi:plus",Qt="mdi:minus",Xt={temperature:!1,state:!1};function te(t,e,i={}){return e[`${t}_modes`].filter(t=>function(t,e){var i;if("object"==typeof e[t])return!1!==e[t].include;return null===(i=null==e?void 0:e[t])||void 0===i||i}(t,i)).map(t=>{const e="object"==typeof i[t]?i[t]:{};return Object.assign({icon:Lt[t],value:t,name:t},e)})}class ee extends rt{constructor(){super(...arguments),this.modes=[],this._hass={},this.sensors=[],this.showSensors=!0,this.name="",this.stepSize=.5,this._values={},this._updatingValues=!1,this._hide=Xt,this._debouncedSetTemperature=Ot(t=>{const{domain:e,service:i,data:n={}}=this.service;this._hass.callService(e,i,Object.assign(Object.assign({entity_id:this.config.entity},n),t))},{wait:500}),this.localize=(t,e="")=>{const i=`${e}${t}`;return this._hass.localize(i)||t},this.toggleEntityChanged=t=>{var e,i,n,s;if(!this.header||!(null===(e=null==this?void 0:this.header)||void 0===e?void 0:e.toggle))return;const o=t.target;this._hass.callService("homeassistant",o.checked?"turn_on":"turn_off",{entity_id:null===(s=null===(n=null===(i=this.header)||void 0===i?void 0:i.toggle)||void 0===n?void 0:n.entity)||void 0===s?void 0:s.entity_id})},this.setMode=(t,e)=>{t&&e?(this._hass.callService("climate",`set_${t}_mode`,{entity_id:this.config.entity,[`${t}_mode`]:e}),ct(this,"haptic","light")):ct(this,"haptic","failure")},this.openEntityPopover=(t=null)=>{ct(this,"hass-more-info",{entityId:t||this.config.entity})}}static get styles(){return lt}static getConfigElement(){return window.document.createElement(`${t}-editor`)}setConfig(t){this.config=Object.assign({decimals:1},t)}updated(){super.connectedCallback();const t=Array.from(this.renderRoot.querySelectorAll("[with-hass]"));for(const e of Array.from(t))Array.from(e.attributes).forEach(t=>{t.name.startsWith("fwd-")&&(e[t.name.replace("fwd-","")]=t.value)}),e.hass=this._hass}set hass(t){var e,i,n,s;if(!this.config.entity)return;const o=t.states[this.config.entity];if(!o)return;this._hass=t,this.entity!==o&&(this.entity=o),this.header=function(t,e,i){if(!1===t)return!1;let n;n="string"==typeof(null==t?void 0:t.name)?t.name:!1!==(null==t?void 0:t.name)&&e.attributes.friendly_name;let s=e.attributes.hvac_action?Dt:Lt;return void 0!==(null==t?void 0:t.icon)&&(s=t.icon),{name:n,icon:s,toggle:(null==t?void 0:t.toggle)?Bt(t.toggle,i):null,faults:Wt(null==t?void 0:t.faults,i)}}(this.config.header,o,t),this.service=null!==(i=null===(e=this.config)||void 0===e?void 0:e.service)&&void 0!==i&&i||{domain:"climate",service:"set_temperature"};const r=o.attributes;let a=function(t,e){if(!1===t)return{};if(t)return Object.keys(t).reduce((i,n)=>{const s=t[n];return(null==s?void 0:s.hide)?i:Object.assign(Object.assign({},i),{[n]:null==e?void 0:e[n]})},{});const i=function(t){return"number"==typeof t.target_temp_high&&"number"==typeof t.target_temp_low?"dual":"single"}(e);return"dual"===i?{target_temp_low:e.target_temp_low,target_temp_high:e.target_temp_high}:{temperature:e.temperature}}(null!==(s=null===(n=this.config)||void 0===n?void 0:n.setpoints)&&void 0!==s?s:null,r);this._updatingValues&&function(t,e){const i=Object.keys(t);return i.length===Object.keys(e).length&&!i.some(i=>(null==t?void 0:t[i])!==(null==e?void 0:e[i]))}(a,this._values)?this._updatingValues=!1:this._updatingValues||(this._values=a);const l=t=>Jt.includes(t)&&r[`${t}_modes`],c=t=>t.filter(l).map(t=>({type:t,hide_when_off:!1,list:te(t,r)}));let d=[];if(!1===this.config.control)d=[];else if(Array.isArray(this.config.control))d=c(this.config.control);else if("object"==typeof this.config.control){const t=Object.entries(this.config.control);d=t.length>0?t.filter(([t])=>l(t)).map(([t,e])=>{const{_name:i,_hide_when_off:n}=e,s=vt(e,["_name","_hide_when_off"]);return{type:t,hide_when_off:n,name:i,list:te(t,r,s)}}):c(Yt)}else d=c(Yt);if(this.modes=d.map(t=>{if(t.type===qt.HVAC){const e=[],i=Object.values(Vt);return t.list.forEach(t=>{const n=i.indexOf(t.value);e[n]=t}),Object.assign(Object.assign({},t),{list:e,mode:o.state})}const e=r[`${t.type}_mode`];return Object.assign(Object.assign({},t),{mode:e})}),this.config.step_size&&(this.stepSize=+this.config.step_size),this.config.hide&&(this._hide=Object.assign(Object.assign({},this._hide),this.config.hide)),!1===this.config.sensors)this.showSensors=!1;else if(3===this.config.version){this.sensors=[];const t=this.config.sensors.map((t,e)=>{var i,n;const s=null!==(i=null==t?void 0:t.entity)&&void 0!==i?i:this.config.entity;let o=this.entity;return(null==t?void 0:t.entity)&&(o=this._hass.states[t.entity]),{id:null!==(n=null==t?void 0:t.id)&&void 0!==n?n:String(e),label:null==t?void 0:t.label,template:t.template,show:!1!==(null==t?void 0:t.show),entityId:s,context:o}}),e=t.map(t=>t.id),i=[];e.includes("state")||i.push({id:"state",label:"{{ui.operation}}",template:"{{state.text}}",entityId:this.config.entity,context:this.entity}),e.includes("temperature")||i.push({id:"temperature",label:"{{ui.currently}}",template:"{{current_temperature|formatNumber}}",entityId:this.config.entity,context:this.entity}),this.sensors=[...i,...t]}else this.config.sensors&&(this.sensors=this.config.sensors.map(e=>{var i,{name:n,entity:s,attribute:o,unit:r=""}=e,a=vt(e,["name","entity","attribute","unit"]);let l;const c=[n];return s?(l=t.states[s],c.push(null===(i=null==l?void 0:l.attributes)||void 0===i?void 0:i.friendly_name),o&&(l=l.attributes[o])):o&&o in this.entity.attributes&&(l=this.entity.attributes[o],c.push(o)),c.push(s),Object.assign(Object.assign({},a),{name:c.find(t=>!!t),state:l,entity:s,unit:r})}))}render({_hide:t,_values:e,_updatingValues:i,config:n,entity:s}=this){var o,r,a;const l=[];if(this.stepSize<1&&0===this.config.decimals&&l.push(D`
        <hui-warning>
          Decimals is set to 0 and step_size is lower than 1. Decrementing a
          setpoint will likely not work. Change one of the settings to clear
          this warning.
        </hui-warning>
      `),!s)return D`
        <hui-warning> Entity not available: ${n.entity} </hui-warning>
      `;const{attributes:{min_temp:c=null,max_temp:d=null,hvac_action:h}}=s,u=this.getUnit(),p=null!==(a=null===(r=null===(o=this.config)||void 0===o?void 0:o.layout)||void 0===r?void 0:r.step)&&void 0!==a?a:"column",f="row"===p,v=[!this.header&&"no-header",h].filter(t=>!!t);let g;return 3===this.config.version?(g=this.sensors.filter(t=>!1!==t.show).map(t=>function({context:t,entityId:e,template:i="{{state.text}}",label:n,hass:s,variables:o={},config:r,localize:a,openEntityPopover:l}){var c,d;const{state:h,attributes:u}=t,[p]=e.split("."),f=s.selectedLanguage||s.language,v="ui.card.climate.",g=Object.entries(s.resources[f]).reduce((t,[e,i])=>(e.startsWith(v)&&(t[e.replace(v,"")]=i),t),{}),m=Object.assign(Object.assign({},u),{state:{raw:h,text:a(h,`component.${p}.state._.`)},ui:g,v:o});Tt.filters.define("formatNumber",(t,e={decimals:r.decimals})=>String(St(t,e))),Tt.filters.define("relativetime",(t,e={})=>`<ha-relative-time fwd-datetime=${t} with-hass></ha-relative-time>`),Tt.filters.define("translate",(t,e="")=>a(t,e||"climate"!==p&&"humidifier"!==p?e:`state_attributes.${p}.${t}`));const y=t=>Tt.render(t,m,{useWith:!0}),b=y(i);if(!1===n||!1===(null===(d=null===(c=null==r?void 0:r.layout)||void 0===c?void 0:c.sensors)||void 0===d?void 0:d.labels))return D`<div class="sensor-value">${Ut(b)}</div>`;const _=n||"{{friendly_name}}",$=_.match(/^(mdi|hass):.*/)?Ht(_):y(_);return D`
    <div class="sensor-heading">${Ut($)}</div>
    <div class="sensor-value">${Ut(b)}</div>
  `}(Object.assign(Object.assign({},t),{variables:this.config.variables,hass:this._hass,config:this.config,localize:this.localize,openEntityPopover:this.openEntityPopover}))),g=It(this.config,g)):g=this.showSensors?function({_hide:t,entity:e,unit:i,hass:n,sensors:s,config:o,localize:r,openEntityPopover:a}){var l,c,d,h,u,p,f;const{state:v,attributes:{hvac_action:g,current_temperature:m}}=e,y=null===(d=null===(c=null===(l=null==o?void 0:o.layout)||void 0===l?void 0:l.sensors)||void 0===c?void 0:c.labels)||void 0===d||d;let b=r(v,"component.climate.state._.");g&&(b=[r(g,"state_attributes.climate.hvac_action."),` (${b})`].join(""));const _=[Mt({hide:t.temperature,state:`${St(m,o)}${i||""}`,hass:n,details:{heading:!!y&&(null!==(u=null===(h=null==o?void 0:o.label)||void 0===h?void 0:h.temperature)&&void 0!==u?u:r("ui.card.climate.currently"))}}),Mt({hide:t.state,state:b,hass:n,details:{heading:!!y&&(null!==(f=null===(p=null==o?void 0:o.label)||void 0===p?void 0:p.state)&&void 0!==f?f:r("ui.panel.lovelace.editor.card.generic.state"))}}),...s.map(t=>{var{name:e,state:i}=t,s=vt(t,["name","state"]);return Mt({state:i,hass:n,localize:r,openEntityPopover:a,details:Object.assign(Object.assign({},s),{heading:y&&e})})})||null].filter(t=>null!==t);return It(o,_)}({_hide:this._hide,unit:u,hass:this._hass,entity:this.entity,sensors:this.sensors,config:this.config,localize:this.localize,openEntityPopover:this.openEntityPopover}):"",D`
      <ha-card class="${v.join(" ")}">
        ${l}
        ${jt({header:this.header,toggleEntityChanged:this.toggleEntityChanged,entity:this.entity,openEntityPopover:this.openEntityPopover})}
        <section class="body">
          ${g}
          ${Object.entries(e).map(([t,e])=>{const s=["string","number"].includes(typeof e),o=!1!==u&&s;return D`
              <div class="current-wrapper ${p}">
                <ha-icon-button
                  ?disabled=${null!==d&&e>=d}
                  class="thermostat-trigger"
                  icon=${f?Zt:Gt}
                  @click="${()=>this.setTemperature(this.stepSize,t)}"
                >
                  <ha-icon .icon=${f?Zt:Gt}></ha-icon>
                </ha-icon-button>

                <h3
                  @click=${()=>this.openEntityPopover()}
                  class=${i?"current--value updating":"current--value"}
                >
                  ${St(e,n)}
                  ${o?D`<span class="current--unit">${u}</span>`:B}
                </h3>
                <ha-icon-button
                  ?disabled=${null!==c&&e<=c}
                  class="thermostat-trigger"
                  icon=${f?Qt:Kt}
                  @click="${()=>this.setTemperature(-this.stepSize,t)}"
                >
                  <ha-icon .icon=${f?Qt:Kt}></ha-icon>
                </ha-icon-button>
              </div>
            `})}
        </section>

        ${this.modes.map(t=>{var e,i,n;return Ft({state:s.state,mode:t,localize:this.localize,modeOptions:null!==(n=null===(i=null===(e=this.config)||void 0===e?void 0:e.layout)||void 0===i?void 0:i.mode)&&void 0!==n?n:{},setMode:this.setMode})})}
      </ha-card>
    `}setTemperature(t,e){this._updatingValues=!0;const i=this._values[e],n=Number(i)+t,{decimals:s}=this.config;this._values=Object.assign(Object.assign({},this._values),{[e]:+St(n,{decimals:s})}),this._debouncedSetTemperature(this._values)}getCardSize(){return 3}getUnit(){var t,e,i,n;return["boolean","string"].includes(typeof this.config.unit)?null===(t=this.config)||void 0===t?void 0:t.unit:null!==(n=null===(i=null===(e=this._hass.config)||void 0===e?void 0:e.unit_system)||void 0===i?void 0:i.temperature)&&void 0!==n&&n}}gt([bt()],ee.prototype,"config",void 0),gt([bt()],ee.prototype,"header",void 0),gt([bt()],ee.prototype,"service",void 0),gt([bt()],ee.prototype,"modes",void 0),gt([bt()],ee.prototype,"entity",void 0),gt([bt()],ee.prototype,"sensors",void 0),gt([bt()],ee.prototype,"showSensors",void 0),gt([bt()],ee.prototype,"name",void 0),gt([bt({type:Object})],ee.prototype,"_values",void 0),gt([bt()],ee.prototype,"_updatingValues",void 0),gt([bt()],ee.prototype,"_hide",void 0),customElements.define(t,ee),customElements.define(`${t}-editor`,class extends rt{static get styles(){return lt}static get properties(){return{hass:{},config:{}}}static getStubConfig(){return Object.assign({},ft)}setConfig(t){this.config=t||Object.assign({},ft)}_openLink(){window.open("https://github.com/pmbsa/simple-thermostat/blob/master/README.md")}render(){var t,e,i,n,s,o,r,a,l,c,d,h,u,p,f,v,g,m;return this.hass?D`
      <div class="card-config">
        <div class="overall-config">
          <div class="side-by-side">
            <ha-entity-picker
              label="Entity (required)"
              .hass=${this.hass}
              .value="${this.config.entity}"
              .configValue=${"entity"}
              .includeDomains=${pt}
              @change="${this.valueChanged}"
              allow-custom-entity
            ></ha-entity-picker>
          </div>

          <ha-formfield label="Show header?">
            <ha-switch
              .checked=${!1!==this.config.header}
              @change=${this.toggleHeader}
            ></ha-switch>
          </ha-formfield>
          <ha-formfield label="Show mode names?">
            <ha-switch
              .checked=${!1!==(null===(i=null===(e=null===(t=this.config)||void 0===t?void 0:t.layout)||void 0===e?void 0:e.mode)||void 0===i?void 0:i.names)}
              .configValue="${"layout.mode.names"}"
              @change=${this.valueChanged}
            ></ha-switch>
          </ha-formfield>
          <ha-formfield label="Show mode icons?">
            <ha-switch
              .checked=${!1!==(null===(o=null===(s=null===(n=this.config)||void 0===n?void 0:n.layout)||void 0===s?void 0:s.mode)||void 0===o?void 0:o.icons)}
              .configValue="${"layout.mode.icons"}"
              @change=${this.valueChanged}
            ></ha-switch>
          </ha-formfield>
          <ha-formfield label="Show mode headings?">
            <ha-switch
              .checked=${!1!==(null===(l=null===(a=null===(r=this.config)||void 0===r?void 0:r.layout)||void 0===a?void 0:a.mode)||void 0===l?void 0:l.headings)}
              .configValue="${"layout.mode.headings"}"
              @change=${this.valueChanged}
            ></ha-switch>
          </ha-formfield>

          ${!1!==this.config.header?D`
                <div class="side-by-side">
                  <paper-input
                    label="Name (optional)"
                    .value="${null===(c=this.config.header)||void 0===c?void 0:c.name}"
                    .configValue="${"header.name"}"
                    @value-changed="${this.valueChanged}"
                  ></paper-input>

                  <ha-icon-input
                    label="Icon (optional)"
                    .value="${null===(d=this.config.header)||void 0===d?void 0:d.icon}"
                    .configValue=${"header.icon"}
                    @value-changed=${this.valueChanged}
                  ></ha-icon-input>
                </div>

                <div class="side-by-side">
                  <ha-entity-picker
                    label="Toggle Entity (optional)"
                    .hass=${this.hass}
                    .value="${null===(p=null===(u=null===(h=this.config)||void 0===h?void 0:h.header)||void 0===u?void 0:u.toggle)||void 0===p?void 0:p.entity}"
                    .configValue=${"header.toggle.entity"}
                    @change="${this.valueChanged}"
                    allow-custom-entity
                  ></ha-entity-picker>

                  <paper-input
                    label="Toggle entity label"
                    .value="${null===(g=null===(v=null===(f=this.config)||void 0===f?void 0:f.header)||void 0===v?void 0:v.toggle)||void 0===g?void 0:g.name}"
                    .configValue="${"header.toggle.name"}"
                    @value-changed="${this.valueChanged}"
                  ></paper-input>
                </div>
              `:""}

          <div class="side-by-side">
            <paper-input
              label="Fallback Text (optional)"
              .value="${this.config.fallback}"
              .configValue="${"fallback"}"
              @value-changed="${this.valueChanged}"
            ></paper-input>
          </div>

          <div class="side-by-side">
            <paper-dropdown-menu
              label="Decimals (optional)"
              .configValue=${"decimals"}
              @value-changed="${this.valueChanged}"
              class="dropdown"
            >
              <paper-listbox
                slot="dropdown-content"
                .selected=${Object.values(dt).indexOf(+this.config.decimals)}
              >
                ${Object.values(dt).map(t=>D` <paper-item>${t}</paper-item> `)}
              </paper-listbox>
            </paper-dropdown-menu>

            <paper-input
              label="Unit (optional)"
              .value="${this.config.unit}"
              .configValue="${"unit"}"
              @value-changed="${this.valueChanged}"
            ></paper-input>
          </div>

          <div class="side-by-side">
            <paper-dropdown-menu
              label="Step Layout (optional)"
              .configValue=${"layout.step"}
              @value-changed="${this.valueChanged}"
              class="dropdown"
            >
              <paper-listbox
                slot="dropdown-content"
                .selected=${Object.values(ut).indexOf(null===(m=this.config.layout)||void 0===m?void 0:m.step)}
              >
                ${Object.values(ut).map(t=>D` <paper-item>${t}</paper-item> `)}
              </paper-listbox>
            </paper-dropdown-menu>

            <paper-dropdown-menu
              label="Step Size (optional)"
              .configValue=${"step_size"}
              @value-changed="${this.valueChanged}"
              class="dropdown"
            >
              <paper-listbox
                slot="dropdown-content"
                .selected=${Object.values(ht).indexOf(+this.config.step_size)}
              >
                ${Object.values(ht).map(t=>D` <paper-item>${t}</paper-item> `)}
              </paper-listbox>
            </paper-dropdown-menu>
          </div>

          <div class="side-by-side">
            <mwc-button @click=${this._openLink}>
              Configuration Options
            </mwc-button>

            Settings for label, control, sensors, faults and hiding UI elements
            can only be configured in the code editor
          </div>
        </div>
      </div>
    `:D``}valueChanged(t){if(!this.config||!this.hass)return;const{target:e}=t,i=(n=this.config,JSON.parse(JSON.stringify(n)));var n;e.configValue&&(""===e.value?delete i[e.configValue]:function(t,e,i){const n=e.split(".");let s=t;for(;n.length-1;){var o=n.shift();s.hasOwnProperty(o)||(s[o]={}),s=s[o]}s[n[0]]=i}(i,e.configValue,void 0!==e.checked?e.checked:e.value)),ct(this,"config-changed",{config:i})}toggleHeader(t){this.config.header=!!t.target.checked&&{},ct(this,"config-changed",{config:this.config})}}),console.info(`%c${t}: 3.0.0`,"font-weight: bold"),window.customCards=window.customCards||[],window.customCards.push({type:t,name:"Simple Thermostat",preview:!1,description:"A different take on the thermostat card"});
