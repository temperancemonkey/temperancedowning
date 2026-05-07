// GRID ITEM CLICK

const gridItems = document.querySelectorAll('.grid-item');
gridItems.forEach(item => {
    item.addEventListener('click', () => {
        const targetId = item.dataset.target;
        const content = document.getElementById(targetId);

        if (!content) return;
        
        document.querySelectorAll('.gridContents').forEach(div => {
            if(div !== content) div.style.display = 'none';
        });

        content.style.display = 
            content.style.display === 'block' ? 'none' : 'block';
    });
});

// WORK SLIDESHOWS

const imgElements = document.querySelectorAll('.display');

imgElements.forEach((imgElement) => {

    const images = imgElement.dataset.images.split(',').map(s => s.trim());

    let currentIndex = 0;

    function updateImage() {
        imgElement.src = images[currentIndex];
    }

    imgElement.addEventListener("click", (e) => {
        const rect = imgElement.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
    
        if (clickX < rect.width / 2) {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
        } else {
            currentIndex = (currentIndex + 1) % images.length;
        }
    
        updateImage();
    });
});


// PORTRAIT HOVER

const element = document.querySelector('[data-target="me"]');
const popUp = document.getElementById('me');

    element.addEventListener("mouseenter", () => {
        popUp.style.display = 'block';
    });

    element.addEventListener("mouseleave", () => {
        popUp.style.display = 'none';
    });








































