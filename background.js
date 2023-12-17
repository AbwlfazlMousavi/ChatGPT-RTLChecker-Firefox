chrome.action.onClicked.addListener((tab) => {
    if(tab.url.includes("chat.openai.com")) {
        chrome.tabs.executeScript(tab.id, {
            file: 'content.js'
        });
    }
});
