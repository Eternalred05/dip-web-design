const tabs = document.querySelectorAll(".slider-tab");

function setActive($tabs, active) {
  $tabs
    .filter((tab) => tab != active)
    .forEach((k) => k.classList.remove("active"));

  active.classList.add("active");
}

const swiper = new Swiper(".slider-container", {
  effect: "fade",
  speed: 900,
  on: {
    slideChange: () => {
      setActive(Array.from(tabs), tabs[swiper.activeIndex]);
    },
  },
});

tabs.forEach((t, index) => {
  t.addEventListener("click", () => {
    setActive(Array.from(tabs), t);
    swiper.slideTo(index);
  });
});
