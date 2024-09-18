// //step 1
// function hello(){
//     document.querySelector("h1").innerHTML = "Welcome";
// }


// //2
// function hello() {
//     if (document.querySelector("h1").innerHTML
//  === "Hello Yangon"){
//     document.querySelector("h1").innerHTML = "Welcome to Yangon";
//  }
//  else {
//     document.querySelector("h1").innerHTML = "Hello Yangon!";
//  }
// }

//3 shorthand
let heading = document.querySelector("h1");
function hello() {
    if (heading.innerHTML === "Hello Yangon"){
        heading.innerHTML("h1").innerHTML = "Welcome to Yangon";
 }
 else {
    heading.innerHTML("h1").innerHTML = "Hello Yangon!";
 }
}

