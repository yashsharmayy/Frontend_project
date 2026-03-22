const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
});

document.addEventListener("DOMContentLoaded", () => {
    const img = document.querySelector(".fixed-img");
    const container = document.querySelector(".elem-container");

    container.addEventListener("mouseenter", () => {
        img.style.display = "block";
    });

    container.addEventListener("mouseleave", () => {
        img.style.display = "none";
    });

    const pics = document.querySelectorAll(".elem");
    pics.forEach(elem => {
        elem.addEventListener("mouseenter", () => {
            let pic = elem.getAttribute("data-img");
            img.style.backgroundImage = `url(${pic})`;
        });
    });
});

const headings = document.querySelectorAll(".dpe-head h2");
const dpe_img = document.querySelector(".about-dpe img");

// Set first item as active by default
function dpeFunc(){
    headings[0].classList.add("active");

    headings.forEach((heading) => {
        heading.addEventListener("click", () => {
            // Remove active from all
            headings.forEach(h => h.classList.remove("active"));
            
            // Add active to clicked one
            heading.classList.add("active");

            // Get image URL from clicked heading
            let h_img = heading.getAttribute("data-img-h");

            // Smooth fade change
            dpe_img.style.opacity = 0;
            setTimeout(() => {
                dpe_img.src = h_img;
                dpe_img.style.opacity = 1;
            }, 300);
        });
});

}
function swiperanimation(){
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 100,

    });
}
function loaderFun(){
    const loader = document.querySelector(".loader");
    setTimeout(()=>{
        loader.style.top="-100%"
    },4000)
}


function theame(){
    const btn = document.getElementById("theme-toggle");

    btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    });

}
function changeTheme(){
    window.addEventListener("DOMContentLoaded", () => {
    const hint = document.getElementById("theme-hint");

    // Show hint
    hint.classList.add("show");

    // Hide after 4 seconds
    setTimeout(() => {
        hint.classList.remove("show");
    }, 9000);
});
}




theame()
changeTheme()
loaderFun()
dpeFunc()
swiperanimation()


