import * as PIXI from 'pixi.js'

export default class Game {
  constructor(app) {
    this.app = app
    this.stage = new PIXI.Container()
    this.app.stage.addChild(this.stage)
    this.init()
  }

  init() {
    this.graphics = new PIXI.Graphics()

    this.graphics.beginFill(0xAAFFAA)
    this.graphics.drawCircle(400, 300, 50)
    this.graphics.endFill();

    this.stage.addChild(this.graphics)
  }

  dispose() {
    if (this.app && this.stage) {
      this.app.stage.removeChild(this.stage)
    }
  }
}
