import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers:{
          "Content-Type" : "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      console.log(data);
      alert("Message sent successfully!");

      setFormData({
        name:"" ,
        email:"",
        message:""
      })
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section
      id="contact"
      className="py-16 bg-gray-50 font-[Poppins]"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* === Heading === */}
        <h2 className="text-4xl font-pacifico text-green-700 mb-12 text-center">
          Contact Us
        </h2>

        {/* === Grid Layout === */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Details */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Get in Touch
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Have questions, want to volunteer, or support our cause? Reach out
              to us anytime — we’re here to connect, help, and guide.
            </p>

            <div className="space-y-4 text-[16px]">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-blue-600 text-xl" />
                <span className="text-gray-700">
                  New Tehri Colony, Haridwar,Uttrakhand, India
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-600 text-xl" />
                <span className="text-gray-700">+91 8191019111</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-600 text-xl" />
                <span className="text-gray-700">pramilaekasha@gmail.com</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-5 mt-8 text-2xl">
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 transition"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-600 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-pink-600 hover:text-pink-700 transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form 
            onSubmit={handleSubmit}

          className="bg-white p-8 rounded-2xl shadow-lg space-y-5 border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Send us a Message
            </h3>
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
            />
            <textarea
              rows="4"
              placeholder="Write your message..."
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition font-medium tracking-wide"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
