document.addEventListener("DOMContentLoaded", function() {
var secHand = document.getElementById("sec-hand");
var minHand = document.getElementById("min-hand");
var hourHand = document.getElementById("hour-hand");
var container = document.getElementById("container");
var hello = document.getElementById("hello");
var degital = document.getElementById("degital");

function setDate() {
    var date = new Date()
    var sec = date.getSeconds()
    var min = date.getMinutes()
    var hour = date.getHours()

    secDeg =((sec / 60) * 360) + 90;
    minDeg =((min / 60) * 360) + 90
    hourDeg =((hour / 12) * 360) + 90
    secHand.style.transform = "rotate(" + secDeg + "deg)";
    minHand.style.transform = "rotate(" + minDeg + "deg)";
    hourHand.style.transform = "rotate(" + hourDeg + "deg)";
    

    if((hour >= 6 && hour < 18)){
        container.style.background = "url(https://images.unsplash.com/photo-1419133203517-f3b3ed0ba2bb?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=)";
        hello.innerHTML = "Have a nice day Enchantress"
    }

    if(sec < 10){
        sec = "0" + sec;
    }
    if(min < 10){
        min = "0" + min;
    }
    if(hour < 10){
        hour = "0" + hour;
    }
    if(hour < 12){
        hour -= 12;
    }
    degital.innerHTML = hour + ":" + "" + min + ":" + "" + sec;
    
    
    
}
setInterval(setDate, 1000)
})