define_browser_object_class(
    "history-url", null,
    function (I, prompt) {
        check_buffer (I.buffer, content_buffer);
        var result = yield I.buffer.window.minibuffer.read_url(
            $prompt = prompt,  $use_webjumps = false, $use_history = true, $use_bookmarks = false);
        yield co_return (result);
    },
    $hint = "choose url from history");

interactive("find-url-from-history",
	    "Find a page from history in the current buffer",
            "find-url",
            $browser_object = browser_object_history_url);

interactive("find-url-from-history-new-buffer",
	    "Find a page from history in the current buffer",
            "find-url-new-buffer",
            $browser_object = browser_object_history_url);

// Use * 8 h f to select page from history
define_key(content_buffer_normal_keymap, "* 8 h", "browser-object-history-url");

// This is not an interactive function intentionally.
// Use M-: to indicate caller knows what (s)he is doing.
function history_clear () {
    var history = Cc["@mozilla.org/browser/nav-history-service;1"]
        .getService(Ci.nsIBrowserHistory);
    history.removeAllPages();
}
