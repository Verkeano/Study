(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function a(){}function L(e){return e()}function w(){return Object.create(null)}function p(e){e.forEach(L)}function N(e){return typeof e=="function"}function q(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function M(e){return Object.keys(e).length===0}function P(e,t,n){e.insertBefore(t,n||null)}function j(e){e.parentNode&&e.parentNode.removeChild(e)}function B(e){return document.createElement(e)}function C(e){return Array.from(e.childNodes)}let $;function h(e){$=e}const f=[],E=[];let d=[];const O=[],H=Promise.resolve();let m=!1;function I(){m||(m=!0,H.then(A))}function y(e){d.push(e)}const g=new Set;let u=0;function A(){if(u!==0)return;const e=$;do{try{for(;u<f.length;){const t=f[u];u++,h(t),F(t.$$)}}catch(t){throw f.length=0,u=0,t}for(h(null),f.length=0,u=0;E.length;)E.pop()();for(let t=0;t<d.length;t+=1){const n=d[t];g.has(n)||(g.add(n),n())}d.length=0}while(f.length);for(;O.length;)O.pop()();m=!1,g.clear(),h(e)}function F(e){if(e.fragment!==null){e.update(),p(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(y)}}function K(e){const t=[],n=[];d.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),d=t}const T=new Set;function W(e,t){e&&e.i&&(T.delete(e),e.i(t))}function z(e,t,n,o){const{fragment:r,after_update:s}=e.$$;r&&r.m(t,n),o||y(()=>{const l=e.$$.on_mount.map(L).filter(N);e.$$.on_destroy?e.$$.on_destroy.push(...l):p(l),e.$$.on_mount=[]}),s.forEach(y)}function D(e,t){const n=e.$$;n.fragment!==null&&(K(n.after_update),p(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function G(e,t){e.$$.dirty[0]===-1&&(f.push(e),I(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function J(e,t,n,o,r,s,l,S=[-1]){const _=$;h(e);const c=e.$$={fragment:null,ctx:[],props:s,update:a,not_equal:r,bound:w(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(_?_.$$.context:[])),callbacks:w(),dirty:S,skip_bound:!1,root:t.target||_.$$.root};l&&l(c.root);let b=!1;if(c.ctx=n?n(e,t.props||{},(i,v,...x)=>{const k=x.length?x[0]:v;return c.ctx&&r(c.ctx[i],c.ctx[i]=k)&&(!c.skip_bound&&c.bound[i]&&c.bound[i](k),b&&G(e,i)),v}):[],c.update(),b=!0,p(c.before_update),c.fragment=o?o(c.ctx):!1,t.target){if(t.hydrate){const i=C(t.target);c.fragment&&c.fragment.l(i),i.forEach(j)}else c.fragment&&c.fragment.c();t.intro&&W(e.$$.fragment),z(e,t.target,t.anchor,t.customElement),A()}h(_)}class Q{$destroy(){D(this,1),this.$destroy=a}$on(t,n){if(!N(n))return a;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!M(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function R(e){let t;return{c(){t=B("body"),t.innerHTML=`<div class="background svelte-1vh0qeu"><p>Hello World</p> 
    <div class="container svelte-1vh0qeu"></div></div>`},m(n,o){P(n,t,o)},p:a,i:a,o:a,d(n){n&&j(t)}}}class U extends Q{constructor(t){super(),J(this,t,null,R,q,{})}}new U({target:document.getElementById("app")});
