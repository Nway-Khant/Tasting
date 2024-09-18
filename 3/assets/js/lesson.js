document.querySelector('form').onsubmit = function() {
    let urName = document.querySelector('#name').value;
    alert(`hi, ${urName}`);
}