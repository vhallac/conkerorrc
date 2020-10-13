
function standards_info_widget (window) {
    this.class_name = "standards-info-widget";
    text_widget.call (this, window);
    this.add_hook ("content_buffer_location_change_hook", method_caller (this, this.clear_flag));
    this.add_hook ("buffer_dom_content_loaded_hook", method_caller (this, this.set_flag));
    this.add_hook ("select_buffer_hook", method_caller (this, this.update));
}
standards_info_widget.prototype.__proto__ = text_widget.prototype;

standards_info_widget.prototype.update = function () {
    var buffer = this.window.buffers.current;
    var str = 'unknown';
    // dumpln ("update");
    if (buffer.standards_info_flag == true) {
        if (buffer.document.compatMode == 'BackCompat')
            str = 'quirks';
        else
            str = 'standards';
    }
    this.view.text = str;
};

standards_info_widget.prototype.clear_flag = function (buffer) {
    // dumpln ("clear_flag");
    buffer.standards_info_flag = false;
    this.update ();
};

standards_info_widget.prototype.set_flag = function (buffer) {
    // dumpln ("set_flag");
    buffer.standards_info_flag = true;
    this.update ();
};


var standards_info_mode_line_adder = mode_line_adder(standards_info_widget);

function standards_info_widget_enable () {
    add_hook ("mode_line_hook", standards_info_mode_line_adder, true);
}

function standards_info_widget_disable () {
    remove_hook ("mode_line_hook", standards_info_mode_line_adder);
}

define_global_mode ("standards_info_mode",
                    standards_info_widget_enable,
                    standards_info_widget_disable);

standards_info_mode (+1);
