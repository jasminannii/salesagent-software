// Griaßdi – übernimmt eine per Rechtsklick markierte Nummer in die Seitenleiste
(function () {
  if (!window.chrome || !chrome.storage || !chrome.storage.session) return;
  function take(q) {
    if (!q || !window.GriassdiApp) return;
    window.GriassdiApp.quickLead(q.tel, q.title);
    chrome.storage.session.remove('quick');
  }
  chrome.storage.session.get('quick').then(r => take(r.quick)).catch(() => {});
  chrome.storage.onChanged.addListener((changes, area) => {
    if (area === 'session' && changes.quick && changes.quick.newValue) take(changes.quick.newValue);
  });
})();
