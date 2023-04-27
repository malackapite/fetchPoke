import { pokesus } from "./pokesus.js";

function getObjLista() {
    let file = "https://pokeapi.co/api/v2/pokemon/" + parseInt(Math.random() * 1000);
    fetch(file)
        .then((response) => response.json())
        .then((data) => {
            megjelenit(data);
        })
        .then(() => {
        })
        .catch((e) => console.log(e));
}
$(document).ready(
    function () {
            for (let ix = 0; ix < 2; ix++)
                getObjLista()

    }
)
function megjelenit(lista) {
    new pokesus(lista).generatePokeSus(["w","a","s","d"])
    new pokesus(lista).generatePokeSus(["j","i","k","l"])
}