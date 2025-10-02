// Tombol sapa
const sapaButton = document.getElementById("sapaButton");
const kartuProfile = document.querySelector(".kartu-profile");

sapaButton.addEventListener("click", function () {
  alert("Halo, Faliqul Khabbi Wannawa! Semangat jadi Software Engineer 🚀");

  // Tambahkan kelas animasi shake
  kartuProfile.classList.add("shake");

  // Hapus kelas shake setelah animasi selesai
  setTimeout(() => {
    kartuProfile.classList.remove("shake");
  }, 500);
});
