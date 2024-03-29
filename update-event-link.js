function eventScript() {
  if (typeof jQuery != "undefined") {
    jQuery(document).ready(function ($) {
      $.fn.eventLink = function (options) {
        var settings = $.extend(
          {
            url: "#"
          },
          options
        );
        return this.replaceWith(
          '<a style="display:inline-block;" class="non-default-link btn btn-primary btn-primary-undefined btn-undefined-theme btn-reset" href="' +
            settings.url +
            '" target="_blank">Register</a>'
        );
      };
      $.noConflict();
    });
  } else {
    setTimeout(function () {
      eventScript();
    }, 750);
  }
}
window.onload = eventScript();
