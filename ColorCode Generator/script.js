const buttonClick=document.getElementById("ChangeBackGround");
const bg=document.getElementById("screen");
let colorCodes=document.getElementById("codes");
function getitrandom()
{
    const letter="0123456789ABCDEF";
    let color="#";
    for(let i=0;i<6;i++)
    {
        color+=letter[Math.floor((Math.random()*16))];
    }
    return color;
}
buttonClick.addEventListener('click',function(){
    let colorCode=getitrandom();
    bg.style.backgroundColor=colorCode;
    colorCodes.textContent=colorCode;
    // alert("Background color is changing...");
})