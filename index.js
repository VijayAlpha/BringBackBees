const navBtn = `    <div class="nav-btn">
<span class="navigation__x">&nbsp;</span>
</div>
`;
const navEl = document.querySelector(".navigation");

navEl.insertAdjacentHTML("beforebegin", navBtn);

document.querySelector(".nav-btn").addEventListener("click", (e) => {
  e.preventDefault();
  navEl.classList.toggle('navigation__open');
});

// document.addEventListener("mousemove" , function (e) {
//  this.querySelectorAll('.header__primary-x').forEach(el => {
//     const speed = el.getAttribute('data-speed');

//     const x = (window.innerWidth - e.pageX*speed) / 100;
//     const y = (window.innerHeight - e.pageY*speed) / 100;

//     el.style.transform = `translateX(${x}px) translateY(${y}px)`;
    
//     console.log('sdd');
//  });

// })
