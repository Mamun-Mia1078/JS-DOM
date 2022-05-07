
function move(){
    const animate = document.getElementById("animate");
    let pos = 0;
   const interval =  setInterval(frame,15);
    function frame(){
        if(pos<175){

       
        pos++;
        animate.style.top = pos +'px';
        animate.style.left = pos +'px';
    }
    else {
        clearInterval(interval)
    }

    }
}
move();

    