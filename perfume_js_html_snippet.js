<script src="/node_modules/perfume.js/dist/perfume.umd.min.js"></script>
<script>perfumeResults = []; 
function xml_http_post(url, data, callback) {var req = new XMLHttpRequest(); req.open("POST", url, true); 
req.send(data);} 
const perfume = new Perfume({  analyticsTracker: (options) => {    const { metricName, data, eventProperties, navigatorInformation } = options; 
perfumeResults.push(options); } }); 
function load_log() { 
setTimeout(function(){ objectToSend = "{'perfumeResults':"+JSON.stringify(perfumeResults)+"}"; 
xml_http_post("http://IP:8080/",objectToSend,null); },5000); };
window.addEventListener ?window.addEventListener("load",load_log, true) : window.attachEvent && window.attachEvent("onload", load_log);</script>
