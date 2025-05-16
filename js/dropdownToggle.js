document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.dropdown-content');

    menuItems.forEach(item => {
        const menuLink = item.querySelector('.row');

        menuLink.addEventListener('click', function(e) {
            e.preventDefault(); // Evita que o link recarregue a página

            // Fecha todos os submenus
            menuItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // Abre/fecha o submenu clicado
            item.classList.toggle('active');
        });
    });

    // Fecha o menu ao clicar fora
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown-content')) {
            menuItems.forEach(item => {
                item.classList.remove('active');
            });
        }
    });
});
