// save a keystroke when selecting a dom node by number.
hints_auto_exit_delay = 1000;
hints_ambiguous_auto_exit_delay = 3000;

hint_background_color = 'white';
active_hint_background_color = '#ffcc00';

register_user_stylesheet(
    "data:text/css," +
        escape(
            "@namespace url(\"http://www.w3.org/1999/xhtml\");\n" +
            "span.__conkeror_hint {\n"+
            "  font-size: 12px !important;\n"+
            "  line-height: 12px !important;\n"+
            "}"));

register_user_stylesheet(
    "data:text/css," +
        escape (
            "span.__conkeror_hint {" +
            " border: 1px solid #dddddd !important;" +
            " color: white !important;" +
            " background-color: black !important;" +
            "}"));

require("casual-spelling");
