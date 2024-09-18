document.querySelectorAll(".btn").forEach(function (button){
    button.onclick = function(){
        document.querySelector("#color").style.color = button.dataset.color;
    }
});