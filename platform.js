
var dnsComp = Components.classes["@mozilla.org/network/dns-service;1"];
var dnsSvc = dnsComp.getService(Components.interfaces.nsIDNSService);

function get_host_name() {
    return dnsSvc.myHostName;
}

function make_path(base, parts) {
    let (path = base) {
        parts.forEach(function(dir) {
            path.appendRelativePath(dir);
        });
        return path;
    }
}

function get_config_path(parts) {
    parts.unshift(".conkerorrc")
    return make_path(get_home_directory(), parts);
}


function load_platform_config() {
    var cfg_name = "unknown-platform";
    if (WINDOWS) {
        cfg_name="windows_config.js";
    }
    else if (POSIX) {
        cfg_name = "posix_config.js";
    }
    load(get_config_path(["platform", cfg_name]));
}

function load_machine_config() {
    load(get_config_path(["machine", get_host_name()+"_config.js"]));
}

load_platform_config();
load_machine_config();
