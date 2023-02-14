# Update Event Link

This is a simple jQuery plugin that replaces an element with a custom link.

Comes in two parts; the main script and then the other part to embed to change the link on window load.

To start, add the jsdelivr URL:

`<script src="https://cdn.jsdelivr.net/gh/ultraloveninja/update-event-link@main/update-event-link.js"></script>`

then add the script:

```
<script>
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
</script>
```

replace `YOUR NEW URL HERE` with the URL that you want to add/replace.

Since we are placing this before jQuery is loaded, we need to wait for jQuery to load before this script executes. So that's the reason for all the extra stuff.

