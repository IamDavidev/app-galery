export const getPhotos = async ({ keyword }) => {
  const response = await fetch(
    `https://api.unsplash.com/search/photos/?page=2&query=${keyword}&client_id=Q4GaPRqOy7Rl6uAFdwwHi9v8wUCvFZaWOxia5ZJuou0`
  ).then((res) => res.json());
  return response;
};
export default getPhotos;
