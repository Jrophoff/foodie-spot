randomFoodJoke = function () {
  const apiKey = 'fb59434188084ed2abbb1693f8841269';

  const foodJoke =
    'https://api.spoonacular.com/food/jokes/random?apiKey=' + apiKey;

  fetch(foodJoke).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        // console.log(data.text);
        displayJoke(data.text);
      });
    }
  });
  const jokeEl = document.querySelector('#jokeContainer');
  const displayJoke = function (data) {
    var jokeContainerEl = document.createElement('p');
    jokeEl.appendChild(jokeContainerEl)
    jokeContainerEl.textContent = data;
  };
};
randomFoodJoke();
