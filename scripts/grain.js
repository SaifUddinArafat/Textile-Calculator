function show(){
    var outputs = document.querySelector(".calOutput");
    outputs.style.display = "block";
}

function clearDefault(){
    var input = document.getElementById('weight');
    input.value = " ";
}
const keyboardResponse = document.querySelector(".inputSec");
keyboardResponse.addEventListener("keypress", e =>{
    if(e.keyCode == 13){
        output();
    }
});

function grain(){
    var wt = Number(document.getElementById("weight").value);

    var grainTokg = (wt * 0.0000647989);
    var grainTogm = (wt * 0.06479891);
    var grainTolb = (wt * 0.0001428571);
    var grainTomiligm = (wt * 64.79891);
    var grainToounce = (wt * 0.0022857143);

    if (document.getElementById("kg").checked){
        document.getElementById("output").innerHTML = "Weight is : "+String(grainTokg)+" Kg";
    }
    else if (document.getElementById("gm").checked){
        document.getElementById("output").innerHTML = "Weight is : "+String(grainTogm)+ " gm";
    }
    else if (document.getElementById("mg").checked){
        document.getElementById("output").innerHTML = "Weight is : "+String(grainTomiligm)+ " mg";
    }
    else if (document.getElementById("lb").checked){
        document.getElementById("output").innerHTML = "Weight is : "+String(grainTolb)+ " lb";
    }
    else if (document.getElementById("ounce").checked){
        document.getElementById("output").innerHTML = "Weight is : "+String(grainToounce)+" Oz";
    }
    else{
        document.getElementById("allresult").innerHTML = "Here is list of Grain to different common weight unit: ";
        document.getElementById("result").innerHTML = "Weight in Kg is : "+String(grainTokg)+" Kg";
        document.getElementById("result1").innerHTML = "Weight in Gram is : "+String(grainTogm)+ " gm";
        document.getElementById("result2").innerHTML = "Weight in Mili-gram is : "+String(grainTomiligm)+ " mg";
        document.getElementById("result3").innerHTML = "Weight in Pound is : "+String(grainTolb)+ " lb";
        document.getElementById("result4").innerHTML = "Weight in Pound is : "+String(grainToounce)+ " Oz";
    }

    clearDefault();

    show();
}
