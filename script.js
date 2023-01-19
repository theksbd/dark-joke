const apiURL =
  "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

const fetchData = async (apiURL) => {
  try {
    const res = await fetch(apiURL);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const getJoke = async () => {
  const joke = await fetchData(apiURL);

  document.querySelector(".part-1").innerHTML =
    joke.type === "single" ? "" : joke.setup;
  document.querySelector(".part-2").innerHTML =
    joke.type === "single" ? joke.joke : joke.delivery;
};

const randomPerson = () => {
  const number = Math.floor(Math.random() * 7);
  const src = `./assets/${number}.png`;
  document.getElementById("image").src = src;
};

const initialize = async () => {
  await getJoke(apiURL);
  randomPerson();
};

initialize();

document.querySelector(".btn").addEventListener("click", () => {
  initialize();
});
