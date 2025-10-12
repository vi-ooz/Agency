const details = document.querySelectorAll('.details-serv');

details.forEach ((targetDetail) => {
targetDetail.addEventListener('toggle', () => {
    if (targetDetail.open) {
    details.forEach((other) => {
        if (other !== targetDetail) other.open = false;
    });
    }
});
});
