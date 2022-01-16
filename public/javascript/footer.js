// randomFoodJoke = function () {
//   const apiKey = 'fb59434188084ed2abbb1693f8841269';

//   const foodJoke =
//     'https://api.spoonacular.com/food/jokes/random?apiKey=' + apiKey;

//   fetch(foodJoke).then(function (response) {
//     if (response.ok) {
//       response.json().then(function (data) {
//         // console.log(data.text);
//         displayJoke(data.text);
//       });
//     }
//   });
//   const jokeEl = document.querySelector('#jokeContainer');
//   const displayJoke = function (data) {
//     var jokeContainerEl = document.createElement('p');
//     jokeEl.appendChild(jokeContainerEl)
//     jokeContainerEl.textContent = data;
//   };
// };
// randomFoodJoke();


// fetch("https://dad-jokes.p.rapidapi.com/random/joke", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "dad-jokes.p.rapidapi.com",
// 		"x-rapidapi-key": "d06c0fab83mshaec89b2cfa0f891p1f163ejsn6512b370c91d"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });