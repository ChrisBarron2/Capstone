// Here I've created doc ready functions that will allow colors to change every time that i click on a button. 


// $(document).ready(function() {
// $("#start-button").on("click", function(){
// $(this).addClass("background-color", "blue")
// })
// $(document).ready(function() {
// $("#start-button").on("click", function(){
// $(this).addClass("background-color", "pink")
// })
// $(document).ready(function() {
// $("#start-button").on("click", function(){
// $(this).addClass("background-color", "tan")
// })
// $(document).ready(function() {
// $("#start-button").on("click", function(){
// $(this).addClass("background-color", "black")
// })
// $(document).ready(function() {
// $("#start-button").on("click", function(){
// $(this).addClass("background-color", "yellow")
// })
// $(document).ready(function() {
// $("#start-button").on("click", function(){
// $(this).addClass("background-color", "red")
// })
// $(document).ready(function() {
// $("#start-button").on("click", function(){
// $(this).addClass("background-color", "purple")
// })   
    
//  });

$(document).ready(function() {
    $("#getBoom").on("click", function() {
      $(".boom").html(boomBoom());
    });
    $("#reset").on("click", function() {
      $(".boom").html("Try Again");
    });
  });
  
  function letsBoom() {
    var total = 0;
    for(var i = 1; i<=100; i++) {
      total += i;
      var firstBoom = false;
      var secondBoom = false;
      for(var j = i; j >= 1; j = Math.floor(j / 10)) {
        if(j % 10 === 7 || j % 7 === 0)
          firstBoom = true;
      }
      for(var j = total; j >= 1; j = Math.floor(j / 10)) {
        if(j % 10 === 7 || j % 7 === 0)
          secondBoom = true;
      }
      if(firstBoom !== secondBoom) {
        if(firstBoom)
          console.log("Boom! " + total);
        else
         console.log(i + " Boom!");
      }
      else
        console.log(i + " " + total);
    }
  }
  
  function boomBoom() {
    var text = "";
    var total = 0;
    for(var i = 1; i<=100; i++) {
      total += i;
      var firstBoom = false;
      var secondBoom = false;
      for(var j = i; j >= 1; j = Math.floor(j / 10)) {
        if(j % 10 === 7 || j % 7 === 0)
          firstBoom = true;
      }
      for(var j = total; j >= 1; j = Math.floor(j / 10)) {
        if(j % 10 === 7 || j % 7 === 0)
          secondBoom = true;
      }
      if(firstBoom !== secondBoom) {
        if(firstBoom)
          text += ("Boom! " + total + "</br>");
        else
         text += (i + " Boom!</br>");
      }
      else
        text += (i + " " + total + "</br>");
    }
    letsBoom();
    return text;
  }


 

// $(this).addClass("darkgrey_background")
//    console.log("this");
// });
