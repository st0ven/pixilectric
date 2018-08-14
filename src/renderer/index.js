import * as PIXI from 'pixi.js'
import Game from './game'

const app = new PIXI.Application(800, 600, { backgroundColor : 0x1099bb });

document.getElementById('app').appendChild(app.view);

// Load the stylesheet.  This is necessary because css-loader breaks
// hot module replacement if the .css file is required directly
const styles = document.createElement('style')
styles.innerText='body { background: #000; margin: 0px; padding: 0px; overflow: hidden; }'
document.head.appendChild(styles)

let game = undefined

function init(Game) {
    let oldGame = game
    game = new Game(app)

    if (oldGame) {
        oldGame.dispose()
    }
}

init(Game)

if (module.hot) {
    module.hot.accept('./game', () => {
        console.log('Reloading scene...')
        init(require('./game').default)
    })
}
