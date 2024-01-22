const container = document.querySelector(".scrollable-tabs-container");
let isMouseDown = false;
let startX;
let scrollLeft;

container.addEventListener("mousedown", (e) => {
  isMouseDown = true;
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
});

container.addEventListener("mouseleave", () => {
  isMouseDown = false;
});

container.addEventListener("mouseup", () => {
  isMouseDown = false;
});

container.addEventListener("mousemove", (e) => {
  if (!isMouseDown) return;
  e.preventDefault();
  const x = e.pageX - container.offsetLeft;
  const walk = (x - startX) * 2;
  container.scrollLeft = scrollLeft - walk;
});

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".scrollable-tabs-container a");

  function removeAllActiveClasses() {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", function (event) {
      event.preventDefault();
      removeAllActiveClasses();
      tab.classList.add("active");

      // Get the href attribute and navigate to the specified URL
      const href = tab.getAttribute("href");
      if (href) {
        window.location.href = href;
      }
    });
  });
});
