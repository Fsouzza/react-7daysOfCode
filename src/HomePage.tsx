import React from 'react';
import { Menu } from './components/header/menu';
import { NewsLetter } from './components/newsLetter/newsLetter';

export default function HomePage() {
  return (
    <main>
      <Menu />
      <NewsLetter />
    </main>
  );
}

