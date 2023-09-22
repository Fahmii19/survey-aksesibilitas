mapboxgl.accessToken =
  "pk.eyJ1IjoibWVudGhvZWxzciIsImEiOiJja3M0MDZiMHMwZW83MnVwaDZ6Z2NhY2JxIn0.vQFxEZsM7Vvr-PX3FMOGiQ";

var map = new mapboxgl.Map({
  container: "mapAksesibilitas",
  style: "mapbox://styles/mapbox/streets-v11",
  zoom: 10.5,
  center: [106.8295257, -6.210588],
  preserveDrawingBuffer: true,
  attributionControl: false,
});

map.addControl(new mapboxgl.NavigationControl());

var controlGroup = document.querySelector(
  ".mapboxgl-ctrl-top-right .mapboxgl-ctrl-group"
);

var compass = controlGroup.querySelector(".mapboxgl-ctrl-compass");
if (compass) {
  compass.style.setProperty("display", "none", "important");
}

// Jika grup kontrol ditemukan
if (controlGroup) {
  // Kode untuk tombol kustom Anda di sini
  var customButton = document.createElement("button");
  customButton.className = "mapboxgl-ctrl-icon custom-control-button";

  var customButton = document.createElement("button");
  customButton.className = "custom-control-button";
  customButton.setAttribute("type", "button");
  customButton.setAttribute("aria-label", "Custom Layer Action");
  customButton.innerHTML =
    '<span class="mapboxgl-ctrl-icon custom-layer" aria-hidden="true" title="Custom Layer Action"></span>';

  customButton.addEventListener("click", function () {
    alert("Layer button clicked!");
  });

  var myLocationButton = document.createElement("button");
  myLocationButton.className =
    "mapboxgl-ctrl-icon custom-control-button my-location-button";
  var myLocationButton = document.createElement("button");
  myLocationButton.className = "custom-control-button my-location-button";
  myLocationButton.setAttribute("type", "button");
  myLocationButton.setAttribute("aria-label", "My Location");
  myLocationButton.innerHTML =
    '<span class="mapboxgl-ctrl-icon" aria-hidden="true" title="My Location"></span>';

  myLocationButton.addEventListener("click", function () {
    alert("My Location button clicked!");
  });

  // Dapatkan tombol zoom-in dan zoom-out
  var zoomInButton = controlGroup.querySelector(".mapboxgl-ctrl-zoom-in");
  var zoomOutButton = controlGroup.querySelector(".mapboxgl-ctrl-zoom-out");

  // Hapus tombol zoom-in dan zoom-out dari DOM
  controlGroup.removeChild(zoomInButton);
  controlGroup.removeChild(zoomOutButton);

  var separator = document.createElement("div");
  separator.style.marginTop = "4vh";
  separator.style.boxShadow = "none";

  // Menambahkan tombol ke grup kontrol dalam urutan yang diinginkan
  controlGroup.appendChild(myLocationButton);
  controlGroup.appendChild(customButton);
  controlGroup.appendChild(separator);
  controlGroup.appendChild(zoomInButton);
  controlGroup.appendChild(zoomOutButton);
}
