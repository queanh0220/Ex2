

arr = [1,2,3,4,5,6,7,8,9,10];

// 1
// for có thể kiểm soát cách lặp qua mảng bằng biến đếm i(i++, i--, i+=2,...)
for(let i = 0; i < arr.length; i+=2) {
    console.log("arr["+i+"]="+arr[i]);
}

// forEach dễ dàng lặp qua mảng mà không cần dùng biến đếm(ít gặp lỗi vì không cần kiểm soát biến đếm i như for)
arr.forEach(element => {
    console.log(element);
})
//________________________________________

// 2
//for có thể dùng continue và break
for(let i = 0;i < arr.length-1;i++) {
    if(i < 5)continue;
    console.log(arr[i]);
    if(i == 8) break;
}

// forEach khong the dung continue va break (co the dung return thay continue)
arr.forEach((element, index) => {
    if(index < 5) return;
    console.log(element);
});
//__________________________________________

//3 
// forEach bỏ qua phần tử không được thiết lập
arr2 = [5,6,,8];
arr2.forEach(element => {
    console.log(element);
})

// for lặp cả phần tử chưa được thiết lập
for(let i = 0;i < arr2.length;i++) {
    console.log(arr[i]);
}
//__________________________________________

//4
//for nhanh hơn forEach một chút vì forEach dùng lệnh gọi hàm cho mỗi phần tử
let arr3 = [];
for(i = 0;i < 100000000;i++)arr3.push(i);

let time = Date.now();
for(i = 0;i < arr3.length-1;i++) { }
console.log(Date.now()-time); // -> 224

time = Date.now();
arr3.forEach(element => {})
console.log(Date.now()-time); // -> 1243
//__________________________________________

//5 
// for không nhất thiết phải lặp qua mảng
let s = 1;
for(i = 1;i <= 10;i++) s*=i;
console.log(s);
//__________________________________________


//6
const p = (n) => {
    return new Promise(r =>{
        setTimeout(()=>{
            r(n);
        }, 1000);
    })
}
// for có thể dùng await
const a = async () => {
    for(i = 0;i < arr.length-1;i++) {
        let res = await p(arr[i]);
        console.log(res);
    }
    console.log("after awaiting");
}

//forEach dùng await không cho kết quả đúng
const b = async () => {
    await arr.forEach(async element => {
        let res = await p(element);
        console.log(res);
    })
    console.log("not awaiting :v");
}
//__________________________________________
