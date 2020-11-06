//curtain menu
function openNav(){
    document.getElementById("menu").style.width = "100%";
}
function closeNav(){
    document.getElementById("menu").style.width = "0";
}


//fade and scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 1, //giving time to fade-in
    rootMargin: "0px 0px -10px 0px" //the point where the fade-in starts to work. 50px after intersecting
};

const appearOnScroll = new IntersectionObserver(
    function(entries, appearOnScroll){
        entries.forEach(entry => {
            if (!entry.isIntersecting){
                return;
            }
            else{
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        })


    }, appearOptions
);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

//read more
function readMore(){
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read More";
        moreText.style.display = "none";
    }

    else {
        dots.style.display = "none";
        btnText.innerHTML = "Read Less";
        moreText.style.display = "inline";
    }
}
readMore();