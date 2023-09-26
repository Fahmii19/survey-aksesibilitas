document.addEventListener("DOMContentLoaded", function () {
  const mapboxCtrlElement = document.querySelector(".mapboxgl-ctrl-top-right");

  if (mapboxCtrlElement) {
    mapboxCtrlElement.style.zIndex = "5"; // Set default z-index
  }

  const formInputAkses = document.querySelector(".form-input-akses");
  const tableRekap = document.querySelector(".table-rekap-hide");
  const btnRekap = document.querySelector(".btn_rekap");
  const btnRekapImage = btnRekap
    ? btnRekap.querySelector(".menu-image-rekap")
    : null;
  const btnInput = document.querySelector("#toggleButtonOpen");
  const formProfil = document.querySelector(".form-profil");
  const btnProfil = document.querySelector(".btn_profil");
  const btnProfilImage = btnProfil
    ? btnProfil.querySelector(".menu-image-profil")
    : null;
  const toggleButtonFormInput = document.getElementById(
    "toggleButtonFormInput"
  );
  const toggleButtonProfil = document.getElementById("toggleButtonProfil");
  const toggleButtonRekap = document.getElementById("toggleButtonRekap");
  const rekapContainer = document.getElementById("rekapContainer");
  const btnOpenTableDetail = document.querySelector(".btn_open_table_detail");
  const tableDetail = document.querySelector(".table-detail");
  const collapseImage = document.getElementById("collapseImage");
  const tableRekapElement = document.querySelector(".table-rekap-hide");

  // rekap
  const expandRekap = document.querySelector(".expand_rekap");
  const formContainerRekapHide = expandRekap;

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

  function resetAll() {
    if (tableRekap) tableRekap.classList.add("hidden");
    if (formInputAkses) formInputAkses.classList.add("hidden");
    if (formProfil) formProfil.classList.add("hidden");
    if (mapboxCtrlElement) mapboxCtrlElement.style.zIndex = "5";
    if (btnRekapImage) btnRekapImage.src = "./src/images/rekap.png";
    if (btnProfilImage) btnProfilImage.src = "./src/images/user.png";

    // Rekap
    if (rekapContainer) rekapContainer.style.height = "40vh";
    tableRekapElement.classList.add("rounded-tl-[15px]");
    tableRekapElement.classList.add("rounded-tr-[15px]");
    toggleButtonRekap.style.display = "block";
  }

  if (btnRekap && tableRekap && btnRekapImage) {
    btnRekap.addEventListener("click", function () {
      if (tableRekap.classList.contains("hidden")) {
        resetAll();
        tableRekap.classList.remove("hidden");
        btnRekapImage.src = "./src/images/active_rekap.png";
      } else {
        tableRekap.classList.add("hidden");
        btnRekapImage.src = "./src/images/rekap.png";
      }
    });
  }

  if (btnInput && formInputAkses) {
    btnInput.addEventListener("click", function () {
      resetAll();
      formInputAkses.classList.remove("hidden");
    });
  }

  if (btnProfil && formProfil && btnProfilImage) {
    btnProfil.addEventListener("click", function () {
      resetAll();
      formProfil.classList.remove("hidden");
      btnProfilImage.src = "./src/images/active_user.png";
    });
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

  if (toggleButtonFormInput && formInputAkses) {
    toggleButtonFormInput.addEventListener("click", function () {
      toggleHeight(formInputAkses, "40vh", "74vh");
      if (formInputAkses.style.height === "74vh" && mapboxCtrlElement) {
        mapboxCtrlElement.style.zIndex = "-1";
      } else if (mapboxCtrlElement) {
        mapboxCtrlElement.style.zIndex = "5";
      }
    });
  }

  if (toggleButtonProfil && formProfil) {
    toggleButtonProfil.addEventListener("click", function () {
      toggleHeight(formProfil, "40vh", "75vh");
      if (formProfil.style.height === "75vh" && mapboxCtrlElement) {
        mapboxCtrlElement.style.zIndex = "-1";
      } else if (mapboxCtrlElement) {
        mapboxCtrlElement.style.zIndex = "5";
      }
    });
  }

  if (toggleButtonRekap && rekapContainer) {
    toggleHeight(formContainerRekapHide, "20vh", "13vh");

    toggleButtonRekap.addEventListener("click", function () {
      if (rekapContainer.style.height !== "90vh") {
        // tinggi jadi 90vh
        rekapContainer.style.height = "90vh";
        // hapus tinggi dan rounded
        tableRekapElement.classList.remove("rounded-tl-[15px]");
        tableRekapElement.classList.remove("rounded-tr-[15px]");
        toggleButtonRekap.style.display = "none";
      } else {
        rekapContainer.style.height = "40vh";
      }
    });
  }

  // Gesture

  if (tableRekapElement) {
    let touchStartY = 0;
    let initialTableHeight = 40; // Tinggi awal dalam vh
    let isDragging = false;

    tableRekapElement.style.height = initialTableHeight + "vh";

    tableRekapElement.addEventListener("touchstart", function (event) {
      isDragging = true;
      touchStartY = event.touches[0].clientY;
      initialTableHeight = parseFloat(tableRekapElement.style.height);
      tableRekapElement.style.transition = "none";
    });

    tableRekapElement.addEventListener("touchmove", function (event) {
      if (!isDragging) return;

      const touchCurrentY = event.touches[0].clientY;
      const diffY = ((touchStartY - touchCurrentY) / window.innerHeight) * 100;
      let newHeight = initialTableHeight + diffY;

      // Batasi tinggi minimum dan maksimum
      newHeight = Math.min(Math.max(30, newHeight), 90);

      // Perubahan tinggi elemen
      tableRekapElement.style.height = newHeight + "vh";

      // Tambahkan atau hapus kelas sesuai dengan tinggi
      if (newHeight <= 55) {
        tableRekapElement.classList.add("rounded-tl-[15px]");
        tableRekapElement.classList.add("rounded-tr-[15px]");
      } else {
        tableRekapElement.classList.remove("rounded-tl-[15px]");
        tableRekapElement.classList.remove("rounded-tr-[15px]");
      }
    });

    tableRekapElement.addEventListener("touchend", function () {
      isDragging = false;
      tableRekapElement.style.transition = "height 0.3s";

      // Tentukan tinggi akhir berdasarkan kondisi
      if (parseFloat(tableRekapElement.style.height) > 55) {
        tableRekapElement.style.height = "90vh";
      } else {
        tableRekapElement.style.height = "40vh";
      }
    });

    // Tambahkan event listener untuk menghentikan perubahan tinggi saat menggulir di dalam elemen expandRekap
    expandRekapElement.addEventListener("touchmove", function (event) {
      event.stopPropagation();
    });
  }
});
