// Minimal interaction: log and small keyboard shortcut to email
document.addEventListener('keydown', e => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'e') {
    window.location.href = 'mailto:alokbarmanus@gmail.com';
  }
});
