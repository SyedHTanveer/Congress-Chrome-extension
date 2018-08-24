
$(document).ready(function() {
            $('.tooltip').tooltipster();
        });


$('.tooltip').tooltipster({
            theme: 'tooltipster-shadow'
        });


window.addEventListener('mouseup', function () {
  let selectedText = window.getSelection().toString();
  console.log(selectedText);

  let mainText = selectedText;

  if (selectedText.slice(0,2) == "HR" || selectedText.slice(0,4) == "H.R." || selectedText.slice(0,2) == "S.") {

    if (selectedText.slice(0,2) == "HR") selectedText = selectedText.slice(2, selectedText.length);
    if (selectedText.slice(0,4) == "H.R.") selectedText = selectedText.slice(4, selectedText.length);
    if (selectedText.slice(0,2) == "S.") selectedText = selectedText.slice(2, selectedText.length);
    selectedText = selectedText.replace(/\s+/g, '');
    selectedText = 'https://www.congress.gov/bill/115th-congress/house-bill/' + selectedText;
    console.log(selectedText);
    let message = {
      text: selectedText
    };

    $("body:contains(" + mainText + ")").html(function(_, html) {
       return html.split(mainText).join("<span class='tooltip' title='This is my span\'s tooltip message!'>" + mainText + "</span>");
    });

    chrome.runtime.sendMessage(message);
  }

  // chrome.runtime.onMessage.addListener(
  //   function(request, sender, sendResponse) {
  //
  //
  //
  //   }
  // });

});
