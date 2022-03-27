import { Layout } from "../components/Layout";
import CommunityLinks from "../components/CommunityLinks";
import OurTeam from "../components/OurTeam";
import Header from "../components/Header";
import Contact from "../components/Contact";

const navigationCommunity = [
  { name: "Home", href: "/", current: false },
  { name: "Reviews", href: "/reviews", current: false },
  { name: "Articles", href: "/articles", current: false },
  { name: "Community", href: "/community", current: true },
  { name: "About", href: "/about", current: false },
];

function CommunityPage() {
  return (
    <Layout>
      <Header navigation={navigationCommunity} />
      <CommunityLinks />
      <Contact />
    </Layout>
  );
}

export default CommunityPage;
