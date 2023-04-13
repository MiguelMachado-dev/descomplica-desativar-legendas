const api = typeof browser !== 'undefined' ? browser : chrome;

document.getElementById('toggleExtension').addEventListener('change', (event) => {
  api.storage.local.set({ enabled: event.target.checked });

  if (event.target.checked) {
    // Envia uma mensagem para o script de conteúdo quando a extensão é ativada
    api.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      api.tabs.sendMessage(tabs[0].id, { action: 'checkAndClickButton' });
    });
  }
});

api.storage.local.get('enabled', (data) => {
  document.getElementById('toggleExtension').checked = data.enabled !== false;
});
