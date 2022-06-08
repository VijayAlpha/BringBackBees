function bluePrint(num = 1) {
  document.querySelector(".blueprint").addEventListener("click", (e) => {
    document.getElementById(`${e.target.id}-X`).style.display = "block";
    document.getElementById("blue-print").style.display = "none";
    bluePrint(e.target.id[11]);
  });

  document.querySelector(`#popup-close-btn-${num}`).addEventListener("click", (e) => {
    document.querySelectorAll(".popup").forEach(el => {
        el .style.display = "none";
    })
    document.getElementById("blue-print").style.display = "flex";
  });
}

bluePrint();
