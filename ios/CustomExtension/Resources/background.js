/* eslint-disable no-undef */
browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('Received request background: ', request);

  if (request.greeting === 'hello') {
    sendResponse({farewell: 'goodbye'});
  }

  if (request.greeting === 'increase') {
    browser.tabs.query({active: true, currentWindow: true}, function (tabs) {
      // Send a message to the content script in the active tab
      browser.tabs
        .sendMessage(tabs[0].id, {command: 'increase'})
        .then(response => {
          console.log(response.result);
        })
        .catch(err => console.error(err));
    });
  }

  if (request.greeting === 'highlight') {
    browser.tabs.query({active: true, currentWindow: true}, function (tabs) {
      // Send a message to the content script in the active tab
      browser.tabs
        .sendMessage(tabs[0].id, {command: request.greeting})
        .then(response => {
          console.log(response.result);
        })
        .catch(err => console.error(err));
    });
  }

  if (request.greeting === 'invert') {
    browser.tabs.query({active: true, currentWindow: true}, function (tabs) {
      // Send a message to the content script in the active tab
      browser.tabs
        .sendMessage(tabs[0].id, {command: request.greeting})
        .then(response => {
          console.log(response.result);
        })
        .catch(err => console.error(err));
    });
  }
});
