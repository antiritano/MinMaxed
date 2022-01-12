
import './App.css';
import { Layout } from './components/Layout';
import Hero from './components/Hero'
import MostRecent from './components/MostRecent'
import RetroReviewCards from './components/RetroReviewCards';
function App() {
  return (
<div>
      <Layout>
      <Hero/>
  <MostRecent/>
  <RetroReviewCards/>
      </Layout>


  </div>
  );
}

export default App;
