import "./global.css";
import "./App.css";

import ImagePreview from "./components/ImagePreview";

function App() {
  return (
    <main>
      <button>Get Random Image</button>
      <ImagePreview
        src={
          "https://images.unsplash.com/photo-1603550648164-519b522fdc1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80"
        }
        alt={"Image Text"}
        author={"Flip"}
      />
    </main>
  );
}

export default App;
