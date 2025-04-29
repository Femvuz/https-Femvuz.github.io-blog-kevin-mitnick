document.addEventListener('DOMContentLoaded', function() {
    // Navegación entre artículos
    const readMoreButtons = document.querySelectorAll('.read-more');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetArticle = this.getAttribute('data-article');
            showArticle(targetArticle);
        });
    });

    // Función para mostrar un artículo específico
    function showArticle(articleId) {
        // Ocultar todos los artículos
        const articles = document.querySelectorAll('article');
        articles.forEach(article => {
            article.classList.add('hidden');
        });
        
        // Mostrar el artículo seleccionado
        const targetArticle = document.getElementById(articleId);
        if (targetArticle) {
            targetArticle.classList.remove('hidden');
            
            // Scroll suave hacia el artículo
            targetArticle.scrollIntoView({ behavior: 'smooth' });
            
            // Actualizar navegación activa
            updateActiveNav(articleId);
        }
    }

    // Actualizar navegación activa
    function updateActiveNav(articleId) {
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + articleId) {
                link.classList.add('active');
            }
        });
    }

    // Navegación desde el menú principal
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            showArticle(targetId);
        });
    });

    // Modal para información de hackers
    const hackerLinks = document.querySelectorAll('.hacker-link');
    const modal = document.getElementById('hacker-info-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalInfo = document.getElementById('modal-info');
    const closeModal = document.querySelector('.close-modal');

    hackerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const hackerName = this.textContent;
            const hackerInfo = this.getAttribute('data-info');
            
            modalTitle.textContent = hackerName;
            modalInfo.textContent = hackerInfo;
            modal.style.display = 'block';
        });
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Efecto de resaltado para elementos de la lista
    const listItems = document.querySelectorAll('.book-list li, .related-links li');
    listItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f0f0f0';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
        });
    });

    // Mostrar el artículo inicial por defecto
    showArticle('inicio');
});