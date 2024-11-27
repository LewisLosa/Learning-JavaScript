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