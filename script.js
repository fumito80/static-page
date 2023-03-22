document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('button').addEventListener(() => {
        postMessage('hehehe', '*');
    });
});

function beginCapture(msg) {
    alert(msg);
}

chrome.runtime.onMessage.addListener(beginCapture);
