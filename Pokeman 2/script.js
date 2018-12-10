$("#goButton").click(function() {
    const pokemonInput = $("#name").val()
    $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon/${pokemonInput}/`,
        success : function(data) {     
          const pic = data.sprites.front_default
          $("#pokemonName").html(data.name)
          $("#pic").attr("src", pic)
        },
        error : function(request,error)
        {
          alert("not a valid pokemon")
        }
    });


})
