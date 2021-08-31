// console.log("hello-world!");

let theWholeBody = document.querySelector("body");

theWholeBody.addEventListener("keydown", (evt) => {
  console.log(`Yo you pressed the ${evt.key}`);
});
