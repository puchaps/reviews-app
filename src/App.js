import ReviewsPreview from "./components/reviews-preview/reviews-preview.component";
import ReviewProvider from "./context/review.context";

const App = () => {
  return (
    <div className="app">
      <ReviewProvider>
        <ReviewsPreview/>
      </ReviewProvider>
    </div>
  );
}

export default App;
