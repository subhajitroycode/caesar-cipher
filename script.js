const cipher = document.getElementById('cipher');
cipher.onclick = () => {
    const message = document.getElementById('message').value.toUpperCase();
    if (message.length === 0) {
        alert('Please enter a message!');
        return;
    }
    const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'," ", "-", "_", ".", "&","?", "!", "@", "#", "/", ":", ";", ",", "*", "(", ")", "\"", "'", "|", "\\", "^", "[", "]", "{", "}", "`", "~", "=", "+", ">", "<"];
    const alphabet13 = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M', " ", "-", "_", ".", "&","?", "!", "@", "#", "/", ":", ";", ",", "*", "(", ")", "\"", "'", "|", "\\", "^", "[", "]", "{", "}", "`", "~", "=", "+", ">", "<"];
    let finalMessage = [];

    for(let i = 0; i < message.length; i++) {
        for(let j = 0; j < alphabet.length; j++) {
            if(message[i] === alphabet[j])
                finalMessage.push(alphabet13[j]);
            else
                continue;
        }
    }
    //alert(finalMessage.join(''));
    
    document.getElementById('final-message').innerText = finalMessage.join('');
    document.getElementById('final-message').style.visibility = 'visible';
}