function org_remember (url, title, selection, window) {
     var cmd_str = 'emacsclient -n \"org-protocol://remember2://t|'+url+'|'+title+'|'+selection+'\"';
     //var cmd_str = ‘emacsclient -e  \”(my-org-protocol-remember ‘+url+’/'+title+’/'+selection+’\”‘;
    if (window != null) {
      window.minibuffer.message('Issuing:: ' + cmd_str);
    }
    shell_command_blind(cmd_str);
}

interactive("org-remember", "Remember the current url with org-remember",
            function (I) {
                org_remember(I.buffer.display_uri_string,
                             I.buffer.document.title,
                             I.buffer.top_frame.getSelection(),
                             I.window);
            });

/*
function org_remember(url, title, text, window) {
    var eurl = encodeURIComponent(url);
    var etitle = encodeURIComponent(title);
    var etext = encodeURIComponent(text);
    var cmd_str = "emacsclient -c org-protocol://remember://" + eurl + "/" + etitle + "/" + etext;
    window.minibuffer.message("Issuing " + cmd_str);
    shell_command_blind(cmd_str);
}

interactive("org-remember", "Remember the current url with org-remember",
            function (I) {
                org_remember(I.buffer.display_uri_string,
                             I.buffer.document.title,
                             I.buffer.top_frame.getSelection(),
                             I.window);
            });

*/
