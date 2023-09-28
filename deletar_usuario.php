<?php
// Conexão com o banco de dados
$host = 'localhost';
$db   = 'cadastro';
$user = 'root'; // Substitua pelo seu usuário do MySQL
$pass = '';   // Substitua pela sua senha do MySQL (ou deixe em branco se não tiver senha)
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
        $stmt = $pdo->prepare("DELETE FROM usuarios WHERE id = ?");
        $stmt->execute([$id]);
        echo "Usuário deletado com sucesso!";
    } catch (PDOException $e) {
        echo "Erro ao deletar usuário: " . $e->getMessage();
    }
}
?>
