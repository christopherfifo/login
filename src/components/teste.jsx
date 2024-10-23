import { useState } from 'react'
export default function Teste() {
  const [count, setCount] = useState(0);

  return (
    <>
    <h1 className="text-3xl font-bold underline">
      contador é {count}
    </h1>
    <button onClick={() => setCount((count) => count + 1)}>conatdor</button>
    </>
  );
}
