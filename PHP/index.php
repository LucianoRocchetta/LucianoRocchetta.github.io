<?php
if (isset($_POST['send_button'])) {
    if (!empty($_POST['name'] && !empty($_POST['email']) && !empty($_POST['msg']))) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $asunto = $name."-".$email;
        $message = $_POST['msg'];
        $header = "From: ".$email."\r\n";
        $header .= "Reply-To: ".$email."\r\n";
        
        $mail = @mail("lucianorocchetta@gmail.com", $asunto, $message, $header);
    }
}
?>