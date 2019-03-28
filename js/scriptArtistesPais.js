


var data={
api_key: clau_api,
format: "json"
};


$(document).ready(function () {
    $("#boto").click(function () { 

        $("#artistes").children().remove();
        
        var pais=$("#pais").val();

        //artista.toString();
    
    $.getJSON("http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country="+pais,data,function (data, textStatus, jqXHR) {
            
        for(var i=0;i<10;i++){
            $("#artistes").append("<li>"+data.topartists.artist[i].name+"</li>");
        }

        }
    );

});
});