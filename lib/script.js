

exports.changeBg= function(){setTimeout(function changeBackroundColor(){

    const webPageHeading = document.getElementsByTagName("h1")[0];
    webPageHeading.style.backgroundColor = "red";

}, 3000);
}

exports.activateBtn= function(){
const btn = document.getElementById("btn");

btn.addEventListener("click",()=>{
    const webPageHeading = document.getElementsByTagName("h1")[0];
    webPageHeading.style.backgroundColor = "greenyellow";

});

}
