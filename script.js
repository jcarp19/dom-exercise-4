"use strict";
// DOM LAB - MINI CHALLENGES - #2 MAKE MONEY
// const submitCoinForm = () => {
//     // add new div's (coins)
//       let numCoins = document.querySelector("#count").valueAsNumber;
//       console.log(numCoins);
//     // total value
//     let total;
  
//       for (let i = 1; i <= numCoins; i++) {
//           // return document.getElementById("money").appendChild(newDiv);
//           let newDiv = document.createElement("div");
//           newDiv.addEventListener("click", removeDiv);
//           newDiv.classList.add("coin");
//           newDiv.innerHTML = document.querySelector("#type").value;
//           document.getElementById("money").appendChild(newDiv);
//       };
//   };
//   const removeDiv = (e) => {
//       e.target.remove();
//   };

// IN CLASS WALK THROUGH 6/30
//   let thisCoin = document.createElement("div");
//   thisCoin.classList.add("coin");
//   thisCoin.innerHTML = "Penny";
//   document.querySelector("#newCoin").append(thisCoin);

//     document.querySelector("#addCoins").addEventListener("click", () => {
        
//         let newCoin = document.createElement("div");
        
//   });

// <<<<<wrong way to add an event listener>>>>> - SHOULD USE THE FORM AND LISTEN TO IT BEING SUBMITTED
// document.querySelector("#addCoins").addEventListener("click", (event) => {
//     event.preventDefault();
//     let penny = `<div class="coin"><p>Penny</p></div>`;
//     document.querySelector("#newCoin").innerHTML += penny;
// })

// right waY is to use the eventlistener on the submit of the form
const doThis = (event) => {
    
    event.preventDefault();

    
    // console logged the input from the user
    const data = new FormData(document.querySelector("form"));
    const numberOfCoins = data.get("howMany"); // USE NAME OF FORM
    console.log(numberOfCoins);
    
    const typeOfCoin = data.get("type2");
    console.log(typeOfCoin);
    
    for (let i = 1; i <= numberOfCoins; i++) {
        
        let someCoin = `<div class="coin ${typeOfCoin}"><p>${typeOfCoin}</p></div>`;
            document.querySelector("#newCoins").innerHTML += someCoin;
        newCoins.addEventListener("click", removeCoin)
    
    };
};
document.querySelector("form").addEventListener("submit", doThis)


const removeCoin = (e) => {
    e.target.remove();
}

// // add html
// let penny = `<div class="coin"><p>Penny</p></div>`;
// document.querySelector("#newCoin").innerHTML += penny;