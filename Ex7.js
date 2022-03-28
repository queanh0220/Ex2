async function loop(arr) {
    for(let i = 0;i < arr.length;i++){
    		await console.log(arr[i]);
    }
}

const controller = async (req, res) => {
const array = Array.from(Array(10).keys())
		await loop(array);
        //res.status(200).end();
		console.log(res);
}

let t = Date.now();

controller(1,2);
controller(1,1);
controller(1,3);
