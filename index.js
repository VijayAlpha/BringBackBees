const navBtn = `    <div class="nav-btn">
<span class="navigation__x">&nbsp;</span>
</div>
`;
const navEl = document.querySelector(".navigation");

navEl.insertAdjacentHTML("beforebegin", navBtn);

document.querySelector(".nav-btn").addEventListener("click", (e) => {
  e.preventDefault();
  navEl.classList.toggle('navigation__open');
  console.log("dd");
});
