

async function doTask1() {
  mypromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Async 10"), 1)
    setTimeout(() => reject("Reject Async 20"), 500)
  });
}
async function doTask2() {
  promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Async/Await 10"), 1000)
    setTimeout(() => reject("Reject Async/Await 20"), 2000)
  });

  result = await promise;
  console.log(result);
}
function* doTask3() {
  yield 10;
  yield 20;
  yield 30;
}

var task1 = doTask1();
var task2 = doTask2()
var task3 = doTask3();
console.log(task1.then());
console.log(task2.then());
console.log(task3.next().value);
console.log(task3.next().value);
console.log(task3.next().value);

//output :
// Promise { <pending> }
// Promise { <pending> }
// 10
// 20
// 30
// Async/Await 10