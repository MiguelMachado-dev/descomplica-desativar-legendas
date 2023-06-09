const api = typeof browser !== 'undefined' ? browser : chrome;

function checkAndClickButton() {
  api.storage.local.get('enabled', (data) => {
    if (data.enabled === false) {
      return;
    }

    const button = document.querySelector('[aria-label="Desabilitar legendas"]');

    if (button) {
      if (button.classList.contains('playkit-cc-on')) {
        button.click();
      }
    } else {
      setTimeout(checkAndClickButton, 1000);
    }
  });
}

checkAndClickButton();

// Escuta a mensagem do popup
api.runtime.onMessage.addListener((message) => {
  if (message.action === 'checkAndClickButton') {
    checkAndClickButton();
  }
});
