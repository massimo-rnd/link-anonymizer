function showPaste(){
    retrievePaste(getVariableFromURL());
    
}
function getVariableFromURL() {
            var query = window.location.search.substring(1);
            
            // Check if there is any query parameter
            if (query) {
                return decodeURIComponent(query);
            } else {
                console.log('No variable found in the URL');
                return null;
            }
        }

function retrievePaste(keylink) {
            // Replace with the actual URL of your PHP script
            var phpScriptUrl = '/api.php?action=read';

            // Construct the URL with the keylink parameter
            var url = phpScriptUrl + '&keylink=' + encodeURIComponent(keylink);

            // Make the GET request
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.text();
                })
                .then(pastetext => {
                    // Handle the retrieved pastetext
                    console.log('Retrieved URL:', pastetext);
                   receivedUrl = pastetext;
                var link = document.getElementById('skip-link');
    link.href = pastetext;
                var timeDisplay = document.getElementById('time');
    startCountdown(9, timeDisplay, pastetext);
                })
                .catch(error => {
                    // Handle errors
                    console.error('Error during GET request:', error.message);
                });
        }

function startCountdown(duration, display, redirUrl) {
    var timer = duration, minutes, seconds;
    var interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(interval);
            endCountdown(redirUrl); // Function to call when the countdown ends
        }
    }, 1000);
}

function endCountdown(redirUrl) {
    //alert("Countdown finished!");
    window.location.href = redirUrl;
}