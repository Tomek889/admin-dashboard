const content = document.querySelector('.content');
const sidebar = document.querySelector('.sidebar');

function matchSidebarHeight() {
  const height = content.offsetHeight;
  sidebar.style.height = height + 'px';
}

matchSidebarHeight();

window.addEventListener('resize', matchSidebarHeight);
