let myName = "LuuVanThai";
let nameReverce = "";

for (let i = myName.length - 1; i >= 0 ; i--){
// Mặc định biến nameReverce là một chuỗi rỗng
// Mỗi lần lặp qua sẽ nhận dc từng ký tự đã đảo ngược
//Sau đấy chúng ta sẽ nối các ký tự đấy (lưu trữ vào biến namereverce)
    nameReverce = nameReverce + myName[i];
}
console.log("Chuỗi đảo ngược: ", nameReverce);