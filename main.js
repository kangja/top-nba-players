const getPlayer = async (e) => {
  try {
    e.preventDefault();
    const name = document.querySelector("input").value;
    // console.log(name);
    const url = "https://www.balldontlie.io/api/v1/players";
    const playerName = url + `?search=${name}`;

    const response = await axios.get(playerName);
    console.log(response.data.data[0].team.full_name);
  } catch (error) {
    console.log(`this is an ${error}`);
  }
};

const submit = document.querySelector("button");
submit.addEventListener("click", getPlayer);

const getGiphy = async () => {
  try {
    // e.preventDefault();
    const nameTwo = document.querySelector("input").value;
    console.log(nameTwo);

    const urlTwo = "https://api.giphy.com/v1/gifs/search";
    const apiKey = "6QonJK5XS8DaWTExlkhPXmM4DTyFXcLA";
    const finalUrl =
      urlTwo +
      `?api_key=${apiKey}&q=${nameTwo}&limit=10&offset=0&rating=G&lang=en`;

    const responseTwo = await axios.get(finalUrl);
    console.log(responseTwo.data.data[0]);

    document.querySelector("#image").src =
      responseTwo.data.data[0].images.original.url;
  } catch (error) {
    console.log(`this is an ${error}`);
  }
};

submit.addEventListener("click", getGiphy);

function giphy() {
  const img = document.createElement(img);
}
