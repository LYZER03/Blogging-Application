import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center gap-20">
      <div className="flex flex-col gap-12">
        <h1 className="text-6xl bg-gradient-to-b from-green-900 via-green-600 to-blue-500 bg-clip-text text-transparent"> 
          Explore a diverse range of topics.
        </h1>
        <p className="text-xl font-light">

          Are you ready to embark on a journey of knowledge, inspiration, and discovery? You've come to the right place.
        </p>
        <button className="px-4 py-2 cursor-pointer bg-green-800 rounded-lg max-w-max text-white">
          <Link href="/articles">See our articles</Link>
        </button>
      </div>
      <div className="w-full h-80 object-contain">
        <Image width={700} height={700} src="/images/stellar.jpg" alt="home page illustration"/>
      </div>
    </div>
  )
}
