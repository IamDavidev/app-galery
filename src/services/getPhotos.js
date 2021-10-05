export const getPhotos = async ({ keyword, i }) => {
  const response = await fetch(
    `https://api.unsplash.com/search/photos/?page=${i}&per_page=30&query=${encodeURI(
      keyword
    )}&client_id=Q4GaPRqOy7Rl6uAFdwwHi9v8wUCvFZaWOxia5ZJuou0`
  ).then((res) => res.json());
  console.log(
    `https://api.unsplash.com/search/photos/?page=${i}&per_page=30&query=${encodeURI(
      keyword
    )}&client_id=Q4GaPRqOy7Rl6uAFdwwHi9v8wUCvFZaWOxia5ZJuou0`
  );
  return response;
};
export default getPhotos;
