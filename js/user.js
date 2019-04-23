$(document).ready(function () {
    $("#nom").html("<h2>"+sessionStorage.getItem("nom")+"</h2>");

    var w={
        api_key: clau_api,
        user: sessionStorage.getItem("nom"),

    }

 $.ajax({
        type: "GET",
        url: "http://ws.audioscrobbler.com/2.0/?method=user.getInfo",
        async: false,
       
        data: w,
        success: function(xml) {
            console.log(xml);
            
            if($(xml).find('image').eq(3).text()!="" && $(xml).find('image').eq(3).text()!=null ){
            $("#imatge").html( "<img  class='img-thumbnail' src="+$(xml).find('image').eq(3).text()+"/>  ");
            }else{
                $("#imatge").html( "<img class='img-thumbnail '  src='imatges/default.png'/> ");
            }

            $("#nomReal").html($(xml).find('realname').text());
            $("#url").html("<a href="+$(xml).find('url').text()+">"+"Pagina web"+"</a>");
            $("#country").html($(xml).find('country').text());
            $("#age").html($(xml).find('age').text());
            $("#gender").html($(xml).find('gender').text());
            $("#playcount").html($(xml).find('playcount').text());
            $("#playlists").html($(xml).find('playlists').text());
            $("#footer").html(footer);
            /*var nom=$(xml).find("name").text();
            var key=$(xml).find("key").text();
            localStorage.setItem("nom",nom);
            sessionStorage.setItem("clau",key);
            //$("#login").replaceWith("<p class='navbar-brand'>"+nom+"</p>");
            $("#nomUser").html("<span class='glyphicon glyphicon-user'></span> " + localStorage.getItem("nom"));
            //var table="<tr><th>Title</th><th>Artist</th></tr>";
            $("#login").hide();
        */
       
        
        },error: function (param) { 
            alert("error");
         }
        
    });


});