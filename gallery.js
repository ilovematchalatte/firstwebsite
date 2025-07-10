
//gallery javascript feature

// when content gets loaded
document.addEventListener('DOMContentLoaded', function() {
  // get the buttons and gallery items
  const filterBtns = document.querySelectorAll('#gmyBtnContainer .gbtn');
  const galleryItems = document.querySelectorAll('.gcol');

  // function to filter the items
  function filterGallery(filter) {
      galleryItems.forEach(item => {
          if (filter === 'all' || item.classList.contains(filter)) {
              item.style.display = 'block';
          } else {
              item.style.display = 'none';
          }
      });
  }

  // event listeners for the button when clicked
  filterBtns.forEach(btn => {
      btn.addEventListener('click', function() {
          //remove active from all buttons
          filterBtns.forEach(b => b.classList.remove('active'));
          // add active class to clicked button
          this.classList.add('active');
          // get filter value and apply filtering
          const filter = this.getAttribute('data-filter');
          // cal function
          filterGallery(filter);
      });
  });

  // show all items by default
  filterGallery('all');
});

