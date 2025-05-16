	document.querySelectorAll('.accordion-header').forEach(header => {
            header.addEventListener('click', () => {
                const item = header.parentElement;
                const content = header.nextElementSibling;
                const isActive = header.classList.contains('active');
                
                // Fecha todos os itens primeiro
                document.querySelectorAll('.accordion-item').forEach(accordionItem => {
                    accordionItem.querySelector('.accordion-header').classList.remove('active');
                    accordionItem.querySelector('.accordion-content').style.maxHeight = null;
                });
                
                // Se não estava ativo, abre este item
                if (!isActive) {
                    header.classList.add('active');
                    content.style.maxHeight = content.scrollHeight + 'px';
                }
            });
        });
        
        // Abre o primeiro item por padrão
        //document.querySelector('.accordion-header').click();
