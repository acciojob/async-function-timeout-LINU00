async function showMessage(message, delay) {
    await new Promise(resolve => setTimeout(resolve, delay));
    document.getElementById('output').innerText = message;
}

document.getElementById('btn').addEventListener('click', () => {
    const text = document.getElementById('text').value;
    const delay = Number(document.getElementById('delay').value);
    showMessage(text, delay);
});
