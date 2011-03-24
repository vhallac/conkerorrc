//
// Disable the pesky instant search option of google
// (only for www.google.com). Anonymize the cookie while you are at it.
//
require("cookie.js");

cookie_lifetime_policy=COOKIE_LIFETIME_SESSION;

cookie_manager.add(".google.com", "/", "PREF",
                   "ID=0000000000000000:FF=0:LD=en:NR=10:SG=2",
                   false, false, true,
                   Date.now() + 3600 * 24);


// http://developer.mozilla.org/en/nsICookie
//   list of attributes on nsICookie
//
// http://developer.mozilla.org/en/nsICookieManager
//
// nsICookiePermission

/*
 * call callback with each cookie.
 */
function cookies_foreach (callback) {
    for (var e = cookie_manager.enumerator; e.hasMoreElements();) {
        callback(e.getNext().QueryInterface(Ci.nsICookie));
    }
}

/*
 * call callback with each cookie.  if callback returns
 * true, keep the cookie.  if callback returns false,
 * delete the cookie.  careful with this one.
 */
function cookies_filter_destructive (callback) {
    for (var e = cookie_manager.enumerator; e.hasMoreElements();) {
        var c = e.getNext().QueryInterface(Ci.nsICookie);
        if (! callback(c)) {
            cookie_manager.remove(c.host, c.name, c.path, false);
        }
    }
}


/*

// print all google cookies
cookies_foreach (
    function (cookie) {
        if (cookie.host.indexOf("google") != -1) {
            dumpln(cookie.host + ";" + cookie.name + ";" + cookie.value);
        }
    });

// print all cookies
cookies_foreach (
    function (cookie) {
        dumpln(cookie.host + ";" + cookie.name + "=" + cookie.value);
    });

// destroy all google cookies
cookies_filter_destructive (
    function (cookie) {
        if (cookie.host.indexOf("google") == -1) {
            return true;
        } else {
            return false;
        }
    });

// print all cookies' hosts
cookies_foreach (
    function (cookie) {
        dumpln(cookie.host);
    });

*/


/* Allow perma-cookies from sites that are not very important or are trusted. */
var cookie_perm = Components.classes["@mozilla.org/cookie/permission;1"].createInstance();
function cookie_keep(urlStr)
{
    cookie_perm.setAccess(make_uri(urlStr), cookie_perm.ACCESS_ALLOW);
}

function cookie_deny(urlStr)
{
    cookie_perm.setAccess(make_uri(urlStr), cookie_perm.ACCESS_DENY);
}

cookie_perm.QueryInterface(Components.interfaces.nsICookiePermission);
cookie_keep("http://www.zebraguild.com");
cookie_keep("http://wowace.com");
cookie_keep("http://forums.wowace.com");
cookie_keep("http://curse.com");
cookie_keep("http://wow.curse.com");
cookie_keep("http://stumbleupon.com");
cookie_keep("http://zebra.wowstead.com");

/* And don't allow access from these sites */
cookie_deny("http://lijit.com");
cookie_deny("http://addthis.com");
cookie_deny("http://tynt.com");
cookie_deny("http://competitor.com");
cookie_deny("http://robtex.com");
cookie_deny("http://scorecardresearch.com");
cookie_deny("http://quantserve.com");

