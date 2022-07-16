let btnOpn = document.querySelector(".button-up");

window.onscroll = () => {
    if (window.scrollY > 800) {
        btnOpn.classList.remove("button-up-hidden");
    } else if (window.scrollY < 800) {
        btnOpn.classList.add("button-up-hidden");
    }
};

btnOpn.onclick = () => {
    window.scrollTo(0, 0);
};
