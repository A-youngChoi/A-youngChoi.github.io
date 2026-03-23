document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("news-list");
  const btn = document.getElementById("toggle-btn");

  btn.addEventListener("click", () => {
    list.classList.toggle("expanded");
    btn.classList.toggle("active");
    btn.textContent = list.classList.contains("expanded")
      ? "Show Less"
      : "Show More";
  });
});
