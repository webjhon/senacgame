<?php
$host = '127.0.0.1:3306';
$db   = 'u122206803_cadastro';
$user = 'u122206803_root'; // Substitua pelo seu usuário do MySQL
$pass = 'Senac.201'; // Substitua pela sua senha do MySQL
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
    
    $nome = $_POST['nome'];
    $telefone = $_POST['telefone'];
    $curso = $_POST['curso'];

    $stmt = $pdo->prepare("INSERT INTO usuarios (nome, telefone, curso) VALUES (?, ?, ?)");
    $stmt->execute([$nome, $telefone, $curso]);

    header('Location:./english/jogofeira.html');
} catch (PDOException $e) {
    throw new PDOException($e->getMessage(), (int)$e->getCode());
}
?>
