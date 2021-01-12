class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.trajectory = []
    this.image1=loadImage("sprites/smoke.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;


    super.display();
    if(this.body.speed>7){
    this.trajectory.push([this.body.position.x,this.body.position.y])
    console.log(this.trajectory)
    }

    for(var Count=0; Count<this.trajectory.length; Count=Count+1){
      image(this.image1,this.trajectory[Count][0],this.trajectory[Count][1])
    }
  }
}
