// // Numeric addition
// var x = 5;
// var y = 7;
// var z = x + y;
// console.log(z); // 12

// // String concatenation
// var A = "Hello ";
// var B = "world!";
// var C = A + B;
// console.log(C); // Hello world!

// function sumnPrint(x1, x2) {
//     console.log(x1 + x2);
// }

// // Call function
// sumnPrint(x, y); // 12
// sumnPrint(A, B); // Hello world!

// if (C.length > z) {
//     console.log(C);
// } else if (C.length < z) {
//     console.log(z);
// } else {
//     console.log("good job!");
// }
// // Output: good job!

// let L1 = ["Watermelon","Pineapple","Pear","Banana"];
// let L2 = ["Apple","Banana","Kiwi","Orange"];

// function findTheBanana(arr) {
//     arr.forEach(function(item){
//         if(item === "Banana") {
//             alert("Banana found!");
//         }
//     });
// }

// // Call function
// findTheBanana(L1);
// findTheBanana(L2);

function greeting(hour) {
    const greetingEl = document.getElementById("greeting");
    if(!greetingEl) return; // Only run if element exists

    if(hour < 5 || hour >= 20) {
        greetingEl.innerHTML = "Good night";
    } else if(hour < 12) {
        greetingEl.innerHTML = "Good morning";
    } else if(hour < 18) {
        greetingEl.innerHTML = "Good afternoon";
    } else {
        greetingEl.innerHTML = "Good evening";
    }
}

let now = new Date();
let hour = now.getHours();
greeting(hour);

function addYear() {
    const copyYear = document.getElementById("copyYear");
    if(copyYear) {
        copyYear.innerHTML = new Date().getFullYear();
    }
}