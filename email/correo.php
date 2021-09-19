    <?php
        $destinatario = 'youremail@gmail.com';

        $nombre = $_POST['nombre'];
        $correo = $_POST['correo'];
        $asunto = $_POST['asunto'];
        $msg = $_POST['msg'];

        $header = "Formulario UNL";
        $mensajeCompleto = $msg . "\nAtentamente: " . $nombre;

        mail($destinatario, $asunto, $mensajeCompleto, $header);  
        
        echo "<script>alert('Correo enviado con éxito !!')</script>";
        echo "<script>setTimeout(\"location.href='index.html'\",1000)</script>"; 
    ?>
