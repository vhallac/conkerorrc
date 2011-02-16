
let (themes = get_home_directory()) {
    themes.appendRelativePath(".conkerorrc");
    themes.appendRelativePath("themes");
    theme_load_paths.unshift(themes);
};

theme_load("vhallac");
