// Function to show the selected image in the preview box
function previewImage(event) {
    var imagePreview = document.getElementById('imagePreview');  // Get the image preview div
    var file = event.target.files[0];  // Get the selected file

    // Check if the file exists (i.e., user selected a file)
    if (file) {
        var reader = new FileReader();  // Create a new FileReader to read the file

        // When the file is read successfully, show it in the preview box
        reader.onload = function (e) {
            // Set the innerHTML of the preview div to display the image
            imagePreview.innerHTML = '<img src="' + e.target.result + '" alt="Product Image">';
        }
        reader.readAsDataURL(file);  // Read the file as a data URL (base64 encoded string for image)
    } else {
        imagePreview.innerHTML = '';  // Clear the preview box if no file is selected
    }
}

// Function to open the pop-up
function openPopup() {
    document.getElementById("sellproductpopup").style.display = "flex";  // Show the pop-up by setting display to 'flex'
}

// Event listener to close the pop-up when the close button (X) is clicked
document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById("sellproductpopup").style.display = "none";  // Hide the pop-up by setting display to 'none'
});

// Add event listener to the product image input
document.getElementById('productImage').addEventListener('change', previewImage);

// Event listener to open the pop-up when the sell button is clicked
document.getElementById('sellproductbtn').addEventListener('click', openPopup);

// Ensure all event listeners are set after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Your existing event listeners can be added here to ensure they are set after the DOM is ready.
});



// Function to open the pop-up
function openPopup() {
    document.getElementById("sellproductpopup").style.display = "flex";  // Show the pop-up by setting display to 'flex'
}


// Event listener to close the pop-up when the close button (X) is clicked
document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById("sellproductpopup").style.display = "none";  // Hide the pop-up by setting display to 'none'
});

// Event listener to close the pop-up when clicking outside of the popup content
window.addEventListener('click', function(event) {
    var popup = document.getElementById("sellproductpopup");
    // Check if the click was outside the popup content
    if (event.target === popup) {
        popup.style.display = "none";  // Hide the pop-up
    }
});
