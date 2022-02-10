var substr = [];
var ageinyear = 0;
var heightincm = 0;
var bloodinstool = '';
var dehydration_graterthan2 = '';
var diarrhoeadays = 0;
var weight = 0.1;
var ageinmonth = 0;
var symtoms = '';
var covidtest = '';
var contactwithcovid = '';
var feversince = 0;
var breathcount = 0;
var nasalflaring = '';
var presentingwith = '';
var pulserateapplicable = '';
var pulserate = 0;
var crt = 0;
var noiseduringbreathing = '';
var severechestindrawing = '';
var temperature = '';
var spo2applicable = '';
var spo2rate = 0;
var covidantigentest = '';
var lookforassociated = '';
var historycondition = '';
var symptoms_lessthan2 = '';
var symptoms_greterthan2 = '';
var gds = '';



var cQuestionId = 0;
var JData = [];
$(document).ready(function () {
    JData = LoadJsonData();
    LoadWellcomeMessage();
});


function LoadJsonData() {
    var jsonIssues;
    $.ajax({
        url: "data3.json",
        async: false,
        dataType: 'json',
        success: function (data) {
            jsonIssues = data.Questions;
        }
    });
    return jsonIssues;
}

function LoadCardOptionQuestion(data) {
    $('.typeLoader').fadeIn();
    $('.back_btn').removeClass('show');
    var htmtxt = '';
    htmtxt += '<article class="left-msg message InputOption">';
    htmtxt += '<div class="msg_container">';
    htmtxt += '<div class="">';
    htmtxt += '<figure class="image is-35x35 img_scale Avatar">';
    htmtxt += '<img alt="" class="Media is-contain" src="images/doc_icon.png"></figure></div>';
    htmtxt += '<div class="message-content">';
    htmtxt += '<div class="msg_content_item  is-shape-rounded">';
    htmtxt += '<svg class="MessageBubble__Decorator" xmlns="http://www.w3.org/2000/svg" width="16" height="28"';
    htmtxt += 'viewBox="0 0 16 28">';
    htmtxt += '<title> Path</title>';
    htmtxt += '<desc> Created with Sketch.</desc>';
    htmtxt += '<g fill="none"><path d="M5 0.2C5 10 5 16.6 5 20 5 23.4 3.3 25.8 0 27.2 10.5 27.8 15.8 24.8 15.8 18.4 15.8 16.3 15.8 10.3 15.8 0.2L5 0.2Z"fill="#FFF"></path></g></svg>';
    htmtxt += '<div class="MessageBubble__content">';
    htmtxt += '<div style="max-width: 100%;"><div class="content is-marginless">';
    htmtxt += data.dmessage;
    htmtxt += '</div></div></div></div></div></div>';
    htmtxt += '<div class="msg_footer"><div class="chatMSGtime">03:15</div><div class="validate_Msg">choose at least 1 and up to 9</div></div>';
    if (data.cards[0].items.length > 0) {
        var cardItem = data.cards[0].items;
        htmtxt += '<div class="option_Msg">';
        htmtxt += '<div class="option_Msg_content">';
        for (var i = 0; i < cardItem.length; i++) {
            htmtxt += '<div onclick="setsendbutton(this);" class="option_Msg_item">' + cardItem[i].name + '</div>';
        }
        htmtxt += '</div>';
        htmtxt += '<div class="btn_container"><div class="btn cardtype" data-obj="' + data.objname + '" data-parentid="' + data.parentid + '"  data-curentqid="' + data.id + '"  data-var="' + data.cards[0].click + '" onclick="AskNextQuestionCardOption(this);" style="display: none;">Send</div></div>';
        htmtxt += '</div>';
    }
    htmtxt += '<div class="back_btn_container">';
    htmtxt += '<button type="button" data-parentid="' + data.parentid + '" onclick="loadBackquestion(this);"  class="back_btn">Back</button>';
    htmtxt += '</div>';
    htmtxt += '</article>';
    setTimeout(function () {
        $('.typeLoader').fadeOut();
        $('.back_btn').removeClass('show');
        $('#mainsection').append(htmtxt).fadeIn().slideDown(1000);
        ScrollDown();
    }, 1000)
}

