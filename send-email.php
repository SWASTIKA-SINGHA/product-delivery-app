<?php
/**
 * FastKart Email Sender
 * Sends order confirmation emails from swastikas857@gmail.com to customers
 */

// Allow requests from your frontend
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Get the POST data
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Validate required fields
if (!isset($data['to_email']) || !isset($data['subject']) || !isset($data['body'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Missing required fields']);
    exit;
}

$to_email = filter_var($data['to_email'], FILTER_SANITIZE_EMAIL);
$subject = $data['subject'];
$body = $data['body'];

// Validate email
if (!filter_var($to_email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit;
}

// Email headers
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type: text/html; charset=UTF-8" . "\r\n";
$headers .= "From: FastKart Store <swastikas857@gmail.com>" . "\r\n";
$headers .= "Reply-To: swastikas857@gmail.com" . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

// Send email
$mail_sent = mail($to_email, $subject, $body, $headers);

if ($mail_sent) {
    echo json_encode([
        'success' => true,
        'message' => 'Email sent successfully',
        'to' => $to_email
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Failed to send email'
    ]);
}
?>
