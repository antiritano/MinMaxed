import Header from "../../components/Header";
import { Layout } from "../../components/Layout";
import RecentReviewsList from "../../components/RecentReviewsList"
import ReviewFullList from "../../components/ReviewFullList";
import Pagination from "../../components/Pagination";

const navigationReview = [
  { name: "Home", href: "/", current: false },
  { name: "Reviews", href: "/reviews", current: true },
  { name: "Articles", href: "#", current: false },
  { name: "Community", href: "/community", current: false },
  { name: "About", href: "/about", current: false },
];

function ReviewListPage() {
  return (
    <div className="App">
      <Layout>
        <Header navigation={navigationReview} />
       <RecentReviewsList header="Latest Reviews" />
       <ReviewFullList />
       <Pagination />
      </Layout>
    </div>
  );
}
export default ReviewListPage