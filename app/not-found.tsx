import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">404</h1>
      <p className="text-gray-600 mb-6">This page could not be found.</p>
      <Link
        href="/"
        className="px-5 py-2.5 rounded-lg bg-[#38419A] text-white font-medium hover:opacity-90"
      >
        Go home
      </Link>
    </div>
  );
}
