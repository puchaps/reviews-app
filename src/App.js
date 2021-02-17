import React from "react";

import ReviewsPreview from "./components/reviews-preview/reviews-preview.component";
import ReviewProvider from "./context/review.context";

const App = () => (
  <>
    <ReviewProvider>
      <ReviewsPreview />
    </ReviewProvider>
  </>
);

export default App;
