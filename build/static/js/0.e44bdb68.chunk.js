/*! For license information please see 0.e44bdb68.chunk.js.LICENSE.txt */
(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{101:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){function a(a,t,r,i,l,s){var n=i||"<<anonymous>>",o=s||r;if(null==t[r])return a?new Error("Required "+l+" `"+o+"` was not specified in `"+n+"`."):null;for(var c=arguments.length,d=Array(c>6?c-6:0),f=6;f<c;f++)d[f-6]=arguments[f];return e.apply(void 0,[t,r,n,l,o].concat(d))}var t=a.bind(null,!1);return t.isRequired=a.bind(null,!0),t},e.exports=a.default},115:function(e,a,t){"use strict";var r=t(5),i=t(9),l=t(91),s=t.n(l),n=t(0),o=t.n(n),c=(t(97),t(21)),d=t.n(c),f={type:d.a.string,tooltip:d.a.bool,as:d.a.elementType},u=o.a.forwardRef((function(e,a){var t=e.as,l=void 0===t?"div":t,n=e.className,c=e.type,d=void 0===c?"valid":c,f=e.tooltip,u=void 0!==f&&f,m=Object(i.a)(e,["as","className","type","tooltip"]);return o.a.createElement(l,Object(r.a)({},m,{ref:a,className:s()(n,d+"-"+(u?"tooltip":"feedback"))}))}));u.displayName="Feedback",u.propTypes=f;var m=u,b=o.a.createContext({controlId:void 0}),v=t(92),p=o.a.forwardRef((function(e,a){var t=e.id,l=e.bsPrefix,c=e.bsCustomPrefix,d=e.className,f=e.type,u=void 0===f?"checkbox":f,m=e.isValid,p=void 0!==m&&m,y=e.isInvalid,x=void 0!==y&&y,O=e.isStatic,h=e.as,j=void 0===h?"input":h,N=Object(i.a)(e,["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"]),P=Object(n.useContext)(b),w=P.controlId,C=P.custom?[c,"custom-control-input"]:[l,"form-check-input"],E=C[0],g=C[1];return l=Object(v.a)(E,g),o.a.createElement(j,Object(r.a)({},N,{ref:a,type:u,id:t||w,className:s()(d,l,p&&"is-valid",x&&"is-invalid",O&&"position-static")}))}));p.displayName="FormCheckInput";var y=p,x=o.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.bsCustomPrefix,c=e.className,d=e.htmlFor,f=Object(i.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),u=Object(n.useContext)(b),m=u.controlId,p=u.custom?[l,"custom-control-label"]:[t,"form-check-label"],y=p[0],x=p[1];return t=Object(v.a)(y,x),o.a.createElement("label",Object(r.a)({},f,{ref:a,htmlFor:d||m,className:s()(c,t)}))}));x.displayName="FormCheckLabel";var O=x,h=o.a.forwardRef((function(e,a){var t=e.id,l=e.bsPrefix,c=e.bsCustomPrefix,d=e.inline,f=void 0!==d&&d,u=e.disabled,p=void 0!==u&&u,x=e.isValid,h=void 0!==x&&x,j=e.isInvalid,N=void 0!==j&&j,P=e.feedbackTooltip,w=void 0!==P&&P,C=e.feedback,E=e.className,g=e.style,I=e.title,k=void 0===I?"":I,F=e.type,R=void 0===F?"checkbox":F,V=e.label,A=e.children,S=e.custom,T=e.as,L=void 0===T?"input":T,z=Object(i.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"]),M="switch"===R||S,_=M?[c,"custom-control"]:[l,"form-check"],D=_[0],K=_[1];l=Object(v.a)(D,K);var q=Object(n.useContext)(b).controlId,G=Object(n.useMemo)((function(){return{controlId:t||q,custom:M}}),[q,M,t]),J=M||null!=V&&!1!==V&&!A,U=o.a.createElement(y,Object(r.a)({},z,{type:"switch"===R?"checkbox":R,ref:a,isValid:h,isInvalid:N,isStatic:!J,disabled:p,as:L}));return o.a.createElement(b.Provider,{value:G},o.a.createElement("div",{style:g,className:s()(E,l,M&&"custom-"+R,f&&l+"-inline")},A||o.a.createElement(o.a.Fragment,null,U,J&&o.a.createElement(O,{title:k},V),(h||N)&&o.a.createElement(m,{type:h?"valid":"invalid",tooltip:w},C))))}));h.displayName="FormCheck",h.Input=y,h.Label=O;var j=h,N=o.a.forwardRef((function(e,a){var t=e.id,l=e.bsPrefix,c=e.bsCustomPrefix,d=e.className,f=e.isValid,u=e.isInvalid,m=e.lang,p=e.as,y=void 0===p?"input":p,x=Object(i.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"]),O=Object(n.useContext)(b),h=O.controlId,j=O.custom?[c,"custom-file-input"]:[l,"form-control-file"],N=j[0],P=j[1];return l=Object(v.a)(N,P),o.a.createElement(y,Object(r.a)({},x,{ref:a,id:t||h,type:"file",lang:m,className:s()(d,l,f&&"is-valid",u&&"is-invalid")}))}));N.displayName="FormFileInput";var P=N,w=o.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.bsCustomPrefix,c=e.className,d=e.htmlFor,f=Object(i.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),u=Object(n.useContext)(b),m=u.controlId,p=u.custom?[l,"custom-file-label"]:[t,"form-file-label"],y=p[0],x=p[1];return t=Object(v.a)(y,x),o.a.createElement("label",Object(r.a)({},f,{ref:a,htmlFor:d||m,className:s()(c,t),"data-browse":f["data-browse"]}))}));w.displayName="FormFileLabel";var C=w,E=o.a.forwardRef((function(e,a){var t=e.id,l=e.bsPrefix,c=e.bsCustomPrefix,d=e.disabled,f=void 0!==d&&d,u=e.isValid,p=void 0!==u&&u,y=e.isInvalid,x=void 0!==y&&y,O=e.feedbackTooltip,h=void 0!==O&&O,j=e.feedback,N=e.className,w=e.style,E=e.label,g=e.children,I=e.custom,k=e.lang,F=e["data-browse"],R=e.as,V=void 0===R?"div":R,A=e.inputAs,S=void 0===A?"input":A,T=Object(i.a)(e,["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"]),L=I?[c,"custom"]:[l,"form-file"],z=L[0],M=L[1];l=Object(v.a)(z,M);var _=Object(n.useContext)(b).controlId,D=Object(n.useMemo)((function(){return{controlId:t||_,custom:I}}),[_,I,t]),K=null!=E&&!1!==E&&!g,q=o.a.createElement(P,Object(r.a)({},T,{ref:a,isValid:p,isInvalid:x,disabled:f,as:S,lang:k}));return o.a.createElement(b.Provider,{value:D},o.a.createElement(V,{style:w,className:s()(N,l,I&&"custom-file")},g||o.a.createElement(o.a.Fragment,null,I?o.a.createElement(o.a.Fragment,null,q,K&&o.a.createElement(C,{"data-browse":F},E)):o.a.createElement(o.a.Fragment,null,K&&o.a.createElement(C,null,E),q),(p||x)&&o.a.createElement(m,{type:p?"valid":"invalid",tooltip:h},j))))}));E.displayName="FormFile",E.Input=P,E.Label=C;var g=E,I=(t(95),o.a.forwardRef((function(e,a){var t,l,c=e.bsPrefix,d=e.bsCustomPrefix,f=e.type,u=e.size,m=e.htmlSize,p=e.id,y=e.className,x=e.isValid,O=void 0!==x&&x,h=e.isInvalid,j=void 0!==h&&h,N=e.plaintext,P=e.readOnly,w=e.custom,C=e.as,E=void 0===C?"input":C,g=Object(i.a)(e,["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),I=Object(n.useContext)(b).controlId,k=w?[d,"custom"]:[c,"form-control"],F=k[0],R=k[1];if(c=Object(v.a)(F,R),N)(l={})[c+"-plaintext"]=!0,t=l;else if("file"===f){var V;(V={})[c+"-file"]=!0,t=V}else if("range"===f){var A;(A={})[c+"-range"]=!0,t=A}else if("select"===E&&w){var S;(S={})[c+"-select"]=!0,S[c+"-select-"+u]=u,t=S}else{var T;(T={})[c]=!0,T[c+"-"+u]=u,t=T}return o.a.createElement(E,Object(r.a)({},g,{type:f,size:m,ref:a,readOnly:P,id:p||I,className:s()(y,t,O&&"is-valid",j&&"is-invalid")}))})));I.displayName="FormControl";var k=Object.assign(I,{Feedback:m}),F=o.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,c=e.children,d=e.controlId,f=e.as,u=void 0===f?"div":f,m=Object(i.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(v.a)(t,"form-group");var p=Object(n.useMemo)((function(){return{controlId:d}}),[d]);return o.a.createElement(b.Provider,{value:p},o.a.createElement(u,Object(r.a)({},m,{ref:a,className:s()(l,t)}),c))}));F.displayName="FormGroup";var R=F,V=["xl","lg","md","sm","xs"],A=o.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,n=e.as,c=void 0===n?"div":n,d=Object(i.a)(e,["bsPrefix","className","as"]),f=Object(v.a)(t,"col"),u=[],m=[];return V.forEach((function(e){var a,t,r,i=d[e];if(delete d[e],"object"===typeof i&&null!=i){var l=i.span;a=void 0===l||l,t=i.offset,r=i.order}else a=i;var s="xs"!==e?"-"+e:"";a&&u.push(!0===a?""+f+s:""+f+s+"-"+a),null!=r&&m.push("order"+s+"-"+r),null!=t&&m.push("offset"+s+"-"+t)})),u.length||u.push(f),o.a.createElement(c,Object(r.a)({},d,{ref:a,className:s.a.apply(void 0,[l].concat(u,m))}))}));A.displayName="Col";var S=A,T=o.a.forwardRef((function(e,a){var t=e.as,l=void 0===t?"label":t,c=e.bsPrefix,d=e.column,f=e.srOnly,u=e.className,m=e.htmlFor,p=Object(i.a)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),y=Object(n.useContext)(b).controlId;c=Object(v.a)(c,"form-label");var x="col-form-label";"string"===typeof d&&(x=x+" "+x+"-"+d);var O=s()(u,c,f&&"sr-only",d&&x);return m=m||y,d?o.a.createElement(S,Object(r.a)({as:"label",className:O,htmlFor:m},p)):o.a.createElement(l,Object(r.a)({ref:a,className:O,htmlFor:m},p))}));T.displayName="FormLabel",T.defaultProps={column:!1,srOnly:!1};var L=T,z=o.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,n=e.as,c=void 0===n?"small":n,d=e.muted,f=Object(i.a)(e,["bsPrefix","className","as","muted"]);return t=Object(v.a)(t,"form-text"),o.a.createElement(c,Object(r.a)({},f,{ref:a,className:s()(l,t,d&&"text-muted")}))}));z.displayName="FormText";var M=z,_=o.a.forwardRef((function(e,a){return o.a.createElement(j,Object(r.a)({},e,{ref:a,type:"switch"}))}));_.displayName="Switch",_.Input=j.Input,_.Label=j.Label;var D=_,K=/-(.)/g;var q=function(e){return e[0].toUpperCase()+(a=e,a.replace(K,(function(e,a){return a.toUpperCase()}))).slice(1);var a};var G=function(e,a){var t=void 0===a?{}:a,l=t.displayName,n=void 0===l?q(e):l,c=t.Component,d=t.defaultProps,f=o.a.forwardRef((function(a,t){var l=a.className,n=a.bsPrefix,d=a.as,f=void 0===d?c||"div":d,u=Object(i.a)(a,["className","bsPrefix","as"]),m=Object(v.a)(n,e);return o.a.createElement(f,Object(r.a)({ref:t,className:s()(l,m)},u))}));return f.defaultProps=d,f.displayName=n,f}("form-row"),J=o.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.inline,n=e.className,c=e.validated,d=e.as,f=void 0===d?"form":d,u=Object(i.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(v.a)(t,"form"),o.a.createElement(f,Object(r.a)({},u,{ref:a,className:s()(n,c&&"was-validated",l&&t+"-inline")}))}));J.displayName="Form",J.defaultProps={inline:!1},J.Row=G,J.Group=R,J.Control=k,J.Check=j,J.File=g,J.Switch=D,J.Label=L,J.Text=M;a.a=J},118:function(e,a,t){"use strict";var r=t(5),i=t(9),l=t(91),s=t.n(l),n=t(0),o=t.n(n),c=t(92);var d=function(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return a.filter((function(e){return null!=e})).reduce((function(e,a){if("function"!==typeof a)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?a:function(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];e.apply(this,r),a.apply(this,r)}}),null)};function f(e){return!e||"#"===e.trim()}var u=o.a.forwardRef((function(e,a){var t=e.as,l=void 0===t?"a":t,s=e.disabled,n=e.onKeyDown,c=Object(i.a)(e,["as","disabled","onKeyDown"]),u=function(e){var a=c.href,t=c.onClick;(s||f(a))&&e.preventDefault(),s?e.stopPropagation():t&&t(e)};return f(c.href)&&(c.role=c.role||"button",c.href=c.href||"#"),s&&(c.tabIndex=-1,c["aria-disabled"]=!0),o.a.createElement(l,Object(r.a)({ref:a},c,{onClick:u,onKeyDown:d((function(e){" "===e.key&&(e.preventDefault(),u(e))}),n)}))}));u.displayName="SafeAnchor";var m=u,b=o.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.variant,n=e.size,d=e.active,f=e.className,u=e.block,b=e.type,v=e.as,p=Object(i.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),y=Object(c.a)(t,"btn"),x=s()(f,y,d&&"active",l&&y+"-"+l,u&&y+"-block",n&&y+"-"+n);if(p.href)return o.a.createElement(m,Object(r.a)({},p,{as:v,ref:a,className:s()(x,p.disabled&&"disabled")}));a&&(p.ref=a),b?p.type=b:v||(p.type="button");var O=v||"button";return o.a.createElement(O,Object(r.a)({},p,{className:x}))}));b.displayName="Button",b.defaultProps={variant:"primary",active:!1,disabled:!1};a.a=b},91:function(e,a,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function i(){for(var e=[],a=0;a<arguments.length;a++){var r=arguments[a];if(r){var l=typeof r;if("string"===l||"number"===l)e.push(r);else if(Array.isArray(r)){if(r.length){var s=i.apply(null,r);s&&e.push(s)}}else if("object"===l)if(r.toString===Object.prototype.toString)for(var n in r)t.call(r,n)&&r[n]&&e.push(n);else e.push(r.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(a,[]))||(e.exports=r)}()},92:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));t(5);var r=t(0),i=t.n(r),l=i.a.createContext({});l.Consumer,l.Provider;function s(e,a){var t=Object(r.useContext)(l);return e||t[a]||a}},93:function(e,a,t){},95:function(e,a,t){"use strict";var r=function(){};e.exports=r},97:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];function r(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];var i=null;return a.forEach((function(e){if(null==i){var a=e.apply(void 0,t);null!=a&&(i=a)}})),i}return(0,l.default)(r)};var r,i=t(101),l=(r=i)&&r.__esModule?r:{default:r};e.exports=a.default}}]);
//# sourceMappingURL=0.e44bdb68.chunk.js.map