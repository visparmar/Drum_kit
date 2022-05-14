






var len=document.getElementsByTagName("button").length;

for(var i=0;i<len;i++)
{
	document.getElementsByTagName("button")[i].addEventListener("click",playAudio);
	
	}
	
	function playAudio()
{
	var buttonhtml=this.innerHTML;
	makesound(buttonhtml);
	Anmi(buttonhtml);

}
document.addEventListener("keydown", function (event)
{
	makesound(event.key);
	Anmi(event.key);
	
});




function makesound( key)
{
	
	
	switch(key)
	{
		case 'w':
		var tom1=new Audio("tom-1.mp3");
		tom1.play();
		break;
		
		case'a':
		var tom2=new Audio("tom-2.mp3");
		tom2.play();
		break;
		
		case's':
		var tom3=new Audio("tom-3.mp3");
		tom3.play();
		break;
		
		case'd':
		var tom4=new Audio("tom-4.mp3");
		tom4.play();
		break;
		
		case'j':
		var snare=new Audio("snare.mp3");
		snare.play();
		break;
		
		case'k':
		var crash=new Audio("crash.mp3");
		crash.play();
		break;
		
		
		case'l':
		var kick=new Audio("kick-bass.mp3");
		kick.play();
		break;
     }
	
	
	
}

function Anmi(key)
{
	var active=document.querySelector("."+key);
	
	active.classList.add("pressed");
	setTimeout(rmv, 100);

	function rmv()
	{active.classList.remove("pressed");}
}














