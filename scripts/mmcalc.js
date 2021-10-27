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
        mm();
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

function mm(){
    var len = Number(document.getElementById("len").value);

    var mmTokm = (len * 0.000001); //mm to km
    var mmTometer = (len * 1000) * 0.000001; //(Km to meter) * (mm to km)
    var mmToyds = (len * 1093.6132983) * 0.000001; //(Km to yds) * (mm to km)
    var mmToinch = (len *  39370.07874) * 0.000001; //(Km to inch) * (mm to km)
    var mmTofeet = (len * 3280.839895) * 0.000001; //(Km to feet) * (mm to km)
    var mmTomiles = (len * 0.6213711922) * 0.000001; //(Km to miles) * (mm to km)
    var mmTocm = (len *  100000) * 0.000001; //(Km to cm) * (mm to km)
    

    if (document.getElementById("meter").checked){
        document.getElementById("output").innerHTML = "Length is : "+String(mmTometer) + " meter";
    }
    else if (document.getElementById("yds").checked){
        document.getElementById("output").innerHTML = "Length is : " + String(mmToyds) + " yds";
    }
    else if (document.getElementById("inch").checked){
        document.getElementById("output").innerHTML = "Length is : " + String(mmToinch) + " inch";
    }
    else if (document.getElementById("feet").checked){
        document.getElementById("output").innerHTML = "Length is : " + String(mmTofeet) + " foot";
    }
    else if (document.getElementById("miles").checked){
        document.getElementById("output").innerHTML = "Length is : " + String(mmTomiles) + " miles";
    }
    else if (document.getElementById("cm").checked){
        document.getElementById("output").innerHTML = "Length is : " + String(mmTocm) + " cm";
    }
    else if (document.getElementById("km").checked){
        document.getElementById("output").innerHTML = "Length is : " + String(mmTokm) + " km";
    }
    else{
        document.getElementById("result").innerHTML = "Length in yard : "+String(mmTometer) + " meter";
        document.getElementById("result1").innerHTML = "Length in yds : " + String(mmToyds) + " yds";
        document.getElementById("result2").innerHTML = "Length in inch : " + String(mmToinch) + " inch";
        document.getElementById("result3").innerHTML = "Length in feet : " + String(mmTofeet) + " foot";
        document.getElementById("result4").innerHTML = "Length in Mile : " + String(mmTomiles) + " miles";
        document.getElementById("result5").innerHTML = "Length in centimeters : " + String(mmTocm) + " cm";
        document.getElementById("result6").innerHTML = "Length in kilometers : " + String(mmTokm) + " km";
    }

    clearDefault();

    show();
}
