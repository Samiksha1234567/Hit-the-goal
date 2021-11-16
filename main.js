var canvas = new fabric.Canvas('myCanvas');
ball_y=0;
ball_x=0;
ball_y=400;
ball_x=800;
function load_img(){
    fabric.Image.fromURL("goalf-h1.png",function(Img){
        hole_obj =Img ;
        hole_obj.scaletowidth(50);
        hole_obj.scaletoheight(50);
        hole_obj.set){
            top:hole_y,
            left:hole_x
        });
        canvas.add(hole_obj);
    });
    new_image();
}
function new_image()
{
    fabric.Image.fromURL("ball.png",function(Img){
        ball_obj =Img ;
        ball_obj.scaletowidth(50);
        ball_obj.scaletoheight(50);
        ball_obj.set){
            top:ball_y,
            left:ball_x
        });
        canvas.add(ball_obj);
    }); 
}
if((ball_x==hole_x)&&(ball_y==hole_y)){
   canvas.remove(ball_obj);
}
document.getElementById("hd3").innerHTML="You have hit the goal!!!";
document.getElementById("myCanvas").style.borderColor="red";
function down(
    {
        if(ball_y <=450)
        {
            ball_y = ball_y + block_image_height;
            console.log("block image height = " + block_image_height');
            console.log("When down arrow key is pressed, X = " + ball_x +" , Y ="+ball_y");
            canvas.remove(ball_obj);
            new_image();
         }
        }
         fabric.Image.fromURL("ball.png",function(Img){
             window.addEventListener("keydown",my_keydown);
             ball_obj.scaletowidth(50);
        ball_obj.scaletoheight(50);
