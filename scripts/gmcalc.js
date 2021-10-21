function gm(){
    var wt = Number(document.getElementById("weight").value);

    var gmTopound = (wt *  0.0022046226);
    var gmTokg = (wt * 0.001);
    var gmTograin = (wt * 15.432358353);
    var gmTomiligm = (wt * 1000);
    var gmToounce = (wt * 0.0352739619);

    if (document.getElementById("pound").checked){
        document.getElementById("output").innerHTML = "Weight is : "+String(gmTopound)+" lb";
    }
    else if (document.getElementById("kg").checked){
        document.getElementById("output").innerHTML = "Weight is : "+String(gmTokg)+ " Kg";
    }
    else if (document.getElementById("mg").checked){
        document.getElementById("output").innerHTML = "Weight is : "+String(gmTomiligm)+ " mg";
    }
    else if (document.getElementById("grain").checked){
        document.getElementById("output").innerHTML = "Weight is : "+String(gmTograin)+ " grain";
    }
    else if (document.getElementById("ounce").checked){
        document.getElementById("output").innerHTML = "Weight is : "+String(gmToounce)+" Oz";
    }
    else{
        document.getElementById("allresult").innerHTML = "Here is list of Grain to different common weight unit: ";
        document.getElementById("result").innerHTML = "Weight in pound is : "+String(gmTopound)+" lb";
        document.getElementById("result1").innerHTML = "Weight in Kg is : "+String(gmTokg)+ " kg";
        document.getElementById("result2").innerHTML = "Weight in Mili-gram is : "+String(gmTomiligm)+ " mg";
        document.getElementById("result3").innerHTML = "Weight in grain is : "+String(gmTograin)+ " grain";
        document.getElementById("result4").innerHTML = "Weight in ounce is : "+String(gmToounce)+ " Oz";
    }
}