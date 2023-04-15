const title = document.querySelector(".title");
const quote = document.querySelector(".quote");
const diceButton = document.querySelector(".dice-button");

async function fetchQuote() {
  try {
    diceButton.disabled = true;
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();

    title.innerHTML = `advice #${data.slip.id}`;
    quote.innerHTML = `“${data.slip.advice}”`;
  } catch (err) {
    console.error(err.message);
  } finally {
    diceButton.disabled = false;
  }
}

diceButton.addEventListener("click", fetchQuote);
