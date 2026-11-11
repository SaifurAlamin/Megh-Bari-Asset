
import { useLocation } from 'react-router-dom';

import AppRoutes from './app/AppRoutes';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

const App = () => {
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      {!isAdminRoute && <Navbar />}

      <AppRoutes />

      {!isAdminRoute && <Footer />}
    </>
  );
};

export default App;