function LoadQuestion(data) {
    $('.typeLoader').fadeIn();
    $('.back_btn').removeClass('show');
    var htmtxt = '';
    htmtxt += '<article class="left-msg message">';
    htmtxt += '<div class="msg_container">';
    htmtxt += '<div class="">';
    htmtxt += '<figure class="image is-35x35 img_scale Avatar">';
    htmtxt += '<img alt="" class="Media is-contain" src="images/doc_icon.png">';
    htmtxt += '</figure>';
    htmtxt += '</div>';
    htmtxt += '<div class="message-content">';
    htmtxt += '<div class="msg_content_item  is-shape-rounded">';
    htmtxt += '<svg class="MessageBubble__Decorator" xmlns="http://www.w3.org/2000/svg" width="16" height="28"';
    htmtxt += 'viewBox="0 0 16 28">';
    htmtxt += '<title> Path</title>';
    htmtxt += '<desc> Created with Sketch.</desc>';
    htmtxt += '<g fill="none">';
    htmtxt += '<path d="M5 0.2C5 10 5 16.6 5 20 5 23.4 3.3 25.8 0 27.2 10.5 27.8 15.8 24.8 15.8 18.4 15.8 16.3 15.8 10.3 15.8 0.2L5 0.2Z"';
    htmtxt += 'fill="#FFF"></path>';
    htmtxt += '</g>';
    htmtxt += '</svg>';
    htmtxt += '<div class="MessageBubble__content">';
    htmtxt += '<div style="max-width: 100%;">';
    htmtxt += '<div class="content is-marginless">';
    htmtxt += data.dmessage;
    if (data.input.length > 0) {
        htmtxt += '<p>';
        htmtxt += '<div class="input_content inputsend">';
        if (data.input[0].format == "auto")
            htmtxt += '<input type="number" class="input is-animate-messages-on inputdata" data-max="' + data.input[0].max + '" data-min="' + data.input[0].min + '" />';
        else
            htmtxt += '<input type="text" class="input is-animate-messages-on inputdata" data-max="' + data.input[0].max + '" data-min="' + data.input[0].min + '" />';

        htmtxt += '<button type="button" class="icon_btn btn_age_send" data-obj="' + data.objname + '" data-parentid="' + data.parentid + '" data-curentqid="' + data.id + '" data-var="' + data.input[0].click + '" onclick="AskNextQuestionInput(this);">';
        htmtxt += '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" x="3650"y="3688">';
        htmtxt += '<path fill="#af8490" d="M1.1 21.757l22.7-9.73L1.1 2.3l.012 7.912 13.623 1.816-13.623 1.817-.01 7.912z"></path></svg></button>';
        htmtxt += '<div class="icon_btn validate_icon_button padding_0" style="display: none;">';
        htmtxt += '<svg xml:space="preserve" viewBox="0 0 100 100" y="0" x="0"';
        htmtxt += 'xmlns="http://www.w3.org/2000/svg" id="Layer_1" version="1.1"';
        htmtxt += 'style="background: rgb(255, 255, 255) none repeat scroll 0% 0%;"';
        htmtxt += 'width="50px" height="35px">';
        htmtxt += '<g style="transform-origin: 50% 50% 0px; transform: rotate(0deg) scale(0.8);"';
        htmtxt += 'class="ldl-scale">';
        htmtxt += '<g class="ldl-ani">';
        htmtxt += '<linearGradient y2="85.807" x2="51.618" y1="37.807"';
        htmtxt += 'x1="36.618" gradientUnits="userSpaceOnUse"';
        htmtxt += 'id="SVGID_1_">';
        htmtxt += '<stop stop-color="#e15c64" offset="0"';
        htmtxt += 'style="stop-color: rgb(235, 223, 60); fill: rgb(235, 223, 60);">';
        htmtxt += '</stop>';
        htmtxt += '<stop stop-color="#b0484f" offset="1"';
        htmtxt += 'style="stop-color: rgb(235, 223, 60); fill: rgb(235, 223, 60);">';
        htmtxt += '</stop>';
        htmtxt += '</linearGradient>';
        htmtxt += '<g class="ldl-layer">';
        htmtxt += '<g class="ldl-ani"';
        htmtxt += 'style="transform-origin: 50px 50px 0px; animation: 1.11111s linear -1.11111s infinite normal forwards running static-75f7fad1-5fd4-4122-8a31-76b7e68e98b2;">';
        htmtxt += '<path stroke-miterlimit="10" stroke-width="3.5"';
        htmtxt += 'stroke="#323232" fill="url(#SVGID_1_)"';
        htmtxt += 'd="M44.859 16.397L9.485 77.667c-2.285 3.957.571 8.904 5.141 8.904h70.748c4.57 0 7.425-4.947 5.141-8.904l-35.374-61.27c-2.285-3.957-7.997-3.957-10.282 0z"';
        htmtxt += 'style="stroke: rgb(50, 50, 50);"></path>';
        htmtxt += '</g></g><g class="ldl-layer"><g class="ldl-ani"><g>';
        htmtxt += '<g class="ldl-layer"><g class="ldl-ani"';
        htmtxt += 'style="transform-origin: 50px 50px 0px; animation: 1.11111s linear -1.11111s infinite normal forwards running static-75f7fad1-5fd4-4122-8a31-76b7e68e98b2;">';
        htmtxt += '<path fill="#fff"';
        htmtxt += 'd="M53.4 68.511l.6 3.906a4.048 4.048 0 0 1-8 1.23 4.183 4.183 0 0 1 0-1.229l.6-3.906a3.44 3.44 0 0 1 6.8-.001z"';
        htmtxt += 'style="fill: rgb(0, 0, 0);"></path></g></g></g></g></g>';
        htmtxt += '<g class="ldl-layer"><g class="ldl-ani"><g><g class="ldl-layer"><g class="ldl-ani"';
        htmtxt += 'style="transform-origin: 50px 50px 0px; animation: 1.11111s linear -1.11111s infinite normal forwards running static-75f7fad1-5fd4-4122-8a31-76b7e68e98b2;">';
        htmtxt += '<path fill="#fff"';
        htmtxt += 'd="M54 40.417l-1.2 17.28a2.807 2.807 0 0 1-5.6 0L46 40.417a4.01 4.01 0 1 1 8 0z"';
        htmtxt += 'style="fill: rgb(0, 0, 0);"></path></g></g></g></g></g>';
        htmtxt += '<metadata xmlns:d="https://loading.io/stock/"><d:name>fail</d:name><d:tags>';
        htmtxt += 'fail,reject,deny,negative,refuse,error,cancel,drop,warning';
        htmtxt += '</d:tags><d:license>by</d:license><d:slug>oiotst</d:slug></metadata></g></g></svg></div></div>';
        htmtxt += '</p>';
        htmtxt += '<p class="input_info inputsend">Press enter to send</p>';
    }
    htmtxt += '</div>';
    htmtxt += '</div>';
    htmtxt += '</div>';
    htmtxt += '</div>';
    htmtxt += '</div>';
    htmtxt += '</div>';

    if (data.buttons.length > 0) {
        htmtxt += '<div class="btn_group">';
        for (var i = 0; i < data.buttons.length; i++) {
            htmtxt += '<button onclick="AskmultibuttonQuestion(this);" class="btn" data-obj="' + data.objname + '" data-parentid="' + data.parentid + '" data-curentqid="' + data.id + '" data-setval="' + data.buttons[i].val + '" data-text="' + data.buttons[i].text + '" data-var="' + data.buttons[i].click + '">' + data.buttons[i].text + '</button>';
        }
        htmtxt += '</div>';
    }

    htmtxt += '<div class="back_btn_container">';
    htmtxt += '<button type="button" data-parentid="' + data.parentid + '" onclick="loadBackquestion(this);" class="back_btn">Back</button>';
    htmtxt += '</div>';
    htmtxt += '</article>';
    setTimeout(function () {
        $('.typeLoader').fadeOut();
        $('#mainsection').append(htmtxt).fadeIn().slideDown(1000);
        ScrollDown();
    }, 1000)
}


function LoadUserSentMessage(message) {
    var htmtxt = '';
    var now = new Date(Date.now());
    var formatted = now.getHours() + ":" + now.getMinutes();
    htmtxt += '<article class="right-msg message isUserMSG">';
    htmtxt += '<div class="message-content reverse">';
    htmtxt += '<div class="msg_content_item is-reverse is-shape-rounded is-author-user">';
    htmtxt += '<svg class="MessageBubble__Decorator" xmlns="http://www.w3.org/2000/svg" width="16" height="28"';
    htmtxt += 'viewBox="0 0 16 28">';
    htmtxt += '<title> Path</title>';
    htmtxt += '<desc> Created with Sketch.</desc>';
    htmtxt += '<g fill="none">';
    htmtxt += '<path d="M5 0.2C5 10 5 16.6 5 20 5 23.4 3.3 25.8 0 27.2 10.5 27.8 15.8 24.8 15.8 18.4 15.8 16.3 15.8 10.3 15.8 0.2L5 0.2Z"fill="#f8e61c"></path>';
    htmtxt += '</g>';
    htmtxt += '</svg>';
    htmtxt += '<div class="MessageBubble__content">';
    htmtxt += '<div class="sc-cBoqAE jowtfi MessageBubbleText content">' + message + '</div>';
    htmtxt += '</div>';
    htmtxt += '</div>';
    htmtxt += '<div class="message-right">';
    htmtxt += '<span class="mBtw MessageDate is-size-7">';
    htmtxt += '<b class="sc-EZqKI iONckA MessageDate__text">' + formatted + '</b>';
    htmtxt += '</span>';
    htmtxt += '</div>';
    htmtxt += '</div>';
    htmtxt += '</article>';
    setTimeout(function () {
        $('#mainsection').append(htmtxt).fadeIn().slideDown(500);
        ScrollDown();
    }, 500)

}

