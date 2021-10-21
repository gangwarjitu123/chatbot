#pragma checksum "F:\Data\ChatBot\Views\Home\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "f450ab68abb15667433e02a7263c06c0fed17a37"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_Index), @"mvc.1.0.view", @"/Views/Home/Index.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "F:\Data\ChatBot\Views\_ViewImports.cshtml"
using ChatBot;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "F:\Data\ChatBot\Views\_ViewImports.cshtml"
using ChatBot.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"f450ab68abb15667433e02a7263c06c0fed17a37", @"/Views/Home/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"fe5e0392cd06c9057b84a4bf4186fd24830662b5", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #line hidden
        #pragma warning disable 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        #pragma warning restore 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.HeadTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper;
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 1 "F:\Data\ChatBot\Views\Home\Index.cshtml"
  
    ViewData["Title"] = "Home Page";
    Layout = null;

#line default
#line hidden
#nullable disable
            WriteLiteral("<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("head", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "f450ab68abb15667433e02a7263c06c0fed17a373312", async() => {
                WriteLiteral(@"
    <meta charset=""UTF-8"">
    <meta http-equiv=""X-UA-Compatible"" content=""IE=edge"">
    <meta name=""viewport"" content=""width=device-width, initial-scale=1.0"">
    <link rel=""icon"" href=""images/favicon.png"" type=""image/png"" />
    <link rel=""stylesheet"" href=""chat.css"">
    <link rel=""preconnect"" href=""https://fonts.googleapis.com"">
    <title>Chat</title>
");
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.HeadTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("body", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "f450ab68abb15667433e02a7263c06c0fed17a374671", async() => {
                WriteLiteral("\r\n    <header class=\"header\">\r\n        <div class=\"header_content\">\r\n            <figure>\r\n                <img src=\"images/header_log.png\"");
                BeginWriteAttribute("alt", " alt=\"", 632, "\"", 638, 0);
                EndWriteAttribute();
                WriteLiteral(@">
            </figure>
            <div class=""header_item_desc"">
                <h1>National Health Mission</h1>
                <h3>COVID-19 Severity Scale Decision Support for Health Workers</h3>
            </div>
        </div>
    </header>
    <section class=""chat_main_container"" id=""mainsection"">
    </section>

    <!-- <script src=""https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js""></script> -->
    <script src=""jQuery_Main.js""></script>
    <script src=""chat.js"" type=""text/javascript""></script>
    <script type=""text/javascript"">
        var cQuestionId = 0;
        var JData = [];
        $(document).ready(function () {
            JData = LoadJsonData();
            LoadWellcomeMessage();
        });


        function LoadJsonData() {
            var jsonIssues;
            $.ajax({
                url: ""data.json"",
                async: false,
                dataType: 'json',
                success: function (data) {
                    jsonIssu");
                WriteLiteral(@"es = data.Questions;
                }
            });
            return jsonIssues;
        }

        function LoadCardOptionQuestion(data) {
            var htmtxt = '';
            htmtxt += '<article class=""left-msg message InputOption"">';
            htmtxt += '<div class=""msg_container"">';
            htmtxt += '<div class="""">';
            htmtxt += '<figure class=""image is-35x35 img_scale Avatar"">';
            htmtxt += '<img alt="""" class=""Media is-contain"" src=""images/doc_icon.png""></figure></div>';
            htmtxt += '<div class=""message-content"">';
            htmtxt += '<div class=""msg_content_item  is-shape-rounded"">';
            htmtxt += '<svg class=""MessageBubble__Decorator"" xmlns=""http://www.w3.org/2000/svg"" width=""16"" height=""28""';
            htmtxt += 'viewBox=""0 0 16 28"">';
            htmtxt += '<title> Path</title>';
            htmtxt += '<desc> Created with Sketch.</desc>';
            htmtxt += '<g fill=""none""><path d=""M5 0.2C5 10 5 16.6 5 20 5 23.4 3.3 25.8");
                WriteLiteral(@" 0 27.2 10.5 27.8 15.8 24.8 15.8 18.4 15.8 16.3 15.8 10.3 15.8 0.2L5 0.2Z""fill=""#FFF""></path></g></svg>';
            htmtxt += '<div class=""MessageBubble__content"">';
            htmtxt += '<div style=""max-width: 100%;""><div class=""content is-marginless"">';
            htmtxt += data.dmessage;
            htmtxt += '</div></div></div></div></div></div>';
            htmtxt += '<div class=""msg_footer""><div class=""chatMSGtime"">03:15</div><div class=""validate_Msg"">choose at least 1 and up to 9</div></div>';
            if (data.cards[0].items.length > 0) {
                var cardItem = data.cards[0].items;
                htmtxt += '<div class=""option_Msg"">';
                htmtxt += '<div class=""option_Msg_content"">';
                for (var i = 0; i < cardItem.length; i++) {
                    htmtxt += '<div class=""option_Msg_item"">' + cardItem[i].name + '</div>';
                }
                htmtxt += '</div>';
                htmtxt += '<div class=""btn_container""><div class=""btn"" dat");
                WriteLiteral(@"a-var=""' + data.cards[0].click + '"" onclick=""AskNextQuestionCardOption(this);"">Send</div></div>';
                htmtxt += '</div>';
            }

            htmtxt += '</article>';
            setTimeout(function () {
                $('#mainsection').append(htmtxt).slideDown(1000);
                ScrollDown();
            }, 1000)
        }

        function LoadQuestion(data) {
            var htmtxt = '';
            htmtxt += '<article class=""left-msg message"">';
            htmtxt += '<div class=""msg_container"">';
            htmtxt += '<div class="""">';
            htmtxt += '<figure class=""image is-35x35 img_scale Avatar"">';
            htmtxt += '<img alt="""" class=""Media is-contain"" src=""images/doc_icon.png"">';
            htmtxt += '</figure>';
            htmtxt += '</div>';
            htmtxt += '<div class=""message-content"">';
            htmtxt += '<div class=""msg_content_item  is-shape-rounded"">';
            htmtxt += '<svg class=""MessageBubble__Decorator"" xmlns=""http:");
                WriteLiteral(@"//www.w3.org/2000/svg"" width=""16"" height=""28""';
            htmtxt += 'viewBox=""0 0 16 28"">';
            htmtxt += '<title> Path</title>';
            htmtxt += '<desc> Created with Sketch.</desc>';
            htmtxt += '<g fill=""none"">';
            htmtxt += '<path d=""M5 0.2C5 10 5 16.6 5 20 5 23.4 3.3 25.8 0 27.2 10.5 27.8 15.8 24.8 15.8 18.4 15.8 16.3 15.8 10.3 15.8 0.2L5 0.2Z""';
            htmtxt += 'fill=""#FFF""></path>';
            htmtxt += '</g>';
            htmtxt += '</svg>';
            htmtxt += '<div class=""MessageBubble__content"">';
            htmtxt += '<div style=""max-width: 100%;"">';
            htmtxt += '<div class=""content is-marginless"">';
            htmtxt += data.dmessage;
            if (data.input.length > 0) {
                htmtxt += '<p>';
                htmtxt += '<div class=""input_content inputsend"">';
                htmtxt += '<input type=""number"" class=""input is-animate-messages-on inputdata"" data-max=""' + data.input[0].max + '"" data-min=""' + data.inpu");
                WriteLiteral(@"t[0].min + '"" />';
                htmtxt += '<button type=""button"" class=""icon_btn btn_age_send"" data-var=""' + data.input[0].click + '"" onclick=""AskNextQuestionInput(this);"">';
                htmtxt += '<svg xmlns=""http://www.w3.org/2000/svg"" width=""24"" height=""24"" x=""3650""y=""3688"">';
                htmtxt += '<path fill=""#af8490"" d=""M1.1 21.757l22.7-9.73L1.1 2.3l.012 7.912 13.623 1.816-13.623 1.817-.01 7.912z""></path></svg></button>';
                htmtxt += '<div class=""icon_btn validate_icon_button padding_0"" style=""display: none;"">';
                htmtxt += '<svg xml:space=""preserve"" viewBox=""0 0 100 100"" y=""0"" x=""0""';
                htmtxt += 'xmlns=""http://www.w3.org/2000/svg"" id=""Layer_1"" version=""1.1""';
                htmtxt += 'style=""background: rgb(255, 255, 255) none repeat scroll 0% 0%;""';
                htmtxt += 'width=""50px"" height=""35px"">';
                htmtxt += '<g style=""transform-origin: 50% 50% 0px; transform: rotate(0deg) scale(0.8);""';
                htmtxt += '");
                WriteLiteral(@"class=""ldl-scale"">';
                htmtxt += '<g class=""ldl-ani"">';
                htmtxt += '<linearGradient y2=""85.807"" x2=""51.618"" y1=""37.807""';
                htmtxt += 'x1=""36.618"" gradientUnits=""userSpaceOnUse""';
                htmtxt += 'id=""SVGID_1_"">';
                htmtxt += '<stop stop-color=""#e15c64"" offset=""0""';
                htmtxt += 'style=""stop-color: rgb(235, 223, 60); fill: rgb(235, 223, 60);"">';
                htmtxt += '</stop>';
                htmtxt += '<stop stop-color=""#b0484f"" offset=""1""';
                htmtxt += 'style=""stop-color: rgb(235, 223, 60); fill: rgb(235, 223, 60);"">';
                htmtxt += '</stop>';
                htmtxt += '</linearGradient>';
                htmtxt += '<g class=""ldl-layer"">';
                htmtxt += '<g class=""ldl-ani""';
                htmtxt += 'style=""transform-origin: 50px 50px 0px; animation: 1.11111s linear -1.11111s infinite normal forwards running static-75f7fad1-5fd4-4122-8a31-76b7e68e98b2;"">';
              ");
                WriteLiteral(@"  htmtxt += '<path stroke-miterlimit=""10"" stroke-width=""3.5""';
                htmtxt += 'stroke=""#323232"" fill=""url(#SVGID_1_)""';
                htmtxt += 'd=""M44.859 16.397L9.485 77.667c-2.285 3.957.571 8.904 5.141 8.904h70.748c4.57 0 7.425-4.947 5.141-8.904l-35.374-61.27c-2.285-3.957-7.997-3.957-10.282 0z""';
                htmtxt += 'style=""stroke: rgb(50, 50, 50);""></path>';
                htmtxt += '</g></g><g class=""ldl-layer""><g class=""ldl-ani""><g>';
                htmtxt += '<g class=""ldl-layer""><g class=""ldl-ani""';
                htmtxt += 'style=""transform-origin: 50px 50px 0px; animation: 1.11111s linear -1.11111s infinite normal forwards running static-75f7fad1-5fd4-4122-8a31-76b7e68e98b2;"">';
                htmtxt += '<path fill=""#fff""';
                htmtxt += 'd=""M53.4 68.511l.6 3.906a4.048 4.048 0 0 1-8 1.23 4.183 4.183 0 0 1 0-1.229l.6-3.906a3.44 3.44 0 0 1 6.8-.001z""';
                htmtxt += 'style=""fill: rgb(0, 0, 0);""></path></g></g></g></g></g>';
                htmtx");
                WriteLiteral(@"t += '<g class=""ldl-layer""><g class=""ldl-ani""><g><g class=""ldl-layer""><g class=""ldl-ani""';
                htmtxt += 'style=""transform-origin: 50px 50px 0px; animation: 1.11111s linear -1.11111s infinite normal forwards running static-75f7fad1-5fd4-4122-8a31-76b7e68e98b2;"">';
                htmtxt += '<path fill=""#fff""';
                htmtxt += 'd=""M54 40.417l-1.2 17.28a2.807 2.807 0 0 1-5.6 0L46 40.417a4.01 4.01 0 1 1 8 0z""';
                htmtxt += 'style=""fill: rgb(0, 0, 0);""></path></g></g></g></g></g>';
                htmtxt += '<metadata xmlns:d=""https://loading.io/stock/""><d:name>fail</d:name><d:tags>';
                htmtxt += 'fail,reject,deny,negative,refuse,error,cancel,drop,warning';
                htmtxt += '</d:tags><d:license>by</d:license><d:slug>oiotst</d:slug></metadata></g></g></svg></div></div>';
                htmtxt += '</p>';
                htmtxt += '<p class=""input_info inputsend"">Press enter to send</p>';
            }
            htmtxt += '</div>';
           ");
                WriteLiteral(@" htmtxt += '</div>';
            htmtxt += '</div>';
            htmtxt += '</div>';
            htmtxt += '</div>';
            htmtxt += '</div>';

            if (data.buttons.length > 0) {
                htmtxt += '<div class=""btn_group"">';
                for (var i = 0; i < data.buttons.length; i++) {
                    htmtxt += '<button onclick=""AskmultibuttonQuestion(this);"" class=""btn"" data-text=""' + data.buttons[i].text + '"" data-var=""' + data.buttons[i].click + '"">' + data.buttons[i].text + '</button>';
                }
                htmtxt += '</div>';
            }

            htmtxt += '</article>';
            setTimeout(function () {
                $('#mainsection').append(htmtxt).slideDown(1000);
                ScrollDown();
            }, 1000)
        }


        function LoadUserSentMessage(message) {
            var htmtxt = '';
            var now = new Date(Date.now());
            var formatted = now.getHours() + "":"" + now.getMinutes();
            ht");
                WriteLiteral(@"mtxt += '<article class=""right-msg message isUserMSG"">';
            htmtxt += '<div class=""message-content reverse"">';
            htmtxt += '<div class=""msg_content_item is-reverse is-shape-rounded is-author-user"">';
            htmtxt += '<svg class=""MessageBubble__Decorator"" xmlns=""http://www.w3.org/2000/svg"" width=""16"" height=""28""';
            htmtxt += 'viewBox=""0 0 16 28"">';
            htmtxt += '<title> Path</title>';
            htmtxt += '<desc> Created with Sketch.</desc>';
            htmtxt += '<g fill=""none"">';
            htmtxt += '<path d=""M5 0.2C5 10 5 16.6 5 20 5 23.4 3.3 25.8 0 27.2 10.5 27.8 15.8 24.8 15.8 18.4 15.8 16.3 15.8 10.3 15.8 0.2L5 0.2Z""fill=""#f8e61c""></path>';
            htmtxt += '</g>';
            htmtxt += '</svg>';
            htmtxt += '<div class=""MessageBubble__content"">';
            htmtxt += '<div class=""sc-cBoqAE jowtfi MessageBubbleText content"">' + message + '</div>';
            htmtxt += '</div>';
            htmtxt += '</div>';
            htm");
                WriteLiteral(@"txt += '<div class=""message-right"">';
            htmtxt += '<span class=""mBtw MessageDate is-size-7"">';
            htmtxt += '<b class=""sc-EZqKI iONckA MessageDate__text"">' + formatted + '</b>';
            htmtxt += '</span>';
            htmtxt += '</div>';
            htmtxt += '</div>';
            htmtxt += '</article>';
            setTimeout(function () {
                $('#mainsection').append(htmtxt).slideDown(500);
                ScrollDown();
            }, 500)
            
        }

        function AskNextQuestion(objthis) {
            var cQid = $(objthis).attr('data-var');
            var qtext = $(objthis).attr('data-text');
            var data = GetQuestionById(JData, cQid);
            LoadUserSentMessage(qtext);
            if (data.cards.length > 0) {
                LoadCardOptionQuestion(data);

            }
            else {
                LoadQuestion(data);
            }
            $(objthis).hide();
        }
        function AskmultibuttonQues");
                WriteLiteral(@"tion(objthis) {
            var cQid = $(objthis).attr('data-var');
            var qtext = $(objthis).attr('data-text');
            var data = GetQuestionById(JData, cQid);
            LoadUserSentMessage(qtext);
            if (data.cards.length > 0) {
                LoadCardOptionQuestion(data);

            }
            else {
                LoadQuestion(data);
            }
            //$(objthis).parent().find('.inputsend').hide();
            $(objthis).parent().find('.inputsend').slideUp('fast');
        }
        function AskNextQuestionInput(objthis) {
            var cQid = $(objthis).attr('data-var');
            var qtext = $(objthis).parent().find('.inputdata').val();
            var data = GetQuestionById(JData, cQid);
            LoadUserSentMessage(qtext);
            if (data.cards.length > 0) {
                LoadCardOptionQuestion(data);

            }
            else {
                LoadQuestion(data);
            }
            $(objthis).parent().hide(");
                WriteLiteral(@");
            //$(objthis).parent().parent().find('.inputsend').hide();
            $(objthis).parent().parent().find('.inputsend').slideUp('fast');
        }
        function AskNextQuestionCardOption(objthis) {
            var cQid = $(objthis).attr('data-var');
            var qtext = '';
            var ccount = 0;
            var cardDiv = $(objthis).parent().find('.option_Msg_content');
            $(cardDiv).find('.selected ').each(function () {
                if (ccount == 0) {
                    qtext = qtext + $(this).text();
                }
                else {
                    qtext = qtext + ',' + $(this).text();
                }
                ccount++;
            });
            var data = GetQuestionById(JData, cQid);
            LoadUserSentMessage(qtext);
            $(objthis).parent().parent().find('.msg_footer').hide();
            $(objthis).parent().parent().find('.option_Msg').hide();
            if (data.cards.length > 0) {
                LoadCardO");
                WriteLiteral(@"ptionQuestion(data);
            }
            else {
                LoadQuestion(data);
            }
        }
        function LoadWellcomeMessage() {
            var data = GetQuestionById(JData, 1);
            LoadQuestion(data);
        }
        function GetQuestionById(jsonObject, id) {
            return jsonObject.filter(function (jsonObject) { return (jsonObject['id'] == id); })[0];
        }

        function ScrollDown() {
            $('html, body').animate({
                scrollTop: $("".chat_main_container"").height()
            }, 2000);
        }
    </script>
");
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n\r\n</html>\r\n\r\n\r\n\r\n");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591
