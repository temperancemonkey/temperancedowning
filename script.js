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

// document.querySelectorAll('.slider-wrapper').forEach(wrapper => {
//     const slider = wrapper.querySelector('.slider');
//     const slides = wrapper.querySelectorAll('img');
//     let index = 0;

//     wrapper.addEventListener('click', (e) => {
//         const rect = wrapper.getBoundingClientRect();
//         const clickX = e.clientX - rect.left;
//         const width = rect.width;

//         if (clickX < width / 2) {
//             index = (index - 1 + slides.length) % slides.length;
//         } else {
     
//             index = (index + 1) % slides.length;
//         }

//         slider.style.transform = `translateX(-${index * 100}%)`;
//     });
// });

document.querySelectorAll('.slider-wrapper').forEach(wrapper => {
    const slider = wrapper.querySelector('.slider');
    const slides = wrapper.querySelectorAll('img');
    let index = 0;

    // Change cursor based on mouse position
    wrapper.addEventListener('mousemove', (e) => {
        const rect = wrapper.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const width = rect.width;

        if (mouseX < width / 2) {
            wrapper.style.cursor = 'w-resize'; // left arrow
        } else {
            wrapper.style.cursor = 'e-resize'; // right arrow
        }
    });

    // Reset cursor when leaving wrapper
    wrapper.addEventListener('mouseleave', () => {
        wrapper.style.cursor = 'default';
    });

    // Handle clicks
    wrapper.addEventListener('click', (e) => {
        const rect = wrapper.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const width = rect.width;

        if (clickX < width / 2) {
            index = (index - 1 + slides.length) % slides.length;
        } else {
            index = (index + 1) % slides.length;
        }

        slider.style.transform = `translateX(-${index * 100}%)`;
    });
});

