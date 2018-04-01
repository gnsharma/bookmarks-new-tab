function addElement (item) { 
    var newDiv = document.createElement("div"); 
    newDiv.className += 'col s3';
    
    var newCard = document.createElement("div"); 
    newCard.className += "card-panel ";
    
    var aTag = document.createElement('a');
    aTag.setAttribute('href', item.url);
    aTag.innerText = item.title;
    
    newCard.appendChild(aTag);
    newDiv.appendChild(newCard);
    return newDiv;
    // add the newly created element and its content into the DOM 
}

function addAll(items){
    for(var i = 0; i < 12; i++){
    	if ( i < 4) var currentDiv = document.getElementById("topRow");
    	if ( i >= 4 && i < 8) var currentDiv = document.getElementById("middleRow");
    	if ( i >= 8 && i < 12) var currentDiv = document.getElementById("bottomRow");
    	var index = Math.floor(Math.random() * Math.floor(items.length))
        var newDiv = addElement(items[index]);
        currentDiv.appendChild(newDiv);
    }
}

var items = [];
function logItems(bookmarkItem) {
    if (bookmarkItem.url) {
        console.log(bookmarkItem.url);
        if ( ['place:', 'about:'].indexOf(bookmarkItem.url.slice(0, 6)) == -1) {
	    if ( bookmarkItem.url !== 'data:') {
	        items.push(bookmarkItem);
	    }
	}
    } 
    if (bookmarkItem.children) {
        for (child of bookmarkItem.children) {
            logItems(child);
        }
    }
    return items;
}

function logTree(bookmarkItems) {
    var items = logItems(bookmarkItems[0]);
    addAll(items);
}

function onRejected(error) {
    console.log(`An error occurred: ${error}`);
}

var gettingTree = browser.bookmarks.getTree();
gettingTree.then(logTree, onRejected);
