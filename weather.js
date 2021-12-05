let weather ={
    "apikey":"b2eadc46103e4d8d2e324b6713fd652c",
    fetchWeather:function(city){
        fetch("http://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=imperial&appid="+ this.apikey)
        .then((response)=>response.json())
        // .then((data)=>console.log(data));
        .then((data)=>
        {
            this.displayWeather(data)
            updateMap(data);
        });
    
    },

    // displayWeatherc:function (data) {
    //    const {name} = data;
    //    const {icon, description} = data.weather[0];
    //     const {temp, humidity,feels_like,temp_max,temp_min}= data.main;
    //     const {speed} = data.wind;
    //     const {country,sunrise,sunset} = data.sys;
    //     console.log(name, icon,description,temp,humidity,speed,temp_max);
    //     let ct=(temp-32)/1.8;
    //     let cf=(feels_like-32)/1.8;
    //     let ctemp_max=(temp_max-32)/1.8;
    //     let ctemp_min=(temp_min-32)/1.8;
    //     document.querySelector(".city").innerText = "Weather in "+ name;
    //     document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+icon +".png";
    //     document.querySelector(".description").innerText = description;
    //     document.querySelector(".temp").innerText =  ct +"°C";
    //     document.querySelector(".humidity").innerText = "humidity: "+ humidity+"%";
    //     document.querySelector(".feels_like").innerText = "feels like: "+cf+"°C";
    //     document.querySelector(".temp_max").innerText = "H : "+ctemp_max+"°C ";
    //     document.querySelector(".temp_min").innerText = "L : "+ctemp_min+"°C";
    //     document.querySelector(".wind").innerText = "Wind speed: "+ speed+"km/h";
    //     // document.querySelector("")
    //     console.log(country+","+sunrise+","+sunset);
    //     document.querySelector(".weather").classList.remove("loading");
       


    // },
    
    displayWeather: function(data){
        console.log(data);
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity,feels_like,temp_max,temp_min}= data.main;
        const {speed} = data.wind;
        // const {rain1} =data.rain;
        const {country,sunrise,sunset} = data.sys;
        console.log(name, icon,description,temp,humidity,speed,temp_max);
        document.querySelector(".city").innerText = "Weather in "+ name;
        document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+icon +".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText =  temp +"°F";
        document.querySelector(".humidity").innerText = "humidity: "+ humidity+"%";
        document.querySelector(".feels_like").innerText = "feels like: "+feels_like+"°F";
        document.querySelector(".temp_max").innerText = "H : "+temp_max+"°F ";
        document.querySelector(".temp_min").innerText = "L : "+temp_min+"°F";
        document.querySelector(".wind").innerText = "Wind speed: "+ speed+"km/h";
        // document.querySelector("")
        console.log(country+","+sunrise+","+sunset);
        document.querySelector(".weather").classList.remove("loading");
        let ct=Math.floor((temp-32)/1.8);
        let cf=Math.floor((feels_like-32)/1.8);
        let ctemp_max=Math.floor((temp_max-32)/1.8);
        let ctemp_min=Math.floor((temp_min-32)/1.8);
        // document.body.style.backgroundImage="url('https://source.unsplash.com/1600*900/?"+ name +"')";
        // document.body.style.backgroundImage="url"(' https://api.unsplash.com/search/photos?query=canada ');
        //-----------------------------------------------------------------------------------------------
        document.querySelector(".temp").addEventListener("click",function(){
            document.querySelector(".temp").innerText =  ct +"°C";
            document.querySelector(".humidity").innerText = "humidity: "+ humidity+"%";
            document.querySelector(".feels_like").innerText = "feels like: "+cf+"°C";
            document.querySelector(".temp_max").innerText = "H : "+ctemp_max+"°C ";
            document.querySelector(".temp_min").innerText = "L : "+ctemp_min+"°C";
            document.querySelector(".wind").innerText = "Wind speed: "+ speed+"km/h";
        });
        
        // console.log(country+","+sunrise+","+sunset);
        // document.querySelector(".weather").classList.remove("loading");
        
            
        
        


    },
    search:function(){
        this.fetchWeather(document.querySelector(".search_bar").value)
    },

    

    

    
    
    
};


function updateMap(data){

    let lat = data.coord.lat;
    let lon = data.coord.lon;
    let map = document.querySelector(".map");
    map.innerHTML = `<iframe width="420px" height="350px" src="https://embed.windy.com/embed2.html?lat=${lat}&lon=${lon}&detailLat=40.676&detailLon=-73.875&width=650&height=450&zoom=5&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1" frameborder="0"></iframe>`;
    console.log(map);
}





document.querySelector(".search button").addEventListener("click", function(){
    weather.search();

});

document.querySelector(".search_bar").addEventListener("keyup",function(event){
    if(event.key=="Enter"){
        weather.search();
    }
});

weather.fetchWeather("brooklyn");
//=========================================
document.querySelector(".convert").addEventListener("click", function name(params) {
    displayWeatherc();
});

const d = new Date();
let country = document.querySelector(".search_bar").value;
// let t = d.toLocaleString('en-US', { timeZone: });
let t = d.toLocaleString('en-US', { timeZone: 'America/New_York' });
document.querySelector(".time").innerHTML = t;






