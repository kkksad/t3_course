'use client'
import React, { useState } from 'react';
import UserCard from './widgets/User/User';
import UserSkills from './widgets/Skills/Skills';
import styles from './styles/index.module.css';
import skills from './widgets/Skills/skillsData';
import user from './widgets/User/userData';

const App: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  const themeType = isDarkTheme ? styles.darkTheme : styles.lightTheme;

  return (
    <div className={`${styles.container} ${themeType}`}>
      <UserCard user={user} />
      <UserSkills skills={skills} />
      <button onClick={toggleTheme} className={styles.Button}>Сменить тему</button>
    </div>
  );
};


export default App;
