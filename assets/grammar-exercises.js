(function () {
  const exercises = [...document.querySelectorAll('.exercise')];
  if (!exercises.length) return;

  const lessonId = document.body.dataset.lesson || location.pathname.replace(/[^\w-]+/g, '-');
  const scoreText = document.getElementById('score-text');
  const scorePercent = document.getElementById('score-percent');
  const compactScore = document.getElementById('score');
  const dbName = 'italiano-con-martin';
  const storeName = 'grammar-progress';

  function norm(value) {
    return value.trim().toLowerCase().replace(/[.,!?]/g, '').replace(/\s+/g, ' ');
  }

  function legacyKey(index) {
    return `${lessonId}-${index}`;
  }

  function openDb() {
    if (!('indexedDB' in window)) return Promise.resolve(null);

    return new Promise((resolve) => {
      const request = indexedDB.open(dbName, 1);

      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains(storeName)) {
          db.createObjectStore(storeName, { keyPath: 'lessonId' });
        }
      };

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => resolve(null);
      request.onblocked = () => resolve(null);
    });
  }

  function readProgress(db) {
    if (!db) return Promise.resolve(readLegacyProgress());

    return new Promise((resolve) => {
      const tx = db.transaction(storeName, 'readonly');
      const store = tx.objectStore(storeName);
      const request = store.get(lessonId);

      request.onsuccess = () => resolve(request.result || readLegacyProgress());
      request.onerror = () => resolve(readLegacyProgress());
    });
  }

  function writeProgress(db) {
    const answers = exercises.map((box) => {
      const input = box.querySelector('input');
      return input ? input.value : '';
    });
    const score = exercises.filter((box) => box.dataset.correct === '1').length;
    const progress = {
      lessonId,
      answers,
      score,
      total: exercises.length,
      updatedAt: new Date().toISOString(),
    };

    writeLegacyProgress(progress);
    if (!db) return;

    const tx = db.transaction(storeName, 'readwrite');
    tx.objectStore(storeName).put(progress);
  }

  function clearProgress(db) {
    clearLegacyProgress();
    if (!db) return;

    const tx = db.transaction(storeName, 'readwrite');
    tx.objectStore(storeName).delete(lessonId);
  }

  function readLegacyProgress() {
    const answers = exercises.map((_, index) => localStorage.getItem(legacyKey(index)) || '');
    return {
      lessonId,
      answers,
      score: Number(localStorage.getItem(`${lessonId}-score`) || 0),
      total: exercises.length,
      updatedAt: null,
    };
  }

  function writeLegacyProgress(progress) {
    progress.answers.forEach((answer, index) => {
      if (answer) {
        localStorage.setItem(legacyKey(index), answer);
      } else {
        localStorage.removeItem(legacyKey(index));
      }
    });
    localStorage.setItem(`${lessonId}-score`, String(progress.score));
  }

  function clearLegacyProgress() {
    exercises.forEach((_, index) => localStorage.removeItem(legacyKey(index)));
    localStorage.removeItem(`${lessonId}-score`);
  }

  function updateScore(db) {
    const correct = exercises.filter((box) => box.dataset.correct === '1').length;
    if (scoreText) scoreText.textContent = `${correct} risposte corrette su ${exercises.length}`;
    if (scorePercent) scorePercent.textContent = `${Math.round((correct / exercises.length) * 100)}%`;
    if (compactScore) compactScore.textContent = `${correct}/${exercises.length}`;
    writeProgress(db);
  }

  function checkExercise(box, db) {
    const input = box.querySelector('input');
    const feedback = box.querySelector('.feedback');
    if (!input || !feedback) return;

    const accepted = [box.dataset.answer, ...(box.dataset.alt || '').split('|')].map(norm).filter(Boolean);
    const value = norm(input.value);

    box.dataset.correct = '0';
    input.classList.remove('correct', 'wrong');
    feedback.className = 'feedback';

    if (!value) {
      feedback.textContent = '';
      updateScore(db);
      return;
    }

    if (accepted.includes(value)) {
      box.dataset.correct = '1';
      input.classList.add('correct');
      feedback.classList.add('ok');
      feedback.textContent = 'Corretto!';
    } else if (accepted.some((answer) => answer.startsWith(value))) {
      feedback.classList.add('wait');
      feedback.textContent = 'Continua...';
    } else {
      input.classList.add('wrong');
      feedback.classList.add('no');
      feedback.textContent = `Non ancora. ${box.dataset.hint || 'Rileggi la regola.'}`;
    }

    updateScore(db);
  }

  openDb().then((db) => {
    readProgress(db).then((progress) => {
      exercises.forEach((box, index) => {
        const input = box.querySelector('input');
        if (!input) return;

        input.addEventListener('input', () => checkExercise(box, db));

        if (progress.answers[index]) {
          input.value = progress.answers[index];
          checkExercise(box, db);
        }
      });

      const reset = document.getElementById('reset-exercises');
      if (reset) {
        reset.addEventListener('click', () => {
          exercises.forEach((box) => {
            const input = box.querySelector('input');
            if (!input) return;
            input.value = '';
            checkExercise(box, db);
          });
          clearProgress(db);
          updateScore(db);
        });
      }

      updateScore(db);
    });
  });
})();
