const randomJob = (name) => {
    return new Promise((r) => {
        setTimeout(() => {
            console.log(name);
            r(1);
        }, Math.floor(Math.random() * 10000)+1000);
    })
}

const doJob = async (name) => {
    await randomJob(name);
    return true;
}

let jobs = 20;
const doJobs = async() => {
    while(jobs>0) {
        await doJob(jobs--);
    }
}

for(let i = 0;i < 5;i++) {
    doJobs();
}