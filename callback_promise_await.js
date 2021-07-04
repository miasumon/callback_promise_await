// In a synchronous way

// const processOrder = (customer) =>{
//   console.log(`Processing Order For Customer 1`);
//   var currentTime = new Date().getTime();
  
//   while(currentTime + 5000 >= new Date().getTime());
//   console.log(`Proceed Order For Customer 1`);
  
// };

// console.log(`Take Order For Customer 1`);

// processOrder();

// console.log(`Finished Order For Customer 1`);

// In a asynchronous way
// const processOrder = () =>{
//   console.log(`Processing Order For Customer 1`);
  
//   setTimeout( () =>{
//     console.log(`Proceed Order For Customer 1`);
    
    
//   },3000 );
//   console.log(`Order Proceed for Customer 1 `);
// };


// console.log(`Take Order for Customer 1`);
// processOrder();
// console.log(`Finished Order For Customer 1`);


// Controlling Task Execution Using Callback function
// const takeOrder = (callback) =>{
//   console.log(`Take Order For Customer 1`);
//   callback();
// };

// const completeOrder = () =>{
//   console.log(`Finished Order For Customer 1`);
  
// };

// const processOrder = (callback) =>{
//   console.log(`Processing Order For Customer 1`);
  
//   setTimeout( () =>{
//     console.log(`Cooking is completed `);
//       console.log(`Order Proceed for Customer 1 `);
//       callback();
//   },3000 );

// };

// takeOrder( () => {
//   processOrder( () =>{
//     completeOrder();
//   });
// });


// Promise part : three state> Pending,resolve,reject

// without race

// const promise1 = new Promise( (resolve,reject) =>{
//   let completedPromise = false;
//   if(completedPromise){
//     resolve(`The task has been resolved `);
//   }
//   else{
//     reject(`rejected`);
//   }
// });

// const promise2 = new Promise( (resolve,reject) =>{
//   resolve("promise 2 resolved");
// });


// with race 
// const promise1 = new Promise( (resolve,reject) =>{
// setTimeout(()=>{
//   resolve("resolved promise1");
// },2000);

// });

// const promise2 = new Promise( (resolve,reject) =>{
//   setTimeout(()=>{
//   resolve("resolved promise2");
// },4000);
// });

// individual chaining 

// promise1
// .then( (res) =>{
//   console.log(res);
  
// }).catch( (err) =>{
//   console.log(err);
// });

// promise2
// .then( (res) =>{
//   console.log(res);
// });

// Combined chainin
//without race


// Promise.all([promise1,promise2])
// .then( ([res1,res2]) =>{
//   console.log(res1,res2);
// })
// .catch((err)=>{
//   console.log(err);
// });


// with race
// Promise.race([promise1,promise2])
// .then( (res) =>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// });

// Promise chaining

const taskOne = () => {
  return new Promise( (resolve,reject) =>{
    resolve("Task 1 is completed");
  }) ;
};

const taskTwo = () => {
  return new Promise( (resolve,reject) =>{
  setTimeout(()=>{
      resolve("Task 2 is completed");
  },2000);
  }) ;
};

const taskThree = () => {
  return new Promise( (resolve,reject) =>{
    resolve("Task 3 is completed");
  }) ;
};

const taskFour = () => {
  return new Promise( (resolve,reject) =>{
setTimeout(()=>{
      resolve("Task 4 is completed");
},2000);
  }) ;
};

// taskOne()
// .then(res => console.log(res))
// .then(taskTwo)
// .then(res => console.log(res))
// .then(taskThree)
// .then(res => console.log(res))
// .then(taskFour)
// .then(res => console.log(res))
// .catch(err => console.log(err));

// Using async & await the same tasks
async function callAllTasks(){
try {
    
  const t1 = await taskOne();
  console.log(t1);
  
  const t2 = await taskTwo();
  console.log(t2);
  
  const t3 = await taskThree();
  console.log(t3);
  
  const t4 = await taskFour();
  console.log(t4);
} catch (e) {
  console.log(e);
}
  
}

callAllTasks();