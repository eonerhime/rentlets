"use client";

import { useSearchParams } from "next/navigation";

export default function NotFoundContent() {
  const searchParams = useSearchParams();
  const attemptedPath = searchParams.get("path") || "unknown";

  return (
    <div className="text-center p-8">
      <h1 className="text-2xl font-bold">404 - Page Not Found</h1>
      <p className="mt-2 text-gray-500">You tried to access: {attemptedPath}</p>
    </div>
  );
}
