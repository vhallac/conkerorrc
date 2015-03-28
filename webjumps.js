define_webjump("emacswiki",
    "http://www.google.com/cse?cx=004774160799092323420%3A6-ff2s0o6yi&q=%s&sa=Search&siteurl=emacswiki.org%2F",
    $alternative="http://www.emacswiki.org/");
define_webjump("randemacs", "http://emacswiki.org/emacs?action=random")
define_webjump("down?",
               function (url) {
                   if (url)
                       return "http://downforeveryoneorjustme.com/" + url;
                   else
                       return "javascript:window.location.href='http://downforeveryoneorjustme.com/'+window.location.href;";
               },
               $argument = "optional");

define_webjump("wayback",
               function (url) {
                   if (url)
                       return "http://web.archive.org/web/*/" + url;
                   else
                       return "javascript:window.location.href='http://web.archive.org/web/*/'+window.location.href;";
               },
               $argument = "optional");

define_webjump("imdb", "http://imdb.com/find?q=%s");
define_webjump("rfc", "http://www.ietf.org/rfc/rfc%s.txt");
define_webjump("github", "https://github.com/search?q=%s");
/* StumbleUpon */
define_webjump("stumble", "http://www.stumbleupon.com/to/stumble/go/");
define_webjump("stumble_like",
               "javascript:document.location.href='http://www.stumbleupon.com/submit?url='+document.URL+'&title='+document.title.replace(/%20/g,'+');");
define_webjump("stumble_reviews",
               "javascript:(function(){url=document.location.href.split('://');document.location.href='http://www.stumbleupon.com/url/'+escape(url[1]);})();");
define_webjump("deb-pkg", "http://packages.debian.org/search?keywords=%s&searchon=names&suite=stable&section=all");
define_webjump("deb-pkg-all", "http://packages.debian.org/search?keywords=%s&searchon=names&suite=all&section=all");
define_webjump("deb-pkg-backports", "http://packages.debian.org/search?keywords=%s&searchon=names&suite=squeeze-backports&section=all");
define_webjump("deb-file", "http://packages.debian.org/search?searchon=contents&keywords=%s&mode=path&suite=stable&arch=any");
define_webjump("deb-file-testing", "http://packages.debian.org/search?searchon=contents&keywords=%s&mode=path&suite=testing&arch=any");
define_webjump("g", "https://www.google.com/search?q=%s");
define_webjump("ddg", "https://duckduckgo.com/?q=%s");
define_webjump("torrent", "http://kickass.to/usearch/%s");
define_webjump("hepsi", "http://www.hepsiburada.com/liste/search.aspx?sText=%s");
define_webjump("gitti", "http://www.gittigidiyor.com/arama/?k=%s&sra=hpd");
define_webjump("sahibinden", "http://www.sahibinden.com/arama?query_text=%s");
define_webjump("minecraft", "http://minecraft.gamepedia.com/index.php?search=%s");
define_webjump("mvn", "http://mvnrepository.com/search?q=%s");
/* default webjump */
read_url_handler_list = [read_url_make_default_webjump_handler("ddg")];
