function org_link (url, title, window) {
    var cmd_str = emacs_shell_command_nowait +
        ' \"org-protocol:/store-link:/' + encodeURIComponent(url) +
        '/' +encodeURIComponent(title) + '\"';
    dumpln(cmd_str);
    if (window != null) {
        window.minibuffer.message('Issuing:: ' + cmd_str);
    }
    shell_command_blind(cmd_str);
}

interactive("org-link", "Create an org-link in emacs",
            function (I) {
                org_link(I.buffer.display_uri_string,
                         I.buffer.document.title,
                         I.window);
            });

function org_capture (url, title, selection, window) {
    var cmd_str = emacs_shell_command_nowait +
        ' \"org-protocol:/capture:/' + encodeURIComponent(url) +
        '/' +encodeURIComponent(title) +
        '/' +encodeURIComponent(selection) +  '\"';
    dumpln(cmd_str);
    if (window != null) {
        window.minibuffer.message('Issuing:: ' + cmd_str);
    }
    shell_command_blind(cmd_str);
}

interactive("org-capture", "Create an org-link in emacs",
            function (I) {
                org_capture(I.buffer.display_uri_string,
                            I.buffer.document.title,
                            I.buffer.top_frame.getSelection(),
                            I.window);
            });
