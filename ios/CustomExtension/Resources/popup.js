console.log("Hello World!", browser);

document.getElementById('increaseButton').addEventListener('click', () => {
    browser.runtime.sendMessage({ greeting: "increase" }).then((response) => {
        console.log("Received response increase: ", response);
    });
});

document.getElementById('highlight').addEventListener('click', () => {
    browser.runtime.sendMessage({ greeting: "highlight" }).then((response) => {
        console.log("Received response highlight: ", response);
    });
});
