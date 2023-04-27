export class pokesus {

    #lista
    #posX
    #posY
    constructor(lista) {
        this.#lista = lista
    }
    generatePokeSus(lista) {
        // let szoveg = `<tr>
        // <td>${this.#lista.name}</td>
        // <td><img src="${this.#lista.sprites.front_default}"></td>`
        // for (let ix = 0; ix < this.#lista.stats.length; ix++)
        //     szoveg += `<td>${this.#lista.stats[ix].base_stat}</td>`
        // szoveg += `
        // <td>${this.#lista.weight}</td>
        // <td>${this.#lista.types[0].type.name}</td>
        // </tr>`
        this.appendText(`<img style="position:absolute;" class="pokesus" src="${this.#lista.sprites.front_default}">`)
        this.POKESUS=$(".pokesus:last-child")
        //console.log(this.POKESUS);
        $(window).on("keydown", event => {
            let pos = this.POKESUS.position()
            //console.log(this.POKESUS);
            switch (event.key) {
                case lista[0]:
                    this.POKESUS.css("top", Math.max(pos.top - 5,0))
                    break;
                case lista[1]:
                    this.POKESUS.css("left", Math.max(pos.left - 5,0))
                    break;
                case lista[2]:
                    this.POKESUS.css("top", Math.min(pos.top + 5,window.innerHeight-this.POKESUS.height()))
                    break;
                case lista[3]:
                    this.POKESUS.css("left", Math.min(pos.left + 5, window.innerWidth-this.POKESUS.width()))
                    break;
                default:
                    break;
            }
        })
    }
    appendText(szoveg) {
        $("body").append(szoveg)
    }

}