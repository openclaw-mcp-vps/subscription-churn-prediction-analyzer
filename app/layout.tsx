import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Churn Prediction Analyzer — Predict Who Cancels Next Month",
  description: "Analyzes usage patterns, support tickets, and billing data to identify at-risk subscribers before they churn."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="84b647bc-3b49-4c74-8092-95f39ebb73f1"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
