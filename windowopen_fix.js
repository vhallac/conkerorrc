browser_default_open_target = OPEN_NEW_WINDOW;
add_hook("window_initialize_hook", initialize_first_buffer_type);
add_hook("window_initialize_late_hook",
         function (window) {
           window.buffers.get_buffer(0).top_frame.scrollbars.visible = true;
         });
