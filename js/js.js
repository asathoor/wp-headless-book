/**
 * file: js/js.js
 **/

// test
console.log('js/js.js = ok!')

// lorem ipsum generator
const Lorem = function() {
  return TestImage('Image', 500, 500) +
    `
    <h2> Nicolas et Perenelle Flamel </h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione praesentium repellat cupiditate sunt, libero esse nostrum saepe, iure molestias. Nam ut consectetur hic deleniti adipisci in unde, molestias totam quasi.
    </p>
    <ul>
      <li> <a href="#"> Hyperlink </a>
      <li> List item
    </ul>
    <h2> Lapis Philosophorum </h2>
    ${TestImage('Video', 640, 480)}
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione praesentium repellat cupiditate sunt, libero esse nostrum saepe, iure molestias. Nam ut consectetur hic deleniti adipisci in unde, molestias totam quasi.
    </p>
   `
}

// dummy image
const TestImage = function(message, w, h) {
  return `
  <figure class="figure">
      <img src="https://via.placeholder.com/${w}x${h}?text=${message}" alt="dummy image" class="img-fluid">
      <figcaption class="figure-caption">Splendor Solis.</figcaption>
  </figure>
   `
}

// add dummy content to the layout
leftText.innerHTML = Lorem()
for (let i=0;i<7;i++){ centerText.innerHTML += Lorem() }
for (let i=0;i<3;i++){ rightText.innerHTML += Lorem() }
hero.innerHTML = TestImage('Carousel', 2000, 400)
