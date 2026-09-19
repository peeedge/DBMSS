(function () {
  var event = window.EVENT;
  if (!event) return;

  document.querySelectorAll("[data-bind]").forEach(function (node) {
    var value = event[node.getAttribute("data-bind")];
    if (value != null) node.textContent = value;
  });

  if (event.name) document.title = event.name;
  var meta = document.querySelector('meta[name="description"]');
  if (meta && event.description) meta.setAttribute("content", event.description);
})();
