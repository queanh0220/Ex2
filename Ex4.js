
  
  const waitBlocking = (m) => {
    const startTime = new Date().getTime();
    while (new Date().getTime() < startTime + m);
  }
  
  const waitNonBlocking = (m) => {
    return new Promise(res => setTimeout(() => res(), m));
  }
  
  const controller1 = async (req, res) => {
   await waitNonBlocking(1000);
    console.log(Date.now()-t);
  }
  
  const controller2 = async (req, res) => {
        waitBlocking(1000);
        console.log(Date.now()-t);
  }
  let t = Date.now();
 
//   let check = false;
//   const wloop = async (x) => {
//     while(check == false) {
//       await console.log(x);
//     }
//   }
//   const runC2 = async (x) => {
//     await wloop(x);
//     controller2(1,1);
//   }
//   runC2(1);
//   runC2(2);
//   runC2(3);
//  check = true;


// const c2 = async() => {
//   await Promise.resolve(1).then(controller2(1,1));
// }
// Promise.all([c2(),c2(),c2()]);

// var myWorker1 = new Worker('worker1.js');
// var myWorker2 = new Worker('worker2.js');
// console.log(Date.now());
// myWorker1.onmessage = function(e) {
//   t = Date.now();
//   controller2(1,1);
//   console.log(Date.now()+"a");
// }
// myWorker2.onmessage = function(e) {
//   controller2(1,1);
//   console.log(Date.now()+"b");
// }
// myWorker1.postMessage("a");
// myWorker2.postMessage("a");


controller2(1,1);
controller2(1,1);
controller2(1,1);

// dành cả thanh xuân thử mà không ra nổi 90s :v
// ai xem rồi thông não hộ em/mình với -.-