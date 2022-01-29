// Vibrates the device depending on a provided morse string

function vibrate() {    // Morse code string has SPACES in between each letter, DOUBLE SPACES in between each word
    let morseString = document.getElementById("userInput").value;
    document.getElementById("test").innerHTML = morseString;

    let vibeArr = []
    for(let k = 0; k < morseString.length; k++) {
        let c = morseString.charAt(k)

        if(c == ".") {
            vibeArr.push(100)
            vibeArr.push(30)
        }
        else if(c == "-") {
            vibeArr.push(200)
            vibeArr.push(30)
        }
        else
            vibeArr.push(500)
    }

    if (!window) {
        return;
    }

    if (!window.navigator) {
        return;
    }

    if (!window.navigator.vibrate) {
        return;
    }

    window.navigator.vibrate(vibeArr);
    document.getElementById("test1").innerHTML = vibeArr.toString();

}
