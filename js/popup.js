window.onload = (() => {
    const T = document.querySelector('#time');
    let t = 0;
    setInterval(() => {
        t++;
        T.innerHTML = t;
    }, 1000);
});