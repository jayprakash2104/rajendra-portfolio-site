window.componentsLoadedPromise = Promise.all([
  fetch("components/navbar.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("navbar").innerHTML = html;
      initNavbar();
    }),
  fetch("components/footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;

    // 👉 CALL animation AFTER footer loads
    initCTAAnimation();
  }),
  fetch("components/social-bar.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("social-bar").innerHTML = html;
    }),
]);

window.componentsLoadedPromise.then(() => {
  window.dispatchEvent(new Event("componentsLoaded"));
});


