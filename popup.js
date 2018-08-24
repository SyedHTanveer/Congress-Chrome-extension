
chrome.tabs.executeScript(
  {code: "window.getSelection().toString();"},
  function(selection) {
  $('#search').val(selection[0]);
  document.querySelector('button').onclick = function(e) {

    switch($('#search-format').val()) {

      case "current-legislation":
        e.preventDefault();
        chrome.tabs.create({'url': "https://www.congress.gov/search?q=%7B%22congress%22%3A%22115%22%2C%22source%22%3A%22legislation%22%2C%22search%22%3A%22" + $('#search').val() + "%22%7D&searchResultViewType=expanded"});
        break;

      case "legislation":
        e.preventDefault();
        chrome.tabs.create({'url': "https://www.congress.gov/search?q=%7B%22source%22%3A%22legislation%22%2C%22search%22%3A%22" + $('#search').val() + "%22%7D&searchResultViewType=expanded"});
        break;

      case "all-sources":
        e.preventDefault();
        chrome.tabs.create({'url': "https://www.congress.gov/search?q=%7B%22congress%22%3A%22all%22%2C%22source%22%3A%22all%22%2C%22search%22%3A%22" + $('#search').val() + "%22%7D&searchResultViewType=expanded"});
        break;

      case "members":
        e.preventDefault();
        chrome.tabs.create({'url': "https://www.congress.gov/search?q=%7B%22source%22%3A%22members%22%2C%22search%22%3A%22" + $('#search').val() + "%22%7D&searchResultViewType=expanded"});
        break;

      case "congrecord":
        e.preventDefault();
        chrome.tabs.create({'url': "https://www.congress.gov/search?q=%7B%22source%22%3A%22congrecord%22%2C%22search%22%3A%22" + $('#search').val() + "%22%7D&searchResultViewType=expanded"});
        break;

      case "comreports":
        e.preventDefault();
        chrome.tabs.create({'url': "https://www.congress.gov/search?q=%7B%22source%22%3A%22comreports%22%2C%22search%22%3A%22" + $('#search').val() + "%22%7D&searchResultViewType=expanded"});
        break;

      case "nominations":
        e.preventDefault();
        chrome.tabs.create({'url': "https://www.congress.gov/search?q=%7B%22source%22%3A%22nominations%22%2C%22search%22%3A%22" + $('#search').val() + "%22%7D&searchResultViewType=expanded"});
        break;

      case "treaties":
      e.preventDefault();
      chrome.tabs.create({'url': "https://www.congress.gov/search?q=%7B%22source%22%3A%22treaties%22%2C%22search%22%3A%22" + $('#search').val() + "%22%7D&searchResultViewType=expanded"});
        break;

      case "house-communications":
        e.preventDefault();
        chrome.tabs.create({'url': "https://www.congress.gov/search?q=%7B%22source%22%3A%22house-communications%22%2C%22search%22%3A%22" + $('#search').val() + "%22%7D&searchResultViewType=expanded"});
        break;

      case "senate-communications":
        e.preventDefault();
        chrome.tabs.create({'url': "https://www.congress.gov/search?q=%7B%22source%22%3A%22senate-communications%22%2C%22search%22%3A%22" + $('#search').val() + "%22%7D&searchResultViewType=expanded"});
        break;

      default:
        console.log('Error: selected option is not valid. value is:' + $('#search-format').val());
        break;
    };
  };
});
