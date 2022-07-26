function randomNum() {
  let randomText = Math.floor(Math.random() * 15);

  console.log(randomText);
}

setInterval(randomNum, 1000);
