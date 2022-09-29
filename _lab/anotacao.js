let func1 = (x,y)=>{

      new Promise((resolve, reject) => {
        if(true){
          resolve()
        }else{
          reject()
        }
      })
    }
  
    func1(10,'jorge')
    .then(()=>{
      return func1(50,'milton')
    })
    .then(()=>{
      return func1(70,'cu')
    })
    .then(()=>{
      return func1(50,'xuxu')
    })
    .catch(()=>{
      console.log('deuruim')
    })
    .finally(() => {
      console.log("Day Ended, Thank you");
    });