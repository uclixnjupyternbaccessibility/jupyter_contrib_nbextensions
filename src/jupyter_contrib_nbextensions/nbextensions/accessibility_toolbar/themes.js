define(["base/js/namespace", "jquery", "require"], function(
  Jupyter,
  $,
  requirejs
) {
  "use strict";

  var ThemeObj = function() {};

  ThemeObj.prototype.createThemeMenu = function() {
    var themeButton = $("[title='Custom themes']");
    var themediv = $("<div>", { style: "display:inline", class: "btn-group" });
    themeButton.parent().append(themediv);
    themediv.append(themeButton);
    themeButton.addClass("dropdown-toggle").attr("data-toggle", "dropdown");
    themeButton.attr("id", "theme");

    var dropDownMenu = $("<ul/>").addClass("dropdown-menu");
    dropDownMenu.attr("id", "theme_dropdown");
    var menuItem1 = $("<li/>");
    var label1 = $("<label/>");
    label1.text("Dark mode");

    var switchToggle = $("<input/>")
      .attr("type", "checkbox")
      .attr("data-toggle", "toggle");
    label1.append(switchToggle);
    menuItem1.append(label1);
    dropDownMenu.append(menuItem1);

    var line_break = $("<br/>");
    dropDownMenu.append(line_break);

    var menuItem2 = $("<li/>");
    var label2 = $("<label/>");
    label2.text("High Contrast");
    var switchToggle2 = $("<input/>")
      .attr("type", "checkbox")
      .attr("data-toggle", "toggle");

    label2.append(switchToggle2);
    menuItem2.append(label2);
    dropDownMenu.append(menuItem2);

    themeButton.parent().append(dropDownMenu);

    $(document).on("click", "#theme", function(e) {
      e.stopPropagation();
    });
    $(document).on("click", "#theme_dropdown", function(e) {
      e.stopPropagation();
    });

    console.log("Menu created");
  };

  return ThemeObj;
});