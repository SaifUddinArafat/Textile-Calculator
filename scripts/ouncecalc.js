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
        oz();
    }
});

function oz(){
    var wt = Number(document.getElementById("weight").value);

    var ozTopound = (wt * 0.0625);
    var ozTokg = (wt * 0.0283495231);
    var ozTograin = (wt * 437.5);
    var ozTogram = (wt * 28349.523125);
    var ozTomg = (wt * 28.349523125);

    if (document.getElementById("pound").checked){
        document.getElementById("output").innerHTML = "Weight is : "+String(ozTopound)+" lb";
    }
    else if (document.getElementById("kg").checked){
        document.getElementById("output").innerHTML = "Weight is : "+String(ozTokg)+ " kg";
    }
    else if (document.getElementById("gm").checked){
        document.getElementById("output").innerHTML = "Weight is : "+String(ozTogram)+ " gm";
    }
    else if (document.getElementById("grain").checked){
        document.getElementById("output").innerHTML = "Weight is : "+String(ozTograin)+ " grain";
    }
    else if (document.getElementById("mg").checked){
        document.getElementById("output").innerHTML = "Weight is : "+String(ozToounce)+" mg";
    }
    else{
        document.getElementById("allresult").innerHTML = "Here is list of Grain to different common weight unit: ";
        document.getElementById("result").innerHTML = "Weight in pound is : "+String(ozTopound)+" lb";
        document.getElementById("result1").innerHTML = "Weight in kilogram is : "+String(ozTokg)+ " kg";
        document.getElementById("result2").innerHTML = "Weight in Gram is : "+String(ozTogram)+ " gm";
        document.getElementById("result3").innerHTML = "Weight in grain is : "+String(ozTograin)+ " grain";
        document.getElementById("result4").innerHTML = "Weight in miligram is : "+String(ozTomg)+ " mg";
    }

    clearDefault();
    
    show();
}
