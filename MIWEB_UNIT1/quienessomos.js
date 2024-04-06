/*carousel*/ 
var images = ['assets/img/carousel-1.jpg', 'assets/img/carousel-2.jpg', 'assets/img/carousel-3.jpg', 'assets/img/carousel-4.jpg', 'assets/img/carousel-5.jpg'];
var currentImageIndex = 0;

document.getElementById('prevButton').addEventListener('click', function() {
    if (currentImageIndex === 0) {
      currentImageIndex = images.length - 1;
    } else {
      currentImageIndex--;
    }
    document.getElementById('carouselImage').src = images[currentImageIndex];
});

document.getElementById('nextButton').addEventListener('click', function() {
    if (currentImageIndex === images.length -1) {
      currentImageIndex = 0;
    } else {
      currentImageIndex++;
    }
    document.getElementById('carouselImage').src = images[currentImageIndex];
});