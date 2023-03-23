document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('button').addEventListener('click', () => {
        postMessage({ text: 'hehehe', number: 777 }, 'https://fumito80.github.io');
    });
});

function beginCapture(msg) {
    alert(msg);
}

// chrome.runtime.onMessage.addListener(beginCapture);
