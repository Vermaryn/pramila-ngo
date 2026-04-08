import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16 relative">
      {/* Top Gradient Line */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-green-500 via-blue-500 to-green-500"></div>


      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-10">
        {/* === Left Side: NGO Info === */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold text-white mb-3">Healing Lives NGO</h2>
          <p className="text-sm leading-relaxed text-gray-400 mb-3">
            Empowering individuals affected by <strong>leprosy</strong> through
            healthcare, rehabilitation, and awareness. Together, we’re building
            a compassionate and stigma-free world.
          </p>
          <p className="text-sm italic text-gray-500">
            “Empathy in action brings true healing.”
          </p>
        </div>


        <div className="md:w-1/2 md:text-right">
          <h2 className="text-xl font-semibold text-white mb-3">Contact Us</h2>
          <p className="text-sm text-gray-400 mb-3">
            New Tehri Colony, Haridwar,Uttrakhand, India <br />
            <span className="block mt-1">
              Email:{" "}
              <a
                href="mailto:pehalekasha@gmail.com"
                className="text-green-400 hover:text-green-300 hover:underline transition"
              >
                pramilaekasha@gmail.com
              </a>
            </span>
            <span>Phone: +91 8191019111</span>
          </p>

          <div className="flex md:justify-end justify-start space-x-5 text-xl mt-4">
            <a href="#" aria-label="Facebook" className="hover:text-blue-500 transition"><FaFacebook /></a>
            <a href="#" aria-label="Twitter" className="hover:text-sky-400 transition"><FaTwitter /></a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-500 transition"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-400 transition"><FaLinkedin /></a>
          </div>
        </div>
      </div>


      <div className="mt-10 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between pt-4 text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-green-400 font-medium">Pramila ek asha</span>. All rights reserved.
          </p>
          <p className="mt-2 md:mt-0">
            Designed with 💚 by <span className="text-green-400">Pradeep Verma</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
