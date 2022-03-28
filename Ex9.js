let a = new Promise(r => r(200));
let b = new Promise(r=> r(200));
let c = new Promise((rs,rj) => rj(404));

let arrP = [a,b,c];

Promise.all(arrP.map(p => p.catch(e => e))).then(re => console.log(re));