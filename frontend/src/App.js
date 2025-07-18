import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/submit", formData);
    setSubmitted(true);
  };

  return (
    <div className="container">
      {submitted ? (
        <div className="confirmation">
          ✅ Thank you! Your message has been sent.
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>User Details</h2>

          <input
            name="name"
            type="text"
            placeholder="Name"
            required
            onChange={handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            onChange={handleChange}
          />

          <button type="submit">
            <strong>Send</strong>
          </button>
        </form>
      )}
    </div>
  );
}

export default App;
