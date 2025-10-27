
// export const metadata = {
//   title: "Task Planner",
//   description: "Manage your tasks efficiently",
// };

import "./globals.css";
import ReactQueryProvider from "./providers/ReactQueryProvider";
import Navbar from "../components/navbar";
import ErrorBoundary from "../components/errorBoundary";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Server layout that mounts a client ReactQueryProvider boundary.
  return (
    <html lang="en">
      <body className="bg-[#f8fafc]">
        <ReactQueryProvider>
          <Navbar />
          <ErrorBoundary>
            <main className="min-h-screen">{children}</main>
          </ErrorBoundary>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
