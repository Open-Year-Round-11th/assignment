
var imgArray=new Array();
imgArray[0]="../img/screenshot1.png";
imgArray[1]="../img/screenshot2.png";
imgArray[2]="../img/screenshot3.png";
imgArray[3]="../img/screenshot4.png";

function showImage(){
    var imgNum=Math.round(Math.random()*3);
    var objImg=document.getElementById("front");
    objImg.src=imgArray[imgNum];
    setTimeout(showImage,5000);
}

