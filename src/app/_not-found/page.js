import NotFoundContent from "@/app/_not-found/NotFoundContent";

import { Suspense } from "react";

function NotFound() {
  return (
    <Suspense fallback={<div />}>
      <NotFoundContent />
    </Suspense>
  );
}

export default NotFound;
