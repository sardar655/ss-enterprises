import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sardar Enterprises",
  description: "Digital Marketing Website",
  verification: {
    google: "v9WhtkRtfabDLmhVDl-JlY3gWwcOCPYYQoGYZffoL-U",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav style={{ padding: 15, background: "#0b2c4d" }}>
          <a href="/" style={{ color: "white", marginRight: 15 }}>Home</a>
          <a href="/about" style={{ color: "white", marginRight: 15 }}>About</a>
          <a href="/services" style={{ color: "white", marginRight: 15 }}>Services</a>
          <a href="/contact" style={{ color: "white" }}>Contact</a>
        </nav>

        {children}
      </body>
    </html>
  );
}
