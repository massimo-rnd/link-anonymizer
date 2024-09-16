<?php

// Replace these values with your database connection details
$db_host = '';
$db_user = '';
$db_password = '';
$db_name = '';

// Create a database connection
$mysqli = new mysqli($db_host, $db_user, $db_password, $db_name);

// Check connection
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

// Determine the action based on the 'action' query parameter
$action = isset($_GET['action']) ? $_GET['action'] : '';

// Handle write action
if ($action === 'write' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the input string from the POST request
    $inputString = $_POST['input_string'];

    // Generate Link Key
    $linkKey = generateRandomString(6);

    // Save both original and hashed values to the database
    $sql = "INSERT INTO links (keylink, shorturl) VALUES (?, ?)";
    $stmt = $mysqli->prepare($sql);

    // Bind parameters
    $stmt->bind_param("ss", $linkKey, $inputString);

    // Execute the query
    $stmt->execute();

    // Close statement
    $stmt->close();

    // Return the Link Key to the requester
    echo $linkKey;
}
// Handle read action
elseif ($action === 'read' && $_SERVER['REQUEST_METHOD'] === 'GET') {
    // Get the keylink value from the query parameters
    $keylink = $_GET['keylink'];

    // Prepare and execute the query
    $sql = "SELECT shorturl FROM links WHERE keylink = ?";
    $stmt = $mysqli->prepare($sql);
    $stmt->bind_param("s", $keylink);
    $stmt->execute();
    $stmt->bind_result($pastetext);

    // Check if a result is found
    if ($stmt->fetch()) {
        // Return the pastetext to the requester
        echo $pastetext;
    } else {
        // If no result is found, return an error message
        echo "Paste not found";
    }

    // Close statement
    $stmt->close();
} else {
    // If the request method is invalid or action is not recognized, return an error message
    echo "Invalid request method or action";
}

// Close database connection
$mysqli->close();

// Function to generate a random string
function generateRandomString($length = 6) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $randomString = '';

    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, strlen($characters) - 1)];
    }

    return $randomString;
}

?>
