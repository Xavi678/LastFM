


	$(document).ready(function () {
		
	
			
	
			$("#login").click(myLoginFunction);


//alert(clau_api);
});

function myLoginFunction(){
	/*
	params api_key ( my api key)
	cb the web that goes when user is authenticated relative path ( depends on the server is launched): http://localhost:3000/mainpage.ht*/
	var url= 'http://www.last.fm/api/auth/?api_key='+clau_api+'&cb='+window.location.href +'main.html';
	
	window.location.replace(url);
}