// //CUBE ROTATION

// const cube = document.querySelector(".cube");
// let mouseX = 0;
// let mouseY = 0;
// const rotationValue = 270;

// const handleMouseMove = (event) => {
//   mouseX = event.clientX;
//   mouseY = event.clientY;

//   rotateX = -(mouseY / window.innerHeight - 0.5) * rotationValue;
//   rotateY = -(mouseX / window.innerHeight - 0.5) * rotationValue;

//   cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

// }

// window.addEventListener("mousemove", handleMouseMove);



// RANDOM PLACEMENT

const elements = document.getElementsByClassName('work');

function randomlyPlaceImagesNearCenterWithoutOverlap() {
  const screenW = window.innerWidth;
  const screenH = window.innerHeight;

  const centerX = screenW / 2;
  const centerY = screenH / 2;

  const maxOffsetX = screenW * 0.35;
  const maxOffsetY = screenH * 0.25;

  const placedRects = [];
  const buffer = 50; // bigger buffer

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
        return !(
          left + elW + buffer < rect.left ||
          left > rect.left + rect.width + buffer ||
          top + elH + buffer < rect.top ||
          top > rect.top + rect.height + buffer
        );
      });

      attempts++;
    } while (overlaps && attempts < 100);

    el.style.position = 'absolute';  // Make sure position absolute is set
    el.style.left = `${left}px`;
    el.style.top = `${top}px`;

    placedRects.push({ left, top, width: elW, height: elH });
  }
}



window.onload = randomlyPlaceImagesNearCenterWithoutOverlap;
window.addEventListener('resize', () => {
  setTimeout(randomlyPlaceImagesNearCenterWithoutOverlap, 200);
});




// PREVIEW IMAGE
const works = document.querySelectorAll('.work');

works.forEach(work => {
  const img = work.querySelector('img');
  if (img) {
    img.addEventListener('click', () => {
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
        previewImg.style.maxWidth = '90vw';
        previewImg.style.maxHeight = '90vh';
        previewImg.style.width = 'auto';
        previewImg.style.height = 'auto';
        
      
        overlay.appendChild(previewImg);
        document.body.appendChild(overlay);
      
        overlay.addEventListener('click', e => {
          if (e.target === overlay) {
            document.body.removeChild(overlay);
          }
        });
      
        const closeOnEsc = e => {
          if (e.key === 'Escape') {
            document.body.removeChild(overlay);
            document.removeEventListener('keydown', closeOnEsc);
          }
        };
      
        document.addEventListener('keydown', closeOnEsc);
      });
  }
});

const headerButton = document.querySelector('.header');
const container = document.querySelector('.container');
const output = document.querySelector('.output');


















