function show(){
    var outputs = document.querySelector(".calOutput");
    outputs.style.display = "block";
}

function clearDefault(){
    var input = document.getElementById('weight');
    input.value = " ";
}
const Enter_Key_Response = document.querySelector(".inputSec");
Enter_Key_Response.addEventListener("keypress", e =>{
    if(e.keyCode == 13){
        mg();
    }
});

const weight_Data_Type_Check = document.querySelector("#weight");
weight_Data_Type_Check.addEventListener("keypress", e=>{
    if(e.charCode>59 || e.charCode<47){
        console.log("Wrong Data Type")
        document.getElementById("weight").ariaPlaceholder = "Wrong Input Type";
        e.preventDefault();
    }
});

var clearOutputSection = document.querySelector(".clearBtn")
clearOutputSection.addEventListener("click", ()=>{
    var outputs = document.querySelector(".calOutput");
    outputs.style.display = "none";
});

function mg(){
    var wt = Number(document.getElementById("weight").value);

    var mgTopound = (wt * 0.0000022046);
    var mgTokg = (wt * 0.000001);
    var mgTograin = (wt * 0.0154323584);
    var mgTogram = (wt * 0.001);
    var mgToounce = (wt * 0.000035274);


    if (document.getElementById("pound").checked){
        document.getElementById("output").innerHTML = "Weight is : "+String(mgTopound)+" lb";
    }
    else if (document.getElementById("kg").checked){
        document.getElementById("output").innerHTML = "Weight is : "+String(mgTokg)+ " kg";
    }
    else if (document.getElementById("gm").checked){
        document.getElementById("output").innerHTML = "Weight is : "+String(mgTogram)+ " gm";
    }
    else if (document.getElementById("grain").checked){
        document.getElementById("output").innerHTML = "Weight is : "+String(mgTograin)+ " grain";
    }
    else if (document.getElementById("ounce").checked){
        document.getElementById("output").innerHTML = "Weight is : "+String(mgToounce)+" Oz";
    }
    else{
        document.getElementById("allresult").innerHTML = "Here is list of Grain to different common weight unit: ";
        document.getElementById("result").innerHTML = "Weight in pound is : "+String(mgTopound)+" lb";
        document.getElementById("result1").innerHTML = "Weight in kilogram is : "+String(mgTokg)+ " kg";
        document.getElementById("result2").innerHTML = "Weight in Gram is : "+String(mgTogram)+ " gm";
        document.getElementById("result3").innerHTML = "Weight in grain is : "+String(mgTograin)+ " grain";
        document.getElementById("result4").innerHTML = "Weight in ounce is : "+String(mgToounce)+ " Oz";
    }

    clearDefault();

    show();
}
