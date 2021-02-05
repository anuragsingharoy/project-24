class Box{
    constructor(x,y,width,height){
        var Options = {
            isStatic: true,
            'restitution':0,
            'friction':1,
            'density':0.1

            
        }
        this.body = Bodies.rectangle(x,y,width,height,Options)
        this.width = width
        this.height = height
        World.add(world,this.body)

       
       
     
    
    }
    display(){
    var pose = this.body.position
    rectMode(CENTER)
  fill("red")
    rect(pose.x,pose.y,this.width,this.height)
    
    }
    }