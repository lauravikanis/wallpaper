import "./FavoriteImage.css";
import IconButton from "./IconButton";

export default function FavoriteImage({ photoId }) {
  return (
    <div>
      <IconButton>🚫</IconButton>
      <img
        className="favoriteImage"
        src={`https://source.unsplash.com/${photoId}`}
        alt="favourites"
      />
    </div>
  );
}
