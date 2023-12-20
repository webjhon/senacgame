<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Visualização de Cadastros</title>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <style>
        body {
            background-color: #f4f4f4;
        }
        .container {
            max-width: 800px;
            margin: 10px auto;
            padding: 20px;
            background-color: #fff;
            border: 2px solid #ff9602;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        }
        h1, h2, h3, h4, h5, h6 {
            color: #316ba2;
        }
        label, p, td, th {
            color: #666666;
        }
        .btn-danger {
            background-color: #ff9602;
            border-color: #ff9602;
        }
        .logo-container {
    text-align: center;
    margin: 10px 0; /* Reduzindo a margem */
}

.logo {
    width: 30%; /* Definindo uma largura fixa para a logo */
    margin: 0 auto;
}


    </style>
</head>
<body>
    <div class="logo-container">
        <img src="LogoHorizontal-Senac-Regional_cor.png" alt="Logomarca SENAC" class="logo img-fluid">
    </div>

    <div class="container">
        <h2 class="text-center">Retirada de Brindes</h2>
        <div id="usuarios"></div>
    </div>
    <script>
        function carregarUsuarios() {
            $.ajax({
                url: 'carregar_usuarios.php',
                method: 'GET',
                success: function(data) {
                    $('#usuarios').html(data);
                }
            });
        }

        $(document).ready(function() {
            carregarUsuarios();
            setInterval(carregarUsuarios, 5000);
        });

        function deletarUsuario(id) {
            $.ajax({
                url: 'deletar_usuario.php',
                method: 'POST',
                data: { id: id },
                success: function() {
                    carregarUsuarios();
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    alert("Erro ao deletar: " + textStatus + " - " + errorThrown);
                }
            });
        }
    </script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
