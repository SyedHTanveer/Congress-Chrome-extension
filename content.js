
window.addEventListener('mouseup', function () {
  let selectedText = window.getSelection().toString();
  console.log(selectedText);

  let mainText = selectedText;

  if (selectedText.slice(0,2) == "HR" || selectedText.slice(0,4) == "H.R." || selectedText.slice(0,2) == "S." || selectedText.slice(0,2) == "S ") {

    if (selectedText.slice(0,2) == "HR" || selectedText.slice(0,2) == "hr" ) {
      selectedText = selectedText.slice(2, selectedText.length);
      selectedText = selectedText.replace(/\s+/g, '');
      selectedText = 'https://www.congress.gov/bill/115th-congress/house-bill/' + selectedText + '/titles';
    }

    if (selectedText.slice(0,4) == "H.R." || selectedText.slice(0,4) == "h.r.") {
      selectedText = selectedText.slice(4, selectedText.length);
      selectedText = selectedText.replace(/\s+/g, '');
      selectedText = 'https://www.congress.gov/bill/115th-congress/house-bill/' + selectedText + '/titles';
    }

    if (selectedText.slice(0,2) == "S." || selectedText.slice(0,2) == "S ") {
      selectedText = selectedText.slice(2, selectedText.length);
      selectedText = selectedText.replace(/\s+/g, '');
      selectedText = 'https://www.congress.gov/bill/115th-congress/senate-bill/' + selectedText + '/titles';
    }

    $("body:contains(" + mainText + ")").html(function(_, html) {
       return html.split(mainText).join("<a href=" + selectedText + ">" + mainText + "</a>");
     }
   );
  };
});
