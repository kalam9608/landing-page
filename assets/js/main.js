// nav bar manu show hide

let toggle = document.querySelector("#nav-toggle");

toggle.addEventListener("click", () => {
  let show = document.querySelector("#nav-menu-left");

  show.classList.toggle("show-menu");
  show.classList.toggle("blur__header");
});

//add blur header

window.addEventListener("scroll", () => {
  let header = document.getElementById("header");

  if (this.scrollY >= 50) {
    header.classList.add("blur__header");
  } else {
    header.classList.remove("blur__header");
  }
});

// read more

let readmore = document.querySelector(".read-more-btn");

readmore.addEventListener("click", (e) => {
  let readmoreTex = document.querySelector(".read-more-text");

  readmoreTex.classList.toggle("read-more-text-show");

  e.target.textContent === "read more..."
    ? (e.target.textContent = "read less.")
    : (e.target.textContent = "read more...");
});

