"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[7786],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(m,c(c({ref:t},l),{},{components:r})):n.createElement(m,c({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8241:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),c=["components"],i={slug:16,title:"16. Keep Rejected ADRs\n",authors:[],tags:["Accepted"]},u=void 0,s={permalink:"/head-protocol/ja/adr/16",source:"@site/adr/2022-03-23_016-keep-rejected-adr.md",title:"16. Keep Rejected ADRs\n",description:"Status",date:"2022-03-23T00:00:00.000Z",formattedDate:"2022\u5e743\u670823\u65e5",tags:[{label:"Accepted",permalink:"/head-protocol/ja/adr/tags/accepted"}],readingTime:.72,truncated:!1,authors:[],frontMatter:{slug:"16",title:"16. Keep Rejected ADRs\n",authors:[],tags:["Accepted"]},prevItem:{title:"15. Configuration Through an Admin API\n",permalink:"/head-protocol/ja/adr/15"},nextItem:{title:"17. Use UDP protocol for Hydra networking\n",permalink:"/head-protocol/ja/adr/17"}},l={authorsImageUrls:[]},p=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2}],d={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"status"},"Status"),(0,a.kt)("p",null,"Accepted"),(0,a.kt)("h2",{id:"context"},"Context"),(0,a.kt)("p",null,"We have started using ",(0,a.kt)("em",{parentName:"p"},"Architecture Decision Records")," as our primary way to document the most important design decisions we take while developing Hydra Node, and this has proved effective in fostering fruitful discussions about major architecture changes."),(0,a.kt)("p",null,"During the course of this project, we have sometimes had debates on various topics leading to rejection of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra-poc/pull/230"},"some ADRs"),". It could be the case that  a previously rejected proposal turns out to be interesting, either because the context and situation have changed enough to reevaluate a proposal, or as background for some new proposal."),(0,a.kt)("h2",{id:"decision"},"Decision"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"therefore")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We will keep rejected ",(0,a.kt)("em",{parentName:"li"},"Architecture Decision Records")," alongside accepted and draft ones, in the same location and format"),(0,a.kt)("li",{parentName:"ul"},"Rejected ADRs ",(0,a.kt)("em",{parentName:"li"},"must")," have tag ",(0,a.kt)("inlineCode",{parentName:"li"},"[Rejected]")," set")),(0,a.kt)("h2",{id:"consequences"},"Consequences"),(0,a.kt)("p",null,"Once attributed a ",(0,a.kt)("em",{parentName:"p"},"serial number"),' an ADR keeps it "forever", whether it\'s rejected or accepted'))}f.isMDXComponent=!0}}]);