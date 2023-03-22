document.addEventListener('DOMContentLoaded', () => {
    document.getElementsByTagName('button').addEventListener(() => {
        postMessage('hehehe', '*');
    });
});

function beginCapture(msg) {
    alert(msg);
}

chrome.runtime.onMessage.addListener(beginCapture);
