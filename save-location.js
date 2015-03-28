// Remember the last save location
(function() {
    var _home_path = get_home_directory();
    var _env_download_dir = getenv("DOWNLOADDIR");

    // Construct a sensible initial save path
    var _save_path = typeof(custom_save_path) === "undefined" ? _env_download_dir || _home_path : custom_save_path;

    add_hook("download_added_hook", function(info) {
        _save_path = info.target_file.parent.path;
    });

    suggest_save_path_from_file_name = function (filename, buffer) {
        var file = make_file(_save_path);
        file.append(filename);
        return file.path;
    }
})();
