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

function linksNextPrevious(){
    const linkNext = document.getElementById('linkNext');
    const linkPrevious = document.getElementById('linkPrevious');

    // Obter o caminho da URL atual
    const path = window.location.pathname;
    // Extrair o nome do arquivo da URL
    //console.log("teste: ", path);
    const fileName = path.substring(path.lastIndexOf('/') + 1);
    //console.log("fileName: ", fileName);

    // Extrair o número do nome do arquivo
    if(!fileName || fileName == "index.html"){
        linkNext.href = "2.html";
    } else {

        const currentNumber = parseInt(fileName.match(/(\d+)(?=\.html$)/)[0]);
        //console.log("currentNumber: ", currentNumber);
        
        // Criar o novo nome de arquivo
        const nextFileName = fileName.replace(currentNumber, currentNumber+1);
        const previousFileName = fileName.replace(currentNumber, currentNumber-1);

        if(currentNumber > 0) {  linkPrevious.href = previousFileName;  }
        //console.log("currentNumber: ", currentNumber);

        linkNext.href = nextFileName; 
        //console.log("nextFileName: ", nextFileName);
        //console.log("previousFileName: ", previousFileName);
    }

}

//window.onload = linksNextPrevious();
