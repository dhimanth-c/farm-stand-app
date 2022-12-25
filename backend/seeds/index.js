import standData from "./standnames.js";
import citiesData from "./cities.js";
import imageData from "./images.js";

const chooseRandomItem = (items) => {
  const size = items.length;
  const randomIndex = Math.floor(Math.random() * size);
  return items[randomIndex];
};

const seedDB = async () => {
  for (let stand of standData) {
    const description =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit exercitationem officiis similique laborum eius, iure enim tenetur nihil, iste ducimus molestias veniam. Ipsam eaque temporibus vero aspernatur laborum? Ex, vel!";
    const location = chooseRandomItem(citiesData);
    const image = chooseRandomItem(imageData);
    console.log(
      `insert into stand (name, description, location, image) values('${stand}', '${description}', '${location.city}, ${location.state}', '${image}');`
    );
  }
};

seedDB();
