document.addEventListener("DOMContentLoaded", function() {
    const priceRange = document.getElementById('priceRange');
    const selectedPrice = document.getElementById('selectedPrice');

    // Set initial values
    updateSlider();

    // Update selected price on slider change
    priceRange.addEventListener('input', function() {
        updateSelectedPrice();
    });

    // Update slider when manually typing into the input field
    selectedPrice.addEventListener('input', function() {
        updateSlider();
    });

    function updateSelectedPrice() {
        const currentPrice = priceRange.value;
        selectedPrice.value = `$${currentPrice}`;
    }

    function updateSlider() {
        const enteredPrice = parseFloat(selectedPrice.value.replace(/\$/g, ''));
        if (!isNaN(enteredPrice) && enteredPrice >= 0 && enteredPrice <= 1000) {
            priceRange.value = enteredPrice;
        }
    }
});
