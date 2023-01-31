// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$("input#post_id").on("change", function () { // Whenever this field changes

    var post_id = $("input#post_id").val(); // Get the value of the field

    $("a#link").attr("href", "https://stackoverflow.com/questions/" + post_id); // Update the href in the link to match the id inserted in the input field

});