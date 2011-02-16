interactive("open-gmail", "Go to gmail", "follow-new-buffer-background",
            $browser_object = "http://gmail.com/");
define_key(content_buffer_normal_keymap, "f1", "open-gmail");

interactive("open-tda", "Go to gmail/TDA", "follow-new-buffer-background",
            $browser_object = "http://mail.google.com/a/tda-tech.com/");
define_key(content_buffer_normal_keymap, "f2", "open-tda");

interactive("open-zebra", "Go to gmail/TDA", "follow-new-buffer-background",
            $browser_object = "http://www.zebraguild.com/");
define_key(content_buffer_normal_keymap, "f3", "open-zebra");

