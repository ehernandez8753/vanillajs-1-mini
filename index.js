let count = 0;

function selectTheme(theme){
    document.getElementsByTagName("body")[0].className = theme;
    document.getElementsByTagName("main")[0].className = theme;
    let buttons = document.getElementsByTagName("button");

    for(let i = 0; i < buttons.length; i++){
        buttons[i].className = theme;
    }
}

function increase(){
    count++;
    element.innerText = count;
}

function decrease(){
    count--;
    element.innerText = count;
}

function reset(){
    count = 0;
    element.innerHTML = `<mark>${count}</mark`;
}

let element = document.getElementById("counter");