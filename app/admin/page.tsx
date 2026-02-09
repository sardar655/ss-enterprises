<<<<<<< HEAD
"use client";

import { useState } from "react";

export default function Admin() {
  const [title, setTitle] = useState("Sardar Enterprises");
  const [tagline, setTagline] = useState("Digital Marketing & Web Solutions");

  return (
    <div style={{ padding: 40 }}>
      <h1>Admin Panel</h1>

      <label>Website Title</label><br />
      <input value={title} onChange={e => setTitle(e.target.value)} /><br /><br />

      <label>Tagline</label><br />
      <input value={tagline} onChange={e => setTagline(e.target.value)} /><br /><br />

      <button onClick={() => alert("Saved (demo only)")}>
        Save
      </button>

      <hr />

      <h3>Preview</h3>
      <h2>{title}</h2>
      <p>{tagline}</p>
    </div>
  );
}
=======
"use client";

import { useState } from "react";

export default function Admin() {
  const [title, setTitle] = useState("Sardar Enterprises");
  const [tagline, setTagline] = useState("Digital Marketing & Web Solutions");

  return (
    <div style={{ padding: 40 }}>
      <h1>Admin Panel</h1>

      <label>Website Title</label><br />
      <input value={title} onChange={e => setTitle(e.target.value)} /><br /><br />

      <label>Tagline</label><br />
      <input value={tagline} onChange={e => setTagline(e.target.value)} /><br /><br />

      <button onClick={() => alert("Saved (demo only)")}>
        Save
      </button>

      <hr />

      <h3>Preview</h3>
      <h2>{title}</h2>
      <p>{tagline}</p>
    </div>
  );
}
>>>>>>> 6b9e91fd479dd40132cb5355396ec0d10b37f0aa
