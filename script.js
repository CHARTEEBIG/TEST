function changeBackgroundColor() {
    var body = document.body;
    var currentColor = body.style.backgroundColor;
    var newColor = getRandomColor();

    // Ensure the new color is different from the current color
    while (newColor === currentColor) {
        newColor = getRandomColor();
    }

    body.style.backgroundColor = newColor;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
