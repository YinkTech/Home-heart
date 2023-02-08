import React, { useEffect, useState } from 'react'
import './../styles/darkMode.css';

const Theme = () => {
  const [themes, setTheme] = useState(
    localStorage.getItem('themes') || 'light'
   );

  const toggleTheme = () => {
    if (themes === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    };
  };

   useEffect(() => {
    localStorage.setItem('themes', themes);
    document.body.className = themes;
   }, [themes]);
   
  return (
    <div className={`toggle-mode ${themes}`}>
      <i onClick={toggleTheme} className='bi bi-lamp-fill'></i>
   </div>
  )
}

export default Theme;