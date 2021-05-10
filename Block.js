class Block{
    constructor(x, y, width, height) {
        var options = {
               restitution:0.4,
               friction:0      
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visiblity =225;
        this.image = loadImage("block(1).png");
        World.add(world, this.body);
      }
      display(){
        var pos= this.body.position;

       if(this.body.speed<3){
        //var angle = this.body.angle;
       
        //push();
        //translate(pos.x, pos.y);
        //rotate(angle);
       imageMode(CENTER);
        image(this.image, pos.x,pos.y,this.width, this.height);
       // pop();

       }
       else{
         World.remove(world, this.body);
        // push();
         this.Visiblity = this.Visiblity - 5;
         tint(255, this.Visiblity);
         image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
         //image(this.image, this.body.position.x, this.body.position.y, 50, 50);
        // pop();
       }
      }
}
