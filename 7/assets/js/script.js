function toggleReadMore(){
    var btnText = this;
    var moreText = btnText.previousElementSibling;
    
    if(
        moreText.style.display === "none" ||
        moreText.style.display === "" 

    ) {
        moreText.style.display = "inline";
        btnText.innerHTML = "Red Less <<<";
        btnText.style.color = "green";
    }
    else{
        moreText.style.display = "none";
        btnText.innerHTML = "Read More >>>";
        btnText.style.color = "peru";

    }   
}

window.onload = function () {
    var moreTexts = document.querySelectorAll(".moreText");
    var readMoreBtns = document.querySelectorAll(".readMore");

    moreTexts.forEach(function (moreText) {
        moreText.style.display = "none";
    });
    readMoreBtns.forEach(function (btn) {
        btn.addEventListener("click", toggleReadMore);
    });
};