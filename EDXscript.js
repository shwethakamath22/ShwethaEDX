function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}

function compute(){
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var year = new Date().getFullYear()+parseInt(years);
    var interest = (principal*years*rate)/100;
    var amount=parseFloat(interest)+parseFloat(principal);

    if(principal <= 0 || principal == ""){
        alert("Enter positive value for principal amount");
        document.getElementById("principal").focus();
    }
    document.getElementById("result").innerHTML="\<br/>If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>";
}
