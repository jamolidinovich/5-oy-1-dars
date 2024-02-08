// 1
let number = prompt("Iltimos, raqamingizni kiriting");
while (isNaN(number) || number !== "998991234567") {
  number = prompt("Iltimos, to'g'ri raqam kiriting. Masalan, +998991234567");
}
alert("Rahmat! Sizning raqamingiz tasdiqlandi: " + number);

// 2 foydalanuvchini yoshinni surovchi dastur
// function Age() {
//   let age = prompt("Iltimos yoshizni kiriting");
//   if (age < 0 || age > 150 || age != null) {
//     alert("Iltimos boshqatan tekshirib kuring!");
//   }
// }
// console.log(Age(50));

//3Foydalanuvchini emailni surovchi dastur

// function getEmail() {
//   var email;
//   do {
//     email = prompt("Please enter your email");
//   } while (email === "" || !/^\S+@\S+\.\S+$/.test(email));
// }
// console.log(getEmail());

//4Yoshini tezkari tartibda sanab chiqaruvchi dastur.
// function kamaytirishsonlar() {
//   let number = parseInt(prompt("Ixtiyori raqam kiriting"));
//   if (isNaN(number)) {
//     alert("Iltimos raqam kiriting");
//     return kamaytirishsonlar();
//   }
//   let interval = setInterval(function () {
//     if (number === 0) {
//       clearInterval(interval);
//     } else {
//       console.log(number);
//       number--;
//     }
//   }, 1000);
// }
// kamaytirishsonlar();
