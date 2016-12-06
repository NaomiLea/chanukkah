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
});
