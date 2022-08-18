import Link from 'next/link';
import { useEffect, useState } from 'react';
import * as Uuid from 'uuid';

export default function RandomGenerator() {
  const [state, setState] = useState({
    creditCardNumber: `${Math.floor(
      Math.random() * (10000 - 1000 + 1) + 1000
    )}-${Math.floor(Math.random() * (10000 - 1000 + 1) + 1000)}-${Math.floor(
      Math.random() * (10000 - 1000 + 1) + 1000
    )}-${Math.floor(Math.random() * (10000 - 1000 + 1) + 1000)}`,
    id: Math.floor(Math.random() * (10000 - 1000 + 1) + 1000),
    uuid: Uuid.v4().toUpperCase(),
  });

  useEffect(() => {
    setState({
      creditCardNumber: `${Math.floor(
        Math.random() * (10000 - 1000 + 1) + 1000
      )}-${Math.floor(Math.random() * (10000 - 1000 + 1) + 1000)}-${Math.floor(
        Math.random() * (10000 - 1000 + 1) + 1000
      )}-${Math.floor(Math.random() * (10000 - 1000 + 1) + 1000)}`,
      id: Math.floor(Math.random() * (10000 - 1000 + 1) + 1000),
      uuid: Uuid.v4().toUpperCase(),
    });
  }, []);

  return (
    <main>
      <nav className="container flex font-bold p-5 space-x-5">
        <div className="flex-1">
          <Link href="/">
            <a className="p-2 uppercase">Hire Barend</a>
          </Link>
        </div>
        <div>
          <a
            className="border hover:bg-black hover:text-white p-2 rounded uppercase"
            href="https://www.linkedin.com/in/hirebarend"
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
      </nav>

      <div className="container px-10 py-32">
        <div className="space-y-10 text-center">
          <h1 className="font-black text-4xl md:text-6xl uppercase">
            Random Generator
          </h1>
          <p>
            ID
            <br />
            {`${state.id}`}
          </p>
          <p>
            UUID
            <br />
            {`${state.uuid}`}
          </p>
          <p>
            CREDIT CARD NUMBER
            <br />
            {state.creditCardNumber}
          </p>
        </div>
      </div>
    </main>
  );
}
