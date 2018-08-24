// 
//
// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//
//   $.ajax({
//     url: request.text,
//     cache: false,
//     success: function(response) {
//         result = $(response).find("#result");
//         // alert(response); // works as expected (returns all html)
//         // alert(result); // returns [object Object]
//     }
//   });
// });
