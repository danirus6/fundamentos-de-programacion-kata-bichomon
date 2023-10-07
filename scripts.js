console.log(document.title);

//document.getElementById("gen-1").textContent = "Generasión 1 Pokimon";
//o
const gen1 = document.getElementById("gen-1");
gen1.textContent = "Generasión 1 Pokimon";
gen1.style.backgroundColor = "red";


console.log(document.domain)
console.log(document.URL);
console.log(document.querySelectorAll("img"));
const link = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";

//document.querySelectorAll("img").setAttribute("src", link);


const images = document.querySelectorAll("img");
for (let i = 0; i < images.length;  i++ ){
images[i].setAttribute("src", link);
}

//Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying
const imagesVoladoras = document.querySelectorAll(".infocard .infocard-lg-data small a.itype.flying");
for (let i = 0; i < imagesVoladoras.length; i++){
    const divContainer = imagesVoladoras[i].parentElement
    divContainer.style.backgroundColor = "rgba(255,255,0)";
}