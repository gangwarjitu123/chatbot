#pragma checksum "D:\GitCHATBOT-Landboat\chatbot\Views\Home\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "721e9f4d657ef9055f3bf9950f85005bd21cdee0"
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
#line 1 "D:\GitCHATBOT-Landboat\chatbot\Views\_ViewImports.cshtml"
using ChatBot;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "D:\GitCHATBOT-Landboat\chatbot\Views\_ViewImports.cshtml"
using ChatBot.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"721e9f4d657ef9055f3bf9950f85005bd21cdee0", @"/Views/Home/Index.cshtml")]
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
#line 1 "D:\GitCHATBOT-Landboat\chatbot\Views\Home\Index.cshtml"
  
    ViewData["Title"] = "Home Page";
    Layout = null;

#line default
#line hidden
#nullable disable
            WriteLiteral("<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("head", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "721e9f4d657ef9055f3bf9950f85005bd21cdee03372", async() => {
                WriteLiteral(@"
    <meta charset=""UTF-8"">
    <meta http-equiv=""X-UA-Compatible"" content=""IE=edge"">
    <meta name=""viewport"" content=""width=device-width, initial-scale=1.0"">
    <link rel=""icon"" href=""images/favicon.ico"" type=""image/x-icon"" />
    <link rel=""stylesheet"" href=""chat.css"">
    <link rel=""preconnect"" href=""https://fonts.googleapis.com"">
    <title>Chat</title>
    <style>
        g {
            display: none
        }
    </style>
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("body", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "721e9f4d657ef9055f3bf9950f85005bd21cdee04812", async() => {
                WriteLiteral("\r\n    <input type=\"hidden\" id=\"txtpreviousid\" value=\"0\" />\r\n    <header class=\"header\">\r\n        <div class=\"header_content\">\r\n            <figure>\r\n                <img src=\"images/header_log.png\"");
                BeginWriteAttribute("alt", " alt=\"", 771, "\"", 777, 0);
                EndWriteAttribute();
                WriteLiteral(">\r\n            </figure>\r\n            <div class=\"header_item_desc\">\r\n                <h1>Swasthya Mitra by NHM</h1>\r\n                <h3>DSS for Childhood Illness and COVID 19 </h3>\r\n                <input type=\"hidden\" id=\"chid\"");
                BeginWriteAttribute("value", " value=\"", 1008, "\"", 1027, 1);
#nullable restore
#line 33 "D:\GitCHATBOT-Landboat\chatbot\Views\Home\Index.cshtml"
WriteAttributeValue("", 1016, ViewBag.ID, 1016, 11, false);

#line default
#line hidden
#nullable disable
                EndWriteAttribute();
                WriteLiteral(@" />
            </div>
        </div>
    </header>
    <section class=""chat_main_container"" id=""mainsection"">
    </section>
    <div class=""typeLoader"" style=""display: none;"">
        <svg xmlns=""http://www.w3.org/2000/svg"" xmlns:xlink=""http://www.w3.org/1999/xlink""
             style=""margin: auto; background: none repeat scroll 0% 0%; display: block; shape-rendering: auto;""
             width=""250px"" height=""100px"" viewBox=""0 0 100 100"" preserveAspectRatio=""xMidYMid"">
            <circle cx=""27.5"" cy=""54"" r=""5"" fill=""#af8490"">
                <animate attributeName=""cy"" calcMode=""spline"" keySplines=""0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5""
                         repeatCount=""indefinite"" values=""54;46;54;54"" keyTimes=""0;0.36;0.72;1"" dur=""1.25s""
                         begin=""-0.8999999999999999s""></animate>
            </circle>
            <circle cx=""42.5"" cy=""54"" r=""5"" fill=""#af8490"">
                <animate attributeName=""cy"" calcMode=""spline"" keySplines=""0 0.5 0.5 1;0.5 0 1 0.5;0.5");
                WriteLiteral(@" 0.5 0.5 0.5""
                         repeatCount=""indefinite"" values=""54;46;54;54"" keyTimes=""0;0.36;0.72;1"" dur=""1.25s""
                         begin=""-0.675s""></animate>
            </circle>
            <circle cx=""57.5"" cy=""54"" r=""5"" fill=""#af8490"">
                <animate attributeName=""cy"" calcMode=""spline"" keySplines=""0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5""
                         repeatCount=""indefinite"" values=""54;46;54;54"" keyTimes=""0;0.36;0.72;1"" dur=""1.25s""
                         begin=""-0.44999999999999996s""></animate>
            </circle>
            <circle cx=""72.5"" cy=""54"" r=""5"" fill=""#af8490"">
                <animate attributeName=""cy"" calcMode=""spline"" keySplines=""0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5""
                         repeatCount=""indefinite"" values=""54;46;54;54"" keyTimes=""0;0.36;0.72;1"" dur=""1.25s""
                         begin=""-0.22499999999999998s""></animate>
            </circle>
        </svg>
    </div>
    <!-- <script src=""https://ajax.googleapi");
                WriteLiteral("s.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script> -->\r\n    <script src=\"jQuery_Main.js\"></script>\r\n    <script src=\"chat.js\" type=\"text/javascript\"></script>\r\n    <script src=\"pageIndex.js\" type=\"text/javascript\"></script>\r\n");
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
