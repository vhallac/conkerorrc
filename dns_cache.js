// These are ... ahem ... inspired by the code in DNS Cache addon:
// https://addons.mozilla.org/en-US/firefox/addon/dns-cache/

require("commands");
require("cache");

interactive("flush-dns", "Flush the DNS cache",
            function (I) {
                network_set_online_status(false);
                cache_clear(Ci.nsICache.STORE_ANYWHERE);
                network_set_online_status(true);
            });
