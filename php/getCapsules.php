<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Authorization');
include 'auth.php';

$api_url = 'https://api.spacexdata.com/v4/capsules';
$api_response = file_get_contents($api_url);
echo $api_response;
?>
