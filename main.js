function preload(){

}
function setup(){
    console.log("inside_setup");
    canvas=createCanvas(300,300);
    canvas.center();
}
function draw(){

}

function take_sanpshot(){
    save("myFilterImage.png");
}