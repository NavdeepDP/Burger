console.log("Hello Burger World!");

$(function () {

    $(".devour-burger").on("click", function (event) {

        event.preventDefault();
        const id = $(this).data("id");

        console.log("button clicked");

        var newDevouredState = {
            devoured: true
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(function () {
            console.log("Burger devoured with id: " + id);
            location.reload();
        });
    });

    $(".create-form").on("submit", function(event){
        event.preventDefault();

        var newBurger = {
            name: $("#burger").val().trim(),
            devoured: 0
          };
      
          // Send the POST request.
          $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
          }).then(
            function() {
              console.log("created new burger");
              // Reload the page to get the updated list
              location.reload();
            }
          );

    });

});