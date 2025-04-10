document.addEventListener('DOMContentLoaded', function () {
    console.log('Document loaded, DOM fully parsed and ready.');

    // Target the form by ID (assuming the form has an ID "order-form")
    const orderForm = document.getElementById('order-form'); 
    if (orderForm) {
        orderForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent actual form submission
            alert('Thank you for your order!'); // This should trigger the pop-up
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
        });
    } else {
        console.log('Form not found');
    }
});
