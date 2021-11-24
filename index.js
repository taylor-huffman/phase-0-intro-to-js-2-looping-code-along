// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     }
//     return gifts;
// }

// wrapGifts(gifts);

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     let i = 0;
//     while (i < gifts.length) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         i++;
//     }
//     return gifts;
// }

// wrapGifts(gifts);

const thankYouCards = [];

function writeCards(name, event) {
    for (let i = 0; i < name.length; i++) {
        thankYouCards.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouCards;
}

// writeCards(["Lisa", "Kaitlin", "Jan"], "surprise");

function countDown(integer) {
    let i = 0;
    while (i <= integer) {
        console.log(integer);
        integer--;
    }
}