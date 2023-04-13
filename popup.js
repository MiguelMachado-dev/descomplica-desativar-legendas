const toggleExtension = document.getElementById('toggleExtension');

function updateState() {
  browser.storage.local.set({ enabled: toggleExtension.checked });
}

toggleExtension.addEventListener('change', updateState);

browser.storage.local.get('enabled', (data) => {
  toggleExtension.checked = data.enabled !== undefined ? data.enabled : true;
});