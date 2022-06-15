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

let circle = document.getElementById("wrapper");
const onMouseMove = (e) => {
  circle.style.left = -190 + e.pageX + "px";
  circle.style.top = -150 + e.pageY + "px";
};
document.addEventListener("mousemove", onMouseMove);

// document.addEventListener("mousemove" , function (e) {
//  this.querySelectorAll('.header__primary-x').forEach(el => {
//     const speed = el.getAttribute('data-speed');

//     const x = (window.innerWidth - e.pageX*speed) / 100;
//     const y = (window.innerHeight - e.pageY*speed) / 100;

//     el.style.transform = `translateX(${x}px) translateY(${y}px)`;
    
//     console.log('sdd');
//  });

// })
