
function load_platform_config() {
    var cfg_name = "unknown-platform";
    if (WINDOWS) {
        cfg_name="windows_config.js";
    }
    else if (POSIX) {
        cfg_name = "posix_config.js";
    }
    load_if_exists(get_config_path(["platform", cfg_name]));
}

function load_machine_config() {
    load_if_exists(get_config_path(["machine", get_host_name()+"_config.js"]));
}

load_platform_config();
load_machine_config();
