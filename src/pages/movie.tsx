import Link from "next/link";

export default function Coupon() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-500 text-white text-center">
      <h1 className="text-4xl font-bold">🎟️ Movie Night Coupon 🎟️</h1>
      <p className="mt-4 text-xl">
        will you go out on a movie date with me???! 🍿💑
      </p>
      <Link
        href="/come-with-me"
        className="mt-6 bg-white text-blue-500 px-6 py-3 rounded-lg text-lg font-bold shadow-lg hover:bg-gray-100"
      >
        Proceed to movieeee
      </Link>
    </div>
  );
}
