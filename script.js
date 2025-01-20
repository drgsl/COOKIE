document.addEventListener('DOMContentLoaded', function() {
    var cookiePopup = document.getElementById('cookie-popup');
    var acceptCookieButton = document.getElementById('accept-cookie');
    var closeCookiePopupButton = document.getElementById('close-cookie-popup');
    var backgroundColorSelect = document.getElementById('background-color');

    // Show the cookie popup when the page loads
    cookiePopup.style.display = 'block';

    // Hide the cookie popup and store the selected background color in a cookie when the accept button is clicked
    acceptCookieButton.addEventListener('click', function() {
        var selectedColor = backgroundColorSelect.value;
        document.cookie = 'backgroundColor=' + selectedColor + '; path=/';
        cookiePopup.classList.add('fade-out');
        setTimeout(function() {
            cookiePopup.style.display = 'none';
        }, 1000);
        setBodyBackgroundColor();
    });

    // Close the cookie popup when the close button is clicked
    closeCookiePopupButton.addEventListener('click', function() {
        cookiePopup.classList.add('fade-out');
        setTimeout(function() {
            cookiePopup.style.display = 'none';
        }, 1000);
    });

    // Set the body background color based on the stored cookie value
    function setBodyBackgroundColor() {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (cookie.startsWith('backgroundColor=')) {
                var backgroundColor = cookie.split('=')[1];
                document.body.className = backgroundColor;
                break;
            }
        }
    }

    // Set the initial body background color based on the stored cookie value
    setBodyBackgroundColor();
});
