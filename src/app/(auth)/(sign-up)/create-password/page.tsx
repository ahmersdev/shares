import { CreatePassword } from "@/sections/auth/sign-up";
import { Suspense } from "react";

export default function CreatePasswordPage() {
  return (
    <Suspense>
      <CreatePassword />
    </Suspense>
  );
}
