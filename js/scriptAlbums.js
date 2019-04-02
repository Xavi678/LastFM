








/* $(document).ready(function () {
    $("#boto").click(function () { 

        $("#albums").children().remove();
        
        var artista=$("#nom").val();

        //artista.toString();
    
    $.getJSON("http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist="+artista,dades,function (data, textStatus, jqXHR) {
            
    if(data.error==null){
        $("#error").removeClass().addClass("text-success");
        $("#error").text("Success!");
        for(var i=0;i<10;i++){
            $("#albums").append("<li>"+data.topalbums.album[i].image[2].size+data.topalbums.album[i].name+"</li>");
        }
    }else{
        $("#error").removeClass().addClass("text-danger");
        $("#error").text(data.message);
        //$("<br>  <p id='error' class='text-danger'> Error: "+data.message+"</p>").insertAfter("#grup");
    }

        }
    ).error(function(jqXHR, textStatus, errorThrown){
        $("#error").removeClass().addClass("text-danger");
        $("#error").text(jqXHR.responseText);
        //$("<br>  <p id='error'  class='text-danger'> "+jqXHR.responseText+"</p>").insertAfter("#grup");
    });

});

}); */



$(document).ready(function () {
    $(footer).insertAfter(".container");
    $("#boto").click(function () { 
        var dades={
            api_key: clau_api,
            format: "json",
            limit: $("#elements").val()
            };

        $("#albums").children().remove();
        
        var artista=$("#nom").val();

        //artista.toString();
    
    $.getJSON("http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&autocorrect=1&artist="+artista,dades).success(function(data){

if(data.error==null){
    $("#error").removeClass().addClass("text-success");
    $("#error").text("Success!");
    for(var i=0;i<data.topalbums.album.length;i++){
        //$("#albums").append("<li> <img src="+data.topalbums.album[i].image[2]['#text']+"/>"+data.topalbums.album[i].name+"</li><br>");

        $("#albums").append(" <div class='media'>  <div class='media-left'>  <img src="+data.topalbums.album[i].image[2]['#text']+" class='media-object' >  </div> <div class='media-body'>         <h4 class='media-heading'> Títol: "+data.topalbums.album[i].name+"</h4>          <p> <a href="+data.topalbums.album[i].url+" target='blank_'>pàgina web de l'àlbum</a></p> <p> Reproduccions: "+data.topalbums.album[i].playcount+"</p>       </div>     </div>");
        
        
    }
}else{
    $("#error").removeClass().addClass("text-danger");
    $("#error").text(data.message);
    //$("<br>  <p id='error' class='text-danger'> Error: "+data.message+"</p>").insertAfter("#grup");
}

    }).error(function(jqXHR, textStatus, errorThrown){
        $("#error").removeClass().addClass("text-danger");
        $("#error").text(textStatus+": "+errorThrown+" Hi ha hagut un problema al enviar la petició");
        //$("#error").text(jqXHR.responseText);
        //$("<br>  <p id='error'  class='text-danger'> "+jqXHR.responseText+"</p>").insertAfter("#grup");
    });

});
});


