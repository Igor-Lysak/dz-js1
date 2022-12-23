function color(){
    let elem1 = document.getElementById("box1");
    let r = Math.floor(Math.random()*256);
        g = Math.floor(Math.random()*256);
        b = Math.floor(Math.random()*256);

    elem1.style.color = "rgb("+r+","+g+","+b+")";
}


function background(){
    let elem2 = document.getElementById("box2");
    elem2.style.background = "green"
}

function font(){
    let elem3 = document.getElementById("text3");
    elem3.style.fontFamily = "Karla";
}


function shape(){
    let option = document.getElementById("box4");
    option.classList.add("shape")
}


function backgroundRandom(){
    let elem5 = document.getElementById("box5");
    let r = Math.floor(Math.random()*256);
        g = Math.floor(Math.random()*256);
        b = Math.floor(Math.random()*256);

    elem5.style.backgroundColor = "rgb("+r+","+g+","+b+")";
}
