var tidbits = ["It's okay to make mistakes, as long as you learn from them. The same applies to math!", "Make sure you have a writing tool and something to write on ready just in case!", "Get a question wrong? Think it over, check your work, and find out why so you won't make the mistake again!", "Math is used in many everyday situations, and you may not even realize it!", "'A math student's best friend is BOB (the Back Of the Book), but remember that BOB doesn't come to school on test days.' -Josh Folb"];

var funFacts = ["Think of a number. Double it. Add six. Half it. Take away the number you started with. Your answer is three.", "Parallel lines have so much in common...it's a shame that they'll never meet.", "People hate when they are taking a math test and their answer is nowhere near the multiple choices.", "There is a fine line between numerator and denominator.", "Math is awesome. It has pi."];

setInterval(changetip(), 5000);

function changetip() {
    setFunFact();
    setTidbit();
}

function setTidbit() {
    document.getElementById("tidbit_display").innerHTML = tidbits[Math.floor(Math.random() * tidbits.length)];
}

function setFunFact() {
    document.getElementById("funfact_display").innerHTML = funFacts[Math.floor(Math.random() * funFacts.length)];
}