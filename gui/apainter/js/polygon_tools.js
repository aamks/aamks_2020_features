window.polygon_tools_version="0.4.6",window.polygon_tools_rev="ccd5277",function t(n,e,r){function a(u,o){if(!e[u]){if(!n[u]){var s="function"==typeof require&&require;if(!o&&s)return s(u,!0);if(i)return i(u,!0);var c=new Error("Cannot find module '"+u+"'");throw c.code="MODULE_NOT_FOUND",c}var l=e[u]={exports:{}};n[u][0].call(l.exports,function(t){var e=n[u][1][t];return a(e||t)},l,l.exports,t,n,e,r)}return e[u].exports}for(var i="function"==typeof require&&require,u=0;u<r.length;u++)a(r[u]);return a}({1:[function(t,n,e){"use strict";function r(t,n){return t.b===n.b&&t.a===n.a}function a(t,n){return t.b<n.b||t.b===n.b&&t.a<=n.a}function i(t,n,e){var r=n.b-t.b,a=e.b-n.b;return 0<r+a?r<a?n.a-t.a+r/(r+a)*(t.a-e.a):n.a-e.a+a/(r+a)*(e.a-t.a):0}function u(t,n,e){var r=n.b-t.b,a=e.b-n.b;return 0<r+a?(n.a-e.a)*r+(n.a-t.a)*a:0}function o(t,n){return t.a<n.a||t.a===n.a&&t.b<=n.b}function s(t,n,e){var r=n.a-t.a,a=e.a-n.a;return 0<r+a?r<a?n.b-t.b+r/(r+a)*(t.b-e.b):n.b-e.b+a/(r+a)*(e.b-t.b):0}function c(t,n,e){var r=n.a-t.a,a=e.a-n.a;return 0<r+a?(n.b-e.b)*r+(n.b-t.b)*a:0}function l(t){return a(t.b.a,t.a)}function f(t){return a(t.a,t.b.a)}function b(t,n,e,r){return t=0>t?0:t,e=0>e?0:e,t<=e?0===e?(n+r)/2:n+t/(t+e)*(r-n):r+e/(t+e)*(n-r)}function h(t){var n=g(t.b);return p(n,t.c),p(n.b,t.c),T(n,t.a),n}function _(t,n){var e=!1,r=!1;t!==n&&(n.a!==t.a&&(r=!0,G(n.a,t.a)),n.d!==t.d&&(e=!0,S(n.d,t.d)),y(n,t),r||(p(n,t.a),t.a.c=t),e||(T(n,t.d),t.d.a=t))}function d(t){var n=t.b,e=!1;t.d!==t.b.d&&(e=!0,S(t.d,t.b.d)),t.c===t?G(t.a,null):(t.b.d.a=J(t),t.a.c=t.c,y(t,J(t)),e||T(t,t.d)),n.c===n?(G(n.a,null),S(n.d,null)):(t.d.a=J(n),n.a.c=n.c,y(n,J(n))),N(t)}function v(t){var n=g(t),e=n.b;return y(n,t.e),n.a=t.b.a,p(e,n.a),n.d=e.d=t.d,n=n.b,y(t.b,J(t.b)),y(t.b,n),t.b.a=n.a,n.b.a.c=n.b,n.b.d=t.b.d,n.f=t.f,n.b.f=t.b.f,n}function E(t,n){var e=!1,r=g(t),a=r.b;return n.d!==t.d&&(e=!0,S(n.d,t.d)),y(r,t.e),y(a,n),r.a=t.b.a,a.a=n.a,r.d=a.d=t.d,t.d.a=a,e||T(r,t.d),r}function g(t){var n=new H,e=new H,r=t.b.h;return e.h=r,r.b.h=n,n.h=t,t.b.h=e,n.b=e,n.c=n,n.e=e,e.b=n,e.c=e,e.e=n}function y(t,n){var e=t.c,r=n.c;e.b.e=n,r.b.e=t,t.c=r,n.c=e}function p(t,n){var e=n.f,r=new tt(n,e);e.e=r,n.f=r,e=r.c=t;do{e.a=r,e=e.c}while(e!==t)}function T(t,n){var e=n.d,r=new K(n,e);e.b=r,n.d=r,r.a=t,r.c=n.c,e=t;do{e.d=r,e=e.e}while(e!==t)}function N(t){var n=t.h;t=t.b.h,n.b.h=t,t.b.h=n}function G(t,n){var e=t.c,r=e;do{r.a=n,r=r.c}while(r!==e);e=t.f,r=t.e,r.f=e,e.e=r}function S(t,n){var e=t.a,r=e;do{r.d=n,r=r.e}while(r!==e);e=t.d,r=t.b,r.d=e,e.b=r}function I(t){var n=0;return Math.abs(t[1])>Math.abs(t[0])&&(n=1),Math.abs(t[2])>Math.abs(t[n])&&(n=2),n}function L(t,n){t.f+=n.f,t.b.f+=n.b.f}function w(t,n,e){return t=t.a,n=n.a,e=e.a,n.b.a===t?e.b.a===t?a(n.a,e.a)?0>=u(e.b.a,n.a,e.a):0<=u(n.b.a,e.a,n.a):0>=u(e.b.a,t,e.a):e.b.a===t?0<=u(n.b.a,t,n.a):(n=i(n.b.a,t,n.a),t=i(e.b.a,t,e.a),n>=t)}function O(t){t.a.i=null;var n=t.e;n.a.c=n.c,n.c.a=n.a,t.e=null}function A(t,n){d(t.a),t.c=!1,t.a=n,n.i=t}function U(t){var n=t.a.a;do{t=_t(t)}while(t.a.a===n);return t.c&&(n=E(ht(t).a.b,t.a.e),A(t,n),t=_t(t)),t}function m(t,n,e){var r=new bt;return r.a=e,r.e=q(t.f,n.e,r),e.i=r}function D(t,n){switch(t.s){case 100130:return 0!=(1&n);case 100131:return 0!==n;case 100132:return 0<n;case 100133:return 0>n;case 100134:return 2<=n||-2>=n}return!1}function R(t){var n=t.a,e=n.d;e.c=t.d,e.a=n,O(t)}function M(t,n,e){for(t=n,n=n.a;t!==e;){t.c=!1;var r=ht(t),a=r.a;if(a.a!==n.a){if(!r.c){R(t);break}a=E(n.c.b,a.b),A(r,a)}n.c!==a&&(_(J(a),a),_(n,a)),R(t),n=r.a,t=r}return n}function k(t,n,e,r,a,i){var u=!0;do{m(t,n,e.b),e=e.c}while(e!==r);for(null===a&&(a=ht(n).a.b.c);r=ht(n),e=r.a.b,e.a===a.a;)e.c!==a&&(_(J(e),e),_(J(a),e)),r.f=n.f-e.f,r.d=D(t,r.f),n.b=!0,!u&&C(t,n)&&(L(e,a),O(n),d(a)),u=!1,n=r,a=e;n.b=!0,i&&j(t,n)}function W(t,n,e,r,a){var i=[n.g[0],n.g[1],n.g[2]];n.d=null,n.d=t.o?t.o(i,e,r,t.c)||null:null,null===n.d&&(a?t.n||(Z(t,100156),t.n=!0):n.d=e[0])}function P(t,n,e){var r=[null,null,null,null];r[0]=n.a.d,r[1]=e.a.d,W(t,n.a,r,[.5,.5,0,0],!1),_(n,e)}function x(t,n,e,r,a){var i=Math.abs(n.b-t.b)+Math.abs(n.a-t.a),u=Math.abs(e.b-t.b)+Math.abs(e.a-t.a),o=a+1;r[a]=.5*u/(i+u),r[o]=.5*i/(i+u),t.g[0]+=r[a]*n.g[0]+r[o]*e.g[0],t.g[1]+=r[a]*n.g[1]+r[o]*e.g[1],t.g[2]+=r[a]*n.g[2]+r[o]*e.g[2]}function C(t,n){var e=ht(n),i=n.a,o=e.a;if(a(i.a,o.a)){if(0<u(o.b.a,i.a,o.a))return!1;if(r(i.a,o.a)){if(i.a!==o.a){var e=t.e,s=i.a.h;if(0<=s){var e=e.b,c=e.d,l=e.e,f=e.c,b=f[s];c[b]=c[e.a],f[c[b]]=b,b<=--e.a&&(1>=b?lt(e,b):a(l[c[b>>1]],l[c[b]])?lt(e,b):ft(e,b)),l[s]=null,f[s]=e.b,e.b=s}else for(e.c[-(s+1)]=null;0<e.a&&null===e.c[e.d[e.a-1]];)--e.a;P(t,J(o),i)}}else v(o.b),_(i,J(o)),n.b=e.b=!0}else{if(0>u(i.b.a,o.a,i.a))return!1;_t(n).b=n.b=!0,v(i.b),_(J(o),i)}return!0}function B(t,n){var e=ht(n),l=n.a,f=e.a,h=l.a,d=f.a,E=l.b.a,g=f.b.a,y=new tt;if(u(E,t.a,h),u(g,t.a,d),h===d||Math.min(h.a,E.a)>Math.max(d.a,g.a))return!1;if(a(h,d)){if(0<u(g,h,d))return!1}else if(0>u(E,d,h))return!1;var p,T,N=E,G=h,S=g,I=d;if(a(N,G)||(p=N,N=G,G=p),a(S,I)||(p=S,S=I,I=p),a(N,S)||(p=N,N=S,S=p,p=G,G=I,I=p),a(S,G)?a(G,I)?(p=i(N,S,G),T=i(S,G,I),0>p+T&&(p=-p,T=-T),y.b=b(p,S.b,T,G.b)):(p=u(N,S,G),T=-u(N,I,G),0>p+T&&(p=-p,T=-T),y.b=b(p,S.b,T,I.b)):y.b=(S.b+G.b)/2,o(N,G)||(p=N,N=G,G=p),o(S,I)||(p=S,S=I,I=p),o(N,S)||(p=N,N=S,S=p,p=G,G=I,I=p),o(S,G)?o(G,I)?(p=s(N,S,G),T=s(S,G,I),0>p+T&&(p=-p,T=-T),y.a=b(p,S.a,T,G.a)):(p=c(N,S,G),T=-c(N,I,G),0>p+T&&(p=-p,T=-T),y.a=b(p,S.a,T,I.a)):y.a=(S.a+G.a)/2,a(y,t.a)&&(y.b=t.a.b,y.a=t.a.a),N=a(h,d)?h:d,a(N,y)&&(y.b=N.b,y.a=N.a),r(y,h)||r(y,d))return C(t,n),!1;if(!r(E,t.a)&&0<=u(E,t.a,y)||!r(g,t.a)&&0>=u(g,t.a,y)){if(g===t.a)return v(l.b),_(f.b,l),n=U(n),l=ht(n).a,M(t,ht(n),e),k(t,n,J(l),l,l,!0),!0;if(E===t.a){v(f.b),_(l.e,J(f)),h=e=n,d=h.a.b.a;do{h=_t(h)}while(h.a.b.a===d);return n=h,h=ht(n).a.b.c,e.a=J(f),f=M(t,e,null),k(t,n,f.c,l.b.c,h,!0),!0}return 0<=u(E,t.a,y)&&(_t(n).b=n.b=!0,v(l.b),l.a.b=t.a.b,l.a.a=t.a.a),0>=u(g,t.a,y)&&(n.b=e.b=!0,v(f.b),f.a.b=t.a.b,f.a.a=t.a.a),!1}return v(l.b),v(f.b),_(J(f),l),l.a.b=y.b,l.a.a=y.a,l.a.h=rt(t.e,l.a),l=l.a,f=[0,0,0,0],y=[h.d,E.d,d.d,g.d],l.g[0]=l.g[1]=l.g[2]=0,x(l,h,E,f,0),x(l,d,g,f,2),W(t,l,y,f,!0),_t(n).b=n.b=e.b=!0,!1}function j(t,n){for(var e=ht(n);;){for(;e.b;)n=e,e=ht(e);if(!n.b&&(e=n,null===(n=_t(n))||!n.b))break;n.b=!1;var r,i=n.a,o=e.a;if(r=i.b.a!==o.b.a)t:{r=n;var s=ht(r),c=r.a,l=s.a,f=void 0;if(a(c.b.a,l.b.a)){if(0>u(c.b.a,l.b.a,c.a)){r=!1;break t}_t(r).b=r.b=!0,f=v(c),_(l.b,f),f.d.c=r.d}else{if(0<u(l.b.a,c.b.a,l.a)){r=!1;break t}r.b=s.b=!0,f=v(l),_(c.e,l.b),f.b.d.c=r.d}r=!0}if(r&&(e.c?(O(e),d(o),e=ht(n),o=e.a):n.c&&(O(n),d(i),n=_t(e),i=n.a)),i.a!==o.a)if(i.b.a===o.b.a||n.c||e.c||i.b.a!==t.a&&o.b.a!==t.a)C(t,n);else if(B(t,n))break;i.a===o.a&&i.b.a===o.b.a&&(L(o,i),O(n),d(i),n=_t(e))}}function V(t,n){t.a=n;for(var e=n.c;null===e.i;)if((e=e.c)===n.c){var e=t,i=n,o=new bt;o.a=i.c.b;var s=e.f,c=s.a;do{c=c.a}while(null!==c.b&&!s.c(s.b,o,c.b));var s=c.b,l=ht(s),o=s.a,c=l.a;if(0===u(o.b.a,i,o.a))o=s.a,r(o.a,i)||r(o.b.a,i)||(v(o.b),s.c&&(d(o.c),s.c=!1),_(i.c,o),V(e,i));else{var f=a(c.b.a,o.b.a)?s:l,l=void 0;s.d||f.c?(l=f===s?E(i.c.b,o.e):E(c.b.c.b,i.c).b,f.c?A(f,l):(o=e,s=m(e,s,l),s.f=_t(s).f+s.a.f,s.d=D(o,s.f)),V(e,i)):k(e,s,i.c,i.c,null,!0)}return}if(e=U(e.i),o=ht(e),s=o.a,o=M(t,o,null),o.c===s){var s=o,o=s.c,c=ht(e),l=e.a,f=c.a,b=!1;l.b.a!==f.b.a&&B(t,e),r(l.a,t.a)&&(_(J(o),l),e=U(e),o=ht(e).a,M(t,ht(e),c),b=!0),r(f.a,t.a)&&(_(s,J(f)),s=M(t,c,null),b=!0),b?k(t,e,s.c,o,o,!0):(i=a(f.a,l.a)?J(f):l,i=E(s.c.b,i),k(t,e,i,i.c,i.c,!1),i.b.i.c=!0,j(t,e))}else k(t,e,o.c,s,s,!0)}function z(t,n){var e=new bt,r=h(t.b);r.a.b=vt,r.a.a=n,r.b.a.b=-vt,r.b.a.a=n,t.a=r.b.a,e.a=r,e.f=0,e.d=!1,e.c=!1,e.h=!0,e.b=!1,r=t.f,r=q(r,r.a,e),e.e=r}function F(t){this.a=new X,this.b=t,this.c=w}function q(t,n,e){do{n=n.c}while(null!==n.b&&!t.c(t.b,n.b,e));return t=new X(e,n.a,n),n.a.c=t,n.a=t}function X(t,n,e){this.b=t||null,this.a=n||this,this.c=e||this}function Y(){this.d=Et,this.p=this.b=this.q=null,this.j=[0,0,0],this.s=100130,this.n=!1,this.o=this.a=this.e=this.f=null,this.m=!1,this.c=this.r=this.i=this.k=this.l=this.h=null}function Q(t,n){if(t.d!==n)for(;t.d!==n;)if(t.d<n)switch(t.d){case Et:Z(t,100151),t.u(null);break;case 1:Z(t,100152),t.t()}else switch(t.d){case 2:Z(t,100154),t.v();break;case 1:Z(t,100153),t.w()}}function Z(t,n){t.p&&t.p(n,t.c)}function K(t,n){this.b=t||this,this.d=n||this,this.a=null,this.c=!1}function H(){this.h=this,this.i=this.d=this.a=this.e=this.c=this.b=null,this.f=0}function J(t){return t.b.e}function $(){this.c=new tt,this.a=new K,this.b=new H,this.d=new H,this.b.b=this.d,this.d.b=this.b}function tt(t,n){this.e=t||this,this.f=n||this,this.d=this.c=null,this.g=[0,0,0],this.h=this.a=this.b=0}function nt(){this.c=[],this.d=null,this.a=0,this.e=!1,this.b=new it}function et(t){t.d=[];for(var n=0;n<t.a;n++)t.d[n]=n;t.d.sort(function(t){return function(n,e){return a(t[n],t[e])?1:-1}}(t.c)),t.e=!0,ot(t.b)}function rt(t,n){if(t.e){var e=t.b,r=++e.a;2*r>e.f&&(e.f*=2,e.c=ut(e.c,e.f+1));var a;return 0===e.b?a=r:(a=e.b,e.b=e.c[e.b]),e.e[a]=n,e.c[a]=r,e.d[r]=a,e.h&&ft(e,r),a}return e=t.a++,t.c[e]=n,-(e+1)}function at(t){if(0===t.a)return ct(t.b);var n=t.c[t.d[t.a-1]];if(0!==t.b.a&&a(st(t.b),n))return ct(t.b);do{--t.a}while(0<t.a&&null===t.c[t.d[t.a-1]]);return n}function it(){this.d=ut([0],33),this.e=[null,null],this.c=[0,0],this.a=0,this.f=32,this.b=0,this.h=!1,this.d[1]=1}function ut(t,n){for(var e=Array(n),r=0;r<t.length;r++)e[r]=t[r];for(;r<n;r++)e[r]=0;return e}function ot(t){for(var n=t.a;1<=n;--n)lt(t,n);t.h=!0}function st(t){return t.e[t.d[1]]}function ct(t){var n=t.d,e=t.e,r=t.c,a=n[1],i=e[a];return 0<t.a&&(n[1]=n[t.a],r[n[1]]=1,e[a]=null,r[a]=t.b,t.b=a,0<--t.a&&lt(t,1)),i}function lt(t,n){for(var e=t.d,r=t.e,i=t.c,u=n,o=e[u];;){var s=u<<1;s<t.a&&a(r[e[s+1]],r[e[s]])&&(s+=1);var c=e[s];if(s>t.a||a(r[o],r[c])){e[u]=o,i[o]=u;break}e[u]=c,i[c]=u,u=s}}function ft(t,n){for(var e=t.d,r=t.e,i=t.c,u=n,o=e[u];;){var s=u>>1,c=e[s];if(0===s||a(r[c],r[o])){e[u]=o,i[o]=u;break}e[u]=c,i[c]=u,u=s}}function bt(){this.e=this.a=null,this.f=0,this.c=this.b=this.h=this.d=!1}function ht(t){return t.e.c.b}function _t(t){return t.e.a.b}var dt,vt=4e150,Et=0;dt=Y.prototype,dt.x=function(){Q(this,Et)},dt.B=function(t,n){switch(t){case 100142:return;case 100140:switch(n){case 100130:case 100131:case 100132:case 100133:case 100134:return void(this.s=n)}break;case 100141:return void(this.m=!!n);default:return void Z(this,100900)}Z(this,100901)},dt.y=function(t){switch(t){case 100142:return 0;case 100140:return this.s;case 100141:return this.m;default:Z(this,100900)}return!1},dt.A=function(t,n,e){this.j[0]=t,this.j[1]=n,this.j[2]=e},dt.z=function(t,n){var e=n||null;switch(t){case 100100:case 100106:this.h=e;break;case 100104:case 100110:this.l=e;break;case 100101:case 100107:this.k=e;break;case 100102:case 100108:this.i=e;break;case 100103:case 100109:this.p=e;break;case 100105:case 100111:this.o=e;break;case 100112:this.r=e;break;default:Z(this,100900)}},dt.C=function(t,n){var e=!1,r=[0,0,0];Q(this,2);for(var a=0;3>a;++a){var i=t[a];-1e150>i&&(i=-1e150,e=!0),1e150<i&&(i=1e150,e=!0),r[a]=i}e&&Z(this,100155),e=this.q,null===e?(e=h(this.b),_(e,e.b)):(v(e),e=e.e),e.a.d=n,e.a.g[0]=r[0],e.a.g[1]=r[1],e.a.g[2]=r[2],e.f=1,e.b.f=-1,this.q=e},dt.u=function(t){Q(this,Et),this.d=1,this.b=new $,this.c=t},dt.t=function(){Q(this,1),this.d=2,this.q=null},dt.v=function(){Q(this,2),this.d=1},dt.w=function(){Q(this,1),this.d=Et;var t=this.j[0],n=this.j[1],e=this.j[2],i=!1,o=[t,n,e];if(0===t&&0===n&&0===e){for(var n=[-2e150,-2e150,-2e150],s=[2e150,2e150,2e150],e=[],c=[],i=this.b.c,t=i.e;t!==i;t=t.e)for(var b=0;3>b;++b){var h=t.g[b];h<s[b]&&(s[b]=h,c[b]=t),h>n[b]&&(n[b]=h,e[b]=t)}if(t=0,n[1]-s[1]>n[0]-s[0]&&(t=1),n[2]-s[2]>n[t]-s[t]&&(t=2),s[t]>=n[t])o[0]=0,o[1]=0,o[2]=1;else{for(n=0,s=c[t],e=e[t],c=[0,0,0],s=[s.g[0]-e.g[0],s.g[1]-e.g[1],s.g[2]-e.g[2]],b=[0,0,0],t=i.e;t!==i;t=t.e)b[0]=t.g[0]-e.g[0],b[1]=t.g[1]-e.g[1],b[2]=t.g[2]-e.g[2],c[0]=s[1]*b[2]-s[2]*b[1],c[1]=s[2]*b[0]-s[0]*b[2],c[2]=s[0]*b[1]-s[1]*b[0],(h=c[0]*c[0]+c[1]*c[1]+c[2]*c[2])>n&&(n=h,o[0]=c[0],o[1]=c[1],o[2]=c[2]);0>=n&&(o[0]=o[1]=o[2]=0,o[I(s)]=1)}i=!0}for(c=I(o),t=this.b.c,n=(c+1)%3,e=(c+2)%3,c=0<o[c]?1:-1,o=t.e;o!==t;o=o.e)o.b=o.g[n],o.a=c*o.g[e];if(i){for(o=0,i=this.b.a,t=i.b;t!==i;t=t.b)if(n=t.a,!(0>=n.f))do{o+=(n.a.b-n.b.a.b)*(n.a.a+n.b.a.a),n=n.e}while(n!==t.a);if(0>o)for(o=this.b.c,i=o.e;i!==o;i=i.e)i.a=-i.a}for(this.n=!1,o=this.b.b,t=o.h;t!==o;t=i)i=t.h,n=t.e,r(t.a,t.b.a)&&t.e.e!==t&&(P(this,n,t),d(t),t=n,n=t.e),n.e===t&&(n!==t&&(n!==i&&n!==i.b||(i=i.h),d(n)),t!==i&&t!==i.b||(i=i.h),d(t));for(this.e=o=new nt,i=this.b.c,t=i.e;t!==i;t=t.e)t.h=rt(o,t);for(et(o),this.f=new F(this),z(this,-vt),z(this,vt);null!==(o=at(this.e));){for(;;){t:if(t=this.e,0===t.a)i=st(t.b);else if(i=t.c[t.d[t.a-1]],0!==t.b.a&&(t=st(t.b),a(t,i))){i=t;break t}if(null===i||!r(i,o))break;i=at(this.e),P(this,o.c,i.c)}V(this,o)}for(this.a=this.f.a.a.b.a.a,o=0;null!==(i=this.f.a.a.b);)i.h||++o,O(i);for(this.f=null,o=this.e,o.b=null,o.d=null,this.e=o.c=null,o=this.b,t=o.a.b;t!==o.a;t=i)i=t.b,t=t.a,t.e.e===t&&(L(t.c,t),d(t));if(!this.n){if(o=this.b,this.m)for(t=o.b.h;t!==o.b;t=i)i=t.h,t.b.d.c!==t.d.c?t.f=t.d.c?1:-1:d(t);else for(t=o.a.b;t!==o.a;t=i)if(i=t.b,t.c){for(t=t.a;a(t.b.a,t.a);t=t.c.b);for(;a(t.a,t.b.a);t=t.e);for(n=t.c.b,e=void 0;t.e!==n;)if(a(t.b.a,n.a)){for(;n.e!==t&&(l(n.e)||0>=u(n.a,n.b.a,n.e.b.a));)e=E(n.e,n),n=e.b;n=n.c.b}else{for(;n.e!==t&&(f(t.c.b)||0<=u(t.b.a,t.a,t.c.b.a));)e=E(t,t.c.b),t=e.b;t=t.e}for(;n.e.e!==t;)e=E(n.e,n),n=e.b}if(this.h||this.i||this.k||this.l)if(this.m){for(o=this.b,i=o.a.b;i!==o.a;i=i.b)if(i.c){this.h&&this.h(2,this.c),t=i.a;do{this.k&&this.k(t.a.d,this.c),t=t.e}while(t!==i.a);this.i&&this.i(this.c)}}else{for(o=this.b,i=!!this.l,t=!1,n=-1,e=o.a.d;e!==o.a;e=e.d)if(e.c){t||(this.h&&this.h(4,this.c),t=!0),c=e.a;do{i&&(s=c.b.d.c?0:1,n!==s&&(n=s,this.l&&this.l(!!n,this.c))),this.k&&this.k(c.a.d,this.c),c=c.e}while(c!==e.a)}t&&this.i&&this.i(this.c)}if(this.r){for(o=this.b,t=o.a.b;t!==o.a;t=i)if(i=t.b,!t.c){n=t.a,e=n.e,c=void 0;do{c=e,e=c.e,c.d=null,null===c.b.d&&(c.c===c?G(c.a,null):(c.a.c=c.c,y(c,J(c))),s=c.b,s.c===s?G(s.a,null):(s.a.c=s.c,y(s,J(s))),N(c))}while(c!==n);n=t.d,t=t.b,t.d=n,n.b=t}return this.r(this.b),void(this.c=this.b=null)}}this.b=this.c=null},this.libtess={GluTesselator:Y,windingRule:{GLU_TESS_WINDING_ODD:100130,GLU_TESS_WINDING_NONZERO:100131,GLU_TESS_WINDING_POSITIVE:100132,GLU_TESS_WINDING_NEGATIVE:100133,GLU_TESS_WINDING_ABS_GEQ_TWO:100134},primitiveType:{GL_LINE_LOOP:2,GL_TRIANGLES:4,GL_TRIANGLE_STRIP:5,GL_TRIANGLE_FAN:6},errorType:{GLU_TESS_MISSING_BEGIN_POLYGON:100151,GLU_TESS_MISSING_END_POLYGON:100153,GLU_TESS_MISSING_BEGIN_CONTOUR:100152,GLU_TESS_MISSING_END_CONTOUR:100154,GLU_TESS_COORD_TOO_LARGE:100155,GLU_TESS_NEED_COMBINE_CALLBACK:100156},gluEnum:{GLU_TESS_MESH:100112,GLU_TESS_TOLERANCE:100142,GLU_TESS_WINDING_RULE:100140,GLU_TESS_BOUNDARY_ONLY:100141,GLU_INVALID_ENUM:100900,GLU_INVALID_VALUE:100901,GLU_TESS_BEGIN:100100,GLU_TESS_VERTEX:100101,GLU_TESS_END:100102,GLU_TESS_ERROR:100103,GLU_TESS_EDGE_FLAG:100104,GLU_TESS_COMBINE:100105,GLU_TESS_BEGIN_DATA:100106,GLU_TESS_VERTEX_DATA:100107,GLU_TESS_END_DATA:100108,GLU_TESS_ERROR_DATA:100109,GLU_TESS_EDGE_FLAG_DATA:100110,GLU_TESS_COMBINE_DATA:100111}},Y.prototype.gluDeleteTess=Y.prototype.x,Y.prototype.gluTessProperty=Y.prototype.B,Y.prototype.gluGetTessProperty=Y.prototype.y,Y.prototype.gluTessNormal=Y.prototype.A,Y.prototype.gluTessCallback=Y.prototype.z,Y.prototype.gluTessVertex=Y.prototype.C,Y.prototype.gluTessBeginPolygon=Y.prototype.u,Y.prototype.gluTessBeginContour=Y.prototype.t,Y.prototype.gluTessEndContour=Y.prototype.v,Y.prototype.gluTessEndPolygon=Y.prototype.w,void 0!==n&&(n.exports=this.libtess)},{}],2:[function(t,n,e){"use strict";function r(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e]);return n.default=t,n}Object.defineProperty(e,"__esModule",{value:!0}),e.tesselator=e.polygon=void 0;var a=t("./tesselator"),i=r(a),u=t("./polygon"),o=r(u);e.polygon=o,e.tesselator=i;"undefined"!=typeof window&&(window.PolygonTools={polygon:o,tesselator:i,version:window.polygon_tools_version||"",build:window.polygon_tools_rev||""})},{"./polygon":3,"./tesselator":4}],3:[function(t,n,e){"use strict";function r(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e]);return n.default=t,n}function a(t,n,e){return(n[0]-t[0])*(e[1]-t[1])-(e[0]-t[0])*(n[1]-t[1])}function i(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(t.length<3)return null;var e=t.map(function(t){return t.length>=3?t:[t[0],t[1],0]});if(!n){var r=g(e,3),a=r[0],i=r[1],u=r[2],o=N.subtract(i,a),s=N.subtract(u,a),c=N.normalize(N.cross(o,s));if(!c.some(function(t){return isNaN(t)}))return c;if(3===t.length)return null}var l=[0,0,0];return e.forEach(function(n,r){var a=e[(r+1)%t.length];l[0]=l[0]+(n[1]-a[1])*(n[2]+a[2]),l[1]=l[1]+(n[2]-a[2])*(n[0]+a[0]),l[2]=l[2]+(n[0]-a[0])*(n[1]+a[1])}),l=N.normalize(l),l.some(function(t){return isNaN(t)})?null:l}function u(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(t.length<3)return 0;if(t[0].length<3)return t.reduce(function(n,e,r){var a=t[r+1]||t[0];return n+e[0]*a[1]-a[0]*e[1]},0)/2;var e=t.length,r=n||i(t),a=[0,0,0];if(!r)return 0;for(var u=0;u<e;++u){var o=t[u],s=t[(u+1)%e];a=N.add(a,N.cross(o,s))}return N.dot(a,r)/2}function o(t){var n=t.reduce(function(n,e,r){var a=g(n,2),i=a[0],u=a[1],o=t[r+1]||t[0],s=e[0]*o[1]-o[0]*e[1];return[i+(e[0]+o[0])*s,u+(e[1]+o[1])*s]},[0,0]),e=g(n,2),r=e[0],a=e[1],i=u(t);return 0!==r&&(r/=6*Math.abs(i)),0!==a&&(a/=6*Math.abs(i)),i<0&&(r=-r,a=-a),[r,a]}function s(t){return u(t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:null)>0}function c(t){return u(t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:null)<0}function l(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,e=u(t,n);return e<0?I:e>0?S:G}function f(t){var n=[Number.MAX_VALUE,Number.MAX_VALUE],e=[-Number.MAX_VALUE,-Number.MAX_VALUE];return t.forEach(function(t){for(var r=0;r<Math.min(3,t.length);++r)n[r]=Math.min(n[r],t[r]),e[r]=Math.max(e[r],t[r])}),{xMin:n[0],yMin:n[1],xMax:e[0],yMax:e[1]}}function b(t){return s(t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:null)&&t.reverse(),t}function h(t){return c(t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:null)&&t.reverse(),t}function _(t,n){if(!t||t.length<3)return t;var e=f(t);n=n.filter(function(t){var n=f(t);return!(n.xMin>e.xMax||n.yMin>e.yMax||n.xMax<e.xMin||n.yMax<e.yMin)});var r={polygons:[t],holes:n};return p.run(r).reduce(function(t,n){return t.concat(n)},[])}function d(){for(var t=arguments.length,n=Array(t),e=0;e<t;e++)n[e]=arguments[e];var r={polygons:[h(n[0])],holes:n.slice(1).map(function(t){return b(t)}),boundaryOnly:!0,autoWinding:!1};return p.run(r)}function v(){for(var t=arguments.length,n=Array(t),e=0;e<t;e++)n[e]=arguments[e];var r={polygons:n.map(function(t){return h(t)}),boundaryOnly:!0,autoWinding:!1};return p.run(r)}function E(t,n){var e={polygons:[h(t),h(n)],boundaryOnly:!0,windingRule:p.GLU_TESS_WINDING_ABS_GEQ_TWO,autoWinding:!1};return p.run(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.WINDING_CW=e.WINDING_CCW=e.WINDING_UNKNOWN=void 0;var g=function(){function t(t,n){var e=[],r=!0,a=!1,i=void 0;try{for(var u,o=t[Symbol.iterator]();!(r=(u=o.next()).done)&&(e.push(u.value),!n||e.length!==n);r=!0);}catch(t){a=!0,i=t}finally{try{!r&&o.return&&o.return()}finally{if(a)throw i}}return e}return function(n,e){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return t(n,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();e.ccw=a,e.normal=i,e.area=u,e.centroid=o,e.is_ccw=s,e.is_cw=c,e.winding=l,e.bounds=f,e.ensure_cw=b,e.ensure_ccw=h,e.triangulate=_,e.subtract=d,e.union=v,e.intersection=E;var y=t("./tesselator"),p=r(y),T=t("./vec"),N=r(T),G=e.WINDING_UNKNOWN=0,S=e.WINDING_CCW=1,I=e.WINDING_CW=2},{"./tesselator":4,"./vec":5}],4:[function(t,n,e){"use strict";function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function a(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?t:n}function i(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)}function u(t){for(var n=[],e=0;e<t.length;e+=3)n.push([t[e],t[e+1],t[e+2]]);return n}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,n=new N(t.vertexSize),e=n.run(t);return t.boundaryOnly?e:e.map(u)}Object.defineProperty(e,"__esModule",{value:!0}),e.Tesselator=e.DEFAULT_OPTIONS=e.GLU_TESS_WINDING_ABS_GEQ_TWO=e.GLU_TESS_WINDING_NEGATIVE=e.GLU_TESS_WINDING_POSITIVE=e.GLU_TESS_WINDING_NONZERO=e.GLU_TESS_WINDING_ODD=e.GL_TRIANGLE_FAN=e.GL_TRIANGLE_STRIP=e.GL_TRIANGLES=e.GL_LINE_LOOP=void 0;var s=function(){function t(t,n){var e=[],r=!0,a=!1,i=void 0;try{for(var u,o=t[Symbol.iterator]();!(r=(u=o.next()).done)&&(e.push(u.value),!n||e.length!==n);r=!0);}catch(t){a=!0,i=t}finally{try{!r&&o.return&&o.return()}finally{if(a)throw i}}return e}return function(n,e){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return t(n,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=function(){function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}}();e.run=o;var l=t("libtess"),f=t("./polygon"),b=l.primitiveType.GL_LINE_LOOP,h=l.primitiveType.GL_TRIANGLES,_=l.primitiveType.GL_TRIANGLE_STRIP,d=l.primitiveType.GL_TRIANGLE_FAN;e.GL_LINE_LOOP=b,e.GL_TRIANGLES=h,e.GL_TRIANGLE_STRIP=_,e.GL_TRIANGLE_FAN=d;var v=l.windingRule.GLU_TESS_WINDING_ODD,E=l.windingRule.GLU_TESS_WINDING_NONZERO,g=l.windingRule.GLU_TESS_WINDING_POSITIVE,y=l.windingRule.GLU_TESS_WINDING_NEGATIVE,p=l.windingRule.GLU_TESS_WINDING_ABS_GEQ_TWO;e.GLU_TESS_WINDING_ODD=v,e.GLU_TESS_WINDING_NONZERO=E,e.GLU_TESS_WINDING_POSITIVE=g,e.GLU_TESS_WINDING_NEGATIVE=y,e.GLU_TESS_WINDING_ABS_GEQ_TWO=p;var T=e.DEFAULT_OPTIONS={polygons:[],holes:[],windingRule:g,boundaryOnly:!1,normal:null,autoWinding:!0},N=e.Tesselator=function(t){function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2;r(this,n);var e=a(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return e._vsize=t,e._current=[],e._out=[],e._primitiveType=0,e.gluTessCallback(l.gluEnum.GLU_TESS_VERTEX_DATA,e._vertex),e.gluTessCallback(l.gluEnum.GLU_TESS_BEGIN,e._begin),e.gluTessCallback(l.gluEnum.GLU_TESS_END,e._end),e.gluTessCallback(l.gluEnum.GLU_TESS_ERROR,e._error),e.gluTessCallback(l.gluEnum.GLU_TESS_COMBINE,e._combine),e.gluTessCallback(l.gluEnum.GLU_TESS_EDGE_FLAG,e._edge),e}return i(n,t),c(n,[{key:"start",value:function(t,n){this._current=[],this._out=[],this.gluTessBeginPolygon();var e=!0,r=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(e=(i=u.next()).done);e=!0){var o=i.value;this.gluTessBeginContour();var s=!0,c=!1,l=void 0;try{for(var f,b=o[Symbol.iterator]();!(s=(f=b.next()).done);s=!0){var h=f.value;this.gluTessVertex(h,h)}}catch(t){c=!0,l=t}finally{try{!s&&b.return&&b.return()}finally{if(c)throw l}}this.gluTessEndContour()}}catch(t){r=!0,a=t}finally{try{!e&&u.return&&u.return()}finally{if(r)throw a}}var _=!0,d=!1,v=void 0;try{for(var E,g=n[Symbol.iterator]();!(_=(E=g.next()).done);_=!0){var y=E.value;this.gluTessBeginContour();var p=!0,T=!1,N=void 0;try{for(var G,S=y[Symbol.iterator]();!(p=(G=S.next()).done);p=!0){var I=G.value;this.gluTessVertex(I,I)}}catch(t){T=!0,N=t}finally{try{!p&&S.return&&S.return()}finally{if(T)throw N}}this.gluTessEndContour()}}catch(t){d=!0,v=t}finally{try{!_&&g.return&&g.return()}finally{if(d)throw v}}this.gluTessEndPolygon()}},{key:"run",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,n=Object.assign({},T,t),e=n.polygons,r=n.holes,a=n.autoWinding,i=n.boundaryOnly;if(!e||!e.length)throw new Error("need at least a single polygon");a&&(e=e.map(function(t){return(0,f.is_cw)(t)&&t.reverse(),t}),r=r.map(function(t){return(0,f.is_ccw)(t)&&t.reverse(),t}));var u=n.normal?n.normal:(0,f.normal)(e[0],!0),o=s(u,3),c=o[0],b=o[1],h=o[2];return this.gluTessNormal(c,b,h),this.gluTessProperty(l.gluEnum.GLU_TESS_BOUNDARY_ONLY,i),this.gluTessProperty(l.gluEnum.GLU_TESS_WINDING_RULE,n.windingRule),this.start(e,r),this._out}},{key:"_begin",value:function(t){this._primitiveType=t,this._current=[]}},{key:"_end_fan",value:function(){for(var t=this._current.shift(),n=this._current.shift();this._current.length;){var e=this._current.shift();this._out.push(t,n,e),n=e}}},{key:"_end_strip",value:function(){for(var t=this._current.shift(),n=this._current.shift();this._current.length;){var e=this._current.shift();this._out.push(t,n,e),t=n,n=e}}},{key:"_end",value:function(){switch(this._primitiveType){case d:this._end_fan();break;case _:this._end_strip();break;case h:case b:default:this._out.push(this._current)}}},{key:"_vertex",value:function(t){this._current.push(t)}},{key:"_edge",value:function(){}},{key:"_error",value:function(t){console.error("error number: "+t)}},{key:"_combine",value:function(t,n,e){for(var r=0;r<4;++r)if(!n[r]){n[r]=new Array(this._vsize);for(var a=0;a<this._vsize;++a)n[r][a]=0}for(var i=new Array(this._vsize),u=0;u<this._vsize;++u)i[u]=n[0][u]*e[0]+n[1][u]*e[1]+n[2][u]*e[2]+n[3][u]*e[3];return i}}]),n}(l.GluTesselator)},{"./polygon":3,libtess:1}],5:[function(t,n,e){"use strict";function r(t,n){return t=2===t.length?[t[0],t[1],0]:t,n=2===n.length?[n[0],n[1],0]:n,[t[1]*n[2]-t[2]*n[1],t[2]*n[0]-t[0]*n[2],t[0]*n[1]-t[1]*n[0]]}function a(t){return Math.sqrt(t.slice(0,3).reduce(function(t,n,e){return t+n*n},0))}function i(t,n){return t.reduce(function(t,e,r){return t+e*n[r]},0)}function u(t){var n=a(t);return t.slice(0,3).map(function(t){return t/n})}function o(t,n){return t.slice(0,3).map(function(t,e){return t+n[e]})}function s(t,n){return t.slice(0,3).map(function(t,e){return t-n[e]})}Object.defineProperty(e,"__esModule",{value:!0}),e.cross=r,e.length=a,e.dot=i,e.normalize=u,e.add=o,e.subtract=s;e.sub=s},{}]},{},[2]);