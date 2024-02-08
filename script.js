// Get all the box elements
const boxes = document.querySelectorAll('.box');
const totalPriceElement = document.getElementById('totalPrice');
// Loop through each box and add click event listener
boxes.forEach(box => {
    // Check if the radio button inside the box is checked initially
    const radioButton = box.querySelector('.radio_btn');
    if (radioButton.checked) {
        box.classList.add('expanded');
    }

    box.addEventListener('click', function(){
        // Remove 'expanded' class from all boxes except the currently clicked one
        boxes.forEach(otherBox => {
            if (otherBox !== box) {
                otherBox.classList.remove('expanded');
            }
        });

        // Toggle the 'expanded' class on the clicked box
        this.classList.toggle('expanded');
        const selectedPrice = parseFloat(this.querySelector('.current_price').textContent.replace('$', '').trim());
        
        // Update the total price element
        totalPriceElement.textContent = `Total Price: $${selectedPrice.toFixed(2)}`;
       
        // Get the radio button inside the clicked box
        const radioButton = this.querySelector('.radio_btn');
        
        // If the radio button exists, select it
        if (radioButton) {
            radioButton.checked = true;
        }
    });
});
