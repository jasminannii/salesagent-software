// Griaßdi – Hintergrund: Seitenleiste per Klick aufs Symbol, Rechtsklick "Mit Griaßdi anrufen"
chrome.runtime.onInstalled.addListener(() => {
  chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true }).catch(() => {});
  chrome.contextMenus.create({ id: 'griassdi-call', title: 'Mit Griaßdi anrufen: „%s“', contexts: ['selection'] });
});
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId !== 'griassdi-call') return;
  // open() muss direkt im Klick passieren, sonst blockiert Chrome
  if (tab && tab.id != null) chrome.sidePanel.open({ tabId: tab.id }).catch(() => {});
  chrome.storage.session.set({ quick: { tel: (info.selectionText || '').trim(), title: (tab && tab.title) || '', ts: Date.now() } });
});
