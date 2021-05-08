var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img;
var player_img,player_img1;
var player1score =0;
var player2score =0;

function preload(){
  back_img = loadImage("images/background.jpg");
  player_img = loadImage("images/arrow.png");
  fruit1_img = loadImage("images/apple.png");
  fruit2_img = loadImage("images/mango.jpg");
  fruit3_img = loadImage("images/orange.jpg");
  player_img1=loadImage("images/bow.png");
  fruitGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}