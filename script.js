document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('button').addEventListener('click', () => {
        postMessage({ text: 'hehehe', number: 777 }, 'https://fumito80.github.io');
    });
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    ctx.moveTo(0, 0);
    ctx.lineTo(50, 50);
});

function beginCapture(msg) {
    alert(msg);
}

// chrome.runtime.onMessage.addListener(beginCapture);
