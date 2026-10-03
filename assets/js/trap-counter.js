document.addEventListener('DOMContentLoaded', () => {
  const countElement = document.getElementById('trap-visit-count');
  if (!countElement) return;

  // CounterAPI v1 was retired; Abacus is a drop-in public counter (no API key).
  const namespace = 'musan-haowu.github.io';
  const key = 'onlyfans-trap-visits';
  const getUrl = `https://abacus.jasoncameron.dev/get/${namespace}/${key}`;
  const hitUrl = `https://abacus.jasoncameron.dev/hit/${namespace}/${key}`;
  const sessionKey = 'onlyfans-trap-counted';
  let alreadyCounted = false;

  try {
    alreadyCounted = sessionStorage.getItem(sessionKey) === 'true';
  } catch (_error) {
    // Some privacy modes disable session storage; counting can still continue.
  }

  fetch(alreadyCounted ? getUrl : hitUrl)
    .then((response) => {
      if (!response.ok) throw new Error(`Counter request failed: ${response.status}`);
      return response.json();
    })
    .then((data) => {
      countElement.textContent = Number(data.value).toLocaleString();

      if (!alreadyCounted) {
        try {
          sessionStorage.setItem(sessionKey, 'true');
        } catch (_error) {
          // The displayed count is still valid when storage is unavailable.
        }
      }
    })
    .catch(() => {
      countElement.textContent = 'temporarily unavailable';
    });
});
