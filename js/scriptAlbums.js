






var dades={
api_key: clau_api,
format: "json"
};

$(document).ready(function () {
    $("#boto").click(function () { 

        $("#albums").children().remove();
        
        var artista=$("#nom").val();

        //artista.toString();
    
    $.getJSON("http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist="+artista,dades,function (data, textStatus, jqXHR) {
            
    if(data.error==null){
        $("#error").hide();
        for(var i=0;i<10;i++){
            $("#albums").append("<li>"+data.topalbums.album[i].image[2].size+data.topalbums.album[i].name+"</li>");
        }
    }else{
        $("<br>  <p id='error' class='text-danger'> Error: "+data.message+"</p>").insertAfter("#grup");
    }

        }
    ).error(function(jqXHR, textStatus, errorThrown){
        $("<br>  <p id='error'  class='text-danger'> "+jqXHR.responseText+"</p>").insertAfter("#grup");
    });

});
});