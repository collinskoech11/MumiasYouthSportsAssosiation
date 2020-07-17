<?php
    include 'database.inc.php';

    $name = $_POST['user'];
    $password = $_POST['password'];
    $mail = $_POST['email'];

    $sql = "INSERT INTO user (username, password, email) VALUE ('$name', '$password', '$mail')";

    mysqli_connect ($conn, $sql);

    header ('Location: ../index.html');
?>