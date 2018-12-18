

var body = document.querySelector("body");
var width = body.clientWidth;
var height = body.clientHeight;

body.addEventListener("keypress", function(e){
  var randX = (Math.random())*width;
  var randY = (Math.random())*height;
  var randR = (Math.random())*255;
  var randG = (Math.random())*255;
  var randB = (Math.random())*255;

  if(event.keyCode === 13) {
    var circle = new Path.Circle(new Point(randX,randY), 10);
    circle.fillColor = "rgb(" + randR + "," + randG + "," + randB + ")";
    onFrame();
  }  

});

function onFrame(event) {
	// Each frame, change the fill color of the path slightly by
	// adding 1 to its hue:
	this.fillColor.hue += 1;
}

//GRID OF CIRCLES
  // for(var x = 0; x < 1000; x+= 100){
  //   for(var y = 0; y < 1000; y+= 100){
  //     new Path.Circle(new Point(x,y), 10).fillColor = "white";
  //   }
  // }

//THIS ONE WORKS TOO...more complicated though
// var circle = new Path.Circle({
//   center: [50, 50],
//   radius: 10,
//   fillColor: 'red'
// });

// // Make 20 copies of the circle
// for ( i = 0; i < 20; i++) {
//   var copy = circle.clone();
//   copy.position.x += i * copy.bounds.width;
// }
