

$(document).ready(function () {
    $(footer).insertAfter(".container");
    $("#afegir").click(function (e) {

        var dades = {
            method: "user.getLovedTracks",
            api_key: clau_api,
            user: $("#user").val(),
            limit: $("#elements").val()
            /* album: $("#track").val(),
             artist: $("#artist").val(),
             api_key: clau_api,
             api_sig: sessionStorage.getItem("api_sig"),
             sk:  sessionStorage.getItem("clau"),*/

        }

        /*$.ajax({
            type: "POST",
            url: "http://ws.audioscrobbler.com/2.0/?method=track.love",
           
            dataType: "xml",
            data: dades,
            success: function(xml) {
                console.log(xml);
               /* var nom=$(xml).find("name").text();
                var key=$(xml).find("key").text();
                sessionStorage.setItem("nom",nom);
                sessionStorage.setItem("clau",key);
                //$("#login").replaceWith("<p class='navbar-brand'>"+nom+"</p>");
                $("#nomUser").html("<span class='glyphicon glyphicon-user'></span> " + sessionStorage.getItem("nom"));
                //var table="<tr><th>Title</th><th>Artist</th></tr>";
                
                
            }
        });*/

        /*$.ajax("https://ws.audioscrobbler.com/2.0/", dades)
            .success(function (data) {
                $("#loved").children().remove();
                $('track', data).each(function () {
                    $("#loved").append(" <div class='media'>  <div class='media-left'>  <img src=" + $('image[size="large"]', this).text() + " class='media-object' >  </div> <div class='media-body'>"
                        + "<h4 class='media-heading'> Cançó: " + $('name', this).first().text() + "</h4>          <p> <a href=" + $('url', this).first().text() + " target='blank_'>Escoltar la Cançó</a></p> <p> Artista: " + $('artist', this).children('name').text() + "</p>  <p> Data afegida: " + $('date', this).first().text() + "</p>     </div>     </div>");
                    console.log($('name', this).first().text());
                    console.log($('artist', this).children('name').text());
                })

            }).error(function (error) {
                console.log("error");
            });*/

            $.ajax({
                type: "POST",
                
                dataType: "xml",
                url: "http://ws.audioscrobbler.com/2.0/",
                data: dades,
                success: function (data) {
                    $("#error").html("<p class='text-success'>Success</p>");
    
                    //$("#resultat").html("<p class='text-success'>S'ha afegit la Cançó</p>");
                    $("#loved").children().remove();
                $('track', data).each(function () {
                    if($('image[size="large"]', this).text()!=""){
                    $("#loved").append(" <div class='media'>  <div class='media-left'>  <img src=" + $('image[size="large"]', this).text() + " class='media-object' >  </div> <div class='media-body'>"
                        + "<h4 class='media-heading'> Cançó: " + $('name', this).first().text() + "</h4>          <p> <a href=" + $('url', this).first().text() + " target='blank_'>Escoltar la Cançó</a></p> <p> Artista: " + $('artist', this).children('name').text() + "</p>  <p> Data afegida: " + $('date', this).first().text() + "</p>     </div>     </div>");
                    }else{
                        $("#loved").append(" <div class='media'>  <div class='media-left'>  <img src='imatges/not-found.png' class='media-object'  >  </div> <div class='media-body'>"
                        + "<h4 class='media-heading'> Cançó: " + $('name', this).first().text() + "</h4>          <p> <a href=" + $('url', this).first().text() + " target='blank_'>Escoltar la Cançó</a></p> <p> Artista: " + $('artist', this).children('name').text() + "</p>  <p> Data afegida: " + $('date', this).first().text() + "</p>     </div>     </div>");
                    }
                    console.log($('name', this).first().text());
                    console.log($('artist', this).children('name').text());
                })
                },
                error: function (xhr) {
                    //alert(xhr.status);
                    $("#loved").children().remove();
                    $("#error").html("<p class='text-danger'>Error: Aquest usuari no existeix</p>");
                  }
                
            });
    });
});