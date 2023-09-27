document.addEventListener("DOMContentLoaded", function () {
  // ========== Pendefinisian Variabel ==========
  const mapboxCtrlElement = document.querySelector(".mapboxgl-ctrl-top-right");
  const formInputAkses = document.querySelector(".form-input-akses");
  const btnRekap = document.querySelector(".btn_rekap");
  const btnRekapImage = btnRekap
    ? btnRekap.querySelector(".menu-image-rekap")
    : null;
  // const btnInput = document.querySelector("#toggleButtonOpen");
  const formProfil = document.querySelector(".form-profil");
  const btnProfil = document.querySelector(".btn_profil");
  const btnProfilImage = btnProfil
    ? btnProfil.querySelector(".menu-image-profil")
    : null;

  // const toggleButtonFormInput = document.getElementById(
  //   "toggleButtonFormInput"
  // );

  const toggleButtonFormInput = document.querySelector(
    "#toggleButtonFormInput"
  ); // Placeholder selector, replace with the correct one

  const btnFormInput = document.querySelector(".btn_form_input");

  const toggleButtonProfil = document.getElementById("toggleButtonProfil");
  const toggleButtonRekap = document.getElementById("toggleButtonRekap");
  const rekapContainer = document.getElementById("rekapContainer");
  const btnOpenTableDetail = document.querySelector(".btn_open_table_detail");
  const tableDetail = document.querySelector(".table-detail");
  const collapseImage = document.getElementById("collapseImage");
  const tableRekapElement = document.querySelector(".table-rekap-hide");
  // const showDetailRekap = document.getElementById("show-detail-rekap");
  const expandRekap = document.querySelector(".expand_rekap");
  const formContainerRekapHide = expandRekap;

  // ========== Fungsi Bantuan ==========

  function resetAll() {
    if (tableRekapElement) tableRekapElement.classList.add("hidden");
    if (formInputAkses) formInputAkses.classList.add("hidden");
    if (formProfil) formProfil.classList.add("hidden");
    if (mapboxCtrlElement) mapboxCtrlElement.style.zIndex = "5";
    if (btnRekapImage) btnRekapImage.src = "./src/images/rekap.png";
    if (btnProfilImage) btnProfilImage.src = "./src/images/user.png";

    // mereset setelah klik tombol rekap
    if (rekapContainer) rekapContainer.style.height = "45vh";
    if (tableRekapElement) {
      tableRekapElement.classList.add("rounded-tl-[15px]");
      tableRekapElement.classList.add("rounded-tr-[15px]");
    }
    if (toggleButtonRekap) toggleButtonRekap.style.display = "block";

    // Mereset setelah klik tombol form input
    if (formInputAkses) formInputAkses.style.height = "45vh";
    if (formInputAkses) {
      formInputAkses.classList.add("rounded-tl-[15px]");
      formInputAkses.classList.add("rounded-tr-[15px]");
    }
    if (toggleButtonFormInput) toggleButtonFormInput.style.display = "block";
  }

  function toggleHeight(element, initialHeight, toggledHeight) {
    if (element) {
      if (element.style.height === initialHeight || !element.style.height) {
        element.style.height = toggledHeight;
      } else {
        element.style.height = initialHeight;
      }
    }
  }

  // ========== Logika Form Rekap ==========

  if (btnOpenTableDetail && tableDetail) {
    btnOpenTableDetail.addEventListener("click", function () {
      tableDetail.classList.toggle("hidden");
      if (collapseImage && collapseImage.src.endsWith("open_collapse.png")) {
        collapseImage.src = "./src/images/close_collapse.png";
      } else if (collapseImage) {
        collapseImage.src = "./src/images/open_collapse.png";
      }
    });
  }

  if (btnRekap && tableRekapElement && btnRekapImage) {
    btnRekap.addEventListener("click", function () {
      if (tableRekapElement.classList.contains("hidden")) {
        resetAll();
        tableDetail.classList.add("hidden");
        tableRekapElement.classList.remove("hidden");
        btnRekapImage.src = "./src/images/active_rekap.png";
      } else {
        tableRekapElement.classList.add("hidden");
        btnRekapImage.src = "./src/images/rekap.png";
      }
    });
  }

  if (toggleButtonRekap && rekapContainer) {
    toggleHeight(formContainerRekapHide, "20vh", "13vh");
    toggleButtonRekap.addEventListener("click", function () {
      expandRekap.style.height = "62vh";
      if (rekapContainer.style.height !== "90vh") {
        rekapContainer.style.height = "90vh";
        tableRekapElement.classList.remove("rounded-tl-[15px]");
        tableRekapElement.classList.remove("rounded-tr-[15px]");
        toggleButtonRekap.style.display = "none";
      } else {
        rekapContainer.style.height = "45vh";
        tableRekapElement.classList.add("rounded-tl-[15px]");
        tableRekapElement.classList.add("rounded-tr-[15px]");
        toggleButtonRekap.style.display = "block";
      }
    });
  }

  // ========== Logika Form Input ==========

  if (btnFormInput && formInputAkses) {
    btnFormInput.addEventListener("click", function () {
      formInputAkses.classList.toggle("hidden");
      // menutupi form rekap
      tableRekapElement.classList.add("hidden");
    });
  }

  if (toggleButtonFormInput && formInputAkses) {
    toggleButtonFormInput.addEventListener("click", function () {
      toggleHeight(formInputAkses, "45vh", "90vh");

      if (formInputAkses.style.height === "90vh") {
        if (mapboxCtrlElement) {
          mapboxCtrlElement.style.zIndex = "-1";
        }
        formInputAkses.classList.remove("rounded-tl-[15px]");
        formInputAkses.classList.remove("rounded-tr-[15px]");
        toggleButtonFormInput.style.display = "none";
      } else {
        if (mapboxCtrlElement) {
          mapboxCtrlElement.style.zIndex = "5";
        }
        formInputAkses.classList.add("rounded-tl-[15px]");
        formInputAkses.classList.add("rounded-tr-[15px]");
        toggleButtonFormInput.style.display = "block"; // Show the toggle button again
      }
    });
  }

  // ========== Logika Form Profil ==========

  if (toggleButtonProfil && formProfil) {
    toggleButtonProfil.addEventListener("click", function () {
      toggleHeight(formProfil, "45vh", "75vh");
      if (formProfil.style.height === "75vh" && mapboxCtrlElement) {
        mapboxCtrlElement.style.zIndex = "-1";
      } else if (mapboxCtrlElement) {
        mapboxCtrlElement.style.zIndex = "5";
      }
    });
  }

  // ========== Gesture Handling ==========

  if (tableRekapElement) {
    let touchStartY = 0;
    let initialTableHeight = 0; // Tinggi awal dalam vh
    tableRekapElement.style.height = initialTableHeight + "vh";

    tableRekapElement.addEventListener("touchstart", function (event) {
      touchStartY = event.touches[0].clientY;
      initialTableHeight = parseFloat(tableRekapElement.style.height);
      tableRekapElement.style.transition = "none";
    });

    tableRekapElement.addEventListener("touchmove", function (event) {
      const touchCurrentY = event.touches[0].clientY;
      const diffY = ((touchStartY - touchCurrentY) / window.innerHeight) * 100;
      let newHeight = initialTableHeight + diffY;

      // Batasi tinggi minimum dan maksimum
      newHeight = Math.min(Math.max(0, newHeight), 90);

      // Perubahan tinggi elemen
      tableRekapElement.style.height = newHeight + "vh";

      // Tambahkan atau hapus kelas sesuai dengan tinggi
      if (newHeight <= 55) {
        tableRekapElement.classList.add("rounded-tl-[15px]");
        tableRekapElement.classList.add("rounded-tr-[15px]");
        toggleButtonRekap.style.display = "block";
      } else {
        tableRekapElement.classList.remove("rounded-tl-[15px]");
        tableRekapElement.classList.remove("rounded-tr-[15px]");
        toggleButtonRekap.style.display = "none";
      }
    });

    tableRekapElement.addEventListener("touchend", function () {
      tableRekapElement.style.transition = "height 0.3s";

      // Tentukan tinggi akhir berdasarkan kondisi
      if (parseFloat(tableRekapElement.style.height) > 55) {
        tableRekapElement.style.height = "90vh";
        expandRekap.style.height = "62vh";
      } else if (
        parseFloat(tableRekapElement.style.height) < 55 &&
        parseFloat(tableRekapElement.style.height) >= 20
      ) {
        tableRekapElement.style.height = "45vh";
        expandRekap.style.height = "13vh";
      } else if (parseFloat(tableRekapElement.style.height) < 20) {
        tableRekapElement.style.height = "0vh";
        resetAll();
      }
    });
  }

  // ========== Gesture Handling untuk Form Input ==========

  if (formInputAkses) {
    let touchStartYInput = 0;
    let initialFormHeight = 0; // Tinggi awal dalam vh (sesuaikan jika perlu)
    formInputAkses.style.height = initialFormHeight + "vh";

    formInputAkses.addEventListener("touchstart", function (event) {
      touchStartYInput = event.touches[0].clientY;
      initialFormHeight = parseFloat(formInputAkses.style.height);
      formInputAkses.style.transition = "none";
    });

    formInputAkses.addEventListener("touchmove", function (event) {
      const touchCurrentYInput = event.touches[0].clientY;
      const diffYInput =
        ((touchStartYInput - touchCurrentYInput) / window.innerHeight) * 100;
      let newHeightInput = initialFormHeight + diffYInput;

      // Batasi tinggi minimum dan maksimum
      newHeightInput = Math.min(Math.max(0, newHeightInput), 90);

      // Perubahan tinggi elemen
      formInputAkses.style.height = newHeightInput + "vh";

      // Tambahkan atau hapus kelas sesuai dengan tinggi
      if (newHeightInput <= 55) {
        formInputAkses.classList.add("rounded-tl-[15px]");
        formInputAkses.classList.add("rounded-tr-[15px]");
        toggleButtonFormInput.style.display = "block";
      } else {
        formInputAkses.classList.remove("rounded-tl-[15px]");
        formInputAkses.classList.remove("rounded-tr-[15px]");
        toggleButtonFormInput.style.display = "none";
      }
    });

    formInputAkses.addEventListener("touchend", function () {
      formInputAkses.style.transition = "height 0.3s";

      // Tentukan tinggi akhir berdasarkan kondisi
      if (parseFloat(formInputAkses.style.height) > 55) {
        formInputAkses.style.height = "90vh";
      } else if (
        parseFloat(formInputAkses.style.height) < 55 &&
        parseFloat(formInputAkses.style.height) >= 20
      ) {
        formInputAkses.style.height = "45vh";
      } else if (parseFloat(formInputAkses.style.height) < 20) {
        formInputAkses.style.height = "0vh";
        resetAll();
      }
    });
  }
});
