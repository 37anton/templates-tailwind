document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.getElementById('checkbox-item-1');
    const body = document.body;

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
    
    
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            document.documentElement.classList.add('dark')
            localStorage.theme = 'dark'
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.theme = 'light'
        }
    });
});