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
            $("#flametwo").show();

        }
    });
    $("#three").droppable({
        tolerance: 'touch',
        drop: function(event, ui) {
            $("#flamethree").show();

        }
    });
    $("#four").droppable({
        tolerance: 'touch',
        drop: function(event, ui) {
            $("#flamefour").show();

        }
    });
    $("#five").droppable({
        tolerance: 'touch',
        drop: function(event, ui) {
            $("#flamefive").show();

        }
    });
    $("#six").droppable({
        tolerance: 'touch',
        drop: function(event, ui) {
            $("#flamesix").show();

        }
    });
    $("#seven").droppable({
        tolerance: 'touch',
        drop: function(event, ui) {
            $("#flameseven").show();

        }
    });
    $("#eight").droppable({
        tolerance: 'touch',
        drop: function(event, ui) {
            $("#flameeight").show();

        }
    });
});
