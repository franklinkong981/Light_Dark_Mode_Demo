const toggleSwitch = document.querySelector('input[type="checkbox"]');

if (localStorage.getItem('darkModeEnabled')) { //if the key darkModeEnabled doesn't exist in localStorage, it will return undefined, which is falsy.
    document.body.className = 'dark';
    toggleSwitch.checked = true;
}

toggleSwitch.addEventListener('click', function(e) {
    const checked = toggleSwitch.checked;
    if (checked) {
        localStorage.setItem('darkModeEnabled', true);
    } else {
        localStorage.removeItem('darkModeEnabled');
    }
    document.body.className = checked ? 'dark' : '';
})