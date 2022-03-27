import Header from "../../components/Header";
import { Layout } from "../../components/Layout";
import RecentReviewsList from "../../components/RecentReviewsList"
import ReviewFullList from "../../components/ReviewFullList";
import Pagination from "../../components/Pagination";

const navigationArticles = [
  { name: "Home", href: "/", current: false },
  { name: "Reviews", href: "/reviews", current: false },
  { name: "Articles", href: "/articles", current: true },
  { name: "Community", href: "/community", current: false },
  { name: "About", href: "/about", current: false },
];

function ArticleListPage() {
  return (
    <div className="App">
      <Layout>
        <Header navigation={navigationArticles} />
       <RecentReviewsList header="Latest Articles" />
       <ReviewFullList />
       <Pagination />
      </Layout>
    </div>
  );
}
export default ArticleListPage