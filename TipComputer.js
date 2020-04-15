let compute = function(){
    let amount = document.getElementById("Amount").value
    let aamount = amount*1
    let service = document.getElementById("Service").value
    let percentage = document.getElementById("percent").value
    let ppercentage = percentage*.01 
    
    let tip = aamount*ppercentage
    tip = tip.toFixed(2)
    let ttip = "$"+tip
    let sservice = ""
    if (service == 0){
        sservice = "Your Server's Rate: Poor"
    }
    else if (service == 1){
        sservice = "Your Server's Rate: Good"
    }
    else if (service == 2){
        sservice = "Your Server's Rate: Very Good"
    }
    else if (service == 3){
        sservice = "Your Server's Rate: Excellent"
    }
    document.getElementById("Tip").innerHTML=ttip
    document.getElementById("Rate").innerHTML=sservice
}