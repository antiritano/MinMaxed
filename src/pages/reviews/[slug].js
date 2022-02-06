import Header from "../../components/Header";
import { Layout } from "../../components/Layout";
import Review from "../../components/Review";
import { ReviewHero } from "../../components/ReviewHero";

const navigationReview = [
  { name: 'Home', href: '/', current: false },
  { name: 'Reviews', href:'#', current: true },
  { name: 'Articles', href:'#', current: false },
  { name: 'Community', href:'/community', current: false, },
  { name: 'About', href:'#', current: false },
];

function ReviewPage() {
  return (
    <div className="App">
      <Layout>
        <Header navigation={navigationReview}/>
        <ReviewHero/>
    <Review/>
      </Layout>
    </div>
  );
}

export default ReviewPage;

