<script>
    // Espera o carregamento completo do DOM
    document.addEventListener("DOMContentLoaded", function() {
        // Seleciona todas as miniaturas
        const miniaturas = document.querySelectorAll('.miniatura');
        const imagemPrincipal = document.getElementById('imagem-principal');

        // Adiciona um evento de clique a cada miniatura
        miniaturas.forEach(miniatura => {
            miniatura.addEventListener('click', function() {
                // Atualiza a imagem principal com a fonte da miniatura clicada
                const novaImagem = this.getAttribute('data-imagem');
                imagemPrincipal.src = novaImagem;
            });
        });
    });
</script>
