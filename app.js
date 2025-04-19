const yearPickerLinks = document.querySelectorAll("#year-picker a");
const timelineTitle = document.querySelector("#timeline-title");
const header = document.querySelector("#hero header");
const wrapper = document.querySelector("#timeline-wrapper");

let up = false;

function changeActive(link) {
  yearPickerLinks.forEach((l) => l.parentElement.classList.remove("active"));

  link.parentElement.classList.add("active");
}

wrapper.addEventListener("scroll", () => {
  const currentYear = Math.floor(wrapper.scrollTop / wrapper.clientHeight);

  changeActive(yearPickerLinks[currentYear]);
});

window.addEventListener("scroll", () => {
  if (up) {
    timelineTitle.style.translate = "0 0";
  }

  if (timelineTitle.getBoundingClientRect().top < header.clientHeight) {
    timelineTitle.style.translate = "0 -75%";
    up = true;
  }
});
