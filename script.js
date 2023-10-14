
const menus = document.querySelector('.mobile-menu');
const btn = document.querySelector('.navbar');
const closeBtn = document.querySelector('.close-button');
const links = document.querySelectorAll('.mobile-menu a');

//creating toggle function

function togle() {
    menus.classList.toggle('show-menu');
}

//adding event listners

btn.addEventListener('click', togle);

closeBtn.addEventListener('click', togle);

//adding event listeners o obile menu links

links.forEach(link => {
    link.addEventListener('click', togle);
  });
