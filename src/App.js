import "./App.css";
import { useState } from "react";
import ImagePreview from "./components/ImagePreview";
import { getRandomImage } from "./api/getRandomImage";
import FavoriteImage from "./components/FavoriteImage";

function App() {
  const [randomImage, setRandomImage] = useState(null);

  async function handleClick() {
    const randomImageResponse = await getRandomImage();
    setRandomImage(randomImageResponse);
  }

  return (
    <main>
      <button onClick={() => handleClick()}>Get Random Image</button>
      {randomImage && (
        <ImagePreview
          id={randomImage.id}
          src={randomImage.urls.regular}
          alt={randomImage.alt_description}
          author={randomImage.user.name}
        />
      )}

      <FavoriteImage photoId={"lZgBFD8yShA"} />
    </main>
  );
}

export default App;
