document.addEventListener('DOMContentLoaded', function() {
    let showSidebarBtn = document.querySelector('.showSidebarBtn');
    let sidebar = document.querySelector('.sidebar');
    let overlay = document.querySelector('.overlay');

    showSidebarBtn.addEventListener('click', function() {
        sidebar.style.left = '0'; // Show sidebar
        overlay.style.display = 'block'; // Show overlay
    });

    overlay.addEventListener('click', function() {
        sidebar.style.left = '-250px'; // Hide sidebar
        overlay.style.display = 'none'; // Hide overlay
    });
});
