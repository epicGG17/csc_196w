/*
 * Starter file 
 */
(function() {
    "use strict";

    /**
     * The starting point in our program, setting up a listener
     * for the "load" event on the window, signalling the HTML DOM has been constructed
     * on the page. When this event occurs, the attached function (init) will be called.
     */
    window.addEventListener("load", init);

    /**
     * TODO: Write a function comment using JSDoc.
     */
    function init() {
        // Note: In this function, we usually want to set up our event handlers
        // for UI elements on the page.
        console.log("Window loaded!");
        var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        let reset = document.getElementById("reset");
        let encrypBtn = document.getElementById("encrypt-it");
        let cypherType = document.getElementById("cipher-type")
        let userText = document.getElementById("input-text");
        let result = document.getElementById("result");
        let allCaps = document.getElementById("all-caps");
        let resetBtn = document.getElementById("reset");



        encrypBtn.onclick = handleClick;
        resetBtn.onclick = resetAll;

        function handleClick() {
            console.log("You Click me!");
            console.log(cypherType.value); //shift or random
            console.log(userText.value);
            let text = userText.value;
            if (cypherType.value == "shift") {
                text = shiftCipher(text);
                console.log(text);
                //result.innerHTML = text;

            }
            if (cypherType.value == "random") {
                console.log("here1");
                text = randomCipher(text);
                console.log(text);
                //result.innerHTML = text;
            }
            console.log(allCaps.checked);
            if (allCaps.checked == true) {
                text = text.toUpperCase();
            }
            result.innerHTML = text;

        }

        function shiftCipher(text) {
            //text = text.toLowerCase();
            let result = "";
            /*
            for (let i = 0; i < text.length; i++) {
                if (text[i] < 'a' || text[i] > 'z') {
                    result += text[i];
                } else if (text[i] == 'z') {
                    result += 'a';
                } else { // letter is between 'a' and 'y'
                    let letter = text.charCodeAt(i);
                    let resultLetter = String.fromCharCode(letter + 1);
                    result += resultLetter;
                }
            }
            */
            for (let i = 0; i < text.length; i++) {
                if (text[i] >= 'A' && text[i] < 'Z') {

                    result += String.fromCharCode(text[i].charCodeAt() + 1);

                } else if (text[i] >= 'a' && text[i] < 'z') {
                    result += String.fromCharCode(text[i].charCodeAt() + 1);

                } else if (text[i] == 'z') {
                    result += 'a';
                } else if (text[i] == 'Z') {
                    result += 'A';
                }
            }
            return result;
        }

        function randomCipher(text) {
            text = text.toLowerCase();
            let result = "";
            for (let i = 0; i < text.length; i++) {
                result += characters.charAt(Math.floor(Math.random() * characters.length));

            }
            return result;
        }

        function resetAll() {
            console.log("reset");
            let text = userText.value;
            text = "";
            userText.innerHTML = text;
        }


    }

    // Add any other functions in this area (you should not implement your
    // entire program in the init function, for similar reasons that
    // you shouldn't write an entire Java program in the main method).

})();