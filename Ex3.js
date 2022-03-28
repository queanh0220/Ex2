function doA() {
    let time = Date.now()+10000;
    while(Date.now() < time);
    console.log(Date.now()-t);
    }
    
    function doB() {
      return  new Promise(function(resolve, reject){
          setTimeout(function(){console.log("doB"), resolve(1)}, 1000);
    });
    }
    
    const controller = async (req, res) => {
    doA();
    await doB();
      console.log(Date.now()-t);
    }
    let t = Date.now();
    controller(1,"end");
    controller(1,"end");
    controller(1,"end");
    
    //time for first request 30s
    //time for last request 31s

    // request đầu phản hồi trong trong 11 giây
    const controller2 = async (req, res) => {
    await doB();
    doA();
      console.log(Date.now()-t);
    }