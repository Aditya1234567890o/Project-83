var mouseEvent="empty";

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="black";
width_of_line=2;

canvas.addEventListener("mousedown",mymousedown);

function mymousedown(e){
color=document.getElementById("color").value;
width_of_line=document.getElementById("width_of_line").value;

mouseEvent="mouseDown";
}
canvas.addEventListener("mousemove",mymousemove);

function mymousemove(e){
    current_position_x=e.clientX-canvas.offsetLeft;
    current_position_y=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.moveTo(last_position_of_x, last_position_of_y);
        ctx.lineTo(current_position_x,current_position_y);
        ctx.stroke();
    }
    last_position_of_x=current_position_x;
    last_position_of_y=current_position_y;

    
}
canvas.addEventListener("mouseup",mymouseup);

function mymouseup(e){
    mouseEvent="mouseUP";
}

canvas.addEventListener("mouseleave",mymouseleave);

function mymouseleave(e){
    mouseEvent="mouseleave";
}

function mytouchstart(e){
    console.log("my_touchstart");

    last_position_of_touch_x=e.touches[0].clientX-canvas.offsetLeft;
    last_position_of_touch_y=e.touches[0].clientY-canvas.offsetTop;
}

function mytouchmove(e){
    current_position_of_touch_x=e.touches[0].clientX-canvas.offsetLeft;
    current_position_of_touch_y=e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;
    ctx.moveTo(last_position_of_touch_x,last_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x,current_position_of_touch_y);
    ctx.stroke();

    last_position_of_touch_x=current_position_of_touch_x;
    last_position_of_touch_y=current_position_of_touch_y;

}