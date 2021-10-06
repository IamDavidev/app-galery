import usePhotos from '../hooks/usePhotos';

const CardPhotos = ({ keyword, page }) => {
  const card__Images = usePhotos({ keyword: keyword }, { page: page });
  return (
    <>
      {card__Images.map((i) => (
        <div className="card card__img" key={i.id}>
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={i.urls.small} alt={i.alt_description} />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure>
                  <img
                    src={i.user.profile_image.large}
                    alt={i.user.id}
                    className="img__profile"
                  />
                </figure>
              </div>
              <br />
              <a
                href={i.user.links.html}
                target="_blank"
                rel="noopener noreferrer"
                className="title is-4"
              >
                {i.user.username}
              </a>
            </div>
          </div>

          <div className="card has-background-black-bis">
            <footer className="card-footer has-text-white">
              <a href={i.links.download} className="card-footer-item">
                view
              </a>
            </footer>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardPhotos;
