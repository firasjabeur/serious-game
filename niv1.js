const btn = document.querySelector('#btn');
const img = document.getElementById('img');



btn.addEventListener('click', () => {
    img.classList.toggle('show') 
})


function gateoutput()
{
    var i1 = document.getElementById("input1").value;
    var i2 = document.getElementById("input2").value;
    var o;
    var pic;

    let element = document.getElementById("button");
    o = (i1 & i2);
    if (o == 0)
    {
        pic = "offbulb.png";

    }
    else {
        pic = "onbulb.png";
       element.removeAttribute("hidden");

       window.clearInterval(update);
        c = "-";
    }
    document.getElementById('bulb').src = pic ;
    document.getElementById("output").value = o;
    

}





var c=60;

    function timer1() {
        let element = document.getElementById("test1");
  
       c = c - 1;
       
        if(c <60) {
           time1.innerHTML = c;
           

       }

       if (c < 1) {
       
           window.clearInterval(update);
           message1.innerHTML = "Time's up";
           message2.innerHTML = "";
           message3.innerHTML = "";
           message4.innerHTML = "<a href='index.html'><button id=button onclick=repeat001()>Restart</button></a>"; ;
           element.setAttribute("style", "visibility:hidden");
           
           

       }
   }
   update = setInterval("timer1()", 1000);



