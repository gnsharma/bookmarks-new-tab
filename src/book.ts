export const getBookmarksTree = async () => {
  return await browser.bookmarks.getTree();
};

export const getLimitedBookmarksList = (bookmarksList) => {
  const limitedBookmarksList = [];
  for (let i = 0; i < 12; i++) {
    const index = Math.floor(Math.random() * bookmarksList.length);
    limitedBookmarksList.push(bookmarksList[index]);
  }
  return limitedBookmarksList;
};

const bookmarksList = [];
export const getBookmarksList = (bookmarkItem) => {
  if (bookmarkItem.url) {
    if (["place:", "about:"].indexOf(bookmarkItem.url.slice(0, 6)) == -1) {
      if (bookmarkItem.url !== "data:") {
        bookmarksList.push(bookmarkItem);
      }
    }
  }
  if (bookmarkItem.children) {
    bookmarkItem.children.forEach((child) => getBookmarksList(child));
  }
  return bookmarksList;
};


