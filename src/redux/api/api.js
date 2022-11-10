const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/gINbrGI6GybOSE438a8P/books';

const fetchBooksfromApi = async () => {
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
  return books;
};

export default fetchBooksfromApi;
