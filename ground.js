class Ground{
    constructor(x,y,width,height){
        var options = {
            isStatic:true
          }
        this.box = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
       World.add(myWorld,this.box);  
    }
    display(){
        var pos = this.box.position;
        rect(pos.x,pos.y,this.width,this.height)
    }
}