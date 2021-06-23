var Game = {
  w: 1024,
  h: 768 
};

// var w = 800;
// var h = 600;

Game.Boot = function(game) {
  this.game = game;
};

Game.Boot.prototype = {
  preload: function() {
    // console.log('blah'+Game.w);
		this.game.stage.backgroundColor = '#FFF';
		this.game.load.image('loading', 'assets/images/loading.png');
		this.game.load.image('title', 'assets/images/title.svg');
		this.game.load.image('instructions', 'assets/images/instructions.png');
    this.game.load.bitmapFont('minecraftia', 'assets/fonts/font.png', 'assets/fonts/font.xml'); //load default font


    //Scale Image to Fit Window
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.game.scale.maxHeight = window.innerHeight;
    this.game.scale.maxWidth = window.innerHeight*(Game.w/Game.h);

  },
  create: function() {
   this.game.state.start('Load');
  }
};

Game.Load = function(game) {
  this.game = game;
};

Game.Load.prototype = {
  preload: function() {


    //Loading Screen Message/bar
   
    this.game.load.image('easy','assets/images/easy.svg');
    this.game.load.image('normal','assets/images/normal.svg');
    this.game.load.image('hard','assets/images/hard.svg');
    this.game.load.image('startbtn', 'assets/images/startbtn.svg'); 
    this.load.image('settings', 'assets/images/settings.svg');
    this.load.image('preview', 'assets/images/preview.svg');
    this.load.image('difficulty', 'assets/images/difficulty.png');
    this.load.image('background', 'assets/images/title.svg');
    this.load.image('play_bg', 'assets/images/play_bg.png');
    this.load.image('back', 'assets/images/button_grey.png');
   
    for(var i = 1;i < 10;i++) {
      this.game.load.image(i.toString(), 'assets/images/'+i.toString()+'.svg');
    }


  },
  create: function() {
    this.game.state.start('Menu');
    // this.game.state.start('Play');
  }
};
