function initScripts() {
  if (typeof jQuery != "undefined") {
    jQuery(document).ready(function ($) {
      $(".jYfoBK .btn-wrapper").eventLink({
        url: "ADD LINK HERE"
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
