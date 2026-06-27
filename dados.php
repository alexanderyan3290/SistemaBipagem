<?php

    $dbHost = "localhost";
    $dbUsername = "root";
    $dbPassword = "11252100158";
    $dbName = "mash_op";

    $conexao = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

    if($conexao->connect_errno){
        echo "Erro conexão :" . $conexao->connect_errno;
    }
    else{
        echo "Conexão efetuada com sucesso";
    }

?>