function AskNextQuestion(objthis) {
    var cQid = $(objthis).attr('data-var');
    var qtext = $(objthis).attr('data-text');
    var dataobj = $(objthis).attr('data-obj');
    var data = GetQuestionById(JData, cQid);
    var curentqid = $(objthis).attr('data-curentqid');
    $('#txtpreviousid').val(curentqid);
    substr.push(curentqid);
    var currentQuestion = GetQuestionById(JData, curentqid);
    switch (dataobj) {
        case 'ageinyear':
            ageinyear = qtext
            break;
        case 'ageinmonth':
            ageinmonth = qtext
            break;
        case 'heightincm':
            heightincm = qtext
            break;
        case 'dehydration_graterthan2':
            dehydration_graterthan2 = qtext
            break;
        case 'bloodinstool':
            bloodinstool = qtext
            break;
        case 'diarrhoeadays':
            diarrhoeadays = qtext
            break;
        case 'symptoms_lessthan2':
            symptoms_lessthan2 = qtext
            break;
        case 'symptoms_greterthan2':
            symptoms_greterthan2 = qtext
            break;
        case 'gds':
            gds = qtext
            break;
        case 'weight':
            weight = qtext
            break;
        case 'symtoms':
            symtoms = qtext
            break;
        case 'covidtest':
            covidtest = qtext
            break;
        case 'contactwithcovid':
            contactwithcovid = qtext
            break;
        case 'feversince':
            feversince = qtext
            break;
        case 'breathcount':
            breathcount = qtext
            break;
        case 'nasalflaring':
            nasalflaring = qtext
            break;
        case 'pulserateapplicable':
            pulserateapplicable = qtext
            break;
        case 'pulserate':
            pulserate = qtext
            break;
        case 'crt':
            crt = qtext
            break;
        case 'noiseduringbreathing':
            noiseduringbreathing = qtext
            break;
        case 'severechestindrawing':
            severechestindrawing = qtext
            break;
        case 'temperature':
            temperature = qtext
            break;
        case 'spo2applicable':
            spo2applicable = qtext
            break;
        case 'spo2rate':
            spo2rate = qtext
            break;
        case 'covidantigentest':
            covidantigentest = qtext
            break;
        case 'lookforassociated':
            lookforassociated = qtext
            break;
        case 'historycondition':
            historycondition = qtext
            break;
        default:
            break;
    }
    LoadUserSentMessage(qtext);
    if (data.cards.length > 0) {
        LoadCardOptionQuestion(data);
    }
    else {
        LoadQuestion(data);
    }
    $(objthis).hide();
    AddLog(qtext, currentQuestion.message, dataobj, qtext);
}
function AskmultibuttonQuestion(objthis) {
    var dataobj = $(objthis).attr('data-obj');
    var cQid = $(objthis).attr('data-var');
    var qtext = $(objthis).attr('data-text');
    var setval = $(objthis).attr('data-setval');
    var curentqid = $(objthis).attr('data-curentqid');
    $('#txtpreviousid').val(curentqid);
    substr.push(curentqid);
    var currentQuestion = GetQuestionById(JData, curentqid);

    switch (dataobj) {
        case 'ageinyear':
            ageinyear = setval
            break;
        case 'ageinmonth':
            ageinmonth = setval
            break;
        case 'heightincm':
            heightincm = setval
            break;
        case 'dehydration_graterthan2':
            dehydration_graterthan2 = setval
            break;
        case 'bloodinstool':
            bloodinstool = setval
            break;
        case 'diarrhoeadays':
            diarrhoeadays = setval
            break;
        case 'symptoms_lessthan2':
            symptoms_lessthan2 = setval
            break;
        case 'symptoms_greterthan2':
            symptoms_greterthan2 = setval
            break;
        case 'gds':
            gds = setval
            break;
        case 'weight':
            weight = setval
            break;
        case 'symtoms':
            symtoms = setval
            break;
        case 'covidtest':
            covidtest = setval
            break;
        case 'contactwithcovid':
            contactwithcovid = setval
            break;
        case 'feversince':
            feversince = setval
            break;
        case 'breathcount':
            breathcount = setval
            break;
        case 'nasalflaring':
            nasalflaring = setval
            break;
        case 'pulserateapplicable':
            pulserateapplicable = setval
            break;
        case 'pulserate':
            pulserate = setval
            break;
        case 'crt':
            crt = setval
            break;
        case 'noiseduringbreathing':
            noiseduringbreathing = setval
            break;
        case 'severechestindrawing':
            severechestindrawing = setval
            break;
        case 'temperature':
            temperature = setval
            break;
        case 'spo2applicable':
            spo2applicable = setval
            break;
        case 'spo2rate':
            spo2rate = setval
            break;
        case 'covidantigentest':
            covidantigentest = setval
            break;
        case 'lookforassociated':
            lookforassociated = setval
            break;
        case 'historycondition':
            historycondition = setval
            break;
        default:
            break;
    }
    if (curentqid == 17) {
        if (covidtest == "Positive") {
            cQid = 19;
        }
        else {
            cQid = 18;
        }
    }
    if (curentqid == 38) {
        if (covidtest == "Positive") {
            cQid = 42;
        }
        else {
            cQid = 39;
        }
    }
    if (curentqid == 52) {
        if (symptoms_lessthan2.indexOf('Diarrhoea') != -1) {
            cQid = 53;
        }
        else {
            cQid = 54;
        }
    }
    if (curentqid == 81) {
        if (bloodinstool == "Yes") {
            if (symptoms_greterthan2.indexOf('Fever') != -1) {
                cQid = 83;
            }
            else {
                if (gds.indexOf('None') != -1) {
                    cQid = 86;
                }
                else {
                    cQid = 500;
                }
            }
        }
        else {
            cQid = 82;
        }
    }
    if (curentqid == 79) {
        if (symptoms_greterthan2.indexOf('Diarrhoea') != -1) {
            cQid = 80;
        } else if (symptoms_greterthan2.indexOf('Fever') != -1) {
            cQid = 83;
        }
        else {
            if (gds.indexOf('None') != -1) {
                cQid = 86;
            }
            else {
                cQid = 500;
            }
        }
    }
    if (curentqid == 85) {
        if (gds.indexOf('None') != -1) {
            cQid = 86;
        }
        else {
            cQid = 500;
        }
    }
    if (cQid == 400 || cQid == 500 || cQid == 300 || cQid == 200) {
        $.ajax({
            type: "POST",
            async: false,
            url: '/Home/GetSummary',
            datatype: 'json',
            data: { id: cQid },
            success: function (reponse) {
                var Items = reponse.Item;
                for (var i = 0; i < Items.length; i++) {
                    PrintChat(Items[i].item);
                }
                restvaiable();
                var data = GetQuestionById(JData, 2001);

                if (data.cards.length > 0) {
                    LoadCardOptionQuestion(data);
                }
                else {
                    LoadQuestion(data);
                }
            },
            error: function (result) {
            }
        });
    }
    else {

        var data = GetQuestionById(JData, cQid);
        LoadUserSentMessage(qtext);
        if (data.cards.length > 0) {
            LoadCardOptionQuestion(data);

        }
        else {
            LoadQuestion(data);
        }
        $(objthis).parent().hide();
        $(objthis).parent().parent().find('.inputsend').slideUp('fast');
        AddLog(qtext, currentQuestion.message, dataobj, setval);
    }
}
function AskNextQuestionInput(objthis) {
    var cQid = $(objthis).attr('data-var');
    var dataobj = $(objthis).attr('data-obj');
    var qtext = $(objthis).parent().find('.inputdata').val();
    var curentqid = $(objthis).attr('data-curentqid');
    $('#txtpreviousid').val(curentqid);
    substr.push(curentqid);
    switch (dataobj) {
        case 'ageinyear':
            ageinyear = qtext
            break;
        case 'ageinmonth':
            ageinmonth = qtext
            break;
        case 'heightincm':
            heightincm = qtext
            break;
        case 'dehydration_graterthan2':
            dehydration_graterthan2 = qtext
            break;
        case 'bloodinstool':
            bloodinstool = qtext
            break;
        case 'diarrhoeadays':
            diarrhoeadays = qtext
            break;
        case 'symptoms_lessthan2':
            symptoms_lessthan2 = qtext
            break;
        case 'symptoms_greterthan2':
            symptoms_greterthan2 = qtext
            break;
        case 'gds':
            gds = qtext
            break;
        case 'weight':
            weight = qtext
            break;
        case 'symtoms':
            symtoms = qtext
            break;
        case 'covidtest':
            covidtest = qtext
            break;
        case 'contactwithcovid':
            contactwithcovid = qtext
            break;
        case 'feversince':
            feversince = qtext
            break;
        case 'breathcount':
            breathcount = qtext
            break;
        case 'nasalflaring':
            nasalflaring = qtext
            break;
        case 'pulserateapplicable':
            pulserateapplicable = qtext
            break;
        case 'pulserate':
            pulserate = qtext
            break;
        case 'crt':
            crt = qtext
            break;
        case 'noiseduringbreathing':
            noiseduringbreathing = qtext
            break;
        case 'severechestindrawing':
            severechestindrawing = qtext
            break;
        case 'temperature':
            temperature = qtext
            break;
        case 'spo2applicable':
            spo2applicable = qtext
            break;
        case 'spo2rate':
            spo2rate = qtext
            break;
        case 'covidantigentest':
            covidantigentest = qtext
            break;
        case 'lookforassociated':
            lookforassociated = qtext
            break;
        case 'historycondition':
            historycondition = qtext
            break;
        default:
            break;
    }

    if (curentqid == 25) {
        if (ageinyear == 0) {
            cQid = 26;
        }
    }
    if (curentqid == 70) {
        if (ageinyear == 0) {
            cQid = 71;
        }
        else
            cQid = 72;
    }
    if (curentqid == 80) {
        if (diarrhoeadays <= 13) {
            cQid = 81;
        }
    }
    if (curentqid == 87) {
        if (ageinyear > 0 || ageinmonth > 5) {
            cQid = 88;
        }
        else
            cQid = 89;
    }
    var data = GetQuestionById(JData, cQid);
    var currentQuestion = GetQuestionById(JData, curentqid);

    LoadUserSentMessage(qtext);
    if (data.cards.length > 0) {
        LoadCardOptionQuestion(data);

    }
    else {
        LoadQuestion(data);
    }
    $(objthis).parent().hide();
    //$(objthis).parent().parent().find('.inputsend').hide();
    $(objthis).parent().parent().find('.inputsend').slideUp('fast');
    AddLog(qtext, currentQuestion.message, dataobj, qtext);
}
function AskNextQuestionCardOption(objthis) {
    var currentQId = $(objthis).attr('data-curentqid');
    $('#txtpreviousid').val(currentQId);
    substr.push(currentQId);
    var dataobj = $(objthis).attr('data-obj');
    var cQid = $(objthis).attr('data-var');
    var qtext = '';

    var nextQuestionId = 0;
    var ccount = 0;
    var cardDiv = $(objthis).parent().parent().find('.option_Msg_content');
    $(cardDiv).find('.selected ').each(function () {
        if (ccount == 0) {
            qtext = qtext + $(this).text();
        }
        else {
            qtext = qtext + ',' + $(this).text();
        }
        ccount++;
    });

    var currentQuestion = GetQuestionById(JData, currentQId)

    var condition = currentQuestion.conditions;

    switch (dataobj) {
        case 'ageinyear':
            ageinyear = qtext
            break;
        case 'ageinmonth':
            ageinmonth = qtext
            break;
        case 'heightincm':
            heightincm = qtext
            break;
        case 'dehydration_graterthan2':
            dehydration_graterthan2 = qtext
            break;
        case 'bloodinstool':
            bloodinstool = qtext
            break;
        case 'diarrhoeadays':
            diarrhoeadays = qtext
            break;
        case 'symptoms_lessthan2':
            symptoms_lessthan2 = qtext
            break;
        case 'symptoms_greterthan2':
            symptoms_greterthan2 = qtext
            break;
        case 'gds':
            gds = qtext
            break;
        case 'weight':
            weight = qtext
            break;
        case 'symtoms':
            symtoms = qtext
            break;
        case 'covidtest':
            covidtest = qtext
            break;
        case 'contactwithcovid':
            contactwithcovid = qtext
            break;
        case 'feversince':
            feversince = qtext
            break;
        case 'breathcount':
            breathcount = qtext
            break;
        case 'nasalflaring':
            nasalflaring = qtext
            break;
        case 'presentingwith':
            presentingwith = qtext
            break;
        case 'pulserateapplicable':
            pulserateapplicable = qtext
            break;
        case 'pulserate':
            pulserate = qtext
            break;
        case 'crt':
            crt = qtext
            break;
        case 'noiseduringbreathing':
            noiseduringbreathing = qtext
            break;
        case 'severechestindrawing':
            severechestindrawing = qtext
            break;
        case 'temperature':
            temperature = qtext
            break;
        case 'spo2applicable':
            spo2applicable = qtext
            break;
        case 'spo2rate':
            spo2rate = qtext
            break;
        case 'covidantigentest':
            covidantigentest = qtext
            break;
        case 'lookforassociated':
            lookforassociated = qtext
            break;
        case 'historycondition':
            historycondition = qtext
            break;
        default:
            break;
    }


    if (currentQId == 6) {
        if (qtext.indexOf('Fever') != -1) {
            cQid = 7;
        } else {
            cQid = 8;
        }
    }
    if (currentQId == 28) {
        if (qtext.indexOf('Fever') != -1) {
            cQid = 29;
        } else {
            cQid = 30;
        }
    }
    if (currentQId == 50) {
        if (qtext.indexOf('Jaundice') != -1) {
            cQid = 51;
        }
        else if (qtext.indexOf('Diarrhoea') != -1) {
            cQid = 53;
        }
        else {
            cQid = 54;
        }
    }
    if (currentQId == 75) {
        if (qtext.indexOf('Cough or Difficulty in breathing') != -1) {
            cQid = 76;
        }
        else if (qtext.indexOf('Diarrhoea') != -1) {
            cQid = 80;
        } else if (qtext.indexOf('Fever') != -1) {
            cQid = 83;
        }
        else {
            if (gds.indexOf('None') != -1) {
                cQid = 86;
            }
            else {
                cQid = 500;
            }
        }
    }
    if (currentQId == 82) {
        if (symptoms_greterthan2.indexOf('Fever') != -1) {
            cQid = 83;
        }
        else {
            if (gds.indexOf('None') != -1) {
                cQid = 86;
            }
            else {
                cQid = 500;
            }
        }
    }
    //if (currentQId == 19) {
    //    cQid = 20;
    //}


    if (nextQuestionId == 0) {
        nextQuestionId = cQid;
    }
    LoadUserSentMessage(qtext);
    AddLog(qtext, currentQuestion.message, dataobj, qtext);

    if (cQid == 400 || cQid == 500 || cQid == 300 || cQid == 200) {
        $.ajax({
            type: "POST",
            async: false,
            url: '/Home/GetSummary',
            datatype: 'json',
            data: { id: cQid },
            success: function (reponse) {
                var Items = reponse.Item;
                for (var i = 0; i < Items.length; i++) {
                    PrintChat(Items[i].item);
                }
                restvaiable();
                var data = GetQuestionById(JData, 2001);

                if (data.cards.length > 0) {
                    LoadCardOptionQuestion(data);
                }
                else {
                    LoadQuestion(data);
                }
            },
            error: function (result) {
            }
        });
    }
    else {
        var data = GetQuestionById(JData, nextQuestionId);

        $(objthis).parent().parent().hide();
        if (data.cards.length > 0) {
            LoadCardOptionQuestion(data);
        }
        else {
            LoadQuestion(data);
        }
    }
}
function summaryfunMorethen5() {
    var casetype = "mild";
    var flagIf = 0;
    //mild moderate severe
    if (covidtest == 'Yes' || covidantigentest == 'Positive' || contactwithcovid == 'Yes') {
        if (feversince > 2) {
            if (spo2applicable == "Yes" && spo2rate < 91) {
                casetype = "severe";
                flagIf = 1;
            }
        }
    }
    if (flagIf == 0) {
        if (breathcount > 29 && severechestindrawing == "No") {
            if (temperature > 37.4 || temperature < 35.6 || historycondition.indexOf('None') !== -1 || lookforassociated.indexOf('Movement less than normal') !== -1 || lookforassociated.indexOf('Cold Extremities') !== -1) {
                if (spo2applicable == "Yes") {
                    if (spo2rate > 90) {
                        casetype = "moderate";
                    }
                    else {
                        casetype = "severe";
                    }
                }
                else {
                    casetype = "moderate";
                }
            }
        }
        else {
            if (lookforassociated.indexOf('Lethargic or Unconscious') !== -1 || lookforassociated.indexOf('Convulsion or History of convulsion') !== -1 || lookforassociated.indexOf('Unable to drink/feed') !== -1) {
                if (spo2applicable == "Yes") {
                    if (spo2rate > 93) {
                        casetype = "moderate";
                    }
                    else {
                        casetype = "severe";
                    }
                }
                else {
                    casetype = "moderate";
                }
            }
            else {
                if (spo2applicable == "Yes") {
                    if (spo2rate > 93) {
                        casetype = "mild";
                    }
                    else {
                        casetype = "severe";
                    }
                }
                else {
                    casetype = "mild";
                }
            }
        }
    }

    printSummarymorethn5(casetype);

}


