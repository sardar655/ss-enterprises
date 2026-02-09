import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sardar Enterprises",
  description: "Digital Marketing Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <<meta name="google-site-verification" content="v9WhtkRtfabDLmhVDl-JlY3gWwcOCPYYQoGYZffoL-U" />
      </head>

      <body>

        <nav style={{ padding: 15, background: "#0b2c4d" }}>
          <a href="/" style={{ color: "white", marginRight: 15 }}>Home</a>
          <a href="/about" style={{ color: "white", marginRight: 15 }}>About</a>
          <a href="/services" style={{ color: "white", marginRight: 15 }}>Services</a>
          <a href="/contact" style={{ color: "white" }}>Contact</a>
        </nav>

        {children}

        <a
          href="https://wa.me/6301284479"
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            background: "#25D366",
            color: "white",
            padding: "12px 20px",
            borderRadius: "30px",
            textDecoration: "none"
          }}
        >
          WhatsApp
        </a>

      </body>
    </html>
  );
}
