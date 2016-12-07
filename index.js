var number = 4;
var bet = 0;
$(function() {
    $("#flame").draggable({

    });
    $(".flame").hide();
    $("#one").droppable({
        tolerance: 'touch',
        drop: function(event, ui) {
            $("#flameone").show();

        }
    });
    $("#two").droppable({
        tolerance: 'touch',
        drop: function(event, ui) {
            if ($("#flameone").is(":visible")) {
                $("#flametwo").show();
            }


        }
    });
    $("#three").droppable({
        tolerance: 'touch',
        drop: function(event, ui) {
            if ($("#flametwo").is(":visible")) {
                $("#flamethree").show();
            }

        }
    });
    $("#four").droppable({
        tolerance: 'touch',
        drop: function(event, ui) {
            if ($("#flamethree").is(":visible")) {
                $("#flamefour").show();
            }

        }
    });
    $("#five").droppable({
        tolerance: 'touch',
        drop: function(event, ui) {
            if ($("#flamefour").is(":visible")) {
                $("#flamefive").show();
            }

        }
    });
    $("#six").droppable({
        tolerance: 'touch',
        drop: function(event, ui) {
            if ($("#flamefive").is(":visible")) {
                $("#flamesix").show();
            }

        }
    });
    $("#seven").droppable({
        tolerance: 'touch',
        drop: function(event, ui) {
            if ($("#flamesix").is(":visible")) {
                $("#flameseven").show();
            }

        }
    });
    $("#eight").droppable({
        tolerance: 'touch',
        drop: function(event, ui) {
            if ($("#flameseven").is(":visible")) {
                $("#flameeight").show();
            }

        }
    });


    $("#number").html(number);
    $("#bet").html(bet);


    $("#minus").click(function() {
        if (bet > 0) {
            bet--;
        }

        $("#bet").html(bet);
    });

    $("#plus").click(function() {
        if (bet <= number) {
            bet++;
        }

        $("#bet").html(bet);
        if (bet > number) {
            $("#bet").html(number);
        }

    });

    $("#gamble").click(function() {
        number -= bet;
        $("#number").html(number);
        bet = 0;
        $("#bet").html(bet);
    })


});
console.log(bet)
