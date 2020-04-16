let main = function(){
    sound()
    link()
}
let sound = function(){
    document.getElementById('sound1').play()
}
let link = function(){
    setTimeout(function(){
        window.location = 'Scare.html'
    }, 7500); 
    
}