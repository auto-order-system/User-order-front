"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [inputName, setInputName] = useState<string>("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString());
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setName(inputName);
    setInputName("");
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        {/* 현재 시간 표시 */}
        <div className="text-center text-base sm:text-lg text-gray-700 dark:text-gray-200">
          🕒 Current Time: <span className="font-semibold">{currentTime}</span>
        </div>

        {/* 이름 입력 */}
        <form
          onSubmit={handleSubmit}
          className="flex gap-2 flex-col sm:flex-row items-center"
        >
          <input
            type="text"
            placeholder="Enter your name"
            className="border px-3 py-2 rounded-md text-black"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
          >
            Submit
          </button>
        </form>

        {/* 환영 메시지 */}
        {name && (
          <p className="text-xl text-center sm:text-left text-blue-600 dark:text-blue-400">
            👋 Welcome, {name}!
          </p>
        )}

        {/* 기존 내용 */}
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          {/* 버튼 2개는 그대로 유지 */}
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        {/* 푸터 링크들은 그대로 유지 */}
      </footer>
    </div>
  );
}
