

    var paisos=[];





$(document).ready(function () {
    $(footer).insertAfter(".container");

    $.getJSON("https://restcountries.eu/rest/v2/all").success(function (data) {
    
        for(let i=0;i<data.length;i++){
            //$("<option value="+data[i].name+">"+data[i].translations.es+"</option>").append("#pais");
            $('#pais').append($('<option>', {
                value: data[i].name,
                text: data[i].name
            }));
           
            //var p=trobarPais();
            //var bandera=data[i].flag;
            

            //$( "#pais" ).selectmenu( "option", "icons", { button: "ui-icon-circle-triangle-s" } );
        }
      }).error(function(jqXHR, textStatus, errorThrown){
        $("#error").removeClass().addClass("text-danger");
        $("#error").text(textStatus+": "+errorThrown+" Hi ha hagut un problema al obtenir els països");   
      }

      );

      //$("<option value='Valor'>Hola</option>").append("#pais");

    $("#boto").click(function () { 
        var dades={
            api_key: clau_api,
            format: "json",
            limit: $("#elements").val()
            };

        $("#artistes").children().remove();
        
        var pais=$("#pais").val();

        //artista.toString();
    
    $.getJSON("http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country="+pais,dades).success(function (data, textStatus, jqXHR) {
           try{
        for(var i=0;i<data.topartists.artist.length;i++){
            //$("#artistes").append("<li>"+data.topartists.artist[i].name+"</li>");

            $("#artistes").append(" <div class='media'>  <div class='media-left'>  <img src="+data.topartists.artist[i].image[2]['#text']+" class='media-object' >  </div> <div class='media-body'>"         
            +"<h4 class='media-heading'> Grup: "+data.topartists.artist[i].name+"</h4>          <p> <a href="+data.topartists.artist[i].url+" target='blank_'>pàgina web del grup</a></p> <p> Reproduccions: "+data.topartists.artist[i].listeners+"</p>       </div>     </div>");
        }
        $("#error").removeClass().addClass("text-success");
        $("#error").text("Success!");  
    }catch(error){
        $("#error").removeClass().addClass("text-danger");
        $("#error").text("La petició ha fallat, potser que el país que hagis sel·leccionat no estigui disponible, o bé que hagi fallat els servidor");  
    }

        }
    ).error(function(jqXHR, textStatus, errorThrown){
        $("#error").removeClass().addClass("text-danger");
        $("#error").text(textStatus+": "+errorThrown+" Hi ha hagut un problema del servidor al obtenir els països");  
    }

    );

});
});


