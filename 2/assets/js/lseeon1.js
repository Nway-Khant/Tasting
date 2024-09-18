// let x = 0;

if (!localStorage.getItem('key')){
    localStorage.setItem('key', 0);
}


function y(){
    let update = localStorage.getItem('key');
    update++;
    document.querySelector("h1").innerHTML = update;
    localStorage.setItem('key', update)

}

document.querySelector('h1').innerHTML = localStorage.getItem('key');
document.querySelector("button").onclick = y;

// setInterval(y, 1000);



