define_browser_object_class(
    "page-title", "Get the title of the current page",
    function (I, prompt) {
        check_buffer(I.buffer, content_buffer);
        yield co_return(I.buffer.document.title);
    });

define_key(content_buffer_normal_keymap, "* p", "browser-object-page-title");
// So `* p c` will copy the title of the current buffer
