import {Route, Link, Routes, BrowserRouter} from "react-router-dom"
import './App.css';
import Home from './Home'
import ReviewPage from './pages/reviews/[slug]'
import CommunityPage from './pages/community'


function App() {
  return (
<BrowserRouter>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/reviews/:slug" element={<ReviewPage/>} />
<Route path='/community' element={<CommunityPage/>} />
</Routes>
</BrowserRouter>
  );
}

export default App;
