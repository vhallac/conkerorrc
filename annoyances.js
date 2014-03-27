/* StackOverflow: Make the sidebar and header scroll with the rest of the page */
register_user_stylesheet(
    "data:text/css,"+
    escape(
    "@-moz-document domain(\"slashdot.org\")\n" +
    "{"+
        "div.col_1 { position: absolute !important; }"+
        "header.h { position: absolute !important; }"+
    "}"))

use_proxy = false

function toggle_proxy(pacFileName)
{
    if (use_proxy)
    {
        session_pref('network.proxy.type', 0);
        use_proxy = false;
    }
    else
    {
        let (proxy_pac = get_home_directory()) {
            proxy_pac.appendRelativePath(".conkerorrc");
            proxy_pac.appendRelativePath("proxy");
            proxy_pac.appendRelativePath(pacFileName);
            session_pref('network.proxy.type', 2);
            session_pref('network.proxy.autoconfig_url', make_uri(proxy_pac).spec);
        }
        use_proxy = true;
    }
}

/* Enable proxies as per my local .pac file */
interactive("proxy-toggle", "toggle proxy usage",
            function (I) {
                dump("stting proxy!");
                toggle_proxy("default.pac");
            });

/* Enable proxies as per my local .pac file */
interactive("proxy-toggle-all", "toggle proxy usage",
            function (I) {
                toggle_proxy("all.pac");
            });

function inject_css(document, css_text) {
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css_text;
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(style);
}

interactive("inject-css", "Add temporary CSS snippets to page (you could use firebug for trickier CSS)",
            function(I) {
                var css_text = yield I.minibuffer.read(
                    $prompt = "CSS: ",
                    $history = "css-snippet");
                inject_css(I.buffer.document, css_text);
            });
