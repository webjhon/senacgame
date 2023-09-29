<?php
// Conexão com o banco de dados
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
} catch (PDOException $e) {
    echo "Erro de conexão: " . $e->getMessage();
    exit;
}

// Deletar usuário
if (isset($_POST['id'])) {
    $id = $_POST['id'];

    try {
        // Desativa a verificação de chave estrangeira
        $pdo->exec("SET foreign_key_checks = 0;");

        $stmt = $pdo->prepare("DELETE FROM usuarios WHERE id = ?");
        $stmt->execute([$id]);

        // Reativa a verificação de chave estrangeira
        $pdo->exec("SET foreign_key_checks = 1;");

        echo "Usuário deletado com sucesso!";
    } catch (PDOException $e) {
        echo "Erro ao deletar usuário: " . $e->getMessage();
    }
}
?>

