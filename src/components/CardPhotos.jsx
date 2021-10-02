import usePhotos from '../hooks/usePhotos';
const CardPhotos = ({props}) => {
  console.log(props);
  const card__Images = usePhotos({ keyword:props });

  return (
    <div className="render__imgs  ">
      <>
        {card__Images.map((i) => (
          <div class="card card__img">
            <div className="card-image">
              <figure class="image is-4by3">
                <img src={i.urls.small} alt={i.alt_description} />
              </figure>
            </div>
            <div className="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src={i.user.profile_image.large} alt={i.user.id} />
                  </figure>
                </div>
                <div class="media-content">
                  <a
                    href={i.user.links.html}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="title is-4"
                  >
                    {i.user.username}{' '}
                  </a>
                  <br />
                  <p class="subtitle is-6">{i.user.first_name}</p>
                </div>
              </div>
            </div>

            <div className="card">
              <footer className="card-footer">
                <a href={i.links.download} class="card-footer-item">
                  view
                </a>
                <a
                  href={i.links.download_location}
                  className="card-footer-item"
                >
                  Edit
                </a>
                <a href={i.links.self} className="card-footer-item">
                  Delete
                </a>
              </footer>
            </div>
          </div>
        ))}
      </>
    </div>
  );
};

export default CardPhotos;
