"use client";

import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState<"en" | "hi">("en");

  return (
    <div>

      {/* Language Buttons */}
      <div style={{ textAlign: "right", padding: 10 }}>
        <button onClick={() => setLang("en")}>English</button>
        <button onClick={() => setLang("hi")} style={{ marginLeft: 10 }}>
          हिंदी
        </button>
      </div>

      {/* HERO */}
      <section style={{ padding: 60, background: "#0b2c4d", color: "white", textAlign: "center" }}>
        <h1>Sardar Enterprises</h1>

        <p>
          {lang === "en"
            ? "Digital Marketing & Web Solutions"
            : "डिजिटल मार्केटिंग और वेब समाधान"}
        </p>

        <a href="/contact" style={{ background: "#25D366", padding: "10px 20px", color: "white", borderRadius: 5 }}>
          {lang === "en" ? "Contact Us" : "संपर्क करें"}
        </a>
      </section>

      {/* ABOUT */}
      <section style={{ padding: 40 }}>
        <h2>{lang === "en" ? "About Us" : "हमारे बारे में"}</h2>
        <p>
          {lang === "en"
            ? "Welcome to Sardar Enterprises – your trusted digital partner."
            : "Sardar Enterprises में आपका स्वागत है — आपका भरोसेमंद डिजिटल पार्टनर।"}
        </p>
      </section>

      {/* SERVICES */}
      <section style={{ padding: 40, background: "#f2f2f2" }}>
        <h2>{lang === "en" ? "Our Services" : "हमारी सेवाएं"}</h2>

        <ul>
          <li>{lang === "en" ? "Website Development" : "वेबसाइट डेवलपमेंट"}</li>
          <li>{lang === "en" ? "SEO Optimization" : "SEO ऑप्टिमाइजेशन"}</li>
          <li>{lang === "en" ? "Digital Marketing" : "डिजिटल मार्केटिंग"}</li>
          <li>{lang === "en" ? "Social Media Marketing" : "सोशल मीडिया मार्केटिंग"}</li>
          <li>{lang === "en" ? "Graphic Design" : "ग्राफिक डिजाइन"}</li>
          <li>{lang === "en" ? "Business Branding" : "बिज़नेस ब्रांडिंग"}</li>
        </ul>
      </section>
{/* PORTFOLIO */}
<section style={{ padding: 40 }}>
  <h2>{lang === "en" ? "Portfolio" : "हमारा काम"}</h2>

  <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>

    <div style={{ border: "1px solid #ccc", padding: 15, width: 250 }}>
      <h4>Business Website</h4>
      <p>Corporate website project</p>
    </div>

    <div style={{ border: "1px solid #ccc", padding: 15, width: 250 }}>
      <h4>E-Commerce Store</h4>
      <p>Online shopping website</p>
    </div>

    <div style={{ border: "1px solid #ccc", padding: 15, width: 250 }}>
      <h4>Digital Marketing</h4>
      <p>SEO + Ads campaign</p>
    </div>

  </div>
</section>

    </div>
  );
}
