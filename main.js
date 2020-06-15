// PlayerListArray is set to an empty array so that later I could push data here and access them later.

// Num is set to 0 as of now because it will be used as a global variable and is subject to changed.
let playerListArray = [];
let num = 0;
const giphyImg = document.querySelector("#image");

// Get GIFs for specific players. It allows users to get specific GIFs for players that users type in a search bar.
const getGiphy = async () => {
  try {
    const nameTwo = document.querySelector("input").value;
    const urlTwo = "https://api.giphy.com/v1/gifs/search";
    const apiKey = "6QonJK5XS8DaWTExlkhPXmM4DTyFXcLA";
    const finalUrl = `${urlTwo}?api_key=${apiKey}&q=${nameTwo}&limit=10&offset=0&rating=G&lang=en`;

    const responseTwo = await axios.get(finalUrl);

    const url = responseTwo.data.data[0].images.original.url;
    // Styling GIFs
    giphyImg.src = url;
    giphyImg.style.width = "300px";
    giphyImg.style.height = "200px";
    giphyImg.style.border = "6px ridge #f5d580";
    giphyImg.style.borderRadius = "25% 15%";
  } catch (error) {
    console.log(`this is an ${error}`);
  }
};

// Get Player Data. Users search for their favorite players' name in a search bar and it will render player's name, team name, position, height, and weight on page.
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
    playerName2.style.borderRadius = "25% 15%";

    // Team Name
    const teamName = response.data.data[0].team.full_name;
    const teamName2 = document.querySelector("#teamName2");
    teamName2.innerHTML = `<div id="data-container2"><strong id="team-strong">Team Name:</strong> <span id="team-name">${teamName}</span></div>`;
    teamName2.style.border = "6px ridge #388EC6";
    teamName2.style.backgroundColor = "#388EC6";
    teamName2.style.borderRadius = "25% 15%";

    //Position
    const positionData = response.data.data[0].position;
    const position = document.querySelector("#position");
    position.innerHTML = `<div id="data-container3"><strong id = "position-strong">Position:</strong> <span id="position-span">${positionData}</span></div>`;
    position.style.border = "6px ridge #2C5D69";
    position.style.backgroundColor = "#2C5D69";
    position.style.borderRadius = "25% 15%";

    // Height
    const heightInFeet = response.data.data[0].height_feet;
    const heightInInches = response.data.data[0].height_inches;
    const height = document.querySelector("#height");
    height.innerHTML = `<div id="data-container4"><strong id="height-strong">Height:</strong> <span id="height-span">${heightInFeet}ft ${heightInInches}inches</span></div>`;
    height.style.border = "6px ridge #848292";
    height.style.backgroundColor = "#848292";
    height.style.borderRadius = "25% 15%";

    // Weight
    const weightInLbs = response.data.data[0].weight_pounds;
    const weight = document.querySelector("#weight");
    weight.innerHTML = `<div id="data-container5"><strong id="weight-strong">Weight:</strong> <span id="weight-span">${weightInLbs}lbs</span></div>`;
    weight.style.border = "6px ridge #b39f86";
    weight.style.backgroundColor = "#b39f86";
    weight.style.borderRadius = "25% 15%";

    // I'm pushing all the data to the empty array variable(playerListArray) that I declared in the beginning so that I could access them when I click back and forth on the players.
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

//Creating a submit button.
const submit = document.querySelector("button");
submit.addEventListener("click", getGiphy);
submit.addEventListener("click", getPlayer);

//Selecting #player-container
const listPlayer = document.querySelector("#player-container");

// Creating a list of names on the left side.
function clickSubmit(e) {
  e.preventDefault();

  // This function allows users to only create up to 10 players. If the length of columns is equal to or more than 10, it stops creating the list.
  const columns = document.querySelectorAll(".columns");
  if (columns.length >= 10) {
    return null;
  }

  let divPlayerName = document.createElement("div");
  divPlayerName.className = "columns";
  // Setting the value of id to playerListArray's length that is converted to string.
  divPlayerName.setAttribute("id", playerListArray.length.toString());
  console.log(divPlayerName);

  let pTag = document.createElement("p");

  let name2 = document.querySelector("input").value;

  pTag.innerHTML = name2;

  divPlayerName.append(pTag);

  divPlayerName.append(createDeleteButton());

  divPlayerName.addEventListener("click", replaceValues);

  // I got the function template from stackoverflow. (URL: https://stackoverflow.com/questions/9012537/how-to-get-the-element-clicked-for-the-whole-document?fbclid=IwAR1HJCp7BGttzLAs-SB1TTY3v2aaKxXHFTxpj7KdIVFW35ycbnTpDcCIcWA)

  // The function allows me to get the current element(whatever element that is) in an HTML document that I clicked. E is whatever I'm clicking in HTML and it will save the value of the clicked element's id in a variable so that I could access it later.

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

  // If the input value is not empty, it will append the div and its innerHTML to listPlayer.
  if (name2 !== "") {
    listPlayer.append(divPlayerName);
  }
  name2 = "";
}

// Creating a delete button
function createDeleteButton() {
  let deleteButton = document.createElement("button");
  deleteButton.id = "delete";
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", deleteListItem);
  return deleteButton;
}

//Deleting player names
function deleteListItem() {
  this.parentNode.remove();
}

submit.addEventListener("click", clickSubmit);

// When other player's name is clicked, it replaces values with the clicked player's gif and data.
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
