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

  const hideToggleButtonRekap = document.querySelector("#toggleButtonRekap");

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

  // btnRekap.addEventListener("click", function () {
  //   resetAll();
  //   tableRekap.classList.remove("hidden");
  //   tableRekap.style.zIndex = "6";
  //   btnRekapImage.src = "./src/images/active_rekap.png";
  // });

  btnRekap.addEventListener("click", function () {
    if (tableRekap.classList.contains("hidden")) {
      // Tampilkan elemen
      tableRekap.classList.remove("hidden");
      tableRekap.style.zIndex = "6";
      btnRekapImage.src = "./src/images/active_rekap.png";
    } else {
      // Sembunyikan elemen
      tableRekap.classList.add("hidden");
      tableRekap.style.zIndex = "1"; // Anda bisa mengatur ke nilai default yang Anda inginkan.
      btnRekapImage.src = "./src/images/rekap.png"; // Asumsi Anda memiliki gambar untuk keadaan non-aktif. Gantilah dengan path gambar yang sesuai.
    }
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
    toggleHeight(formContainerRekap, "30vh", "80vh");
    toggleHeight(formContainerRekapHide, "20vh", "65vh");

    // Mengganti 'display' dengan 'z-index'
    if (formContainerRekap.style.height === "80vh") {
      mapboxCtrlElement.style.zIndex = "-1";
      hideToggleButtonRekap.style.display = "none";
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
  let touchStartY = 0;
  let initialTableHeight = 30; // Dalam vh

  tableRekapElement.style.height = initialTableHeight + "vh";

  tableRekapElement.addEventListener("touchstart", function (event) {
    touchStartY = event.touches[0].clientY;
    initialTableHeight = parseFloat(tableRekapElement.style.height);
    // Menghapus transisi saat menyeret untuk mendapatkan respons langsung
    tableRekapElement.style.transition = "none";
  });

  tableRekapElement.addEventListener("touchmove", function (event) {
    const touchCurrentY = event.touches[0].clientY;
    const diffY = ((touchStartY - touchCurrentY) / window.innerHeight) * 100; // Menghitung perbedaan dalam vh

    let newHeight = initialTableHeight + diffY;
    newHeight = Math.min(Math.max(30, newHeight), 80); // Memastikan tidak kurang dari 30 dan tidak lebih dari 80

    tableRekapElement.style.height = newHeight + "vh";
  });

  tableRekapElement.addEventListener("touchend", function () {
    // Mengembalikan transisi saat selesai menyeret
    tableRekapElement.style.transition = "height 0.3s"; // Anda bisa mengatur durasi sesuai kebutuhan

    // Jika tinggi lebih dari 40vh setelah menyeret, perluas ke 80vh
    if (parseFloat(tableRekapElement.style.height) > 50) {
      tableRekapElement.style.height = "80vh";
      hideToggleButtonRekap.style.display = "none";
    } else {
      // Jika tidak, kembalikan ke 30vh
      tableRekapElement.style.height = "30vh";
      hideToggleButtonRekap.style.display = "block";
    }
  });

  //
});
