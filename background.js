chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    $.ajax({
    url: request.text,
        type:'GET',
        success: function(data) {
           let message = $(data).find('#summarySelector').html();
           
           console.log(message);

           chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
             console.log(message);
             chrome.tabs.sendMessage(tabs[0].id, message);
         });
        }
    });
});
