import AppRoutes from './app/AppRoutes';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

const App = () => {
  return (
    <>
      <Navbar />

      <AppRoutes />

      <Footer />
    </>
  );
};

export default App;