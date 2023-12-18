$(document).ready(function () {
    $('#opennav').click(function () {
        // e.preventDefault();
        $("#mySidenav").css('width', '250px');
        $("main").css('marginLeft', '250px');

        // alert("working")
    });
    $("#closebtn").click(function () {
        // e.preventDefault();
        $("#mySidenav").css('width', '0');
        $("main").css('marginLeft', '0');
    });
});
