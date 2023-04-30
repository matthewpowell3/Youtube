chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === 'getVideoUrl') {
    var videoUrl = window.location.href;
    sendResponse({ videoUrl: videoUrl });
  }
});
