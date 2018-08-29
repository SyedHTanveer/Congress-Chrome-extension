chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    let message = {
      text: {}
    };
    $.ajax({
    url: request.text,
        type:'GET',
        success: function(data) {
           message.text = $(data).find('#summarySelector').html();
           console.log(message.text);
        }

    });

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, message);
  });
});
