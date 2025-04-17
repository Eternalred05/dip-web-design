const yearPickerLinks = document.querySelectorAll("#year-picker a");

yearPickerLinks.forEach((link) => {
  link.addEventListener("click", () => changeActive(link));
});

function changeActive(link) {
  yearPickerLinks.forEach((l) => l.parentElement.classList.remove("active"));

  link.parentElement.classList.add("active");
}
