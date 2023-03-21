// 모달 열기
function modalOpen() {
    document.querySelector('#modal_wrap').style.display = 'block';
    document.querySelector('#modal_background').style.display = 'block';
}

// 모달 끄기
function modalClose() {
    document.querySelector('#modal_wrap').style.display = 'none';
    document.querySelector('#modal_background').style.display = 'none';
}

//버튼 클릭리스너 달기
document.querySelector('#more').addEventListener('click', modalOpen);
document.querySelector('#modal_close').addEventListener('click', modalClose);
document.querySelector('#modal_background').addEventListener('click', modalClose);



function modalOpen2() {
    document.querySelector('#modal_wrap2').style.display = 'block';
    document.querySelector('#modal_background2').style.display = 'block';
}

// 모달 끄기
function modalClose2() {
    document.querySelector('#modal_wrap2').style.display = 'none';
    document.querySelector('#modal_background2').style.display = 'none';
}

//버튼 클릭리스너 달기
document.querySelector('#btn2').addEventListener('click', modalOpen2);
document.querySelector('#modal2_close').addEventListener('click', modalClose2);



var like_cheak = false;

document.querySelector('#btn1').addEventListener('click', changeheart);
document.querySelector('#btn1').addEventListener('mouseover', changeheartgray);
document.querySelector('#btn1').addEventListener('mouseout', changeheartgray2);

function changeheart(){
    if(like_cheak == false){
        like_cheak = true;
        document.getElementById('btn1').style.backgroundPosition= "-80px -348px";
        document.getElementById('btn1').style.backgroundSize= "420px 420px";
        document.getElementById('btn1').style.backgroundImage="url(./js/css/instagram_image.png)";
    }
    else{
        like_cheak = false;
        document.getElementById('btn1').style.backgroundPosition= "-33px -27px";
        document.getElementById('btn1').style.backgroundSize= "280px 140px";
        document.getElementById('btn1').style.backgroundImage="url(./js/css/image.png)";
    }
}
function changeheartgray(){
    if(like_cheak == false){
        document.getElementById('btn1').style.backgroundPosition= "-33px -55px";
        document.getElementById('btn1').style.backgroundSize= "280px 140px";
        document.getElementById('btn1').style.backgroundImage="url(./js/css/image.png)";
    }
}
function changeheartgray2(){
    if(like_cheak == false){
        document.getElementById('btn1').style.backgroundPosition= "-33px -27px";
        document.getElementById('btn1').style.backgroundSize= "280px 140px";
        document.getElementById('btn1').style.backgroundImage="url(./js/css/image.png)";
    }
}