"use client";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="h-full">
      <h1>helllooooô</h1>
      <div className="flex gap-x-2">
        <button onClick={() => setTheme("light")}>light</button>
        <button onClick={() => setTheme("dark")}>dark</button>
      </div>
    </div>
  );
}
