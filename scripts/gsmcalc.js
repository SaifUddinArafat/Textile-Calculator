function show(){
    var outputs = document.querySelector(".calOutput");
    outputs.style.display = "block";
}

function clearDefault(){
    var input1 = document.getElementById('length');
    input1.value = " "; 
    var input2 = document.getElementById('weight');
    input2.value = " "; 
    var input3 = document.getElementById('width');
    input3.value = " ";
}

const Enter_Key_Response = document.querySelector(".inputSec");
Enter_Key_Response.addEventListener("keypress", e =>{ 
    if(e.keyCode == 13){
        gsm();
    }
});

const length_Data_Type_Check = document.querySelector("#length");
length_Data_Type_Check.addEventListener("keypress", e=>{
    if(e.charCode>59 || e.charCode<47){
        console.log("Wrong Data Type")
        document.getElementById("length").ariaPlaceholder = "Wrong Input Type";
        e.preventDefault();
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

const width_Data_Type_Check = document.querySelector("#width");
width_Data_Type_Check.addEventListener("keypress", e=>{
    if(e.charCode>59 || e.charCode<47){
        console.log("Wrong Data Type")
        document.getElementById("width").ariaPlaceholder = "Wrong Input Type";
        e.preventDefault();
    }
});

var clearOutputSection = document.querySelector(".clearBtn")
clearOutputSection.addEventListener("click", ()=>{
    var outputs = document.querySelector(".calOutput");
    outputs.style.display = "none";
});

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

    clearDefault();

    show();
}
