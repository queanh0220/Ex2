async function waiAndMaybeReject() {
    await new Promise((r) => setTimeout(r,1000));
    throw Error("this is error!");
}

async function test1() {
    try {
        return await waiAndMaybeReject();
    }
    catch (e) {
        return "Oh No!";
    }
} // đúng

async function test2() {
    try {
        return await waiAndMaybeReject();
    }
    catch (e) {
        throw e; //đúng nhưng khi gọi test2 phải có try catch để bắt error ném ra từ hàm này
    }
}

async function test3() {
    return await waiAndMaybeReject(); //không nên dùng return await ngoài câu lệnh try catch
    // không có try catch để bắt lỗi
}

async function test4() {
    return waiAndMaybeReject(); // đúng nếu câu lệnh không nằm trong lệnh try catch
    //không có try catch để bắt lỗi(nếu dùng try catch thì phải dùng return await)
}

const main = async () => {
    // try {
        const value = await test2();
    // }
    // catch (e) {
    //     console.log("error");
    // }
   
    console.log("value", value);
}

main()