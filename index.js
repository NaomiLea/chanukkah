  $( function() {
    $( "#lighting" ).draggable({ revert: "valid" });
 
    $( "#droppable" ).droppable({
      classes: {
        "ui-droppable-active": "ui-state-active",
        "ui-droppable-hover": "ui-state-hover"
      },
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "#lighting" )
            .html( "Dropped!" );
      }
    });
  } );