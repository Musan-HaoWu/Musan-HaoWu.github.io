document.addEventListener('DOMContentLoaded', () => {
  const countElement = document.getElementById('trap-visit-count');
  if (!countElement) return;

  const namespace = 'musan-haowu.github.io';
  const key = 'onlyfans-trap-v2';
  const hitUrl = `https://abacus.jasoncameron.dev/hit/${namespace}/${key}`;

  // Every page load increments the counter (same browser, two visits = two hits).
  fetch(hitUrl)
    .then((response) => {
      if (!response.ok) throw new Error(`Counter request failed: ${response.status}`);
      return response.json();
    })
    .then((data) => {
      countElement.textContent = Number(data.value).toLocaleString();
    })
    .catch(() => {
      countElement.textContent = 'temporarily unavailable';
    });
});
