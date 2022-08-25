const getId = (id) => document.getElementById(id);

for (let i = 1; i <= 6; i++) {
  let header = getId(`heading-${i}`);
  let collapse = getId(`collapse-${i}`);

  header.addEventListener("click", function () {
    collapse.classList.toggle("show");
  });

  let subHeader = getId(`heading-${i}-1-1`);
  let subCollapse = getId(`collapse-${i}-1-1`);

  subHeader.addEventListener("click", function () {
    subCollapse.classList.toggle("show");
  });
}
