import NotFoundContent from "@/components/NotFoundContent";
import { Suspense } from "react";

function NotFound() {
  return (
    <Suspense fallback={<div />}>
      <NotFoundContent />
    </Suspense>
  );
}

export default NotFound;
