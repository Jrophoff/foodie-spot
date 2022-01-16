randomJoke = function () {
  const chuckJoke = ' https://api.chucknorris.io/jokes/random?category=food';

  fetch(chuckJoke).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        // console.log(data.value);
        displayJoke(data.value);
      });
    }
  });
  const jokeEl = document.querySelector('#jokeContainer');
  const displayJoke = function (data) {
    var jokeContainerEl = document.createElement('p');
    jokeEl.appendChild(jokeContainerEl);
    jokeContainerEl.textContent = data;
  };
};
randomJoke();