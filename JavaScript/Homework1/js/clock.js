

    let name = prompt("adınız nedir?");
    let fullName = (document.getElementById("myName").innerHTML=name);

setInterval(showTime, 1000);
function showTime() {
  var now = new Date();
  var cl = now.getHours();
  var min = now.getMinutes();
  var sn = now.getSeconds();
  var days = [
    "pazar",
    "pazartesi",
    "salı",
    "çarşamba",
    "perşembe",
    "cuma",
    "cumartesi",
  ];
  var day = days[now.getDay()];

  cl = cl < 10 ? "0" + cl : cl;
  min = min < 10 ? "0" + min : min;
  sn = sn < 10 ? "0" + sn : sn;

  var time = cl + " :" + min + ":" + sn+" "+day;
  var saat = (document.getElementById("myClock").innerHTML = time);
  
}
