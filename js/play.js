/*global Game*/

/**
 * Returns a random integer between min and max
 * Using Math.round() will give you a non-uniform distribution!
 */

// // Choose Random integer in a range
// function rand (min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// var musicOn = true;


var wKey;
var aKey;
var sKey;
var dKey;
var score = 0;

Game.Play = function (game) {
  this.game = game;
};

Game.Play.prototype = {
  init: function () {
    this.physics.startSystem(Phaser.Physics.ARCADE);
  },
  create: function () {
    this.game.world.setBounds(0, 0, Game.w, Game.h);

    this.game.stage.backgroundColor = '#EFC8A1';
   
    //let background = this.game.add.image(0,0, 'background')
    //console.log(background)
    // background.scale.setTo(4)

    this.game_won = false;

    
    if (difficulty === 'easy') {
      this.square = 3;
    }else if (difficulty === 'normal') {
      this.square = 5;
    }else if (difficulty === 'hard') {
      this.square = 10;
    }


    this.puzzle = new Puzzle(this.game, level.toString(), this.square);
    this.puzzle.scatter();

    this.preview_button = this.game.add.button(Game.w - 100, 20, 'preview', this.puzzle.preview_toggle, this.puzzle);
    this.preview_button.scale.setTo(1.05)

    this.back_button = this.game.add.button(50, 20, 'back', this.gotoGallery, this);
    this.back_button.scale.setTo(0.1)
  },
  
  gotoGallery: function () {
    this.game.state.start('Gallery');
  },

  update: function () {

    if (this.puzzle.won === true) {
      this.game.input.onUp.add(this.nextLevel, this);
    }

  },
  nextLevel: function () {
    this.game.state.start('Gallery');
  },
};
