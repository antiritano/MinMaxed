import Header from "../../components/Header";
import { Layout } from "../../components/Layout";
import Review from "../../components/Review";
import { ReviewHero } from "../../components/ReviewHero";

const navigationArticle = [
  { name: "Home", href: "/", current: false },
  { name: "Reviews", href: "/reviews", current: false },
  { name: "Articles", href: "/articles", current: true },
  { name: "Community", href: "/community", current: false },
  { name: "About", href: "/about", current: false },
];

function ArticlePage() {
  return (
    <div className="App">
      <Layout>
        <Header navigation={navigationArticle} />
        <ReviewHero />
        <Review />
      </Layout>
    </div>
  );
}

export default ArticlePage;
