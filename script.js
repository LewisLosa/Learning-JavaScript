/*
    - Bildirimler -
console.log("Merhaba, dünya!")
window.alert("Naber?") 

*/

/*
    - Yazı değiştirme -
document.getElementById("baslik").textContent = "Dünya!";
document.getElementById("aciklama").textContent = "Neden dünya'da yaşarız??";

*/

/*
    - Değişkenler -
let firstName = "Eyüp";
let age = 17;
let adress = "İslambey";
document.getElementById("baslik").textContent = `Merhaba, ${firstName}!`;
document.getElementById("aciklama").textContent = `Yaşın ${age} ve ${adress} mahallesinde yaşıyorsun.`;
console.log(typeof firstName, typeof age, typeof adress);
console.log(`Merhaba, ${firstName}! \nYaşın ${age} ve ${adress} mahallesinde yaşıyorsun.`);

*/

/*
    - Matematik -
let not1 = 95;
let not2 = 67;
let not3 = 78;
let ortalama = (not1 + not2 + not3)/3;
document.getElementById("aciklama").textContent = `Ortalamanız: ${ortalama}`;

*/

/*
    - Nesnesel -
document.getElementById("submit").onclick = function(){
    let firstName = document.getElementById("textBox").value;
    document.getElementById("baslik").textContent = `Merhaba, ${firstName}!`
}

*/

/*
    - Değişken Çeviriler - 
let salary = window.prompt("Maaşın kaç?");
salary = Number(salary)
salary +=12;
document.getElementById("aciklama").textContent = `Maaşın: ${salary}` + " " + typeof salary;

*/

/*
    - Değişken Türleri -
let x = "12";
let y = "12";
let z = "12";
x = Number(x);
y = String(y);
z = Boolean(z);
console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

*/

/*
    - Const Kullanımı -
const PI = 3.14159;
let radius;
let circumference;

radius = window.prompt("Daire'nin boyutunu girin:");
raidus = Number(radius);
circumference = 2* PI* radius;
console.log(circumference);

*/

/*
    - ÖRNEK: Sayaç -
const decreaseBTN = document.getElementById("decrease");
const resetBTN = document.getElementById("reset");
const increaseBTN = document.getElementById("increase");
const countTXT = document.getElementById("count");
let count = 1;

decreaseBTN.onclick = function(){
    count--;
    countTXT.textContent = `${count}`
}
resetBTN.onclick = function(){
    count = 0;
    countTXT.textContent = `${count}`
}
increaseBTN.onclick = function(){
    count++;
    countTXT.textContent = `${count}`
}

*/

/*
    - ÖRNEK: Rastgele Sayı -
const MIN = 10;
const MAX = 50;
const randomBTN = document.getElementById("random");
let randomNumber;

randomBTN.onclick = function(){
    randomNumber = Math.floor(Math.random()* (MAX-MIN)) + MIN;
    randomBTN.textContent = `${randomNumber}`
}

*/

/*
    - ÖRNEK: Şartlı Koşullar -
let age = 18;

if (age > 18){
    console.log("18 yaşından büyüksünüz.")
} else if (age == 18) {
    console.log("18 yaşındasınız.")
} else {
    console.log("18 yaşından küçüksünüz.")
}

*/

/*
    - Küçük IF-Else -
let age = 18;
let message = age >= 18 ? "18 Yaşından büyüksün." : "18 Yaşından küçüksün."
console.log(`${message}`) 

*/

/*
    - Switch-Case Yapıları -
let gun = 1;
switch (gun){
    case 1:
        console.log("Pazartesi");
        break;
    case 2:
        console.log("Salı");
        break;
    case 3:
        console.log("Çarşamba");
        break;
    case 4:
        console.log("Perşembe");
        break;
    case 5:
        console.log("Cuma");
        break;
    case 6:
        console.log("Cumartesi");
        break;
    case 7:
        console.log("Pazar");
        break;
    default:
        console.log(`${gun}, gün değeri değil.`)
        break;
}

*/

/*
    - Switch-Case Yapıları -
let dersNotu = 80;
let notDegeri;

switch(true){
    case dersNotu>=80:
        notDegeri = "Çok İyi";
        break;
    case dersNotu>=60:
        notDegeri = "İyi";
        break;
    case dersNotu>=0:
        notDegeri = "Geliştirilmeli";
        break;
    default:
        notDegeri = `${dersNotu}, not'a benzemiyor.`
        break;
}
console.log(`${notDegeri}`)

*/

