function beginCapture(msg) {
    alert(msg);
}

chrome.runtime.onMessage.addListener(beginCapture);
