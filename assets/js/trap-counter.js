document.addEventListener('DOMContentLoaded', () => {
  const countElement = document.getElementById('trap-visit-count');
  if (!countElement) return;

  const counterUrl = 'https://api.counterapi.dev/v1/musan-haowu-github-io/onlyfans-trap-visits/';
  const sessionKey = 'onlyfans-trap-counted';
  let alreadyCounted = false;

  try {
    alreadyCounted = sessionStorage.getItem(sessionKey) === 'true';
  } catch (_error) {
    // Some privacy modes disable session storage; counting can still continue.
  }

  fetch(alreadyCounted ? counterUrl : `${counterUrl}up`)
    .then((response) => {
      if (!response.ok) throw new Error(`Counter request failed: ${response.status}`);
      return response.json();
    })
    .then((data) => {
      countElement.textContent = Number(data.count).toLocaleString();

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