function LoadWellcomeMessage() {
    var data = GetQuestionById(JData, 1);
    LoadQuestion(data);
}
function GetQuestionById(jsonObject, id) {

    return jsonObject.filter(function (jsonObject) { return (jsonObject['id'] == id); })[0];
}

//function GetQuestionById(jsonObject, id) {

//    $.ajax({
//        type: "GET",
//         async: false,
//        url: '/Home/GetQuestionById',
//        datatype: 'json',
//        data: { id:id},
//        success: function (reponse) {

//            return reponse;
//        },
//        error: function (result) {
//        }
//    });
//}

function loadBackquestion(objthis) {
    var dataId = 0;
    if (substr.length > 0) {
        dataId = substr.pop();
    }
    else {
        dataId = 1;
    }

    var data = GetQuestionById(JData, dataId);
    LoadUserSentMessage('Back');
    $(objthis).parent().parent().hide();
    if (data.cards.length > 0) {
        LoadCardOptionQuestion(data);
    }
    else {
        LoadQuestion(data);
    }
}

function ScrollDown() {
    $('html, body').animate({
        scrollTop: $(".chat_main_container").height()
    }, 2000);
}
$(document).on('mouseenter', 'article', function () {
    $('.back_btn').removeClass('show');
    $('.back_btn').last().addClass('show');
});
$(document).on('mouseleave', 'article', function () {
    $('.back_btn').removeClass('show');
});

