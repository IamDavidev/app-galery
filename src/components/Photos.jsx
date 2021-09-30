import { useEffect, useState } from "react";
import getPhotos from "../services/getPhotos";

const Photos = () => {
    const [photos__img, getPhotos__img] = useState([]);

    useEffect(() => {
      getPhotos().then((img) => getPhotos__img(img));
    }, []);
  return <>
  {
      photos__img.map(i=>(
        <img key={i.id} src={i.urls.small} alt={i.title}/>
      ))
  }
  </>;
};

export default Photos;

/* useEffect(() => {
    const keyLocalLast = keyword || localStorage.getItem("LastKey") || "Gatitos";
    GetGifs({ search: keyLocalLast }).then((gifs) => setGifs(gifs));
    localStorage.setItem("LastKey", keyword);
  }, [keyword]);
  return gifs;
}; */