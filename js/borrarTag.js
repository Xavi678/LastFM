$(document).ready(function () {
    if(localStorage.getItem("nom")==null || localStorage.getItem("nom")==""){
        window.location.href="/";
        alert("No estas Loggejat");
    }

    $("#afegir").click(function () { 

     
        var dades={
            method: "album.addTags",
            artist: $("#artista").val(),
            album: $("#album").val(),
            tags: $("#tag").val(),
            sk: sessionStorage.getItem("clau"),
            token: sessionStorage.getItem("token"),
            api_key: clau_api

        }
        
        var api_sig=calculate_apisig(dades);

        dades['api_sig']=api_sig;
        //dades.push(clau_api);
       
        $.ajax({
            type: "POST",
            
            dataType: "xml",
            url: "http://ws.audioscrobbler.com/2.0/",
            data: dades,
            success: function (response) {

                $("#resultat").html("<p class='text-success'>S'ha afegit la Cançó</p>");
                
            },
            error: function (xhr) {
                alert(xhr.status);
                $("#resultat").html("<p class='text-danger'>Error: No s'ha afegit la Cançó</p>");
              }
            
        });
        
    });
});



function calculate_apisig(params){

    //Crec que només necessitem apikey, token i secret i no necessitem params, els podem treure de sessionStorage
    //Calcula l'apiSig a partir dels valors d'abans...
      ss = "";
      st = [];
      so = {};
      so['api_key'] = params['api_key'];
      so['token'] = params['token'];
      Object.keys(params).forEach(function(key){
          st.push(key); // Get list of object keys
      });
      st.sort(); // Alphabetise it
      st.forEach(function(std){
          ss = ss + std + params[std]; // build string
      });
      ss += apiS;
          // console.log(ss + last_fm_data['secret']);
          //Segons documentacio : https://www.last.fm/api/webauth
          //api signature = md5("api_keyxxxxxxxxmethodauth.getSessiontokenxxxxxxxmysecret")
          //OBJECTIU NOSTRE SERA ACONSEGUIR UNA LINEA COM AQUESTA
          // api_keyAPIKEY1323454formatjsonmethodauth.getSessiontokenTOKEN876234876SECRET348264386
      //hashed_sec = $.md5(unescape(encodeURIComponent(ss)));
      return  md5(unescape(encodeURIComponent(ss))); // "2063c1608d6e0baf80249c42e2be5804"
     /* console.log("La apiSig es: " + hashed_sec);
      so['api_sig'] = hashed_sec; // Correct when calculated elsewhere.
      return so; // Returns signed POSTable object*/
  }