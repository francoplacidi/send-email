    <?php
        $addressee = 'youremail@gmail.com';

        $name = $_POST['name'];
        $mail = $_POST['mail'];
        $affair = $_POST['affair'];
        $msg = $_POST['msg'];

        $header = "Form";
        $fullMessage = $msg . "\nAttentively: " . $name;

        mail($addressee, $affair, $fullMessage, $header);  
        
        echo "<script>alert('Mail sent successfully !!')</script>";
        echo "<script>setTimeout(\"location.href='index.html'\",1000)</script>"; 
    ?>
