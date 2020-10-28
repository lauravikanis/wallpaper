import React from "react";
import "./ImagePreview.css";
import IconButton from "./IconButton";

export default function ImagePreview({ src, alt, author, id }) {
  // function addFavourites(id) {
  //   const oldFavourites = JSON.parse(
  //     localStorage.getItem("favourites") || "[]"
  //   );
  //

  //   const newFavourites = [...oldFavourites, id];
  //   localStorage.setItem("favourites", JSON.stringify(newFavourites));
  // }

  return (
    <div className="imageContainer">
      <IconButton
        onClick={() => {
          let favorites = null;
          try {
            favorites = JSON.parse(localStorage.getItem("favorites")) || [];
          } catch (error) {
            // Parsing JSON might fail
            console.error(error);
            favorites = [];
          }
          if (favorites.includes(id)) {
            // Already added to favorites
            return;
          }
          const newFavorites = [...favorites, id];
          localStorage.setItem("favorites", JSON.stringify(newFavorites));
        }}
      >
        🖤
      </IconButton>
      <img className="imageThumb" src={src} alt={alt} />
      <p className="imageAuthor">Author: {author}</p>
    </div>
  );
}
