const cipher = document.getElementById("cipher");

const rot13 = (message) => {
  return message
    .split("")
    .map((char) => {
      // Check if character is a letter
      if (/[a-zA-Z]/.test(char)) {
        // Get the character code
        const code = char.charCodeAt(0);

        // Determine if it's uppercase or lowercase
        const isUpperCase = code >= 65 && code <= 90;

        // Get the base code (65 for uppercase 'A', 97 for lowercase 'a')
        const base = isUpperCase ? 65 : 97;

        // Apply ROT13 transformation and convert back to character
        // (code - base + 13) % 26 + base ensures we wrap around the alphabet
        return String.fromCharCode(((code - base + 13) % 26) + base);
      } else {
        // Return non-alphabetic characters unchanged
        return char;
      }
    })
    .join("");
};

cipher.onclick = () => {
  const message = document.getElementById("message").value;
  if (message.length === 0) {
    alert("Please enter a message!");
    return;
  }
  const finalMessage = rot13(message);

  document.getElementById("final-message").innerText = finalMessage;
  document.getElementById("final-message").style.visibility = "visible";
};
