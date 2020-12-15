"use strict";

// 비동기 처리의 이해!
function printMe() {
  console.log("Hello World!");
}

setTimeout(printMe, 3000);
console.log("대기중...");

// 콜백 지옥
function increase(number, callback) {
  setTimeout(() => {
    const result = number + 10;
    if (callback) {
      callback(result);
    }
  }, 1000);
}

console.log("작업시작!");
increase(0, (result) => {
  console.log(result);
  increase(result, (result) => {
    console.log(result);
    increase(result, (result) => {
      console.log(result);
      increase(result, (result) => {
        console.log(result);
        console.log("작업완료");
      });
    });
  });
});

// Promise
function increase(number) {
  const promise = new Promise((resolve, reject) => {
    // resolve는 성공, reject는 실패
    setTimeout(() => {
      const result = number + 10;
      if (result > 50) {
        const error = new Error("NumberTooBig");
        return reject(error);
      }
      resolve(result);
    }, 1000);
  });
  return promise;
}

increase(0) //
  .then((number) => {
    console.log(number); // Promise에서 resolve된 값은 .then을 통해 받아 올 수 있음
    return increase(number); // Promise를 리턴 하면
  })
  .then((number) => {
    console.log(number);
    return increase(number);
  })
  .then((number) => {
    console.log(number);
    return increase(number);
  })
  .then((number) => {
    console.log(number);
    return increase(number);
  })
  .then((number) => {
    console.log(number);
    return increase(number);
  })
  .catch((error) => {
    console.log(error);
  });

// async await
async function runTasks() {
  try {
    let result = await increase(0);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
runTasks();
