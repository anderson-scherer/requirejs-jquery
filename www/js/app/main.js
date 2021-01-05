define(["jquery", "jquery.alpha", "jquery.beta"], function ($) {
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
    $(function () {
        console.warn("Main jQuery version : ", $().jquery);
        $('#app').alpha().beta();
    });
});
