// GRID ITEM CLICK

// const gridItems = document.querySelectorAll('.grid-item');
// gridItems.forEach(item => {
//     item.addEventListener('click', () => {
//         const targetId = item.dataset.target;
//         const content = document.getElementById(targetId);

//         if (!content) return;
        
//         document.querySelectorAll('.gridContents').forEach(div => {
//             if(div !== content) div.style.display = 'none';
//         });

//         content.style.display = 
//             content.style.display === 'none' ? '' : 'none';
//     });

// });




// WORK SLIDESHOWS

// const imgElements = document.querySelectorAll('.display');

// imgElements.forEach((imgElement) => {

//     const images = imgElement.dataset.images.split(',').map(s => s.trim());

//     let currentIndex = 0;

//     function updateImage() {
//         imgElement.src = images[currentIndex];
//     }

//     imgElement.addEventListener("click", (e) => {
//         const rect = imgElement.getBoundingClientRect();
//         const clickX = e.clientX - rect.left;
    
//         if (clickX < rect.width / 2) {
//             currentIndex = (currentIndex - 1 + images.length) % images.length;
//         } else {
//             currentIndex = (currentIndex + 1) % images.length;
//         }
    
//         updateImage();
//     });
// });

let stamps = ['/stamps/001.png', '/stamps/002.png', '/stamps/003.png'];

function addStamp(event) {

    const mouseX = event.pageX;
    const mouseY = event.pageY;
    const randomRotation = Math.random() * 360;
    const stampIndex = Math.floor(Math.random() * stamps.length);

    const stamp = document.createElement('img');
    // stamp.src = stampIndex;

    stamp.src = stamps[stampIndex];
    stamp.style.width = 'clamp(150px, 18vw, 250px)';
    stamp.style.height = 'auto';
    stamp.style.position = 'absolute';
    stamp.style.left = `${mouseX}px`; 
    stamp.style.top = `${mouseY}px`;
    stamp.style.transform = `translate(-50%, -50%) rotate(${randomRotation}deg)`; 
    stamp.style.pointerEvents = 'none'; 
    stamp.style.userSelect = 'none';
    stamp.style.filter = 'url(#distort)';


    document.body.append(stamp);

}

document.addEventListener('click', addStamp);











































