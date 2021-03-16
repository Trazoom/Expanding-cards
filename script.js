const panels = document.querySelectorAll(".panels");

panels.forEach(panel => {
    panel.addEventListener('click', removeActive);
});

function removeActive() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
    this.classList.add('active');
}