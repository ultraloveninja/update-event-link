function initScripts() {
  if (typeof jQuery != "undefined") {
    jQuery(document).ready(function ($) {
      $(".jYfoBK .btn-wrapper").eventLink({
        url: "https://google.com"
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
