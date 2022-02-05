import {Route, Link, Routes, BrowserRouter} from "react-router-dom"
import './App.css';
import Home from './Home'
import Article from './pages/articles/[slug]'


function App() {
  return (
<BrowserRouter>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/Articles/:slug" element={<Article/>} />
</Routes>
</BrowserRouter>
  );
}

export default App;
