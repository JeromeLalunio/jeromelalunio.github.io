(function(e){function t(t){for(var n,o,i=t[0],s=t[1],l=t[2],d=0,b=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&b.push(c[o][0]),c[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);u&&u(t);while(b.length)b.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,i=1;i<a.length;i++){var s=a[i];0!==c[s]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},c={app:0},r=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/printer-monitor-demo/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=s;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"03e6":function(e,t,a){},"16b7":function(e,t,a){e.exports=a.p+"img/home-image.7c218a89.png"},"19f0":function(e,t,a){},"1d12":function(e,t,a){},"22eb":function(e,t,a){"use strict";a("19f0")},2806:function(e,t,a){"use strict";a("5623")},4515:function(e,t,a){},"46e4":function(e,t,a){"use strict";a("b81a")},"4aef":function(e,t,a){},5623:function(e,t,a){},"74f3":function(e,t,a){},"8da3":function(e,t,a){},"9b7a":function(e,t,a){"use strict";a("f003")},"9db6":function(e,t,a){e.exports=a.p+"img/printer.1ae8a927.jpg"},"9f5c":function(e,t,a){"use strict";a("4aef")},afe4:function(e,t,a){"use strict";a("4515")},b81a:function(e,t,a){},beb7:function(e,t,a){"use strict";a("8da3")},c362:function(e,t,a){"use strict";a("1d12")},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23");function c(e,t,a,c,r,o){var i=Object(n["y"])("navbar-container"),s=Object(n["y"])("router-view");return Object(n["r"])(),Object(n["e"])(n["a"],null,[Object(n["h"])(i),Object(n["f"])("main",null,[Object(n["h"])(s)])],64)}var r=a("eab1"),o=a.n(r);Object(n["u"])("data-v-27c52043");var i={id:"navbar-container"},s={class:"desktop-nav"},l=Object(n["f"])("img",{src:o.a,alt:"navbar"},null,-1),u=[l],d={ref:"mobileNav",class:"mobile-nav"},b=Object(n["f"])("img",{src:o.a,alt:"navbar"},null,-1),p=[b];function f(e,t,a,c,r,o){var l=Object(n["y"])("nav-items");return Object(n["r"])(),Object(n["e"])("div",i,[Object(n["f"])("div",s,[Object(n["h"])(l)]),Object(n["f"])("div",{onClick:t[0]||(t[0]=function(){return e.toggleNavbar&&e.toggleNavbar.apply(e,arguments)}),class:"hamburger-button"},u),Object(n["f"])("div",d,[Object(n["f"])("div",{onClick:t[1]||(t[1]=function(){return e.toggleNavbar&&e.toggleNavbar.apply(e,arguments)}),class:"hamburger-button"},p),Object(n["h"])(l)],512)])}Object(n["s"])();a("b0c0");Object(n["u"])("data-v-21550a50");var v={id:"nav-items"};function m(e,t,a,c,r,o){var i=Object(n["y"])("nav-item");return Object(n["r"])(),Object(n["e"])("div",v,[(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["x"])(e.navItems,(function(e){return Object(n["r"])(),Object(n["d"])(i,{routeName:e.routeName,iconName:e.iconName,name:e.name,key:e.name,class:"nav-item"},null,8,["routeName","iconName","name"])})),128))])}function j(e,t,a,c,r,o){var i=Object(n["y"])("router-link");return Object(n["r"])(),Object(n["d"])(i,{to:e.routeName,class:"nav-item"},{default:Object(n["D"])((function(){return[Object(n["g"])(Object(n["A"])(e.name),1)]})),_:1},8,["to"])}Object(n["s"])();var O=Object(n["i"])({props:{routeName:String,iconName:String,name:String}});O.render=j;var h=O,g=Object(n["i"])({components:{navItem:h},setup:function(){var e=Object(n["w"])([{routeName:"/",name:"Home"},{routeName:"/details",name:"Printer Details"},{routeName:"/state",name:"Printer State"},{routeName:"/status",name:"Job Status"},{routeName:"/timelapses",name:"Timelapses"}]);return Object(n["p"])((function(){console.log("mounted navbar")})),{navItems:e}}});a("46e4");g.render=m,g.__scopeId="data-v-21550a50";var y=g,w=Object(n["i"])({components:{navItems:y},name:"navbar-container",setup:function(){var e=Object(n["w"])();function t(){"100vw"==e.value.style.maxWidth?e.value.style.maxWidth="0px":e.value.style.maxWidth="100vw"}return Object(n["p"])((function(){console.log("hello world")})),{toggleNavbar:t,mobileNav:e}}});a("c362");w.render=f,w.__scopeId="data-v-27c52043";var _=w,x=Object(n["i"])({components:{NavbarContainer:_},setup:function(){Object(n["p"])((function(){console.log("mounted app")}))}});a("afe4");x.render=c;var A=x,k=a("9483");Object(k["a"])("".concat("/printer-monitor-demo/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var N=a("6c02"),P=a("9db6"),S=a.n(P);Object(n["u"])("data-v-388166c1");var I={id:"details-view"},T=Object(n["f"])("div",{class:"printer-container"},[Object(n["f"])("img",{src:S.a,alt:"printer",class:"printer"}),Object(n["f"])("div",{class:"resume button"},"resume"),Object(n["f"])("div",{class:"pause button"},"pause"),Object(n["f"])("div",{class:"stop button"},"stop")],-1);function L(e,t,a,c,r,o){var i=Object(n["y"])("details-lister");return Object(n["r"])(),Object(n["e"])("div",I,[T,Object(n["h"])(i,{"details-list":e.connectionDetails},null,8,["details-list"])])}Object(n["s"])();var D=a("53ca");a("d3b7"),a("25f0");Object(n["u"])("data-v-ed700aa0");var F=["id"],M={key:0},z={key:1},C={key:0},B={key:0},J={key:1},W={key:2},E={key:1};function G(e,t,a,c,r,o){var i=Object(n["y"])("details-lister",!0);return Object(n["r"])(),Object(n["e"])("div",null,[(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["x"])(e.detailsList,(function(t,a){return Object(n["r"])(),Object(n["e"])("div",{id:e.nested?"details-lister-nested":"details-lister",key:a},["string"===typeof t||"number"===typeof t?(Object(n["r"])(),Object(n["e"])("div",M,[Object(n["f"])("strong",null,Object(n["A"])(a)+": ",1),Object(n["f"])("span",null,Object(n["A"])(t),1)])):(Object(n["r"])(),Object(n["e"])("div",z,[Object(n["f"])("h3",null,Object(n["A"])(a),1),(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["x"])(t,(function(e,t){return Object(n["r"])(),Object(n["e"])("div",{key:t},[Object(n["f"])("div",null,[Object(n["f"])("strong",null,Object(n["A"])(t)+": ",1),Array.isArray(e)?(Object(n["r"])(),Object(n["e"])("span",C,[(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["x"])(e,(function(e){return Object(n["r"])(),Object(n["e"])("span",{key:e},["string"===typeof e||"number"===typeof e?(Object(n["r"])(),Object(n["e"])("span",B,Object(n["A"])(e.toString())+", ",1)):"object"===Object(D["a"])(e)?(Object(n["r"])(),Object(n["e"])("span",J,[Object(n["h"])(i,{"details-list":e,nested:"true"},null,8,["details-list"])])):(Object(n["r"])(),Object(n["e"])("span",W,"mali"))])})),128))])):(Object(n["r"])(),Object(n["e"])("span",E,Object(n["A"])(e),1))])])})),128))]))],8,F)})),128))])}Object(n["s"])();var H=Object(n["i"])({name:"detailsLister",props:{detailsList:Object,nested:Boolean}});a("beb7");H.render=G,H.__scopeId="data-v-ed700aa0";var R=H,q=Object(n["i"])({components:{DetailsLister:R},setup:function(){var e=Object(n["w"])({current:{state:"operational",port:"/dev/ttyacm0",baudrate:25e4,printerprofile:"_default"},options:{ports:["/dev/ttyacm0","virtual"],baudrates:[25e4,230400,115200,57600,38400,19200,9600],printerprofiles:[{name:"default",id:"_default"}],portpreference:"/dev/ttyacm0",baudratepreference:25e4,printerprofilepreference:"_default",autoconnect:!0}});return{connectionDetails:e}}});a("e72d");q.render=L,q.__scopeId="data-v-388166c1";var K=q,Q=a("16b7"),U=a.n(Q);Object(n["u"])("data-v-f4b85acc");var V={id:"home-view"},X=Object(n["f"])("h2",null,"3D Printer Monitoring System",-1),Y=Object(n["f"])("img",{src:U.a,alt:"3d printer image"},null,-1),Z=Object(n["f"])("h2",null,"Monitor your 3D Printer Remotely",-1),$=[X,Y,Z];function ee(e,t,a,c,r,o){return Object(n["r"])(),Object(n["e"])("div",V,$)}Object(n["s"])();var te=Object(n["i"])({name:"Home"});a("9f5c");te.render=ee,te.__scopeId="data-v-f4b85acc";var ae=te;Object(n["u"])("data-v-4f4987c4");var ne={id:"live-files"},ce=Object(n["f"])("h1",null,"This is the files page",-1),re=Object(n["f"])("h3",null,"all files",-1),oe=Object(n["f"])("p",null," https://docs.octoprint.org/en/master/api/files.html#retrieve-all-files ",-1);function ie(e,t,a,c,r,o){return Object(n["r"])(),Object(n["e"])("div",ne,[ce,re,oe,Object(n["g"])(" "+Object(n["A"])(e.allFiles),1)])}Object(n["s"])();var se=Object(n["i"])({setup:function(){var e=Object(n["w"])({files:[{name:"whistle_v2.gcode",path:"whistle_v2.gcode",type:"machinecode",typePath:["machinecode","gcode"],hash:"...",size:1468987,date:1378847754,origin:"local",refs:{resource:"http://example.com/api/files/local/whistle_v2.gcode",download:"http://example.com/downloads/files/local/whistle_v2.gcode"},gcodeAnalysis:{estimatedPrintTime:1188,filament:{length:810,volume:5.36}},print:{failure:4,success:23,last:{date:1387144346,success:!0}}},{name:"whistle_.gco",path:"whistle_.gco",type:"machinecode",typePath:["machinecode","gcode"],origin:"sdcard",refs:{resource:"http://example.com/api/files/sdcard/whistle_.gco"}},{name:"folderA",path:"folderA",type:"folder",typePath:["folder"],children:[{name:"whistle_v2_copy.gcode",path:"whistle_v2_copy.gcode",type:"machinecode",typePath:["machinecode","gcode"],hash:"...",size:1468987,date:1378847754,origin:"local",refs:{resource:"http://example.com/api/files/local/folderA/whistle_v2_copy.gcode",download:"http://example.com/downloads/files/local/folderA/whistle_v2_copy.gcode"},gcodeAnalysis:{estimatedPrintTime:1188,filament:{length:810,volume:5.36}},print:{failure:4,success:23,last:{date:1387144346,success:!0}}}]}],free:"3.2GB"});return{allFiles:e}}});a("9b7a");se.render=ie,se.__scopeId="data-v-4f4987c4";var le=se;Object(n["u"])("data-v-1cd81133");var ue={id:"status-view"};function de(e,t,a,c,r,o){var i=Object(n["y"])("details-lister");return Object(n["r"])(),Object(n["e"])("div",ue,[Object(n["h"])(i,{"details-list":e.state},null,8,["details-list"])])}Object(n["s"])();var be=Object(n["i"])({components:{detailsLister:R},setup:function(){var e=Object(n["w"])({temperature:{tool0:{actual:214.8821,target:220,offset:0},tool1:{actual:25.3,target:null,offset:0},bed:{actual:50.221,target:70,offset:5},history:[{time:1395651928,tool0:{actual:214.8821,target:220},tool1:{actual:25.3,target:null},bed:{actual:50.221,target:70}},{time:1395651926,tool0:{actual:212.32,target:220},tool1:{actual:25.1,target:null},bed:{actual:49.1123,target:70}}]},sd:{ready:!0},state:{text:"Operational",flags:{operational:!0,paused:!1,printing:!1,cancelling:!1,pausing:!1,sdReady:!0,error:!1,ready:!0,closedOrError:!1}}});return{state:e}}});a("deaa");be.render=de,be.__scopeId="data-v-1cd81133";var pe=be;Object(n["u"])("data-v-165f3789");var fe={id:"status-view"};function ve(e,t,a,c,r,o){var i=Object(n["y"])("details-lister");return Object(n["r"])(),Object(n["e"])("div",fe,[Object(n["h"])(i,{"details-list":e.jobStatus},null,8,["details-list"])])}Object(n["s"])();var me=Object(n["i"])({components:{detailsLister:R},setup:function(){var e=Object(n["w"])({job:{file:{name:"whistle_v2.gcode",origin:"local",size:1468987,date:1378847754},estimatedPrintTime:8811,filament:{tool0:{length:810,volume:5.36}}},progress:{completion:.2298468264184775,filepos:337942,printTime:276,printTimeLeft:912},state:"Printing"});return{jobStatus:e}}});a("2806");me.render=ve,me.__scopeId="data-v-165f3789";var je=me;Object(n["u"])("data-v-69858e96");var Oe={id:"timelapses-view"};function he(e,t,a,c,r,o){var i=Object(n["y"])("details-lister");return Object(n["r"])(),Object(n["e"])("div",Oe,[Object(n["h"])(i,{"details-list":e.allFiles},null,8,["details-list"])])}Object(n["s"])();var ge=Object(n["i"])({components:{detailsLister:R},setup:function(){var e=Object(n["w"])({files:[{name:"whistle_v2.gcode",path:"whistle_v2.gcode",type:"machinecode",typePath:["machinecode","gcode"],hash:"...",size:1468987,date:1378847754,origin:"local",refs:{resource:"http://example.com/api/files/local/whistle_v2.gcode",download:"http://example.com/downloads/files/local/whistle_v2.gcode"},gcodeAnalysis:{estimatedPrintTime:1188,filament:{length:810,volume:5.36}},print:{failure:4,success:23,last:{date:1387144346,success:!0}}},{name:"whistle_.gco",path:"whistle_.gco",type:"machinecode",typePath:["machinecode","gcode"],origin:"sdcard",refs:{resource:"http://example.com/api/files/sdcard/whistle_.gco"}},{name:"folderA",path:"folderA",type:"folder",typePath:["folder"],children:[{name:"whistle_v2_copy.gcode",path:"whistle_v2_copy.gcode",type:"machinecode",typePath:["machinecode","gcode"],hash:"...",size:1468987,date:1378847754,origin:"local",refs:{resource:"http://example.com/api/files/local/folderA/whistle_v2_copy.gcode",download:"http://example.com/downloads/files/local/folderA/whistle_v2_copy.gcode"},gcodeAnalysis:{estimatedPrintTime:1188,filament:{length:810,volume:5.36}},print:{failure:4,success:23,last:{date:1387144346,success:!0}}}]}],free:"3.2GB"});return{allFiles:e}}});a("22eb");ge.render=he,ge.__scopeId="data-v-69858e96";var ye=ge,we=[{path:"/details",component:K},{path:"/",component:ae},{path:"/files",component:le},{path:"/state",component:pe},{path:"/status",component:je},{path:"/timelapses",component:ye}],_e=Object(N["a"])({history:Object(N["b"])("/printer-monitor-demo/"),routes:we,linkActiveClass:"active-link"}),xe=_e;Object(n["c"])(A).use(xe).mount("#app")},deaa:function(e,t,a){"use strict";a("74f3")},e72d:function(e,t,a){"use strict";a("03e6")},eab1:function(e,t,a){e.exports=a.p+"img/hamburger.86595150.svg"},f003:function(e,t,a){}});
//# sourceMappingURL=app.e4336b83.js.map