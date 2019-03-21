// let fibonacci = {
//     [Symbol.iterator]() {
//         let pre = 0, cur = 1;
//         return {
//             next() {
//                 [pre, cur] = [cur,pre+cur];
//                 return {done: false, value: cur}
//             }
//         }
//     }
// }

var fibonacci = {
    [Symbol.iterator]: function*() {
        var pre = 0, cur = 1;
        for(;;){
            var temp = pre;
            pre = cur;
            cur += temp;
            yield cur;
        }
    }
}

for(var n of fibonacci){
    if(n>1000)
    break;
    console.log(n);
}