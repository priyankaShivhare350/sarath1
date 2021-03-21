class Box{
    //constructor is used to define properties
    constructor(x,y,widthx,height){
        var option={
            restitution: 1.0
        }
        this.body=Bodies.rectangle(x,y,widthx,height,option)
        this.body.width=widthx;
        this.body.height=height;
       
        World.add(world,this.body)
    }
    //behaviour
    display(){
        rectMode(CENTER)
        fill("red")
        stroke("yellow")
        strokeWeight(5)
        rect(this.body.position.x,this.body.position.y,this.body.width,this.body.height);
    }
}