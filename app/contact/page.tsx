export default function ContactPage() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Contact Us</h1>

      <p>Get in touch with Sardar Enterprises</p>

      <form>
        <input placeholder="Your Name" /><br /><br />
        <input placeholder="Your Email" /><br /><br />
        <textarea placeholder="Your Message"></textarea><br /><br />

        <button>Send Message</button>
      </form>

      <p>📞 Phone: +91XXXXXXXXXX</p>
      <p>📧 Email: yourmail@gmail.com</p>
    </div>
  );
}
