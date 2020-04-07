
<?php
 
     $email = htmlspecialchars($_POST['email']);
     $name = htmlspecialchars($_POST['name']);  
     $text = htmlspecialchars($_POST['message']);
     $spamInput = htmlspecialchars($_POST['spamInput']);

     if(empty($spamInput)){
        $to = "some-mail@mail.ru";
        $subject = "Письмо с обратной связи";
        $headers = "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=utf-8\r\n";
        $headers .= "From: <$email>\r\n";

        $message .= "Имя пользователя: ".$name."\r\n";
        $message .= "Почта: ".$email."\r\n";
        $message .= "Сообщение: ".$text."\r\n";

        $success = mail($to, $subject, $message, $headers);
        
        echo $success;
     }else{
         exit;
     }
?>  
