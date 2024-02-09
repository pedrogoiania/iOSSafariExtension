function adjustFontSize(increase) {
    var body = document.body;
    var currentSize = parseFloat(window.getComputedStyle(body, null).getPropertyValue('font-size'));
    if (increase) {
        currentSize += 2; // Increase font size by 2px
    } else {
        currentSize -= 2; // Decrease font size by 2px
    }
    body.style.fontSize = currentSize + 'px';
}
