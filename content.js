function checkAndClickButton() {
  if (typeof browser === 'undefined') {
    var browser = chrome;
  }

  browser.storage.local.get('enabled', (data) => {
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