window.onscroll = function() {myFunction()};

window.onresize = function(){myFunction()};

function myFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
  	console.log('lalaa');
  	if(document.documentElement.clientWidth<576){
	  	document.getElementById("menu-top").style.padding = "0";
 		}else{
 			document.getElementById("menu-top").style.padding = "0";
 		}
    document.getElementById("menu-top").style.background = "#000000ab";
    document.getElementsByClassName("logo")[0].style.background = '#000000ab';
    document.getElementsByClassName("logo")[0].style.padding = "7px 0";
  } else {
	  console.log('lelee');
	  if(document.documentElement.clientWidth<576){
	  	document.getElementById("menu-top").style.padding = "0";
 		}else{
 			document.getElementById("menu-top").style.padding = "7px 0";
 		}
    document.getElementById("menu-top").style.background = "none";
    document.getElementsByClassName("logo")[0].style.background = 'none';
    document.getElementsByClassName("logo")[0].style.padding = "14px 0";
  }
}

if(document.documentElement.clientWidth<576){
	document.getElementById("menu-top").style.padding = "0";
}else{
	document.getElementById("menu-top").style.padding = "7px 0";
}
//canvas1

var canvas = document.getElementById('canvas1');
      var ctx = canvas.getContext('2d');
          canvas.width = 298;
          canvas.height = 298;

      

      var obj = {
        maxHei: 120,
        pi: Math.PI*2,
        wid: 20,
        dist: 0,
        radius: 25,
        hei: 100,
        speed: Math.PI/720*2
      }

      var arry = new Array(obj.wid+1).fill().map(function(value, index){
        return {
          y: obj.pi/obj.wid*index,
          x: obj.pi/obj.wid*index*100//(obj.dist+obj.radius)*index
        };
      });

      for (var i = 0; i < arry.length; i++) {
        console.log( Math.cos(arry[i]['y'])+' =/ '+ arry[i]['y']*57.3 );
      }
      
      var posX = 0;
      function draw(){

      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      //posX =posX<canvas.width-obj.radius?+50

        for (var i = 0; i < arry.length; i++) {
         // ctx.fillStyle = '#ffffff';
          ctx.fillStyle = 'hsl('+arry[i]['y']*57.3+',50%,50%)';
          arry[i]['y'] += obj.speed;
          ctx.fillRect(Math.cos(arry[i]['y'])*obj.maxHei+canvas.width/2-obj.radius/2, Math.sin(arry[i]['y'])*obj.maxHei+canvas.height/2-obj.radius/2, obj.radius, obj.radius);
        }
        requestAnimationFrame(draw);
      }

      draw();

