"use strict";(self.webpackChunkrm_controls_tutorial=self.webpackChunkrm_controls_tutorial||[]).push([[731],{3905:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var l=n.createContext({}),p=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},s=function(t){var e=p(t.components);return n.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,i=t.originalType,l=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),m=p(r),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(f,a(a({ref:e},s),{},{components:r})):n.createElement(f,a({ref:e},s))}));function d(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:o,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9934:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],c={id:"intro",sidebar_position:1},l="Why rm-controls\uff1f",p={unversionedId:"overview/intro",id:"overview/intro",isDocsHomePage:!1,title:"Why rm-controls\uff1f",description:"rm-controls \u662f\u4e00\u5957\u5728 PC \u4e0a\u8fd0\u884c\u7684\u65e0\u4e0b\u4f4d\u673a\u7535\u63a7\u8f6f\u4ef6\uff0c\u57fa\u4e8e ros-controls \u7684\u786c\u4ef6\u548c\u4eff\u771f\u63a5\u53e3\u4ee5\u53ca\u914d\u5957\u7684\u63a7\u5236\u5668\uff0c\u7528\u4e8e\u5f00\u53d1 RoboMaster \u673a\u5668\u4eba\u548c\u9ad8\u6027\u80fd\u673a\u5668\u4eba\u3002",source:"@site/current_docs/overview/why_rm-controls.md",sourceDirName:"overview",slug:"/overview/intro",permalink:"/test-docs/en/docs/overview/intro",editUrl:"https://github.com/rm-controls/rm-controls-tutorial/current_docs/overview/why_rm-controls.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"intro",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Prerequisite",permalink:"/test-docs/en/docs/overview/prerequisite"}},s=[{value:"\u6781\u9ad8\u7684\u4ee3\u7801\u590d\u7528\u7387",id:"\u6781\u9ad8\u7684\u4ee3\u7801\u590d\u7528\u7387",children:[]},{value:"\u591a\u521a\u4f53\u52a8\u529b\u5b66\u4eff\u771f",id:"\u591a\u521a\u4f53\u52a8\u529b\u5b66\u4eff\u771f",children:[]},{value:"\u6301\u7eed\u96c6\u6210",id:"\u6301\u7eed\u96c6\u6210",children:[]},{value:"\u826f\u597d\u7684\u517c\u5bb9\u6027",id:"\u826f\u597d\u7684\u517c\u5bb9\u6027",children:[]},{value:"\u4e30\u5bcc\u7684\u8c03\u8bd5\u5de5\u5177",id:"\u4e30\u5bcc\u7684\u8c03\u8bd5\u5de5\u5177",children:[]}],u={toc:s};function m(t){var e=t.components,c=(0,o.Z)(t,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,c,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"why-rm-controls"},"Why rm-controls\uff1f"),(0,i.kt)("p",null,"rm-controls \u662f\u4e00\u5957\u5728 PC \u4e0a\u8fd0\u884c\u7684\u65e0\u4e0b\u4f4d\u673a\u7535\u63a7\u8f6f\u4ef6\uff0c\u57fa\u4e8e ",(0,i.kt)("a",{parentName:"p",href:"http://wiki.ros.org/ros_control"},"ros-controls")," \u7684\u786c\u4ef6\u548c\u4eff\u771f\u63a5\u53e3\u4ee5\u53ca\u914d\u5957\u7684\u63a7\u5236\u5668\uff0c\u7528\u4e8e\u5f00\u53d1 RoboMaster \u673a\u5668\u4eba\u548c\u9ad8\u6027\u80fd\u673a\u5668\u4eba\u3002"),(0,i.kt)("h2",{id:"\u6781\u9ad8\u7684\u4ee3\u7801\u590d\u7528\u7387"},"\u6781\u9ad8\u7684\u4ee3\u7801\u590d\u7528\u7387"),(0,i.kt)("p",null,"\u6211\u4eec\u5728\u8bbe\u8ba1\u4ee3\u7801\u67b6\u6784\u65f6\uff0c\u6781\u5176\u6ce8\u91cd\u4ee3\u7801\u590d\u7528\u6027\uff0c\u5c06\u4ee3\u7801\u6a21\u5757\u5316\u5e76\u53c2\u6570\u5316\uff0c\u5bf9\u4e8e\u4e0d\u540c\u673a\u5668\u4eba\u53ea\u9700\u8981\u6839\u636e\u914d\u7f6e\u6587\u4ef6\u52a0\u8f7d\u4e0d\u540c\u6570\u91cf\u548c\u79cd\u7c7b\u7684\u63a7\u5236\u5668\u3002\u505a\u5230\u4e86",(0,i.kt)("strong",{parentName:"p"},"\u4e00\u5957"),"\u4ee3\u7801\u7ed9",(0,i.kt)("strong",{parentName:"p"},"\u6240\u6709"),"\u673a\u5668\u4eba\u540c\u65f6\u4f7f\u7528\uff0c\u5982\uff1a\u5728\u5f00\u53d1\u597d\u6b65\u5175\u7684\u57fa\u7840\u6a21\u5757\u540e\uff0c\u5f00\u53d1\u53cc\u4e91\u53f0\u54e8\u5175\u65f6\uff0c\u53ea\u9700\u8981\u7f16\u5199\u914d\u7f6e",(0,i.kt)("inlineCode",{parentName:"p"},".yaml"),"\u6587\u4ef6 \uff0c\u9664\u4e86\u51b3\u7b56\u5c42\u7684\u5f00\u53d1\uff0c\u4e0d\u9700\u8981\u4e66\u5199\u6216\u4fee\u6539\u4efb\u4f55\u4e00\u884c\u4ee3\u7801\u3002\u4e0b\u56fe\u5c55\u793a\u90e8\u7f72\u4f7f\u7528\u4e86\u8fd9\u5957\u4ee3\u7801\u7684\u673a\u5668\u4eba\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u90e8\u7f72\u4f7f\u7528\u4e86\u8fd9\u5957\u4ee3\u7801\u7684\u673a\u5668\u4eba",src:r(6090).Z})),(0,i.kt)("p",null,"\u4e0b\u9762\u4ee3\u7801\u4e3a\u54e8\u5175\u7684\u4e91\u53f0\u63a7\u5236\u5668\u90e8\u5206\u914d\u7f6e\u6587\u4ef6\uff0c\u53ef\u4ee5\u770b\u5230\u4e0a\u4e0b\u4e24\u4e2a\u4e91\u53f0\u7684\u914d\u7f6e\u6587\u4ef6\u7ed3\u6784\u76f8\u540c\uff0c\u4e24\u4e2a\u4e91\u53f0\u63a7\u5236\u5668\u88ab\u72ec\u7acb\u5730\u52a8\u6001\u5730\u52a0\u8f7d\uff0c\u7136\u540e\u5206\u522b\u83b7\u53d6\u4e24\u4e2a\u63a7\u5236\u5668\u7684\u53c2\u6570\uff0c\u5305\u62ec\u5b83\u8981\u63a7\u5236\u7684\u5173\u8282\u540d\u79f0\uff0c\u8fd8\u6709\u5bf9\u5916\u63a5\u53e3(\u4ee5ros topic\u7b49\u5f62\u5f0f)\u7684\u540d\u79f0\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'upper_gimbal_controller:\n    type: rm_gimbal_controllers/Controller\n    detection_topic: "/upper_detection"\n    camera_topic: "/upper_camera/camera_info"\n    yaw:\n      joint: "upper_yaw_joint"\n      pid: { p: 5.0, i: 0, d: 0.3, i_clamp_max: 0.0, i_clamp_min: -0.0, antiwindup: true}\n    pitch:\n      joint: "upper_pitch_joint"\n      pid: { p: 8.0, i: 50, d: 0.3, i_clamp_max: 0.1, i_clamp_min: -0.1, antiwindup: true}\nlower_gimbal_controller:\n    type: rm_gimbal_controllers/Controller\n    detection_topic: "/lower_detection"\n    camera_topic: "/lower_camera/camera_info"\n    yaw:\n      joint: "lower_yaw_joint"\n      pid: { p: 5.0, i: 0, d: 0.3, i_clamp_max: 0.0, i_clamp_min: -0.0, antiwindup: true}\n    pitch:\n      joint: "lower_pitch_joint"\n      pid: { p: 5.0, i: 100, d: 0.2, i_clamp_max: 0.4, i_clamp_min: -0.4, antiwindup: true}\n')),(0,i.kt)("h2",{id:"\u591a\u521a\u4f53\u52a8\u529b\u5b66\u4eff\u771f"},"\u591a\u521a\u4f53\u52a8\u529b\u5b66\u4eff\u771f"),(0,i.kt)("p",null,"\u6240\u6709\u673a\u5668\u4eba\u90fd\u80fd\u5728 Gazebo \u8fdb\u884c\u591a\u521a\u4f53\u52a8\u529b\u5b66\u4eff\u771f\uff0c\u4e14\u4eff\u771f\u548c\u5b9e\u8f66\u8fd0\u884c\u7684\u4ee3\u7801\u4e0d\u9700\u8981\u76f8\u4e92\u79fb\u690d\uff0c\u662f\u540c\u4e00\u4efd\u4ee3\u7801\u751a\u81f3\u540c\u4e00\u4e2a\u4e8c\u8fdb\u5236\u6587\u4ef6\u3002\u9664\u4e86\u53d1\u5c04\u63a7\u5236\u5668\uff0c\u5176\u4ed6\u6a21\u5757\u548c\u63a7\u5236\u5668\u5728\u5f00\u53d1\u65f6\u5747\u4f1a\u5728\u4eff\u771f\u4e2d\u8c03\u8bd5\u548c\u6d4b\u8bd5\uff0c\u6253\u65ad\u70b9\u65f6\u53ef\u4ee5\u505a\u5230\u65f6\u95f4\u6682\u505c\uff0c\u5728\u673a\u68b0\u7ec4\u8fd8\u6ca1\u6709\u52a0\u5de5\u88c5\u914d\u597d\u8f66\u65f6\u5df2\u7ecf\u53ef\u4ee5\u628a\u4ee3\u7801\u6d4b\u8bd5\u597d\uff0c\u5b8c\u6210\u53c2\u6570\u7684\u7c97\u8c03\uff0c\u5927\u5927\u63d0\u9ad8\u5f00\u53d1\u548c\u8fed\u4ee3\u6548\u7387\u3002\u5982\uff1a\u8235\u8f6e\u673a\u5668\u4eba\u5728\u52a0\u5de5\u88c5\u914d\u597d\u540e\u53ea\u82b1\u4e0d\u5230\u4e00\u5929\u65f6\u95f4\u5c31\u6d4b\u8bd5\u8c03\u8bd5\u5b8c\u6240\u6709\u7a0b\u5e8f\u3002\u4e0b\u56fe\u4e3a\u8235\u8f6e\u673a\u5668\u4eba\u5728 RMUC \u573a\u5730\u4e2d\u7684\u4eff\u771f\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u8235\u8f6e\u673a\u5668\u4eba\u4eff\u771f",src:r(8991).Z})),(0,i.kt)("h2",{id:"\u6301\u7eed\u96c6\u6210"},"\u6301\u7eed\u96c6\u6210"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"CI\u76d1\u89c6\u5668",src:r(2680).Z}),"\n\u6211\u4eec\u5728\u81ea\u5efa gitlab \u670d\u52a1\u5668\u4e0a\u4f7f\u7528\u4e86 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ros-industrial/industrial_ci"},"industrial_ci")," \u5bf9\u4ee3\u7801\u8fdb\u884c\u6301\u7eed\u96c6\u6210\uff0c\u81ea\u52a8\u5bf9\u4ee3\u7801\u8fdb\u884c\u7f16\u8bd1\u3001\u6d4b\u8bd5\u5e76\u53d1\u5e03\u5230 apt \u6e90\u4e0a\uff0c\u5f53\u5728\u67d0\u53f0\u673a\u5668\u4eba\u4e0a\u5f00\u53d1\u7a33\u5b9a\u4e4b\u540e\uff0c\u5176\u4ed6\u673a\u5668\u4eba\u53ef\u4ee5\u4f7f\u7528\u5b89\u88c5\u6216\u5347\u7ea7\u7684\u65b9\u5f0f\u83b7\u5f97\u6700\u65b0\u529f\u80fd\u7684\u8f6f\u4ef6\u3002\u5982\uff1a\u4f7f\u7528\u4e24\u884c\u6307\u4ee4\u5b8c\u6210\u5e95\u76d8\u63a7\u5236\u5668\u7684\u5b89\u88c5\u6216\u66f4\u65b0\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt update\nsudo apt install ros-noetic-rm-chassis-controllers\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"[!Note]"),(0,i.kt)("p",{parentName:"blockquote"},"\u7531\u4e8e\u5728 GitHub\u4e0a \u5f00\u6e90\uff0c\u6211\u4eec\u5df2\u7ecf\u5c06\u5927\u90e8\u5206\u4ed3\u5e93\u8f6c\u79fb\u81f3 GitHub \u6258\u7ba1\u5e76\u4f7f\u7528 GitHub Actions \u8fd0\u884c CI\u3002")),(0,i.kt)("h2",{id:"\u826f\u597d\u7684\u517c\u5bb9\u6027"},"\u826f\u597d\u7684\u517c\u5bb9\u6027"),(0,i.kt)("p",null,"\u786c\u4ef6\u63a5\u53e3\u4f7f\u7528\u4e86 Linux \u7684 ",(0,i.kt)("a",{parentName:"p",href:"https://www.kernel.org/doc/Documentation/networking/can.txt"},"SocketCAN")," \u548c sysfs\uff0c\u610f\u5473\u7740\u53ef\u4ee5\u5728 Jetson AGX \u548c\u5999\u7b97\u7b49\u5e26\u6709CAN\u603b\u7ebf\u7684 ARM \u8bbe\u5907\u4e0a\u8fd0\u884c\uff0c\u540c\u65f6\u6211\u4eec\u8fd8\u5236\u4f5c\u4e86usb\u8f6cCAN\u8bbe\u5907: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rm-controls/rm_usb2can"},"rm_usb2can"),"\uff0c\u4ece\u800c\u652f\u6301\u5728\u4efb\u610f x86 \u5e73\u53f0\u4e0a\u9762\u8fd0\u884c\uff0c\u5982\uff1aIntel NUC\u548c\u961f\u5458\u7684\u7b14\u8bb0\u672c\u7535\u8111\uff0c\u5728RMUC\u4e2d\u6211\u4eec\u4ee5Intel NUC\u4e3a\u4e3b\uff0c\u4e5f\u88ab\u5b98\u65b9\u57282021\u5e74\u9ad8\u4e2d\u751f\u6691\u671f\u8425\u4e2d\u90e8\u7f72\u5728\u5999\u7b972\u4e0a\u4f7f\u7528\u3002\u4e0b\u56fe\u5c55\u793a\u4e86\u517c\u5bb9\u7684\u90e8\u5206\u8ba1\u7b97\u8bbe\u5907\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u517c\u5bb9\u7684\u90e8\u5206\u8ba1\u7b97\u8bbe\u5907",src:r(3941).Z})),(0,i.kt)("h2",{id:"\u4e30\u5bcc\u7684\u8c03\u8bd5\u5de5\u5177"},"\u4e30\u5bcc\u7684\u8c03\u8bd5\u5de5\u5177"),(0,i.kt)("p",null,"\u4f9d\u6258 ROS \u751f\u6001\uff0c\u53ef\u4ee5\u4f7f\u7528\u591a\u79cd\u53ef\u89c6\u5316\u8c03\u8bd5\u5de5\u5177\uff0c\u5bf9\u7535\u673a\u6570\u636e\uff0c\u8ba1\u7b97\u7ed3\u679c\u548c\u56fe\u50cf\u8fdc\u7a0b\u67e5\u770b\u3002\u8fd8\u53ef\u4ee5\u4f7f\u7528 dynamic_recon\ufb01gure \u8fdb\u884c\u52a8\u6001\u8c03\u53c2\u3002\u5c55\u793a\u4e86\u6211\u4eec\u642d\u5efa\u7684\u8c03\u8bd5\u754c\u9762\uff0c\u7531 rqt \u7684\u652f\u6301\uff0c\u6211\u4eec\u4e0d\u9700\u8981\u7f16\u5199\u4ee3\u7801\u5c31\u53ef\u4ee5\u6784\u5efa\u81ea\u5df1\u7684\u8c03\u8bd5\u56fe\u5f62\u754c\u9762\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"rqt_home",src:r(8331).Z})))}m.isMDXComponent=!0},2680:function(t,e,r){e.Z=r.p+"assets/images/ci_monitor-2b4d846c6da90d8e08de6ecb51f6f9b3.png"},6090:function(t,e,r){e.Z=r.p+"assets/images/deployed_robots-80b6d1a244226524149437c87e1e6f13.png"},8991:function(t,e,r){e.Z=r.p+"assets/images/gazebo-4220eb5bc8d069a9cc72dbce752b9928.jpg"},3941:function(t,e,r){e.Z=r.p+"assets/images/minipc-9d488284ff6d169c2a1990a3784374cf.png"},8331:function(t,e,r){e.Z=r.p+"assets/images/rqt_home-df5eed59a502709273a2dd669583491f.png"}}]);