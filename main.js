

function GetInfo() {

    var newName = document.getElementById("cityInput");
    var cityName = document.getElementById("cityName");
    cityName.innerHTML = "The weather in "+newName.value+"";

fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&units=imperial&appid=b2eadc46103e4d8d2e324b6713fd652c')
.then(response => response.json())
.then(data => {

   

    aweek(data);
    updateMap(data);
    

    


})

.catch(err => alert("Something Went Wrong: Try Checking Your Internet Coneciton"))
}

function DefaultScreen(){
    document.getElementById("cityInput").defaultValue = "brooklyn";
    GetInfo();
}

function aweek(data){
    for(i = 0; i<5; i++){
         document.getElementById("day" + (i+1) + "Min").innerHTML = "Min: " + Number(data.list[i].main.temp_min ).toFixed(1)+ "°F";
        document.getElementById("day" + (i+1) + "Max").innerHTML = "Max: " + Number(data.list[i].main.temp_max ).toFixed(1) + "°F";
        document.getElementById("day" + (i+1) + "temp").innerHTML = " " + Number(data.list[i].main.temp ).toFixed(1) + "°F";
        document.getElementById("day" + (i+1) + "wind").innerHTML = "Wind speed: " + Number(data.list[i].wind.speed ).toFixed(0) + "km/h";
        document.getElementById("day" + (i+1) + "fl").innerHTML = "feels like: " + Number(data.list[i].main.feels_like ).toFixed(0) + "°F";
        document.getElementById("day" + (i+1) +"ds").innerHTML = "" +data.list[i].weather[0].description;
        document.getElementById("day" + (i+1) + "hum").innerHTML = "humidity: " + Number(data.list[i].main.humidity ).toFixed(0) + "%";
        // console.log(mc);
        let flag 
        let mincc = Math.floor((data.list[i].main.temp_min-32)/1.8);
        let maxc = Math.floor((data.list[i].main.temp_max-32)/1.8);
        let tempc = Math.floor((data.list[i].main.temp-32)/1.8);
        let flc = Math.floor((data.list[i].main.feels_like-32)/1.8);
        
        // console.log(mincc,maxc ,tempc, flc);

        document.getElementById("convert").addEventListener("click" ,function(){
            
                 
    
                // let mincc = Number(data.list[i].main.temp_max -273.15).toFixed(1);
                // let maxc = Number(data.list[i].main.temp_max -273.15).toFixed(1);
                // let tempc =  Number(data.list[i].main.temp -273.15).toFixed(1);
                // let flc = Number(data.list[i].main.feels_like -273.15).toFixed(0) ;
                for (i= 0 ;i<5; i++){
                    console.log(mincc,maxc ,tempc, flc);
                document.getElementById("day" + (i+1) + "Min").innerText = "Min: " +mincc+ "°C";
                // console.log(mincc);
                document.getElementById("day" + (i+1) + "Max").innerHTML = "Max: " + maxc + "°C";
                document.getElementById("day" + (i+1) + "temp").innerHTML = " " +tempc+ "°C";
                document.getElementById("day" + (i+1) + "wind").innerHTML = "Wind speed: " + Number(data.list[i].wind.speed ).toFixed(0) + "km/h";
                document.getElementById("day" + (i+1) + "fl").innerHTML = "feels like: " + flc + "°C";
                document.getElementById("day" + (i+1) +"ds").innerHTML = "" +data.list[i].weather[0].description;
                document.getElementById("day" + (i+1) + "hum").innerHTML = "humidity: " + Number(data.list[i].main.humidity ).toFixed(0) + "%";
 
                }
                
                

                
                
                
                
        });

        
       
    }

   

    

    //Getting Weather Icons
     for(i = 0; i<5; i++){
        document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+
        data.list[i].weather[0].icon
        +".png";
    }
    
    console.log(data)
}





function updateMap(data){

    let lat = data.city.coord.lat;
    let lon = data.city.coord.lon;
    let map = document.querySelector(".map");
    map.innerHTML = `<iframe width="420px" height="350px" src="https://embed.windy.com/embed2.html?lat=${lat}&lon=${lon}&detailLat=40.676&detailLon=-73.875&width=650&height=450&zoom=5&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1" frameborder="0"></iframe>`;
    console.log(map);
}


document.querySelector(".search_bar").addEventListener("keyup",function(event){
    if(event.key=="Enter"){
        // weather.search();
        GetInfo();
    }
});




//Getting and displaying the text for the upcoming five days of the week
var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];
let t = d.toLocaleString("en-US",{timeZone:"America/New_york"});
document.querySelector(".time").innerHTML=t;

//Function to get the correct integer for the index of the days array
function CheckDay(day){
    if(day + d.getDay() > 6){
        return day + d.getDay() - 7;
    }
    else{
        return day + d.getDay();
    }
}

    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i)];
    }

    document.querySelector(".aa").addEventListener("click", function() {
        alert("Done");
      });