/* eslint-disable no-undef */
console.log('Hello World!', browser);

document.getElementById('increaseButton').addEventListener('click', () => {
  browser.runtime.sendMessage({greeting: 'increase'}).then(response => {
    console.log('Received response increase: ', response);
  });
});

document.getElementById('highlight').addEventListener('click', () => {
  browser.runtime.sendMessage({greeting: 'highlight'}).then(response => {
    console.log('Received response highlight: ', response);
  });
});

document.getElementById('invert').addEventListener('click', () => {
  browser.runtime.sendMessage({greeting: 'invert'}).then(response => {
    console.log('Received response invert: ', response);
  });
});
