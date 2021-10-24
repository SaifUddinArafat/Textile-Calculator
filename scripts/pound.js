function pound(){
    var wt = Number(document.getElementById("weight").value);

    var poundTokg = (wt * 0.45359237);
    var poundTogm = (wt * 453.59237);
    var poundTograin = (wt * 7000);
    var poundTomiligm = (wt * 453592.37);
    var poundToounce = (wt * 16);

    //Clearing Input Box 
    var input = document.getElementById('weight');
    input.value = " ";

    if (document.getElementById("kg").checked){
        document.getElementById("output").innerHTML = "Weight is : "+String(poundTokg)+" Kg";
    }
    else if (document.getElementById("gm").checked){
        document.getElementById("output").innerHTML = "Weight is : "+String(poundTogm)+ " gm";
    }
    else if (document.getElementById("mg").checked){
        document.getElementById("output").innerHTML = "Weight is : "+String(poundTomiligm)+ " mg";
    }
    else if (document.getElementById("grain").checked){
        document.getElementById("output").innerHTML = "Weight is : "+String(poundTograin)+ " grain";
    }
    else if (document.getElementById("ounce").checked){
        document.getElementById("output").innerHTML = "Weight is : "+String(poundToounce)+" Oz";
    }
    else{
        document.getElementById("allresult").innerHTML = "Here is list of Grain to different common weight unit: ";
        document.getElementById("result").innerHTML = "Weight in Kg is : "+String(poundTokg)+" Kg";
        document.getElementById("result1").innerHTML = "Weight in Gram is : "+String(poundTogm)+ " gm";
        document.getElementById("result2").innerHTML = "Weight in Mili-gram is : "+String(poundTomiligm)+ " mg";
        document.getElementById("result3").innerHTML = "Weight in Pound is : "+String(poundTograin)+ " grain";
        document.getElementById("result4").innerHTML = "Weight in Pound is : "+String(poundToounce)+ " Oz";
    }
}