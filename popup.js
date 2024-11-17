document.getElementById("darkModeToggle").addEventListener("change", (event) => {
  const darkMode = event.target.checked;
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: setDarkMode,
      args: [darkMode]
    });
  });
});

function setDarkMode(darkMode) {
  if (darkMode) {
    document.body.style.filter = "invert(1) hue-rotate(180deg)";
  } else {
    document.body.style.filter = "none";
  }
}
