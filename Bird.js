class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.trajectory= [];
    this.image1= loadImage("sprites/smoke.png");
  }

  display() {
   super.display();
   console.log(this.body.speed);
   if(this.body.speed>10&& this.body.position.x>250){
   var pos= [this.body.position.x, this.body.position.y];
   this.trajectory.push(pos);
   }
   max= this.trajectory.length-1;
   for (var i=0; i<=max; i++){
     image(this.image1, this.trajectory[i][0], this.trajectory[i][1] );
   }

  
  }
}
