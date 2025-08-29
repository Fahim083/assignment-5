
let heartCount = 0;

  const heartDisplay = document.getElementById("heart-count");
  const heartButtons = document.querySelectorAll(".heart-button")

  heartButtons.forEach(button => {
    button.addEventListener("click", () => {
      heartCount++;
      if (heartDisplay) heartDisplay.innerText = heartCount;
      console.log("Total hearts:", heartCount)
    });
  });

  

  const coinDisplay = document.querySelector(".coin-count")
  let coins = parseInt(coinDisplay.innerText)
  const callButtons = document.querySelectorAll(".call-button")
  
  const historyContainer = document.querySelector(".call-history")
  
  callButtons.forEach(button => {
    button.addEventListener("click", () => {
     
      if (coins >= 20) {
        coins -= 20; 
        coinDisplay.innerText = coins;

           const card = button.closest(".card");
      if (card) {
          const cardTitle = card.querySelector(".card-title");
          const cardNumber = card.querySelector(".card-number");
          if (cardTitle && cardNumber) {
             const time = new Date().toLocaleTimeString();
               const entry = document.createElement("div");
        entry.className = "bg-gray-100 rounded-lg p-3 mt-3 flex justify-between items-center";
        entry.innerHTML = `
          <div>
            <h3 class="font-bold text-sm">${cardTitle.innerText}</h3>
            <p class="text-sm">${cardNumber.innerText}</p>
          </div>
          <p class="text-sm text-gray-500">${time}</p>
        `;
        historyContainer.appendChild(entry);

              console.log("Clicked card title:" + cardTitle.innerText);
              alert("The " + cardTitle.innerText + " number is " + cardNumber.innerText);
            }
            // if (cardNumber) {
            //     console.log("Clicked card title:" + cardNumber.innerText);
            // }
        }
      } else {
        alert("Not enough coins to make a call!");
      }
    });
  });



const clearHistoryButton = document.getElementById("clear-history");
  clearHistoryButton.addEventListener("click", () => {
  historyContainer.innerHTML = "";
  alert("Call history cleared!");
});



let copyCount = 0; 
const copyButtons = document.querySelectorAll(".copy-button");
const copyDisplay = document.getElementById("copy-count");

copyButtons.forEach(button => {
  button.addEventListener("click", () => {
    copyCount++;

    if (copyDisplay) copyDisplay.innerText = copyCount; 

    alert("Copied! Total copies: " + copyCount);

    const card = button.closest(".card"); 
    if (card) {
      const cardNumber = card.querySelector(".card-number");
      if (cardNumber) {
        navigator.clipboard.writeText(cardNumber.innerText)
          .then(() => {
            console.log('Text copied to clipboard');
          })
          .catch(err => {
            console.error('Error in copying text: ', err);
          });
      }
    }
  });
});

