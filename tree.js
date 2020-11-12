class tree {
constructor(x,y,width,height){
var option = {
    isStatic:true,
    friction:1
}
this.body = Bodies.rectangle(x,y,width,height);
this.x = this.body.position.x;
this.y = this.body.position.y;
this.width = width;
this.height = height;
World.add(world ,this.body);     
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
