"use client";
export default function Error({ error, reset }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 text-gray-200">
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      <p className="text-lg">{error.message}!</p>

      <button
        onClick={reset}
        className="bg-accent-500 inline-block px-6 py-3 text-lg"
      >
        Try again
      </button>
    </main>
  );
}
