let purse = 100;
let basePrice = 2;
let currentBid = basePrice;

document.getElementById("purse").innerText = purse;
document.getElementById("basePrice").innerText = basePrice;
document.getElementById("currentBid").innerText = currentBid;

function increaseBid() {
    if (purse > currentBid) {
        currentBid += 1;
        document.getElementById("currentBid").innerText = currentBid;
    } else {
        alert("Not enough purse!");
    }
}

function sold() {
    purse -= currentBid;
    document.getElementById("purse").innerText = purse;

    document.getElementById("result").innerText =
        "Player SOLD for ₹" + currentBid + " Cr";

    nextPlayer();
}

function unsold() {
    document.getElementById("result").innerText =
        "Player UNSOLD";

    nextPlayer();
}

function nextPlayer() {
    currentBid = basePrice;
    document.getElementById("currentBid").innerText = currentBid;
}
