import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try{
       await emailjs.send("service_9iey7v6", "template_e0uzcm9", {
            from_name: form.name,
            to_name: "Parth",
            from_email: form.email,
            to_email: "parth082006@gmail.com",
            message: form.message,
          },
        'p0HeQnmMI9PaHjHwo');
          setLoading(false)
          alert("Your message has been sent successfully")
          setForm({name: '', email: '', message: ''})
    }catch(error){
        console.error(error)
        setLoading(false)
        alert("There was an error sending your message")
    }

  };

  return (
    <section className="c-space my-20" id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal background"
          className="absolute inset-0 min-h-screen"
        />
        <div className="contact-container">
          <h3 className="head-text">Let's Talk</h3>
          <p className="text-lg text-white-600 mt-3">
            If you have a project in mind or just want to chat, feel free to
            send me a message.
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="field-input"
                required
                placeholder="John Doe"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="field-input"
                required
                placeholder="johndoe@gmail.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Your Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="field-input"
                required
                rows={5}
                placeholder="Hi, I wanna give you a job..."
              />
            </label>
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            <img
              src="/assets/arrow-up.png"
              alt="arrow up"
              className="field-btn_arrow"
            />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
