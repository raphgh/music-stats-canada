import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';
import './App.css';

function TranslateButton() {
  const { i18n } = useTranslation();
  const [picked, setPicked] = useState(false);

  const handleClick = () => {
    const newLang = picked ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
    setPicked(!picked);
  };

  return (
    <Button
      className="translatebtn"
      onClick={handleClick}
    >
      {picked ? 'EN' : 'FR'}
    </Button>
  );
}

export default TranslateButton;
