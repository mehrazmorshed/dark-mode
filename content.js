chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.darkMode !== undefined) {
    document.body.style.filter = message.darkMode ? "invert(1) hue-rotate(180deg)" : "none";
  }
});
