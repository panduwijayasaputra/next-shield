"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[291],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=p(n),d=o,m=f["".concat(i,".").concat(d)]||f[d]||l[d]||a;return n?r.createElement(m,c(c({ref:t},u),{},{components:n})):r.createElement(m,c({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9087:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return u},default:function(){return f}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),c=["components"],s={sidebar_position:10},i="RBAC",p={unversionedId:"props/RBAC",id:"props/RBAC",isDocsHomePage:!1,title:"RBAC",description:"\ud83d\udd0f \ud83d\udd10 \ud83d\udd12 Role Based Access Control.",source:"@site/docs/props/RBAC.md",sourceDirName:"props",slug:"/props/RBAC",permalink:"/next-shield/docs/props/RBAC",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"accessRoute",permalink:"/next-shield/docs/props/accessRoute"},next:{title:"userRole",permalink:"/next-shield/docs/props/userRole"}},u=[],l={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rbac"},"RBAC"),(0,a.kt)("p",null,"\ud83d\udd0f \ud83d\udd10 \ud83d\udd12 Role Based Access Control."),(0,a.kt)("p",null,"You can define an object literal to specify which roles are supported and which routes the role have access."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"You must define the accessRoute on each Role.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"return (\n  <NextShield\n    ...\n    RBAC={{\n      ADMIN: {\n        grantedRoutes: ['/dashboard', '/control-panel'],\n        accessRoute: '/dashboard',\n      },\n      USER: {\n        grantedRoutes: ['/profile', '/dashboard'],\n        accessRoute: '/profile',\n      },\n    }}\n    ...\n  >\n    <Component {...pageProps} />\n  </NextShield>\n)\n")))}f.isMDXComponent=!0}}]);