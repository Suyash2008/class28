class Bird extends BaseClass{
    constructor(x,y){
        super(x,y,50,50);
        this.Image = loadImage("sprites/bird.png");
        
    }
    display(){
        super.display();
    }
}