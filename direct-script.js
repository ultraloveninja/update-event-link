function initScripts() {
  if (typeof jQuery != "undefined") {
    jQuery(document).ready(function ($) {
      $(".jYfoBK .btn-wrapper").eventLink({
        url: "YOUR NEW URL HERE"
      });
      $.noConflict();
    });
  } else {
    setTimeout(function () {
      initScripts();
    }, 950);
  }
}
window.onload = initScripts();
