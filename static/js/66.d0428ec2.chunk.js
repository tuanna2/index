(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{335:function(r,n,t){!function(r){"use strict";r.defineMode("http",function(){function r(r,n){return r.skipToEnd(),n.cur=o,"error"}function n(n,e){return n.match(/^HTTP\/\d\.\d/)?(e.cur=t,"keyword"):n.match(/^[A-Z]+/)&&/[ \t]/.test(n.peek())?(e.cur=u,"keyword"):r(n,e)}function t(n,t){var u=n.match(/^\d+/);if(!u)return r(n,t);t.cur=e;var i=Number(u[0]);return i>=100&&i<200?"positive informational":i>=200&&i<300?"positive success":i>=300&&i<400?"positive redirect":i>=400&&i<500?"negative client-error":i>=500&&i<600?"negative server-error":"error"}function e(r,n){return r.skipToEnd(),n.cur=o,null}function u(r,n){return r.eatWhile(/\S/),n.cur=i,"string-2"}function i(n,t){return n.match(/^HTTP\/\d\.\d$/)?(t.cur=o,"keyword"):r(n,t)}function o(r){return r.sol()&&!r.eat(/[ \t]/)?r.match(/^.*?:/)?"atom":(r.skipToEnd(),"error"):(r.skipToEnd(),"string")}function c(r){return r.skipToEnd(),null}return{token:function(r,n){var t=n.cur;return t!=o&&t!=c&&r.eatSpace()?null:t(r,n)},blankLine:function(r){r.cur=c},startState:function(){return{cur:n}}}}),r.defineMIME("message/http","http")}(t(227))}}]);
//# sourceMappingURL=66.d0428ec2.chunk.js.map