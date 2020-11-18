class pbox
{
   constructor(x,y,width,height){
    this.image = loadImage("dust_bingreen.png")
     var options={
     
      isStatic:false,
      restitution:0,
      friction:0,
       density:0
                    } 
    this.body=Bodies.rectangle(x,y,width,height,options)
    this.width = width;
    this.height = height
    this.x=x
    this.y=y
    
     
     World.add(world,this.body)
   }
   

display()

{
var pboxpos=this.body.position;
push()

   translate(pboxpos.x,pboxpos.y);
  imageMode(CENTER)
  strokeWeight(3);
  image(this.image,0,0,this.width,this.height)
pop()

}
}

