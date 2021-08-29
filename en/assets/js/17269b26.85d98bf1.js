"use strict";(self.webpackChunkrm_controls_docs=self.webpackChunkrm_controls_docs||[]).push([[557],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5610:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={},c="Install",u={unversionedId:"quick_start/code_configuration",id:"quick_start/code_configuration",isDocsHomePage:!1,title:"Install",description:"Software Dependency Configuration",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/quick_start/code_configuration.md",sourceDirName:"quick_start",slug:"/quick_start/code_configuration",permalink:"/en/quick_start/code_configuration",editUrl:"https://github.com/rm-controls/rm-controls.github.io/tree/master/current_docs/quick_start/code_configuration.md",tags:[],version:"current",lastUpdatedAt:1630139893,formattedLastUpdatedAt:"8/28/2021",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Software Architecture",permalink:"/en/overview/software_framework"},next:{title:"\u4ee3\u7801\u90e8\u7f72",permalink:"/en/quick_start/deploy"}},p=[{value:"Software Dependency Configuration",id:"software-dependency-configuration",children:[]},{value:"Pull and compile from Git",id:"pull-and-compile-from-git",children:[]}],s={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"install"},"Install"),(0,a.kt)("h2",{id:"software-dependency-configuration"},"Software Dependency Configuration"),(0,a.kt)("p",null,"ROS melody is installed by default. Refer to the ",(0,a.kt)("a",{parentName:"p",href:"http://wiki.ros.org/melodic/Installation"},"Installation  Guide")," to install ROS"),(0,a.kt)("p",null,"After installing ROS, install the required dependency packages"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo apt-get install ros-melodic-apriltag-ros              \\\n                     ros-melodic-behaviortree-cpp-v3       \\\n")),(0,a.kt)("h2",{id:"pull-and-compile-from-git"},"Pull and compile from Git"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Code of clone warehouse from GitHub"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/QiayuanLiao/RM-Software.git")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"[!Tip]"),(0,a.kt)("p",{parentName:"blockquote"},"The warehouse contains a catkin_ Workspace, which needs to be added in '. Bashrc'.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Initialization submodule"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"git submodule update --init --recursive ")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"[!Note]"),(0,a.kt)("p",{parentName:"blockquote"},"Camera driver and visual algorithm are managed in the form of submodule.")),(0,a.kt)("p",null,"Common problem\uff1a"),(0,a.kt)("p",null,"During initialization\uff0cIf there is a problem",(0,a.kt)("inlineCode",{parentName:"p"},"Unable to read remote warehouse. Please confirm that you have the correct access rights and that the warehouse exists"),"\uff0cPlease refer to ",(0,a.kt)("a",{parentName:"p",href:"https://blog.csdn.net/qq_36770641/article/details/88638573"},"the solution")," "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Compile"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"cd RM-Software/rm_ws/\ncatkin_make\n# Load environment variables\nsource devel/setup.bash\n")))))}d.isMDXComponent=!0}}]);