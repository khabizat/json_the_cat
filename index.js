
const {fetchBreedDescription} = require('./breedFetcher');

const args = process.argv;
const breedName = args[2];

const callback = (error, desc) => {
  if (error) {
    console.log(error);
    return;
  }

  if (desc === null) {
    console.log("Cat not found!");
    return;
  }

  console.log(desc);
};


fetchBreedDescription(breedName, callback);