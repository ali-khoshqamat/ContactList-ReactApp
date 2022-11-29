import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col w-full h-screen gap-y-5">
      <Header />
      <div className="flex flex-col items-center">{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