/*
    - ÖRNEK: Rastgele Sayı Tahmin Etme -
// Minimum ve maksimum tahmin aralıklarını tanımla
const MIN_NUMBER = 1;
const MAX_NUMBER = 50;

// Rastgele bir sayı oluştur (MIN_NUMBER ve MAX_NUMBER dahil et)
const targetNumber = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER;

// Deneme sayısını tutan değişken
let attemptCount = 0;

// Kullanıcının tahminini tutacak değişken
let userGuess;

// Oyun durumu
let isGameRunning = true;

// Oyun döngüsü
while (isGameRunning) {
    // Kullanıcıdan tahmin iste
    userGuess = prompt(`${MIN_NUMBER} ile ${MAX_NUMBER} arasında bir sayı tahmin edin:`);
    userGuess = Number(userGuess);

    if (isNaN(userGuess)) {
        alert(`Hatalı giriş yaptınız. Lütfen bir sayı girin.`);
    } else if (userGuess < MIN_NUMBER || userGuess > MAX_NUMBER) {
        alert(`Lütfen ${MIN_NUMBER} ile ${MAX_NUMBER} arasında bir sayı girin.`);
    } else {
        attemptCount++;

        if (userGuess < targetNumber) {
            alert(`Tahmininiz çok düşük! Daha yüksek bir sayı deneyin.`);
        } else if (userGuess > targetNumber) {
            alert(`Tahmininiz çok yüksek! Daha düşük bir sayı deneyin.`);
        } else {
            // Doğru tahmin
            alert(`Tebrikler! Doğru cevap ${targetNumber}. Toplam ${attemptCount} deneme ile kazandınız!`);
            isGameRunning = false; // Oyunu sonlandır
        }
    }
}

*/


// Gerekli tanımlamalar
const ALERT_VIEW = document.getElementById("alertView");
const INFO_VIEW = document.getElementById("infoView");
const GUESS_TXT = document.getElementById("guessTXT");
const SUBMIT_BTN = document.getElementById("submitBTN");
const RESET_BTN = document.getElementById("resetBTN");
let MIN_NUMBER = 0;
let MAX_NUMBER = 0;

while(MIN_NUMBER >= MAX_NUMBER || (MAX_NUMBER - MIN_NUMBER < 5)) {
    MIN_NUMBER = Math.floor(Math.random() * (99-0 + 1) + 1);
    MAX_NUMBER = Math.floor(Math.random() * (99-0 + 1) + 1);
}
INFO_VIEW.textContent = `${MIN_NUMBER} ile ${MAX_NUMBER} arasında sayı tahmin edin.`;


let ANSWER = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER;
let running = true;
let attemptCount = 0;


// Tahmin gönderme butonu
SUBMIT_BTN.onclick = function () {
    if (!running) {
        showAlert("Oyun bitti! Sıfırla butonuna basarak yeniden başlayabilirsiniz.");
        return;
    }

    let userGuess = Number(GUESS_TXT.value);

    // Girdi kontrolü
    if (isNaN(userGuess)) {
        showAlert(`Lütfen geçerli bir sayı girin.`);
    } else if (userGuess < MIN_NUMBER || userGuess > MAX_NUMBER) {
        showAlert(`${userGuess} değeri, ${MIN_NUMBER} - ${MAX_NUMBER} aralığında olmalıdır.`);
    } else {
        attemptCount++;

        // Tahmin kontrolü
        if (userGuess < ANSWER) {
            showAlert("Tahmininiz çok düşük! Daha yüksek bir sayı deneyin.");
        } else if (userGuess > ANSWER) {
            showAlert("Tahmininiz çok yüksek! Daha düşük bir sayı deneyin.");
        } else {
            showAlert(`Tebrikler! Doğru tahmin: ${ANSWER}. Toplam deneme: ${attemptCount}`);
            running = false; // Oyun sona erdi
        }
    }
};

// Reset butonu
RESET_BTN.onclick = function () {
    ANSWER = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER;
    attemptCount = 0;
    running = true;
    GUESS_TXT.value = ""; // Girdi alanını temizle
    ALERT_VIEW.textContent = ""; // Uyarıları temizle
    INFO_VIEW.textContent = `${MIN_NUMBER} ile ${MAX_NUMBER} arasında yeni bir sayı tahmin edin.`;
};

// Uyarı mesajlarını göstermek için yardımcı fonksiyon
function showAlert(alertTXT) {
    ALERT_VIEW.textContent = alertTXT;
}

