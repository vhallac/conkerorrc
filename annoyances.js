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
