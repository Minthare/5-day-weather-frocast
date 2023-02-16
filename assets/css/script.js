function display_search_history()
{
	var keys = Object.keys(localStorage);
	var searchhistory = document.querySelector('#searchhistory')	
	for(var i = 0;i < keys.length; i++)
	{
		var btn = document.createElement('button');
		btn.id = keys[i]
		btn.textContent = keys[i]
		searchhistory.appendChild(btn)
		var br = document.createElement('br');
		searchhistory.appendChild(br);
		
	}

}

display_search_history()

$('button').click(function(event) {
   			 console.log("button clicked",event.target.id)
   			 
   			 if (event.target.id == 'searchbtn')
   			 {
   			var input = document.getElementById("cinput").value;
				localStorage.setItem(input,input);
				getforecast(input)
				document.getElementById("cityname").innerHTML=input
				var searchhistory = document.querySelector('#searchhistory')
				searchhistory.replaceChildren();
				display_search_history();
			  }
			  else{
			  	getforecast(event.target.id)
   			 document.getElementById("cityname").innerHTML=event.target.id

			  }
			});