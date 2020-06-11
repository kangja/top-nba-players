let playerListArray = [];
let num = 0;

// Get Giphy
const getGiphy = async () => {
  try {
    // e.preventDefault(); not sure when to use this
    const nameTwo = document.querySelector("input").value;
    // console.log(nameTwo);
    const urlTwo = "https://api.giphy.com/v1/gifs/search";
    const apiKey = "6QonJK5XS8DaWTExlkhPXmM4DTyFXcLA";
    const finalUrl =
      urlTwo +
      `?api_key=${apiKey}&q=${nameTwo}&limit=10&offset=0&rating=G&lang=en`;

    const responseTwo = await axios.get(finalUrl);

    const giphyImg = document.querySelector("#image");

    giphyImg.src = responseTwo.data.data[0].images.original.url;
    giphyImg.style.width = "300px";
    giphyImg.style.height = "200px";

    // giphyImg.src = responseTwo.data.data;
    // console.log(responseTwo.data.data[0])

    return Promise.all(responseTwo.data.data[0].images.original.url);
  } catch (error) {
    console.log(`this is an ${error}`);
  }
};

// Get Player Data
const getPlayer = async (e) => {
  try {
    e.preventDefault();
    const name = document.querySelector("input").value;
    const url = "https://www.balldontlie.io/api/v1/players";
    const playerName = url + `?search=${name}`;

    const response = await axios.get(playerName);

    // Player Name
    const playerName2 = document.querySelector("#playerName2");
    playerName2.innerHTML = `<strong>Player Name:</strong> ${name}`;
    playerName2.style.border = "3px dashed red";

    // Team Name
    const teamName = response.data.data[0].team.full_name;
    const teamName2 = document.querySelector("#teamName2");
    teamName2.innerHTML = `<strong>Team Name:</strong> ${teamName}`;
    teamName2.style.border = "3px dashed blue";

    //Position
    const positionData = response.data.data[0].position;
    const position = document.querySelector("#position");
    position.innerHTML = `<strong>Position:</strong> ${positionData}`;
    position.style.border = "3px dashed orange";

    // Height
    const heightInFeet = response.data.data[0].height_feet;
    const heightInInches = response.data.data[0].height_inches;

    const height = document.querySelector("#height");
    height.innerHTML = `<strong>Height:</strong> ${heightInFeet}ft ${heightInInches}inches`;
    height.style.border = "3px dashed green";

    // Weight
    const weightInLbs = response.data.data[0].weight_pounds;
    const weight = document.querySelector("#weight");
    weight.innerHTML = `<strong>Weight:</strong> ${weightInLbs}lbs`;
    weight.style.border = "3px dashed yellow";

    playerListArray.push({
      url: getGiphy(),
      playerName: playerName2.innerHTML,
      teamName: teamName2.innerHTML,
      position: position.innerHTML,
      height: height.innerHTML,
      weight: weight.innerHTML,
    });
  } catch (error) {
    console.log(`this is an ${error}`);
  }
};

//Creating submit button
const submit = document.querySelector("button");
submit.addEventListener("click", getGiphy);
submit.addEventListener("click", getPlayer);

//Selecting #player-container
const listPlayer = document.querySelector("#player-container");

// Creating a list of names on the left side
function clickSubmit(e) {
  e.preventDefault();

  const columns = document.querySelectorAll(".columns");
  // console.log(columns);
  if (columns.length >= 10) {
    return null;
  }

  let divPlayerName = document.createElement("div");
  divPlayerName.className = "columns";
  divPlayerName.setAttribute("id", playerListArray.length.toString());

  let pTag = document.createElement("p");

  let name2 = document.querySelector("input").value;

  pTag.innerHTML = name2;

  divPlayerName.append(pTag);

  divPlayerName.append(createDeleteButton());

  divPlayerName.addEventListener("click", replaceValues);

  divPlayerName.addEventListener(
    "click",
    function (e) {
      e = e || window.event;
      let target = e.target;
      num = target.id;
      console.log(num);
    },
    false
  );

  if (name2 !== "") {
    listPlayer.append(divPlayerName);
  }
  name2 = "";
}

// Create Delete Button
function createDeleteButton() {
  let deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", deleteListItem);
  return deleteButton;
}

//Deleting player names
function deleteListItem() {
  this.parentNode.remove();
}

submit.addEventListener("click", clickSubmit);

// When name is clicked, it replaces values
function replaceValues() {
  const image = document.querySelector("#image");
  image.src = Promise.all(playerListArray[num].url);
  console.log(playerListArray);

  const playerName2 = document.querySelector("#playerName2");
  playerName2.innerHTML = playerListArray[num].playerName;
  console.log(num);
  console.log(playerListArray);

  const teamName2 = document.querySelector("#teamName2");
  teamName2.innerHTML = playerListArray[num].teamName;
  console.log(teamName2);

  const position = document.querySelector("#position");
  position.innerHTML = playerListArray[num].position;
  console.log(position);

  const height = document.querySelector("#height");
  height.innerHTML = playerListArray[num].height;
  console.log(height);

  const weight = document.querySelector("#weight");
  weight.innerHTML = playerListArray[num].weight;
  console.log(weight);
}
