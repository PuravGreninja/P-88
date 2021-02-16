var myCanvas=new fabric.Canvas("myCanvas");
var playerX=10;
var playerY=10;
var blockW=30;
var blockH=30;
var playerObj="";
var blockObj="";
function playerUpdate(){
fabric.Image.fromURL("player.png",function(Img){
playerObj=Img;
playerObj.scaleToWidth(150);
playerObj.scaleToHeight(140);
playerObj.set({top:playerY,left:playerX});
myCanvas.add(playerObj);
});
}
function blockUpdate(getImg){
fabric.Image.fromURL(getImg,function(Img){
blockObj=Img;
blockObj.scaleToWidth(blockW);
blockObj.scaleToHeight(blockH);
blockObj.set({top:playerY,left:playerX});
myCanvas.add(blockObj);
});
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
ASCII=e.keyCode;
console.log(ASCII);
if(e.shiftKey==true&&ASCII=="80"){
console.log("p & shift pressed together");
blockW=blockW+10;
blockH=blockH+10;
document.getElementById("width").innerHTML=blockW;
document.getElementById("height").innerHTML=blockH;
}
if(e.shiftKey&&ASCII=="77"){
console.log(ASCII);
blockW=blockW-10;
blockH=blockH-10;
document.getElementById("width").innerHTML=blockW;
document.getElementById("height").innerHTML=blockH;
}
if(ASCII=="38"){
up();
console.log("up");
}
if(ASCII=="40"){
down();
console.log("down");
}
if(ASCII=="37"){
left();
console.log("left");
}
if(ASCII=="39"){
right();
console.log("right");
}
if(ASCII=="70"){
blockUpdate("ironman_face.png");
console.log("f");
}
if(ASCII=="66"){
blockUpdate('hulkd_body.png');
console.log("b");
}
if(ASCII=="76"){
blockUpdate("thor_right_hand.png");
console.log("l");
}
if(ASCII=="82"){
blockUpdate("captain_america_left_hand.png");
console.log("r");
}
if(ASCII=="72"){
blockUpdate("spiderman_legs.png");
console.log("h");
}
}
function up(){
if(playerY>=0){
playerY=playerY-blockH;
console.log("px"+playerX+" py"+playerY);
myCanvas.remove(playerObj);
playerUpdate();
}
}
function down(){
if(playerY<=450){
playerY=playerY+blockH;
console.log("px"+playerX+" py"+playerY);
myCanvas.remove(playerObj);
playerUpdate();
}
}
function left(){
if(playerX>=0){
playerX=playerX-blockW;
console.log("px"+playerX+" py"+playerY);
myCanvas.remove(playerObj);
playerUpdate();
}
}
function right(){
if(playerX<=850){
playerX=playerX+blockW;
console.log("px"+playerX+" py"+playerY);
myCanvas.remove(playerObj);
playerUpdate();
}
}