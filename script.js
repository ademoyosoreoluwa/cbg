const css =  document.querySelector("h3");
const [color1, color2] = document.querySelectorAll(".color");
const body = document.querySelector('#gradient');

gradientGenerator = ()=> {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

    css.textContent = body.style.background + "; ";
}

color1.addEventListener("input", gradientGenerator)
color2.addEventListener("input", gradientGenerator)
