//tealium universal tag - utag.5 ut4.0.202102190104, Copyright 2021 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={"id":id};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}
var match=/ut\d\.(\d*)\..*/.exec(utag.cfg.v);if(utag.ut.loader===undefined||!match||parseInt(match[1])<41){u.loader=function(o,a,b,c,l,m){utag.DB(o);a=document;if(o.type=="iframe"){m=a.getElementById(o.id);if(m&&m.tagName=="IFRAME"){b=m;}else{b=a.createElement("iframe");}o.attrs=o.attrs||{};utag.ut.merge(o.attrs,{"height":"1","width":"1","style":"display:none"},0);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";}if(o.id){b.id=o.id;}for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l]);}b.setAttribute("src",o.src);if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState=="complete"||this.readyState=="loaded"){this.onreadystatechange=null;o.cb();}};}}if(o.type!="img"&&!m){l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}}};}else{u.loader=utag.ut.loader;}
if(utag.ut.typeOf===undefined){u.typeOf=function(e){return({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();};}else{u.typeOf=utag.ut.typeOf;}
u.ev={"view":1};u.map={};u.extend=[function(a,b){try{if(1){f='zillowgroup';if(b['_t_visitor_id']){b['_t_visitor_id']=b['_t_visitor_id']+f;}
if(b['cp.utag_main_v_id']){b['as_original_vid']=b['cp.utag_main_v_id'];b['cp.utag_main_v_id']=b['cp.utag_main_v_id']+f;}
if(b['ut.visitor_id']){b['ut.visitor_id']=b['ut.visitor_id']+f;}
if(b['tealium_visitor_id']){b['tealium_visitor_id']=b['tealium_visitor_id']+f;}}}catch(e){utag.DB(e)}},function(a,b){try{utag.loader.SC('utag_main',{'tdsyncran':'1'+';exp-session'});b['cp.utag_main_tdsyncran']='1';}catch(e){utag.DB(e);}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){utag.DB("send:5");utag.DB(b);var c,d,e,f,g;u.data={"qsp_delim":"&","kvp_delim":"=","base_url_req_ttdid":"//match.adsrvr.org/track/cmf/generic?","base_url_get_ttdid":"//datacloud.tealiumiq.com/tealium_ttd/main/16/i.js?jsonp=utag.ut.tealium_pass_ttdid","base_url_pass_ttdid":"//datacloud.tealiumiq.com/vdata/i.gif?","tealium_account":"","tealium_profile":"main","ttd_pid":"tealium","ttd_tpi":"1","gdpr":"0","gdpr_consent":"","delay":5000,"interval":0,"sin":4,"iab_v11_compliance":true,"iab_v20_compliance":true};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};utag.DB("send:5:EXTENSIONS");utag.DB(b);c=[];g=[];for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
utag.DB("send:5:MAPPINGS");utag.DB(u.data);if((u.data.iab_v11_compliance===true||u.data.iab_v11_compliance==="true")&&typeof __cmp==="function"){__cmp("getVendorConsents",[522],function(consents,is_successful){var consented_to_tealium=consents.vendorConsents[522];var consented_to_purposes=consents.purposeConsents[1]&&consents.purposeConsents[2]&&consents.purposeConsents[3]&&consents.purposeConsents[5];if(consented_to_tealium&&consented_to_purposes){execute_send();}else{utag.DB("Detected that consent was not granted for Tealium and/or its listed purposes. Aborting tag "+u.id+".");}});}else if(u.data.iab_v20_compliance===true||u.data.iab_v20_compliance==="true"){if(typeof __tcfapi==="function"){__tcfapi("getTCData",2,function(tcData,success){if(success){u.data.tc_string+="gdpr=";if(tcData.gdprApplies===true){u.data.gdpr="1";}else if(tcData.gdprApplies===false){u.data.gdpr="0";}else{u.data.gdpr=String(tcData.gdprApplies);}
u.data.gdpr_consent=tcData.tcString;execute_send();}});}else{var frame=window;var cmpFrame;var cmpCallbacks={};while(frame){try{if(frame.frames["__tcfapiLocator"]){cmpFrame=frame;break;}}catch(error){utag.DB(error);}
if(frame===window.top){break;}
frame=frame.parent;}
if(!cmpFrame){execute_send();}else{window.__tcfapi=function(cmd,version,callback,arg){var callId=String(Math.random());var msg={__tcfapiCall:{command:cmd,parameter:arg,version:version,callId:callId}};cmpCallbacks[callId]=callback;cmpFrame.postMessage(msg,"*");};window.tealiumiabPostMessageHandler=function(event){var json={};try{json=typeof event.data==="string"?JSON.parse(event.data):event.data;}catch(error){utag.DB(error);}
var payload=json.__tcfapiReturn;if(payload){if(typeof cmpCallbacks[payload.callId]==="function"){cmpCallbacks[payload.callId](payload.returnValue,payload.success);cmpCallbacks[payload.callId]=null;}}};window.addEventListener("message",tealiumiabPostMessageHandler,false);__tcfapi("getTCData",2,function(tcData,success){if(success){u.data.tc_string+="gdpr=";if(tcData.gdprApplies===true){u.data.gdpr="1";}else if(tcData.gdprApplies===false){u.data.gdpr="0";}else{u.data.gdpr=String(tcData.gdprApplies);}
u.data.gdpr_consent=tcData.tcString;execute_send();}});}}}else{execute_send();}
function execute_send(){u.data.tealium_account=u.data.tealium_account||utag.cfg.utid.split("/")[0];u.data.tealium_profile=u.data.tealium_profile||utag.cfg.utid.split("/")[1];u.data.order_id=u.data.order_id||b._corder||"";if(!b["cp.utag_main_ttd_uuid"]&&!u.data.order_id){c.push("ttd_pid"+u.data.kvp_delim+u.data.ttd_pid);c.push("ttd_tpi"+u.data.kvp_delim+u.data.ttd_tpi);c.push("gdpr"+u.data.kvp_delim+u.data.gdpr);if(u.data.gdpr==="1"&&u.typeOf(u.data.gdpr_consent)==="string"&&u.data.gdpr_consent!==""){c.push("gdpr_consent"+u.data.kvp_delim+u.data.gdpr_consent);}
u.loader({"type":"img","src":u.data.base_url_req_ttdid+c.join(u.data.qsp_delim)});utag.ut.tealium_pass_ttdid=function(o){try{var tl=o.tvt?o.tvt.length:0;if(tl!=0){utag.loader.SC("utag_main",{"ttd_uuid":(o.tvt[tl-1].t1+";exp-session")});g.push("gdpr"+u.data.kvp_delim+u.data.gdpr);if(u.data.gdpr==="1"&&u.typeOf(u.data.gdpr_consent)==="string"&&u.data.gdpr_consent!==""){g.push("gdpr_consent"+u.data.kvp_delim+u.data.gdpr_consent);}
g.push("ttd_uuid"+u.data.kvp_delim+o.tvt[tl-1].t1);g.push("tealium_vid"+u.data.kvp_delim+b["cp.utag_main_v_id"]);g.push("tealium_account"+u.data.kvp_delim+u.data.tealium_account);g.push("tealium_profile"+u.data.kvp_delim+u.data.tealium_profile);g.push("tealium_cookie_sync"+u.data.kvp_delim+"true");u.loader({"type":"img","src":u.data.base_url_pass_ttdid+g.join(u.data.qsp_delim)});clearInterval(u.polling_interval);}}catch(e){utag.DB(e);}}
u.get_ttdid=function(interval,sin){if(interval>=sin){clearInterval(u.polling_interval);}else{u.loader({"type":"script","src":u.data.base_url_get_ttdid,"cb":null,"loc":"script","id":"utag_5_get_ttdid","attrs":{}});u.data.interval++;}}
u.polling_interval=setInterval(function(){u.get_ttdid(u.data.interval,u.data.sin);},u.data.delay);}
utag.DB("send:5:COMPLETE");}}};utag.o[loader].loader.LOAD(id);}("5","zillowgroup.zcom"));}catch(error){utag.DB(error);}