<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Authorization');

function authenticate() {
    // Simulate token validation
    $headers = getallheaders();
    if (isset($headers['Authorization']) && $headers['Authorization'] === 'Bearer dummy-token') {
        return true;
    }
    return false;
}

if (!authenticate()) {
    http_response_code(401);
    echo json_encode(['message' => 'Unauthorized']);
    exit;
}
?>
