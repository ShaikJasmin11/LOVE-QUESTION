function showLoveMessage() {
    document.getElementById('response').textContent = 'AWW!!! Love you too';
    setTimeout(() => {
        location.reload();
    }, 800); // Refresh the page after 2 seconds
}

function showError() {
    alert('SORRY!!YOU CANT UNLOVE ME');
    setTimeout(() => {
        location.reload();
    }, 100); // Refresh the page after 2 seconds
}
