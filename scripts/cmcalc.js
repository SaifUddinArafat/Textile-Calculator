function cm(){
    var len = Number(document.getElementById("len").value);

    var cmTokm = (len * 0.00001); //(cm to km)
    
    var cmTometer = (len * 1000) * 0.00001;//(Km to meter) * (cm to km)
  
    var cmToyds = (len * 1093.6132983) * 0.00001;//(Km to yds) * (cm to km)
   
    var cmToinch = (len *  39370.07874) * 0.00001;//(Km to inch) * (cm to km)
  
    var cmTofeet = (len * 3280.839895) * 0.00001;//(Km to feet) * (cm to km)
  
    var cmTomiles = (len * 0.6213711922) * 0.00001;//(Km to miles) * (cm to km)
 
    var cmTomm = (len * 1000000) * 0.00001;//(Km to cm) * (cm to km)

    //Clearing Input Box 
    var input = document.getElementById('len');
    input.value = " ";

    if (document.getElementById("meter").checked){
        document.getElementById("output").innerHTML = "Length is : "+String(cmTometer) + " meter";
    }
    else if (document.getElementById("yds").checked){
        document.getElementById("output").innerHTML = "Length is : " + String(cmToyds) + " yds";
    }
    else if (document.getElementById("inch").checked){
        document.getElementById("output").innerHTML = "Length is : " + String(cmToinch) + " inch";
    }
    else if (document.getElementById("feet").checked){
        document.getElementById("output").innerHTML = "Length is : " + String(cmTofeet) + " foot";
    }
    else if (document.getElementById("miles").checked){
        document.getElementById("output").innerHTML = "Length is : " + String(cmTomiles) + " miles";
    }
    else if (document.getElementById("km").checked){
        document.getElementById("output").innerHTML = "Length is : " + String(cmTokm) + " km";
    }
    else if (document.getElementById("mm").checked){
        document.getElementById("output").innerHTML = "Length is : " + String(cmTomm) + " mm";
    }
    else{
        document.getElementById("result").innerHTML = "Length in yard : "+String(cmTometer) + " meter";
        document.getElementById("result1").innerHTML = "Length in yds : " + String(cmToyds) + " yds";
        document.getElementById("result2").innerHTML = "Length in inch : " + String(cmToinch) + " inch";
        document.getElementById("result3").innerHTML = "Length in feet : " + String(cmTofeet) + " foot";
        document.getElementById("result4").innerHTML = "Length in Mile : " + String(cmTomiles) + " miles";
        document.getElementById("result5").innerHTML = "Length in Kilometers : " + String(cmTokm) + " km";
        document.getElementById("result6").innerHTML = "Length in milimeters : " + String(cmTomm) + " mm";
    }
}