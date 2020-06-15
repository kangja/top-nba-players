let playerListArray = [];
let num = 0;
const giphyImg = document.querySelector("#image");

// Get Giphy
const getGiphy = async () => {
  try {
    const nameTwo = document.querySelector("input").value;
    const urlTwo = "https://api.giphy.com/v1/gifs/search";
    const apiKey = "6QonJK5XS8DaWTExlkhPXmM4DTyFXcLA";
    const finalUrl = `${urlTwo}?api_key=${apiKey}&q=${nameTwo}&limit=10&offset=0&rating=G&lang=en`;

    const responseTwo = await axios.get(finalUrl);

    const url = responseTwo.data.data[0].images.original.url;
    giphyImg.src = url;
    giphyImg.style.width = "300px";
    giphyImg.style.height = "200px";
    giphyImg.style.border = "6px ridge #f5d580";
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
    playerName2.innerHTML = `<div class="data-container1"><strong id="player-strong">Player Name:</strong><span id="player-name">${name}</span></div>`;
    playerName2.style.border = "6px ridge #767EA3";
    playerName2.style.width = "191px";
    playerName2.style.backgroundColor = "#767EA3";

    // Team Name
    const teamName = response.data.data[0].team.full_name;
    const teamName2 = document.querySelector("#teamName2");
    teamName2.innerHTML = `<div id="data-container2"><strong id="team-strong">Team Name:</strong> <span id="team-name">${teamName}</span></div>`;
    teamName2.style.border = "6px ridge #388EC6";
    teamName2.style.backgroundColor = "#388EC6";

    //Position
    const positionData = response.data.data[0].position;
    const position = document.querySelector("#position");
    position.innerHTML = `<div id="data-container3"><strong id = "position-strong">Position:</strong> <span id="position-span">${positionData}</span></div>`;
    position.style.border = "6px ridge #2C5D69";
    position.style.backgroundColor = "#2C5D69";

    // Height
    const heightInFeet = response.data.data[0].height_feet;
    const heightInInches = response.data.data[0].height_inches;

    const height = document.querySelector("#height");
    height.innerHTML = `<div id="data-container4"><strong id="height-strong">Height:</strong> <span id="height-span">${heightInFeet}ft ${heightInInches}inches</span></div>`;
    height.style.border = "6px ridge #848292";
    height.style.backgroundColor = "#848292";

    // Weight
    const weightInLbs = response.data.data[0].weight_pounds;
    const weight = document.querySelector("#weight");
    weight.innerHTML = `<div id="data-container5"><strong id="weight-strong">Weight:</strong> <span id="weight-span">${weightInLbs}lbs</span></div>`;
    weight.style.border = "6px ridge #b39f86";
    weight.style.backgroundColor = "#b39f86";

    playerListArray.push({
      url: giphyImg.src,
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
    // e is whatever i'm clicking in html and it shows what's
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
  image.src = playerListArray[num].url;

  const playerName2 = document.querySelector("#playerName2");
  playerName2.innerHTML = playerListArray[num].playerName;

  const teamName2 = document.querySelector("#teamName2");
  teamName2.innerHTML = playerListArray[num].teamName;

  const position = document.querySelector("#position");
  position.innerHTML = playerListArray[num].position;

  const height = document.querySelector("#height");
  height.innerHTML = playerListArray[num].height;

  const weight = document.querySelector("#weight");
  weight.innerHTML = playerListArray[num].weight;
}
