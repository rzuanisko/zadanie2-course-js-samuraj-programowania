const sizeValue = 5;
let size = 10;
let grow = true;

const body = document.querySelector('body');
body.style.height = "10000px";

const div = document.createElement('div');
div.style.position = "fixed";
div.style.top = 0;
div.style.left = 0;
div.style.width = "100%";
div.style.height = size + "px";

body.appendChild(div);

const changeHeight = function(){
    if(grow){
        size += sizeValue;
        div.style.backgroundColor = "green";
        console.log('rosnę');
    }
    else{
        size -= sizeValue;
        div.style.backgroundColor = "red";
        console.log('maleję');
    }
    div.style.height = size + "px";

    if(size > window.innerHeight/2 ){
        grow = !grow;
    }
    else if (size == sizeValue){
        grow = !grow;
    }
    
}

window.addEventListener('scroll', changeHeight);