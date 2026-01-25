// Array kata-kata yang ingin Anda ketikkan
var words = ["Human", "Student", "Gamer"];
var index = 0;
var isDeleting = false;
var typingSpeed = 150; // Kecepatan pengetikan (dalam milidetik)

function type() {
  var typingDiv = document.getElementById("typing-text");

  // Mengambil kata saat ini
  var word = words[index];

  if (isDeleting) {
    // Menghapus huruf
    typingDiv.textContent = word.substring(0, typingDiv.textContent.length - 1);
  } else {
    // Menambahkan huruf
    typingDiv.textContent = word.substring(0, typingDiv.textContent.length + 1);
  }

  // Kecepatan pengetikan
  var speed = typingSpeed;

  // Menunggu sebelum menambah atau menghapus huruf berikutnya
  if (!isDeleting && typingDiv.textContent === word) {
    isDeleting = true;
    speed = 500; // Menunggu sebelum menghapus
  } else if (isDeleting && typingDiv.textContent === "") {
    isDeleting = false;
    index++; // Menggeser ke kata berikutnya
    speed = 500; // Menunggu sebelum menambah huruf berikutnya
    if (index === words.length) {
      index = 0; // Mulai dari awal lagi setelah mencapai kata terakhir
    }
  }

  setTimeout(type, speed);
}

// Memulai efek pengetikan saat halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
  type();
});

// CLEAR MESSAGE
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

// FUNGSI VALIDASI FORM
const form = document.getElementById("contact-form");

form.addEventListener("btn-submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Reset errors
  document.getElementById("name-error").textContent = " ";
  document.getElementById("email-error").textContent = " ";

  // Retrieve input values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  // Name validation
  if (!name.trim()) {
    document.getElementById("name-error").textContent = "Name is required";
  }

  // Email validation
  if (!email.trim()) {
    document.getElementById("email-error").textContent = "Email is required";
  } else if (!isValidEmail(email)) {
    document.getElementById("email-error").textContent = "Invalid email format";
  }
});

// Function to validate email format
function isValidEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}
