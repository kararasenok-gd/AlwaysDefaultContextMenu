chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed and active.");
});

chrome.scripting.registerContentScripts([
  {
    id: "enableContextMenu",
    matches: ["<all_urls>"],
    js: ["content.js"],
    runAt: "document_start"
  }
]);
