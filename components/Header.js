/* eslint-disable @next/next/no-html-link-for-pages */

import React from 'react';

import Counter from './Counter';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header>
      <Navigation />
      <Counter />
    </header>
  );
}
