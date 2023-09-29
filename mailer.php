<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $title = strip_tags(trim($_POST["title"]));
    $title = str_replace(array("\r", "\n"), array(" ", " "), $title);
    $name = strip_tags(trim($_POST["register_name2"]));
    $name = str_replace(array("\r", "\n"), array(" ", " "), $name);
    $email = filter_var(trim($_POST["register_email2"]), FILTER_SANITIZE_EMAIL);
    $number = trim($_POST["register_number"]);
    $message = trim($_POST["register_nachricht2"]);

    if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Oops! There was a problem with your submission. Please complete the form and try again.";
        exit;
    }

  
    $recipient = "info@g2MediaInc.com,mpho@gtis.co.za";

    $subject = 'Enquiry (Promo) ' . $name;

    $email_content = "Title: $title\n";
    $email_content .= "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Number: $number\n";
    $email_content .= "Message:\n$message\n";

    $email_headers = "From: g2MediaInc <info@g2MediaInc.com>\r\nContent-Type: text/html; charset=UTF-8";

    if (mail($recipient, $subject, $email_content, $email_headers)) {
        http_response_code(200);
        echo "Thank You! Your message has been sent.";
    } else {
        http_response_code(500);
        echo "Oops! Something went wrong and we couldn't send your message.";
    }

} else {
    http_response_code(403);
    echo "There was a problem with your submission, please try&nbsp;again.";
}
?>