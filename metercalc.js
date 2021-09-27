function gsm(){
    var slen = Number(document.getElementById("length").value); 
    var swt = Number(document.getElementById("weight").value);
    var swd = Number(document.getElementById("width").value);
    
    var gsm1 = (swt * 100);
    var gsm2 = (swt) / (slen * swd);

    if(document.getElementById("gsm1").checked){
        document.getElementById("output").innerHTML = "The GSM is : "+ String(gsm1) +" GSM";
        document.getElementById("check").innerHTML = "Your provided width is: "+String(swt)+
        "Warnning!!! You have to put this value after Cutting the material with gsm cutter and then measuring it";
    }
    else{
        document.getElementById("output").innerHTML = "The GSM is : "+ String(gsm2) + " GSM";
        document.getElementById("check").innerHTML = "Your provided weight is: "+String(swt)+ 
        ", your provied length is : "+String(slen)+
        ", your provided width is : "+String(swd)+
        " Warnning!!! You have to put this value after measuring the length, width, and height of your sample";
    }
}