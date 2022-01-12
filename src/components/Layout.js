import Header from './Header';
import Footer from './Footer';
export const Layout = ({ children }) => {
  return (
    <div>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&display=swap"
          rel="stylesheet"
        />
      </head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