function PrintChat(txtMsg) {
    $('.typeLoader').fadeIn();
    var htmtxt = '';
    htmtxt += '<article class="left-msg message">';
    htmtxt += '<div class="msg_container">';
    htmtxt += '<div class="">';
    htmtxt += '<figure class="image is-35x35 img_scale Avatar">';
    htmtxt += '<img alt="" class="Media is-contain" src="images/doc_icon.png">';
    htmtxt += '</figure>';
    htmtxt += '</div>';
    htmtxt += '<div class="message-content">';
    htmtxt += '<div class="msg_content_item  is-shape-rounded">';
    htmtxt += '<svg class="MessageBubble__Decorator" xmlns="http://www.w3.org/2000/svg" width="16" height="28"';
    htmtxt += 'viewBox="0 0 16 28">';
    htmtxt += '<title> Path</title>';
    htmtxt += '<desc> Created with Sketch.</desc>';
    htmtxt += '<g fill="none">';
    htmtxt += '<path d="M5 0.2C5 10 5 16.6 5 20 5 23.4 3.3 25.8 0 27.2 10.5 27.8 15.8 24.8 15.8 18.4 15.8 16.3 15.8 10.3 15.8 0.2L5 0.2Z"';
    htmtxt += 'fill="#FFF"></path>';
    htmtxt += '</g>';
    htmtxt += '</svg>';
    htmtxt += '<div class="MessageBubble__content">';
    htmtxt += '<div style="max-width: 100%;">';
    htmtxt += '<div class="content is-marginless">';
    htmtxt += txtMsg;
    htmtxt += '</div>';
    htmtxt += '</div>';
    htmtxt += '</div>';
    htmtxt += '</div>';
    htmtxt += '</div>';
    htmtxt += '</div>';

    htmtxt += '</article>';
    setTimeout(function () {
        $('.typeLoader').fadeOut();
        $('#mainsection').append(htmtxt).fadeIn().slideDown(1000);
        ScrollDown();
    }, 1000)
}

