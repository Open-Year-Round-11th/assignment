const heart= document.querySelectorAll('.click-heart');

heart.forEach(function(i){
  i.addEventListener('click',()=>{
    i.classList.toggle('fas');
    i.classList.toggle('red-heart');
  });
});



const moreModal = document.querySelector('#more-modal');
const moreBtn = document.querySelectorAll(".post-more");

for (var i = 0; i < moreBtn.length; i++) {
  moreBtn[i].addEventListener('click', function() {
    moreModal.style.display = 'flex';
  });
}

const moreCloseBtn = moreModal.querySelector(".more-close-area")
moreCloseBtn.addEventListener("click", e => {
    moreModal.style.display = "none"
})

moreModal.addEventListener("click", e => {
  const moreEvTarget = e.target
  if(moreEvTarget.classList.contains("more-modal-overlay")) {
      moreModal.style.display = "none"
  }
})








const commentModal = document.querySelector('#comment-modal');
const commentBtn = document.querySelectorAll(".fa-comment");

for (var i = 0; i < commentBtn.length; i++) {
  commentBtn[i].addEventListener('click', function() {
    commentModal.style.display = 'flex';
  });
}

const commentCloseBtn = commentModal.querySelector(".comment-close-area")
commentCloseBtn.addEventListener("click", e => {
    commentModal.style.display = "none"
})

commentModal.addEventListener("click", e => {
  const commentEvTarget = e.target
  if(commentEvTarget.classList.contains("comment-modal-overlay")) {
      commentModal.style.display = "none"
  }
})