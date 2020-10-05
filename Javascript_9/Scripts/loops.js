
let colors = ["yellow", "blue", "red", "orange"]

//While Loop
let i = 0;
while (i < colors.length) {
    console.log(colors[i++])
}

//For Loop
for (i = 0; i < colors.length; i++) {
    console.log(colors[i])
}

//Array method
colors.forEach(color => { console.log(color) });

//Array method
colors.forEach(color => {
    console.log(color)
});

/*
vraag1:
while loops nemen 3 regels in beslag.
for loops nemen 2 regels in beslag.


vraag2:
forEach method neemt 1/2 regel(s) in beslag.

vraag3: waarom een forEach method gebruiken ten opzichte van een for/while loop?
-minder code om te typen (makkelijker leesbaar)
-je hoeft geen variabel, condition en incrementer vast te stellen
-minder kans op fouten (off-by-one-bug/error)

*/



//vraag4 Looping through an object?
let moreColors = {
    color1: "yellow",
    color2: "blue",
    color3: "red",
    color4: "orange",
    color5: "purple",
}

//console the keys
console.log(Object.keys(moreColors))

//console log the keys and values
console.log(Object.entries(moreColors))

//for-in loop
for (colorName in moreColors) {
    console.log(`key= ${colorName} value = ${moreColors[colorName]}`)
}