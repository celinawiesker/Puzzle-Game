var level = 1;

Game.Gallery = function (game) {
  this.game = game;
};

Game.Gallery.prototype = {
  create: function () {
    //this.game.stage.backgroundColor = '#dcdcdc';

    let background = this.game.add.image(0, 0, 'background')
    //console.log(background)
    background.scale.setTo(4)

    // this.menu_button = this.game.add.button(0, 0, this.makeBox(200, 50), this.gotoMenu, this);
    // this.menu_button.tint = 0xff00ff;
    // this.game.add.bitmapText(50, 10, 'minecraftia', 'Menu', 24);

    this.menu_button = this.game.add.button(50, 0, 'settings', this.gotoMenu, this);
    this.menu_button.scale.setTo(1.25)
    this.menu_button.tint = 0xff4b4b4b;
    // settingsbtn.setInteractive();
    // settingsbtn.on('pointerdown', () => this.scene.start('Puzzle_Menu'))
    //settingsbtn.setScale(0.5);

    x = 220;
    y = 160;
    count = 0
    for (var i = 1; i < 10; i++) {
      count += 1;
      var b = this.game.add.button(x, y, i.toString(), this.loadLevel, this);
      // b.gallery = i.toString();
      b.anchor.setTo(0.5);
      b.scale.x = 0.3;
      b.scale.y = 0.3;
      x += 300;
      // y += 20;
      if (count === 3) {
        count = 0;
        y += 220;
        x = 220;
      }


    }
  },
  gotoMenu: function () {
    this.game.state.start('Menu');
  },
  makeBox: function (x, y) {
    var bmd = this.game.add.bitmapData(x, y);
    bmd.ctx.beginPath();
    bmd.ctx.rect(0, 0, x, y);
    bmd.ctx.fillStyle = '#fff';
    bmd.ctx.fill();
    return bmd;
  },
  loadLevel: function () {
    // console.log(arguments[0].key);
    level = arguments[0].key;
    this.game.state.start('Play');
  }

};
