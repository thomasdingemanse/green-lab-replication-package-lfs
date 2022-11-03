var SfdcWwwBase=SfdcWwwBase||{};
var oneTrustComponent=(function(){var b,f=0;
var a={TAB:9,ESCAPE:27,ENTER:13,SPACE:32,LEFT:37,RIGHT:39};
function e(){var q=((b&&b.querySelectorAll(".category-menu-switch-handler"))?b.querySelectorAll(".category-menu-switch-handler"):false);
var o=((b&&b.querySelector(".save-preference-btn-handler"))?b.querySelector(".save-preference-btn-handler"):false);
var k=((b&&b.querySelector("#accept-recommended-btn-handler"))?b.querySelector("#accept-recommended-btn-handler"):false);
var l=((b&&b.querySelector("#ot-tab-desc"))?b.querySelector("#ot-tab-desc"):false);
var m=((b&&b.querySelector("#ot-pc-lst"))?b.querySelector("#ot-pc-lst"):false);
var h=((m&&m.querySelector("#ot-lst-title"))?m.querySelector("#ot-lst-title"):false);
var r=((h&&h.querySelector(".back-btn-handler"))?h.querySelector(".back-btn-handler"):false);
var j=((h&&h.getElementsByTagName("span"))?h.getElementsByTagName("span"):false);
if(r&&j){r.appendChild(j[0])
}function p(s){if(o&&k){if(typeof s.parentElement.dataset.optanongroupid==="undefined"){if(o.classList.contains("visible")){o.classList.remove("visible")
}if(k.classList.contains("optanon-ghost-button")){k.classList.remove("optanon-ghost-button")
}}else{o.classList.add("visible");
k.classList.add("optanon-ghost-button")
}}}for(let i=0;
i<q.length;
i++){q[i].addEventListener("click",function(s){p(s.currentTarget)
});
q[i].addEventListener("keydown",function(s){if(s.keyCode===a.LEFT||s.keyCode===a.RIGHT){n()
}})
}if(l&&o&&k&&q.length){for(let i=0;
i<q.length;
i++){if(i===0){q[0].addEventListener("keydown",function(s){if(s.shiftKey===true&&s.keyCode===a.TAB){setTimeout(function(){k.focus()
},100)
}if(s.shiftKey===false&&s.keyCode===a.TAB){setTimeout(function(){l.focus()
},100)
}})
}else{q[i].addEventListener("keydown",function(s){if(s.shiftKey===true&&s.keyCode===a.TAB){setTimeout(function(){k.focus()
},100)
}})
}}}function n(){for(let i=0;
i<q.length;
i++){if(q[i].classList.contains("ot-active-menu")){p(q[i])
}}}}function d(){var h=setInterval(function(){b=document.querySelector("#onetrust-pc-sdk");
if(b!==undefined&&b!==null&&b){e();
clearInterval(h)
}if(f++>10){clearInterval(h)
}},500)
}function c(){var k=new Date();
k.setTime(k.getTime()+1*3600*1000*24*365);
function j(){if(!h("cleared-onetrust-cookies")){document.cookie="OptanonAlertBoxClosed=; path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT";
document.cookie="OptanonConsent=; path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT"
}document.cookie="cleared-onetrust-cookies=; path=/; domain=.salesforce.com; expires="+k
}function h(n){var l="; "+document.cookie;
var m=l.split("; "+n+"=");
if(m.length==2){return true
}}j()
}function g(){c();
d()
}return{init:g,oneTrustComponent:oneTrustComponent}
}());
function runOneTrustComponent(){oneTrustComponent.init()
}if(document.readyState!="loading"){runOneTrustComponent()
}else{if(document.addEventListener){document.addEventListener("DOMContentLoaded",runOneTrustComponent)
}else{document.attachEvent("onreadystatechange",function(){if(document.readyState=="complete"){runOneTrustComponent()
}})
}};