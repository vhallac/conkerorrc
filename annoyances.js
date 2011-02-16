/* StackOverflow: Make the sidebar and header scroll with the rest of the page */
register_user_stylesheet(
    "data:text/css,"+
    escape(
    "@-moz-document domain(\"slashdot.org\")\n" +
    "{"+
        "div.col_1 { position: absolute !important; }"+
        "header.h { position: absolute !important; }"+
    "}"))
