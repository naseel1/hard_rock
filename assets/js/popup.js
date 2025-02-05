
                       document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('popupImages1');
    var span = document.getElementsByClassName('closes')[0];

    // Show the modal with animation
    modal.style.display = 'block';
    setTimeout(function() {
        modal.classList.add('active'); // Trigger animation
    }, 10); // Slight delay to trigger the CSS transition

    // Close the modal when the user clicks on the close button
    span.onclick = function () {
        modal.classList.remove('active'); // Hide animation
        setTimeout(function() {
            modal.style.display = 'none';
        }, 800); // Match the transition time to hide the modal after animation
    }

    // Close the modal when clicking outside the image
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.classList.remove('active'); // Hide animation
            setTimeout(function() {
                modal.style.display = 'none';
            }, 800); // Match the transition time
        }
    }
});
