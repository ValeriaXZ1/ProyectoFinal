
const penguinGif = document.getElementById('penguinGif');

penguinGif.addEventListener('mouseenter', function() {
    penguinGif.style.transition = 'transform 0.3s ease';  
    penguinGif.style.transform = 'scale(1.5)'; 
});

penguinGif.addEventListener('mouseleave', function() {
    penguinGif.style.transition = 'transform 0.3s ease';  
    penguinGif.style.transform = 'scale(1)'; 
});

const imageContainers = document.querySelectorAll('.image-container');

imageContainers.forEach(container => {
    const image = container.querySelector('.image-hover');
    const textContainer = container.querySelector('.text-container');
    
    image.addEventListener('mouseenter', () => {
        textContainer.style.display = 'block';
    });


    image.addEventListener('mouseleave', () => {
        textContainer.style.display = 'none'; 
    });     
});
