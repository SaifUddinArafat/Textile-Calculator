function show(){
    var outputs = document.querySelector(".calOutput");
    outputs.style.display = "block";
}

function clearDefault(){
    var input = document.getElementById('len');
    input.value = " ";
}

const keyboardResponse = document.querySelector(".inputSec");
keyboardResponse.addEventListener("keypress", e =>{
    if(e.keyCode == 13){
        output();
    }
});

function yards(){
    
    var len = Number(document.getElementById("len").value);
    

    var yardsTometer = (len * 0.9144);
    var yardsToinch = (len * 36);
    var yardsTofeet=(len * 3);
    var yardsTomiles =(len * 0.0005681818);
    var yardsTokm = (len * 0.0009144);
    var yardsTocm = (len *  91.44);
    var yardsTomm = (len * 914.4);


    if (document.getElementById("meter").checked){
        document.getElementById("output").innerHTML = "Length is : "+String(yardsTometer) + " meter";
    }
    else if (document.getElementById("inch").checked){
        document.getElementById("output").innerHTML = "Length is : " + String(yardsToinch) + " inch";
    }
    else if (document.getElementById("feet").checked){
        document.getElementById("output").innerHTML = "Length is : " + String(yardsTofeet) + " foot";
    }
    else if (document.getElementById("miles").checked){
        document.getElementById("output").innerHTML = "Length is : " + String(yardsTomiles) + " miles";
    }
    else if (document.getElementById("km").checked){
        document.getElementById("output").innerHTML = "Length is : " + String(yardsTokm) + " km";
    }
    else if (document.getElementById("cm").checked){
        document.getElementById("output").innerHTML = "Length is : " + String(yardsTocm) + " cm";
    }
    else if (document.getElementById("mm").checked){
        document.getElementById("output").innerHTML = "Length is : " + String(yardsTomm) + " mm";
    }
    else{
        document.getElementById("result").innerHTML = "Length in yard : "+String(yardsTometer) + " meter";
        document.getElementById("result1").innerHTML = "Length in inch : " + String(yardsToinch) + " inch";
        document.getElementById("result2").innerHTML = "Length in feet : " + String(yardsTofeet) + " foot";
        document.getElementById("result3").innerHTML = "Length in miles : " + String(yardsTomiles) + " miles";
        document.getElementById("result4").innerHTML = "Length in kilometers : " + String(yardsTokm) + " km";
        document.getElementById("result5").innerHTML = "Length in centimeters : " + String(yardsTocm) + " cm";
        document.getElementById("result6").innerHTML = "Length in milimeters : " + String(yardsTomm) + " mm";
    }

    clearDefault();

    show();
}
