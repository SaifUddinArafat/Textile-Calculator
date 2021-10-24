function kg(){
    var wt = Number(document.getElementById("weight").value);

    var kgTopound = (wt * 2.2046226218);
    var kgTogm = (wt * 1000);
    var kgTograin = (wt * 15432.358353);
    var kgTomiligm = (wt * 1000000);
    var kgToounce = (wt * 35.27396195);

    //Clearing Input Box 
    var input = document.getElementById('weight');
    input.value = " ";

    if (document.getElementById("pound").checked){
        document.getElementById("output").innerHTML = "Weight is : "+String(kgTopound)+" lb";
    }
    else if (document.getElementById("gm").checked){
        document.getElementById("output").innerHTML = "Weight is : "+String(kgTogm)+ " gm";
    }
    else if (document.getElementById("mg").checked){
        document.getElementById("output").innerHTML = "Weight is : "+String(kgTomiligm)+ " mg";
    }
    else if (document.getElementById("grain").checked){
        document.getElementById("output").innerHTML = "Weight is : "+String(kgTograin)+ " grain";
    }
    else if (document.getElementById("ounce").checked){
        document.getElementById("output").innerHTML = "Weight is : "+String(kgToounce)+" Oz";
    }
    else{
        document.getElementById("allresult").innerHTML = "Here is list of Grain to different common weight unit: ";
        document.getElementById("result").innerHTML = "Weight in pound is : "+String(kgTopound)+" lb";
        document.getElementById("result1").innerHTML = "Weight in Gram is : "+String(kgTogm)+ " gm";
        document.getElementById("result2").innerHTML = "Weight in Mili-gram is : "+String(kgTomiligm)+ " mg";
        document.getElementById("result3").innerHTML = "Weight in grain is : "+String(kgTograin)+ " grain";
        document.getElementById("result4").innerHTML = "Weight in ounce is : "+String(kgToounce)+ " Oz";
    }
}