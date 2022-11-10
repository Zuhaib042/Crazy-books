const baseUrl = // eslint-disable-line
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/gINbrGI6GybOSE438a8P/books';

export const fetchBooksfromApi = async () => {
  const res = await fetch(baseUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const allBooks = await res.json();
  const books = Object.keys(allBooks).map((id) => ({
    id,
    title: allBooks[id][0].title,
    author: allBooks[id][0].author,
    category: allBooks[id][0].category,
  }));
  // .sort((bookA, bookB) => bookA.title.localeCompare(bookB.title));
  return books;
};

export const addBooktoApi = async ({ id, title, author, category }) => {
  await fetch(baseUrl, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      title,
      author,
      category,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const removeBookfromApi = async (id) => {
  await fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
