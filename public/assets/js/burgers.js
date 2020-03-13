
$(function() {
    $(".change-eaten").on("click", function(event) {
      var id = $(this).data("id");
      var eatState = $(this).data("eatState");
  
      var eaten= {
        devoured: eatState
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: eaten
      }).then(
        function() {
          console.log("changed devoured to", eatState);

          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newburger = {
        name: $("#ca").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newburger
      }).then(
        function() {
          console.log("added new burger");
          location.reload();
        }
      );
    });
});