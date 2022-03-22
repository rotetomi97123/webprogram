function openFunction(){
    document.getElementById("menu").style.width="100%";
    document.getElementById("menu").style.height="auto";
    document.getElementById("mainbox").style.marginLeft="300px";
    document.getElementById("mainbox").innerHTML="";
}
function closeFunction(){
    document.getElementById("menu").style.width="0px";
    //document.getElementById("menu").style.height="0px";
    document.getElementById("mainbox").style.marginLeft="20px";
    document.getElementById("mainbox").innerHTML="&#9776;";
}
let counter = 1;
setInterval(function(){
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if(counter>4){
        counter = 1;
    }

},5000);

