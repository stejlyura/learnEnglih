"use client";

import React from "react";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="ru">
      <body className="bg-[#080C14] text-white flex items-center justify-center min-h-screen">
        <div className="text-center p-8">
          <h2 className="text-xl font-bold mb-4">Произошла ошибка</h2>
          <button
            onClick={() => reset()}
            className="px-4 py-2 bg-indigo-600 rounded-lg text-sm font-semibold"
          >
            Попробовать снова
          </button>
        </div>
      </body>
    </html>
  );
}
