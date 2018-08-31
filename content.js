// Author: Syed Tanveer
// Last modified: August 31st, 2018
// OCIO: Congress.gov chrome extension

// This function will take the highlighted text, parse it to make sure it is in
// the proper format of the legislation, creates the weblink for that legislation
//  and sends all of that information to the background.js file. Once the information
//  has been sent to background.js, it will lookup the HTML of that page and send
//  a message to content.js that contains the summary information.

window.addEventListener('mouseup', function () {
  let selectedText = window.getSelection().toString(); //get the highlighted text

  let mainText = selectedText; // mainText will be the actual highlighted text, selectedText will be minipulated

  if (selectedText.slice(0,2) == "HR" || selectedText.slice(0,4) == "H.R." || selectedText.slice(0,2) == "S." || selectedText.slice(0,2) == "S ") { // checks to see proper format for the highlighted text

    if (selectedText.slice(0,2) == "HR" || selectedText.slice(0,2) == "hr" ) {
      selectedText = selectedText.slice(2, selectedText.length); // takes only the number portion of the highlighted text
      selectedText = selectedText.replace(/\s+/g, ''); // removes white spaces
      selectedText = 'https://www.congress.gov/bill/115th-congress/house-bill/' + selectedText; // creates the weblink
    }

    if (selectedText.slice(0,4) == "H.R." || selectedText.slice(0,4) == "h.r.") {
      selectedText = selectedText.slice(4, selectedText.length);
      selectedText = selectedText.replace(/\s+/g, '');
      selectedText = 'https://www.congress.gov/bill/115th-congress/house-bill/' + selectedText;
    }

    if (selectedText.slice(0,2) == "S." || selectedText.slice(0,2) == "S ") {
      selectedText = selectedText.slice(2, selectedText.length);
      selectedText = selectedText.replace(/\s+/g, '');
      selectedText = 'https://www.congress.gov/bill/115th-congress/senate-bill/' + selectedText;
    }

    // in order for the tooltip to be injected, we need to make the highlighted text a span element
    $("body:contains(" + mainText + ")").html(function(_, html) {
       return html.split(mainText).join("<a class='tooltip' href='" + selectedText +"'>" + mainText + "<span class='tooltiptext'>" + "loading..." + "</span></a>");
     });

    let message = {
      text: selectedText,
      leg: mainText
     };

    chrome.runtime.sendMessage(message); // sends message to backgruond.js
  };
});

// This function is for receiving the constructed message from background.js
//
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    $( ".tooltiptext" ).html("<strong>" + request.title + "</strong>" + "<br />" + request.summary); // takes the summary HTML and displays it onto the page
});
