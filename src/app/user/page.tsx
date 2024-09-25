import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function UserPage() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-center gap-2">
      <h1 className="text-5xl">User</h1>
      <Link href="/" className="text-5xl underline">
        <Button>User</Button>
      </Link>
    </main>
  );
}
