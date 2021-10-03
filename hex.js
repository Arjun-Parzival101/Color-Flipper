//Variable declaration using Selectors
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const copy = document.querySelector('.copy');
const effect = document.querySelector('h2');

//Event listeners with Functions
btn.addEventListener('click', function() {

    var hexColor = "#";
    for (var i = 0; i < 6; i++) {
        const randomNumber = Math.floor(Math.random() * hex.length);
        hexColor = hexColor + (hex[randomNumber]);
    }

    //Changing Background Color and Color name text
    document.querySelector('body').style.backgroundColor = hexColor;
    color.innerHTML = hexColor;
    // color.style.color = hexColor;

    //Animation effect for H2
    effect.classList.add('animation');
    setTimeout(function() {
        effect.classList.remove('animation');
    }, 250);

});

//Copy to clipboard function
copy.addEventListener('click', function() {
    var copyText = document.querySelector(".color").innerHTML;
    navigator.clipboard.writeText(copyText);
})