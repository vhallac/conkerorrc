require("content-policy");

/*
 * Blockers
 */

function block_by_host (content_type, content_location) {
    var N = content_policy_reject;
    return ({ "aka-cdn-ns.adtechus.com":N,
              "delivery.trafficjunky.net":N,
              "googleads.g.doubleclick.net":N,
              "pagead2.googlesyndication.com":N }
            [content_location.host] || null);
}
add_hook("content_policy_hook", block_by_host);


function block_flash (content_type, content_location) {
    dumpln("content_type: "+content_type);
    var Y = content_policy_accept, N = content_policy_reject;
    var action = (  { "homestarrunner.com":Y,
                      "www.homestarrunner.com":Y,
                      "www.emusic.com": Y }
                  [content_location.host] || N);
    if (action == N)
        dumpln("blocked flash: "+content_location.spec);
    return action;
}
content_policy_bytype_table.object = block_flash;
add_hook("content_policy_hook", content_policy_bytype);


// this one is still experimental..
// TODO: What does this one do?
function block_subdocuments (content_type, content_location,
                 request_origin, context, mime_type_guess,
                 extra) {
    if (content_location.scheme == 'file' ||
        context.ownerDocument &&
        context.ownerDocument.location == conkeror_chrome_uri)
    {
        return content_policy_accept;
    } else
        return content_policy_reject;
}
//add_hook("content_policy_hook", block_subdocuments);
