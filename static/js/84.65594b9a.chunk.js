(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{355:function(e,t,n){!function(e){"use strict";e.defineMode("pegjs",function(t){var n=e.getMode(t,"javascript");return{startState:function(){return{inString:!1,stringType:null,inComment:!1,inCharacterClass:!1,braced:0,lhs:!0,localState:null}},token:function(t,r){if(t&&(r.inString||r.inComment||'"'!=t.peek()&&"'"!=t.peek()||(r.stringType=t.peek(),t.next(),r.inString=!0)),r.inString||r.inComment||!t.match(/^\/\*/)||(r.inComment=!0),r.inString){for(;r.inString&&!t.eol();)t.peek()===r.stringType?(t.next(),r.inString=!1):"\\"===t.peek()?(t.next(),t.next()):t.match(/^.[^\\\"\']*/);return r.lhs?"property string":"string"}if(r.inComment){for(;r.inComment&&!t.eol();)t.match(/\*\//)?r.inComment=!1:t.match(/^.[^\*]*/);return"comment"}if(r.inCharacterClass)for(;r.inCharacterClass&&!t.eol();)t.match(/^[^\]\\]+/)||t.match(/^\\./)||(r.inCharacterClass=!1);else{if("["===t.peek())return t.next(),r.inCharacterClass=!0,"bracket";if(t.match(/^\/\//))return t.skipToEnd(),"comment";if(r.braced||"{"===t.peek()){null===r.localState&&(r.localState=e.startState(n));var a=n.token(t,r.localState),i=t.current();if(!a)for(var c=0;c<i.length;c++)"{"===i[c]?r.braced++:"}"===i[c]&&r.braced--;return a}if(function(e){return e.match(/^[a-zA-Z_][a-zA-Z0-9_]*/)}(t))return":"===t.peek()?"variable":"variable-2";if(-1!=["[","]","(",")"].indexOf(t.peek()))return t.next(),"bracket";t.eatSpace()||t.next()}return null}}},"javascript")}(n(227),n(231))}}]);
//# sourceMappingURL=84.65594b9a.chunk.js.map