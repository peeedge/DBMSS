(function () {
  var event = window.EVENT;
  if (!event) return;

  document.querySelectorAll("[data-bind]").forEach(function (node) {
    var value = event[node.getAttribute("data-bind")];
    if (value != null) node.textContent = value;
  });

  var image = document.querySelector(".hero-image");
  if (image && event.image) {
    image.src = event.image;
    image.alt = event.imageAlt || event.name || "";
  }

  if (event.name) document.title = event.name;
  var meta = document.querySelector('meta[name="description"]');
  if (meta && (event.imageAlt || event.name)) {
    meta.setAttribute("content", event.imageAlt || event.name);
  }
})();
