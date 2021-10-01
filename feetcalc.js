function feet(){
    var len = Number(document.getElementById("len").value);

    var feetTometer = (len * 0.3048);
    var feetToyds = (len *  0.3333333333);
    var feetToinch = (len *  12);
    var feetTomiles = (len * 0.0001893939);
    var feetTokm = (len * 0.0000254);
    var feetTocm = (len *  30.48);
    var feetTomm = (len * 304.8);

    if (document.getElementById("meter").checked){
        document.getElementById("output").innerHTML = "Length is : "+String(feetTometer) + " meter";
    }
    else if (document.getElementById("yds").checked){
        document.getElementById("output").innerHTML = "Length is : " + String(feetToyds) + " yds";
    }
    else if (document.getElementById("inch").checked){
        document.getElementById("output").innerHTML = "Length is : " + String(feetToinch) + " inch";
    }
    else if (document.getElementById("miles").checked){
        document.getElementById("output").innerHTML = "Length is : " + String(feetTomiles) + " miles";
    }
    else if (document.getElementById("km").checked){
        document.getElementById("output").innerHTML = "Length is : " + String(feetTokm) + " km";
    }
    else if (document.getElementById("cm").checked){
        document.getElementById("output").innerHTML = "Length is : " + String(feetTocm) + " cm";
    }
    else if (document.getElementById("mm").checked){
        document.getElementById("output").innerHTML = "Length is : " + String(feetTomm) + " mm";
    }
    else{
        document.getElementById("result").innerHTML = "Length in yard : "+String(feetTometer) + " meter";
        document.getElementById("result1").innerHTML = "Length in yds : " + String(feetToyds) + " yds";
        document.getElementById("result2").innerHTML = "Length in inch : " + String(feetToinch) + " inch";
        document.getElementById("result3").innerHTML = "Length in miles : " + String(feetTomiles) + " miles";
        document.getElementById("result4").innerHTML = "Length in kilometers : " + String(feetTokm) + " km";
        document.getElementById("result5").innerHTML = "Length in centimeters : " + String(feetTocm) + " cm";
        document.getElementById("result6").innerHTML = "Length in milimeters : " + String(feetTomm) + " mm";
    }
}