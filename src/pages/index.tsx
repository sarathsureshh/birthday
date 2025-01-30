import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-purple-500 text-white text-center">
      <h1 className="text-5xl font-bold">Happy Birthday Kanmani! ❤️</h1>
      <p className="mt-4 text-xl max-w-xl">
        You are my most favourite human in this entire world 💖
      </p>
      <Link
        href="/our-memories"
        className="mt-6 bg-white text-pink-500 px-6 py-3 rounded-lg text-lg font-bold shadow-lg hover:bg-gray-100"
      >
        See Our Memories
      </Link>
    </div>
  );
}
