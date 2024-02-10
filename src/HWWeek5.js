window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
});

class FormRegister {
  constructor() {
    this.namaInput = document.getElementById("namaInput");
    this.umurInput = document.getElementById("umurInput");
    this.uangSanguInput = document.getElementById("uangSanguInput");
    this.registerButton = document.getElementById("registerButton");
    this.errorContainer = document.getElementById("errorContainer");
    this.listPendaftar = document.getElementById("listPendaftar");
    this.registerButton.addEventListener("click", this.register.bind(this));
  }

  register(event) {
    event.preventDefault(); // Prevent default form submission

    const nama = this.namaInput.value;
    const umur = parseInt(this.umurInput.value);
    const uangSangu = parseInt(this.uangSanguInput.value);

    // Clear any previous error messages
    this.errorContainer.innerHTML = "";

    // Lakukan validasi di sini
    let errorMessage = "";
    if (nama.length < 10) {
      errorMessage += "Nama harus memiliki minimal 10 karakter.<br>";
    }
    if (isNaN(umur) || umur < 25) {
      errorMessage += "Umur harus diisi dengan angka dan minimal 25 tahun.<br>";
    }
    if (isNaN(uangSangu) || uangSangu < 100000) {
      errorMessage +=
        "Uang sangu harus diisi dengan angka dan minimal Rp100.000.<br>";
    }

    if (errorMessage !== "") {
      this.errorContainer.innerHTML = errorMessage;
      return;
    }

    // Jika semua data valid, tambahkan pendaftar ke dalam tabel
    const tbody = this.listPendaftar.querySelector("tbody");
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
                <td>${tbody.childElementCount + 1}</td>
                <td>${nama}</td>
                <td>${umur}</td>
                <td>${uangSangu}</td>
                <td>
                    <button class="btn btn-sm btn-danger" onclick="deleteRow(this)">Delete</button>
                </td>
            `;
    tbody.appendChild(newRow);

    // Clear form after successful registration
    this.namaInput.value = "";
    this.umurInput.value = "";
    this.uangSanguInput.value = "";
  }
}

function deleteRow(button) {
  const row = button.closest("tr");
  row.remove();
}

// Instance
const form = new FormRegister();

// JavaScript untuk menangani klik tombol dan menampilkan/menyembunyikan div
document.getElementById("btnList").addEventListener("click", function () {
  var div = document.getElementById("listPendaftar");
  // Toggle display properti dari div
  if (div.style.display === "none") {
    div.style.display = "block";
    this.innerHTML = "Hide list";
  } else {
    div.style.display = "none";
    this.innerHTML = "Show list";
  }
});
