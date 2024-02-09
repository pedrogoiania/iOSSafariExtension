document.body.style.backgroundColor = 'yellow'; // Example: Change background color

// Listen for messages from the extension (e.g., popup or background script)
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.command == 'increase') {
        document.body.style.zoom = (parseFloat(document.body.style.zoom) || 1) * 1.1;
        sendResponse({result: "Size increased"});
    }
  
  if(message.command == 'highlight') {
   
    const words = ["create", "account", "select", "charity"]
    const spanElements = document.querySelectorAll('span');
    spanElements.forEach(span => {
        let spanHtml = span.innerHTML;
        words.forEach(word => {
            const regex = new RegExp(`(${word})`, 'gi');
            spanHtml = spanHtml.replace(regex, '<span style="background-color: yellow">$1</span>');
        });
        span.innerHTML = spanHtml;
    });
  }
});

