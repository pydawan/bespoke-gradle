//# sourceMappingURL=bespoke-theme-cube.js.map
!function(k){if("object"==typeof exports)module.exports=k();else if("function"==typeof define&&define.amd)define(k);else{var a;"undefined"!=typeof window?a=window:"undefined"!=typeof global?a=global:"undefined"!=typeof self&&(a=self);a=a.bespoke||(a.bespoke={});a=a.themes||(a.themes={});a.cube=k()}}(function(){return function a(c,g,f){function e(b,d){if(!g[b]){if(!c[b]){var h="function"==typeof require&&require;if(!d&&h)return h(b,!0);if(l)return l(b,!0);throw Error("Cannot find module '"+b+"'");
}h=g[b]={exports:{}};c[b][0].call(h.exports,function(a){var f=c[b][1][a];return e(f?f:a)},h,h.exports,a,c,g,f)}return g[b].exports}for(var l="function"==typeof require&&require,d=0;d<f.length;d++)e(f[d]);return e}({1:[function(a,c,g){var f=a("bespoke-classes"),e=a("insert-css");c.exports=function(){e("*{-moz-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0}@media print{*{-webkit-print-color-adjust:exact}}@page{size:landscape;margin:0}.bespoke-parent{-webkit-transition:background .6s ease;transition:background .6s ease;position:absolute;top:0;bottom:0;left:0;right:0;overflow:hidden;-webkit-perspective:600px;perspective:600px}@media print{.bespoke-parent{overflow:visible;position:static}}.bespoke-slide{-webkit-transition:-webkit-transform .6s ease,opacity .6s ease,background .6s ease;transition:transform .6s ease,opacity .6s ease,background .6s ease;-webkit-transform-origin:50% 50% 0;transform-origin:50% 50% 0;-webkit-backface-visibility:hidden;backface-visibility:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;text-align:center;width:640px;height:480px;position:absolute;top:50%;margin-top:-240px;left:50%;margin-left:-320px;background:#eaeaea;padding:40px;border-radius:0}@media print{.bespoke-slide{zoom:1!important;height:743px;width:100%;page-break-before:always;position:static;margin:0;-webkit-transition:none;transition:none}}.bespoke-before{-webkit-transform:translateX(100px)translateX(-320px)rotateY(-90deg)translateX(-320px);transform:translateX(100px)translateX(-320px)rotateY(-90deg)translateX(-320px)}@media print{.bespoke-before{-webkit-transform:none;transform:none}}.bespoke-after{-webkit-transform:translateX(-100px)translateX(320px)rotateY(90deg)translateX(320px);transform:translateX(-100px)translateX(320px)rotateY(90deg)translateX(320px)}@media print{.bespoke-after{-webkit-transform:none;transform:none}}.bespoke-inactive{opacity:0;pointer-events:none}@media print{.bespoke-inactive{opacity:1}}.bespoke-active{opacity:1}.bespoke-bullet{-webkit-transition:all .3s ease;transition:all .3s ease}@media print{.bespoke-bullet{-webkit-transition:none;transition:none}}.bespoke-bullet-inactive{opacity:0}li.bespoke-bullet-inactive{-webkit-transform:translateX(16px);transform:translateX(16px)}@media print{li.bespoke-bullet-inactive{-webkit-transform:none;transform:none}}@media print{.bespoke-bullet-inactive{opacity:1}}.bespoke-bullet-active{opacity:1}.bespoke-scale-parent{-webkit-perspective:600px;perspective:600px;position:absolute;top:0;left:0;right:0;bottom:0;pointer-events:none}.bespoke-scale-parent .bespoke-active{pointer-events:auto}@media print{.bespoke-scale-parent{-webkit-transform:none!important;transform:none!important}}.bespoke-progress-parent{position:absolute;top:0;left:0;right:0;height:2px}@media only screen and (min-width:1366px){.bespoke-progress-parent{height:4px}}@media print{.bespoke-progress-parent{display:none}}.bespoke-progress-bar{-webkit-transition:width .6s ease;transition:width .6s ease;position:absolute;height:100%;background:#0089f3;border-radius:0 4px 4px 0}.emphatic{background:#eaeaea}.bespoke-backdrop{position:absolute;top:0;left:0;right:0;bottom:0;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition:opacity .6s ease;transition:opacity .6s ease;opacity:0;z-index:-1}.bespoke-backdrop-active{opacity:1}pre{padding:26px!important;border-radius:8px}body{font-family:helvetica,arial,sans-serif;font-size:18px;color:#404040}h1{font-size:72px;line-height:82px;letter-spacing:-2px;margin-bottom:16px}h2{font-size:42px;letter-spacing:-1px;margin-bottom:8px}h3{font-size:24px;font-weight:400;margin-bottom:24px;color:#606060}hr{visibility:hidden;height:20px}ul{list-style:none}li{margin-bottom:12px}p{margin:0 100px 12px;line-height:22px}a{color:#0089f3;text-decoration:none}",
{prepend:!0});return function(a){f()(a)}}},{"bespoke-classes":2,"insert-css":3}],2:[function(a,c,g){c.exports=function(){return function(a){var e=function(a,e){a.classList.add("bespoke-"+e)},c=function(a,e){a.className=a.className.replace(new RegExp("bespoke-"+e+"(\\s|$)","g")," ").trim()},d=function(b,d){var h=a.slides[a.slide()],g=d-a.slide(),m=0<g?"after":"before";["before(-\\d+)?","after(-\\d+)?","active","inactive"].map(c.bind(null,b));b!==h&&["inactive",m,m+"-"+Math.abs(g)].map(e.bind(null,
b))};e(a.parent,"parent");a.slides.map(function(a){e(a,"slide")});a.on("activate",function(b){a.slides.map(d);e(b.slide,"active");c(b.slide,"inactive")})}}},{}],3:[function(a,c,g){var f={};c.exports=function(a,c){if(!f[a]){f[a]=!0;var d=document.createElement("style");d.setAttribute("type","text/css");"textContent"in d?d.textContent=a:d.styleSheet.cssText=a;var b=document.getElementsByTagName("head")[0];c&&c.prepend?b.insertBefore(d,b.childNodes[0]):b.appendChild(d)}}},{}]},{},[1])(1)});