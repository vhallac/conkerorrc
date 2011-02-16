interactive("delicious-post",
            "bookmark the page via delicious",
            function (I) {
                check_buffer(I.buffer, content_buffer);
                let posturl = 'https://api.del.icio.us/v1/posts/add?&url=' +
                    encodeURIComponent(
                        load_spec_uri_string(
                            load_spec(I.buffer.top_frame))) +
                    '&description=' +
                    encodeURIComponent(
                        yield I.minibuffer.read(
                            $prompt = "name (required): ",
                            $initial_value = I.buffer.title)) +
                    '&tags=' +
                    encodeURIComponent(
                        yield I.minibuffer.read(
                            $prompt = "tags (space delimited): ")) +
                    '&extended=' +
                    encodeURIComponent(
                        yield I.minibuffer.read(
                        $prompt = "extended description: "));

                try {
                    var content = yield send_http_request(
                        load_spec({uri: posturl}));
                    I.window.minibuffer.message(content.responseText);
                } catch (e) { }
            });

interactive("delicious-post-link",
            "bookmark the link via delicious",
            function (I) {
                bo = yield read_browser_object(I) ;
                mylink = load_spec_uri_string(
                    load_spec(encodeURIComponent(bo)));
                check_buffer(I.buffer, content_buffer);
                let postlinkurl = 'https://api.del.icio.us/v1/posts/add?&url=' +
                    mylink +
                    '&description=' +
                    encodeURIComponent(
                        yield I.minibuffer.read(
                            $prompt = "name (required): ",
                            $initial_value = bo.textContent)) +
                    '&tags=' +
                    encodeURIComponent(
                        yield I.minibuffer.read(
                            $prompt = "tags (space delimited): ")) +
                    '&extended=' +
                    encodeURIComponent(
                        yield I.minibuffer.read(
                            $prompt = "extended description: "));

                try {
                    var content = yield send_http_request(
                        load_spec({uri: postlinkurl}));
                    I.window.minibuffer.message(content.responseText);
                } catch (e) { }
            }, $browser_object = browser_object_links);

define_key(default_global_keymap, "o", "delicious-post");
define_key(default_global_keymap, "O", "delicious-post-link");

// I use the stock delicious webjumps
//define_webjump("del", "http://delicious.com/search?p=%s&chk=&context=userposts%7C" + delicious_user_name + "&fr=del_icio_us&lc=");

