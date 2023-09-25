document.addEventListener("DOMContentLoaded", function () {
  // navigation
  const mapboxCtrlElement = document.querySelector(".mapboxgl-ctrl-top-right");

  mapboxCtrlElement.style.zIndex = "5"; // Set default z-index

  const formInputAkses = document.querySelector(".form-input-akses");
  const tableRekap = document.querySelector(".table-rekap-hide");
  const expandRekap = document.querySelector(".expand_rekap");
  const expandForm = document.querySelector(".expand_form_input");
  const expandProfil = document.querySelector(".expand_profil");
  const btnRekap = document.querySelector(".btn_rekap");
  const btnRekapImage = btnRekap.querySelector(".menu-image-rekap");
  const btnInput = document.querySelector("#toggleButtonOpen");
  const formProfil = document.querySelector(".form-profil");
  const btnProfil = document.querySelector(".btn_profil");
  const btnProfilImage = btnProfil.querySelector(".menu-image-profil");
  const formContainerFormInput = formInputAkses;
  const toggleButtonOpen = btnInput;
  const toggleButtonFormInput = document.getElementById(
    "toggleButtonFormInput"
  );
  const formContainerProfil = formProfil;
  const toggleButtonProfil = document.getElementById("toggleButtonProfil");
  const formContainerRekap = tableRekap;
  const formContainerRekapHide = expandRekap;
  const formContainerFormInputHide = expandForm;
  const formContainerProfilHide = expandProfil;
  const toggleButtonRekap = document.getElementById("toggleButtonRekap");
  const btnOpenTableDetail = document.querySelector(".btn_open_table_detail");
  const tableDetail = document.querySelector(".table-detail");

  btnOpenTableDetail.addEventListener("click", function () {
    tableDetail.classList.toggle("hidden");
  });

  // Reset Menu Navigation
  function resetAll() {
    tableRekap.classList.add("hidden");
    formInputAkses.classList.add("hidden");
    formProfil.classList.add("hidden");
    tableRekap.style.zIndex = "1";
    formInputAkses.style.zIndex = "1";
    formProfil.style.zIndex = "1";
    mapboxCtrlElement.style.zIndex = "5";
    btnRekapImage.src = "./src/images/rekap.png";
    btnProfilImage.src = "./src/images/user.png";
  }

  btnRekap.addEventListener("click", function () {
    resetAll();
    tableRekap.classList.remove("hidden");
    tableRekap.style.zIndex = "6";
    btnRekapImage.src = "./src/images/active_rekap.png";
  });

  btnInput.addEventListener("click", function () {
    resetAll();
    formInputAkses.classList.remove("hidden");
    formInputAkses.style.zIndex = "6";
  });

  btnProfil.addEventListener("click", function () {
    resetAll();
    formProfil.classList.remove("hidden");
    formProfil.style.zIndex = "6";
    btnProfilImage.src = "./src/images/active_user.png";
  });

  // Mengganti 'display' dengan 'z-index'
  function toggleHeight(element, initialHeight, toggledHeight) {
    if (element.style.height === initialHeight || !element.style.height) {
      element.style.height = toggledHeight;
    } else {
      element.style.height = initialHeight;
    }
  }

  // Form Input
  toggleButtonFormInput.addEventListener("click", function () {
    toggleHeight(formContainerFormInput, "30vh", "74vh");
    toggleHeight(formContainerFormInputHide, "19vh", "63vh");

    // Mengganti 'display' dengan 'z-index'
    if (formContainerFormInput.style.height === "74vh") {
      mapboxCtrlElement.style.zIndex = "-1";
    } else {
      mapboxCtrlElement.style.zIndex = "5";
    }
  });

  // Profil
  toggleButtonProfil.addEventListener("click", function () {
    toggleHeight(formContainerProfil, "30vh", "75vh");
    toggleHeight(formContainerProfilHide, "19vh", "45vh");

    // Mengganti 'display' dengan 'z-index'
    if (formContainerProfil.style.height === "75vh") {
      mapboxCtrlElement.style.zIndex = "-1";
    } else {
      mapboxCtrlElement.style.zIndex = "5";
    }
  });

  // Rekap
  toggleButtonRekap.addEventListener("click", function () {
    toggleHeight(formContainerRekap, "30vh", "75vh");
    toggleHeight(formContainerRekapHide, "20vh", "65vh");

    // Mengganti 'display' dengan 'z-index'
    if (formContainerRekap.style.height === "75vh") {
      mapboxCtrlElement.style.zIndex = "-1";
    } else {
      mapboxCtrlElement.style.zIndex = "5";
    }
  });
  //
  const collapseImage = document.getElementById("collapseImage");

  btnOpenTableDetail.addEventListener("click", function () {
    // Toggle table detail visibility
    // tableDetail.classList.toggle("hidden");

    // Toggle collapse icon
    if (collapseImage.src.endsWith("open_collapse.png")) {
      collapseImage.src = "./src/images/close_collapse.png";
    } else {
      collapseImage.src = "./src/images/open_collapse.png";
    }
  });

  // Gesture scroll up untuk menampilkan konten

  const tableRekapElement = document.querySelector(".table-rekap-hide");
  let startY = 0; // posisi awal touch
  let currentY = 0; // posisi touch saat bergerak
  let isDragging = false;
  let initialHeight = "20vh"; // Anda bisa mengganti ini dengan tinggi awal yang sesuai

  tableRekapElement.addEventListener("touchstart", function (event) {
    isDragging = true;
    startY = event.touches[0].clientY;
    initialHeight = tableRekapElement.style.height || initialHeight;
  });

  tableRekapElement.addEventListener("touchmove", function (event) {
    if (!isDragging) return;
    currentY = event.touches[0].clientY;
    let diffY = startY - currentY;

    // Anda bisa mengatur nilai threshold yang sesuai dengan preferensi Anda
    const threshold = 50;

    if (diffY > threshold) {
      // Menutup konten
      tableRekapElement.style.height = "0";
    } else if (diffY < -threshold) {
      // Membuka konten
      tableRekapElement.style.height = initialHeight;
    }
  });

  tableRekapElement.addEventListener("touchend", function () {
    isDragging = false;
  });

  //
});
