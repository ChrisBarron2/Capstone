// These are the is the ajax parameters
$.ajax({
    url: "https://api.icndb.com/jokes/random3",
    
    success : function(data) {
     console.log(data) 
     const jokeOne= data.value [0].joke //array of how to number the jokes
     const jokeTwo = data.value [1].joke
     const jokeThree = data.value [2].joke
     $("#jokeOneText") .html(jokeOne) // taking information from the data and assign it to the console
     $("#jokeTwoText") .html(jokeTwo)
     $("#jokeThreeText") .html(jokeThree)
    },   
// This will let me know were the function.     
error : function(request,error)
{
        console.log(error)  
        console.log(request)  

}

});




