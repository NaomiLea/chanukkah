  $(function() {
      $("#lighting").draggable({ revert: "valid" });




      $("#droppable").droppable({
          tolerance: 'touch',
          drop: function() {
              $("#droppable")
                  .addClass("ui-state-highlight")
                  .find("p")
                  .html("Dropped with a touch!");
          }
      });
  });
