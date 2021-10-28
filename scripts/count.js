function show(){
    var outputs = document.querySelector(".calOutput");
    outputs.style.display = "block";
}

function clearDefault(){
    var input1 = document.getElementById("sampleLen");
    input1.value = " ";
    var input2 = document.getElementById("sampleWt");
    input2.value = " ";
}
const keyboardResponse = document.querySelector(".inputSec");
keyboardResponse.addEventListener("keypress", e =>{
    if(e.keyCode == 13){
        output();
    }
});

var clearOutputSection = document.querySelector(".clearBtn")
clearOutputSection.addEventListener("click", ()=>{
    var outputs = document.querySelector(".calOutput");
    outputs.style.display = "none";
});

function output(){
    var sampleLen = Number(document.getElementById("sampleLen").value);
    var sampleWt = Number(document.getElementById("sampleWt").value);
    
    var ne = (sampleLen / sampleWt) * (1 / 840);
    var nm = (sampleLen / sampleWt) * (1 / 1000);
    var worsted = (sampleLen / sampleWt) * (1 / 560);
    var woolen = (sampleLen / sampleWt) * (1 / 256);

    var tex = (sampleWt / sampleLen) * (1000);
    var denier = (sampleWt / sampleLen) * (9000);
    var deciTex = (sampleWt / sampleLen) * (10000);
    var miliTex = (sampleWt / sampleLen) * (1000);
    var jute = (sampleWt / sampleLen) * (14400);


    if (document.getElementById("ecount").checked){
        document.getElementById("output").innerHTML = "English Count is : "+String(ne)+" Ne";
        document.getElementById("alert").innerHTML = "If Length is :"+String(sampleLen)+" yds"+" Weight is : "+String(sampleWt)+" Pound";
        document.getElementById("check").innerHTML = "For English Count: " + "Sample length have to be in Yards and Weight have to be in Pound.";
    }
    else if (document.getElementById("mcount").checked){
        document.getElementById("output").innerHTML = "Metric Count: "+String(nm)+" Nm";
        document.getElementById("alert").innerHTML = "If Length is :"+String(sampleLen)+" Meter"+" Weight is : "+String(sampleWt)+" Kg";
        document.getElementById("check").innerHTML = "For Metric Count: " + "Sample length have to be in Meter and Weight have to be in Kg.";
    }
    else if (document.getElementById("worcount").checked){
        document.getElementById("output").innerHTML = "Worsted Count: "+String(worsted)+" worsted count";
        document.getElementById("alert").innerHTML = "If Length is :"+String(sampleLen)+" yds"+" Weight is : "+String(sampleWt)+" Pound";
        document.getElementById("check").innerHTML = "For Worsted Count: " + "Sample length have to be in Yards and Weight have to be in Pound.";
    }
    else if (document.getElementById("wolcount").checked){
        document.getElementById("output").innerHTML = "Woolen Count: "+String(woolen)+" woolen Count";
        document.getElementById("alert").innerHTML = "If Length is :"+String(sampleLen)+" yds"+" Weight is : "+String(sampleWt)+" Pound";
        document.getElementById("check").innerHTML = "For Woolen Count: " + "Sample length have to be in Yards and Weight have to be in Pound.";
    }
    else if (document.getElementById("tcount").checked){
        document.getElementById("output").innerHTML = "Tex Count is : "+String(tex)+" Tex";
        document.getElementById("alert").innerHTML = "If Length is :"+String(sampleLen)+" meters"+" Weight is : "+String(sampleWt)+" grams";
        document.getElementById("check").innerHTML = "For Tex: " + "Sample length have to be in Meters and Weight have to be in grams.";
    }
    else if (document.getElementById("dcount").checked){
        document.getElementById("output").innerHTML = "Denier Count is : "+String(denier)+" Diner";
        document.getElementById("alert").innerHTML = "If Length is :"+String(sampleLen)+" Meters"+" Weight is : "+String(sampleWt)+" grams";
        document.getElementById("check").innerHTML = "For Denier: " + "Sample length have to be in meters and Weight have to be in grams.";
    }
    else if (document.getElementById("decicount").checked){
        document.getElementById("output").innerHTML = "DeciTex Count is : "+String(deciTex)+" Deci Tex";
        document.getElementById("alert").innerHTML = "If Length is :"+String(sampleLen)+" Meters"+" Weight is : "+String(sampleWt)+" grams";
        document.getElementById("check").innerHTML = "For DeciTex : " + "Sample length have to be in meters and Weight have to be in grams.";
    }
    else if (document.getElementById("milicount").checked){
        document.getElementById("output").innerHTML = "MiliTex Count: "+String(miliTex)+" Mili Tex";
        document.getElementById("alert").innerHTML = "If Length is :"+String(sampleLen)+" yds"+" Weight is : "+String(sampleWt)+" miligrams";
        document.getElementById("check").innerHTML = "For MiliTex : " + "Sample length have to be in Meters and Weight have to be in Miligrams.";
    }
    else if (document.getElementById("jcount").checked){
        document.getElementById("output").innerHTML = "Metric Count: "+String(jute)+" Jute Count";
        document.getElementById("alert").innerHTML = "If Length is :"+String(sampleLen)+" yds"+" Weight is : "+String(sampleWt)+" Pound";
        document.getElementById("check").innerHTML = "For English Count: " + "Sample length have to be in Yards and Weight have to be in Pound.";
    }
    else{
        document.getElementById("result").innerHTML = "English Count: "+String(ne)+" Ne";
        document.getElementById("result1").innerHTML = "Metric Count: "+String(nm)+" Nm"; 
        document.getElementById("result2").innerHTML = "Worsted Count: "+String(worsted)+" Worsted Count";  
        document.getElementById("result3").innerHTML = "Woolen Count: "+String(woolen)+" Woolen Count";    
        document.getElementById("result4").innerHTML = "Tex Count:  "+String(tex)+" Tex";    
        document.getElementById("result5").innerHTML = "Denier Count: "+String(denier)+" Denier";    
        document.getElementById("result6").innerHTML = "DeciTex Count: "+String(deciTex)+" DeciTex";
        document.getElementById("result7").innerHTML = "MiliTex Count: "+String(miliTex)+" MiliTex";
        document.getElementById("result8").innerHTML = "Jute Count: "+String(jute)+" JuteCount";
    }

    show();
    clearDefault();
}