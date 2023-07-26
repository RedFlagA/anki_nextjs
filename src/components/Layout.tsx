import Link from 'next/link';
import Header from './Header';
import Footer from './Footer';
const Layout = ({ children}: any) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default Layout
