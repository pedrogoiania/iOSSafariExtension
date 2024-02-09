/* eslint-disable no-undef */
document.body.style.backgroundColor = 'yellow'; // Example: Change background color

// Listen for messages from the extension (e.g., popup or background script)
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.command == 'increase') {
    document.body.style.zoom =
      (parseFloat(document.body.style.zoom) || 1) * 1.1;
    sendResponse({result: 'Size increased'});
  }

  if (message.command == 'highlight') {
    const words = ['create', 'account', 'select', 'charity'];
    const spanElements = document.querySelectorAll('span');
    spanElements.forEach(span => {
      let spanHtml = span.innerHTML;
      words.forEach(word => {
        const regex = new RegExp(`(${word})`, 'gi');
        spanHtml = spanHtml.replace(
          regex,
          '<span style="background-color: yellow">$1</span>',
        );
      });
      span.innerHTML = spanHtml;
    });
  }

  if (message.command == 'invert') {
    const body = document.body;
    const currentFilter = body.style.filter;

    // Check if the inversion filter is already applied
    if (currentFilter.includes('invert(100%)')) {
      // If yes, remove the filter (i.e., revert to original colors)
      body.style.filter = '';
    } else {
      // If no, apply the inversion filter (i.e., invert colors)
      // You can adjust the percentage to less than 100% if you want a less intense effect
      body.style.filter = 'invert(100%)';
    }
  }
});
