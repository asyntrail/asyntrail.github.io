function toggleSidebar() {
    document.getElementById("sidebar-menu").classList.toggle('active');
}

document.getElementById('toggle-btn').onclick = toggleSidebar;