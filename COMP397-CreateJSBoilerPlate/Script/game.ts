//createJs Boilerplate for COMP397
//*******************************************
var canvas;
var stage: createjs.Stage;
var helloText: createjs.Text;
var buttonBitmap: createjs.Bitmap;
//*******************************************

function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20);

    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);

    mainGame();
}

//Game Loop
function gameLoop() {
    stage.update();
}

function buttonClick() {
    helloText.text = "Good bye";
}

function buttonOut() {
    buttonBitmap.alpha = 5.5;
}

function mainGame() {
    //This is where all the work happens
    helloText = new createjs.Text("Hello world!", "40px consolas", "#000000"); 
    stage.addChild(helloText); //first child object

    buttonBitmap = new createjs.Bitmap("/Images/images.jpg");
    buttonBitmap.x = 100;
    buttonBitmap.y = 200;
    buttonBitmap.addEventListener("click", buttonClick);
    buttonBitmap.addEventListener("mouseover", buttonOut);

    stage.addChild(buttonBitmap);
}


