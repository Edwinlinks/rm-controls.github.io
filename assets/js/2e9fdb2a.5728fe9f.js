"use strict";(self.webpackChunkrm_controls_tutorial=self.webpackChunkrm_controls_tutorial||[]).push([[753],{3905:function(e,r,n){n.d(r,{Zo:function(){return u},kt:function(){return m}});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),s=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},u=function(e){var r=s(e.components);return t.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,b=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?t.createElement(b,c(c({ref:r},u),{},{components:n})):t.createElement(b,c({ref:r},u))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6341:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var t=n(7462),a=n(3366),o=(n(7294),n(3905)),c=["components"],i={},l="rm_base\u6a21\u5757",s={unversionedId:"digging_deeper/sdk_docs/rm_base",id:"digging_deeper/sdk_docs/rm_base",isDocsHomePage:!1,title:"rm_base\u6a21\u5757",description:"\u6a21\u5757\u4ecb\u7ecd",source:"@site/current_docs/digging_deeper/sdk_docs/rm_base.md",sourceDirName:"digging_deeper/sdk_docs",slug:"/digging_deeper/sdk_docs/rm_base",permalink:"/test-docs/docs/digging_deeper/sdk_docs/rm_base",editUrl:"https://github.com/rm-controls/rm-controls-tutorial/current_docs/digging_deeper/sdk_docs/rm_base.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6574\u4f53\u67b6\u6784",permalink:"/test-docs/docs/digging_deeper/sdk_docs/architecture"},next:{title:"rm_bringup",permalink:"/test-docs/docs/digging_deeper/sdk_docs/rm_bringup"}},u=[{value:"\u6a21\u5757\u4ecb\u7ecd",id:"\u6a21\u5757\u4ecb\u7ecd",children:[]},{value:"\u4ee3\u7801\u539f\u7406",id:"\u4ee3\u7801\u539f\u7406",children:[]},{value:"\u7f16\u8bd1\u4e0e\u8fd0\u884c",id:"\u7f16\u8bd1\u4e0e\u8fd0\u884c",children:[{value:"\u7f16\u8bd1",id:"\u7f16\u8bd1",children:[]},{value:"\u8fd0\u884c",id:"\u8fd0\u884c",children:[]}]}],p={toc:u};function d(e){var r=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rm_base\u6a21\u5757"},"rm_base\u6a21\u5757"),(0,o.kt)("h2",{id:"\u6a21\u5757\u4ecb\u7ecd"},"\u6a21\u5757\u4ecb\u7ecd"),(0,o.kt)("p",null,"\u673a\u5668\u4eba\u9a71\u52a8\u6a21\u5757\u662f\u8fde\u63a5\u5404\u5e95\u5c42\u63d2\u4ef6\u4e0e\u7535\u673a\u7684\u6865\u6881\uff0c\u5b83\u7684\u4e3b\u8981\u529f\u80fd\u662f\u4eceros\u53c2\u6570\u670d\u52a1\u5668\u4e2d\u83b7\u5f97\u7535\u673a\u53c2\u6570\u4fe1\u606f\u548c\u63d2\u4ef6\u4fe1\u606f\uff0c\u5b8c\u6210\u53c2\u6570\u548c\u63d2\u4ef6\u7684\u52a0\u8f7d\uff0c\u7136\u540e\u4ee51000Hz\u7684\u9891\u7387\u63a5\u53d7\u3001\u5904\u7406can\u603b\u7ebf\u4e0a\u7684\u6570\u636e\uff0c\u518d\u901a\u8fc7can\u603b\u7ebf\u5b9e\u73b0\u5bf9\u7535\u673a\u7684\u63a7\u5236\u3002"),(0,o.kt)("p",null,"\u6a21\u5757\u6587\u4ef6\u76ee\u5f55\u5982\u4e0b\u6240\u793a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rm_base\n\u251c\u2500\u2500 CMakeLists.txt\n\u251c\u2500\u2500 include\n\u2502\xa0\xa0\u251c\u2500\u2500 dbus_node.h\n\u2502\xa0\xa0\u251c\u2500\u2500 referee_node.h\n\u2502\xa0 \u251c\u2500\u2500 rm_base.h\n\u2502\xa0 \u251c\u2500\u2500 base\n\u2502\xa0 \u2502 \u251c\u2500\u2500\u2500  blackboard.cpp\n\u2502\xa0 \u2502 \u251c\u2500\u2500\u2500  bus.cpp\n\u251c\u2500\u2500 src\n\u2502\xa0 \u251c\u2500\u2500 dbus_node.cpp\n\u2502\xa0 \u251c\u2500\u2500 referee_node.cpp\n\u2502\xa0 \u251c\u2500\u2500 rm_base.cpp\n\u2502\xa0 \u251c\u2500\u2500 rm_base_ndoe.cpp\n\u2502\xa0 \u251c\u2500\u2500 base\n\u2502\xa0 \u2502 \u251c\u2500\u2500\u2500  blackboard.cpp\n\u2502\xa0 \u2502 \u251c\u2500\u2500\u2500  bus.cpp\n\u2514\u2500\u2500 package.xml\n")),(0,o.kt)("h2",{id:"\u4ee3\u7801\u539f\u7406"},"\u4ee3\u7801\u539f\u7406"),(0,o.kt)("p",null,"\u5728\u8be5\u6a21\u5757\u7684\u6838\u5fc3\u8fd0\u884c\u8282\u70b9",(0,o.kt)("inlineCode",{parentName:"p"},"rm_base"),"\u4e2d\uff0c\u521b\u5efa\u6240\u9700\u6a21\u5757\u7684\u63d2\u4ef6\uff08\u5982\u5e95\u76d8\u3001\u4e91\u53f0\uff09\u5e76\u52a0\u8f7d\u53c2\u6570\u5230ros\u53c2\u6570\u670d\u52a1\u5668\u540e\uff0c\u5373\u53ef\u6b63\u5e38\u6267\u884c\u901a\u4fe1\u4efb\u52a1\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u521d\u59cb\u5316\uff1a\u4ece\u53c2\u6570\u670d\u52a1\u5668\u4e2d\u83b7\u53d6joint\u3001IMU\u3001GPIO\u548cplugins\u7684\u4fe1\u606f\uff0c\u5e76\u52a0\u8f7d\u5230blackboard\u91cc\u4fdd\u5b58\u3002")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6570\u636e\u63a5\u6536\uff1a\u4ececan\u603b\u7ebf\u4e0a\u83b7\u53d6\u6570\u636e\u5e76\u89e3\u7801\uff0c\u66f4\u65b0blackboard\u91cc\u9762\u7684\u5185\u5bb9\u3002")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6570\u636e\u53d1\u9001\uff1a\u4eceblackboard\u53d6\u51fa\u6570\u636e\u8fdb\u884c\u7f16\u7801\uff0c\u7136\u540e\u53d1\u9001\u5230can\u603b\u7ebf\u4e0a\u3002")),(0,o.kt)("h2",{id:"\u7f16\u8bd1\u4e0e\u8fd0\u884c"},"\u7f16\u8bd1\u4e0e\u8fd0\u884c"),(0,o.kt)("h3",{id:"\u7f16\u8bd1"},"\u7f16\u8bd1"),(0,o.kt)("p",null,"\u5728ROS\u7684\u5de5\u4f5c\u533a\u5185\u7f16\u8bd1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"catkin_make  rm_base rm_base \n")),(0,o.kt)("h3",{id:"\u8fd0\u884c"},"\u8fd0\u884c"),(0,o.kt)("p",null,"\u6267\u884croborts_base_node\u8282\u70b9"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"rosrun rm_base rm_base\n")))}d.isMDXComponent=!0}}]);