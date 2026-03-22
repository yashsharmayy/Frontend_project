const navlink=document.querySelectorAll('.nav-link');
const openbar=document.querySelector('#menu-open-button');
const closebar=document.querySelector('#menu-close-button');
openbar.addEventListener('click',()=>{
    document.body.classList.toggle('toggle-bar');
});

closebar.addEventListener('click',()=>{
    openbar.click()
});

navlink.forEach(link => {
  link.addEventListener("click",()=>{
    openbar.click();
  });
});
const swiper = new Swiper('.slider-wrapper', {

  loop: true,
  grabCursor:true,
  spaceBetween:25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints:{
    0:{
        slidesPerView:1
    },
    768:{
        slidesPerView:2
    },
    1024:{
        slidesPerView:3
    },
  }


});

document.getElementById('contact-form').addEventListener('submit', function(e){
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    fetch("https://script.google.com/macros/s/AKfycbxlTUiIIvagDDE5HS1Ln7P7EJutCcHLFb9svqY0CXQ0S9_PEAMPGuV8yVXbnRt7-Oik/exec", {
        method: "POST",
        body: data
    })
    .then(res => res.text())
    .then(txt => {
        document.getElementById('form-status').textContent = "Form submitted successfully!";
        form.reset();
    })
    .catch(err => {
        document.getElementById('form-status').textContent = "Error submitting form.";
        console.error(err);
    });
});