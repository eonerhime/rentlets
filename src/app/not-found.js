import Link from "next/link";

function NotFound() {
  return (
    <main className="flex flex-col justify-center items-center text-center space-y-6 mt-4 h-96">
      <h1 className="text-3xl font-semibold">
        ⛔ This page could not be found!
      </h1>
      <Link
        href="/home"
        className="inline-block bg-primary-400 uppercase hover:bg-accent-950 text-primary-50 px-6 py-3 text-lg"
      >
        Go back home
      </Link>
    </main>
  );
}

export default NotFound;
