function showTime() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var session = "AM";

    if (h>=12){
      session="PM";
    }
    
    if (h>12){
      h = h-12;
    }   
    h = h<10 ? "0"+h : h ;
    s = s<10 ? "0"+s :  s; 
    m = m<10 ? "0"+m :  m; 
    
    var time = h + ":"+ m +":"+ s +" " + session;
    document.getElementsByTagName('h1')[0].innerText = time;
     setTimeout(showTime,1000);
}