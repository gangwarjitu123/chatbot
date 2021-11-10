$(document).ready(function () {
    $('input[type="number"]').val('');
});
//$(document).on('click', '.StartBtn', function () {
//    $(this).fadeOut();
//    $('.isUserMSG').fadeIn();
//    $('.typeLoader').fadeIn();
//    setTimeout(function () {
//        $('.typeLoader').fadeOut();
//        $('.InputAge').fadeIn();
//    }, 300)
//    $("article").removeClass("active");
//    $("article:last").prev().addClass("previous");
//    $("article:last").addClass("active");
//    $('input[type="number"]').val('');
//});
$(document).on('change', 'input[type="number"]', function () {
    ValidateAgeInput($(this));
});
$(document).on('keyup', 'input[type="number"]', function () {
    ValidateAgeInput($(this));
});

function ValidateAgeInput(ObjThis) {
    var _this = $(ObjThis);
    var maxVal = $(ObjThis).attr('data-max');
    var minVal = $(ObjThis).attr('data-min');
    var Value = parseInt($.trim(_this.val()));
    var _thisFooterDiv = _this.parent().parent().parent().parent().parent().parent().parent().parent().find(".msg_footer");
    if (Value < minVal || Value === "" || isNaN(Value) || Value > maxVal) {
        _this.parent().find(".validate_icon_button").fadeIn();
        _this.parent().find(".btn_age_send").fadeOut();
        _thisFooterDiv.find(".validate_Msg").fadeIn();
    } else {
        _this.parent().find(".validate_icon_button").fadeOut();
        _this.parent().find(".btn_age_send").fadeIn();
        _thisFooterDiv.find(".validate_Msg").fadeOut();
    }
}
//$(document).on('keyup', function (e) {
//    var code = e.keyCode || e.which;
//    if (code == 13) {
//        var val = $('#ageInput').val();
//        SelectedValue(val);
//        ValidateAgeInput($(this));
//        $('html, body').animate({
//            scrollTop: $(".chat_main_container").height()
//        }, 1000);
//    }
//});
$(document).on('mouseenter', 'section', function () {
    $('.back_btn').addClass('show');
});
$(document).on('mouseleave', 'section', function () {
    $('.back_btn').removeClass('show');
});
$(document).on('click', '.option_Msg_item', function () {
    $(this).toggleClass('selected');
});

function SelectedValue(value) {
    var htmlRow = '';
    htmlRow += '<article class="right-msg message isUserMSG" style="display: none;">';
    htmlRow += '<div class="message-content reverse">';
    htmlRow += '<div class="msg_content_item is-reverse is-shape-rounded is-author-user">';
    htmlRow += '<svg class="MessageBubble__Decorator" xmlns="http://www.w3.org/2000/svg" width="16" height="28" viewBox="0 0 16 28">';
    htmlRow += '<title> Path</title>';
    htmlRow += '<desc> Created with Sketch.</desc>';
    htmlRow += '<g fill="none">';
    htmlRow += '<path d="M5 0.2C5 10 5 16.6 5 20 5 23.4 3.3 25.8 0 27.2 10.5 27.8 15.8 24.8 15.8 18.4 15.8 16.3 15.8 10.3 15.8 0.2L5 0.2Z"fill="#f8e61c"></path>';
    htmlRow += '</g>';
    htmlRow += '</svg>';
    htmlRow += '<div class="MessageBubble__content">';
    htmlRow += '<div class="sc-cBoqAE jowtfi MessageBubbleText content ">'+value+'</div>';
    htmlRow += '</div>';
    htmlRow += '</div>';
    htmlRow += '<div class="message-right">';
    htmlRow += '<span class="mBtw MessageDate is-size-7">';
    htmlRow += '<b class="MessageDate__text">21:08</b>';
    htmlRow += '</span>';
    htmlRow += '</div>';
    htmlRow += '</div>';
    htmlRow += '</article>';
    $(htmlRow).insertBefore($('article:last'));
    $('article.right-msg:last').fadeIn(300);
    $('.typeLoader').show();
    setTimeout(function(){
        $('article.left-msg:last').fadeIn();
        $('.typeLoader').hide();
    },500)
}