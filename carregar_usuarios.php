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

// Buscar usuários
$stmt = $pdo->query("SELECT * FROM usuarios");
$usuarios = $stmt->fetchAll();

echo '<table class="table table-bordered">';
echo '<thead>';
echo '<tr>';
echo '<th>Nome</th>';
echo '<th>Telefone</th>';
echo '<th>Curso</th>';
echo '<th>Ação</th>';
echo '</tr>';
echo '</thead>';
echo '<tbody>';

foreach ($usuarios as $usuario) {
    echo '<tr>';
    echo '<td>' . htmlspecialchars($usuario['nome']) . '</td>';
    echo '<td>' . htmlspecialchars($usuario['telefone']) . '</td>';
    echo '<td>' . htmlspecialchars($usuario['curso']) . '</td>';
    echo '<td><button class="btn btn-danger" onclick="deletarUsuario(' . $usuario['id'] . ')">Retirou</button></td>';
    echo '</tr>';
}

echo '</tbody>';
echo '</table>';
?>
