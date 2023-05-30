window.addEventListener("scroll", function() {
    const centeredText = document.querySelector(".centered-text");
    const scrollPosition = window.pageYOffset;


    if (scrollPosition > centeredText.offsetTop - window.innerHeight + 200) {
        centeredText.style.animationPlayState="running";
    }
});