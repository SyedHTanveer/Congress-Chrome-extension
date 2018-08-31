// Author: Syed Tanveer
// Last modified: August 31st, 2018
// OCIO: Congress.gov chrome extension
//
// this function will send an AJAX request to the constructed link in content.js
// and return the HTML of it. Then, the function will parse the HTML to gather
// the title of the legislation and the number of summaries of the legislation.
// Once that is complete and the HTML has been parsed properly, it will construct
// a message object and send it back to conent.js to be rendered onto the page.

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    $.ajax({
    url: request.text,
        type:'GET',
        success: function(data) {

          let message = {
            summary: '',
            title: ''
          };

           let leg_Summary = $(data).find('#summarySelector').html(); // assigns the HTML for summary to a variable
           let leg_Title = $(data).filter('title').text(); // assigns the Title of the legislation to a variable

           console.log(leg_Title);
           console.log(leg_Summary);

           let endpoint = 0; // this variable will be used to hold the index of where the string will be parsed to.

           // iterates through the summary string to delete the CRS link and cleans the text up for proper display
           for (i=0; i < leg_Summary.length; i++) {
             if(leg_Summary[i] == '.' && leg_Summary[i-1] == request.leg[request.leg.length-1]) {
               endpoint = i;
               break;
             }
           }

           leg_Summary = leg_Summary.slice(4, endpoint); // creates the new string that will be displayed

           // iterates through the title string to delete the tags and uneeded text for proper display
           for (i=0; i < leg_Title.length; i++) {
             if(leg_Title[i] == '|') {
               endpoint = i-1;
               break;
             }
           }

           leg_Title = leg_Title.slice(7, endpoint); // creates the new string that will be displayed

           // adding the newely parsed strings to the message we will send to content.js
           message.summary = leg_Summary;
           message.title = leg_Title;

           chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
             console.log(message);
             chrome.tabs.sendMessage(tabs[0].id, message); // sends the message to content.js
         });
        }
    });
});
