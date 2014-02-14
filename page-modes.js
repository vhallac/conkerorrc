// First, the page modes I want to use
require("facebook")
require("xkcd")
require("youtube")
require("youtube-player")

//
// And now, the customizations
//

// Show image title on the page
xkcd_add_title = true;

// Make it easy to open the corresponding explanation
define_browser_object_class(
    "explainxkcd-url", null,
    function (I, prompt) {
        check_buffer(I.buffer, content_buffer);
        var curUrl = load_spec_uri_string(
            load_spec(I.buffer.top_frame));
        // TODO: Make sure xkcd_mode.test matches current URL.
        let explainUrl = 'http://www.explainxkcd.com/wiki/index.php/' +
            curUrl.replace(/^.*?\/?([0-9]*)\/?$/, function(match, id) { return id; });
        yield co_return(explainUrl);
    });

interactive("xkcd-explain",
            "Explain current xkcd",
            "follow-new-buffer",
            $browser_object = browser_object_explainxkcd_url);

define_keymap("xkcd_keymap", $display_name = "xkcd");
define_key(xkcd_keymap, "e", "xkcd-explain");

var xkcd_modality = {
    normal: xkcd_keymap
};

advise_after(xkcd_mode, "enable", "setkeymap", function(buffer) {
    buffer.content_modalities.push(xkcd_modality);
});
advise_after(xkcd_mode, "disable", "clearkeymap", function(buffer) {
    var i = buffer.content_modalities.indexOf(xkcd_modality);
    if (i > -1)
        buffer.content_modalities.splice(i, 1);
});

// Make html5 the default. I use this method to avoid saving youtube cookies.
advise_after(youtube_mode, "enable", "force_html5", function(buffer) {
    var cookie = find_cookie("youtube.com", "PREF")
    if (cookie && !cookie.value.match(/f2=/)) {
        save_cookie(cookie, {value: cookie.value + "&f2=40000000"});
    }
});
