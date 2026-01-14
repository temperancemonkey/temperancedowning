// TEST

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

// const gridItem = document.getElementsByClassName('grid-item');
// const gridContent = document.getElementsByClassName('gridContents') [0] ;

// gridItem[0].addEventListener('click', () => {
//     if(gridContent.style.display === 'block') {
//         gridContent.style.display = 'none';
//     } else {
//         gridContent.style.display = 'block';
//     }
// });








