(function () {
  'use strict';

  var forms = document.querySelectorAll('[data-reading-answer]');
  if (!forms.length) return;

  forms.forEach(function (form) {
    var answerId = form.getAttribute('data-reading-answer');
    var textarea = form.querySelector('textarea');
    var status = form.querySelector('.answer-status');
    var storageKey = 'italianoConMartin:readingAnswer:' + answerId;

    try {
      var savedAnswer = localStorage.getItem(storageKey);
      if (savedAnswer) {
        textarea.value = savedAnswer;
        status.textContent = 'Risposta recuperata da questo dispositivo.';
      }
    } catch (error) {
      status.textContent = 'Il salvataggio locale non è disponibile in questo browser.';
    }

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var answer = textarea.value.trim();

      if (!answer) {
        status.textContent = 'Scrivi una risposta prima di salvarla.';
        textarea.focus();
        return;
      }

      try {
        localStorage.setItem(storageKey, answer);
        status.textContent = 'Risposta salvata su questo dispositivo.';
      } catch (error) {
        status.textContent = 'Non è stato possibile salvare la risposta.';
      }
    });
  });
})();
