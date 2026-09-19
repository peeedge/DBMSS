(function () {
  var event = window.EVENT;
  if (!event) return;

  function get(path) {
    return path.split(".").reduce(function (value, key) {
      return value == null ? undefined : value[key];
    }, event);
  }

  document.querySelectorAll("[data-bind]").forEach(function (node) {
    var value = get(node.getAttribute("data-bind"));
    if (value != null) node.textContent = value;
  });

  document.querySelectorAll("[data-bind-href]").forEach(function (node) {
    var value = get(node.getAttribute("data-bind-href"));
    if (value) node.setAttribute("href", value);
  });

  document.querySelectorAll("[data-bind-href-mail]").forEach(function (node) {
    var value = get(node.getAttribute("data-bind-href-mail"));
    if (value) node.setAttribute("href", "mailto:" + value);
  });

  var title = event.name ? event.name + " · event" : "Event";
  document.title = title;
  var meta = document.querySelector('meta[name="description"]');
  if (meta && event.tagline) meta.setAttribute("content", event.tagline);

  var schedule = document.getElementById("schedule");
  (event.schedule || []).forEach(function (item) {
    var li = document.createElement("li");
    li.innerHTML =
      "<time>" +
      escapeHtml(item.time) +
      "</time><div><h3>" +
      escapeHtml(item.title) +
      "</h3><p>" +
      escapeHtml(item.detail) +
      "</p></div>";
    schedule.appendChild(li);
  });

  var faq = document.getElementById("faq");
  (event.faq || []).forEach(function (item) {
    var details = document.createElement("details");
    details.innerHTML =
      "<summary>" +
      escapeHtml(item.q) +
      "</summary><p>" +
      escapeHtml(item.a) +
      "</p>";
    faq.appendChild(details);
  });

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
})();
