const slidingdiv24 = document.querySelector(".div24");
console.log(slidingdiv24);

window.addEventListener("scroll", function () {
  const { scrollTop, clientHeight } = document.documentElement;
  console.log(scrollTop, clientHeight);
  const topElementToTopElement = console.log(
    slidingdiv24.getBoundingClientRect().top
  );
  if (scrollTop < 486) {
    slidingdiv24.style.opacity = "1";
  }
});
