var length = data.length;

// you work goes here
// -----------------------
var i = 0;

while (i < length){
  let ball = data[i];
  create(ball.x, ball.y, ball.color);
  i += 1;
}
