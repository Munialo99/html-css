const $indicator = document.querySelector('.indicator');
const $links = document.querySelectorAll('li a');

$links.forEach(($links) => {
    $links.addEventListener(
        'mousemove',
        (e) => {
            const {offsetLeft, offsetWidth} = e.target;
            $indicator.style.left = offsetLeft + 'px';
            $indicator.style.width = offsetWidth + 'px';
        }
    );
});