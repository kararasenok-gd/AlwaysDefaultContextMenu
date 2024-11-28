document.addEventListener('DOMContentLoaded', () => {
    const styles = document.createElement('style');
    styles.innerHTML = `
      * {
        user-select: text !important;
        -webkit-user-select: text !important;
      }
    `;
    document.head.appendChild(styles);

    document.addEventListener('contextmenu', (event) => {
        event.stopPropagation();
    }, true);

    document.addEventListener('selectstart', (event) => {
        event.stopPropagation();
    }, true);

    document.addEventListener('mousedown', (event) => {
        event.stopPropagation();
    }, true);

    document.addEventListener('mouseup', (event) => {
        event.stopPropagation();
    }, true);

    document.addEventListener('mousemove', (event) => {
        event.stopPropagation();
    }, true);

    document.addEventListener('keydown', (event) => {
        if (event.ctrlKey && (event.key === 'a' || event.key === 'A')) {
            event.stopPropagation();
        }
    }, true);
});

