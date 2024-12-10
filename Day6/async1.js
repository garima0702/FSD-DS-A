// sayhello = () => 
// {
//     console.log("Hello Function");
// };

// console.log('start')
// setTimeout(sayhello, 4000);
// console.log("End");

// console.log("start");
// setTimeout(()=>{
//     console.log("first task completed");
//     setTimeout(()=>{
//         console.log("second task completed");
//         setTimeout(()=>{
//             console.log("third task complted");
//         },3000)
//     },2000)
// },1000)
// console.log("end");

// const mypromise = new Promise((resolve, reject) =>{
//     let success = false;
//     if(success){
//         resolve("Data send success");
//     }
//     else{
//         reject("Data failed to send");
//     }
// });

// mypromise
//     .then((message) => console.log(message))
//     .catch((error) => console.log("Error fetching data "+ error));


// function task(message, delay){
//     return new Promise((resolve) => {
//         setTimeout(() =>{
//             console.log(message);
//             resolve();
//         }, delay);
//     });
// }

// task("first task completed",1000)
//     .then(() => task("second task completed",2000))
//     .then(() => task("third task completed",3000));


function fetchdata(){
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            const data={id:1, roll:23, name:"rahul"};
            resolve(data);
        }, 3000);
        //reject("error");
    });
}
fetchdata()
    .then((data) => {
        console.log("data received",data);
    })
    .catch((error) => {
        console.error("error",error);
    });

    