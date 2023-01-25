//async
function hello() {
  return "hello";
}
console.log(hello); //hello

// async function helloAsync() {
//   return delay(3000).then(() => {
//     "hello Async"; //promise에 resolve값이 됨
//   });
// }

//await 활용
async function helloAsync() {
  await delay(3000);
  return "hello Async"; //promise에 resolve값이 됨
}

console.log(helloAsync); //Promise{<pending>}

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function main() {
  // helloAsync().then((res) => {
  //   console.log(res); //hello Async
  // });
  const res = await helloAsync();
  console.log(res);
}
main();
