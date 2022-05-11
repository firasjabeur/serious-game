const btn = document.querySelector('#btn');
const img = document.getElementById('img');



btn.addEventListener('click', () => {
    console.log('yes');
    img.classList.toggle('show') 
})
function gateOutput()
{	
    var i1 = document.getElementById("input1").value;
    var i2 = document.getElementById("input2").value;
    var i3 = document.getElementById("input3").value;
    var i4 = document.getElementById("input4").value;
    var i5 = document.getElementById("input5").value;
    var i6 = document.getElementById("input6").value;
    var i7 = document.getElementById("input7").value;
    var i8 = document.getElementById("input8").value;
    var v ;
    var x ;
    var p ;
    var w ;
    var pic;
    let element = document.getElementById("button");

     v=((i1 & i2) & (i3 & i4));
     if(v==1){
         x= v-1 ;
        }
         else{
             x= v+1 ;

         }

     
     p=((i5 | i6) & (i7 | i8 ));
     w=(p | x) ;
     if(w==0){
        pic = "offbulb.png";
     }
     else{
        pic = "onbulb.png";
        element.removeAttribute("hidden");
        window.clearInterval(update);
        c = "-";
     }
     document.getElementById('bulb').src = pic ;
     document.getElementById("output").value = w;
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


