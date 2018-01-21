function addElement (text) { 
  // create a new div element 
  var newDiv = document.createElement("div"); 
  // and give it some content 
  var newContent = document.createTextNode(text); 
  // add the text node to the newly created div
  newDiv.appendChild(newContent);  
  return newDiv;
  // add the newly created element and its content into the DOM 
}

function addAll(items){
  //var currentDiv = document.getElementById("p1");
  //document.body.insertAfter(newDiv, currentDiv);
  for(item of items){
    var newDiv = addElement(item);
    document.body.appendChild(newDiv);
  }
}

var items = [];
function logItems(bookmarkItem) {
  if (bookmarkItem.url) {
    console.log(bookmarkItem.url);
    items.push(bookmarkItem.url);
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
  console.log(`An error: ${error}`);
}

var gettingTree = browser.bookmarks.getTree();
gettingTree.then(logTree, onRejected);
