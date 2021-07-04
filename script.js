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


let total = 0;

// right waY is to use the eventlistener on the submit of the form
const doThis = (event) => {
    
    event.preventDefault();

    // console logged the input from the user
    const data = new FormData(document.querySelector("form"));

    const numberOfCoins = Number(data.get("howMany")); 
    console.log(numberOfCoins);
    
    const valueOfCoin = Number(data.get("typeOfCoin"));
    console.log(valueOfCoin);

    const nameOfCoin = typeOfCoin.selectedOptions[0].innerText;
    console.log(nameOfCoin);
  
    
    for (let i = 1; i <= numberOfCoins; i++) {
        
        let someCoin = `<div class="coin ${nameOfCoin}" value="${valueOfCoin}"><p>${nameOfCoin}</p></div>`;
        document.querySelector("#newCoins").innerHTML += someCoin;
        
    };

    total += (valueOfCoin * numberOfCoins) / 100;
    console.log(total.toFixed(2));
    document.querySelector(".totalMade").innerText = total.toFixed(2);
};

document.querySelector("form").addEventListener("submit", doThis)


document.querySelector("#newCoins").addEventListener("click", (e) => {
    if (e.target.classList.contains("coin")) {
        // console.log(this);
        e.target.remove();

        total -= Number(e.target.attributes.value.value) / 100;
        console.log(total.toFixed(2))
        document.querySelector(".totalMade").innerText = total.toFixed(2);
    }
});

