
const a = () => {console.log('a')}
const b = () => {console.log('b')}

const main = () => {
    setImmediate(b);
    ProcessingInstruction.nextTick(a);
}

//các giai đoạn trong event loop NodeJS: timer, Pending callbacks, idle, ignore, poll, check close callbacks
// mỗi giai đoạn có một queue các callback để thực thi

//setImmediate: đưa callback vào event queue và được xử lý trong giai đoạn check

//process.nextTick: đưa calback vào nextTickQueue và được thực hiện ngay sau khi tiến trình hiện tại hoàn thành(sự chuyển đổi giữa trình xử lý C / C ++ cơ bản và xử lý JavaScript) và trước khi event loop tiếp tục. 
