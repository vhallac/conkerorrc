define_key(content_buffer_normal_keymap, "M-f", "follow-new-buffer-background");
define_key(content_buffer_normal_keymap, "M-right", "forward");
define_key(content_buffer_normal_keymap, "M-left", "back");

function duck_search_new_buffer(I) {
  var terms = yield I.minibuffer.read(
    $prompt = 'Duck search in new buffer:',
    $history = 'duck-search-history'
  );
  yield load_url_in_new_buffer("https://www.duckduckgo.com/?q="+terms, I)
}

function duck_search_current_buffer(I) {
  var terms = yield I.minibuffer.read(
    $prompt = 'Duck search in current buffer:',
    $history = 'duck-search-history'
  );
  yield load_url_in_current_buffer("https://www.duckduckgo.com/?q="+terms, I)
}

interactive("search-new-buffer",
            "Search the interwebz. Show results in new buffer.",
            duck_search_new_buffer);

define_key(content_buffer_normal_keymap, 'C-c s', 'search-new-buffer');

interactive("search-current-buffer",
            "Search the interwebz. Show results in current buffer.",
            duck_search_current_buffer);

define_key(content_buffer_normal_keymap, 'C-c S', 'search-current-buffer');

function set_pixels_per_px(I, ratio) {
    session_pref("layout.css.devPixelsPerPx", ratio)
}

interactive("set-pixels-per-px",
            "Update screen scale",
            function (I) {
                var size = yield I.minibuffer.read(
                    $prompt = 'Pixels per css PX:',
                    $history = 'px-scale-history'
                );
                session_pref("layout.css.devPixelsPerPx", size);
            });

define_key(content_buffer_normal_keymap, "C-c z", "set-pixels-per-px");
