// INFO

const hoverElement = document.getElementById('aboutHover');
const popupText = document.getElementById('aboutText');

hoverElement.addEventListener('mouseenter', () => {
    popupText.style.display = 'block';
});

hoverElement.addEventListener('mouseleave', () => {
    popupText.style.display = 'none';
});


// CONTACT

const contactHover = document.getElementById('contactHover');
const contactEmail = document.getElementById('contactEmail');

contactHover.addEventListener('click', () => {
    if (contactEmail.style.display === 'block') {
        contactEmail.style.display = 'none';
    } else {
        contactEmail.style.display = 'block';
    }
});

//WORK

const workOne = document.getElementById('workOne');
const workOneImg = document.getElementById('workOneImg');

workOne.addEventListener('click', () => {
    if (workOneImg.style.display === 'block') {
        workOneImg.style.display = 'none';
    } else {
        workOneImg.style.display = 'block';
    }
});






