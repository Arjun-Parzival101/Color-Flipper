//Variable declaration using Selectors
const colors = ["green", "red", "violet", "orange", "yellow", "lime", "skyblue", "pink", "magenta", "maroon", "lightgreen", "gold", "blue", "lightblue", "brown", "Aqua", "Crimson", "DeepPink", "Fuchsia", "Indigo ", "LightCoral", "MidnightBlue", "OrangeRed", "Purple", "SteelBlue", "Teal"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const copy = document.querySelector('.copy');
const effect = document.querySelector('h2');

//Event listeners with Functions
btn.addEventListener('click', function() {

    const randomNumber = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomNumber];
    document.querySelector('body').style.backgroundColor = randomColor;
    color.innerHTML = randomColor;
    // color.style.color = randomColor;

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