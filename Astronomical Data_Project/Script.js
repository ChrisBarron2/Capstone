
$.getJSON('https://api.aerisapi.com/sunmoon/atlanta,ga?client_id=MumumlvxEohu7mejJasEs&client_secret=24s2jZHalT7vShngIsoCtgINaDHgTiooleLQYdXg')
 .then(function(response) {
     console.log('data')
 })
 $("#goButton").click(function () {
    const getCityUputFromUser = $("#inputText").val();
 
    $.ajax({
        success: function (data) {
          const multimedia= data.results[0].multmedia;
        
          //    
//   const sunRise = "This is Sun rise " + data.results[0].sun_rise;
//   const sunSet = "This is Sun set " + data.results[0].sun_set;
//   const moonRise = "This is Moon rise " + data.results[0].moon_rise;
//   const moonSet = "This is Moon set " + data.results[0].moon_set;  
 
  console.log(data.results)[0]
//   console.log(data.results[0].display_sun_rise)
//   console.log(data.results[0].display_sun_set)
//   console.log(data.results[0].display_moon_rise)
//   console.log(data.results[0].display_moon_set):

};


