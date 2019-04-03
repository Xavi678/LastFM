



var data={
api_key: clau_api,
format: "json"
};

$(document).ready(function () {

    var token=getParameterByName("token");
    
    if(token!=""){

    

    sessionStorage.setItem("token",token);

   

   //last_fm_calculate_apisig(clau_api,token,'auth.getSession');
    sig=calcularsig(clau_api,token,'methodauth.getSession',apiS);
    sessionStorage.setItem("api_sig",sig);
    var headers={
        api_key: clau_api,
        token: token,
        api_sig: sig,
       
    }

   /* .ajax({
        type : 'GET',
        url : 'http://ws.audioscrobbler.com/2.0/?',
        data : 'method=auth.getSession' +
               '&api_key='+clau_api+
               '&token='+token +
               '&api_sig='+sig,
        
        success : function(data) {
              /*  $('#success #artistName').html(data.user.name);
               $('#success #artistImage').html('<img src="' + data.user.image['#text'] + '" />');
               $('#success #artistBio').html(data.user.playcount);
               console.log(data);
           },
        error : function(code, message){
             $('#error').html('Error Code: ' + code + ', Error Message: ' + message);
        }
    });*/

    $.ajax({
        type: "GET",
        url: "http://ws.audioscrobbler.com/2.0/?method=auth.getSession",
       
        dataType: "xml",
        data: headers,
        success: function(xml) {
            var nom=$(xml).find("name").text();
            var key=$(xml).find("key").text();
            sessionStorage.setItem("nom",nom);
            sessionStorage.setItem("clau",key);
            //$("#login").replaceWith("<p class='navbar-brand'>"+nom+"</p>");
            $("#nomUser").html("<span class='glyphicon glyphicon-user'></span> " + sessionStorage.getItem("nom"));
            //var table="<tr><th>Title</th><th>Artist</th></tr>";
            
            
        }
    });

    // $.getJSON("http://ws.audioscrobbler.com/2.0/?method=auth.getSessi",onheaders, function(data){
    //     console.log(data.name);
    //     console.log("la sessio es " + data.key);
    // });
    
//     $("#boto").click(function () { 

//         $("#albums").children().remove();
        
//         var artista=$("#nom").val();

//         //artista.toString();
    
//     $.getJSON("http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist="+artista,data,function (data, textStatus, jqXHR) {
            
//         for(var i=0;i<10;i++){
//             $("#albums").append("<li>"+data.topalbums.album[i].name+"</li>");
//         }

//         }
//     );

// });
    }else if(sessionStorage.getItem("nom")!="" && sessionStorage.getItem("nom")!=null){
        $("#nomUser").html("<span class='glyphicon glyphicon-user'></span> "+ sessionStorage.getItem("nom"));
    }else{
        alert("Per poder entrar primer t'hauràs d'autenticar!!!");
        window.location="index.html";
    }

    $("#sortir").click(function(){
        sessionStorage.removeItem("nom");
        window.location="index.html";

    });




});


function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


/*function last_fm_calculate_apisig(key,token,sessio){

    //Crec que només necessitem apikey, token i secret i no necessitem params, els podem treure de sessionStorage
    //Calcula l'apiSig a partir dels valors d'abans...
   var params=[];
     params['api_key']=key;
     params['method']=sessio;
     params['token']=token;
     
    ss = "";
      st = [];
      so = {};
      so['api_key'] = key;
      so['token'] = token;
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
      var hashed_sec = md5(unescape(encodeURIComponent(ss))); // "2063c1608d6e0baf80249c42e2be5804"
      console.log("La apiSig es: " + hashed_sec);
      so['api_sig'] = hashed_sec; // Correct when calculated elsewhere.
      //return so['api_sig']; // Returns signed POSTable object
      console.log(so['api_sig']);
}*/

function calcularsig(key,token,sessio,secret){

    var sig=md5(unescape(encodeURIComponent('api_key'+key+sessio+'token'+token+secret)));
    console.log(sig);
   return sig;

}

// 96f558daf5e1d971c8d804ca9e4a4146
// 96f558daf5e1d971c8d804ca9e4a4146