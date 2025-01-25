'use client';
import styles from './index.module.css';
import React, { useState } from 'react';
import countries from './data';
import { Countries } from './types';
import Image from 'next/image';

const App: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<Countries>();
  const [usedIndex, setUsedIndex] = useState<Set<number>>(new Set());

  const randomCountry = () => {
    if (usedIndex.size === countries.length) {
      setUsedIndex(new Set());
      return;
    }

    let index: number;
    do {
      index = Math.floor(Math.random() * countries.length);
    } while (usedIndex.has(index));

    setUsedIndex(prev => new Set(prev).add(index));
    setSelectedCountry(countries[index]);
  };

  return (
    <div className={styles.container}>
      {selectedCountry && (
        <div className={styles.CountryBlock}>
          <Image src={selectedCountry.flag} alt="flag image" className={styles.flag} />
          <h2>{selectedCountry.name}</h2>
          <p>Capital: {selectedCountry.capital}</p>
          <p>Language: {selectedCountry.Language}</p>
          <p>Population: {selectedCountry.Population}</p>
          <p>Currency: {selectedCountry.Currency}</p>
        </div>
      )}
        <button onClick={randomCountry} className={styles.Button}>Select Random Country</button>
    </div>
  );
};

export default App;
