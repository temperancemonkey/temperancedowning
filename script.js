const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  const img = button.querySelector('img');
  if (img) {
    button.addEventListener('click', () => {
      // Create overlay and preview image
      const overlay = document.createElement('div');
      overlay.style.position = 'fixed';
      overlay.style.top = 0;
      overlay.style.left = 0;
      overlay.style.width = '100vw';
      overlay.style.height = '100vh';
      overlay.style.display = 'flex';
      overlay.style.justifyContent = 'center';
      overlay.style.alignItems = 'center';
      overlay.style.zIndex = 1000;

      const previewImg = document.createElement('img');
      previewImg.src = img.src;
    //   previewImg.style.maxWidth = '90%';
    //   previewImg.style.maxHeight = '90%';
      previewImg.style.width = 'auto';
      previewImg.style.height = '90vh';
    //   previewImg.style.boxShadow = '0 0 20px black';
    //   previewImg.style.border = '5px solid white';

      overlay.appendChild(previewImg);
      document.body.appendChild(overlay);

      // Close on click outside image
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          document.body.removeChild(overlay);
        }
      });

      // Optional: Close on "Escape" key
      const closeOnEsc = (e) => {
        if (e.key === 'Escape') {
          document.body.removeChild(overlay);
          document.removeEventListener('keydown', closeOnEsc);
        }
      };
      document.addEventListener('keydown', closeOnEsc);
    });
  }
});


