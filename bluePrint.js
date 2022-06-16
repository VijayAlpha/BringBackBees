function bluePrint(num = 1) {
  document.querySelector(".blueprint").addEventListener("click", (e) => {
    document.getElementById(`${e.target.id}-X`).style.display = "block";
    document.getElementById("blue-print").style.display = "none";
    bluePrint(e.target.id[11]);
  });

  document
    .querySelector(`#popup-close-btn-${num}`)
    .addEventListener("click", (e) => {
      document.querySelectorAll(".popup").forEach((el) => {
        el.style.display = "none";
      });
      document.getElementById("blue-print").style.display = "flex";
    });
}

function mobileView() {
  const El = `<div class="blueprint__col blueprint-01-bg" id="blueprint-01">
  <div class="blueprint__text" id="blueprint-01">EVENTS</div>
</div>
<div class="blueprint__col blueprint-05-bg" id="blueprint-05">
<div class="blueprint__text" id="blueprint-05">Gallery</div>
</div>
`;

  document.querySelector(".blueprint__mobile").insertAdjacentHTML("afterbegin", El)
}

//mobileView();
bluePrint();
