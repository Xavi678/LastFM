


	$(document).ready(function () {
		
	
			
	
			$("#login").click(myLoginFunction);


//alert(clau_api);
});

function myLoginFunction(){
	/*
	params api_key ( my api key)
	cb the web that goes when user is authenticated relative path ( depends on the server is launched): http://localhost:3000/mainpage.ht*/
	if(window.location.href.includes("index.html")){
		var url=window.location.href.substring(0,window.location.href.length-10);
	}
	var url= 'http://www.last.fm/api/auth/?api_key='+clau_api+'&cb='+url+'main.html';
	
	window.location.replace(url);
}