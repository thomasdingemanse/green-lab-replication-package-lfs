(function(S){function g(){var a=this;this.iabType=null;this.iabTypeAdded=!0;this.crossOrigin=null;this.isAmp=!1;this.domainId="";this.isPreview=this.isReset=!1;this.geoFromUrl="";this.addBannerSDKScript=function(b){var d=null;a.iabTypeAdded&&("IAB"!==(d=a.getRegionSet(b)).Type&&"IAB2"!==d.Type||(a.iabType=d.Type,a.intializeIabStub()),"IAB2"!==d.Type&&a.removeTcf());var e=c.stubScriptElement.cloneNode(!0),f="";f=b.UseSDKRefactor?(c.isMigratedURL&&(e.src=c.storageBaseURL+"/scripttemplates/new/scripttemplates/"+
c.stubFileName+".js"),c.storageBaseURL+"/scripttemplates/new/scripttemplates/"+b.Version+"/"+c.bannerScriptName):"5.11.0"===b.Version?(c.isMigratedURL&&(e.src=c.storageBaseURL+"/scripttemplates/old/scripttemplates/"+c.stubFileName+".js"),c.storageBaseURL+"/scripttemplates/old/scripttemplates/5.11.0/"+c.bannerScriptName):(c.isMigratedURL&&(e.src=c.storageBaseURL+"/scripttemplates/"+c.stubFileName+".js"),c.storageBaseURL+"/scripttemplates/"+b.Version+"/"+c.bannerScriptName);["charset","data-language",
"data-document-language","data-domain-script","crossorigin"].forEach(function(h){c.stubScriptElement.getAttribute(h)&&e.setAttribute(h,c.stubScriptElement.getAttribute(h))});a.crossOrigin=c.stubScriptElement.getAttribute("crossorigin")||null;a.isAmp=!!c.stubScriptElement.getAttribute("amp");window.otStubData={domainData:b,stubElement:e,bannerBaseDataURL:c.bannerBaseDataURL,mobileOnlineURL:c.mobileOnlineURL,userLocation:c.userLocation,regionRule:d,crossOrigin:a.crossOrigin,isAmp:a.isAmp,isPreview:a.isPreview,
isReset:a.isReset,geoFromUrl:a.geoFromUrl,domainId:a.domainId,urlParams:a.urlParams};a.jsonp(f,null)};this.intializeIabStub=function(){var b=window;a.iabTypeAdded?("IAB"===a.iabType?void 0===b.__cmp&&(window.__cmp=a.executeCmpApi):void 0===b.__tcfapi&&(window.__tcfapi=a.executeTcfApi),a.addIabFrame()):a.addBackwardIabFrame();b.receiveOTMessage=a.receiveIabMessage;(b.attachEvent||window.addEventListener)("message",b.receiveOTMessage,!1)};this.addIabFrame=function(){var b=window,d="IAB"===a.iabType?
"__cmpLocator":"__tcfapiLocator";!b.frames[d]&&(b.document.body?a.addLocator(d,"CMP"):setTimeout(a.addIabFrame,5))};this.addBackwardIabFrame=function(){var b=window;!b.frames.__cmpLocator&&(b.document.body?a.addLocator("__cmpLocator","CMP"):setTimeout(a.addIabFrame,5));!b.frames.__tcfapiLocator&&(b.document.body?a.addLocator("__tcfapiLocator","TCF"):setTimeout(a.addIabFrame,5))};this.addLocator=function(b,d){var e=window,f=e.document.createElement("iframe");f.style.cssText="display:none";f.name=b;
f.setAttribute("title",d+" Locator");e.document.body.appendChild(f)};this.receiveIabMessage=function(b){var d="string"==typeof b.data,e={};try{e=d?JSON.parse(b.data):b.data}catch(m){}if(e.__cmpCall&&"IAB"===a.iabType){var f=e.__cmpCall.callId,h=e.__cmpCall.command,n=e.__cmpCall.parameter;a.executeCmpApi(h,n,function(m,T){m={__cmpReturn:{returnValue:m,success:T,callId:f,command:h}};b.source.postMessage(d?JSON.stringify(m):m,b.origin)})}else e.__cmpCall&&"IAB2"===a.iabType&&console.log("Expecting IAB TCF v2.0 vendor iFrame call; Received IAB TCF v1.1");
if(e.__tcfapiCall&&"IAB2"===a.iabType){var U=e.__tcfapiCall.callId,E=e.__tcfapiCall.command,ea=(n=e.__tcfapiCall.parameter,e.__tcfapiCall.version);a.executeTcfApi(E,n,function(m,T){m={__tcfapiReturn:{returnValue:m,success:T,callId:U,command:E}};b&&b.source&&b.source.postMessage&&b.source.postMessage(d?JSON.stringify(m):m,"*")},ea)}else e.__tcfapiCall&&"IAB"===a.iabType&&console.log("Expecting IAB TCF v1.1 vendor iFrame call; Received IAB TCF v2.0")};this.executeCmpApi=function(){for(var b=[],d=0;d<
arguments.length;d++)b[d]=arguments[d];a.iabType="IAB";d=b[0];var e=b[1];b=b[2];if("function"==typeof b&&d)if(c.isStubReady&&c.IABCookieValue)switch(d){case "ping":a.getPingRequest(b,!0);break;case "getConsentData":a.getConsentDataRequest(b);break;default:a.addToQueue(d,e,b)}else a.addToQueue(d,e,b)};this.executeTcfApi=function(){for(var b=[],d=0;d<arguments.length;d++)b[d]=arguments[d];if(a.iabType="IAB2",!b.length)return window.__tcfapi.a||[];d=b[0];var e=b[1],f=b[2];b=b[3];"function"==typeof f&&
d&&("ping"===d?a.getPingRequest(f):a.addToQueue(d,e,f,b))};this.addToQueue=function(b,d,e,f){var h=window,n="IAB"===a.iabType?"__cmp":"__tcfapi";h[n].a=h[n].a||[];h[n].a.push([b,d,e,f])};this.getPingRequest=function(b,d){if(void 0===d&&(d=!1),b){var e={},f=!1;"IAB"===a.iabType?(e={gdprAppliesGlobally:c.oneTrustIABgdprAppliesGlobally,cmpLoaded:d},f=!0):"IAB2"===a.iabType&&(e={gdprApplies:c.oneTrustIABgdprAppliesGlobally,cmpLoaded:!1,cmpStatus:"stub",displayStatus:"stub",apiVersion:"2.0",cmpVersion:void 0,
cmpId:void 0,gvlVersion:void 0,tcfPolicyVersion:void 0},f=!0);b(e,f)}};this.getConsentDataRequest=function(b){b&&c.IABCookieValue&&b({gdprApplies:c.oneTrustIABgdprAppliesGlobally,hasGlobalScope:c.hasIABGlobalScope,consentData:c.IABCookieValue},!0)};this.initConsentSDK()}var F,k,V,G,H,y,W,p,X,I,z,A,u,J,Y,v,Z,l,K,L,aa,w,ba,q,ca,M,da,N,r,t,B,O,P,C,x,Q,D,R,c=new function(){this.optanonCookieName="OptanonConsent";this.optanonHtmlGroupData=[];this.optanonHostData=[];this.genVendorsData=[];this.IABCookieValue=
"";this.oneTrustIABCookieName="eupubconsent";this.oneTrustIsIABCrossConsentEnableParam="isIABGlobal";this.isStubReady=!0;this.geolocationCookiesParam="geolocation";this.EUCOUNTRIES="BE BG CZ DK DE EE IE GR ES FR IT CY LV LT LU HU MT NL AT PL PT RO SI SK FI SE GB HR LI NO IS".split(" ");this.stubFileName="otSDKStub";this.DATAFILEATTRIBUTE="data-domain-script";this.bannerScriptName="otBannerSdk.js";this.mobileOnlineURL=[];this.isMigratedURL=!1;this.migratedCCTID="[[OldCCTID]]";this.migratedDomainId=
"[[NewDomainId]]";this.userLocation={country:"",state:""}};(k=F=F||{})[k.Unknown=0]="Unknown";k[k.BannerCloseButton=1]="BannerCloseButton";k[k.ConfirmChoiceButton=2]="ConfirmChoiceButton";k[k.AcceptAll=3]="AcceptAll";k[k.RejectAll=4]="RejectAll";k[k.BannerSaveSettings=5]="BannerSaveSettings";(G=V=V||{})[G.Purpose=1]="Purpose";G[G.SpecialFeature=2]="SpecialFeature";(F=H=H||{}).Legal="legal";F.UserFriendly="user_friendly";(H=y=y||{}).Top="top";H.Bottom="bottom";(p=W=W||{})[p.Banner=0]="Banner";p[p.PrefCenterHome=
1]="PrefCenterHome";p[p.VendorList=2]="VendorList";p[p.CookieList=3]="CookieList";(I=X=X||{})[I.RightArrow=39]="RightArrow";I[I.LeftArrow=37]="LeftArrow";(y=z=z||{}).AfterTitle="AfterTitle";y.AfterDescription="AfterDescription";y.AfterDPD="AfterDPD";(z=A=A||{}).PlusMinus="Plusminus";z.Caret="Caret";z.NoAccordion="NoAccordion";(A=u=u||{}).Consent="Consent";A.LI="LI";A.AddtlConsent="AddtlConsent";(u=J=J||{}).Iab1Pub="eupubconsent";u.Iab2Pub="eupubconsent-v2";u.Iab1Eu="euconsent";u.Iab2Eu="euconsent-v2";
(v=Y=Y||{})[v.Disabled=0]="Disabled";v[v.Consent=1]="Consent";v[v.LegInt=2]="LegInt";(l=Z=Z||{})[l["Banner - Allow All"]=1]="Banner - Allow All";l[l["Banner - Reject All"]=2]="Banner - Reject All";l[l["Banner - Close"]=3]="Banner - Close";l[l["Preference Center - Allow All"]=4]="Preference Center - Allow All";l[l["Preference Center - Reject All"]=5]="Preference Center - Reject All";l[l["Preference Center - Confirm"]=6]="Preference Center - Confirm";(J=K=K||{}).Active="1";J.InActive="0";(K=L=L||{}).Host=
"Host";K.GenVendor="GenVen";(w=aa=aa||{})[w.Host=1]="Host";w[w.GenVen=2]="GenVen";w[w.HostAndGenVen=3]="HostAndGenVen";(q=ba=ba||{})[q.minDays=1]="minDays";q[q.maxDays=30]="maxDays";q[q.maxYear=31536E3]="maxYear";q[q.maxSecToDays=86400]="maxSecToDays";(M=ca=ca||{})[M.RTL=0]="RTL";M[M.LTR=1]="LTR";(N=da=da||{})[N.GoogleVendor=1]="GoogleVendor";N[N.GeneralVendor=2]="GeneralVendor";(t=r=r||{})[t.Days=1]="Days";t[t.Weeks=7]="Weeks";t[t.Months=30]="Months";t[t.Years=365]="Years";(L=B=B||{}).Checkbox="Checkbox";
L.Toggle="Toggle";(B=O=O||{}).SlideIn="Slide_In";B.FadeIn="Fade_In";B.RemoveAnimation="Remove_Animation";(O=P=P||{}).Link="Link";O.Icon="Icon";(P=C=C||{}).consent="consent";P.set="set";(C=x=x||{}).update="update";C.default="default";C.ads_data_redaction="ads_data_redaction";(x=Q=Q||{}).analytics_storage="analytics_storage";x.ad_storage="ad_storage";x.region="region";x.wait_for_update="wait_for_update";(Q=D=D||{}).granted="granted";Q.denied="denied";D=((R={})[r.Days]="PCenterVendorListLifespanDay",
R[r.Weeks]="LfSpnWk",R[r.Months]="PCenterVendorListLifespanMonth",R[r.Years]="LfSpnYr",g.prototype.initConsentSDK=function(){this.initCustomEventPolyfill();this.ensureHtmlGroupDataInitialised();this.updateGtmMacros();this.getParam();this.fetchBannerSDKDependency()},g.prototype.fetchBannerSDKDependency=function(){this.setDomainDataFileURL();this.otFetch(c.bannerDataParentURL,this.getLocation.bind(this))},g.prototype.getLocation=function(a){if(!a.RuleSet[0].Type)return this.iabTypeAdded=!1,window.__cmp=
this.executeCmpApi,window.__tcfapi=this.executeTcfApi,this.intializeIabStub(),this.addBannerSDKScript(a);var b=window;b.OneTrust&&b.OneTrust.geolocationResponse?(b=b.OneTrust.geolocationResponse,this.setGeoLocation(b.countryCode,b.stateCode),this.addBannerSDKScript(a)):(b=this.readCookieParam(c.optanonCookieName,c.geolocationCookiesParam))||a.SkipGeolocation?(this.setGeoLocation(b.split(";")[0],b.split(";")[1]),this.addBannerSDKScript(a)):this.getGeoLocation(a)},g.prototype.getGeolocationURL=function(a){var b=
a.TenantFeatures,d=""+c.stubScriptElement.getAttribute("src").split(c.stubFileName)[0]+a.Version;return RegExp("^file://","i").test(d)&&a.MobileSDK?(a="/"+a.GeolocationUrl.replace(/^(http|https):\/\//,"").split("/").slice(1).join("/")+".js",b&&b.CookieV2GeolocationJsonApi?c.storageBaseURL+a:"."+a):a.GeolocationUrl},g.prototype.geoLocationJsonCallback=function(a,b){b&&this.setGeoLocation(b.country,b.state);this.addBannerSDKScript(a)},g.prototype.getGeoLocation=function(a){var b=this,d=a.TenantFeatures,
e=this.getGeolocationURL(a);d&&d.CookieV2GeolocationJsonApi?this.otFetch(e,this.geoLocationJsonCallback.bind(this,a),!0):(window.jsonFeed=function(f){b.setGeoLocation(f.country,f.state)},this.jsonp(e,this.addBannerSDKScript.bind(this,a)))},g.prototype.setGeoLocation=function(a,b){void 0===b&&(b="");c.userLocation={country:a,state:b}},g.prototype.otFetch=function(a,b,d){if(void 0===d&&(d=!1),RegExp("^file://","i").test(a))this.otFetchOfflineFile(a,b);else{c.mobileOnlineURL.push(a);var e=new XMLHttpRequest;
e.onload=function(){b(JSON.parse(this.responseText))};e.onerror=function(){b()};e.open("GET",a);d&&e.setRequestHeader("accept","application/json");e.send()}},g.prototype.otFetchOfflineFile=function(a,b){var d=(a=a.replace(".json",".js")).split("/"),e=d[d.length-1].split(".js")[0];this.jsonp(a,function(){b(window[e])})},g.prototype.jsonp=function(a,b){var d=document.createElement("script");d.setAttribute("src",a);d.async=!0;d.type="text/javascript";this.crossOrigin&&d.setAttribute("crossorigin",this.crossOrigin);
document.getElementsByTagName("head")[0].appendChild(d);RegExp("^file://","i").test(a)||c.mobileOnlineURL.push(a);b&&(d.onload=d.onerror=function(){b()})},g.prototype.getRegionSet=function(a){var b,d=c.userLocation,e=a.RuleSet.filter(function(E){return!0===E.Default});if(!d.country&&!d.state)return e&&0<e.length?e[0]:null;e=d.state.toLowerCase();d=d.country.toLowerCase();for(var f=0;f<a.RuleSet.length;f++)if(!0===a.RuleSet[f].Global)var h=a.RuleSet[f];else{var n=a.RuleSet[f].States;if(n[d]&&0<=n[d].indexOf(e)){var U=
a.RuleSet[f];break}0<=a.RuleSet[f].Countries.indexOf(d)&&(b=a.RuleSet[f])}return U||b||h},g.prototype.ensureHtmlGroupDataInitialised=function(){this.initializeIABData();this.initializeGroupData();this.initializeHostData();this.initializeGenVenData()},g.prototype.initializeGroupData=function(){var a=this.readCookieParam(c.optanonCookieName,"groups");a&&(c.optanonHtmlGroupData=this.deserialiseStringToArray(a))},g.prototype.initializeHostData=function(){var a=this.readCookieParam(c.optanonCookieName,
"hosts");a&&(c.optanonHostData=this.deserialiseStringToArray(a))},g.prototype.initializeGenVenData=function(){var a=this.readCookieParam(c.optanonCookieName,"genVendors");a&&(c.genVendorsData=this.deserialiseStringToArray(a))},g.prototype.initializeIABData=function(){this.validateIABGDPRApplied();this.validateIABGlobalScope()},g.prototype.validateIABGlobalScope=function(){var a=this.readCookieParam(c.optanonCookieName,c.oneTrustIsIABCrossConsentEnableParam);a?"true"===a?(c.hasIABGlobalScope=!0,c.isStubReady=
!1):(c.hasIABGlobalScope=!1,c.IABCookieValue=this.getCookie(c.oneTrustIABCookieName)):c.isStubReady=!1},g.prototype.validateIABGDPRApplied=function(){var a=this.readCookieParam(c.optanonCookieName,c.geolocationCookiesParam).split(";")[0];a?this.isBoolean(a)?c.oneTrustIABgdprAppliesGlobally="true"===a:c.oneTrustIABgdprAppliesGlobally=0<=c.EUCOUNTRIES.indexOf(a):c.isStubReady=!1},g.prototype.isBoolean=function(a){return"true"===a||"false"===a},g.prototype.readCookieParam=function(a,b){var d;if(d=this.getCookie(a)){a=
{};var e=d.split("\x26");for(d=0;d<e.length;d+=1){var f=e[d].split("\x3d");a[decodeURIComponent(f[0])]=decodeURIComponent(f[1]).replace(/\+/g," ")}return b&&a[b]?a[b]:b&&!a[b]?"":a}return""},g.prototype.getCookie=function(a){if(this.isAmp)return(JSON.parse(window.localStorage.getItem(this.domainId))||{})[a]||null;var b,d=a+"\x3d",e=document.cookie.split(";");for(a=0;a<e.length;a+=1){for(b=e[a];" "==b.charAt(0);)b=b.substring(1,b.length);if(0==b.indexOf(d))return b.substring(d.length,b.length)}return null},
g.prototype.updateGtmMacros=function(){var a,b=[];for(a=0;a<c.optanonHtmlGroupData.length;a++)this.endsWith(c.optanonHtmlGroupData[a],":1")&&b.push(c.optanonHtmlGroupData[a].replace(":1",""));for(a=0;a<c.optanonHostData.length;a++)this.endsWith(c.optanonHostData[a],":1")&&b.push(c.optanonHostData[a].replace(":1",""));for(a=0;a<c.genVendorsData.length;a++)this.endsWith(c.genVendorsData[a],":1")&&b.push(c.genVendorsData[a].replace(":1",""));a=","+this.serialiseArrayToString(b)+",";window.OnetrustActiveGroups=
a;window.OptanonActiveGroups=a;void 0!==window.dataLayer?window.dataLayer.constructor===Array&&(window.dataLayer.push({OnetrustActiveGroups:a}),window.dataLayer.push({OptanonActiveGroups:a})):window.dataLayer=[{event:"OneTrustLoaded",OnetrustActiveGroups:a},{event:"OptanonLoaded",OptanonActiveGroups:a}];var d,e=new CustomEvent("consent.onetrust",{detail:b});b.length&&(window.dataLayer.constructor===Array&&window.dataLayer.push({event:"OneTrustGroupsUpdated",OnetrustActiveGroups:a}),d=new CustomEvent("OneTrustGroupsUpdated",
{detail:b}));setTimeout(function(){window.dispatchEvent(e);d&&window.dispatchEvent(d)})},g.prototype.deserialiseStringToArray=function(a){return a?a.split(","):[]},g.prototype.endsWith=function(a,b){return-1!==a.indexOf(b,a.length-b.length)},g.prototype.serialiseArrayToString=function(a){return a.toString()},g.prototype.setStubScriptElement=function(){c.stubScriptElement=document.querySelector("script[src*\x3d'"+c.stubFileName+"']");c.stubScriptElement&&c.stubScriptElement.hasAttribute(c.DATAFILEATTRIBUTE)?
this.domainId=c.stubScriptElement.getAttribute(c.DATAFILEATTRIBUTE).trim():c.stubScriptElement||(c.stubScriptElement=document.querySelector("script[src*\x3d'"+c.migratedCCTID+"']"),c.stubScriptElement&&(c.isMigratedURL=!0,this.domainId=c.migratedDomainId.trim()))},g.prototype.setDomainDataFileURL=function(){this.setStubScriptElement();var a=c.stubScriptElement.getAttribute("src"),b=-1<a.indexOf("/consent");a&&(c.isMigratedURL?c.storageBaseURL=a.split("/consent/"+c.migratedCCTID)[0]:c.storageBaseURL=
b?a.split("/consent")[0]:a.split("/scripttemplates/"+c.stubFileName)[0]);this.isPreview&&-1===this.domainId.indexOf("test")?this.domainId+="-test":this.isPreview=!1;c.bannerBaseDataURL=c.storageBaseURL&&c.storageBaseURL+"/consent/"+this.domainId;c.bannerDataParentURL=c.bannerBaseDataURL+"/"+this.domainId+".json"},g.prototype.initCustomEventPolyfill=function(){function a(b,d){d=d||{bubbles:!1,cancelable:!1,detail:void 0};var e=document.createEvent("CustomEvent");return e.initCustomEvent(b,d.bubbles,
d.cancelable,d.detail),e}if("function"==typeof window.CustomEvent)return!1;a.prototype=window.Event.prototype;window.CustomEvent=a},g.prototype.removeTcf=function(){delete window.__tcfapi;var a=document.querySelectorAll("iframe[name\x3d'__tcfapiLocator']")[0];a&&a.parentElement.removeChild(a)},g.prototype.getParamForIE=function(){return{get:function(a){a=(new RegExp("[?\x26]"+a+"\x3d([^\x26#]*)")).exec(window.location.search);return null===a?null:decodeURI(a[1])||""}}},g.prototype.getParam=function(){window.document.documentMode?
this.urlParams=this.getParamForIE():this.urlParams=new URLSearchParams(window.location.search);var a="true"===this.urlParams.get("otreset"),b="true"===this.urlParams.get("otpreview");this.geoFromUrl=(this.urlParams.get("otgeo")||"").toLowerCase();var d=this.readCookieParam("otpreview","expiry"),e=this.readCookieParam("otpreview","geo");this.isReset=a||d&&new Date(d)<new Date;this.isPreview=!this.isReset&&(b||d&&new Date(d)>new Date);this.setGeoParam(this.geoFromUrl||e)},g.prototype.setGeoParam=function(a){if(a){var b=
window;b.OneTrust||(b.OneTrust={});a=a.split(",");b.OneTrust.geolocationResponse={countryCode:a[0],stateCode:a[1]}}},g);r=new D;return S.OtSDKStub=D,S.otSdkStub=r,S})({});