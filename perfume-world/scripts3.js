document.addEventListener('DOMContentLoaded', () => {
    const quantityInput = document.getElementById('quantity');
    const productPriceElement = document.getElementById('product-price');
    const totalPriceElement = document.getElementById('total-price');
    const buyForm = document.getElementById('buy-form');
    const confirmationMessage = document.getElementById('confirmation-message');
    const productPrice = parseFloat(productPriceElement.textContent);

    // Function to update the total price based on quantity
    function updateTotalPrice() {
        const quantity = parseInt(quantityInput.value);
        const totalPrice = (productPrice * quantity).toFixed(2);
        totalPriceElement.textContent = totalPrice;
    }

    // Event listener for quantity input changes
    quantityInput.addEventListener('input', updateTotalPrice);

    // Form validation and submission
    buyForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;
        const paymentMethod = document.getElementById('payment-method').value;

        if (!name || !email || !address || !paymentMethod) {
            alert('Please fill out all required fields.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Display confirmation message
        confirmationMessage.classList.remove('hidden');

        // In real application, you would send this data to the server
        // Here we just show the confirmation message and reset the form
        buyForm.reset();
        updateTotalPrice();
    });

    // Function to validate email format
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Initial call to set the total price
    updateTotalPrice();
});
