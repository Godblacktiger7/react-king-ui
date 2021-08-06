"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),r=require("prop-types");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=t(e),o=t(r);function d(){return(d=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function i(e,r){void 0===r&&(r={});var t=r.insertAt;if(e&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===t&&a.firstChild?a.insertBefore(o,a.firstChild):a.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}i(":root{--theme-background:rgba(15,15,15,0.6);--theme-background--disabled:rgba(0,0,0,0.6);--theme-color:#bebebe;--theme-color--disabled:#6e6e6e;--theme-special--primary:#0f46fa;--theme-special--primary--disabled:#051e78;--theme-special--active:rgba(150,0,0,0.6);--theme-special--hover:rgba(50,0,0,0.6);--theme-border-color:var(--theme-special--primary);--theme-border-color--disabled:var(--theme-special--primary--disabled);--theme-border-style:solid;--theme-border-width:.123rem;--theme-border-radius:.5rem;--theme-box-shadow:inset 0 0 .8em .25em var(--theme-special--primary),0 0 .5em .20em var(--theme-special--primary);--theme-box-shadow--disabled:inset 0 0 .8em .25em var(--theme-special--primary--disabled),0 0 .5em .20em var(--theme-special--primary--disabled);background:#000;color:#bebebe;font-size:2vw}body{margin:0;padding:0}*,:after,:before{-webkit-tap-highlight-color:transparent;box-sizing:border-box}");i(".king-ui-btn{background:var(--theme-background);color:var(--theme-color);border:var(--theme-border-width) var(--theme-border-style) var(--theme-border-color);border-radius:var(--theme-border-radius);font-size:unset;font-family:unset;cursor:pointer;user-select:none;padding:.35em .5em .2em}.king-ui-btn:hover{background:var(--theme-special--hover)}.king-ui-btn:active{background:var(--theme-special--active)}.king-ui-btn:focus{outline:none}.king-ui-btn--disabled{color:var(--theme-color--disabled);border-color:var(--theme-border-color--disabled);cursor:default}.king-ui-btn--disabled,.king-ui-btn--disabled:active,.king-ui-btn--disabled:hover{background:var(--theme-background--disabled)}.king-ui-btn-shadow{box-shadow:var(--theme-box-shadow)}.king-ui-btn-shadow--disabled{box-shadow:var(--theme-box-shadow--disabled)}");const n=({style:e,className:r,shadow:t,disabled:o,children:i,...n})=>{const s=["king-ui-btn",o?"king-ui-btn--disabled":"",t?o?"king-ui-btn-shadow--disabled":"king-ui-btn-shadow":"",r||""];return a.default.createElement("button",d({style:{...e},className:s.join(" "),disabled:o},n),i)};n.propTypes={style:o.default.object,className:o.default.array,shadow:o.default.bool,disabled:o.default.bool,children:o.default.object.isRequired};i("");exports.Button=n,exports.Input=()=>a.default.createElement(a.default.Fragment,null,"Input Component");
