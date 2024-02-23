document.addEventListener("DOMContentLoaded", function() {
    const inputText = document.getElementById("input-text");
    const outputText = document.getElementById("output-text");
    const encryptButton = document.getElementById("encrypt-button");
    const decryptButton = document.getElementById("decrypt-button");
    const copyButton = document.getElementById("copy-button");
    const clearButton = document.getElementById("clear-button");

    const keys = {
        "e": "enter",
        "i": "imes",
        "a": "ai",
        "o": "ober",
        "u": "ufat"
    };

    function encrypt(text) {
        let encrypted = "";
        for (let char of text) {
            if (char in keys) {
                encrypted += keys[char];
            } else {
                encrypted += char;
            }
        }
        return encrypted;
    }

    function decrypt(text) {
        let decrypted = "";
        let i = 0;
        while (i < text.length) {
            let char = text[i];
            if (char in keys) {
                let word = text.slice(i, i + keys[char].length);
                if (keys[char] === word) {
                    decrypted += char;
                    i += keys[char].length;
                } else {
                    decrypted += char;
                    i++;
                }
            } else {
                decrypted += char;
                i++;
            }
        }
        return decrypted;
    }

    encryptButton.addEventListener("click", function() {
        const text = inputText.value;
        const encryptedText = encrypt(text);
        outputText.value = encryptedText;
    });

    decryptButton.addEventListener("click", function() {
        const text = inputText.value;
        const decryptedText = decrypt(text);
        outputText.value = decryptedText;
    });

    copyButton.addEventListener("click", function() {
        outputText.select();
        document.execCommand("copy");
        alert("Texto copiado para a área de transferência!");
    });

    
    clearButton.addEventListener("click", function() {
        inputText.value = "";
        outputText.value = "";
    });
});
