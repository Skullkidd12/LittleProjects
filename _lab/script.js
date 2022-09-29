let stocks = {
  Fruits: ["Strawberry", "Grape", "Banana", "Apple"],
  Liquid: ["Water", "Ice"],
  Holder: ["Cone", "Cup", "Stick"],
  Topping: ["Chocolate", "peanuts"],
};

let is_shop_open = true;
let order = (time, task) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open === true) {
      setTimeout(() => {resolve(task())}, time);
    } else {
      reject(console.log("sorry, shop closed"));
    }
  });
};

order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
  .then(() => {
    return order(2000, () => console.log(`Production started!`));
  })
  .then(() => {
    return order(2000, () => console.log(`Cutting the Fruits..`));
  })
  .then(() => {
    return order(3000, () =>
      console.log(`Adding ${stocks.Liquid[0]} and ${stocks.Liquid[1]}...`)
    );
  })
  .then(() => {
    return order(1000, () => console.log(`Starting the machine...`));
  })
  .then(() => {
    return order(2000, () =>
      console.log(`Putting ice cream in the ${stocks.Holder[1]}...`)
    );
  })
  .then(() => {
    return order(3000, () =>
      console.log(`Adding ${stocks.Topping[0]} for the topping...`)
    );
  })
  .then(() => {
    return order(2000, () => {
      console.log("Ice Cream Finished!");
    });
  })

  .catch(() => {
    console.log("Custumer left");
  })

  .finally(() => {
    console.log("Day Ended, Thank you");
  });



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
  
/*
let order = (fruit_name, call_production) => {
  setTimeout(() => {
    console.log(`${stocks.Fruits[fruit_name]} was selected.`);
    call_production();
  }, 2000);
};

let production = () => {
  setTimeout(() => {
    console.log(`Production has started`);
    setTimeout(() => {
      console.log("The Fruit has been chopped");
      setTimeout(() => {
        console.log(`Adding ${stocks.Liquid[0]} and ${stocks.Liquid[1]}`);
        setTimeout(() => {
          console.log("Starting the machine");
          setTimeout(() => {
            console.log(`Putting the ice cream in the ${stocks.Holder[0]} `);
            setTimeout(() => {
              console.log(`Adding the selected Topping: ${stocks.Topping[0]}`);
              setTimeout(() => {
                console.log("ICE CREAM SERVED");
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0000);
};

order("0", production);
*/
