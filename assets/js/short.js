function shortURL(){
    // API endpoint URL
    const apiUrl = '/api.php?action=write';

    //check if text is empty
    if (document.getElementById('urlInput').value === ""){
        alert("Please enter a URL!");
    }else {
        // Data to be sent in the POST request
const postData = {
    input_string: document.getElementById('urlInput').value,
};

    // Perform the POST request using the fetch function
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(postData),
    })
        .then(response => response.text())
        .then(data => {
            // Display the response from the API
            console.log('API Response:', data);
            document.getElementById('shortedUrl').textContent = 'https://anonlinks.xyz/l?' + data;
        navigator.clipboard.writeText('https://anonlinks.xyz/l?' + data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
}


