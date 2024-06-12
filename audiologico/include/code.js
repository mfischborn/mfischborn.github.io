function speak(text) {
    responsiveVoice.speak(text, "Brazilian Portuguese Female");
}

function setTextToSpeech() {
    const paragraphs = document.querySelectorAll('.tts'); //from p.tts
    paragraphs.forEach(p => {
        p.onclick = () => speak(p.innerText);
    });
}

let points = 0;

function checkAnswer(isCorrect, currentElement) {
    
    const lastParent = currentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
    const feedback = lastParent.querySelector('.feedback');
    console.log(feedback);
    
    const pointsDisplay = document.getElementById('points');
    if (isCorrect) {
        feedback.innerText = 'Correto!';
        //feedback.style.color = 'green';
        points++;
    } else {
        feedback.innerText = 'Incorreto. Tente novamente!';
        //feedback.style.color = 'red';
        points--;
    }
    pointsDisplay.innerText = 'Pontos: ' + points;
    speak(feedback.innerText);
    
}

// Initialize text-to-speech functionality
window.onload = setTextToSpeech;

