import Link from 'next/link';

export default function ProjectsFileMonkey() {
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

      <div className="container px-10 py-64">
        <div className="space-y-10 text-center">
          <h1 className="font-black text-4xl md:text-6xl uppercase">
            Hello, I'm Barend Erasmus
          </h1>
          <h2 className="font-normal text-xl md:text-2xl">
            Designing and building systems for companies
          </h2>
        </div>
      </div>
    </main>
  );
}

export async function getStaticProps() {
  return {
    props: {
      meta: {
        description: '',
        slug: null,
        title: 'File Monkey | Hire Barend',
      },
    },
  };
}
