const drumlength=document.querySelectorAll(".drum").length;
//console.log(drumlength)



for(let i=0;i<drumlength;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(e){
makenoise(this.innerHTML)
animatingButtons(this.innerHTML)
    });
}
function makenoise(key){
switch(key){
    case"w":
    const tom1=new Audio("Desktop/simple-drum-kick-loop-230756.mp3")
    tom1.play()
    break;

    case"a":
    const tom2=new Audio("Desktop/drum-roll-2-228358.mp3")
    tom2.play()
    break;

    case"s":
    const tom3=new Audio("Desktop/drum-roll-3-228357.mp3")
    tom3.play()
    break;

    case"d":
    const tom4=new Audio("Desktop/drum-roll-4-228357 (Copy).mp3")
    tom4.play()
    break;

    case"j":
    const snare=new Audio("Desktop/snare-drum-341273.mp3")
    snare.play()
    break;

    case"k":
    const crash=new Audio("Desktop/crash-verb-89638.mp3")
    crash.play()
    break;

    case"l":
    const kick=new Audio("Desktop/kick-drum-263837.mp3")
    kick.play()
    break;
}
}
function animatingButtons(){
    const activeButton=document.querySelector(`.${key}`);
    console.log(activeButton);
    activeButton.classList.add("pressed");
    setTimeout(()=>{
        activeButton.classList.remove("pressed");

    },500);
}

