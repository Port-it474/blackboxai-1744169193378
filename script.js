// Simple interactive elements for the Swiggy replica
document.addEventListener('DOMContentLoaded', function() {
    // Make food categories interactive
    const categories = document.querySelectorAll('.food-category');
    if (categories) {
        categories.forEach(category => {
            category.addEventListener('click', function() {
                alert(`You clicked on ${this.querySelector('span').textContent} category`);
            });
        });
    }

    // Make restaurant cards interactive
    const restaurants = document.querySelectorAll('.restaurant-card');
    if (restaurants) {
        restaurants.forEach(restaurant => {
            restaurant.addEventListener('click', function() {
                const name = this.querySelector('h3').textContent;
                alert(`Opening menu for ${name}`);
            });
        });
    }

    // Search functionality
    const searchBtn = document.querySelector('button[type="button"]');
    const searchInput = document.querySelector('input[type="text"]');
    
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', function() {
            if (searchInput.value.trim() !== '') {
                alert(`Searching for: ${searchInput.value}`);
            } else {
                alert('Please enter a location to search');
            }
        });

        // Press Enter in search field
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchBtn.click();
            }
        });
    }
});
