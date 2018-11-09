$(document).ready(function() {
    let counter = 0;
    $("#numberButton").click(function() {
        $("#clickCount").html(counter++);
    });
    $("#resetButton").click(function() {
        $("#clickCount").html(counter=0)
    })
    $("#sayHello").click(function() {
        alert("This your favorite color" + $("#firstNameField").val()+" "+$("#lastNameField").val())
    });
  });
  
  $(".btn").click(function(event) {
      let buttonClicked = this.innerHTML 
      console.log("Button Clicked: ", buttonClicked)
       $(".item-header").html(buttonClicked)
     })

     