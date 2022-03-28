// bind, call, apply -> function gọi 1 function khác

// 1. bind method:
// xác định tham số this cho function
let user = {
    name: "a",
    showInfo: function() {
        console.log("Name: "+this.name);
    }
}
let user2 = {name: "b"};

let show = user.showInfo;
let show2 = user.showInfo.bind(user);// trả về 1 hàm
let show3 = user.showInfo.bind(user2);
show(); //-> Name: Undefined
show2();//-> Name: a
show3();//-> Name: b

// tạo function mới từ function cũ
const pow = (a, x) => {
    console.log(a);
    return Math.pow(a,x);
}
let pow2 = pow.bind(null, 2);
console.log(pow2(3)); //-> 8



//2. call: gọi hàm với giá trị của this và các đối số riêng lẻ(gọi trực tiếp hàm, không trả về hàm như bind)
//set giá trị cho this
user.showInfo.call(user2) // "Name: b"

// chain constructor cho đối tượng
function Product(name, price) {
    this.name = name;
    this.price = price;
}
function Phone(name, price) {
    Product.call(this, name, price);
    this.category = "phone";
}
let iphone = new Phone('iphone 11', 14000000);



//3. apply: gọi một hàm với giá trị this và các đối số được truyền vào dưới dạng mảng(gọi trực tiếp hàm, không trả về hàm như bind)
// set giá trị cho this
user.showInfo.apply(user2);

//chain constructor
function Food(config) {
    this.name = config.name;
    this.price = config.price;
}

function Fish(config) {
    Food.apply(this, arguments);
    this.category = config.category;
}

let fish = new Fish({name: "dry fish", price: 20000, category: "fish"});
console.log(fish);