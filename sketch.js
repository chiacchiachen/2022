function setup() {
  createCanvas(windowWidth,windowHeight);
  // background(0)
}

function draw() {
    background(0) //背景黑色
    stroke(255)
    noFill()
    rectMode (CENTER) //以方框中心點為座標點

    
    for(var j=0;j<(height/50);j++){
      for(var i=0;i<(width/50);i++){
        // for(var p=0;p<(width/50);p++){
          triangle(50+(i*50),20+(j*50),30+(i*50),50+(j*50),20+(i*50),30+(j*50))
          ellipse(25+(i*50),25+(j*50),50+mouseX/10)
          stroke("#7bc5ae") //線條
          rect(25+(i*50),25+(j*50),50)
          stroke("#5580a0") //線條顏色
          ellipse(50+(i*50),50+(j*50),25+mouseY/5)
        }
      }  
  }