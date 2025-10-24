"use client";
import "./globals.css";
import ReactQueryProvider from "./providers/ReactQueryProvider";
import React, { useState, useEffect } from "react";
import Welcome from "../components/welcome";
import Navbar from "../components/navbar";

// export const metadata = {
//   title: "Task Planner",
//   description: "Manage your tasks efficiently",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 2000); // show for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body className="bg-[#f8fafc]">
        {showWelcome ? (
          <Welcome />
        ) : (
          <ReactQueryProvider>
            <Navbar />
            <main className="min-h-screen">{children}</main>
          </ReactQueryProvider>
        )}
      </body>
    </html>
  );
}
