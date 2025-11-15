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

const workTwo = document.getElementById('workTwo');
const workTwoImg = document.getElementById('workTwoImg');

workTwo.addEventListener('click', () => {
    if (workTwoImg.style.display === 'block') {
        workTwoImg.style.display = 'none';
    } else {
        workTwoImg.style.display = 'block';
    }
});

const workThree = document.getElementById('workThree');
const workThreeImg = document.getElementById('workThreeImg');

workThree.addEventListener('click', () => {
    if (workThreeImg.style.display === 'block') {
        workThreeImg.style.display = 'none';
    } else {
        workThreeImg.style.display = 'block';
    }
});

const workFour = document.getElementById('workFour');
const workFourImg = document.getElementById('workFourImg');

workFour.addEventListener('click', () => {
    if (workFourImg.style.display === 'block') {
        workFourImg.style.display = 'none';
    } else {
        workFourImg.style.display = 'block';
    }
});






