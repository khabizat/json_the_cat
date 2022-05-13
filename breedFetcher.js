const request = require("request");
const fetchBreedDescription = (breedName, callback) => {
  
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else if (body === '[]') {
      callback(null, null);
    } else {
      const data = JSON.parse(body)[0];
      const desc = data.description;
      callback(null, desc);
    }
  });
};

module.exports = { fetchBreedDescription };
















// const request = require("request");

// const fetchBreedDescription = function(breedName, callback) {

// };

// const breedFetcher = () => {
//   const args = process.argv;
//   //Value we want is at index 2 (print args to check)
//   const breed = args[2];
//   request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
//     const data = JSON.parse(body);
//     if (data.length === 0) {
//       console.log("Cat not found!");
//     }
//     if (error) {
//       console.log(error);
//     }
//     console.log(data[0].description);
//   });
// };
// breedFetcher();
