// console.log("hello-world!");

// select the element we are listening for
let theWholeBody = document.querySelector("body");

theWholeBody.addEventListener("keydown", (evt) => {
  if (evt.key === "o") {
    theWholeBody.style.backgroundColor = "orange";
  }

  console.log(`Yo you pressed the ${evt.key}`);
});
