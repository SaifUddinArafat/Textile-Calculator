function show(){
    var outputs = document.querySelector(".calOutput");
    outputs.style.display = "block";
}

function clearDefault(){
    var input = document.getElementById('len');
    input.value = " ";
}
const Enter_Key_Response = document.querySelector(".inputSec");
Enter_Key_Response.addEventListener("keypress", e =>{
    if(e.keyCode == 13){
        miles();
    }
});

const length_Data_Type_Check = document.querySelector("#len");
length_Data_Type_Check.addEventListener("keypress", e=>{
    if(e.charCode>59 || e.charCode<47){
        console.log("Wrong Data Type")
        document.getElementById("len").ariaPlaceholder = "Wrong Input Type";
        e.preventDefault();
    }
});

var clearOutputSection = document.querySelector(".clearBtn")
clearOutputSection.addEventListener("click", ()=>{
    var outputs = document.querySelector(".calOutput");
    outputs.style.display = "none";
});

function miles(){
    var len = Number(document.getElementById("len").value);

    var milesTometer = (len * 1609.344);
    var milesToyds = (len *  1760);
    var milesToinch = (len *  63360);
    var milesTofeet = (len * 5280);
    var milesTokm = (len * 1.609344);
    var milesTocm = (len *  160934.4);
    var milesTomm = (len * 1609344);


    if (document.getElementById("meter").checked){
        document.getElementById("output").innerHTML = "Length is : "+String(milesTometer) + " meter";
    }
    else if (document.getElementById("yds").checked){
        document.getElementById("output").innerHTML = "Length is : " + String(milesToyds) + " yds";
    }
    else if (document.getElementById("inch").checked){
        document.getElementById("output").innerHTML = "Length is : " + String(milesToinch) + " inch";
    }
    else if (document.getElementById("feet").checked){
        document.getElementById("output").innerHTML = "Length is : " + String(milesTofeet) + " foot";
    }
    else if (document.getElementById("km").checked){
        document.getElementById("output").innerHTML = "Length is : " + String(milesTokm) + " km";
    }
    else if (document.getElementById("cm").checked){
        document.getElementById("output").innerHTML = "Length is : " + String(milesTocm) + " cm";
    }
    else if (document.getElementById("mm").checked){
        document.getElementById("output").innerHTML = "Length is : " + String(milesTomm) + " mm";
    }
    else{
        document.getElementById("result").innerHTML = "Length in yard : "+String(milesTometer) + " meter";
        document.getElementById("result1").innerHTML = "Length in yds : " + String(milesToyds) + " yds";
        document.getElementById("result2").innerHTML = "Length in inch : " + String(milesToinch) + " inch";
        document.getElementById("result3").innerHTML = "Length in feet : " + String(milesTofeet) + " foot";
        document.getElementById("result4").innerHTML = "Length in kilometers : " + String(milesTokm) + " km";
        document.getElementById("result5").innerHTML = "Length in centimeters : " + String(milesTocm) + " cm";
        document.getElementById("result6").innerHTML = "Length in milimeters : " + String(milesTomm) + " mm";
    }
    
    clearDefault();

    show();
}
