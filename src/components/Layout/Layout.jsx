import { Outlet } from 'react-router-dom';
import Header from '../common/Header/Header';
import Footer from '../common/Footer/Footer';
import './Layout.css';

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;