<html><head><meta name="robots" content="noindex, nofollow"/><link href="https://www.zillowstatic.com/vstatic/80d5e73/static/css/z-pages/captcha.css" type="text/css" rel="stylesheet" media="screen"/><script>
        window._pxAppId = 'PXHYx10rg3';
        window._pxJsClientSrc = '/HYx10rg3/init.js';
        window._pxHostUrl = '/HYx10rg3/xhr';
        window._pxFirstPartyEnabled = true;
        window._pxreCaptchaTheme='light';
    </script><script type="text/javascript" src="https://captcha.px-cdn.net/PXHYx10rg3/captcha.js?a=c&amp;m=0"></script>
    <script>
        function getQueryString(name, url) {
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        }
        document.addEventListener("DOMContentLoaded", function(e) {
            var uuidVerifyRegExp = /^\{?[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}\}?$/i;
            document.getElementById("uuid").innerText = "UUID: " + uuidVerifyRegExp.exec(getQueryString("uuid"));
        });

        function handleCaptcha(response) {
            var vid = getQueryString("vid"); // getQueryString is implemented below
            var uuid = getQueryString("uuid");
            var name = '_pxCaptcha';
            var cookieValue =  btoa(JSON.stringify({r:response,v:vid,u:uuid}));
            var cookieParts = [name, '=', cookieValue, '; path=/'];
            cookieParts.push('; domain=' + window.location.hostname);
            cookieParts.push('; max-age=10');//expire after 10 seconds
            document.cookie = cookieParts.join('');
            var originalURL = getOriginalUrl("url");
            var originalHost = window.location.host;
            var newHref = window.location.protocol + "//" + originalHost;
            originalURL = originalURL || '/';
            newHref = newHref + originalURL;
            window.location.href = newHref;
        }

        function getOriginalUrl(name) {
            var url = getQueryString(name);
            if (!url) return null;
            var regExMatcher = new RegExp("(([^&#@]*)|&|#|$)");
            var matches = regExMatcher.exec(url);
            if (!matches) return null;
            return matches[0];
        }
    </script></head><body><main class="zsg-layout-content"><div class="error-content-block"><div class="error-text-content"><!-- <h1>Captcha</h1> --><h5>Please verify you're a human to continue.</h5><div id="content" class="captcha-container"><div id="px-captcha" data-callback="handleCaptcha"></div><img src="https://www.zillowstatic.com/static/logos/logo-65x14.png" width="65" alt="Zillow" height="14"></img></div></div></div></main><h4 id="uuid" class="uuid-string zsg-fineprint"></h4></body></html><!-- H:036  T:1ms  S:2605  R:Wed Oct 26 05:18:30 PDT 2022  B:5.0.69711-master.bb559af~qa,spring_4_pre.27a3f48a -->