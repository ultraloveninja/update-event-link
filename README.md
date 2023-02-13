# Update Event Link

This is a simple jQuery plugin that allows to udpdate the event link and replaces the button on an event page.

Comes in two parts; the main script and then the other part to embed to change the link on window load.

To start, add the jsdelivr URL:

[URL]

then add the script:

[SCRIPT]

replace `YOUR NEW URL HERE` with the URL that you want to add/replace.

Since we are placing this before jQuery is loaded, we need to wait for jQuery to load before this script executes. So that's the reason for all the extra stuff.

