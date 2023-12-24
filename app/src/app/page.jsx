import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center bg-cover bg-no-repeat bg-center text-white" style={{ backgroundImage: 'url("/images/nebula.jpg")' }}>
      <div className="flex flex-col items-center justify-center p-10 w-full">
        <div className="text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-b from-white to-white bg-clip-text text-transparent">
            Welcome to The Next Era of Learning.
          </h1>
          <p className="text-lg font-bold max-w-lg mb-4 text-black">
            This is a space where professionals go to find meaningful ideas and discussions. Here's what we're exploring now.
          </p>
          <button className="px-4 py-2 cursor-pointer bg-white hover:bg-gray-500 rounded-lg text-black">
            <Link href="/articles">Discover our articles</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

