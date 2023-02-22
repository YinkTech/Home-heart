import React, { useEffect, useState } from 'react'
import './../styles/darkMode.css';

const Theme = () => {
  const [themes, setTheme] = useState(
    localStorage.getItem('themes') || 'light'
   );

  const toggleTheme = () => {
    if (themes === 'light') {
      setTheme('dark');
      window.location.reload();
    } else {
      setTheme('light');
      window.location.reload();
    };
  };

   useEffect(() => {
    localStorage.setItem('themes', themes);
    document.body.className = themes;
   }, [themes]);
   
  return (
    <div className={`toggle-mode ${themes}`}>
      <i onClick={toggleTheme} className='bi bi-brightness-high'></i>
   </div>
  )
}

export default Theme;