let playerListArray = [];

// Get Giphy
const getGiphy = async () => {
  try {
    const nameTwo = document.querySelector("input").value;

    const urlTwo = "https://api.giphy.com/v1/gifs/search";
    const apiKey = "6QonJK5XS8DaWTExlkhPXmM4DTyFXcLA";
    const finalUrl =
      urlTwo +
      `?api_key=${apiKey}&q=${nameTwo}&limit=10&offset=0&rating=G&lang=en`;

    const responseTwo = await axios.get(finalUrl);

    document.querySelector("#image").src =
      responseTwo.data.data[0].images.original.url;

    return responseTwo.data.data[0].images.original.url;
  } catch (error) {
    console.log(`this is an ${error}`);
  }
};

// Get Player Information
const getPlayer = async (e) => {
  try {
    e.preventDefault();
    const name = document.querySelector("input").value;
    const url = "https://www.balldontlie.io/api/v1/players";
    const playerName = url + `?search=${name}`;

    const response = await axios.get(playerName);

    // Player Name
    const playerName2 = document.querySelector("#playerName2");
    playerName2.innerHTML = `Player Name
   : ${name}`;

    // Team Name
    const teamName = response.data.data[0].team.full_name;
    const teamName2 = document.querySelector("#teamName2");
    teamName2.innerHTML = `Team Name: ${teamName}`;

    //Position
    const positionData = response.data.data[0].position;
    const position = document.querySelector("#position");
    position.innerHTML = `Position: ${positionData}`;

    // Height
    const heightInFeet = response.data.data[0].height_feet;

    const heightInInches = response.data.data[0].height_inches;

    const height = document.querySelector("#height");
    height.innerHTML = `Height: ${heightInFeet}ft ${heightInInches}inches`;
    const feetAndInches = `${heightInFeet}ft ${heightInInches}in`;

    // Weight
    const weightInLbs = response.data.data[0].weight_pounds;
    const weight = document.querySelector("#weight");
    weight.innerHTML = `Weight: ${weightInLbs}lbs`;
    playerListArray.push({
      url: getGiphy(),
      playerName: name,
      teamName: teamName,
      position: positionData,
      height: feetAndInches,
      weight: weightInLbs,
    });
    console.log(playerListArray);
  } catch (error) {
    console.log(`this is an ${error}`);
  }
};

// creating submit button
const submit = document.querySelector("button");
submit.addEventListener("click", getGiphy);

submit.addEventListener("click", getPlayer);

// creating li
const listPlayer = document.querySelector("#player-container");

// creating list
function clickSubmit(e) {
  e.preventDefault();

  let divPlayerName = document.createElement("div");

  let pTag = document.createElement("p");

  let name2 = document.querySelector("input").value;
  pTag.innerHTML = name2;

  divPlayerName.append(pTag);
  console.log(divPlayerName);

  divPlayerName.append(createDeleteButton());

  if (name2 !== "") {
    listPlayer.append(divPlayerName);
  }
  name2 = "";
}

// Create Delete Button
function createDeleteButton() {
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  submit.addEventListener("click", createDeleteButton);
  deleteButton.addEventListener("click", deleteListItem);
  return deleteButton;
}

submit.addEventListener("click", clickSubmit);

//
function deleteListItem() {
  this.parentNode.remove();
}

// function createButton() {}
