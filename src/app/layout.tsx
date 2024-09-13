import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ntokozo Gumede",
  description: "Created Ntokozo Gumede",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/logosaas.png" type="image/x-icon" />
      <body className="bg-gray-900 text-white antialiased">{children}</body>
    </html>
  );
}
