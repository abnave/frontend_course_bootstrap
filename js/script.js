$(document).ready(function () {
    $("#mycarousel").carousel({ interval: 2000 });
    $("#carouselButton").click(function () {
        if ($('#carouselButton').children('span').hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
            $('#carouselButton').removeClass('btn-danger');
            $('#carouselButton').addClass('btn-success');
        }
        else if ($('#carouselButton').children('span').hasClass('fa-play')) {
            $("#mycarousel").carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
            $('#carouselButton').removeClass('btn-success');
            $('#carouselButton').addClass('btn-danger');
        }

    });

    $("#loginButton").click(function () {
        console.log("Show");
        $('#loginModal').modal('show');
    });
    $(".close").click(function () {
        console.log("Hide");
        $('#loginModal').modal('hide');
    });
    $("#reserveTableButton").click(function () {
        console.log("Show");
        $('#reserveTableModal').modal('show');
    });
    $(".reserve-table-close").click(function () {
        console.log("Hide");
        $('#reserveTableModal').modal('hide');
    });
});