var s = new Set();
s.add('hello').add('goodbye').add('hello');
console.log(s.size === 2);
console.log(s.has('hello') === true);

var m = new Map();
m.set('hello',42);
m.set(s,34);
console.log(m.get(s)===34);

var wm = WeakMap();
wm.set(s, {extra:42});
console.log(wm.size === undefined);

var ws = WeakSet();
ws.add({data:42});