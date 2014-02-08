interactive("open-gmail", "Go to gmail",
            "follow-new-buffer-background",
            $browser_object = "http://gmail.com/");
define_key(content_buffer_normal_keymap, "f1", "open-gmail");

interactive("open-outlook",
            "Go to outlook",
            "follow-new-buffer-background",
            $browser_object = "http://outlook.com/");
define_key(content_buffer_normal_keymap, "f2", "open-outlook");
