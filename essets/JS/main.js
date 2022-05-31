// function Ex12(x, n) { // S = x * x * x * ... * x = x^n || x ^ n
//     var v = 1
//     var i = 1
//     while (i <= n) {
//         p = Math.pow(x, i)
//         v = v * p
//         i = i + 1
//     }
//     console.log(v)
// }
// Ex12(2, 5)

// function Ex13(n) { // S = 1 + 1 * 2 + 1 * 2 * 3 + ... + 1 * 2 * 3 * ... * n 
//     var s = 0
//     var i = 1
//     var a = 1
//     while (i <= n) {
//         a = a * i
//         s = s + a
//         i = i + 1
//     }
//     console.log(s)
// }
// Ex13(3)

// function Ex14(x, n) { // S = x + x^2 + x^3 + ... + x^n
//     var s = 0
//     var i = 1
//     while (i <= n) {
//         a = Math.pow(x, i) 
//         s = s + a
//         i = i + 1
//     }
//     console.log(s)
// }
// Ex14(2, 3)

// function Ex15(x, n) { // S = x^2 + x^4 + ... + x^(2n)
//     var s = 0
//     var i = 1
//     while (i <= n) {
//         a = Math.pow(x, 2 * i)
//         s += a
//         i++
//     }
//     console.log(s)
// }
// Ex15(2, 2)

// function Ex16(x, n) { // S = x + x^3 + x^5 + ... + x^(2n + 1)
//      var s = 0
//      var i = 0
//      while (i <= n) {
//          a = Math.pow(x, (2 * i) + 1)
//          s += a
//          i++
//      }
//      console.log(s)
// }
// Ex16(2, 2)

// function Ex17(n) { // S = 1 + 1/(1+2) + 1/(1+2+3) + ... + 1/(1+2+3+...+n)
//     var s = 0
//     var i = 1
//     var a = 0
//     while (i <= n) {
//         a = a + i
//         s = s + (1 / a)
//         i++
//     }
//     console.log(s)
// }
// Ex17(3)

// function Ex18(x, n) { // S = x + x^2/(1+2) + x^3/(1+2+3) + ... + x^n/(1+2+3+...+n)
//     var s = 0 
//     var i = 1
//     var b = 0
//     while (i <= n) {
//         b = b + i
//         a = Math.pow(x, i) / b
//         s += a
//         i++
//     }
//     console.log(s)
// }
// Ex18(2, 3)

function factorial(f) { // x! = x * x-1 * x-2 * x-3 * ... * 1
    var v = 1
    var i = f
    while (i > 0) {
        v = v * i
        i--
        
    }
    return v;
}
factorial(5)

// function Ex19(x, n) { // S = x + x^2/(2!) + x^3/(3!) + ... + x^n/(n!)
//     var s = 0
//     var i = 1  
//     while (i <= n) {
//         b = factorial(i)
//         a = Math.pow(x, i) / b 
//         s += a
//         i++
//     }
//     console.log(s , 's');
    
// }
// Ex19(2, 3)

function Ex20(x, n) { // S = 1 + x^2/(2!) + x^4/(4!) + ... + x^2n/(2n!)
     var s = 1 
     var i = 1
     while (i <= n) {
        b = factorial(i)
        a = Math.pow(x, i * 2) / 2 * b
        s += a
        i = i + 1
     }
     console.log(s)
}
Ex20(2, 2)