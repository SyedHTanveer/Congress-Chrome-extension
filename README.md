## Congress.gov chrome extension
This extension will allow users to take a legislation that is mentioned in an article, and be able to search it on Congress.gov or get the title and the number of summaries for that legislation in a tooltip on the page.

## Screenshots
![highlighted text and popup example](./tests/highlighted_text_search_example.png?raw=true "highlighted text example")
</br>
</br>
![tooltip example](./tests/tooltip_example.png?raw=true "tooltip example")

## Tech/framework used
<b>Built with</b>
- [jQuery](https://jquery.com/)
- [Bootstrap v4](https://getbootstrap.com/)

## Installation
First, you will download the files into whichever directory you want to. Then, go to chrome://extensions/ in a chrome browser. Make sure that the Developer mode is on so that you can load the extensions. After that, click on Load unpacked and navigate to the downloaded directory. Once that happens, it should pop up onto the main page as Congress Legislation Tool 1.0. if that does show up, that means you have it installed! If you havn't gotten it working, make sure that you see the manifest.json file in the directory. If that is not the problem, please contact us.

## Features
User have the ability to highlight text on a page, have the text show up in the popup of the extension, and be able to search the selected text directly on congress.gov. A new tab will open once the search button is clicked.

## Tests
testing was done on [this article on riponadvance](https://riponadvance.com/stories/thornberry-turner-cole-laud-final-house-passage-of-national-defense-authorization-act/). additional tests were done on numerous other srouces to see what limitations were to come up.

## limitations
1. on some pages, when you try to highlight a legislation that is mentioned in the H.R./HR/S/S.1234 format, the page will go white because there is a security issue with injecting code into the source.
