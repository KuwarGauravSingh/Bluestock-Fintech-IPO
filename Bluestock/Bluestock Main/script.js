document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.ipo-item button');
  
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        button.classList.add('clicked');
        
        // Remove the 'clicked' class after 1 second to revert back to the original color
        setTimeout(() => {
          button.classList.remove('clicked');
        }, 1000);
      });
    });
  });
  