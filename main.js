const color=["green","red", "rgba(100,999,999)" , "#5AB599"];
const bodyColor=document.getElementById("bodyColor");
const colorNumber=document.getElementById("colorNumber");
 

 function randomFunction(min,max){
    randomNumber=Math.floor(Math.random()*max+min); 
    return randomNumber;
}

function btnClick(min,max){
    randomFunction(min,max);
    colorFunction();
 }
 function colorFunction(){
     console.log("Random Number Generated : " + randomNumber ); 
     
     switch(randomNumber){
         case 0:{
             bodyColor.style.backgroundColor=color[randomNumber];
             colorNumber.textContent=color[randomNumber];

             break;
         }
         case 1:{
             bodyColor.style.backgroundColor=color[randomNumber];
             colorNumber.textContent=color[randomNumber];
            break;
        }
         case 2:{
            colorNumber.textContent=rgbFunction();
            break;
        }
         case 3:{
             colorNumber.textContent=hexFunction();;
             
             break;
            }
            
        }
        
    }
    function hexFunction(){
        const hexArray=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
        let RR=[hexArray[randomFunction(0,16)],hexArray[randomFunction(0,16)]];
        let GG=[hexArray[randomFunction(0,16)],hexArray[randomFunction(0,16)]];
        let BB=[hexArray[randomFunction(0,16)],hexArray[randomFunction(0,16)]];
        
        let colorHex="#"+RR[0]+RR[1]+GG[0]+GG[1]+BB[0]+BB[1];
        console.log(colorHex);
        bodyColor.style.backgroundColor= colorHex;
        return colorHex;
}
function rgbFunction(){
    var randomOne=randomFunction(0,1000);
    var randomTwo=randomFunction(0,1000);
    var randomThree=randomFunction(0,1000);

    console.log("Random RBGA : " +"rbga("+randomOne+"," +randomTwo+","+randomThree+")" ); 
    var rgbaColor= "rgba("+randomOne+"," +randomTwo+","+randomThree+")";
    bodyColor.style.backgroundColor=rgbaColor; 
    return rgbaColor;
}