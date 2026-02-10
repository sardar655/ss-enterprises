export default function ProductsPage() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Our Products</h1>

      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>

        <div style={{ border: "1px solid #ccc", padding: 15, width: 250 }}>
          <h3>Bluetooth Speaker</h3>
          <p>Price: ₹999</p>
          <a
            href="https://wa.me/916301284479?text=I%20want%20Bluetooth%20Speaker"
            style={{ background: "#25D366", color: "white", padding: 10, display: "inline-block" }}
          >
            Order on WhatsApp
          </a>
        </div>

        <div style={{ border: "1px solid #ccc", padding: 15, width: 250 }}>
          <h3>Smart Watch</h3>
          <p>Price: ₹1499</p>
          <a
            href="https://wa.me/916301284479?text=I%20want%20Smart%20Watch"
            style={{ background: "#25D366", color: "white", padding: 10, display: "inline-block" }}
          >
            Order on WhatsApp
          </a>
        </div>

      </div>
    </div>
  );
}
