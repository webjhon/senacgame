<!-- visualizacao.php -->
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Visualização de Cadastros</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
    <div id="usuarios"></div>

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

            // Atualiza a cada 5 segundos
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
</body>
</html>
