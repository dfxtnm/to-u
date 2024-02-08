function handleYes() {
    var response = document.getElementById('response');
    var yesButton = document.getElementById('yesButton');
    yesButton.innerHTML = 'Thank you';
    yesButton.style.backgroundColor = '#5cb85c';
    yesButton.style.color = '#fff';
    response.style.display = 'block';
}

function handleNo() {
    var noButton = document.getElementById('noButton');
    noButton.style.transform = 'translateX(100px)';
}