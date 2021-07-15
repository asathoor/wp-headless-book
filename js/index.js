/**
 * file: js/js.js
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
  // navigation panel
  document.getElementById('navHere').innerHTML = `

    <!-- navigation -->
    <nav id="navHeader" class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html">Headless WordPress</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">

          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <!-- nav items -->
            <li class="nav-item">
              <a class="nav-link"  href="#" onClick="theBook()">The Book</a>
            </li>

            <li class="nav-item">
              <a class="nav-link"  href="#" onClick="theTOC()">Content</a>
              </li>

            <li class="nav-item">
    New e-book: "Headless WordPress"          <!-- a class="nav-link" href="#" onClick="getPage(2784,cntRight)">The Author</a -->
              <a class="nav-link" href="#" onClick="theAuthorPage()">The Author</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="https://github.com/asathoor/wp-rest-api" target="_blank">Github</a>
            </li>
          </ul>
            <!-- /nav-items -->
        </div>
        </div>
    </nav>` // /navigation panel

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
