define([
  "base/js/namespace",
  "jquery",
  "require",
  "base/js/events",
  "base/js/utils",
  "./voice_control",
  "./themes",
  "./spell_checker",
  "./planner",
  "./font_style"
], function(
  Jupyter,
  $,
  requirejs,
  events,
  utils,
  Voice_control,
  Themes,
  Spc,
  Planner,
  Font_style
) {
  "use strict";

  var load_ipython_extension = function() {
    css_initial(
      "https://gitcdn.github.io/bootstrap-toggle/2.2.2/css/bootstrap-toggle.min.css"
    );
    css_initial("../../nbextensions/accessibility_toolbar/font_style.css");
    js_initial(
      "https://gitcdn.github.io/bootstrap-toggle/2.2.2/js/bootstrap-toggle.min.js"
    );

    var fs_obj = new Font_style();
    var spc_obj = new Spc();
    var vc_obj = new Voice_control();
    var planner_obj = new Planner();
    var theme_obj = new Themes();
    Jupyter.toolbar.add_buttons_group([
      Jupyter.keyboard_manager.actions.register(
        {
          help: "Customise font",
          icon: "fas fa-font",
          handler: function() {}
        },
        "customise-font",
        "accessibility-toolbar"
      ),
      Jupyter.keyboard_manager.actions.register(
        {
          help: "Spell Checker",
          icon: "fas fa-check",
          handler: function() {
            spc_obj.spc_click();
          }
        },
        "spell-checker",
        "accessibility-toolbar"
      ),
      Jupyter.keyboard_manager.actions.register(
        {
          help: "Voice Control",
          icon: "fas fa-microphone",
          handler: function() {
            // TODO
          }
        },
        "voice-control",
        "accessibility-toolbar"
      ),
      Jupyter.keyboard_manager.actions.register(
        {
          help: "Planner",
          icon: "fas fa-sticky-note",
          handler: function() {
            planner_obj.toggle_planner();
          }
        },
        "planner",
        "accessibility-toolbar"
      ),
      Jupyter.keyboard_manager.actions.register(
        {
          help: "Custom themes",
          icon: "fas fa-clone",
          handler: function() {
            //TODO
          }
        },
        "customise-theme",
        "accessibility-toolbar"
      )
    ]);

    fs_obj.fs_initial();
    spc_obj.spc_initial();
    vc_obj.setup_voice_control();
    planner_obj.initialise_planner();
    theme_obj.createThemeMenu();
  };

  return {
    load_ipython_extension: load_ipython_extension
  };
});

function css_initial(url) {
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = requirejs.toUrl(url);
  document.getElementsByTagName("head")[0].appendChild(link);
}

function js_initial(url) {
  var script = document.createElement("script");
  script.src = requirejs.toUrl(url);
  document.getElementsByTagName("head")[0].appendChild(script);
}