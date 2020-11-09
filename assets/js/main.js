let daftar_tanaman_hias = [
  {
    nama_tanaman: "bromelia bunga merah Guzmania ostara",
    harga_tanaman: "200.000",
    foto_tanaman: "bromelia-bunga-merah-Guzmania-ostara-2-260x280.jpg",
  },
  {
    nama_tanaman: "bunga kastuba keriting",
    harga_tanaman: "250.000",
    foto_tanaman: "bunga-kastuba-keriting-260x280.jpg",
  },
  {
    nama_tanaman: "calandiva",
    harga_tanaman: "450.000",
    foto_tanaman: "calandiva-260x280.jpg",
  },
  {
    nama_tanaman: "dichondra ampel silver hair",
    harga_tanaman: "400.000",
    foto_tanaman: "dichondra-ampel-silver-hair-3-260x280.jpg",
  },
  {
    nama_tanaman: "papermint Mentha x piperita",
    harga_tanaman: "600.000",
    foto_tanaman: "papermint-Mentha-x-piperita-4-260x280.jpg",
  },
  {
    nama_tanaman: "tanaman ekor kucing",
    harga_tanaman: "600.000",
    foto_tanaman: "tanaman-ekor-kucing-260x280.jpg",
  },
  {
    nama_tanaman: "bunga azalea pink",
    harga_tanaman: "600.000",
    foto_tanaman: "bunga-azalea-pink-3-260x280.jpg",
  },
  {
    nama_tanaman: "philodendron congo rojo",
    harga_tanaman: "600.000",
    foto_tanaman: "Tanaman-philodendron-congo-rojo-3-600x600.jpg",
  },
];

var mybutton = document.getElementById("btn-scroll");
var list_tanaman_hias = document.querySelector("#tanaman_hias");

daftar_tanaman_hias.forEach((element) => {
  let newElement = document.createElement("div");
  newElement.className = "column";
  newElement.innerHTML =
    `
      <img src="assets/image/` +
    element.foto_tanaman +
    `" alt="geografis" style="width: 280px; height: 250px; background-position: center; background-size: cover; margin-bottom: -10px; ">
      <h4 style="margin-bottom: -10px;">` +
    element.nama_tanaman +
    `</h4>
      <p>Rp. ` +
    element.harga_tanaman +
    `</p>
      <button class="button">Pesan</button>
 `;
  list_tanaman_hias.appendChild(newElement);
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var navbarToggle = document.querySelector(".navbar-toggle");
var linkToggle = document.querySelector("#link-sejarah");
var menuList = document.querySelector(".menu-list");

navbarToggle.addEventListener("click", function () {
  menuList.classList.toggle("open");
});

function tutupMenu() {
  menuList.classList.toggle("open");
}

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

const obj = document.querySelector("#order");
var x = obj.textContent;
const obj1 = document.querySelector("#customer");
var x1 = obj1.textContent;
const obj2 = document.querySelector("#plant");
var x2 = obj2.textContent;
animateValue(obj, 0, x, 5000);
animateValue(obj1, 0, x1, 5000);
animateValue(obj2, 0, x2, 5000);
