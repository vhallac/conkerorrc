session_pref("xpinstall.whitelist.required", false);

// session_pref('extensions.checkCompatibility', false);

///
/// MozRepl
///
var mozrepl_profile_name = "default";

if (get_current_profile() == mozrepl_profile_name) {
    // Start mozrepl only for default profile. Otherwise it is first come-first served,
    // and I don't like it.
    let (mozrepl_init = get_home_directory()) {
        // Doing this file by file until I find a good way to resolve the / vs \ issue
        mozrepl_init.appendRelativePath(".conkerorrc")
        mozrepl_init.appendRelativePath("mozrepl")
        mozrepl_init.appendRelativePath("mozrepl_init.js")
        session_pref('extensions.mozrepl.initUrl', make_uri(mozrepl_init).spec);
    }

    if ('@hyperstruct.net/mozlab/mozrepl;1' in Cc) {
        var loopback_only = true;
        var mozrepl = Cc['@hyperstruct.net/mozlab/mozrepl;1']
            .getService(Ci.nsIMozRepl);
        if (! mozrepl.isActive())
            mozrepl.start(4242, loopback_only);
    }
}
