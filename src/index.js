function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}

function generatePoem(event) {
  event.preventDefault();
  let userInstructions = document.querySelector("#user-instuctions");
  let apiKey = "441fcacb9dt020b37114da0ba3e3f5of";
  let prompt = `User Instructions: Please generate a short poem about ${userInstructions.value}`;
  let context =
    "You are a poem writer and love to write short poems. Please follow user instructions. The poem should be 4 lines in length in basic html. The 4 lines should be inside a single <p> element and each line should be separated by a <br /> element. Do not include a title. Do not have more than one line of spacing between each line of the poem.  Sign the bottom of poem with 'SheCodes AI' in a <strong></strong> element.";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `⌛ Please wait,generating a poem about ${userInstructions.value}`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
