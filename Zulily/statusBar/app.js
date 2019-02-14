const btn = document.getElementById("load");
const status = document.getElementById("status");
btn.addEventListener("click", () => {
  let size = 0;
  const update = setInterval(() => {
    size += 2;
    status.style.width = `${size}%`;
    if (size === 100) {
      clearInterval(update);
    }
  }, 500);
});
