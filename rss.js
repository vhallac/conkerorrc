define_browser_object_class(
    "ttrss-subscribe",
    "Subscribe to feed(s) on page",
    function (I, prompt) {
        check_buffer(I.buffer, content_buffer);
        let createurl = 'https://rss.ciyiz.biz/public.php?op=subscribe&feed_url=' +
            encodeURIComponent(
                load_spec_uri_string(
                    load_spec(I.buffer.top_frame)));
        yield co_return(createurl);
    });

// Use * r f to go to ttrss subscription form (C-u * r f to open it in a new window)
define_key(content_buffer_normal_keymap, "* 8 r", "browser-object-ttrss-subscribe");
