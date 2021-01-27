class Ball extends BaseClass{
    constructor(x,y){
        super(x,y,50,50)
        this.x = x
        this.y = y
        this.image = loadImage("sprites/paper.png")
    }
       /* display(){
        imageMode(CENTER)
        image(this.image,this.x,this.y,this.width,this.height)
        super.display();
    }*/
}