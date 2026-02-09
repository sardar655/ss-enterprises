export default function ContactPage() {
  return (
    <div style={{ padding: 40, maxWidth: 600, margin: "auto" }}>
      <h1>Contact Us</h1>

      <p>Get in touch with Sardar Enterprises</p>

      <form>
        <input
          type="text"
          placeholder="Your Name"
          style={{ width: "100%", padding: 10, marginBottom: 10 }}
        />

        <input
          type="email"
          placeholder="shaiksardar78600@gmail.com"
          style={{ width: "100%", padding: 10, marginBottom: 10 }}
        />

        <textarea
          placeholder="Your Message"
          style={{ width: "100%", padding: 10, marginBottom: 10 }}
          rows={5}
        />

        <button
          type="submit"
          style={{
            background: "#0b2c4d",
            color: "white",
            padding: "10px 20px",
            border: "none",
          }}
        >
          Send Message
        </button>
      </form>

      <hr style={{ margin: "30px 0" }} />

      <p>📞 Phone: +91 6301284479</p>
      <p>📧 Email: shaiksardar78600@gmail.com</p>
    </div>
  );
}
