// Fonksiyon kullanımında kodlarımın birbiri içerisine çok girdiğini fark ettim. Bu beni uzun süredir rahatsız ediyordu. Bu yüzden fonksiyonları dışarıya çıkardım ve daha düzenli bir hale getirdim.

document.querySelector('.b1').addEventListener('click', buton1Fonksiyon); // Butona tıklanınca buton1Fonksiyon isimli fonksiyonu çalıştırır.
document.querySelector('.b2').addEventListener('click', buton2Fonksiyon); // Butona tıklanınca buton2Fonksiyon isimli fonksiyonu çalıştırır.
document.querySelector('.b3').addEventListener('click', buton3Fonksiyon); // Butona tıklanınca buton3Fonksiyon isimli fonksiyonu çalıştırır.

function buton1Fonksiyon() {
    console.log('Buton 1 tıklandı');
}

function buton2Fonksiyon() {
    console.log('Buton 2 tıklandı');
}

function buton3Fonksiyon() {
    console.log('Buton 3 tıklandı');
}

// Bu şekilde fonksiyonları dışarıya çıkardım ve daha düzenli bir hale getirdim. Bu sayede kodlarım daha okunabilir ve daha düzenli bir hale geldi.

// Daha öncesinde fonksiyonları dışarıya çıkarmadan önceki hali:
// document.querySelector('.b1').addEventListener('click', function() {
//     console.log('Buton 1 tıklandı');
// });

// document.querySelector('.b2').addEventListener('click', function() {
//     console.log('Buton 2 tıklandı');
// });

// document.querySelector('.b3').addEventListener('click', function() {
//     console.log('Buton 3 tıklandı');
// });

// Kod miktarı arttıkça bu iş benim için çok zorlaşmaya başlıyordu. Artık daha verimli bir çalışma ortamına sahibim.