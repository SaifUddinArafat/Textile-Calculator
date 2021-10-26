function meter(){
    var len = Number(document.getElementById("len").value);

    var meterToyds = (len * 1.0936132983);
    var meterToinch = (len * 39.37007874);
    var meterTofeet=(len * 3.280839895);
    var meterTomiles =(len * 0.0006213712);
    var meterTokm = (len * 0.001);
    var meterTocm = (len *  100);
    var meterTomm = (len * 1000);

    if (document.getElementById("yds").checked){
        document.getElementById("output").innerHTML = "Length is : "+String(meterToyds) + " yds";
    }
    else if (document.getElementById("inch").checked){
        document.getElementById("output").innerHTML = "Length is : " + String(meterToinch) + " inch";
    }
    else if (document.getElementById("feet").checked){
        document.getElementById("output").innerHTML = "Length is : " + String(meterTofeet) + " foot";
    }
    else if (document.getElementById("miles").checked){
        document.getElementById("output").innerHTML = "Length is : " + String(meterTomiles) + " miles";
    }
    else if (document.getElementById("km").checked){
        document.getElementById("output").innerHTML = "Length is : " + String(meterTokm) + " km";
    }
    else if (document.getElementById("cm").checked){
        document.getElementById("output").innerHTML = "Length is : " + String(meterTocm) + " cm";
    }
    else if (document.getElementById("mm").checked){
        document.getElementById("output").innerHTML = "Length is : " + String(meterTomm) + " mm";
    }
    else{
        document.getElementById("result").innerHTML = "Length in yard : "+String(meterToyds) + " yds";
        document.getElementById("result1").innerHTML = "Length in inch : " + String(meterToinch) + " inch";
        document.getElementById("result2").innerHTML = "Length in feet : " + String(meterTofeet) + " foot";
        document.getElementById("result3").innerHTML = "Length in miles : " + String(meterTomiles) + " miles";
        document.getElementById("result4").innerHTML = "Length in kilometer : " + String(meterTokm) + " km";
        document.getElementById("result5").innerHTML = "Length in centimeter : " + String(meterTocm) + " cm";
        document.getElementById("result6").innerHTML = "Length in milimeter : " + String(meterTomm) + " mm";
    }

    clearDefault();

    show();
}


function show(){
    var outputs = document.querySelector(".calOutput");
    outputs.style.display = "block";
}

function clearDefault(){
    var input = document.getElementById('weight');
    input.value = " ";
}