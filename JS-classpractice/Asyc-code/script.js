// sync
//asyc: settimeout , setInterval ,fetch ,event



//console.log("start")// syncrones code

//console.log("end")

//function getUser(callback){
//setTimeout(()=>{                  // asyncronus
//console.log("user data...");
//callback()
//},2000);
//}


//function getUserBankDetail(){
//setTimeout(() => {
 //  console.log("user bank detail");
//}, 1000);
//}

//function getUserInc(){
//   setTimeout(()=>{
 //       console.log("user insurance data")
 //   },2000)
//}

// callback ,promises,async wait  --> for making asyncronus behave like syncronus


//callback hell ==> nest of calling function  within themself to solve this we use promises
//getUser(()=>{
//getUserBankDetail(()=>{
//    getUserInc()

//})
//});


//console.log("end")//syncrones code


//let mypromise=new Promise((resolve,reject)=>{
 //   let age=18;
//    if(age>18){
 //       resolve("age is valid")
   // }
 //   else{
     //   reject("age is invalid")
 //   }
//});


//mypromise.then((msg)=>{
 //   console.log(msg)
//})
//.catch((err)=>{
  //  console.log(err)
//})






function getUser(){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{                  // asyncronus
console.log("user data...");
resolve();
},2000);
})
}


function getUserBankDetail(){
return new Promise((resolve,reject)=>{
    setTimeout(() => {
   console.log("user bank detail");
   resolve();
}, 1000);
})
}

function getUserInc(){
 return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("user insurance data")
        resolve();
    },2000)
 })  
}

// callback ,promises,async wait  --> for making asyncronus behave like syncronus


getUser()
.then(()=>{
    return getUserBankDetail();
}).then(()=>{
    return getUserInc();
}).then(()=>{
    console.log("process..end")
}).catch((err)=>{
    console.log(err)
})



// aysc wait---
async function call(){
    await getUser();
    await getUserBankDetail();
    await getUserInc()

}

call()


// object creation : object