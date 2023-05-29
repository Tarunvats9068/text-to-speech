document.addEventListener('DOMContentLoaded', function() {
    var speakButton = document.getElementById('speak-btn');
    var textInput = document.getElementById('exampleFormControlTextarea1');
  
    speakButton.addEventListener('click', function() {
      var text = textInput.value;
      textInput.value = "";
      if (text !== '') {
        speak(text);
      }
    });
    function speak(text) {
      var utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
    }
  });
  