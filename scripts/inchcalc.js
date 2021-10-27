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
        inch();
    }
});

function inch(){
    var len = Number(document.getElementById("len").value);

    var inchTometer = (len * 0.0254);
    var inchToyds = (len * 0.0277777778);
    var inchTofeet = (len * 0.0833333333);
    var inchTomiles = (len * 0.0000157828);
    var inchTokm = (len * 0.0000254);
    var inchTocm = (len *  2.54);
    var inchTomm = (len * 25.4);

    

    if (document.getElementById("meter").checked){
        document.getElementById("output").innerHTML = "Length is : "+String(inchTometer) + " meter";
    }
    else if (document.getElementById("yds").checked){
        document.getElementById("output").innerHTML = "Length is : " + String(inchToyds) + " yds";
    }
    else if (document.getElementById("feet").checked){
        document.getElementById("output").innerHTML = "Length is : " + String(inchTofeet) + " foot";
    }
    else if (document.getElementById("miles").checked){
        document.getElementById("output").innerHTML = "Length is : " + String(inchTomiles) + " miles";
    }
    else if (document.getElementById("km").checked){
        document.getElementById("output").innerHTML = "Length is : " + String(inchTokm) + " km";
    }
    else if (document.getElementById("cm").checked){
        document.getElementById("output").innerHTML = "Length is : " + String(inchTocm) + " cm";
    }
    else if (document.getElementById("mm").checked){
        document.getElementById("output").innerHTML = "Length is : " + String(inchTomm) + " mm";
    }
    else{
        document.getElementById("result").innerHTML = "Length in yard : "+String(inchTometer) + " meter";
        document.getElementById("result1").innerHTML = "Length in yds : " + String(inchToyds) + " yds";
        document.getElementById("result2").innerHTML = "Length in feet : " + String(inchTofeet) + " foot";
        document.getElementById("result3").innerHTML = "Length in miles : " + String(inchTomiles) + " miles";
        document.getElementById("result4").innerHTML = "Length in kilometers : " + String(inchTokm) + " km";
        document.getElementById("result5").innerHTML = "Length in centimeters : " + String(inchTocm) + " cm";
        document.getElementById("result6").innerHTML = "Length in milimeters : " + String(inchTomm) + " mm";
    }

    clearDefault();

    show();
}
