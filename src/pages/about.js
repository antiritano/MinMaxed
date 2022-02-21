import { Layout } from "../components/Layout";
import Header from "../components/Header";
import AboutContent from "../components/AboutContent";

const navigationAbout = [
  { name: "Home", href: "/", current: false },
  { name: "Reviews", href: "#", current: false },
  { name: "Articles", href: "#", current: false },
  { name: "Community", href: "/community", current: false },
  { name: "About", href: "/about", current: true },
];

function AboutPage() {
  return (
    <Layout>
      <Header navigation={navigationAbout} />
      <AboutContent />
    </Layout>
  );
}

export default AboutPage;
