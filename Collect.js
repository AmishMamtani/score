class Collect{
    constructor(x,y,width,height){
    }
    spawnMask(){
        if(frameCount%100===0){
            this.body=createSprite(random(600,1200),random(500,700),50,50);
            this.image = loadImage("Images/Mask.png")
            this.body.addImage("mask",this.image);
            this.body.scale=0.15;
            this.body.velocityX=Math.round(random(-4,-6));
            //console.log(this.body.velocityX)
            maskGroup.add(this.body);
            
        }
    }
    spawnSanitizer(){
        if(frameCount%500===0){
            this.body=createSprite(1200,random(600,750),50,50);
            this.image = loadImage("Images/sani.png")
            this.body.addImage("sanitizer",this.image);
            this.body.velocityX=Math.round(random(-4,-6));
            this.body.scale=0.2;
            sanitizerGroup.add(this.body);
        }
     }
     collectMask(){
         if(maskGroup.isTouching(doctor.body)){
            maskGroup.setLifetimeEach(0);
            score = score+1;
        }
     }
     collectSanitizer(){
         if(sanitizerGroup.isTouching(doctor.body)){
             sanitizerGroup.setLifetimeEach(0);
             score = score+2;
         }
     }
}