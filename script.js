//Example fetch using pokemonapi.co
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  // const choice = document.querySelector('input').value
  // console.log(choice)
  const url = `http://www.boredapi.com/api/activity/`;
  // `www.themealdb.com/api/json/v1/1/search.php?s=${choice}`
  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      document.querySelector("h2").innerText = data.activity;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

//