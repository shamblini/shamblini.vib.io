// Vibrates the device depending on a provided morse string

function vibrate() {    // Morse code string has SPACES in between each letter, DOUBLE SPACES in between each word
    let morseString = document.getElementById("userInput").value;
    document.getElementById("test").innerHTML = morseString;

    let vibeArr = []

    if(morseString.length != 0) {
        let prevChar = morseString.charAt(0);
        for(let k = 0; k < morseString.length; k++) {
            let c = morseString.charAt(k)

            if(c == ".") {
                vibeArr.push(250)
                vibeArr.push(250)
            }
            else if(c == "-") {
                vibeArr.push(750)
                vibeArr.push(250)
            }
            else if(c == " " && prevChar == " " && k != 0)
                vibeArr[vibeArr.length -1] += 1500
            else
                vibeArr[vibeArr.length -1] += 500
            prevChar = c;
        }
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
