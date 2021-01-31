window.onload = () => {
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        console.log(request);
        console.log(sender);
        sendResponse('我知道了');
        chrome.notifications.create(null, {
            type: 'basic',
            iconUrl: 'icon.png',
            title: '这是标题',
            message: '大哥你让人揍了'
        });
    });
}