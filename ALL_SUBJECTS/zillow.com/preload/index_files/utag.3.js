//tealium universal tag - utag.3 ut4.0.202102190101, Copyright 2021 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={"id":id};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}
var match=/ut\d\.(\d*)\..*/.exec(utag.cfg.v);if(utag.ut.loader===undefined||!match||parseInt(match[1])<41){u.loader=function(o,a,b,c,l,m){utag.DB(o);a=document;if(o.type=="iframe"){m=a.getElementById(o.id);if(m&&m.tagName=="IFRAME"){b=m;}else{b=a.createElement("iframe");}o.attrs=o.attrs||{};utag.ut.merge(o.attrs,{"height":"1","width":"1","style":"display:none"},0);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";}if(o.id){b.id=o.id;}for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l]);}b.setAttribute("src",o.src);if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState=="complete"||this.readyState=="loaded"){this.onreadystatechange=null;o.cb();}};}}if(o.type!="img"&&!m){l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}}};}else{u.loader=utag.ut.loader;}
u.ev={"view":1};u.map={"cp.trace_id":"tealium_trace_id"};u.extend=[function(a,b){try{if(1){f='zillowgroup';if(b['_t_visitor_id']){b['_t_visitor_id']=b['_t_visitor_id']+f;}
if(b['cp.utag_main_v_id']){b['as_original_vid']=b['cp.utag_main_v_id'];b['cp.utag_main_v_id']=b['cp.utag_main_v_id']+f;}
if(b['ut.visitor_id']){b['ut.visitor_id']=b['ut.visitor_id']+f;}
if(b['tealium_visitor_id']){b['tealium_visitor_id']=b['tealium_visitor_id']+f;}}}catch(e){utag.DB(e)}},function(a,b){try{utag.loader.SC('utag_main',{'dcsyncran':'1'+';exp-session'});b['cp.utag_main_dcsyncran']='1';}catch(e){utag.DB(e);}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){utag.DB("send:3");utag.DB(b);var c,d,e,f,key;u.data={"qsp_delim":"&","kvp_delim":"=","base_url":"//cm.g.doubleclick.net/pixel?","google_nid":"tealium_dmp","tealium_selector":"","tealium_trace_id":"","tealium_account":"zillowgroup","tealium_profile":"main","custom":{},"iab_v11_compliance":true};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};utag.DB("send:3:EXTENSIONS");utag.DB(b);c=[];for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){if(u.data.hasOwnProperty(e[f])){u.data[e[f]]=b[d];}else{u.data.custom[e[f]]=b[d];}}}}
utag.DB("send:3:MAPPINGS");utag.DB(u.data);if(u.data.iab_v11_compliance===true&&typeof __cmp==="function"){__cmp("getVendorConsents",[522],function(consents,is_successful){var consented_to_tealium=consents.vendorConsents[522];var consented_to_purposes=consents.purposeConsents[1]&&consents.purposeConsents[2]&&consents.purposeConsents[3]&&consents.purposeConsents[5];if(consented_to_tealium&&consented_to_purposes){execute_send();}else{utag.DB("Detected that consent was not granted for Tealium and/or its listed purposes. Aborting tag "+u.id+".");}});}else{execute_send();}
function execute_send(){u.data.tealium_account=u.data.tealium_account||utag.cfg.utid.split("/")[0];u.data.tealium_profile=u.data.tealium_profile||utag.cfg.utid.split("/")[1];c.push("tealium_cookie_sync"+u.data.kvp_delim+"true");c.push("google_nid"+u.data.kvp_delim+u.data.google_nid);c.push("google_cm");c.push("tealium_vid"+u.data.kvp_delim+b["cp.utag_main_v_id"]);c.push("tealium_account"+u.data.kvp_delim+u.data.tealium_account);c.push("tealium_profile"+u.data.kvp_delim+u.data.tealium_profile);if(u.data.tealium_selector){c.push("tealium_selector"+u.data.kvp_delim+u.data.tealium_selector);}
if(u.data.tealium_trace_id){c.push("tealium_trace_id"+u.data.kvp_delim+u.data.tealium_trace_id);}
if(!utag.ut.isEmptyObject(u.data.custom))
for(key in u.data.custom){if(u.data.custom.hasOwnProperty(key)){c.push(key+u.data.kvp_delim+u.data.custom[key]);}}
u.data.base_url+=c.join(u.data.qsp_delim);u.loader({"type":"img","src":u.data.base_url});utag.DB("send:3:COMPLETE");}}};utag.o[loader].loader.LOAD(id);}("3","zillowgroup.zcom"));}catch(error){utag.DB(error);}