
'use client';

import { useState } from "react";
import Card from "@/components/Card";

export default function Home() {
  const [ isVisible, setIsVisible ] = useState(true);
  const [ names, setNames ] = useState(['Marcos', 'Vinicius', 'Drak Lians']);
  const name = "Vinicius";

  const handleClick = () => {
    setIsVisible(!isVisible);
  }

  const handleAdd = () => {
    setNames([...names, 'New element!']);
  }

  const cards = isVisible 
    && names.map((name, index) => <Card key={index}>{name}</Card>); 

  return (
    <>
      <div className="space-y-4">
        <div>Hello, {name}</div>
        {cards}
        <div className="flex space-x-4">
          <button className="cursor-pointer" onClick={handleClick}>
          {isVisible ? 'Hide' : 'Show'}
          </button>
          <button className="cursor-pointer" onClick={handleAdd}>Add</button>
        </div>
      </div>
    </>
  );
}
