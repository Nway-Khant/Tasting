// step 1
// alert("Welcome");

// step 2
// var counter = 0;
// counter = counter + 1;
// counter += 1;
// alert(counter);

// //step 3
// let counter = 0;



// function count(){
//     counter ++;
//     document.querySelector('h1').innerHTML = counter;

//     if (counter % 10 === 1){
//         alert(`good job now number ${counter}`);
//     }
// }

//step 4 html တွင် onclick လုပ်စရာမလို

let counter = 0;



function y(){
    counter ++;
    document.querySelector('h1').innerHTML = counter;

    if (counter % 10 === 1){
        alert(`good job now number ${counter}`);
    }
}

document.addEventListener('DOMContentLoaded', function(){ 
    document.querySelector("button").onclick = y();

});


