chrome.tabs.executeScript(
  {code: "window.getSelection().toString();"},
  function(selection) {
  $('#search').val(selection[0]);
});

window.onload = function() {
    document.querySelector('button').onclick = function(e) {
        e.preventDefault();
        chrome.tabs.create({'url': "http://www.congress.gov"});
    };
};
