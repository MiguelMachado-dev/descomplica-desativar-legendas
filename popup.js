document.getElementById('toggleExtension').addEventListener('change', (event) => {
  browser.storage.local.set({ enabled: event.target.checked });

  if (event.target.checked) {
    // Envia uma mensagem para o script de conteúdo quando a extensão é ativada
    browser.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      browser.tabs.sendMessage(tabs[0].id, { action: 'checkAndClickButton' });
    });
  }
});

browser.storage.local.get('enabled', (data) => {
  document.getElementById('toggleExtension').checked = data.enabled !== false;
});