function printSummarymorethn5(type) {
    if (type == "mild") {
        var htmtxt = '';
        var htmtxt2 = '';
        var htmtxt3 = '';

        htmtxt += '<p>Home isolation(if not possible - refer to Covid Care Centre)<br />';
        htmtxt += '• Daily teleconsultation with CCC<br />';
        htmtxt += '• Supportive care & rest<br />';
        htmtxt += '• Adequate hydration and continue feeding<br />';
        htmtxt += '• Thrice a day monitoring: SpO2, Respiratory Rate(Breaths count in 1 min), Temperature</p>';
        PrintChat(htmtxt);
        if (covidtest == "Test not done" || covidantigentest == 'Not Conducted') {
            var ddddd = '<p>"Advice for COVID 19 testing "</p>';
            PrintChat(ddddd);
        }
        if (weight >= 4 && weight < 10) {
            var Dosetxt = '<p>PCM 100 mg dose can be given for fever</p>';
            PrintChat(Dosetxt);

        }
        else if (weight >= 10 && weight < 15) {
            var Dosetxt = '<p>PCM 150 mg dose can be given for fever</p>';
            PrintChat(Dosetxt);

        } else if (weight >= 15 && weight < 20) {
            var Dosetxt = '<p>PCM 250 mg dose can be given for fever</p>';
            PrintChat(Dosetxt);

        }
        else if (weight > 20) {
            var Dosetxt = '<p>PCM 500 mg dose can be given for fever</p>';
            PrintChat(Dosetxt);

        }

        htmtxt2 += '<p>Advice to monitor danger sign/s & return immediately if any of following sign/symptoms appear:<br />';
        htmtxt2 += '- SpO 2 < 94<br />';
        htmtxt2 += '- Breaths count in 1 min: more than 29<br />';
        htmtxt2 += '- Difficulty in Breathing<br />';
        htmtxt2 += '- Unremitting fever for 5 days/Temperature > 37.5 C<br />';
        htmtxt2 += '- Temperature <35.5 C<br />';
        htmtxt2 += '- Unable to drink/breastfeed<br />';
        htmtxt2 += '- Child become sick<br />';
        htmtxt2 += '- Blood in stool</p>';

        htmtxt3 += '<p>Home care for cough:<br />';
        htmtxt3 += '- Home made herbal concoction of honey, tulsi, ginger, etc<br />';
        htmtxt3 += '- Stuffy nose could be cleaned with saline nasal drops (by ading 2.5 gm salt in 1 glass of clean drinking water)</p><br />';
        PrintChat(htmtxt2);
        PrintChat(htmtxt3);
    }
    else {
        var htmtxt = '';
        var htmtxt2 = '';
        var htmtxt3 = '';

        htmtxt += '"Give age appropriate dose of Paracetamol for fever >100F"<br />';
        htmtxt += '"Give pre-referral dose of Oral Amoxicillin"<br />';
        htmtxt += '"Refer Immediately to Paediatric DCH/HDU/ICU"<br />';
        htmtxt += '"Make arrangements for referral in a well-equipped ambulance (with oxygen support and trained paramedic) and inform the receiving facility to secure a bed"<br />';
        PrintChat(htmtxt);
        if (covidtest == "Test not done" || covidantigentest == 'Not Conducted') {
            var ddddd = '<p>"Advice for COVID 19 testing "</p>';
            PrintChat(ddddd);
        }
        if (weight < 2) {
            var Dosetxt = '<p>Tab/Syp Amoxicillin : 50 mg</p>';
            PrintChat(Dosetxt);

        }
        else if (weight >= 2 && weight < 3) {
            var Dosetxt = '<p>Tab/Syp Amoxicillin : 62 mg</p>';
            PrintChat(Dosetxt);

        } else if (weight >= 3 && weight < 4) {
            var Dosetxt = '<p>Tab/Syp Amoxicillin : 87 mg</p>';
            PrintChat(Dosetxt);

        }
        else if (weight >= 4 && weight < 6) {
            var Dosetxt = '<p>Tab/Syp Amoxicillin : 125 mg</p><p>Tab/Syp Paracetamol : 100 mg</p>';
            PrintChat(Dosetxt);

        }
        else if (weight >= 6 && weight < 10) {
            var Dosetxt = '<p>Tab/Syp Amoxicillin : 250 mg</p><p>Tab/Syp Paracetamol : 100 mg</p>';
            PrintChat(Dosetxt);

        }
        else if (weight >= 10 && weight < 14) {
            var Dosetxt = '<p>Tab/Syp Amoxicillin : 375 mg</p><p>Tab/Syp Paracetamol : 150 mg</p>';
            PrintChat(Dosetxt);

        }
        else if (weight >= 14 && weight < 20) {
            var Dosetxt = '<p>Tab/Syp Amoxicillin : 500 mg</p><p>Tab/Syp Paracetamol : 250 mg</p>';
            PrintChat(Dosetxt);

        }
        else if (weight > 20) {
            var Dosetxt = '<p>Tab/Syp Amoxicillin : 500 mg</p><p>Tab/Syp Paracetamol : 500 mg</p>';
            PrintChat(Dosetxt);

        }
    }
    restvaiable();
    var data = GetQuestionById(JData, 2001);

    if (data.cards.length > 0) {
        LoadCardOptionQuestion(data);
    }
    else {
        LoadQuestion(data);
    }
}
function printSummaryForLessThe5(type) {
    if (type == "normal") {
        var htmtxt = '';
        var htmtxt2 = '';
        var htmtxt3 = '';

        htmtxt += '<p>Home isolation(if not possible - refer to Covid Care Centre)<br />';
        htmtxt += '• Daily teleconsultation with CCC<br />';
        htmtxt += '• Supportive care & rest<br />';
        htmtxt += '• Adequate hydration and continue feeding<br />';
        htmtxt += '• Thrice a day monitoring: SpO2, Respiratory Rate(Breaths count in 1 min), Temperature</p>';
        PrintChat(htmtxt);
        if (covidtest == "Test not done" || covidantigentest == 'Not Conducted') {
            var ddddd = '<p>"Advice for COVID 19 testing "</p>';
            PrintChat(ddddd);
        }
        if (weight < 4) {

            if (age == 0 && ageinmonth < 2) {
                htmtxt2 += '<p>Advice to monitor danger sign/s & return immediately if any of following sign/symptoms appear:<br />';
                htmtxt2 += '- SpO 2 < 94<br />';
                htmtxt2 += '- Breaths count in 1 min: more than 59<br />';
                htmtxt2 += '- Difficulty in Breathing<br />';
                htmtxt2 += '- Unremitting fever for 5 days/Temperature > 37.5 C<br />';
                htmtxt2 += '- Temperature <35.5 C<br />';
                htmtxt2 += '- Unable to drink/breastfeed<br />';
                htmtxt2 += '- Child become sick<br />';
                htmtxt2 += '- Blood in stool</p>';
            } else if (age == 0 && ageinmonth > 1 && ageinmonth < 12) {
                htmtxt2 += '<p>Advice to monitor danger sign/s & return immediately if any of following sign/symptoms appear:<br />';
                htmtxt2 += '- SpO 2 < 94<br />';
                htmtxt2 += '- Breaths count in 1 min: more than 49<br />';
                htmtxt2 += '- Difficulty in Breathing<br />';
                htmtxt2 += '- Unremitting fever for 5 days/Temperature > 37.5 C<br />';
                htmtxt2 += '- Temperature <35.5 C<br />';
                htmtxt2 += '- Unable to drink/breastfeed<br />';
                htmtxt2 += '- Child become sick<br />';
                htmtxt2 += '- Blood in stool</p>';
            }
            else if (age > 0 && age < 6) {
                htmtxt2 += '<p>Advice to monitor danger sign/s & return immediately if any of following sign/symptoms appear:<br />';
                htmtxt2 += '- SpO 2 < 94<br />';
                htmtxt2 += '- Breaths count in 1 min: more than 39<br />';
                htmtxt2 += '- Difficulty in Breathing<br />';
                htmtxt2 += '- Unremitting fever for 5 days/Temperature > 37.5 C<br />';
                htmtxt2 += '- Temperature <35.5 C<br />';
                htmtxt2 += '- Unable to drink/breastfeed<br />';
                htmtxt2 += '- Child become sick<br />';
                htmtxt2 += '- Blood in stool</p>';
            }
            else {
                htmtxt2 += '<p>Advice to monitor danger sign/s & return immediately if any of following sign/symptoms appear:<br />';
                htmtxt2 += '- SpO 2 < 94<br />';
                htmtxt2 += '- Breaths count in 1 min: more than 29<br />';
                htmtxt2 += '- Difficulty in Breathing<br />';
                htmtxt2 += '- Unremitting fever for 5 days/Temperature > 37.5 C<br />';
                htmtxt2 += '- Temperature <35.5 C<br />';
                htmtxt2 += '- Unable to drink/breastfeed<br />';
                htmtxt2 += '- Child become sick<br />';
                htmtxt2 += '- Blood in stool</p>';
            }
        }
        else if (weight >= 4 && weight < 10) {
            var Dosetxt = '<p>PCM 100 mg dose can be given for fever</p>';
            PrintChat(Dosetxt);

            if (age == 0 && ageinmonth < 2) {
                htmtxt2 += '<p>Advice to monitor danger sign/s & return immediately if any of following sign/symptoms appear:<br />';
                htmtxt2 += '- SpO 2 < 94<br />';
                htmtxt2 += '- Breaths count in 1 min: more than 59<br />';
                htmtxt2 += '- Difficulty in Breathing<br />';
                htmtxt2 += '- Unremitting fever for 5 days/Temperature > 37.5 C<br />';
                htmtxt2 += '- Temperature <35.5 C<br />';
                htmtxt2 += '- Unable to drink/breastfeed<br />';
                htmtxt2 += '- Child become sick<br />';
                htmtxt2 += '- Blood in stool</p>';
            } else if (age == 0 && ageinmonth > 1 && ageinmonth < 12) {
                htmtxt2 += '<p>Advice to monitor danger sign/s & return immediately if any of following sign/symptoms appear:<br />';
                htmtxt2 += '- SpO 2 < 94<br />';
                htmtxt2 += '- Breaths count in 1 min: more than 49<br />';
                htmtxt2 += '- Difficulty in Breathing<br />';
                htmtxt2 += '- Unremitting fever for 5 days/Temperature > 37.5 C<br />';
                htmtxt2 += '- Temperature <35.5 C<br />';
                htmtxt2 += '- Unable to drink/breastfeed<br />';
                htmtxt2 += '- Child become sick<br />';
                htmtxt2 += '- Blood in stool</p>';
            }
            else if (age > 0 && age < 6) {
                htmtxt2 += '<p>Advice to monitor danger sign/s & return immediately if any of following sign/symptoms appear:<br />';
                htmtxt2 += '- SpO 2 < 94<br />';
                htmtxt2 += '- Breaths count in 1 min: more than 39<br />';
                htmtxt2 += '- Difficulty in Breathing<br />';
                htmtxt2 += '- Unremitting fever for 5 days/Temperature > 37.5 C<br />';
                htmtxt2 += '- Temperature <35.5 C<br />';
                htmtxt2 += '- Unable to drink/breastfeed<br />';
                htmtxt2 += '- Child become sick<br />';
                htmtxt2 += '- Blood in stool</p>';
            }
            else {
                htmtxt2 += '<p>Advice to monitor danger sign/s & return immediately if any of following sign/symptoms appear:<br />';
                htmtxt2 += '- SpO 2 < 94<br />';
                htmtxt2 += '- Breaths count in 1 min: more than 29<br />';
                htmtxt2 += '- Difficulty in Breathing<br />';
                htmtxt2 += '- Unremitting fever for 5 days/Temperature > 37.5 C<br />';
                htmtxt2 += '- Temperature <35.5 C<br />';
                htmtxt2 += '- Unable to drink/breastfeed<br />';
                htmtxt2 += '- Child become sick<br />';
                htmtxt2 += '- Blood in stool</p>';
            }
        }
        else if (weight >= 10 && weight < 15) {
            var Dosetxt = '<p>PCM 150 mg dose can be given for fever</p>';
            PrintChat(Dosetxt);
            if (age == 0 && ageinmonth < 2) {
                htmtxt2 += '<p>Advice to monitor danger sign/s & return immediately if any of following sign/symptoms appear:<br />';
                htmtxt2 += '- SpO 2 < 94<br />';
                htmtxt2 += '- Breaths count in 1 min: more than 59<br />';
                htmtxt2 += '- Difficulty in Breathing<br />';
                htmtxt2 += '- Unremitting fever for 5 days/Temperature > 37.5 C<br />';
                htmtxt2 += '- Temperature <35.5 C<br />';
                htmtxt2 += '- Unable to drink/breastfeed<br />';
                htmtxt2 += '- Child become sick<br />';
                htmtxt2 += '- Blood in stool</p>';
            } else if (age == 0 && ageinmonth > 1 && ageinmonth < 12) {
                htmtxt2 += '<p>Advice to monitor danger sign/s & return immediately if any of following sign/symptoms appear:<br />';
                htmtxt2 += '- SpO 2 < 94<br />';
                htmtxt2 += '- Breaths count in 1 min: more than 49<br />';
                htmtxt2 += '- Difficulty in Breathing<br />';
                htmtxt2 += '- Unremitting fever for 5 days/Temperature > 37.5 C<br />';
                htmtxt2 += '- Temperature <35.5 C<br />';
                htmtxt2 += '- Unable to drink/breastfeed<br />';
                htmtxt2 += '- Child become sick<br />';
                htmtxt2 += '- Blood in stool</p>';
            }
            else if (age > 0 && age < 6) {
                htmtxt2 += '<p>Advice to monitor danger sign/s & return immediately if any of following sign/symptoms appear:<br />';
                htmtxt2 += '- SpO 2 < 94<br />';
                htmtxt2 += '- Breaths count in 1 min: more than 39<br />';
                htmtxt2 += '- Difficulty in Breathing<br />';
                htmtxt2 += '- Unremitting fever for 5 days/Temperature > 37.5 C<br />';
                htmtxt2 += '- Temperature <35.5 C<br />';
                htmtxt2 += '- Unable to drink/breastfeed<br />';
                htmtxt2 += '- Child become sick<br />';
                htmtxt2 += '- Blood in stool</p>';
            }
            else {
                htmtxt2 += '<p>Advice to monitor danger sign/s & return immediately if any of following sign/symptoms appear:<br />';
                htmtxt2 += '- SpO 2 < 94<br />';
                htmtxt2 += '- Breaths count in 1 min: more than 29<br />';
                htmtxt2 += '- Difficulty in Breathing<br />';
                htmtxt2 += '- Unremitting fever for 5 days/Temperature > 37.5 C<br />';
                htmtxt2 += '- Temperature <35.5 C<br />';
                htmtxt2 += '- Unable to drink/breastfeed<br />';
                htmtxt2 += '- Child become sick<br />';
                htmtxt2 += '- Blood in stool</p>';
            }
        } else if (weight >= 15 && weight < 20) {
            var Dosetxt = '<p>PCM 250 mg dose can be given for fever</p>';
            PrintChat(Dosetxt);
        }
        else if (weight > 20) {
            var Dosetxt = '<p>PCM 500 mg dose can be given for fever</p>';
            PrintChat(Dosetxt);
            if (age == 0 && ageinmonth < 2) {
                htmtxt2 += '<p>Advice to monitor danger sign/s & return immediately if any of following sign/symptoms appear:<br />';
                htmtxt2 += '- SpO 2 < 94<br />';
                htmtxt2 += '- Breaths count in 1 min: more than 59<br />';
                htmtxt2 += '- Difficulty in Breathing<br />';
                htmtxt2 += '- Unremitting fever for 5 days/Temperature > 37.5 C<br />';
                htmtxt2 += '- Temperature <35.5 C<br />';
                htmtxt2 += '- Unable to drink/breastfeed<br />';
                htmtxt2 += '- Child become sick<br />';
                htmtxt2 += '- Blood in stool</p>';
            } else if (age == 0 && ageinmonth > 1 && ageinmonth < 12) {
                htmtxt2 += '<p>Advice to monitor danger sign/s & return immediately if any of following sign/symptoms appear:<br />';
                htmtxt2 += '- SpO 2 < 94<br />';
                htmtxt2 += '- Breaths count in 1 min: more than 49<br />';
                htmtxt2 += '- Difficulty in Breathing<br />';
                htmtxt2 += '- Unremitting fever for 5 days/Temperature > 37.5 C<br />';
                htmtxt2 += '- Temperature <35.5 C<br />';
                htmtxt2 += '- Unable to drink/breastfeed<br />';
                htmtxt2 += '- Child become sick<br />';
                htmtxt2 += '- Blood in stool</p>';
            }
            else if (age > 0 && age < 6) {
                htmtxt2 += '<p>Advice to monitor danger sign/s & return immediately if any of following sign/symptoms appear:<br />';
                htmtxt2 += '- SpO 2 < 94<br />';
                htmtxt2 += '- Breaths count in 1 min: more than 39<br />';
                htmtxt2 += '- Difficulty in Breathing<br />';
                htmtxt2 += '- Unremitting fever for 5 days/Temperature > 37.5 C<br />';
                htmtxt2 += '- Temperature <35.5 C<br />';
                htmtxt2 += '- Unable to drink/breastfeed<br />';
                htmtxt2 += '- Child become sick<br />';
                htmtxt2 += '- Blood in stool</p>';
            }
            else {
                htmtxt2 += '<p>Advice to monitor danger sign/s & return immediately if any of following sign/symptoms appear:<br />';
                htmtxt2 += '- SpO 2 < 94<br />';
                htmtxt2 += '- Breaths count in 1 min: more than 29<br />';
                htmtxt2 += '- Difficulty in Breathing<br />';
                htmtxt2 += '- Unremitting fever for 5 days/Temperature > 37.5 C<br />';
                htmtxt2 += '- Temperature <35.5 C<br />';
                htmtxt2 += '- Unable to drink/breastfeed<br />';
                htmtxt2 += '- Child become sick<br />';
                htmtxt2 += '- Blood in stool</p>';
            }
        }

        if (ageinyear == 0 && ageinmonth < 6) {
            htmtxt3 += '<p>Home care for cough:<br />';
            htmtxt3 += '- Continue exclusive breast feeding<br />';
            htmtxt3 += '- Stuffy nose could be cleaned with saline nasal drops (by ading 2.5 gm salt in 1 glass of clean drinking water)</p><br />';

        }
        else {
            htmtxt3 += '<p>Home care for cough:<br />';
            htmtxt3 += '- Home made herbal concoction of honey, tulsi, ginger, etc<br />';
            htmtxt3 += '- Stuffy nose could be cleaned with saline nasal drops (by ading 2.5 gm salt in 1 glass of clean drinking water)</p><br />';
        }
        PrintChat(htmtxt2);
        PrintChat(htmtxt3);
    }
    else if (type == "severe") {
        var htmtxt = '';
        var htmtxt2 = '';
        var htmtxt3 = '';

        htmtxt += '"Give age appropriate dose of Paracetamol for fever >100F"<br />';
        htmtxt += '"Give pre-referral dose of Oral Amoxicillin"<br />';
        htmtxt += '"Refer Immediately to Paediatric DCH/HDU/ICU"<br />';
        htmtxt += '"Make arrangements for referral in a well-equipped ambulance (with oxygen support and trained paramedic) and inform the receiving facility to secure a bed"<br />';
        PrintChat(htmtxt);
        if (covidtest == "Test not done" || covidantigentest == 'Not Conducted') {
            var ddddd = '<p>"Advice for COVID 19 testing "</p>';
            PrintChat(ddddd);
        }
        if (weight < 2) {
            var Dosetxt = '<p>Tab/Syp Amoxicillin : 50 mg</p>';
            PrintChat(Dosetxt);

        }
        else if (weight >= 2 && weight <= 3) {
            var Dosetxt = '<p>Tab/Syp Amoxicillin : 62 mg</p>';
            PrintChat(Dosetxt);

        } else if (weight > 3 && weight <= 4) {
            var Dosetxt = '<p>Tab/Syp Amoxicillin : 87 mg</p>';
            PrintChat(Dosetxt);

        }
        else if (weight > 4 && weight <= 6) {
            var Dosetxt = '<p>Tab/Syp Amoxicillin : 125 mg</p><p>Tab/Syp Paracetamol : 100 mg</p>';
            PrintChat(Dosetxt);

        }
        else if (weight > 6 && weight <= 10) {
            var Dosetxt = '<p>Tab/Syp Amoxicillin : 250 mg</p><p>Tab/Syp Paracetamol : 100 mg</p>';
            PrintChat(Dosetxt);

        }
        else if (weight > 10 && weight <= 14) {
            var Dosetxt = '<p>Tab/Syp Amoxicillin : 375 mg</p><p>Tab/Syp Paracetamol : 150 mg</p>';
            PrintChat(Dosetxt);

        }
        else if (weight > 14 && weight <= 20) {
            var Dosetxt = '<p>Tab/Syp Amoxicillin : 500 mg</p><p>Tab/Syp Paracetamol : 250 mg</p>';
            PrintChat(Dosetxt);

        }
        else if (weight > 20) {
            var Dosetxt = '<p>Tab/Syp Amoxicillin : 500 mg</p><p>Tab/Syp Paracetamol : 500 mg</p>';
            PrintChat(Dosetxt);

        }
    }
    else if (type == "mild") {
        var htmtxt = '';
        var htmtxt2 = '';
        var htmtxt3 = '';

        htmtxt += '"Give age appropriate dose of Paracetamol for fever >100F"<br />';
        htmtxt += '"Give pre-referral dose of Oral Amoxicillin"<br />';
        htmtxt += '"Refer Immediately to Paediatric DCHC/SDH/CH/CHC"<br />';
        htmtxt += '"Make arrangements for referral in a well-equipped ambulance and inform the receiving facility to secure a bed"<br />';
        PrintChat(htmtxt);
        if (covidtest == "Test not done" || covidantigentest == 'Not Conducted') {
            var ddddd = '<p>"Advice for COVID 19 testing "</p>';
            PrintChat(ddddd);
        }
        if (weight < 2) {
            var Dosetxt = '<p>Tab/Syp Amoxicillin : 50 mg</p>';
            PrintChat(Dosetxt);

        }
        if (weight < 2) {
            var Dosetxt = '<p>Tab/Syp Amoxicillin : 50 mg</p>';
            PrintChat(Dosetxt);

        }
        else if (weight >= 2 && weight <= 3) {
            var Dosetxt = '<p>Tab/Syp Amoxicillin : 62 mg</p>';
            PrintChat(Dosetxt);

        } else if (weight > 3 && weight <= 4) {
            var Dosetxt = '<p>Tab/Syp Amoxicillin : 87 mg</p>';
            PrintChat(Dosetxt);

        }
        else if (weight > 4 && weight <= 6) {
            var Dosetxt = '<p>Tab/Syp Amoxicillin : 125 mg</p><p>Tab/Syp Paracetamol : 100 mg</p>';
            PrintChat(Dosetxt);

        }
        else if (weight > 6 && weight <= 10) {
            var Dosetxt = '<p>Tab/Syp Amoxicillin : 250 mg</p><p>Tab/Syp Paracetamol : 100 mg</p>';
            PrintChat(Dosetxt);

        }
        else if (weight > 10 && weight <= 14) {
            var Dosetxt = '<p>Tab/Syp Amoxicillin : 375 mg</p><p>Tab/Syp Paracetamol : 150 mg</p>';
            PrintChat(Dosetxt);

        }
        else if (weight > 14 && weight <= 20) {
            var Dosetxt = '<p>Tab/Syp Amoxicillin : 500 mg</p><p>Tab/Syp Paracetamol : 250 mg</p>';
            PrintChat(Dosetxt);

        }
        else if (weight > 20) {
            var Dosetxt = '<p>Tab/Syp Amoxicillin : 500 mg</p><p>Tab/Syp Paracetamol : 500 mg</p>';
            PrintChat(Dosetxt);

        }
    }
    else if (type == "normal mild") {
        var htmtxt = '';
        var htmtxt2 = '';
        var htmtxt3 = '';

        htmtxt += '"Refer immediately to hospital/CCC"<br />';
        htmtxt += '"Advice to continue breastfeeding (if able to take orally)"<br />';
        htmtxt += '"In young infant- keep the baby warm on way to hospital"<br />';
        PrintChat(htmtxt);
        if (covidtest == "Test not done" || covidantigentest == 'Not Conducted') {
            var ddddd = '<p>"Advice for COVID 19 testing "</p>';
            PrintChat(ddddd);
        }
    }
    restvaiable();
    var data = GetQuestionById(JData, 2001);

    if (data.cards.length > 0) {
        LoadCardOptionQuestion(data);
    }
    else {
        LoadQuestion(data);
    }
}

