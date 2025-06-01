// random placement on page
const elements = document.getElementsByClassName('work');

function randomlyPlaceImagesNearCenterWithoutOverlap() {
    const screenW = window.innerWidth;
    const screenH = window.innerHeight;

    const centerX = screenW / 2;
    const centerY = screenH / 2;

    const maxOffsetX = screenW * 0.25;
    const maxOffsetY = screenH * 0.25;

    const placedRects = [];

    for (let i = 0; i < elements.length; i++) {
        const el = elements[i];
        const elW = el.offsetWidth || 100;
        const elH = el.offsetHeight || 100;

        let attempts = 0;
        let left, top;
        let overlaps = false;

        do {
            const offsetX = (Math.random() - 0.5) * 2 * maxOffsetX;
            const offsetY = (Math.random() - 0.5) * 2 * maxOffsetY;

            left = centerX + offsetX - elW / 2;
            top = centerY + offsetY - elH / 2;

            left = Math.max(0, Math.min(left, screenW - elW));
            top = Math.max(0, Math.min(top, screenH - elH));

            overlaps = placedRects.some(rect => {
                const buffer = 30; // minimum spacing between items
                return !(
                    left + elW + buffer < rect.left ||
                    left > rect.left + rect.width + buffer ||
                    top + elH + buffer < rect.top ||
                    top > rect.top + rect.height + buffer
                );
            });

            attempts++;
        } while (overlaps && attempts < 50); // try max 50 times

        el.style.left = `${left}px`;
        el.style.top = `${top}px`;

        placedRects.push({ left, top, width: elW, height: elH });
    }
}

window.onload = randomlyPlaceImagesNearCenterWithoutOverlap;
window.addEventListener('resize', randomlyPlaceImagesNearCenterWithoutOverlap);

// preview on click
const works = document.querySelectorAll('.work');

works.forEach(work => {
  const img = work.querySelector('img');
  if (img) {
    img.addEventListener('click', () => {
      // Create overlay and preview image
      const overlay = document.createElement('div');
      overlay.style.position = 'fixed';
      overlay.style.top = 0;
      overlay.style.left = 0;
      overlay.style.width = '100vw';
      overlay.style.height = '100vh';
      overlay.style.background = 'rgba(0, 0, 0, 0.8)';
      overlay.style.display = 'flex';
      overlay.style.justifyContent = 'center';
      overlay.style.alignItems = 'center';
      overlay.style.zIndex = 1000;

      const previewImg = document.createElement('img');
      previewImg.src = img.src;
      previewImg.style.width = '50vw';  // BIGGER WIDTH
      previewImg.style.height = 'auto'; // Keep aspect ratio



      overlay.appendChild(previewImg);
      document.body.appendChild(overlay);

      // Close on click outside image
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          document.body.removeChild(overlay);
        }
      });

      // Close on "Escape" key
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









