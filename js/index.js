const createEl = (text) => {
    const textContainer = document.createElement('div');
    textContainer.className = 'what-are-you-looking-at-text'
    textContainer.innerHTML = text;
    return textContainer;
}

window.onload = () => {
    let timer = null;
    const textArray = [
        '你瞅啥',
        '瞅你咋地',
        '你再瞅我试试',
        '试试就试试'
    ];

    timer = setTimeout(async () => {
        const lookAtContainer = document.createElement('div');
        lookAtContainer.className = 'what-are-you-looking-at';
        document.body.appendChild(lookAtContainer);
        for (const x of textArray) {
            await new Promise((resolve) => {
                setTimeout(() => {
                    lookAtContainer.innerHTML = '';
                    lookAtContainer.appendChild(createEl(x));
                    resolve();
                }, 3000);
            })
        }

        setTimeout(() => {
            chrome.runtime.sendMessage({message: '大哥你让人揍了'}, (response) => {
                console.log('response: ' + response);
            });
            lookAtContainer.onclick = () => {
                document.body.removeChild(lookAtContainer);
            }
        }, 1000);
    }, 10000);
    // document.body.onclick = (e) => {
    //     const c = Math.random().toString(16).substr(3, 6);
    //     e.target.style.backgroundColor = `#${c}`;
    // }
}