#pragma checksum "D:\Jul\Time-Attendant-Plus\backend_TimeAttPlus\backend_TimeAttPlus\Views\Requests\Create.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "5b291241a32f06e07171e3c3e77ce7b616711e4c"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Requests_Create), @"mvc.1.0.view", @"/Views/Requests/Create.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"5b291241a32f06e07171e3c3e77ce7b616711e4c", @"/Views/Requests/Create.cshtml")]
    #nullable restore
    public class Views_Requests_Create : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<backend_TimeAttPlus.Models.Request>
    #nullable disable
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\r\n");
#nullable restore
#line 3 "D:\Jul\Time-Attendant-Plus\backend_TimeAttPlus\backend_TimeAttPlus\Views\Requests\Create.cshtml"
  
    ViewData["Title"] = "Create";

#line default
#line hidden
#nullable disable
            WriteLiteral(@"
<h1>Create</h1>

<h4>Request</h4>
<hr />
<div class=""row"">
    <div class=""col-md-4"">
        <form asp-action=""Create"">
            <div asp-validation-summary=""ModelOnly"" class=""text-danger""></div>
            <div class=""form-group"">
                <label asp-for=""LeaveNo"" class=""control-label""></label>
                <input asp-for=""LeaveNo"" class=""form-control"" />
                <span asp-validation-for=""LeaveNo"" class=""text-danger""></span>
            </div>
            <div class=""form-group"">
                <label asp-for=""LeaveType"" class=""control-label""></label>
                <input asp-for=""LeaveType"" class=""form-control"" />
                <span asp-validation-for=""LeaveType"" class=""text-danger""></span>
            </div>
            <div class=""form-group"">
                <label asp-for=""LeaveDtTmFrom"" class=""control-label""></label>
                <input asp-for=""LeaveDtTmFrom"" class=""form-control"" />
                <span asp-validation-for=""LeaveDtTmFrom"" class=""t");
            WriteLiteral(@"ext-danger""></span>
            </div>
            <div class=""form-group"">
                <label asp-for=""LeaveDtTmTo"" class=""control-label""></label>
                <input asp-for=""LeaveDtTmTo"" class=""form-control"" />
                <span asp-validation-for=""LeaveDtTmTo"" class=""text-danger""></span>
            </div>
            <div class=""form-group"">
                <label asp-for=""LeaveStatus"" class=""control-label""></label>
                <input asp-for=""LeaveStatus"" class=""form-control"" />
                <span asp-validation-for=""LeaveStatus"" class=""text-danger""></span>
            </div>
            <div class=""form-group"">
                <input type=""submit"" value=""Create"" class=""btn btn-primary"" />
            </div>
        </form>
    </div>
</div>

<div>
    <a asp-action=""Index"">Back to List</a>
</div>

");
            DefineSection("Scripts", async() => {
                WriteLiteral("\r\n");
#nullable restore
#line 52 "D:\Jul\Time-Attendant-Plus\backend_TimeAttPlus\backend_TimeAttPlus\Views\Requests\Create.cshtml"
      await Html.RenderPartialAsync("_ValidationScriptsPartial");

#line default
#line hidden
#nullable disable
            }
            );
        }
        #pragma warning restore 1998
        #nullable restore
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; } = default!;
        #nullable disable
        #nullable restore
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; } = default!;
        #nullable disable
        #nullable restore
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; } = default!;
        #nullable disable
        #nullable restore
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; } = default!;
        #nullable disable
        #nullable restore
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<backend_TimeAttPlus.Models.Request> Html { get; private set; } = default!;
        #nullable disable
    }
}
#pragma warning restore 1591
