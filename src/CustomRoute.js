import Footer from "./Footer";
import Header from "./Header";

function CustomRoute({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default CustomRoute;
