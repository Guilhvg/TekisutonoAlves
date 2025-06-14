document.addEventListener('DOMContentLoaded', function() {
  const hoverWords = document.querySelectorAll('.hover-word');
  const imagePreview = document.getElementById('image-preview');
  const previewImg = imagePreview.querySelector('img');
  
  // Add event listeners to each hoverable word
  hoverWords.forEach(word => {
    word.addEventListener('mouseenter', function(e) {
      const imageUrl = this.getAttribute('data-image');
      previewImg.src = imageUrl;
      imagePreview.style.display = 'block';
      
      // Position the preview near the cursor
      imagePreview.style.left = `${e.pageX + 10}px`;
      imagePreview.style.top = `${e.pageY + 10}px`;
    });
    
    word.addEventListener('mouseleave', function() {
      imagePreview.style.display = 'none';
    });
    
    // Optional: Make preview follow mouse while hovering
    word.addEventListener('mousemove', function(e) {
      imagePreview.style.left = `${e.pageX + 10}px`;
      imagePreview.style.top = `${e.pageY + 10}px`;
    });
  });
});
