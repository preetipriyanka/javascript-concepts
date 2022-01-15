let promise = new Promise((resolve, reject) => {
  let task_performed = false;
  if (task_performed) {
    resolve("The task has been performed");
  } else {
    reject("the task cannot be executed at this moment");
  }
});

promise
  .then((fromRes) => {
    console.log(fromRes);
  })
  .catch((fromRej) => {
    console.log(fromRej);
  });
