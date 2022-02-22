import { Layout } from "../components/Layout";
import CommunityLinks from "../components/CommunityLinks";
import OurTeam from "../components/OurTeam";
import Header from "../components/Header";
import Contact from "../components/Contact";

const navigationCommunity = [
  { name: "Home", href: "/", current: false },
  { name: "Reviews", href: "#", current: false },
  { name: "Articles", href: "#", current: false },
  { name: "Community", href: "/community", current: true },
  { name: "About", href: "/about", current: false },
];

function CommunityPage() {
  return (
    <Layout>
      <Header navigation={navigationCommunity} />
      <CommunityLinks />
       <OurTeam/>
      <Contact />
    </Layout>
  );
}

export default CommunityPage;
