var dnsComp = Components.classes["@mozilla.org/network/dns-service;1"];
var dnsSvc = dnsComp.getService(Components.interfaces.nsIDNSService);

// Helper function to obtain the host name of the machine
function get_host_name() {
    return dnsSvc.myHostName;
}

// Construct a path from a base, and list of directories. This function uses the
// platform's path separator character.
function make_path(base, parts) {
    var path = base;
    parts.forEach(function(dir) {
        path.appendRelativePath(dir);
    });
    return path;
}

// Construct a path relative to the configuration directory, ~/.conkerorrc from
// a list of directories.
function get_config_path(parts) {
    parts.unshift(".conkerorrc")
    return make_path(get_home_directory(), parts);
}

// Convenience function to reduce number of lines for loading config files
// iFile is an nsILocalFile (not sure about nsIFile)
function load_if_exists(iFile) {
    if (iFile.exists()) {
        load(iFile);
    }
}

// Advise (hook) a method of an object by calling another function after it
// returns. It is possible to obtain the return value of the advised function
// using this.method.rv. If the value of this field is modified by the advise,
// the value returned from the combined function call is also modified.
function advise_after(obj, method_name, advise_tag, func) {
    // Hook a method only once with same tag
    if (typeof obj[method_name][advise_tag] != 'undefined') {
        obj[method_name] = obj[method_name][advise_tag];
    }
    var new_func = function() {
        // call original
        obj[method_name].rv = obj[method_name][advise_tag].apply(this, arguments);
        // call our function
        func.apply(this, arguments);
        return obj[method_name].rv;
    }
    new_func[advise_tag] = obj[method_name];
    obj[method_name] = new_func;
}
