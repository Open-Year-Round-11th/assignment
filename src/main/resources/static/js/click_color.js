window.onload = function() {
    
    function onClick() {
        document.querySelector('.heart_empty').style.display ='block';
        document.querySelector('.heart_full').style.display = 'none';
    }   
    function offClick() {
        document.querySelector('.heart_empty').style.display ='none';
        document.querySelector('.heart_full').style.display ='block';
    }
 
    document.querySelector('.heart_empty').addEventListener('click', onClick);
    document.querySelector('.heart_full').addEventListener('click', offClick);
};