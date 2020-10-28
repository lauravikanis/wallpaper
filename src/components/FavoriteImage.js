import "./FavoriteImage.css";

export default function FavoriteImage({ photoId }) {
  return (
    <img
      className="favoriteImage"
      src={`https://source.unsplash.com/${photoId}`}
      alt="favourites"
    />
  );
}
