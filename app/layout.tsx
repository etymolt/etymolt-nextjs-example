import "./globals.css";

export const metadata = {
  title: "Etymolt verdict — Next.js example",
  description: "Drop-in example wiring the @etymolt/sdk into a Next.js App Router page.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-50 text-neutral-900 antialiased">
        {children}
      </body>
    </html>
  );
}
