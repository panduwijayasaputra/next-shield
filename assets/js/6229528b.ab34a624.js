"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[461],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7603:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={sidebar_position:2},s="RBAC",u={unversionedId:"tutorial-extras/RBAC",id:"tutorial-extras/RBAC",isDocsHomePage:!1,title:"RBAC",description:"You can add RBAC in NextShield by adding 2 properties:",source:"@site/docs/tutorial-extras/RBAC.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/RBAC",permalink:"/next-shield/docs/tutorial-extras/RBAC",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"TypeScript",permalink:"/next-shield/docs/tutorial-extras/typescript"},next:{title:"isAuth",permalink:"/next-shield/docs/props/isAuth"}},c=[{value:"Example",id:"example",children:[]}],p={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rbac"},"RBAC"),(0,i.kt)("p",null,"You can add RBAC in ",(0,i.kt)("strong",{parentName:"p"},"NextShield")," by adding 2 properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"RBAC: Object literal where you define the existing roles and the routes, ",(0,i.kt)("strong",{parentName:"li"},"you must add the ",(0,i.kt)("inlineCode",{parentName:"strong"},"accessRoute")," on each role"),"."),(0,i.kt)("li",{parentName:"ul"},"userRole: String prop, ",(0,i.kt)("strong",{parentName:"li"},"must match with the defined roles in RBAC"),".")),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/Shield.tsx"',title:'"components/Shield.tsx"'},"import { useRouter } from 'next/router'\nimport { NextShield, NextShieldProps } from 'next-shield'\n\nexport function Shield({ children }: Props) {\n  const router = useRouter()\n\n  const shieldConfig: NextShieldProps<\n    ['/private', '/control-panel', '/dashboard'],\n    ['/', '/login']\n  > = {\n    router,\n    isAuth: true,\n    isLoading: false,\n    LoadingComponent: <p>Loading...</p>,\n    privateRoutes: ['/private', '/control-panel', '/dashboard'],\n    publicRoutes: ['/', '/login'],\n    loginRoute: '/login',\n    RBAC: {\n      ADMIN: {\n        grantedRoutes: ['/dashboard', '/control-panel'],\n        accessRoute: '/dashboard',\n      },\n      EMPLOYEE: {\n        grantedRoutes: ['/private', '/dashboard'],\n        accessRoute: '/private',\n      },\n    },\n    userRole: 'ADMIN' | 'EMPLOYEE',\n  }\n\n  return <NextShield {...shieldConfig}>{children}</NextShield>\n}\n")))}d.isMDXComponent=!0}}]);