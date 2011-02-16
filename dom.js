
interactive("delete-node", null,
            function (I) {
                var elem = yield read_browser_object(I);
                elem.parentNode.removeChild(elem);
            },
            $browser_object = browser_object_dom_node);

define_key(content_buffer_normal_keymap, "d", "delete-node");
