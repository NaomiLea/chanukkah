var number = 4;
var bet = 0;
var collection = 0;
$(function() {
    $("#restart").hide();
    $(".rulesdescription").hide();
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
    $("#collection").html(collection);


    $("#minus").click(function() {
        if (bet > 0) {
            bet--;
        }

        $("#bet").html(bet);
    });

    $("#plus").click(function() {
        if (bet <= number-1) {
            bet++;
        }

        $("#bet").html(bet);
        if (bet > number) {
            $("#bet").html(number);
        }


    });

    $("#gamble").click(function() {
        collection += bet;
        number -= bet;
        $("#number").html(number);
        bet = 0;
        $("#bet").html(bet);

        $("#collection").html(collection);
        $(".wrap").show();
        $("#results").hide();
        $("#stop").show();
    })

    $("#stop").click(function(min, max) {
        var x = Math.floor((Math.random() * (5 - 1)) + 1);
        console.log(x);
        $(".wrap").hide();
        $("#results").show();
        if (x == 1) {
            $("#results").css("background-color", "rgb(194, 89, 177)");
            $("#results").html("נ")
        }
        if (x == 2) {
            $("#results").css("background-color", "rgb(199, 133, 123)");
            $("#results").html("ג")
            number += collection;
            collection = 0;
            $("#number").html(number);
            $("#collection").html(collection);
        }
        if (x == 3) {
            $("#results").css("background-color", "rgb(195, 167, 93)");
            $("#results").html("ה")
            number += Math.ceil(collection / 2);
            collection -= Math.ceil(collection / 2);
            $("#number").html(number);
            $("#collection").html(collection);
        }
        if (x == 4) {
            $("#results").css("background-color", "rgb(104, 205, 195)");
            $("#results").html("פ")
            number -= 1;
            collection += 1;
            $("#number").html(number);
            $("#collection").html(collection);
        }
        $("#stop").hide();
        if (collection > number) {
            alert("you lose");
            $("#gamble").hide();
            $("#restart").show();
        }

    })
    $('#restart').click(function() {
        location.reload();
    });
    $("#rules").click(function() {
        $(".rulesdescription").show();
        $(".fullPage").hide();

    })

    $("#close").click(function(){
      $(".rulesdescription").hide();
      $(".fullPage").show();
    })


});
