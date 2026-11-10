import {
  createContext,
  useState,
  useMemo
} from 'react';

export const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {

  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage((previousLanguage) =>
      previousLanguage === 'en' ? 'bn' : 'en'
    );
  };

  const value = useMemo(() => ({
    language,
    setLanguage,
    toggleLanguage,

    isEnglish: language === 'en',
    isBangla: language === 'bn'

  }), [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};