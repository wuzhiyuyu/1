
let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/1.png') {
    myImage.setAttribute('src','images/2.png');
  } else {
    myImage.setAttribute('src','images/1.png');
  }
};                                           //µã»÷Í¼Æ¬ÇÐ»»



function setHeading(name){
	let myHeading=document.querySelector('h1');
	myHeading.textContent='Mozilla¿á±ÐÁË,'+name+'!';
}

function setUserName(){
	let myName=prompt('ÇëÊäÈëÄãµÄÃû×Ö');
	localStorage.setItem('name',myName);
	setHeading(myName);
}

let storedName=localStorage.getItem('name');
if(!storedName){
	setUserName();
}else{
	setHeading(storedName);
}

let myButton=document.querySelector('button');
myButton.onclick=setUserName;