document.addEventListener("DOMContentLoaded", function () {
  // ========== Pendefinisian Variabel ==========

  // Mendapatkan elemen-elemen yang akan digunakan
  const mapboxCtrlElement = document.querySelector(".mapboxgl-ctrl-top-right");
  const formInputAkses = document.querySelector(".form-input-akses");

  const scrollUpDownRekap = document.querySelector(".scroll_up_rekap");
  const scrollUpDownForm = document.querySelector(".scroll_up_form_input");

  const btnRekap = document.querySelector(".btn_rekap");
  const btnRekapImage = btnRekap
    ? btnRekap.querySelector(".menu-image-rekap")
    : null;
  const formProfil = document.querySelector(".form-profil");
  const btnProfil = document.querySelector(".btn_profil");
  const btnProfilImage = btnProfil
    ? btnProfil.querySelector(".menu-image-profil")
    : null;

  const toggleButtonFormInput = document.getElementById(
    "toggleButtonFormInput"
  ); // Ganti dengan ID yang sesuai
  const btnFormInput = document.querySelector(".btn_form_input");
  const toggleButtonProfil = document.getElementById("toggleButtonProfil");
  const toggleButtonRekap = document.getElementById("toggleButtonRekap");
  const rekapContainer = document.getElementById("rekapContainer");
  const btnOpenTableDetail = document.querySelector(".btn_open_table_detail");
  const tableDetail = document.querySelector(".table-detail");
  const collapseImage = document.getElementById("collapseImage");
  const tableRekapElement = document.querySelector(".table-rekap-hide");
  const expandRekap = document.querySelector(".expand_rekap");
  const formContainerRekapHide = expandRekap;
  const expandFormInput = document.querySelector(".expand_input");
  const formContainerFormInputHide = expandFormInput;
  const expandProfil = document.querySelector(".expand_profil");
  const formContainerProfilHide = expandProfil;

  // ========== Fungsi Bantuan ==========

  // Fungsi untuk mereset semua elemen
  function resetAll() {
    if (tableRekapElement) tableRekapElement.classList.add("hidden");
    if (formInputAkses) formInputAkses.classList.add("hidden");
    if (formProfil) formProfil.classList.add("hidden");
    if (mapboxCtrlElement) mapboxCtrlElement.style.zIndex = "5";
    if (btnRekapImage) btnRekapImage.src = "./src/images/rekap.png";
    if (btnProfilImage) btnProfilImage.src = "./src/images/user.png";

    // Mereset setelah klik tombol rekap
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

    // Mereset setelah klik tombol profil
    if (formProfil) formProfil.style.height = "45vh";
    if (formProfil) {
      formProfil.classList.add("rounded-tl-[15px]");
      formProfil.classList.add("rounded-tr-[15px]");
    }
    if (toggleButtonProfil) toggleButtonProfil.style.display = "block";
  }

  // Fungsi untuk menggeser tinggi elemen
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

  // Mengatur event click pada tombol "Open Table Detail"
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

  // Mengatur event click pada tombol "Rekap"
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

  // Mengatur event click pada tombol "Toggle Rekap"
  if (toggleButtonRekap && rekapContainer) {
    toggleHeight(formContainerRekapHide, "20vh", "13vh");
    toggleButtonRekap.addEventListener("click", function () {
      expandRekap.style.height = "26vh";
      if (rekapContainer.style.height !== "90vh") {
        rekapContainer.style.height = "90vh";
        tableRekapElement.classList.remove("rounded-tl-[15px]");
        tableRekapElement.classList.remove("rounded-tr-[15px]");
        toggleButtonRekap.style.display = "none";

        expandRekap.classList.remove("overflow-y-hidden");
        expandRekap.classList.add("overflow-y-auto");
      } else {
        rekapContainer.style.height = "45vh";
        tableRekapElement.classList.add("rounded-tl-[15px]");
        tableRekapElement.classList.add("rounded-tr-[15px]");
        toggleButtonRekap.style.display = "block";

        expandRekap.classList.remove("overflow-y-auto");
        expandRekap.classList.add("overflow-y-hidden");
      }
    });
  }

  // ========== Logika Form Input ==========

  if (btnFormInput && formInputAkses) {
    btnFormInput.addEventListener("click", function () {
      if (formInputAkses.classList.contains("hidden")) {
        resetAll();
        formInputAkses.classList.remove("hidden");
      } else {
        formInputAkses.classList.add("hidden");
      }
    });
  }

  if (toggleButtonFormInput && formInputAkses) {
    toggleButtonFormInput.addEventListener("click", function () {
      toggleHeight(formInputAkses, "45vh", "90vh");
      formContainerFormInputHide.style.height = "62vh";
      if (formInputAkses.style.height === "90vh") {
        if (mapboxCtrlElement) {
          mapboxCtrlElement.style.zIndex = "-1";
        }
        formInputAkses.classList.remove("rounded-tl-[15px]");
        formInputAkses.classList.remove("rounded-tr-[15px]");
        toggleButtonFormInput.style.display = "none";

        expandFormInput.classList.remove("overflow-y-hidden");
        expandFormInput.classList.add("overflow-y-auto");

        expandFormInput.style.height = "60vh";
      } else {
        if (mapboxCtrlElement) {
          mapboxCtrlElement.style.zIndex = "5";
        }
        formInputAkses.classList.add("rounded-tl-[15px]");
        formInputAkses.classList.add("rounded-tr-[15px]");
        toggleButtonFormInput.style.display = "block";

        expandFormInput.classList.remove("overflow-y-auto");
        expandFormInput.classList.add("overflow-y-hidden");
      }
    });
  }

  // ========== Logika Form Profil ==========

  // Mengatur event click pada tombol "Profil"
  if (btnProfil && formProfil) {
    btnProfil.addEventListener("click", function () {
      if (formProfil.classList.contains("hidden")) {
        resetAll();
        formProfil.classList.remove("hidden");
        btnProfilImage.src = "./src/images/active_user.png";
      } else {
        formProfil.classList.add("hidden");
        btnProfilImage.src = "./src/images/user.png";
      }
    });
  }

  // Mengatur event click pada tombol "Toggle Profil"
  if (toggleButtonProfil && formProfil) {
    formContainerProfilHide.style.height = "26vh";
    toggleButtonProfil.addEventListener("click", function () {
      toggleHeight(formProfil, "45vh", "90vh");

      if (formProfil.style.height === "90vh") {
        if (mapboxCtrlElement) {
          mapboxCtrlElement.style.zIndex = "-1";
        }
        formProfil.classList.remove("rounded-tl-[15px]");
        formProfil.classList.remove("rounded-tr-[15px]");
        toggleButtonProfil.style.display = "none";

        expandProfil.classList.remove("overflow-y-auto");
        expandProfil.classList.add("overflow-y-hidden");
      }
      if (formProfil.style.height === "45vh") {
        if (mapboxCtrlElement) {
          mapboxCtrlElement.style.zIndex = "5";
        }
        formProfil.classList.add("rounded-tl-[15px]");
        formProfil.classList.add("rounded-tr-[15px]");
        toggleButtonProfil.style.display = "block"; // Tampilkan tombol toggle lagi

        expandProfil.classList.remove("overflow-y-hidden");
        expandProfil.classList.add("overflow-y-auto");
      }
    });
  }

  // ========== Penanganan Gesture ==========

  if (tableRekapElement) {
    let touchStartY = 0;
    let initialTableHeight = 0; // Tinggi awal dalam vh
    tableRekapElement.style.height = initialTableHeight + "vh";

    // Menambahkan event listener pada elemen "scroll_up_rekap"
    scrollUpDownRekap.addEventListener("touchstart", function (event) {
      touchStartY = event.touches[0].clientY;
      initialTableHeight = parseFloat(tableRekapElement.style.height);
      tableRekapElement.style.transition = "none";
    });

    // Memproses perubahan tinggi hanya ketika sentuhan dimulai di dalam "scroll_up_rekap"
    scrollUpDownRekap.addEventListener("touchmove", function (event) {
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
        // toggleButtonRekap.style.display = "block";

        expandRekap.classList.remove("overflow-y-auto");
        expandRekap.classList.add("overflow-y-hidden");
      } else {
        tableRekapElement.classList.remove("rounded-tl-[15px]");
        tableRekapElement.classList.remove("rounded-tr-[15px]");
        // toggleButtonRekap.style.display = "none";

        //
        expandRekap.classList.remove("overflow-y-hidden");
        expandRekap.classList.add("overflow-y-auto");
      }
    });

    // Mengatasi sentuhan di luar elemen "scroll_up_rekap"
    document.addEventListener("touchmove", function (event) {
      // Cek apakah sentuhan dimulai di dalam "scroll_up_rekap"
      if (!scrollUpDownRekap.contains(event.target)) {
        event.preventDefault();
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

  // Penanganan gesture untuk "Form Input"
  if (scrollUpDownForm) {
    let touchStartYForm = 0;
    let initialFormHeight = 0; // Tinggi awal dalam vh
    formInputAkses.style.height = initialFormHeight + "vh";

    // Menambahkan event listener pada elemen "scroll_up_form_input"
    scrollUpDownForm.addEventListener("touchstart", function (event) {
      touchStartYForm = event.touches[0].clientY;
      initialFormHeight = parseFloat(formInputAkses.style.height);
      formInputAkses.style.transition = "none";
    });

    // Memproses perubahan tinggi hanya ketika sentuhan dimulai di dalam "scroll_up_form_input"
    scrollUpDownForm.addEventListener("touchmove", function (event) {
      const touchCurrentYForm = event.touches[0].clientY;
      const diffYForm =
        ((touchStartYForm - touchCurrentYForm) / window.innerHeight) * 100;
      let newHeightForm = initialFormHeight + diffYForm;

      // Batasi tinggi minimum dan maksimum
      newHeightForm = Math.min(Math.max(0, newHeightForm), 90);

      // Perubahan tinggi elemen
      formInputAkses.style.height = newHeightForm + "vh";

      // Tambahkan atau hapus kelas sesuai dengan tinggi
      if (newHeightForm <= 55) {
        formInputAkses.classList.add("rounded-tl-[15px]");
        formInputAkses.classList.add("rounded-tr-[15px]");
        toggleButtonFormInput.style.display = "block";

        expandFormInput.classList.remove("overflow-y-auto");
        expandFormInput.classList.add("overflow-y-hidden");
      } else {
        formInputAkses.classList.remove("rounded-tl-[15px]");
        formInputAkses.classList.remove("rounded-tr-[15px]");
        toggleButtonFormInput.style.display = "none";

        expandFormInput.classList.remove("overflow-y-hidden");
        expandFormInput.classList.add("overflow-y-auto");
      }
    });

    // Mengatasi sentuhan di luar elemen "scroll_up_form_input"
    document.addEventListener("touchmove", function (event) {
      // Cek apakah sentuhan dimulai di dalam "scroll_up_form_input"
      if (!scrollUpDownForm.contains(event.target)) {
        event.preventDefault();
      }
    });

    scrollUpDownForm.addEventListener("touchend", function () {
      formInputAkses.style.transition = "height 0.3s";

      // Tentukan tinggi akhir berdasarkan kondisi
      if (parseFloat(formInputAkses.style.height) > 55) {
        formInputAkses.style.height = "90vh";
        expandFormInput.style.height = "60vh";
      } else if (
        parseFloat(formInputAkses.style.height) < 55 &&
        parseFloat(formInputAkses.style.height) >= 20
      ) {
        formInputAkses.style.height = "45vh";
        expandFormInput.style.height = "60vh";
      } else if (parseFloat(formInputAkses.style.height) < 20) {
        formInputAkses.style.height = "0vh";
        resetAll();
      }
    });
  }

  if (formProfil) {
    let touchStartYProfil = 0;
    let initialFormProfilHeight = 0; // Tinggi awal dalam vh
    formProfil.style.height = initialFormProfilHeight + "vh";
    formProfil.addEventListener("touchstart", function (event) {
      touchStartYProfil = event.touches[0].clientY;
      initialFormProfilHeight = parseFloat(formProfil.style.height);
      formProfil.style.transition = "none";
    });

    formProfil.addEventListener("touchmove", function (event) {
      const touchCurrentYProfil = event.touches[0].clientY;
      const diffYProfil =
        ((touchStartYProfil - touchCurrentYProfil) / window.innerHeight) * 100;
      let newHeightProfil = initialFormProfilHeight + diffYProfil;
      // Batasi tinggi minimum dan maksimum
      newHeightProfil = Math.min(Math.max(0, newHeightProfil), 90);
      formProfil.style.height = newHeightProfil + "vh";
      // Tambahkan atau hapus kelas sesuai dengan tinggi
      if (newHeightProfil <= 55) {
        formProfil.classList.add("rounded-tl-[15px]");
        formProfil.classList.add("rounded-tr-[15px]");
        toggleButtonProfil.style.display = "block";
        expandProfil.classList.remove("overflow-y-auto");
        expandProfil.classList.add("overflow-y-hidden");
      } else {
        formProfil.classList.remove("rounded-tl-[15px]");
        formProfil.classList.remove("rounded-tr-[15px]");
        toggleButtonProfil.style.display = "none";
        expandProfil.classList.remove("overflow-y-hidden");
        expandProfil.classList.add("overflow-y-auto");
      }
    });

    // Mengatasi sentuhan di luar elemen "scroll_up_form_profil"
    document.addEventListener("touchmove", function (event) {
      // Cek apakah sentuhan dimulai di dalam "scroll_up_form_profil"
      if (!formProfil.contains(event.target)) {
        event.preventDefault();
      }
    });

    formProfil.addEventListener("touchend", function () {
      formProfil.style.transition = "height 0.3s";

      // Tentukan tinggi akhir berdasarkan kondisi
      if (parseFloat(formProfil.style.height) > 55) {
        formProfil.style.height = "90vh";
      } else if (
        parseFloat(formProfil.style.height) < 55 &&
        parseFloat(formProfil.style.height) >= 20
      ) {
        formProfil.style.height = "45vh";
      } else if (parseFloat(formProfil.style.height) < 20) {
        formProfil.style.height = "0vh";
        resetAll();
      }
    });
  }
});
