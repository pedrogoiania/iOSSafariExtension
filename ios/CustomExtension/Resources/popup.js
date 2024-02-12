/* eslint-disable no-undef */
console.log('Hello World!', browser);

document.getElementById('increase').addEventListener('click', () => {
  browser.runtime.sendMessage({greeting: 'increase'}).then(response => {
    console.log('Received response increase: ', response);
  });
});

document.getElementById('decrease').addEventListener('click', () => {
  browser.runtime.sendMessage({greeting: 'decrease'}).then(response => {
    console.log('Received response decrease: ', response);
  });
});

document.getElementById('highlight').addEventListener('click', () => {
  const enteredText = keywordInput.value;

  console.log('enteredText: ', enteredText);

  const wordsToHighlight = enteredText.split(',');

  console.log('wordsToHighlight: ', wordsToHighlight);

  browser.runtime
    .sendMessage({greeting: 'highlight', wordsToHighlight: wordsToHighlight})
    .then(response => {
      console.log('Received response highlight: ', response);
    });
});

document.getElementById('light-mode').addEventListener('click', () => {
  browser.runtime.sendMessage({greeting: 'invert'}).then(response => {
    console.log('Received response invert: ', response);
  });
});
document.getElementById('dark-mode').addEventListener('click', () => {
  browser.runtime.sendMessage({greeting: 'invert'}).then(response => {
    console.log('Received response invert: ', response);
  });
});
