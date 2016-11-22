// JavaScript Document
window.onload=function(){
	var guideButton=document.getElementById("guideButton");
	var cover=document.getElementById("cover");
	var guideBox=document.getElementById("guideBox");
	var stepBox=document.getElementsByClassName("stepBox"); 
	guideButton.onclick=function(){
		guideBegin();
		for(var i=0;i<stepBox.length;i++){
			(function(index){
				var closeBtn=stepBox.item(index).getElementsByClassName("close").item(0);
				var nextBtn=stepBox.item(index).getElementsByClassName("next").item(0);
				closeBtn.onclick=function(){
					guideClose(index);
				}
				nextBtn.onclick=function(){
					if(index==stepBox.length-1){
					   guideClose(index);
					}else{
					   stepBox.item(index+1).style.display="block";
					   stepBox.item(index).style.display="none";
					}
					
				}
			})(i)
			
		}
	}
	//首次登录
	if(document.cookie!="name=login"){
		guideBegin();
		guideButton.onclick();
	}
	function guideBegin(){
		cover.style.display="block";
		guideBox.style.display="block";
		stepBox.item(0).style.display="block";
	}
	function guideClose(index){
		stepBox.item(index).style.display="none";
		cover.style.display="none";
		guideBox.style.display="none";
	}
	//设置cookie  Google Chrome只支持在线网站的cookie的读写操作，对本地html的cookie操作是禁止的。
	document.cookie="name=login";
	alert(document.cookie);
}
