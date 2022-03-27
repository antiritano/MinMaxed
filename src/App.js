import { Route, Link, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ReviewPage from "./pages/reviews/[slug]";
import CommunityPage from "./pages/community";
import AboutPage from "./pages/about";
import ReviewListPage from "./pages/reviews/index"
import ArticlesListPage from "./pages/articles/index"
import ArticlePage from "./pages/articles/[slug]"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews/:slug" element={<ReviewPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/reviews" element={<ReviewListPage />} />
        <Route path="/articles/:slug" element={<ArticlePage />} />
        <Route path="/articles" element={<ArticlesListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
