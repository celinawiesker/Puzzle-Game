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

    this.menu_button = this.game.add.button(50, 0, 'settings', this.gotoMenu, this);
    this.menu_button.scale.setTo(1.25)


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

  loadLevel: function () {
    level = arguments[0].key;
    this.game.state.start('Play');
  }

};
