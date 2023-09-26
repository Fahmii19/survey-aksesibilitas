document.addEventListener("DOMContentLoaded", function () {
  const mapboxCtrlElement = document.querySelector(".mapboxgl-ctrl-top-right");
  const formInputAkses = document.querySelector(".form-input-akses");
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
    if (tableRekapElement) tableRekapElement.classList.add("hidden");
    if (formInputAkses) formInputAkses.classList.add("hidden");
    if (formProfil) formProfil.classList.add("hidden");
    if (mapboxCtrlElement) mapboxCtrlElement.style.zIndex = "5";
    if (btnRekapImage) btnRekapImage.src = "./src/images/rekap.png";
    if (btnProfilImage) btnProfilImage.src = "./src/images/user.png";

    // Rekap
    if (rekapContainer) rekapContainer.style.height = "40vh";
    if (tableRekapElement) {
      tableRekapElement.classList.add("rounded-tl-[15px]");
      tableRekapElement.classList.add("rounded-tr-[15px]");
    }
    if (toggleButtonRekap) toggleButtonRekap.style.display = "block";
  }

  if (btnRekap && tableRekapElement && btnRekapImage) {
    btnRekap.addEventListener("click", function () {
      if (tableRekapElement.classList.contains("hidden")) {
        resetAll();
        tableRekapElement.classList.remove("hidden");
        btnRekapImage.src = "./src/images/active_rekap.png";
      } else {
        tableRekapElement.classList.add("hidden");
        btnRekapImage.src = "./src/images/rekap.png";
      }
    });
  }

  // Function to toggle height
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
        rekapContainer.style.height = "90vh";
        tableRekapElement.classList.remove("rounded-tl-[15px]");
        tableRekapElement.classList.remove("rounded-tr-[15px]");
        toggleButtonRekap.style.display = "none";
      } else {
        rekapContainer.style.height = "40vh";
        tableRekapElement.classList.add("rounded-tl-[15px]");
        tableRekapElement.classList.add("rounded-tr-[15px]");
        toggleButtonRekap.style.display = "block";
      }
    });
  }

  // Gesture handling

  if (tableRekapElement) {
    let touchStartY = 0;
    let initialTableHeight = 40; // Tinggi awal dalam vh
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
      newHeight = Math.min(Math.max(30, newHeight), 90);

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
      // const hideToggleButtonRekap =
      //   document.querySelector("#toggleButtonRekap");

      // Tentukan tinggi akhir berdasarkan kondisi
      if (parseFloat(tableRekapElement.style.height) > 55) {
        tableRekapElement.style.height = "90vh";

        // if (hideToggleButtonRekap) hideToggleButtonRekap.style.display = "none";
      } else {
        tableRekapElement.style.height = "40vh";
        // if (hideToggleButtonRekap)
        //   hideToggleButtonRekap.style.display = "block";
      }
    });
  }
});
