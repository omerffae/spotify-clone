// UI CLassını import et
import { UI } from "./ui.js";
// API CLassını import et
import { API } from "./api.js";

// UI CLassının örneğini al
const ui = new UI();

// API CLassının örneğini al

const api = new API();

// Sayfanın yüklendiği anı izle

document.addEventListener("DOMContentLoaded", async () => {
  // Loader'ı render et
  ui.renderLoader();
  // Api'a istek at ve api'dan gelen veri ile arayüzü renderla
  api
    .getPopular()
    .then((data) => ui.renderCards(data))
    .catch((err) => {
      console.log(err);
    });
});

// Form gönderildiğinde bunu izle ve bir fonksiyon çalıştır
ui.form.addEventListener("submit", (e) => {
  // Sayfa yenilemeyi engelle
  e.preventDefault();

  // Form gönderildiğinde input içerisindeki değere eriş
  const query = e.target[0].value;

  // Aratılan kelimenin başında ve sonunda bulunan boşlukları kaldır.Ve eğer query değeri yoksa uyarı ver

  if (!query.trim()) {
    return alert("Lütfen geçerli bir arama işlemi gerçekleştiriniz");
  }

  // Loader'ı render et
  ui.renderLoader();

  // Title'ı güncelle

  ui.updateTitle(query + " için sonuçlar");

  // Aratılan kelimeyle birlikte api istek at sonrasında gelen veriyle ekrana cartları render et
  api
    .searchMusic(query)
    .then((data) => ui.renderCards(data))
    .catch((err) => alert(err));
});

// Liste kısmındaki play iconuna tıklayınca arayüzü bu şarkı verisine göre renderlayacak fonksiyon

ui.list.addEventListener("click", (e) => {
  // List içerisinde tıklanılan elemanın play butonu olup olmadığını kontrol et
  if (e.target.className == "play") {
    // Play butonunun kapsayıcısına eriş
    const card = e.target.closest(".card");
    // Kapsayıcıya verilen dataset özelliklerini al(title,image,mp3)
    const data = card.dataset;

    // Player kısmını render et
    ui.renderPlayer(data);
  }
});
