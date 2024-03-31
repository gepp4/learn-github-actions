import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 text-2xl h-screen ">
      <h1 className="animate-pulse">
        <pre className="border-2 rounded-xl p-2">npm run test</pre>
      </h1>
    </div>
  );
}
