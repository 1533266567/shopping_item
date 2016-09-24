
function getStyle(obj,attr){
		     var val;
			if(window.getComputedStyle){
				//console.log(window.getComputedStyle(odd).width);
				val=window.getComputedStyle(obj,false)[attr];
			}else{
				 //console.log( odd.currentStyle.width);
			    val= obj.currentStyle[attr];
			}
			if(attr=="opacity")
			{
			   val=val*100;
			}
			return val;
			
		}
function move(obj,json,fun,time){
  if(obj.timer){
    clearInterval(obj.timer);
	}
	
   if(!time){
    time=10;
  }
 
  obj.timer=setInterval(function(){
       
	    var bStop=true;
	   for(var attr in json){
	       iTarget=json[attr];
		  var iCur=parseInt(getStyle(obj,attr));
		 var ispeed=(iTarget-iCur)/8;
		 ispeed=ispeed>0?Math.ceil(ispeed):Math.floor(ispeed);
		
		 if(iCur!=iTarget){
		     bStop=false;
			 if(attr=="opacity")
			 {  obj.style.filter="alpha(opacity:"+iCur+ispeed+")";//IE下
				obj.style[attr]=(iCur+ispeed)/100;//非IE
			 }else{
				obj.style[attr]=iCur+ispeed+"px";
			 }
		   }
		 }
		  if(bStop){
				clearInterval(obj.timer);
			  if(fun){
			     fun();
			  }
		   }
	
  },time)
}