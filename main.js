// masala 1 ================

// let n = "10011011";
// a = 2;

// function nFunc(n) {
//   switch (n) {
//     case "A": return 10;
//     case "B": return 11;
//     case "C": return 12;
//     case "D": return 13;
//     case "E": return 14;
//     case "F": return 15;
//     default: return n;
//   }
// };

// function fun(n, a) {
//   let b = 0;
//   for (let i = n.length - 1; i >= 0; i--) {
//     b += nFunc(n[i]) * a ** (n.length - i - 1);
//   }
//   return res;
// }



// masala 2 ================

// let massiv = [-2, 5, -10, 12, -3, 4, -5];
// let truee = true

// let mus = 1;
// let man = 1;

// for (let i = 0; i < massiv.length; i++) {
//   if (massiv[i] > 0 && mus == 1) {
//     mus += 1
//     if (man == 2) {
//       man -= 1
//     }
//   }
//   else if (massiv[i] < 0 && man == 1) {
//     man += 1
//     if (mus == 2) {
//       mus -= 1
//     }
//   }
//   else if (man == 2 || mus == 2) {
//     console.log("ketma-ketlig buzuldi index ->>", i);
//     truee = false
//     break
//   }
//   else {
//     truee = true
//   }
// }
// console.log(truee);




// masala 3 ================

// const obj = {
//   arr: [15, 20, 12, 4, -13, 5]
// }
// // let n = undefined

// function at(arr) {
//   if (arr >= 0) {
//     for (let i = 0; i < obj.arr.length; i++) {
//       if (arr == i) {
//         console.log(obj.arr[i]);
//       }
//     }
//   }
//   else {
//     for (let i = obj.arr.length - 1; i >= 0; i--) {
//       if (arr == -i) {
//         console.log(obj.arr[i]);
//       }
//     }
//   }
// }

// at(-2)



// masala 4 ================

// let obj = { x: 1, y: 2 }
// let arr = [];

// for (let i in obj) {
//   console.log(obj[i]);
//   arr[arr.length] = [i, obj[i]]
// }

// console.log(arr);



// masala 5 ================

// let a = [1, 't', 15, 't'];
// let b = [2, 4];
// let arr = []

// a[a.length] = b

// let n = a[0]
// arr[arr.length] = n
// for (let i = 1; i < a.length; i++) {
//   for (let j = 0; j < b.length; j++) {
//     if (a[j] != a[i]) {
//       n = a[i - 1]
//       arr[arr.length] = a[i]
//     }
//     console.log(a[i]);
//     console.log(b[j]);
//   }
// }

// console.log(a);


// masala 6 ================





// masala 7 ================





// masala 8 ================


// let mass = [7, 8, 7, 2, 10, 6]
// let k = 2
// let arr = []

// for (let i = 0; i < mass.length; i++) {
//   arr[arr.length] = mass[i - k]
// }

// console.log(arr);