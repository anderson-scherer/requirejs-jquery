define(["jquery", "jquery.inputmask"], function ($, inputmask) {
  $.fn.beta = function () {
    $(this).append('<p>Beta is Go!</p>');
    $(this).append('<input type="text" id="money" placeholder="Algum valor númerico"/><br>');

    var $money = $("#money");
    $money.inputmask("9999999")
  };
});