function setsendbutton(objthis) {
    var idddd = $(objthis).parent().find('div.selected').length + 1;
    if (idddd > 0) {
        $(objthis).parent().parent().find('.cardtype').show();
    }
    else {
        $(objthis).parent().parent().find('.cardtype').hide();
    }
}

function AddLog(Answer, Question, DataVariableName, DataVariableValue) {
    var sData = {
        Question: Question,
        Answer: Answer,
        DataVariableName: DataVariableName,
        DataVariableValue: DataVariableValue,
        UserToken: $('#chid').val()
    };

    $.ajax({
        type: "POST",
        url: '/Home/AddChatLog',
        datatype: 'json',
        data: sData,
        success: function (reponse) {

        },
        error: function (result) {
        }
    });
}
function restvaiable() {
    $.ajax({
        type: "POST",
        async: false,
        url: '/Home/ResetVariable',
        datatype: 'json',
        data: { id: 300 },
        success: function (reponse) {
            txtpreviousid = 0;
            substr = [];
            ageinyear = 0;
            heightincm = 0;
            dehydration_graterthan2 = '';
            bloodinstool = '';
            diarrhoeadays = 0;
            symptoms_lessthan2 = '';
            symptoms_greterthan2 = '';
            gds = '';
            weight = 0.1;
            ageinmonth = 0;
            symtoms = '';
            covidtest = '';
            contactwithcovid = '';
            feversince = 0;
            breathcount = 0;
            nasalflaring = '';
            presentingwith = '';
            pulserateapplicable = '';
            pulserate = 0;
            crt = 0;
            noiseduringbreathing = '';
            severechestindrawing = '';
            temperature = '';
            spo2applicable = '';
            spo2rate = 0;
            covidantigentest = '';
            lookforassociated = '';
            historycondition = '';
        },
        error: function (result) {
        }
    });
}
