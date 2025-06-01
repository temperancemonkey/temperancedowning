// const elements = document.getElementsByClassName('work');

// function randomlyPlaceImages() {
//     const containerWidth = window.innerWidth;
//     const containerHeight = window.innerHeight;

//     for (let i = 0; i < elements.length; i++) {
//         const el = elements[i];
//         const randomX = Math.random() * (containerWidth - el.offsetWidth);
//         const randomY = Math.random() * (containerHeight - el.offsetHeight);
//         el.style.left = `${randomX}px`;
//         el.style.top = `${randomY}px`;
//     }
// }

// randomlyPlaceImages();
// window.addEventListener('resize', randomlyPlaceImages);

const elements = document.getElementsByClassName('work');

function randomlyPlaceImagesNearCenter() {
    const screenW = window.innerWidth;
    const screenH = window.innerHeight;

    const centerX = screenW / 2;
    const centerY = screenH / 2;

    const maxOffsetX = screenW * 0.25; // 25% of screen width
    const maxOffsetY = screenH * 0.25; // 25% of screen height

    for (let i = 0; i < elements.length; i++) {
        const el = elements[i];
        const elW = el.offsetWidth || 100;
        const elH = el.offsetHeight || 100;

        // Random offset near center, within safe range
        const offsetX = (Math.random() - 0.5) * 2 * maxOffsetX;
        const offsetY = (Math.random() - 0.5) * 2 * maxOffsetY;

        // Calculate final position
        const left = centerX + offsetX - elW / 2;
        const top = centerY + offsetY - elH / 2;

        // Clamp to stay inside viewport
        el.style.left = `${Math.max(0, Math.min(left, screenW - elW))}px`;
        el.style.top = `${Math.max(0, Math.min(top, screenH - elH))}px`;
    }
}

window.onload = randomlyPlaceImagesNearCenter;
window.addEventListener('resize', randomlyPlaceImagesNearCenter);









// // click for larger preview

// const buttons = document.querySelectorAll('button');

// buttons.forEach(button => {
//   const img = button.querySelector('img');
//   if (img) {
//     button.addEventListener('click', () => {
//       // Create overlay and preview image
//       const overlay = document.createElement('div');
//       overlay.style.position = 'fixed';
//       overlay.style.top = 0;
//       overlay.style.left = 0;
//       overlay.style.width = '100vw';
//       overlay.style.height = '100vh';
//       overlay.style.display = 'flex';
//       overlay.style.justifyContent = 'center';
//       overlay.style.alignItems = 'center';
//       overlay.style.zIndex = 1000;

//       const previewImg = document.createElement('img');
//       previewImg.src = img.src;
//       previewImg.style.width = 'auto';
//       previewImg.style.height = '90vh';

//       overlay.appendChild(previewImg);
//       document.body.appendChild(overlay);

//       // Close on click outside image
//       overlay.addEventListener('click', (e) => {
//         if (e.target === overlay) {
//           document.body.removeChild(overlay);
//         }
//       });

//       // Optional: Close on "Escape" key
//       const closeOnEsc = (e) => {
//         if (e.key === 'Escape') {
//           document.body.removeChild(overlay);
//           document.removeEventListener('keydown', closeOnEsc);
//         }
//       };
//       document.addEventListener('keydown', closeOnEsc);
//     });
//   }
// });








