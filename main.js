/*for (let i = 1; i <= 5; i++) {
    console.log("i",i);
    for (let j = 1; j <= i; j++) {
        document.write("*");
    }
    document.write("<br>");
}
for (let i = 1; i <= 5; i++) {
    console.log("i", i);
    for (let j = 6-i; j >= 1; j--) {
        document.write("*");
    }
    document.write("<br>");
}
for (let i = 6; i >= 1; i--) {
    console.log("i", i);
    for (let j = 1; j <= 6; j++) {
        if (j>=i){
            document.write("*")
        }else{
            document.write("&ensp;")
        }
    }
    document.write("<br>");
}
for (let i = 1; i <= 6; i++) {
    for (let j = 1; j <= 6; j++) {
        if (i==1||j==1||j==6||i==6) {
            document.write("*")
        } else {
            document.write("&ensp;")
        }
    }
    document.write("<br>");
}
let fibonacci = [0, 1];
while (fibonacci.length < 20) {
    let nextNumber = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
    fibonacci.push(nextNumber);
}
console.log(fibonacci);*/
const fixedText = "Xin Chào! Thần Đằng!!!";
let index = 0;
function clearText() {
    const fixedTextElement = document.getElementById("fixedText");
    fixedTextElement.innerHTML = "";
}
document.addEventListener("keydown",function(event) {
    const fixedTextElement = document.getElementById("fixedText");
    if (index < fixedText.length) {
        clearText();
        for (let i = 0; i <= index; i++) {
            fixedTextElement.innerHTML += fixedText.charAt(i);
        }
        index++;
        event.preventDefault();
    } else {
        index = 0;
        clearText();
    }
});
/* const container = document.getElementById("container");
const liElements = container.getElementsByTagName("li");
for (let i = 0; i < liElements.length; i++) {
        console.log(liElements[i].textContent);
} */

