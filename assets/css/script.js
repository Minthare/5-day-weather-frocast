
function getforecast(city){

    baseurl = 'http://api.openweathermap.org/geo/1.0/direct?q='+ city   +'&appid=5c512f33fe02332a484f32ab96d05e98'
    fetch(baseurl)
        .then(response => response.json())
        .then(data => data)
      .then (data => {
        console.log(data[0].lon)
        console.log(data[0].lat)
        fivedayforecast = 'https://api.openweathermap.org/data/2.5/forecast?lat='+data[0].lat+'&lon='+data[0].lon+'&appid=5c512f33fe02332a484f32ab96d05e98';
        console.log(fivedayforecast)
        fetch(fivedayforecast)
        .then(response => response.json())
        .then(data => data)
        .then(data=>{
            console.log(data)
            //console.log(data.list)
  
  
            currentweather = data.list[0]
            currenttemp = currentweather.main.temp;
            currenthumidity = currentweather.main.humidity;
            currentwind = currentweather.wind.speed;
          currentdate = currentweather.dt_txt;
          console.log(currentdate);
            document.getElementById("temp").innerHTML = currenttemp + ' F'
            document.getElementById("wind").innerHTML = currentwind + ' MPH'
            document.getElementById("humidity").innerHTML = currenthumidity + ' %'
          document.getElementById("today").innerHTML = currentdate
  
            index = [0,7,14,21,28,39]
            for (var i = 1 ; i < 6 ; i++)
            {
                weatherdata = data.list[index[i]]
                tempid = 'temp'+i
                windid = 'wind'+i
                humidityid = 'humidity'+i
            dateid = 'date'+i
                temp = weatherdata.main.temp;
                humidity = weatherdata.main.humidity;
                wind = weatherdata.wind.speed;
            date = weatherdata.dt_txt;
            console.log(date);
                document.getElementById(tempid).innerHTML = temp + ' F'
                document.getElementById(windid).innerHTML = wind + ' MPH'
                document.getElementById(humidityid).innerHTML = humidity + ' %'
            document.getElementById(dateid).innerHTML = 'Date : '+date
  
  
            }
            
            
  
        })
        .catch(err => console.error(err));
      })
      .catch(err => console.error(err));
  
  }
  
  

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