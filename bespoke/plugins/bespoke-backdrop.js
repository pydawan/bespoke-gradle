//# sourceMappingURL=bespoke/plugins/bespoke-backdrop.js.map
!function(k){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=k();else if("function"==typeof define&&define.amd)define([],k);else{var c;"undefined"!=typeof window?c=window:"undefined"!=typeof global?c=global:"undefined"!=typeof self&&(c=self);c=c.bespoke||(c.bespoke={});c=c.plugins||(c.plugins={});c.backdrop=k()}}(function(){return function c(e,f,l){function m(d,a){if(!f[d]){if(!e[d]){var b="function"==typeof require&&require;if(!a&&b)return b(d,!0);if(g)return g(d,!0);throw Error("Cannot find module '"+
d+"'");}b=f[d]={exports:{}};e[d][0].call(b.exports,function(a){var b=e[d][1][a];return m(b?b:a)},b,b.exports,c,e,f,l)}return f[d].exports}for(var g="function"==typeof require&&require,h=0;h<l.length;h++)m(l[h]);return m}({1:[function(c,e,f){e.exports=function(){return function(c){function e(a){if(a){var b=d.indexOf(a),f=c.slide();g(a,"active");g(a,"inactive");g(a,"before");g(a,"after");b!==f?(h(a,"inactive"),h(a,b<f?"before":"after")):h(a,"active")}}function g(a,b){a.classList.remove("bespoke-backdrop-"+
b)}function h(a,b){a.classList.add("bespoke-backdrop-"+b)}var d;d=c.slides.map(function(a){if(a=a.getAttribute("data-bespoke-backdrop")){var b=document.createElement("div");b.className=a;b.classList.add("bespoke-backdrop");c.parent.appendChild(b);return b}});c.on("activate",function(){d.forEach(e)})}}},{}]},{},[1])(1)});