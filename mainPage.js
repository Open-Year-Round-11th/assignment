const openBtn = document.getElementsByClassName("btnMore");
const modal = document.querySelector(".modal");
const openModal = () => {
    modal.classList.remove("hidden");
}
openBtn.addEventListener("click", openModal);
