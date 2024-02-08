import { useState } from 'preact/hooks';

export default function Greeting({ messages }: { messages: string[] }) {
  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];
  const [greeting, setGreeting] = useState(randomMessage());

  function handleClick() {
    setGreeting(randomMessage());
  }

  return (
    <div>
      <h3>{greeting} ¡Gracias por tu visita!</h3>
      <button onClick={handleClick}>
        Nuevo saludo
      </button>
    </div>
  );
}