/**
 * file: js/index.js
 **/

// endpoint
const getPosts = "https://multimusen.dk/wpsandbox/wp-json/wp/v2/pages/"

// Fetch a page via id
function getPage(pageId, showIn) {

  // preloader bt-spinner (I know, not a solution, but ... WTH)
  cntRight.innerHTML = '<div id="preloader" class="spinner-border text-success" role="status">'
  cntLeft.innerHTML = '<div id="preloader" class="spinner-border text-success" role="status">'

  fetch(getPosts + pageId).then(
    response => {
      return response.json(); // get JSON data$
    }).then(data => {

    //preloader.style.display = 'none'

    (data); // what's in the JSON string?

    // create HTML here
    showIn.innerHTML = '<article>' +
      '<h2>' + data.title.rendered + '</h2>' +
      '<div>' +
      data.content.rendered +
      '</div>' +
      '</article>'

  }).catch(err => {
    // Do something with error here
    console.log('Error: ' + err)
  })
}

// order now button
orderNowBtn.addEventListener('click', function() {
  const win = window.open('https://www.lulu.com/en/en/shop/per-skolander-thykjaer-jensen/beginning-headless-wordpress/ebook/product-me8yg8.html?page=1&pageSize=4', '_blank');
  win.focus();
})

// initial setup
const __Init = (function() {
  getPage(2819,cntLeft) // book cover
  getPage(2761,cntRight) // new e-book page
}())

// the author page
let theAuthorPage = function(){
  getPage(2784,cntLeft) // author text
  getPage(2819,cntRight) // book cover
}

// the Book
let theBook = function(){
  getPage(2761,cntLeft) // author text
  getPage(2819,cntRight) // book cover
}

// the content
let theTOC = function(){
  getPage(2780,cntLeft) // author text
  getPage(2819,cntRight) // book cover
}
