// This is a Server Component
import SearchClient from "@/components/SearchClient";
import { Suspense } from "react";

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="text-center p-7">Loading...</div>}>
      <SearchClient />
    </Suspense>
  );
}
