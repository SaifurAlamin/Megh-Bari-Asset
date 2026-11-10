import {
  useEffect,
  useState
} from 'react';

const useScroll = (threshold = 50) => {

  const [scrollY, setScrollY] = useState(0);

  const [scrollDirection, setScrollDirection] = useState('up');

  useEffect(() => {

    let previousScrollY = window.scrollY;

    const handleScroll = () => {

      const currentScrollY = window.scrollY;

      setScrollY(currentScrollY);

      if (currentScrollY > previousScrollY) {
        setScrollDirection('down');
      }

      else if (currentScrollY < previousScrollY) {
        setScrollDirection('up');
      }

      previousScrollY = currentScrollY;
    };

    window.addEventListener(
      'scroll',
      handleScroll,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll
      );
    };

  }, []);

  return {
    scrollY,
    scrollDirection,
    isScrolled: scrollY > threshold
  };
};

export default useScroll;