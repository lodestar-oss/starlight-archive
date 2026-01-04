import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">Home</h1>
      <Button onClick={() => setCount((prev) => prev + 1)}>
        Count: {count}
      </Button>
    </div>
  );
}
