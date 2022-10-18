import Link from 'next/link';

export default function Home() {
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
            className="border p-2 rounded uppercase hover:bg-black hover:text-white"
            href="https://sshrt.link/bsukth"
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
      </nav>

      <div className="container px-10 py-64">
        <div className="space-y-10 text-center">
          <h1 className="font-black text-4xl uppercase md:text-6xl">
            Hello, I'm Barend Erasmus
          </h1>
          <h2 className="font-normal text-xl md:text-2xl">
            Designing and building systems for fintech companies
          </h2>
        </div>
      </div>
    </main>
  );
}
