const obj = {
    name: "Anh",
    info: {
        phone: "0123456789",
       
    },
    getName() {
        return this.name;
    },
    sayHi: function() {
        console.log("hello, I'm "+ this.name);
    }
}


//Spread (Shallow copy)
obj2 = {...obj};

//Object.asign (Shallow copy)
obj2 = Object.assign({}, obj);

//JSON (Deep Clone)
obj2 = JSON.parse(JSON.stringify(obj));

//create method
const cloneObj = (obj) => {
    const clone = {};
    console.log();
    for (let prop in obj) {
        if(obj[prop] != null && typeof(obj[prop]) == 'object')
            clone[prop] = cloneObj(obj[prop]);
        else 
            clone[prop] = obj[prop];
    }
    return clone;
}

obj2 = cloneObj(obj);

//thu vien ngoai - Lodash, angularJs, jQuery,...

//StructuredClone trong nodeJS

obj.age = 10;
obj.info.phone = "123";
console.log(obj2);

//shadow clone:sao chép nông, chỉ sao chép các thuộc tính có kiểu dữ liệu nguyên thủy. 
//Đối với thuộc tính có kiểu dữ liệu tham chiếu, nó chỉ lưu địa chỉ bộ nhớ của đối tượng(thay đổi giá trị trong bản gốc sẽ thay đổi giá trị trong bản sao)

//deep clone: bản sao hoàn toàn độc lập với bản gốc, thay đổi bản gốc không làm thay đổi bản sao

