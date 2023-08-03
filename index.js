function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  const url = "https://anapioficeandfire.com/api/books"
  const fetcher = () => {
    fetch(url)
    .then(response => response.json())
    .then(resData => {
      renderBooks(resData)
    })
  }
  return fetcher()
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

