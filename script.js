// https://v2.jokeapi.dev/joke/Dark?blacklistFlags=racist
let joke;
const apiURL =
  "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

const fetchData = (apiURL) => {
  fetch(apiURL)
    .then((res) => res.json())
    .then((data) => (joke = data))
    .catch((err) => console.log(err));
};

const getJoke = () => {
  if (joke.type === "single") {
    document.querySelector(".part-1").innerHTML = "";
    document.querySelector(".part-2").innerHTML = joke.joke;
  } else {
    document.querySelector(".part-1").innerHTML = joke.setup;
    document.querySelector(".part-2").innerHTML = joke.delivery;
  }
};

const randomPerson = () => {
  const number = Math.floor(Math.random() * 7);
  const src = "./assets/" + number + ".png";
  document.getElementById("image").src = src;
};

fetchData(apiURL);
setTimeout(getJoke, 500);

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  fetchData(apiURL);
  setTimeout(() => {
    randomPerson();
    getJoke();
  }, 500);
});
