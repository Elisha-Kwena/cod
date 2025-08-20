// app/not-found.tsx (if exists)
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found - Coduit",
};

export function generateViewport() {
  return {
    themeColor: '#000000',
    width: 'device-width',
    initialScale: 1,
  }
}

export default function NotFound() {
  return (
    <div>
      <h1>Page Not Found</h1>
    </div>
  );
}