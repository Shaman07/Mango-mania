class tree {
constructor(x,y,width,height){
var option = {
    isStatic:true,
    friction:1
}

this.x = this.body.position.x;
this.y = this.body.position.y;
this.width = 50;
this.height = 100;
}
display() {
var angle = this.body.angle
rotate(angle);
push();
translate(push);
ellispeMode(CENTER);
pop();
}
}
