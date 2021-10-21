function km(){
    var len = Number(document.getElementById("len").value);

    var kmTometer = (len * 1000);
    var kmToyds = (len * 1093.6132983);
    var kmToinch = (len *  39370.07874);
    var kmTofeet = (len * 3280.839895);
    var kmTomiles = (len * 0.6213711922);
    var kmTocm = (len *  100000);
    var kmTomm = (len * 1000000);

    if (document.getElementById("meter").checked){
        document.getElementById("output").innerHTML = "Length is : "+String(kmTometer) + " meter";
    }
    else if (document.getElementById("yds").checked){
        document.getElementById("output").innerHTML = "Length is : " + String(kmToyds) + " yds";
    }
    else if (document.getElementById("inch").checked){
        document.getElementById("output").innerHTML = "Length is : " + String(kmToinch) + " inch";
    }
    else if (document.getElementById("feet").checked){
        document.getElementById("output").innerHTML = "Length is : " + String(kmTofeet) + " foot";
    }
    else if (document.getElementById("miles").checked){
        document.getElementById("output").innerHTML = "Length is : " + String(kmTomiles) + " miles";
    }
    else if (document.getElementById("cm").checked){
        document.getElementById("output").innerHTML = "Length is : " + String(kmTocm) + " cm";
    }
    else if (document.getElementById("mm").checked){
        document.getElementById("output").innerHTML = "Length is : " + String(kmTomm) + " mm";
    }
    else{
        document.getElementById("result").innerHTML = "Length in yard : "+String(kmTometer) + " meter";
        document.getElementById("result1").innerHTML = "Length in yds : " + String(kmToyds) + " yds";
        document.getElementById("result2").innerHTML = "Length in inch : " + String(kmToinch) + " inch";
        document.getElementById("result3").innerHTML = "Length in feet : " + String(kmTofeet) + " foot";
        document.getElementById("result4").innerHTML = "Length in Mile : " + String(kmTomiles) + " miles";
        document.getElementById("result5").innerHTML = "Length in centimeters : " + String(kmTocm) + " cm";
        document.getElementById("result6").innerHTML = "Length in milimeters : " + String(kmTomm) + " mm";
    }
}