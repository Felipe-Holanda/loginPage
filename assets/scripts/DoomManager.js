class DoomManager {
    static renderNow() {

        //Declaração dos elementos
        const body = document.querySelector('body')
        const div = document.createElement('div')
        const section = document.createElement('section')
        const form = document.createElement('form')
        const h1 = document.createElement('h1')
        const h2 = document.createElement('h2')
        const input = document.createElement('input')
        const button = document.createElement('button')
        const figure = document.createElement('fiure')
        const img = document.createElement('img')
        const main = document.createElement('main')

        //Manipuração do DOM
        body.appendChild(main)
        main.appendChild(div)
        div.appendChild(section)
        section.appendChild(figure)
        figure.appendChild(img)

        div.appendChild(form)

    }
}

export { DoomManager }